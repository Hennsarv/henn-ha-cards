function hennEnsureSliderStyles() {
    if (document.getElementById("henn-slider-styles")) return;

    const style = document.createElement("style");
    style.id = "henn-slider-styles";
    style.textContent = `
        .henn-slider-root {
            display: grid;
            gap: 6px;
            padding: 8px 0;
        }

        .henn-slider-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--primary-text-color);
            font-size: 14px;
        }

        .henn-slider-track-wrap {
            position: relative;
            height: 34px;
            outline: none;
            cursor: pointer;
        }

        .henn-slider-track {
            position: absolute;
            left: 0;
            right: 0;
            top: 13px;
            height: 10px;
            border-radius: 999px;
            background: var(--divider-color, #ddd);
            overflow: hidden;
        }

        .henn-slider-fill {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 0%;
            background: var(--primary-color, #03a9f4);
        }

        .henn-slider-minmax {
            position: absolute;
            left: 0;
            right: 0;
            top: 12px;
            display: flex;
            justify-content: space-between;
            pointer-events: none;
            font-size: 10px;
            line-height: 10px;
            color: var(--secondary-text-color);
            opacity: .75;
            padding: 0 8px;
            box-sizing: border-box;
        }

        .henn-slider-fill .henn-slider-minmax {
            color: var(--text-primary-color, white);
        }

        .henn-slider-thumb {
            position: absolute;
            top: 10px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--primary-color, #03a9f4);
            border: 2px solid var(--card-background-color, white);
            box-shadow: 0 1px 3px rgba(0,0,0,.35);
            transform: translateX(-50%);
            pointer-events: none;
        }

        .henn-slider-track-wrap:focus .henn-slider-thumb {
            box-shadow: 0 0 0 4px rgba(3,169,244,.22);
        }
    `;

    document.head.appendChild(style);
}

export function hennCreateSingleSlider(editor, key, label, value, min, max, step = 1, unit = "") {
    hennEnsureSliderStyles();

    const wrapper = document.createElement("div");
    wrapper.className = "henn-slider-root";

    let currentValue = normalize(value ?? min);

    wrapper.innerHTML = `
        <div class="henn-slider-header">
            <div><span>${label}</span> <b class="henn-slider-value">${format(currentValue)}</b></div>
        </div>

        <div class="henn-slider-track-wrap"
             tabindex="0"
             role="slider"
             aria-label="${label}"
             aria-valuemin="${min}"
             aria-valuemax="${max}"
             aria-valuenow="${currentValue}">
            <div class="henn-slider-track">
                <div class="henn-slider-fill"></div>
            </div>

            <div class="henn-slider-minmax">
                <span>${format(min)}</span>
                <span>${format(max)}</span>
            </div>

            <div class="henn-slider-thumb"></div>
        </div>
    `;

    const trackWrap = wrapper.querySelector(".henn-slider-track-wrap");
    const valueLabel = wrapper.querySelector(".henn-slider-value");
    const fill = wrapper.querySelector(".henn-slider-fill");
    const thumb = wrapper.querySelector(".henn-slider-thumb");

    let dragging = false;

    updateUi();

    trackWrap.addEventListener("pointerdown", ev => {
        ev.preventDefault();
        trackWrap.focus();

        dragging = true;
        trackWrap.setPointerCapture(ev.pointerId);
        setFromPointer(ev, false);
    });

    trackWrap.addEventListener("pointermove", ev => {
        if (!dragging) return;
        setFromPointer(ev, false);
    });

    trackWrap.addEventListener("pointerup", ev => {
        if (!dragging) return;

        dragging = false;
        trackWrap.releasePointerCapture(ev.pointerId);
        setFromPointer(ev, true);
    });

    trackWrap.addEventListener("keydown", ev => {
        let delta = 0;

        if (ev.key === "ArrowRight" || ev.key === "ArrowUp") {
            delta = ev.shiftKey ? step * 5 : step;
        } else if (ev.key === "ArrowLeft" || ev.key === "ArrowDown") {
            delta = ev.shiftKey ? -step * 5 : -step;
        } else {
            return;
        }

        ev.preventDefault();

        currentValue = normalize(currentValue + delta);
        updateUi();
        commit();
    });

    function setFromPointer(ev, doCommit) {
        const rect = trackWrap.getBoundingClientRect();
        const ratio = clamp((ev.clientX - rect.left) / rect.width, 0, 1);
        const raw = min + ratio * (max - min);

        currentValue = normalize(raw);
        updateUi();

        if (doCommit) commit();
    }

    function updateUi() {
        const ratio = (currentValue - min) / (max - min);
        const pct = clamp(ratio * 100, 0, 100);

        valueLabel.textContent = format(currentValue);
        fill.style.width = `${pct}%`;
        thumb.style.left = `${pct}%`;

        trackWrap.setAttribute("aria-valuenow", currentValue);
    }

    function commit() {
        editor._valueChanged(key, currentValue);
    }

    function normalize(v) {
        const rounded = Math.round(v / step) * step;
        return clamp(roundNice(rounded), min, max);
    }

    function roundNice(v) {
        return Number(v.toFixed(6));
    }

    function format(v) {
        return `${v}${unit}`;
    }

    function clamp(v, lo, hi) {
        return Math.min(hi, Math.max(lo, v));
    }

    return wrapper;
}