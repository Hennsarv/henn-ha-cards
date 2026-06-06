export const HENN_CSS_COLORS = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#008000",
    blue: "#0000ff",
    deepskyblue: "#00bfff",
    dodgerblue: "#1e90ff",
    steelblue: "#4682b4",
    royalblue: "#4169e1",
    orange: "#ffa500",
    gold: "#ffd700",
    crimson: "#dc143c",
    purple: "#800080"
};

export function hennColorToHex(color) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = color || "";
    return ctx.fillStyle || "#000000";
}

export function hennHexToColorName(hex) {
    if (!hex) return "";

    const h = hex.toLowerCase();

    for (const [name, value] of Object.entries(HENN_CSS_COLORS)) {
        if (value.toLowerCase() === h) {
            return name;
        }
    }

    return "";
}

export function hennCreateColorField(editor, key, label, value) {
    const wrapper = document.createElement("div");
    wrapper.style.display = "grid";
    wrapper.style.gap = "6px";

    const currentValue = value || "deepskyblue";
    const currentHex = hennColorToHex(currentValue);

    wrapper.innerHTML = `
        <div>${label}</div>

        <div style="display:grid; grid-template-columns: 1fr 70px; gap:8px; align-items:start;">
            <div style="position:relative;">
                <input class="henn-color-text"
                       value="${currentValue}"
                       placeholder="color name or #hex"
                       style="width:100%; box-sizing:border-box;">

                <div class="henn-color-list"
                     style="
                        display:none;
                        position:absolute;
                        z-index:1000;
                        background:var(--card-background-color, white);
                        color:var(--primary-text-color, black);
                        border:1px solid var(--divider-color, #ccc);
                        max-height:220px;
                        overflow:auto;
                        width:100%;
                        box-sizing:border-box;
                     ">
                </div>
            </div>

            <input class="henn-color-picker"
                   type="color"
                   value="${currentHex}"
                   style="width:70px; height:34px;">
        </div>
    `;

    const text = wrapper.querySelector(".henn-color-text");
    const list = wrapper.querySelector(".henn-color-list");
    const picker = wrapper.querySelector(".henn-color-picker");

    function renderList(filter) {
        const f = (filter || "").toLowerCase();

        const matches = Object.entries(HENN_CSS_COLORS)
            .filter(([name]) => name.includes(f))
            .slice(0, 40);

        list.innerHTML = matches.map(([name, hex]) => `
            <div data-color="${name}"
                 style="
                    padding:5px 8px;
                    cursor:pointer;
                    display:flex;
                    gap:8px;
                    align-items:center;
                 ">
                <span style="
                    display:inline-block;
                    width:14px;
                    height:14px;
                    background:${hex};
                    border:1px solid #888;
                    flex:0 0 auto;
                "></span>
                <span>${name}</span>
                <span style="margin-left:auto; opacity:.65;">${hex}</span>
            </div>
        `).join("") || `<div style="padding:5px 8px; opacity:.65;">No matches</div>`;

        list.style.display = "block";

        list.querySelectorAll("[data-color]").forEach(item => {
            item.addEventListener("mousedown", () => {
                const name = item.dataset.color;
                text.value = name;
                picker.value = HENN_CSS_COLORS[name];
                list.style.display = "none";
                editor._valueChanged(key, name);
            });
        });
    }

    text.addEventListener("focus", () => {
        renderList(text.value);
    });

    text.addEventListener("input", () => {
        renderList(text.value);
    });

    text.addEventListener("change", () => {
        const val = text.value.trim();
        picker.value = hennColorToHex(val);
        editor._valueChanged(key, val);
    });

    picker.addEventListener("input", () => {
        const hex = picker.value.toLowerCase();
        const name = hennHexToColorName(hex);

        text.value = name || hex;
        editor._valueChanged(key, name || hex);
    });

    document.addEventListener("click", ev => {
        if (!wrapper.contains(ev.target)) {
            list.style.display = "none";
        }
    });

    return wrapper;
}

