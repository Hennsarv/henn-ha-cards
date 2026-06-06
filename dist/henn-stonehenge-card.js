class HennStonehengeCard extends HTMLElement {
    setConfig(config) {
        if (!config.value_entity) throw new Error("value_entity is required");

        this.config = {
            value_entity: null,

            bucketing: "day",        // day | month | year
            bucket_size: "1h",       // 5m, 1h, 1d
            history_period: "1d",

            diagram_type: "color",   // color | bar | line

            lower_radius: 30,
            upper_radius: 90,

            color: "orange",
            min_opacity: 0.15,
            max_opacity: 0.9,
            line_width: 2,

            lower: { stroke: 1, color: "white", radius: null },
            upper: { stroke: 1, color: "white", radius: null },

            bar: {
                series_count: 1,
                series_index: 0,
                gap: 0,

                margin_left: 0,
                margin_right: 0
            },

            line: {
                show: true,
                color: null,
                stroke: 2,
                smooth: false
            },

            fill: {
                show: true,
                color: null,
                opacity: null
            },

            ticks: {
                show: true,
                tight: false,

                radius: 98,
                font_size: 5,
                color: "white",

                inner_line: {
                    stroke: 0,
                    color: "white",
                    radius: 93
                },

                outer_line: {
                    stroke: 0,
                    color: "white",
                    radius: 103
                },

                minor: {
                    stroke: 0.5,
                    color: "white",
                    radius: 96,
                    length: 2
                }
            },

            label: {
                show: false,
                position: "center",    // center | top | bottom
                text: "",
                font_size: 7,
                color: "white",
                margin: 12
            },



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
        const start = this.periodStart(end, c.history_period);

        const url =
            `history/period/${start.toISOString()}` +
            `?end_time=${encodeURIComponent(end.toISOString())}` +
            `&filter_entity_id=${encodeURIComponent(c.value_entity)}`;

        const data = await this._hass.callApi("GET", url);
        const rows = data.find(x => x[0]?.entity_id === c.value_entity) || [];

        this._buckets = this.calculateBuckets(rows);
        this.render();
    }

    barAngles(bucketStart, step) {
        const bar = this.config.bar || {};

        const count = Math.max(1, Number(bar.series_count || 1));
        const index = Math.max(0, Math.min(count - 1, Number(bar.series_index || 0)));
        const gap = Math.max(0, Number(bar.gap || 0));

        if (count > 1 || gap > 0) {
            const usable = Math.max(0, step - gap * (count + 1));
            const width = usable / count;

            const a1 = bucketStart + gap + index * (width + gap);
            const a2 = a1 + width;

            return [a1, a2];
        }

        const ml = Math.max(0, Number(bar.margin_left || 0));
        const mr = Math.max(0, Number(bar.margin_right || 0));

        const a1 = bucketStart + step * ml / 100;
        const a2 = bucketStart + step - step * mr / 100;

        return [a1, Math.max(a1, a2)];
    }

    periodStart(end, period) {
        const d = new Date(end);
        const p = String(period || "1d");

        if (p === "day") d.setDate(d.getDate() - 1);
        else if (p === "week") d.setDate(d.getDate() - 7);
        else if (p === "month") d.setDate(d.getDate() - 30);
        else if (p === "year") d.setDate(d.getDate() - 365);
        else if (p.endsWith("m")) d.setMinutes(d.getMinutes() - parseInt(p));
        else if (p.endsWith("h")) d.setHours(d.getHours() - parseInt(p));
        else if (p.endsWith("d")) d.setDate(d.getDate() - parseInt(p));
        else d.setDate(d.getDate() - 1);

        return d;
    }

    number(v) {
        if (v === undefined || v === null) return NaN;
        return parseFloat(String(v).replace(",", "."));
    }

    bucketSizeMinutes() {
        const s = String(this.config.bucket_size || "1h");
        if (s.endsWith("m")) return parseInt(s);
        if (s.endsWith("h")) return parseInt(s) * 60;
        if (s.endsWith("d")) return parseInt(s) * 24 * 60;
        return Number(s) || 60;
    }

    bucketCount() {
        const b = this.config.bucketing;
        const size = this.bucketSizeMinutes();

        if (b === "day") return Math.ceil(24 * 60 / size);
        if (b === "month") return Math.ceil(31 * 24 * 60 / size);
        if (b === "year") return 360;

        return Math.ceil(24 * 60 / size);
    }

    bucketIndex(date) {
        const b = this.config.bucketing;
        const size = this.bucketSizeMinutes();

        if (b === "day") {
            const m = date.getHours() * 60 + date.getMinutes();
            return Math.floor(m / size);
        }

        if (b === "month") {
            const m =
                (date.getDate() - 1) * 24 * 60 +
                date.getHours() * 60 +
                date.getMinutes();

            return Math.floor(m / size);
        }

        if (b === "year") {
            const start = new Date(date.getFullYear(), 0, 1);
            const day = Math.floor((date - start) / 86400000);
            return Math.min(359, Math.floor(day * 360 / 365));
        }

        return 0;
    }

    calculateBuckets(rows) {
        const count = this.bucketCount();
        const sums = Array(count).fill(0);
        const nums = Array(count).fill(0);

        for (const r of rows) {
            const v = this.number(r.state);
            if (isNaN(v)) continue;

            const d = new Date(r.last_changed);
            const i = this.bucketIndex(d);

            if (i >= 0 && i < count) {
                sums[i] += v;
                nums[i]++;
            }
        }

        return sums.map((sum, i) => ({
            index: i,
            value: nums[i] ? sum / nums[i] : null
        }));
    }

    render() {
        const c = this.config;
        const buckets = this._buckets || [];
        const values = buckets.map(b => b.value).filter(v => v !== null && !isNaN(v));

        const min = values.length ? Math.min(...values) : 0;
        const max = values.length ? Math.max(...values) : 1;
        const span = max - min || 1;

        let lower = Number(c.lower_radius);
        let upper = Number(c.upper_radius);

        // Color-diagrammil on need füüsilised rööpad.
        // Bar/line puhul on need väärtusskaala otsad ja järjekorda EI muuda.
        if (c.diagram_type === "color" && lower > upper) {
            [lower, upper] = [upper, lower];
        }

        const body =
            c.diagram_type === "bar" ? this.renderBars(buckets, min, span, lower, upper) :
                c.diagram_type === "line" ? this.renderLine(buckets, min, span, lower, upper) :
                    this.renderColor(buckets, min, span, lower, upper);

        const rails = this.renderRails(lower, upper);
        const ticks = this.renderTicks();
        const label = this.renderLabel();

        this.innerHTML = `
      <ha-card style="background:transparent;box-shadow:none;border:none;margin:0;padding:0;">
        <svg viewBox="-50 -50 200 200"
             style="width:100%;height:100%;display:block;overflow:visible;">
          ${body}
          ${rails}
          ${ticks}
          ${label}
        </svg>
      </ha-card>
    `;
    }

    norm(v, min, span) {
        if (v === null || isNaN(v)) return 0;
        return (v - min) / span;
    }

    valueRadius(p, lower, upper) {
        return lower + p * (upper - lower);
    }

    renderColor(buckets, min, span, lower, upper) {
        const c = this.config;
        const count = buckets.length || 1;
        const step = 360 / count;

        return buckets.map((b, i) => {
            if (b.value === null) return "";

            const p = this.norm(b.value, min, span);
            const opacity =
                Number(c.min_opacity) +
                p * (Number(c.max_opacity) - Number(c.min_opacity));

            return `<path d="${this.ringSectorPath(50, 50, lower, upper, i * step, (i + 1) * step)}"
                    fill="${c.color}"
                    fill-opacity="${opacity}"></path>`;
        }).join("");
    }

    renderBars(buckets, min, span, lower, upper) {
        const c = this.config;
        const count = buckets.length || 1;
        const step = 360 / count;

        return buckets.map((b, i) => {
            if (b.value === null) return "";

            const p = this.norm(b.value, min, span);
            const r = this.valueRadius(p, lower, upper);

            const r1 = Math.min(lower, r);
            const r2 = Math.max(lower, r);

            const [a1, a2] = this.barAngles(i * step, step);

            const fill = c.fill || {};
            const line = c.line || {};

            const fillShow = fill.show !== false;
            const lineShow = line.show === true || Number(line.stroke || 0) > 0;

            const fillColor = fill.color || c.color;
            const fillOpacity = fill.opacity ?? c.max_opacity;

            const strokeColor = line.color || c.color;
            const strokeWidth = line.stroke ?? 0;

            return `<path d="${this.ringSectorPath(50, 50, r1, r2, a1, a2)}"
              fill="${fillShow ? fillColor : "none"}"
              fill-opacity="${fillShow ? fillOpacity : 0}"
              stroke="${lineShow ? strokeColor : "none"}"
              stroke-width="${lineShow ? strokeWidth : 0}"></path>`;

            // return `<path d="${this.ringSectorPath(50, 50, r1, r2, i * step, (i + 1) * step)}"
            //         fill="${c.color}"
            //         fill-opacity="${c.max_opacity}"></path>`;
        }).join("");
    }

    renderLine(buckets, min, span, lower, upper) {
        const c = this.config;
        const line = c.line || {};
        const fill = c.fill || {};

        const count = buckets.length || 1;
        const step = 360 / count;

        const points = buckets
            .map((b, i) => {
                if (b.value === null) return null;
                const p = this.norm(b.value, min, span);
                const r = this.valueRadius(p, lower, upper);
                return this.polar(50, 50, r, i * step);
            })
            .filter(Boolean);

        if (!points.length) return "";

        const strokeShow = line.show !== false;
        const strokeColor = line.color || c.color;
        const strokeWidth = Number(line.stroke ?? c.line_width ?? 2);

        const fillShow = fill.show === true;
        const fillColor = fill.color || c.color;
        const fillOpacity = fill.opacity ?? 0.2;

        const dLine = this.pathFromPoints(points, line.smooth === true, true);

        let result = "";

        if (fillShow) {
            const baseRadius = lower;
            const fillPoints = [];

            for (let i = 0; i < buckets.length; i++) {
                const angle = i * step;
                fillPoints.push(this.polar(50, 50, baseRadius, angle));
            }

            const outerPath = this.pathFromPoints(points, line.smooth === true, false);
            const innerPath = this.pathFromPoints(fillPoints.reverse(), line.smooth === true, false);

            const dFill = `${outerPath} L ${fillPoints[0].x} ${fillPoints[0].y} ${innerPath.replace(/^M [^LQCS]+/, "")} Z`;

            result += `<path d="${dFill}"
                     fill="${fillColor}"
                     fill-opacity="${fillOpacity}"
                     stroke="none"></path>`;
        }

        if (strokeShow && strokeWidth > 0) {
            result += `<path d="${dLine}"
                     fill="none"
                     stroke="${strokeColor}"
                     stroke-width="${strokeWidth}"
                     stroke-linejoin="round"
                     stroke-linecap="round"></path>`;
        }

        return result;
    }

    pathFromPoints(points, smooth, close) {
        if (!points.length) return "";

        if (!smooth || points.length < 3) {
            return points
                .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
                .join(" ") + (close ? " Z" : "");
        }

        let d = `M ${points[0].x} ${points[0].y}`;

        for (let i = 0; i < points.length; i++) {
            const p0 = points[(i - 1 + points.length) % points.length];
            const p1 = points[i];
            const p2 = points[(i + 1) % points.length];
            const p3 = points[(i + 2) % points.length];

            const cp1 = {
                x: p1.x + (p2.x - p0.x) / 6,
                y: p1.y + (p2.y - p0.y) / 6
            };

            const cp2 = {
                x: p2.x - (p3.x - p1.x) / 6,
                y: p2.y - (p3.y - p1.y) / 6
            };

            d += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${p2.x} ${p2.y}`;
        }

        return d + (close ? " Z" : "");
    }

    renderLineOld(buckets, min, span, lower, upper) {
        const c = this.config;
        const count = buckets.length || 1;
        const step = 360 / count;

        const points = buckets
            .map((b, i) => {
                if (b.value === null) return null;
                const p = this.norm(b.value, min, span);
                const r = this.valueRadius(p, lower, upper);
                return this.polar(50, 50, r, i * step);
            })
            .filter(Boolean);

        if (!points.length) return "";

        const d = points
            .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
            .join(" ") + " Z";

        return `<path d="${d}"
                  fill="none"
                  stroke="${c.color}"
                  stroke-width="${c.line_width}"
                  stroke-linejoin="round"
                  stroke-linecap="round"></path>`;
    }

    renderRails(lower, upper) {
        const c = this.config;
        const lowerCfg = c.lower || {};
        const upperCfg = c.upper || {};

        let s = "";

        const lowerRadius = lowerCfg.radius ?? lower;
        const upperRadius = upperCfg.radius ?? upper;

        if (Number(lowerCfg.stroke) > 0) {
            s += this.circleLine(lowerRadius, lowerCfg.color || "white", lowerCfg.stroke);
        }

        if (Number(upperCfg.stroke) > 0) {
            s += this.circleLine(upperRadius, upperCfg.color || "white", upperCfg.stroke);
        }

        return s;
    }

    renderTicks() {
        const t = this.config.ticks || {};
        if (!t.show) return "";

        let s = "";

        if (t.inner_line && Number(t.inner_line.stroke) > 0) {
            s += this.circleLine(
                t.inner_line.radius,
                t.inner_line.color || t.color || "white",
                t.inner_line.stroke
            );
        }

        if (t.outer_line && Number(t.outer_line.stroke) > 0) {
            s += this.circleLine(
                t.outer_line.radius,
                t.outer_line.color || t.color || "white",
                t.outer_line.stroke
            );
        }

        const b = this.config.bucketing;

        if (b === "day") s += this.renderDayTicks(t);
        else if (b === "month") s += this.renderMonthTicks(t);
        else if (b === "year") s += this.renderYearTicks(t);

        return s;
    }

    renderDayTicks(t) {
        let s = "";
        const labelHours = [0, 3, 6, 9, 12, 15, 18, 21];

        for (const h of labelHours) {
            s += this.textAt(String(h).padStart(2, "0"), h * 15, t.radius, t.font_size, t.color);
        }

        if (t.tight) {
            for (let h = 0; h < 24; h++) {
                if (labelHours.includes(h)) continue;
                s += this.minorTick(h * 15, t);
            }
        }

        return s;
    }

    renderMonthTicks(t) {
        let s = "";
        const labelDays = [5, 10, 15, 20, 25, 30];

        for (const d of labelDays) {
            s += this.textAt(String(d), (d - 1) * 360 / 31, t.radius, t.font_size, t.color);
        }

        if (t.tight) {
            for (let d = 1; d <= 31; d++) {
                if (labelDays.includes(d)) continue;
                s += this.minorTick((d - 1) * 360 / 31, t);
            }
        }

        return s;
    }

    renderYearTicks(t) {
        const names = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
        let s = "";

        for (let i = 0; i < 12; i++) {
            s += this.textAt(names[i], i * 30, t.radius, t.font_size, t.color);
        }

        if (t.tight) {
            for (let i = 0; i < 12; i++) {
                s += this.minorTick(i * 30 + 10, t);
                s += this.minorTick(i * 30 + 20, t);
            }
        }

        return s;
    }

    minorTick(angle, t) {
        const m = t.minor || {};
        const radius = Number(m.radius ?? t.radius);
        const length = Number(m.length ?? 2);
        const stroke = Number(m.stroke ?? 0.5);
        const color = m.color || t.color || "white";

        if (stroke <= 0 || length <= 0) return "";

        return this.tickLine(angle, radius - length / 2, radius + length / 2, color, stroke);
    }

    renderLabel() {
        const l = this.config.label || {};
        if (!l.show || !l.text) return "";

        const lines = String(l.text).split("\n");
        const size = Number(l.font_size || 7);
        const margin = Number(l.margin || 12);

        let y;

        if (l.position === "top") y = margin;
        else if (l.position === "bottom") y = 100 - margin;
        else y = 50;

        const startY = y - ((lines.length - 1) * size * 0.6);

        return lines.map((line, i) => `
      <text x="50" y="${startY + i * size * 1.2}"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="${size}"
            fill="${l.color || "white"}">${line}</text>
    `).join("");
    }

    circleLine(radius, color, stroke) {
        return `<circle cx="50" cy="50" r="${radius}"
                    fill="none"
                    stroke="${color}"
                    stroke-width="${stroke}"></circle>`;
    }

    textAt(text, angle, radius, size, color) {
        const p = this.polar(50, 50, Number(radius), angle);
        return `<text x="${p.x}" y="${p.y}"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  font-size="${size}"
                  fill="${color}">${text}</text>`;
    }

    tickLine(angle, r1, r2, color, width) {
        const p1 = this.polar(50, 50, r1, angle);
        const p2 = this.polar(50, 50, r2, angle);

        return `<line x1="${p1.x}" y1="${p1.y}"
                  x2="${p2.x}" y2="${p2.y}"
                  stroke="${color}"
                  stroke-width="${width}"></line>`;
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

customElements.define("henn-stonehenge-card", HennStonehengeCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "henn-stonehenge-card",
    name: "Henn Stonehenge Card",
    description: "Circular normalized time-bucket chart: color, bar or line"
});
