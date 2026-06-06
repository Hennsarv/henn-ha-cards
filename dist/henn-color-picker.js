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