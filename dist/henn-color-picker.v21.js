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

    let currentIndex = -1;
    let currentMatches = [];

    const currentValue = value || "deepskyblue";
    const currentHex = hennColorToHex(currentValue);

    wrapper.innerHTML = `
    <div style="
        font-size: var(--mdc-typography-subtitle2-font-size, 14px);
        color: var(--secondary-text-color);
        margin-bottom: 2px;
    ">${label}</div>

    <div style="display:grid; grid-template-columns: 1fr 56px; gap:8px; align-items:start;">
        <div class="henn-color-combo" style="position:relative;">
            <input class="henn-color-text"
                   value="${currentValue}"
                   placeholder="type color name or #hex"
                   autocomplete="off"
                   style="
                        width:100%;
                        height:40px;
                        box-sizing:border-box;
                        padding:0 34px 0 12px;
                        border:1px solid var(--divider-color, #ccc);
                        border-radius:4px;
                        background:var(--card-background-color, white);
                        color:var(--primary-text-color, black);
                        font:inherit;
                        outline:none;
                   ">

            <span class="henn-color-arrow"
                  style="
                        position:absolute;
                        right:11px;
                        top:50%;
                        transform:translateY(-50%);
                        pointer-events:none;
                        color:var(--secondary-text-color);
                        font-size:14px;
                        line-height:1;
                  ">▼</span>

            <div class="henn-color-list"
                 style="
                    display:none;
                    position:absolute;
                    z-index:1000;
                    margin-top:4px;
                    background:var(--card-background-color, white);
                    color:var(--primary-text-color, black);
                    border:1px solid var(--divider-color, #ccc);
                    border-radius:4px;
                    box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0,0,0,.2));
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
               title="Pick color"
               style="
                    width:56px;
                    height:40px;
                    padding:2px;
                    box-sizing:border-box;
                    border:1px solid var(--divider-color, #ccc);
                    border-radius:4px;
                    background:var(--card-background-color, white);
                    cursor:pointer;
               ">
    </div>
`;
    const combo = wrapper.querySelector(".henn-color-combo");
    const text = wrapper.querySelector(".henn-color-text");
    const list = wrapper.querySelector(".henn-color-list");
    const picker = wrapper.querySelector(".henn-color-picker");

    function setPickerFromTextValue(val) {
        const hex = hennColorToHex(val);
        if (/^#[0-9a-f]{6}$/i.test(hex)) {
            picker.value = hex;
        }
    }

    function commitValue(val) {
        const clean = (val || "").trim();
        if (!clean) return;

        text.value = clean;
        setPickerFromTextValue(clean);
        closeList();
        editor._valueChanged(key, clean);
    }

    function commitName(name) {
        if (!name) return;

        text.value = name;
        picker.value = HENN_CSS_COLORS[name];
        closeList();
        editor._valueChanged(key, name);
    }

    function openList() {
        renderList(text.value);
        list.style.display = "block";
    }

    function closeList() {
        list.style.display = "none";
        currentIndex = -1;
    }

    function renderList(filter) {
        const f = (filter || "").trim().toLowerCase();

        currentMatches = Object.entries(HENN_CSS_COLORS)
            .filter(([name]) => !f || name.includes(f))
            .slice(0, 80);

        currentIndex = currentMatches.length ? 0 : -1;

        if (!currentMatches.length) {
            list.innerHTML = `<div style="padding:5px 8px; opacity:.65;">No matches</div>`;
            return;
        }

        list.innerHTML = currentMatches.map(([name, hex], index) => `
            <div data-color="${name}"
                 data-index="${index}"
                 style="
                    padding:5px 8px;
                    cursor:pointer;
                    display:flex;
                    gap:8px;
                    align-items:center;
                    background:${index === currentIndex ? "var(--secondary-background-color, #eee)" : "transparent"};
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
        `).join("");

        list.querySelectorAll("[data-color]").forEach(item => {
            item.addEventListener("mousedown", ev => {
                ev.preventDefault();
                ev.stopPropagation();

                commitName(item.dataset.color);
            });
        });
    }

    function refreshHighlight() {
        list.querySelectorAll("[data-index]").forEach(item => {
            const index = Number(item.dataset.index);
            item.style.background =
                index === currentIndex
                    ? "var(--secondary-background-color, #eee)"
                    : "transparent";
        });

        const active = list.querySelector(`[data-index="${currentIndex}"]`);
        if (active) {
            active.scrollIntoView({ block: "nearest" });
        }
    }

    combo.addEventListener("mousedown", ev => {
        ev.stopPropagation();
    });

    text.addEventListener("focus", () => {
        openList();
    });

    text.addEventListener("click", () => {
        openList();
    });

    text.addEventListener("input", () => {
        renderList(text.value);
        list.style.display = "block";

        // Ainult sünkroniseerib parempoolset pickerit, EI salvesta configut.
        setPickerFromTextValue(text.value);
    });

    text.addEventListener("keydown", ev => {
        if (ev.key === "ArrowDown") {
            ev.preventDefault();
            if (list.style.display !== "block") openList();
            if (!currentMatches.length) return;
            currentIndex = Math.min(currentIndex + 1, currentMatches.length - 1);
            refreshHighlight();
            return;
        }

        if (ev.key === "ArrowUp") {
            ev.preventDefault();
            if (list.style.display !== "block") openList();
            if (!currentMatches.length) return;
            currentIndex = Math.max(currentIndex - 1, 0);
            refreshHighlight();
            return;
        }

        if (ev.key === "Enter") {
            ev.preventDefault();

            if (list.style.display === "block" && currentIndex >= 0 && currentMatches[currentIndex]) {
                commitName(currentMatches[currentIndex][0]);
            } else {
                commitValue(text.value);
            }

            return;
        }

        if (ev.key === "Escape") {
            ev.preventDefault();
            closeList();
        }
    });

    text.addEventListener("blur", () => {
        // Ära salvesta bluriga. Blur ainult sulgeb.
        // Salvestamine toimub Enteriga, loendist valides või color picker change'iga.
        setTimeout(() => closeList(), 150);
    });

    picker.addEventListener("input", () => {
        // Ainult näita väärtust tekstiväljas, EI salvesta configut iga liigutuse peale.
        const hex = picker.value.toLowerCase();
        const name = hennHexToColorName(hex);
        text.value = name || hex;
    });

    picker.addEventListener("change", () => {
        const hex = picker.value.toLowerCase();
        const name = hennHexToColorName(hex);
        commitValue(name || hex);
    });

    document.addEventListener("mousedown", ev => {
        if (!wrapper.contains(ev.target)) {
            closeList();
        }
    });

    return wrapper;
}

