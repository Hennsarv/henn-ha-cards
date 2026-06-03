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

            const cardConfig = { ...layerConfig };
            delete cardConfig.style;

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
}

customElements.define("henn-first-card", HennFirstCard);
customElements.define("henn-second-card", HennSecondCard);
customElements.define("henn-layer-card", HennLayerCard);