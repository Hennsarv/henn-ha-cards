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

customElements.define("henn-first-card", HennFirstCard);