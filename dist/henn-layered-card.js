class HennLayeredCard extends HTMLElement {

    setConfig(config) {
        this.config = {
            globals: [],
            order: {
                reverse: false,
                nulls: "last"
            },
            layers: [],
            ...config
        };

        this.render();
    }

    async render() {

        this.innerHTML = `
            <style>
                .container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    min-height: 500px;
                }

                .layer {
                    position: absolute;
                    inset: 0;
                }
            </style>

            <div class="container"></div>
        `;

        const container = this.querySelector(".container");

        const helpers = await window.loadCardHelpers();

        this._cards = [];

        const layers = this.getOrderedLayers(this.config.layers || []);

        for (const layerConfig of layers) {

            const layerDiv = document.createElement("div");
            layerDiv.className = "layer";

            Object.assign(layerDiv.style, {
                position: "absolute",
                inset: "0",
                ...(layerConfig.style || {})
            });

            // const cardConfig = { ...layerConfig };
            // delete cardConfig.style;

            const rawConfig = { ...layerConfig };
            delete rawConfig.style;
            delete rawConfig.layer_seq;

            const cardConfig = this.resolveConfig(rawConfig);

            const card = helpers.createCardElement(cardConfig);

            if (this._hass) {
                card.hass = this._hass;
            }

            layerDiv.appendChild(card);
            container.appendChild(layerDiv);

            this._cards.push(card);
        }
    }

    getOrderedLayers(layers) {
        const reverse = this.config.order?.reverse === false;
        const nulls = this.config.order?.nulls || "last";

        return layers
            .map((layer, index) => ({ layer, index }))
            .sort((a, b) => {
                const aHasSeq = a.layer.layer_seq !== undefined && a.layer.layer_seq !== null;
                const bHasSeq = b.layer.layer_seq !== undefined && b.layer.layer_seq !== null;

                if (!aHasSeq && !bHasSeq) {
                    return a.index - b.index;
                }

                if (!aHasSeq) {
                    return nulls === "first" ? -1 : 1;
                }

                if (!bHasSeq) {
                    return nulls === "first" ? 1 : -1;
                }

                const diff = Number(a.layer.layer_seq) - Number(b.layer.layer_seq);

                if (diff !== 0) {
                    return reverse ? -diff : diff;
                }

                return a.index - b.index;
            })
            .map(x => x.layer);
    }

    set hass(hass) {

        this._hass = hass;

        if (!this._cards) {
            return;
        }

        for (const card of this._cards) {
            card.hass = hass;
        }
    }

    getCardSize() {
        return 6;
    }

    resolveConfig(config) {
        const clone = structuredClone(config);

        // 1. Uus üldine preprocessor:
        // teeb {@entity} ja {@@global} asendused kogu config-puus,
        // kaasa arvatud henn_resolve reeglite sees.
        this.resolveReferencesInPlace(clone);

        // 2. Vana deklaratiivne henn_resolve loogika
        const rules = clone.henn_resolve || [];
        delete clone.henn_resolve;

        for (const rule of rules) {
            const entity = this._hass?.states?.[rule.entity];
            if (!entity) continue;

            let value;

            if (rule.attribute) {
                value = entity.attributes?.[rule.attribute];
            } else {
                value = entity.state;
            }

            if (value === undefined || value === null) continue;

            if (rule.template) {
                value = this.applyTemplate(value, rule.template);
            }

            this.setPath(clone, rule.target, value);
        }

        return clone;
    }

    resolveReferencesInPlace(obj) {
        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                obj[i] = this.resolveReferencesInPlace(obj[i]);
            }
            return obj;
        }

        if (obj && typeof obj === "object") {
            for (const key of Object.keys(obj)) {
                obj[key] = this.resolveReferencesInPlace(obj[key]);
            }
            return obj;
        }

        if (typeof obj === "string") {
            return this.resolveReferenceString(obj);
        }

        return obj;
    }

    resolveReferenceString(text) {

        // kõigepealt globalid
        text = text.replace(/\{@@([^}]+)\}/g, (match, name) => {

            const value = this.getGlobalValue(name.trim());

            if (value === undefined || value === null) {
                return match;
            }

            return String(value);
        });

        // siis entity viited
        text = text.replace(/\{@([^}]+)\}/g, (match, ref) => {

            const value = this.getEntityReferenceValue(ref.trim());

            if (value === undefined || value === null) {
                return match;
            }

            return String(value);
        });

        return text;
    }

    getGlobalValue(name) {
        const globals = this.config?.globals || [];
        //console.log("GLOBALS=", globals);
        // Lihtkuju:
        // globals:
        //   test: testtext
        if (!Array.isArray(globals) && typeof globals === "object") {
            const item = globals[name];

            if (item === undefined || item === null) {
                return undefined;
            }

            if (typeof item === "object" && item.value_source) {
                return this.getEntityReferenceValue(item.value_source);
            }

            if (typeof item === "object" && item.value !== undefined) {
                return item.value;
            }

            return item;
        }

        // Pikk kuju:
        // globals:
        //   - name: test
        //     value: testtext
        for (const item of globals) {
            if (!item) continue;
            if (item.name !== name) continue;

            if (item.value_source) {
                return this.getEntityReferenceValue(item.value_source);
            }

            return item.value;
        }

        return undefined;
    }
    getEntityReferenceValue(ref) {

        const entity = this._hass?.states?.[ref];

        if (!entity) {
            return undefined;
        }

        return entity.state;
    }

    applyTemplate(value, template) {
        try {
            const fn = new Function("value", `
            value = Number(value);
            return (${template});
        `);

            return fn(value);
        }
        catch (e) {
            console.warn("henn-layer-card template error", e);
            return value;
        }
    }

    setPath(obj, path, value) {
        const parts = path.split(".");
        let current = obj;

        for (let i = 0; i < parts.length - 1; i++) {
            current = current[parts[i]];
            if (!current) return;
        }

        current[parts[parts.length - 1]] = value;
    }

}

customElements.define("henn-layered-card", HennLayeredCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "henn-layered-card",
    name: "Henn Layered Card",
    description: "Custom layered card containing multiple cards, stacked for Home Assistant"
});
