export function hennCreateSingleSlider(editor, key, label, value, min, max, step = 1, unit = "") {
    const wrapper = document.createElement("div");
    wrapper.style.display = "grid";
    wrapper.style.gap = "6px";
    wrapper.style.padding = "8px 0";

    let currentValue = normalize(value ?? min);

    wrapper.innerHTML = `
        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            color:var(--primary-text-color);
            font-size:14px;
        ">
            <div><span>${label}</span> <b class="henn-slider-value">${format(currentValue)}</b></div>
        </div>

        <div class="henn-slider-track-wrap"
             tabindex="0"
             role="slider"
             aria-label="${label}"
             aria-valuemin="${min}"
             aria-valuemax="${max}"
             aria-valuenow="${currentValue}"
             style="
                position:relative;
                height:40px;
                outline:none;
                cursor:pointer;
             ">
            <div class="henn-slider-track"
                 style="
                    position:absolute;
                    left:0;
                    right:0;
                    top:18px;
                    height:4px;
                    border-radius:999px;
                    background:var(--divider-color, #ddd);
                    overflow:hidden;
                 ">
                <div class="henn-slider-fill"
                     style="
                        position:absolute;
                        top:0;
                        bottom:0;
                        left:0;
                        width:0%;
                        background:var(--primary-color, #03a9f4);
                     ">
                </div>
            </div>

            <div class="henn-slider-minmax"
                 style="
                    position:absolute;
                    left:0;
                    right:0;
                    top:14px;
                    display:flex;
                    justify-content:space-between;
                    pointer-events:none;
                    font-size:10px;
                    color:var(--secondary-text-color);
                    opacity:.65;
                    padding:0 6px;
                    box-sizing:border-box;
                 ">
                <span>${format(min)}</span>
                <span>${format(max)}</span>
            </div>

            <div class="henn-slider-thumb"
                 style="
                    position:absolute;
                    top:11px;
                    width:20px;
                    height:20px;
                    border-radius:50%;
                    background:var(--primary-color, #03a9f4);
                    border:2px solid var(--card-background-color, white);
                    box-shadow:0 1px 4px rgba(0,0,0,.35);
                    transform:translateX(-50%);
                    pointer-events:none;
                 ">
            </div>
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

        if (doCommit) {
            commit();
        }
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