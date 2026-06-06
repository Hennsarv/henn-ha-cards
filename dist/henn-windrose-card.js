import {
    HENN_CSS_COLORS,
    hennColorToHex,
    hennHexToColorName,
    hennCreateColorField
} from "./henn-color-picker.js";

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

    static getConfigElement() {
        return document.createElement("henn-windrose-card-editor");
    }

    static getStubConfig() {
        return {
            type: "custom:henn-windrose-card",
            direction_entity: "",
            speed_entity: "",
            period: "30d",
            bucket_size: 5,
            inner_radius: 30,
            outer_radius: 50,
            rotation: 0,
            color: "deepskyblue",
            min_opacity: 0.05,
            max_opacity: 0.9
        };
    }
}

customElements.define("henn-windrose-card", HennWindRoseCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "henn-windrose-card",
    name: "Henn Wind Rose Card",
    description: "Transparent wind rose ring from wind direction and speed history"
});


class HennWindRoseCardEditor extends HTMLElement {
    set hass(hass) {
        this._hass = hass;
        this.render();
    }

    setConfig(config) {
        this._config = { ...config };
        this.render();
    }

    render() {
        if (!this._config) return;

        this.innerHTML = `
            <div style="display:grid; gap:14px;">
                <div id="direction_entity"></div>
                <div id="speed_entity"></div>

                ${this._selectField("period", "Period", this._config.period || "30d", [
            ["1d", "1 day"],
            ["7d", "7 days"],
            ["14d", "14 days"],
            ["30d", "30 days"],
            ["90d", "90 days"]
        ])}

                ${this._rangeField("bucket_size", "Bucket size", this._config.bucket_size ?? 5, 5, 30, 5)}
                ${this._rangeField("inner_radius", "Inner radius", this._config.inner_radius ?? 30, 0, 80, 5)}
                ${this._rangeField("outer_radius", "Outer radius", this._config.outer_radius ?? 50, 20, 100, 5)}
                ${this._rangeField("rotation", "Rotation", this._config.rotation ?? 0, -180, 180, 5)}
                <div id="color_field"></div>
                ${this._rangeField("min_opacity", "Min opacity", this._config.min_opacity ?? 0.05, 0, 1, 0.05)}
                ${this._rangeField("max_opacity", "Max opacity", this._config.max_opacity ?? 0.9, 0, 1, 0.05)}
            </div>
        `;
        this.querySelector("#color_field").appendChild(
            hennCreateColorField(
                this,
                "color",
                "Color",
                this._config.color || "blue"  // võtsin deepskyeblue maha, et näha
            )
        );

        customElements.whenDefined("ha-selector").then(() => {
            this._addEntityPicker("direction_entity", "Direction entity");
            this._addEntityPicker("speed_entity", "Speed entity");
        });

        this.querySelectorAll("input, select").forEach(el => {
            el.addEventListener("change", ev => {
                const key = ev.target.dataset.key;
                let value = ev.target.value;

                if (ev.target.type === "range" || ev.target.type === "number") {
                    value = Number(value);
                }

                this._valueChanged(key, value);
            });
        });
    }

    _addEntityPicker(key, label) {
        const host = this.querySelector(`#${key}`);
        if (!host || !this._hass) return;

        const selector = document.createElement("ha-selector");

        selector.hass = this._hass;
        selector.label = label;
        selector.value = this._config[key] || "";
        selector.selector = {
            entity: {
                domain: "sensor"
            }
        };

        selector.addEventListener("value-changed", ev => {
            this._valueChanged(key, ev.detail.value);
        });

        host.appendChild(selector);
    }

    _textField(key, label, value) {
        return `
            <label>
                <div>${label}</div>
                <input data-key="${key}" value="${value ?? ""}" style="width:100%;">
            </label>
        `;
    }

    _selectField(key, label, value, options) {
        return `
            <label>
                <div>${label}</div>
                <select data-key="${key}" style="width:100%;">
                    ${options.map(([v, t]) =>
            `<option value="${v}" ${v === value ? "selected" : ""}>${t}</option>`
        ).join("")}
                </select>
            </label>
        `;
    }

    _rangeField(key, label, value, min, max, step) {
        return `
            <label>
                <div>${label}: <b>${value}</b></div>
                <input
                    type="range"
                    data-key="${key}"
                    value="${value}"
                    min="${min}"
                    max="${max}"
                    step="${step}"
                    style="width:100%;">
            </label>
        `;
    }

    _valueChanged(key, value) {
        const newConfig = {
            ...this._config,
            [key]: value
        };

        this._config = newConfig;

        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: newConfig },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define("henn-windrose-card-editor", HennWindRoseCardEditor);
