class HennFirstCard extends HTMLElement {
    setConfig(config) {
        this.innerHTML = `
            <ha-card header="Hennu esimene kaart">
                <div style="padding:16px">
                    <p>Tere Henn!</p>
                    <p>Minu esimene Home Assistant uuendatud ilus kaart töötab.</p>
                </div>
            </ha-card>
        `;
    }

    getCardSize() {
        return 2;
    }
}
class HennSecondCard extends HTMLElement {
    setConfig(config) {
        this.innerHTML = `
            <ha-card header="Hennu teine kaart">
                <div style="padding:16px">
                    <p>Tere Henn!</p>
                    <p>Minu teine Home Assistant uuendatud ilus kaart töötab.</p>
                </div>
            </ha-card>
        `;
    }

    getCardSize() {
        return 2;
    }
}

class HennLayerCard extends HTMLElement {

    setConfig(config) {
        this.config = config;
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

        for (const layerConfig of (this.config.layers || [])) {

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

class HennWindRoseCard extends HTMLElement {
    setConfig(config) {
        if (!config.direction_entity) throw new Error("direction_entity is required");
        if (!config.speed_entity) throw new Error("speed_entity is required");

        this.config = {
            period: "1d",
            bucket_size: 5,
            inner_radius: 35,
            outer_radius: 50,
            rotation: 0,
            color: "deepskyblue",
            min_opacity: 0.05,
            max_opacity: 0.9,
            ...config
        };
    }

    set hass(hass) {
        this._hass = hass;
        if (!this._loaded) {
            this._loaded = true;
            this.loadHistory();
        }
    }

    getCardSize() {
        return 3;
    }

    async loadHistory() {
        const c = this.config;
        const end = new Date();
        const start = this.periodStart(end, c.period);

        const entities = `${c.direction_entity},${c.speed_entity}`;

        const url =
            `history/period/${start.toISOString()}` +
            `?end_time=${encodeURIComponent(end.toISOString())}` +
            `&filter_entity_id=${encodeURIComponent(entities)}`;

        const data = await this._hass.callApi("GET", url);

        const dirRows = data.find(x => x[0]?.entity_id === c.direction_entity) || [];
        const speedRows = data.find(x => x[0]?.entity_id === c.speed_entity) || [];

        this._buckets = this.calculateBuckets(dirRows, speedRows);
        this.render();
    }

    periodStart(end, period) {
        const d = new Date(end);

        if (period === "day" || period === "1d") d.setDate(d.getDate() - 1);
        else if (period === "week" || period === "7d") d.setDate(d.getDate() - 7);
        else if (period === "month" || period === "30d") d.setDate(d.getDate() - 30);
        else if (String(period).endsWith("d")) d.setDate(d.getDate() - parseInt(period));
        else d.setDate(d.getDate() - 1);

        return d;
    }

    number(v) {
        if (v === undefined || v === null) return NaN;
        return parseFloat(String(v).replace(",", "."));
    }

    calculateBuckets(dirRows, speedRows) {
        const bucketSize = Number(this.config.bucket_size);
        const bucketCount = Math.ceil(360 / bucketSize);
        const buckets = Array(bucketCount).fill(0);

        const dirs = dirRows
            .map(r => ({
                t: new Date(r.last_changed).getTime(),
                v: this.number(r.state)
            }))
            .filter(x => !isNaN(x.v));

        const speeds = speedRows
            .map(r => ({
                t: new Date(r.last_changed).getTime(),
                v: this.number(r.state)
            }))
            .filter(x => !isNaN(x.v));

        let di = 0;

        for (const s of speeds) {
            while (di + 1 < dirs.length && dirs[di + 1].t <= s.t) di++;

            let dir = dirs[di]?.v;
            if (isNaN(dir)) continue;

            dir = dir + Number(this.config.rotation);
            dir = ((dir % 360) + 360) % 360;

            const bucket = Math.floor(dir / bucketSize);
            buckets[bucket] += Math.max(0, s.v);
        }

        return buckets;
    }

    render() {
        const c = this.config;
        const buckets = this._buckets || [];
        const max = Math.max(...buckets, 0.0001);

        const inner = Math.max(0, Math.min(50, Number(c.inner_radius)));
        const outer = Math.max(inner, Math.min(100, Number(c.outer_radius)));
        const bucketSize = Number(c.bucket_size);

        const paths = buckets.map((sum, i) => {
            const a1 = i * bucketSize;
            const a2 = Math.min((i + 1) * bucketSize, 360);
            const value = sum / max;
            const opacity = Number(c.min_opacity) + value * (Number(c.max_opacity) - Number(c.min_opacity));

            return `
        <path
          d="${this.ringSectorPath(50, 50, inner, outer, a1, a2)}"
          fill="${c.color}"
          fill-opacity="${opacity}">
        </path>`;
        }).join("");

        this.innerHTML = `
      <ha-card style="background: transparent; box-shadow: none; border: none;">
        <svg viewBox="0 0 100 100" style="width:100%;height:100%;display:block;">
          ${paths}
        </svg>
      </ha-card>
    `;
    }

    polar(cx, cy, r, angleDeg) {
        const a = (angleDeg - 90) * Math.PI / 180;
        return {
            x: cx + r * Math.cos(a),
            y: cy + r * Math.sin(a)
        };
    }

    ringSectorPath(cx, cy, r1, r2, a1, a2) {
        const p1 = this.polar(cx, cy, r2, a1);
        const p2 = this.polar(cx, cy, r2, a2);
        const p3 = this.polar(cx, cy, r1, a2);
        const p4 = this.polar(cx, cy, r1, a1);

        const largeArc = (a2 - a1) > 180 ? 1 : 0;

        return [
            `M ${p1.x} ${p1.y}`,
            `A ${r2} ${r2} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
            `L ${p3.x} ${p3.y}`,
            `A ${r1} ${r1} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
            "Z"
        ].join(" ");
    }
}

customElements.define("henn-wind-rose-card", HennWindRoseCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "henn-wind-rose-card",
    name: "Henn Wind Rose Card",
    description: "Transparent wind rose ring from wind direction and speed history"
});

customElements.define("henn-first-card", HennFirstCard);
customElements.define("henn-second-card", HennSecondCard);
customElements.define("henn-layer-card", HennLayerCard);
customElements.define("henn-wind-rose-card", HennWindRoseCard);