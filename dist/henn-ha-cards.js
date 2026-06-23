const HENN_CARDS_VERSION = "1.0.28";
const HENN_VERSION = "v28";
console.info(
    `%c HENN HA CARDS %c v${HENN_CARDS_VERSION} `,
    "background:#87CEFA;color:black;font-weight:bold;padding:2px 8px;",
    "color:#87CEFA;font-weight:bold;"
);

const HENN_CSS_COLORS = {
    black: "#000000",
    silver: "#C0C0C0",
    gray: "#808080",
    grey: "#808080",
    white: "#FFFFFF",
    maroon: "#800000",
    red: "#FF0000",
    purple: "#800080",
    fuchsia: "#FF00FF",
    green: "#008000",
    lime: "#00FF00",
    olive: "#808000",
    yellow: "#FFFF00",
    navy: "#000080",
    blue: "#0000FF",
    teal: "#008080",
    aqua: "#00FFFF",
    darkblue: "#00008B",
    mediumblue: "#0000CD",
    darkgreen: "#006400",
    darkcyan: "#008B8B",
    deepskyblue: "#00BFFF",
    darkturquoise: "#00CED1",
    mediumspringgreen: "#00FA9A",
    springgreen: "#00FF7F",
    cyan: "#00FFFF",
    midnightblue: "#191970",
    dodgerblue: "#1E90FF",
    lightseagreen: "#20B2AA",
    forestgreen: "#228B22",
    seagreen: "#2E8B57",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    limegreen: "#32CD32",
    mediumseagreen: "#3CB371",
    turquoise: "#40E0D0",
    royalblue: "#4169E1",
    steelblue: "#4682B4",
    darkslateblue: "#483D8B",
    mediumturquoise: "#48D1CC",
    indigo: "#4B0082",
    darkolivegreen: "#556B2F",
    cadetblue: "#5F9EA0",
    cornflowerblue: "#6495ED",
    rebeccapurple: "#663399",
    mediumaquamarine: "#66CDAA",
    dimgray: "#696969",
    dimgrey: "#696969",
    slateblue: "#6A5ACD",
    olivedrab: "#6B8E23",
    slategray: "#708090",
    slategrey: "#708090",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    mediumslateblue: "#7B68EE",
    lawngreen: "#7CFC00",
    chartreuse: "#7FFF00",
    aquamarine: "#7FFFD4",
    skyblue: "#87CEEB",
    lightskyblue: "#87CEFA",
    blueviolet: "#8A2BE2",
    darkred: "#8B0000",
    darkmagenta: "#8B008B",
    saddlebrown: "#8B4513",
    darkseagreen: "#8FBC8F",
    lightgreen: "#90EE90",
    mediumpurple: "#9370DB",
    darkviolet: "#9400D3",
    palegreen: "#98FB98",
    darkorchid: "#9932CC",
    yellowgreen: "#9ACD32",
    sienna: "#A0522D",
    brown: "#A52A2A",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    lightblue: "#ADD8E6",
    greenyellow: "#ADFF2F",
    paleturquoise: "#AFEEEE",
    lightsteelblue: "#B0C4DE",
    powderblue: "#B0E0E6",
    firebrick: "#B22222",
    darkgoldenrod: "#B8860B",
    mediumorchid: "#BA55D3",
    rosybrown: "#BC8F8F",
    darkkhaki: "#BDB76B",
    mediumvioletred: "#C71585",
    indianred: "#CD5C5C",
    peru: "#CD853F",
    chocolate: "#D2691E",
    tan: "#D2B48C",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    thistle: "#D8BFD8",
    orchid: "#DA70D6",
    goldenrod: "#DAA520",
    palevioletred: "#DB7093",
    crimson: "#DC143C",
    gainsboro: "#DCDCDC",
    plum: "#DDA0DD",
    burlywood: "#DEB887",
    lightcyan: "#E0FFFF",
    lavender: "#E6E6FA",
    darksalmon: "#E9967A",
    violet: "#EE82EE",
    palegoldenrod: "#EEE8AA",
    lightcoral: "#F08080",
    khaki: "#F0E68C",
    aliceblue: "#F0F8FF",
    honeydew: "#F0FFF0",
    azure: "#F0FFFF",
    sandybrown: "#F4A460",
    wheat: "#F5DEB3",
    beige: "#F5F5DC",
    whitesmoke: "#F5F5F5",
    mintcream: "#F5FFFA",
    ghostwhite: "#F8F8FF",
    salmon: "#FA8072",
    antiquewhite: "#FAEBD7",
    linen: "#FAF0E6",
    lightgoldenrodyellow: "#FAFAD2",
    oldlace: "#FDF5E6",
    magenta: "#FF00FF",
    deeppink: "#FF1493",
    orangered: "#FF4500",
    tomato: "#FF6347",
    hotpink: "#FF69B4",
    coral: "#FF7F50",
    darkorange: "#FF8C00",
    lightsalmon: "#FFA07A",
    orange: "#FFA500",
    lightpink: "#FFB6C1",
    pink: "#FFC0CB",
    gold: "#FFD700",
    peachpuff: "#FFDAB9",
    navajowhite: "#FFDEAD",
    moccasin: "#FFE4B5",
    bisque: "#FFE4C4",
    mistyrose: "#FFE4E1",
    blanchedalmond: "#FFEBCD",
    papayawhip: "#FFEFD5",
    lavenderblush: "#FFF0F5",
    seashell: "#FFF5EE",
    cornsilk: "#FFF8DC",
    lemonchiffon: "#FFFACD",
    floralwhite: "#FFFAF0",
    snow: "#FFFAFA",
    lightyellow: "#FFFFE0",
    ivory: "#FFFFF0"
};

const HENN_CSS_COLORS2 = [
    ["#000000", "black"],
    ["#C0C0C0", "silver"],
    ["#808080", "gray"],
    ["#808080", "grey"],
    ["#FFFFFF", "white"],
    ["#800000", "maroon"],
    ["#FF0000", "red"],
    ["#800080", "purple"],
    ["#FF00FF", "fuchsia"],
    ["#008000", "green"],
    ["#00FF00", "lime"],
    ["#808000", "olive"],
    ["#FFFF00", "yellow"],
    ["#000080", "navy"],
    ["#0000FF", "blue"],
    ["#008080", "teal"],
    ["#00FFFF", "aqua"],
    ["#00008B", "darkblue"],
    ["#0000CD", "mediumblue"],
    ["#006400", "darkgreen"],
    ["#008B8B", "darkcyan"],
    ["#00BFFF", "deepskyblue"],
    ["#00CED1", "darkturquoise"],
    ["#00FA9A", "mediumspringgreen"],
    ["#00FF7F", "springgreen"],
    ["#00FFFF", "cyan"],
    ["#191970", "midnightblue"],
    ["#1E90FF", "dodgerblue"],
    ["#20B2AA", "lightseagreen"],
    ["#228B22", "forestgreen"],
    ["#2E8B57", "seagreen"],
    ["#2F4F4F", "darkslategray"],
    ["#2F4F4F", "darkslategrey"],
    ["#32CD32", "limegreen"],
    ["#3CB371", "mediumseagreen"],
    ["#40E0D0", "turquoise"],
    ["#4169E1", "royalblue"],
    ["#4682B4", "steelblue"],
    ["#483D8B", "darkslateblue"],
    ["#48D1CC", "mediumturquoise"],
    ["#4B0082", "indigo"],
    ["#556B2F", "darkolivegreen"],
    ["#5F9EA0", "cadetblue"],
    ["#6495ED", "cornflowerblue"],
    ["#663399", "rebeccapurple"],
    ["#66CDAA", "mediumaquamarine"],
    ["#696969", "dimgray"],
    ["#696969", "dimgrey"],
    ["#6A5ACD", "slateblue"],
    ["#6B8E23", "olivedrab"],
    ["#708090", "slategray"],
    ["#708090", "slategrey"],
    ["#778899", "lightslategray"],
    ["#778899", "lightslategrey"],
    ["#7B68EE", "mediumslateblue"],
    ["#7CFC00", "lawngreen"],
    ["#7FFF00", "chartreuse"],
    ["#7FFFD4", "aquamarine"],
    ["#87CEEB", "skyblue"],
    ["#87CEFA", "lightskyblue"],
    ["#8A2BE2", "blueviolet"],
    ["#8B0000", "darkred"],
    ["#8B008B", "darkmagenta"],
    ["#8B4513", "saddlebrown"],
    ["#8FBC8F", "darkseagreen"],
    ["#90EE90", "lightgreen"],
    ["#9370DB", "mediumpurple"],
    ["#9400D3", "darkviolet"],
    ["#98FB98", "palegreen"],
    ["#9932CC", "darkorchid"],
    ["#9ACD32", "yellowgreen"],
    ["#A0522D", "sienna"],
    ["#A52A2A", "brown"],
    ["#A9A9A9", "darkgray"],
    ["#A9A9A9", "darkgrey"],
    ["#ADD8E6", "lightblue"],
    ["#ADFF2F", "greenyellow"],
    ["#AFEEEE", "paleturquoise"],
    ["#B0C4DE", "lightsteelblue"],
    ["#B0E0E6", "powderblue"],
    ["#B22222", "firebrick"],
    ["#B8860B", "darkgoldenrod"],
    ["#BA55D3", "mediumorchid"],
    ["#BC8F8F", "rosybrown"],
    ["#BDB76B", "darkkhaki"],
    ["#C71585", "mediumvioletred"],
    ["#CD5C5C", "indianred"],
    ["#CD853F", "peru"],
    ["#D2691E", "chocolate"],
    ["#D2B48C", "tan"],
    ["#D3D3D3", "lightgray"],
    ["#D3D3D3", "lightgrey"],
    ["#D8BFD8", "thistle"],
    ["#DA70D6", "orchid"],
    ["#DAA520", "goldenrod"],
    ["#DB7093", "palevioletred"],
    ["#DC143C", "crimson"],
    ["#DCDCDC", "gainsboro"],
    ["#DDA0DD", "plum"],
    ["#DEB887", "burlywood"],
    ["#E0FFFF", "lightcyan"],
    ["#E6E6FA", "lavender"],
    ["#E9967A", "darksalmon"],
    ["#EE82EE", "violet"],
    ["#EEE8AA", "palegoldenrod"],
    ["#F08080", "lightcoral"],
    ["#F0E68C", "khaki"],
    ["#F0F8FF", "aliceblue"],
    ["#F0FFF0", "honeydew"],
    ["#F0FFFF", "azure"],
    ["#F4A460", "sandybrown"],
    ["#F5DEB3", "wheat"],
    ["#F5F5DC", "beige"],
    ["#F5F5F5", "whitesmoke"],
    ["#F5FFFA", "mintcream"],
    ["#F8F8FF", "ghostwhite"],
    ["#FA8072", "salmon"],
    ["#FAEBD7", "antiquewhite"],
    ["#FAF0E6", "linen"],
    ["#FAFAD2", "lightgoldenrodyellow"],
    ["#FDF5E6", "oldlace"],
    ["#FF00FF", "magenta"],
    ["#FF1493", "deeppink"],
    ["#FF4500", "orangered"],
    ["#FF6347", "tomato"],
    ["#FF69B4", "hotpink"],
    ["#FF7F50", "coral"],
    ["#FF8C00", "darkorange"],
    ["#FFA07A", "lightsalmon"],
    ["#FFA500", "orange"],
    ["#FFB6C1", "lightpink"],
    ["#FFC0CB", "pink"],
    ["#FFD700", "gold"],
    ["#FFDAB9", "peachpuff"],
    ["#FFDEAD", "navajowhite"],
    ["#FFE4B5", "moccasin"],
    ["#FFE4C4", "bisque"],
    ["#FFE4E1", "mistyrose"],
    ["#FFEBCD", "blanchedalmond"],
    ["#FFEFD5", "papayawhip"],
    ["#FFF0F5", "lavenderblush"],
    ["#FFF5EE", "seashell"],
    ["#FFF8DC", "cornsilk"],
    ["#FFFACD", "lemonchiffon"],
    ["#FFFAF0", "floralwhite"],
    ["#FFFAFA", "snow"],
    ["#FFFFE0", "lightyellow"],
    ["#FFFFF0", "ivory"]
]

const HENN_EDITOR_STYLE = `
    <style>
        .henn-slider-root {
            display: grid;
            gap: 6px;
            padding: 8px 10px;
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
            top: 12px;
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
            height: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            pointer-events: none;
            font-size: 9px;
            line-height: 10px;
            color: var(--secondary-text-color);
            opacity: .75;
            padding: 0 8px;
            box-sizing: border-box;
        }

        .henn-slider-thumb {
            position: absolute;
            top: 9px;
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

        .henn-slider-range {
            position: absolute;
            top: 12px;
            height: 10px;
            border-radius: 999px;
            background: var(--primary-color, #03a9f4);
            pointer-events: none;
        }

        .henn-slider-input {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 34px;
            margin: 0;
            opacity: 0;
            /*pointer-events: none;*/
        }

        .henn-line-selector-root {
            display: grid;
            position: relative;
            gap: 6px;
            padding: 8px 10px;
        }

        .henn-line-selector-header {
            color: var(--primary-text-color);
            font-size: 14px;
        }

        .henn-line-selector-track-wrap {
            position: relative;
            height: 44px;
        }

        .henn-line-selector-track {
            position: absolute;
            left: 0;
            right: 0;
            top: 18px;
            height: 10px;
            border-radius: 999px;
            background: var(--divider-color, #ddd);
        }

        .henn-line-selector-option {
            position: absolute;
            top: 15px;
            transform: translateX(-50%);
            display: grid;
            justify-items: center;
            gap: 4px;
            cursor: pointer;
            user-select: none;
        }

        .henn-line-selector-dot {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--card-background-color, white);
            border: 2px solid var(--primary-color, #03a9f4);
            box-shadow: 0 1px 3px rgba(0,0,0,.25);
            box-sizing: border-box;
            display: grid;
            place-items: center;
        }

        .henn-line-selector-option.selected .henn-line-selector-dot::after {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--primary-text-color, black);
        }

        .henn-line-selector-label {
            font-size: 12px;
            color: var(--secondary-text-color);
            white-space: nowrap;
        }

        .henn-line-selector-option.selected .henn-line-selector-label {
            color: var(--primary-text-color);
            font-weight: 700;
        }
        .henn-select-root {
            position: relative;
            display: grid;
            gap: 6px;
            padding: 8px 10px;
        }

        .henn-select-preview {
            height: 40px;
            box-sizing: border-box;
            padding: 0 12px;
            border-radius: 8px;
            background: rgba(127,127,127,.12);
            color: var(--primary-text-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            user-select: none;
            outline: none;

        }

        .henn-select-preview:focus {
            box-shadow: 0 0 0 2px var(--primary-color);
        }

        .henn-select-arrow {
            opacity: .7;
            font-size: 14px;
        }

        .henn-select-popup {
            position: absolute;
            margin-top: 0;
            z-index: 1001;
            padding: 6px;
            border-radius: 12px;
            background: var(--card-background-color);
            box-shadow: 0 8px 24px rgba(0,0,0,.28);


        }

        .henn-select-list {
            max-height: 220px;
            overflow-y: auto;
        }

        .henn-select-row {
            height: 40px;
            box-sizing: border-box;
            padding: 0 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: var(--primary-text-color);
            justify-content: space-between;
        }

        .henn-select-row-label {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .henn-select-row-value {
            color: var(--secondary-text-color);
            opacity: .7;
            font-size: 12px;
            white-space: nowrap;
        }

        .henn-select-row:hover,
        .henn-select-row.active {
            background: rgba(127,127,127,.24);
        }

        .henn-select-combo-wrap {
            position: relative;
            height: 40px;
            margin-bottom: 6px;
        }

        .henn-select-combo-input {
            width: 100%;
            height: 40px;
            box-sizing: border-box;
            padding: 0 12px;
            padding-right: 90px;
            border: none;
            border-radius: 8px;
            outline: none;
            background: rgba(127,127,127,.12);
            color: var(--primary-text-color);
            font: inherit;
        }

        .henn-select-combo-hint {
            position: absolute;
            right: 12px;
            top: 0;
            height: 40px;
            display: flex;
            align-items: center;
            color: var(--secondary-text-color);
            opacity: .7;
            font-size: 12px;
            pointer-events: none;
        }

        .henn-select-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 6px;
        }

        .henn-select-button {
            height: 32px;
            padding: 0 12px;
            border: none;
            border-radius: 8px;
            background: rgba(127,127,127,.16);
            color: var(--primary-text-color);
            cursor: pointer;
        }

        .henn-select-button:hover {
            background: rgba(127,127,127,.26);
        }

        .henn-select-row-right {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;
        }

        .henn-select-row-color {
            width: 16px;
            height: 16px;
            border-radius: 4px;
            border: 1px solid rgba(0,0,0,.2);
            box-sizing: border-box;
        }

        .henn-color-picker-root {
            display: grid;
            padding: 8px 10px;
        }

        .henn-color-picker-input {
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            padding: 0;
            border: none;
            border-radius: 8px;
            background: rgba(127,127,127,.12);
            cursor: pointer;
        }

        .henn-color-picker-input::-webkit-color-swatch-wrapper {
            padding: 4px;
        }

        .henn-color-picker-input::-webkit-color-swatch {
            border: none;
            border-radius: 6px;
        }

        .henn-color-picker-input::-moz-color-swatch {
            border: none;
            border-radius: 6px;
        }

        /* sinise ussi stiilid */
        .henn-sausage {
            position: relative;
            height: 44px;
            min-width: 260px;
            z-index: 0;
        }

        .henn-sausage-track {
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            height: 14px;
            transform: translateY(-50%);
            border: 2px solid var(--primary-color);
            border-radius: 999px;
            background: #ddd; /*var(--divider-color);*/
            box-sizing: border-box;
            z-index: 2;
            opacity: 1;
        }

        .henn-sausage-ring {
            position: absolute;
            top: 50%;
            width: 22px;
            height: 22px;
            transform: translate(-50%, -50%);
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            background: #ddd; /*var(--divider-color);*/
            box-sizing: border-box;
            opacity: 1;
            z-index: 1;
        }

        .henn-sausage-cover {
            position: absolute;
            top: 50%;
            width: 16px;
            height: 16px;
            transform: translate(-50%, -50%);
            border-radius: 50%; 
            background: #ddd; /*var(--divider-color);*/
            opacity: 1;
            z-index: 3;
        }

        .henn-sausage-mumm {
            position: absolute;
            top: 50%;
            width: 8px;
            height: 8px;
            transform: translate(-50%, -50%);
            background: black;
            border-radius: 50%;
            opacity: 1;
            z-index: 4;
        }

        .henn-sausage-label {
            position: absolute;
            top: calc(50% + 18px);
            transform: translateX(-50%);
            font-size: 11px;
            line-height: 1;
            white-space: nowrap;
            color: var(--primary-text-color);
            opacity: .85;
            z-index: 5;
            pointer-events: none;
            user-select: none;
        }

        .henn-sausage-ring,
        .henn-sausage-cover,
        .henn-sausage-mumm,
        .henn-sausage-label {
            pointer-events: none;
        }

    </style>
`;

const HENN_STONE_STYLE = `
<style>
    .henn-editor-root {
        display: grid;
        gap: 14px;
    }

    .henn-editor-section {
        border: 1px solid var(--divider-color, #ddd);
        border-radius: 8px;
        padding: 0;
        display: grid;
        gap: 0;
        overflow: hidden;
    }

    .henn-editor-title {
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }

    .henn-editor-section-title {
        min-height: 38px;
        padding: 0 10px;
        border-bottom: 1px solid var(--divider-color, #ddd);
        background: var(--secondary-background-color, #f5f5f5);
        border-radius: 8px 8px 0 0;
    }

    .henn-editor-section-body {
        display: grid;
        gap: 10px;
        padding: 10px;
    }

    .henn-editor-row {
        display: grid;
        grid-template-columns: 135px minmax(0, 260px);
        gap: 8px;
        align-items: center;
    }

    .henn-editor-wide-row {
        display: grid;
        gap: 1px;
    }

    .henn-editor-wide-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        font-weight: 600;
    }

    .henn-editor-top-row {
        display: grid;
        grid-template-columns: 64px 64px minmax(180px, 1fr);
        gap: 12px;
        align-items: end;
    }

    .henn-editor-small {
        font-size: 12px;
        color: var(--secondary-text-color);
    }

    .henn-editor-muted {
        opacity: .45;
    }

    .henn-editor-inherited {
        background: var(--secondary-background-color, #f3f3f3);
        opacity: .85;
    }

    .henn-editor-input,
    .henn-editor-select {
        width: 100%;
        max-width: 260px;
        height: 34px;
        box-sizing: border-box;
        border: 1px solid var(--divider-color, #ccc);
        border-radius: 4px;
        background: var(--card-background-color, white);
        color: var(--primary-text-color, black);
        padding: 0 8px;
        font: inherit;
        min-width: 0;
    }

    .henn-editor-button {
        height: 32px;
        border: 1px solid var(--divider-color, #ccc);
        border-radius: 4px;
        background: var(--card-background-color, white);
        color: var(--primary-text-color, black);
        cursor: pointer;
    }

    .henn-editor-head-icon {
        width: 34px;
        height: 34px;
        border: 1px solid var(--divider-color, #ccc);
        border-radius: 999px;
        background: var(--card-background-color, white);
        color: var(--primary-text-color, black);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;
    }

    .henn-editor-head-icon.active {
        background: var(--primary-color);
        color: white;
    }

    .henn-editor-compact-number {
        width: 50px !important;
        min-width: 50px !important;
        max-width: 50px !important;
        text-align: right;
    }

    .henn-editor-mini-number {
        width: 44px !important;
        min-width: 44px !important;
        max-width: 44px !important;
        text-align: right;
    }

    .henn-editor-slider-number-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 64px;
        gap: 8px;
        align-items: center;
    }

    .henn-editor-check {
        width: 24px;
        height: 24px;
        cursor: pointer;
        accent-color: var(--primary-color);
    }

    .henn-editor-segment {
        display: inline-grid;
        grid-auto-flow: column;
        border-radius: 999px;
        overflow: hidden;
        border: 1px solid var(--divider-color, #ccc);
        width: fit-content;
    }

    .henn-editor-segment-button {
        min-width: 60px;
        height: 34px;
        border: none;
        background: var(--card-background-color, white);
        color: var(--primary-text-color);
        cursor: pointer;
    }

    .henn-editor-segment-button.selected {
        background: var(--primary-color);
        color: white;
    }

    .henn-color-cell {
        display: grid;
        grid-template-columns: minmax(150px, 1fr) 44px;
        gap: 8px;
        align-items: center;
        min-width: 0;
        max-width: none;
    }

    .henn-color-cell-selector {
        min-width: 150px;
        width: 100%;
        padding: 0 !important;
    }

    .henn-color-cell .henn-editor-input[type="color"] {
        width: 44px;
        min-width: 44px;
        max-width: 44px;
        height: 40px;
        padding: 2px;
    }

     .henn-editor-tick-table {
        display: grid;
        grid-template-columns: 50px minmax(0, 1fr) 44px 44px 34px;
        gap: 2px;
        align-items: center;
    }

    .henn-editor-tick-table-head {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-weight: 600;
    }

    .henn-editor-tick-row-label {
        font-size: 12px;
        font-weight: 600;
    }

    .henn-editor-grid4 {
        display: grid;
        grid-template-columns: minmax(0, 220px) 50px 50px 34px;
        gap: 6px;
        align-items: center;
    }

    .henn-editor-grid4 > * {
        min-width: 0;
    }

    .henn-editor-line-control {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 58px 58px;
        gap: 8px;
        align-items: center;
    }

    .henn-editor-fill-control {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 42px;
        gap: 8px;
        align-items: center;
    }

    .henn-editor-gradient-colors {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 8px;
    }

    .henn-series-header {
        display: grid;
        grid-template-columns: 32px 1fr 80px 34px 34px;
        gap: 6px;
        align-items: center;
        border: 1px solid var(--divider-color, #ddd);
        border-radius: 6px;
        padding: 6px;
        background: var(--secondary-background-color, #f5f5f5);
    }

    .henn-series-header-v2 {
        display: grid;
        grid-template-columns: 34px minmax(0, 1fr) 34px 34px 34px;
        gap: 6px;
        align-items: center;
        border: 1px solid var(--divider-color, #ddd);
        border-radius: 8px;
        padding: 6px;
        background: var(--secondary-background-color, #f5f5f5);
    }

    .henn-series-body {
        border: 1px solid var(--divider-color, #ddd);
        border-top: none;
        border-radius: 0 0 6px 6px;
        padding: 10px;
        display: grid;
        gap: 10px;
    }

    .henn-series-entity-host {
        min-width: 0;
    }

    .henn-series-type-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 3px;
    }

    .henn-editor-check {
        appearance: none;
        -webkit-appearance: none;
        width: 24px !important;
        min-width: 24px !important;
        max-width: 24px !important;
        height: 24px !important;
        min-height: 24px !important;
        max-height: 24px !important;
        padding: 0 !important;
        margin: 0;
        border: 2px solid var(--divider-color, #aaa);
        border-radius: 4px;
        background: var(--card-background-color, white);
        cursor: pointer;
        display: grid;
        place-content: center;
    }

    .henn-editor-check:checked {
        border-color: var(--primary-color);
        background: var(--primary-color);
    }

    .henn-editor-check:checked::after {
        content: "✓";
        color: white;
        font-size: 22px;
        font-weight: 800;
        line-height: 1;
    }

    .henn-editor-pill-check {
        appearance: none;
        -webkit-appearance: none;

        width: 24px;
        height: 24px;

        border: 2px solid var(--divider-color, #aaa);
        border-radius: 4px;

        background: var(--card-background-color, white);
        cursor: pointer;

        display: grid;
        place-content: center;
    }

    .henn-editor-pill-check:checked {
        border-color: var(--primary-color);
        background: var(--primary-color);
    }

    .henn-editor-pill-check:checked::after {
        content: "✓";
        color: white;
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
    }

</style>
`;

const HENN_PERIOD_OPTIONS = [
    ["1d", "1 day"],
    ["5d", "5 days"],
    ["7d", "7 days"],
    ["1w", "1 week"],
    ["14d", "14 days"],
    ["2w", "2 weeks"],
    ["30d", "30 days"],
    ["1M", "1 month"],
    ["90d", "90 days"],
    ["3M", "3 months"]
];

const HENN_PERIOD_OPTIONS2 = [
    { value: "1h", label: "Hour" },
    { value: "1d", label: "Day" },
    { value: "1w", label: "Week" },
    { value: "1M", label: "Month" },
    { value: "1y", label: "Year" }
];

const HENN_BUCKET_OPTIONS = [
    [5, "5"],
    [6, "6"],
    [10, "10"],
    [12, "12"],
    [15, "15"],
    [20, "20"],
    [30, "30"]
];

const HENN_PERIOD_LIST = [
    ["1d", "1d"],
    ["2d", "2d"],
    ["3d", "_"],
    ["1w", "1w"],
    ["2w", "_"],
    ["1mo", "1mo"],
    ["2mo", "_"],
    ["1y", "1y"]
];

if (!Element.prototype.addClasses) {
    Element.prototype.addClasses = function (classes = null) {
        if (!classes) return this;

        if (Array.isArray(classes)) {
            for (const cls of classes) {
                if (cls) this.classList.add(cls);
            }
        }
        else if (typeof classes === "string") {
            for (const cls of classes.split(/\s+/)) {
                if (cls) this.classList.add(cls);
            }
        }

        return this;
    };
}

if (!Element.prototype.addStyle) {
    Element.prototype.addStyle = function (style = null) {
        if (style) {
            Object.assign(this.style, style);
        }
        return this;
    };
}

if (!Element.prototype.setType) {
    Element.prototype.setType = function (type = null) {
        if (type) this.type = type;
        return this;
    }
}

if (!Element.prototype.addProperties) {
    Element.prototype.addProperties = function (props = null) {
        if (props) {
            Object.assign(this, props);
        }
        return this;
    };
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

        this._buckets = this.calculateBuckets(c, dirRows, speedRows);
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

    calculateBuckets(c, dirRows, speedRows) {
        const bucketSize = Number(c.bucket_size);
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

            dir = dir + Number(c.rotation);
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
            <!-- versioon ${HENN_CARDS_VERSION} -->
            ${HENN_EDITOR_STYLE}
            <div style="display:grid; gap:14px;">
                <div id="direction_entity"></div>
                <div id="speed_entity"></div>
                <div id="period-field2"></div>
                <div id="bucket-field2"></div>
                <div id="color-row" style="display:grid; grid-template-columns: 1fr 44px; gap:8px; align-items:end;">
                    <div id="color-field2"></div>
                    <div id="color-picker"></div>
                </div>
                <div id="slider-field"></div>
                <div id="radius-fields"></div>
                <div id="opacity-fields"></div>
            </div>
        `;

        this.querySelector("#slider-field").appendChild(
            hennCreateSingleSlider(
                this,
                "rotation",
                "Rotation",
                this._config.rotation ?? 0,
                -180,
                180,
                5
            )
        );

        this.querySelector("#radius-fields").appendChild(
            hennCreateDoubleSlider(
                this,
                "inner_radius",
                "outer_radius",
                "Radius",
                this._config.inner_radius ?? 30,
                this._config.outer_radius ?? 50,
                0,
                100,
                5
            )
        );

        this.querySelector("#opacity-fields").appendChild(
            hennCreateDoubleSlider(
                this,
                "min_opacity",
                "max_opacity",
                "Opacity",
                this._config.min_opacity ?? 0.05,
                this._config.max_opacity ?? 0.9,
                0,
                1,
                0.05
            )
        );

        this.querySelector("#period-field2").appendChild(
            hennCreateListSelector(
                this,
                "period",
                "Period",
                this._config.period || "30d",
                HENN_PERIOD_OPTIONS, 
                "combo"
            )
        );

        this.querySelector("#bucket-field2").appendChild(
            hennCreateLineSelector(
                this,
                "bucket_size",
                "Bucket size",
                this._config.bucket_size ?? 5,
                HENN_BUCKET_OPTIONS
            )
        );

        this.querySelector("#color-field2").appendChild(
            hennCreateListSelector(
                this,
                "color",
                "Color",
                this._config.color || "green",
                HENN_CSS_COLORS2, 
                "color"
            )
        );

        this.querySelector("#color-picker").appendChild(
            hennCreateColorPicker(this, "color", "Color", this._config.color || "blue")
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

class HennStonehengeCard extends HTMLElement {
    setConfig(config) {
        if (!config.value_entity && !config.series?.some(s => s.value_entity)) {
            throw new Error("value_entity or series with value_entity is required");
        }

        this.series = [
            ...(config.value_entity ? [{ value_entity: config.value_entity }] : []),
            ...(config.series || [])
        ];

        this.config = {
            value_entity: null,

            bucketing: "day",
            bucket_size: "1h",
            history_period: "1d",

            diagram_type: "gradient",
            anchor: "lower",
            aggregate: "avg",

            ...config,

            gradient: {
                color: "orange",
                mode: "opacity",
                max_opacity: config.max_opacity ?? 0.9,
                min_opacity: config.min_opacity ?? 0.15,
                max_color: null,
                min_color: null,
                opacity: config.opacity ?? 0.5,
                ...config.gradient
            },

            bar: {
                cap: null,
                gap: 0,
                margin_left: 0,
                margin_right: 0,
                ...config.bar
            },

            line: {
                show: true,
                color: null,
                stroke: 2,
                smooth: false,
                ...config.line
            },

            fill: {
                show: true,
                color: null,
                opacity: null,
                ...config.fill
            },

            ticks: {
                show: true,
                tight: true,
                radius: 95,
                direction: "vertical",
                width: null,          // vaikimisi font_size * 2
                color: null,
                ...config.ticks,
                font: {
                    size: null,
                    color: null,
                    ...config.ticks?.font,
                },

                fill: {
                    show: false,
                    color: null,
                    ...config.ticks?.fill
                },

                inner: {
                    show: true,
                    stroke: 0,
                    color: null,
                    radius: null,       // vaikimisi ticks:radius - width/2
                    ...config.ticks?.inner
                },
                outer: {
                    show: true,
                    stroke: 0,
                    color: null,
                    radius: null,       // vaikimisi ticks:radius + width/2
                    ...config.ticks?.outer
                },
                minor: {
                    show: true,
                    stroke: 0.5,
                    color: null,
                    radius: null,
                    length: 2,
                    ...config.ticks?.minor
                }
            },

            label: {
                show: false,
                position: "center",
                text: config.label_text ?? "",
                font_size: 7,
                color: "white",
                margin: 12,
                ...config.label
            },

            lower: { show: false, stroke: 1, color: "white", radius: 30, gap: 0, ...(config.lower || {}) },
            upper: { show: false, stroke: 1, color: "white", radius: 90, gap: 0, ...(config.upper || {}) },

            reconf: true
        };

        const ticks = this.config.ticks;

        const fontSize = ticks.font?.size ?? 5;
        const width = ticks.width ?? fontSize * 2;
        const radius = ticks.radius ?? 95;

        ticks.width ??= width;

        ticks.inner ??= {};
        ticks.outer ??= {};
        ticks.minor ??= {};
        ticks.font ??= {};

        ticks.inner.radius ??= radius - width / 2;
        ticks.outer.radius ??= radius + width / 2;
        ticks.minor.radius ??= radius;

        const ticksColor = ticks.color ?? "black";

        ticks.inner.color ??= ticksColor;
        ticks.outer.color ??= ticksColor;
        ticks.minor.color ??= ticksColor;
        ticks.font.color ??= ticksColor;

        delete this.config.value_entity;
        delete this.config.series;

        this.rootConfig = {
            label: this.config.label,
            ticks: this.config.ticks,
            lower: this.config.lower,
            upper: this.config.upper,
            bucketing: this.config.bucketing
        };

        const { value_entity, label, ticks: _ticks, lower, upper, bucketing, ...defConfig } = this.config;
            this.defConfig = defConfig;
    }

    set hass(hass) {
        this._hass = hass;
        if (!this._loaded) {
            this._loaded = true;
            this.loadAndRender();
        }
    }

    getCardSize() {
        return 3;
    }

    mergeSeriesConfig(s) {
        return {
            ...this.defConfig,
            ...s,

            gradient: {
                ...(this.defConfig.gradient || {}),
                ...(s.gradient || {})
            },

            bar: {
                ...(this.defConfig.bar || {}),
                ...(s.bar || {})
            },

            line: {
                ...(this.defConfig.line || {}),
                ...(s.line || {})
            },

            fill: {
                ...(this.defConfig.fill || {}),
                ...(s.fill || {})
            },

            lower: {
                ...(this.rootConfig.lower || {}),
                ...(s.lower || {})
            },

            upper: {
                ...(this.rootConfig.upper || {}),
                ...(s.upper || {})
            }
        };
    }

    prepareSeriesConfigs() {
        const configs = this.series.map(s => this.mergeSeriesConfig(s));
        this.prepareBarSeries(configs);
        return configs;
    }

    prepareBarSeries(configs) {
        const groups = new Map();

        for (const c of configs) {
            if (c.diagram_type !== "bar") continue;

            const cap = c.bar?.cap;
            if (cap === undefined || cap === null) continue;

            const key = String(cap);
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(c);
        }

        for (const group of groups.values()) {
            group.forEach((c, i) => {
                c.bar = {
                    ...c.bar,
                    _series_count: group.length,
                    _series_index: i
                };
            });
        }
    }

    async loadAndRender() {
        const configs = this.prepareSeriesConfigs();

        const bucketSets = await Promise.all(
            configs.map(c => this.loadHistory(c))
        );

        const seriesBody = configs
            .map((c, i) => this.renderSeries(c, bucketSets[i]))
            .join("");

        this.render(seriesBody);
    }

    async loadHistory(c) {
        const end = new Date();
        const start = this.periodStart(end, c.history_period);

        const url =
            `history/period/${start.toISOString()}` +
            `?end_time=${encodeURIComponent(end.toISOString())}` +
            `&filter_entity_id=${encodeURIComponent(c.value_entity)}`;

        const data = await this._hass.callApi("GET", url);
        const rows = data.find(x => x[0]?.entity_id === c.value_entity) || [];

        return this.calculateBuckets(c, rows);
    }

    barAngles(c, bucketStart, step) {
        const bar = c.bar || {};

        const hasAutoWidth =
            bar._series_count !== undefined &&
            bar._series_index !== undefined;

        if (hasAutoWidth) {
            const count = Math.max(1, Number(bar._series_count || 1));
            const index = Math.max(0, Math.min(count - 1, Number(bar._series_index || 0)));
            const gap = Math.max(0, Number(bar.gap || 0));

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

    bucketSizeMinutes(c) {
        const s = String(c.bucket_size || "1h");
        if (s.endsWith("m")) return parseInt(s);
        if (s.endsWith("h")) return parseInt(s) * 60;
        if (s.endsWith("d")) return parseInt(s) * 24 * 60;
        return Number(s) || 60;
    }

    bucketCount(c) {
        const b = this.rootConfig.bucketing;
        const size = this.bucketSizeMinutes(c);

        if (b === "day") return Math.ceil(24 * 60 / size);
        if (b === "month") return Math.ceil(31 * 24 * 60 / size);
        if (b === "year") return 360;

        return Math.ceil(24 * 60 / size);
    }

    bucketIndex(c, date) {
        const b = this.rootConfig.bucketing;
        const size = this.bucketSizeMinutes(c);

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

    calculateBuckets(c, rows) {
        const count = this.bucketCount(c);

        const sums = Array(count).fill(0);
        const nums = Array(count).fill(0);
        const mins = Array(count).fill(null);
        const maxs = Array(count).fill(null);
        const distinct = Array.from({ length: count }, () => new Set());

        for (const r of rows) {
            const v = this.number(r.state);
            if (isNaN(v)) continue;

            const d = new Date(r.last_changed);
            const i = this.bucketIndex(c, d);

            if (i >= 0 && i < count) {
                sums[i] += v;
                nums[i]++;

                mins[i] = mins[i] === null ? v : Math.min(mins[i], v);
                maxs[i] = maxs[i] === null ? v : Math.max(maxs[i], v);

                distinct[i].add(v);
            }
        }

        const aggregate = String(c.aggregate || "avg").toLowerCase();

        return sums.map((sum, i) => {
            let value;

            if (nums[i] === 0) {
                value = null;
            }
            else if (aggregate === "sum") {
                value = sum;
            }
            else if (aggregate === "count") {
                value = nums[i];
            }
            else if (aggregate === "max") {
                value = maxs[i];
            }
            else if (aggregate === "min") {
                value = mins[i];
            }
            else if (aggregate === "distinct" || aggregate === "countunique" || aggregate === "count_unique") {
                value = distinct[i].size;
            }
            else {
                value = sum / nums[i]; // avg default
            }

            return {
                index: i,
                value
            };
        });
    }

    renderSeries(c, buckets) {
        buckets = buckets || [];
        const values = buckets.map(b => b.value).filter(v => v !== null && !isNaN(v));

        const min = values.length ? Math.min(...values) : 0;
        const max = values.length ? Math.max(...values) : 1;
        const span = max - min || 1;

        let lower = Number(c.lower.radius);
        let upper = Number(c.upper.radius);

        return c.diagram_type === "bar" ? this.renderBars(c, buckets, min, span, lower, upper) :
            c.diagram_type === "line" ? this.renderLine(c, buckets, min, span, lower, upper) :
                this.renderColor(c, buckets, min, span, lower, upper);
    }

    render(seriesBody) {
        const lower = Number(this.rootConfig.lower.radius);
        const upper = Number(this.rootConfig.upper.radius);

        const rails = this.renderRails(this.rootConfig, lower, upper);
        const ticks = this.renderTicks();
        const label = this.renderLabel();

        this.innerHTML = `
      <ha-card style="background:transparent;box-shadow:none;border:none;margin:0;padding:0;">
        <svg viewBox="-50 -50 200 200"
             style="width:100%;height:100%;display:block;overflow:visible;">
          ${seriesBody || ""}
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

    seriesColor(c) {
        return c.color || c.gradient?.color || "orange";
    }

    renderColor(c, buckets, min, span, lower, upper) {
        const g = c.gradient || {};
        const count = buckets.length || 1;
        const step = 360 / count;
        const mode = g.mode || c.mode || "opacity"; 
        const opacityOrColor = mode === "opacity"; //g.opacity_or_color ?? c.opacity_or_color ?? true;

        const color = g.color || c.color || "orange";
        const fixedOpacity = clamp01(Number(g.opacity ?? 0.7));

        const minOpacity = clamp01(Number(g.min_opacity ?? 0.15));
        const maxOpacity = clamp01(Number(g.max_opacity ?? 0.9));

        const minColor = g.min_color || c.min_color || "white";
        const maxColor = g.max_color || c.max_color || "black";

        return buckets.map((b, i) => {
            if (b.value === null) return "";

            const p = clamp01(this.norm(b.value, min, span));

            let fill;
            let fillOpacity;

            if (opacityOrColor) {
                fill = color;
                fillOpacity = lerp(minOpacity, maxOpacity, p);
            }
            else {
                fill = mixColor(minColor, maxColor, p);
                fillOpacity = fixedOpacity;
            }

            return `<path d="${this.ringSectorPath(50, 50, lower, upper, i * step, (i + 1) * step)}"
                fill="${fill}"
                fill-opacity="${fillOpacity}"></path>`;
        }).join("");
    }

    renderBars(c, buckets, min, span, lower, upper) {
        const count = buckets.length || 1;
        const step = 360 / count;

        if (c.anchor === "upper") {
            [lower, upper] = [upper, lower];
        }

        return buckets.map((b, i) => {
            if (b.value === null) return "";

            const p = this.norm(b.value, min, span);
            const r = this.valueRadius(p, lower, upper);

            const r1 = Math.min(lower, r);
            const r2 = Math.max(lower, r);

            const [a1, a2] = this.barAngles(c, i * step, step);

            const fill = c.fill || {};
            const line = c.line || {};

            const fillShow = fill.show !== false;
            const lineShow = line.show === true || Number(line.stroke || 0) > 0;

            const color = this.seriesColor(c);
            const fillColor = fill.color || color;
            const fillOpacity = fill.opacity ?? c.gradient?.max_opacity ?? 0.9;

            const strokeColor = line.color || color;
            const strokeWidth = line.stroke ?? 0;

            return `<path d="${this.ringSectorPath(50, 50, r1, r2, a1, a2)}"
              fill="${fillShow ? fillColor : "none"}"
              fill-opacity="${fillShow ? fillOpacity : 0}"
              stroke="${lineShow ? strokeColor : "none"}"
              stroke-width="${lineShow ? strokeWidth : 0}"></path>`;
        }).join("");
    }

    renderLine(c, buckets, min, span, lower, upper) {
        const line = c.line || {};
        const fill = c.fill || {};

        if (c.anchor === "upper") {
            [lower, upper] = [upper, lower];
        }

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
        const strokeColor = line.color || this.seriesColor(c);
        const strokeWidth = Number(line.stroke ?? c.line_width ?? 2);

        const fillShow = fill.show === true;
        const fillColor = fill.color || this.seriesColor(c);
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

    renderRails(c, lower, upper) {
        const lowerCfg = c.lower || {};
        const upperCfg = c.upper || {};

        let s = "";

        const lowerRadius = lowerCfg.radius - (lowerCfg.gap || 0);
        const upperRadius = upperCfg.radius + (upperCfg.gap || 0);

        if (Number(lowerCfg.stroke) > 0 && lowerCfg.show) {
            s += this.circleLine(lowerRadius, lowerCfg.color || "white", lowerCfg.stroke);
        }

        if (Number(upperCfg.stroke) > 0 && upperCfg.show) {
            s += this.circleLine(upperRadius, upperCfg.color || "white", upperCfg.stroke);
        }

        return s;
    }

    renderTicks() {
        const t = this.rootConfig.ticks || {};
        if (!t.show) return "";

        let s = "";

        const inner = t.inner || t.inner_line || {};
        const outer = t.outer || t.outer_line || {};
        const fill = t.fill || {};

        if (inner.show !== false && Number(inner.stroke) > 0) {
            s += this.circleLine(
                inner.radius,
                inner.color || t.color || "white",
                inner.stroke
            );
        }

        if (outer.show !== false && Number(outer.stroke) > 0) {
            s += this.circleLine(
                outer.radius,
                outer.color || t.color || "white",
                outer.stroke
            );
        }

        if (fill.show === true && fill.color != null) {
            s += this.ringSectorPath
                ? `<path d="${this.ringSectorPath(50, 50, inner.radius, outer.radius, 0, 359.999)}"
                     fill="${fill.color}"
                     stroke="none"></path>`
                : "";
        }

        const b = this.rootConfig.bucketing;

        if (b === "day") s += this.renderDayTicks(t);
        else if (b === "month") s += this.renderMonthTicks(t);
        else if (b === "year") s += this.renderYearTicks(t);

        return s;
    }

    renderDayTicks(t) {
        let s = "";
        const labelHours = [0, 3, 6, 9, 12, 15, 18, 21];

        for (const h of labelHours) {
            s += this.textAt(String(h).padStart(2, "0"), h * 15, t.radius, t.font?.size??5, t.color);
        }

        if (t.minor?.show !== false) {
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
            s += this.textAt(String(d), (d - 1) * 360 / 31, t.radius, t.font?.size??5, t.color);
        }

        if (t.minor?.show !== false) {
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
            s += this.textAt(names[i], i * 30, t.radius, t.font?.size??5, t.color);
        }

        if (t.minor?.show !== false) {
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
        const l = this.rootConfig.label || {};
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
        const direction = this.rootConfig?.ticks?.direction ?? "screen";

        const transform = direction === "radial"
            ? ` transform="rotate(${angle} ${p.x} ${p.y})"`
            : "";

        return `<text x="${p.x}" y="${p.y}"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  font-size="${size}"
                  fill="${color}"${transform}>${text}</text>`;
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

    static getConfigElement() {
        return document.createElement("henn-stonehenge-card-editor");
    }

    static getStubConfig() {
        return {
            type: "custom:henn-stonehenge-card",

            bucketing: "day",

            ticks: {
                show: true
            },

            series: []
        };
    }
}

customElements.define("henn-stonehenge-card", HennStonehengeCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "henn-stonehenge-card",
    name: "Henn Stonehenge Card",
    description: "Circular normalized time-bucket chart: color, bar or line"
});


class HennStonehengeCardEditor extends HTMLElement {
    set hass(hass) {
        this._hass = hass;
        this.render(); 
    }

    setConfig(config) {
        this._config = {
            ...(config || {})
        };

        if (!this._config.series) {
            this._config.series = [];
        }

        this.render();
    }


    render() {
        if (!this._config) return;

        this.innerHTML = `
        <!-- Stonehenge editor ${HENN_CARDS_VERSION} -->
        ${HENN_EDITOR_STYLE}
        ${HENN_STONE_STYLE}
        <div class="henn-editor-root">
            <div id="root-section"></div>
            <div id="ticks-section"></div>
            <div id="defaults-section"></div>
            <div id="series-section"></div>
        </div>
    `;

        this._renderRootSection();
        this._renderTicksSection();
        this._renderDefaultsSection();
        this._renderSeriesSection();
    }

    _renderRootSection() {
        const host = this.querySelector("#root-section");
        host.className = "henn-editor-section";

        host.appendChild(this._title("Stonehenge"));

        host.appendChild(
            hennSegmentRow(
                "Bucketing",
                this._config.bucketing ?? "day",
                [
                    ["day", "Day"],
                    ["month", "Month"],
                    ["year", "Year"]
                ],
                "day",
                (v, def) => {
                    this._config = hennSetOrDeleteDefault(this._config, "bucketing", v, def);

                    const defaults = {
                        day: "10m",
                        month: "6h",
                        year: "7d"
                    };

                    this._config = hennSetPath(
                        this._config,
                        "bucket_size",
                        defaults[v]
                    );

                    hennFireConfigChanged(this);
                }            )
        );
    }

    _renderTicksSection() {
        const host = this.querySelector("#ticks-section");
        host.className = "henn-editor-section";
        host.innerHTML = "";

        const ticks = this._effectiveTicks();
        const enabled = ticks.show !== false;
        const open = this._config._editor_ticks_open !== false;

        const right = document.createElement("div");
        right.style.display = "flex";
        right.style.gap = "6px";
        right.style.alignItems = "center";

        right.appendChild(
            hennIconButton(
                "✓",
                enabled,
                () => this._valueChanged("ticks.show", !enabled)
            )
        );

        right.appendChild(
            hennIconButton(
                open ? "▾" : "▸",
                false,
                () => this._valueChanged("_editor_ticks_open", !open)
            )
        );

        const title = this._title("Numbrilaud", right);
        title.classList.add("henn-editor-section-title");
        host.appendChild(title);

       if (!open) return;

        const body = document.createElement("div");
        body.className = enabled
            ? "henn-editor-section-body"
            : "henn-editor-section-body henn-editor-muted";

        body.appendChild(this._wideColorRow("ticks.color", "Color", ticks.color, "black"));

        body.appendChild(this._sliderNumberRow(
            "ticks.radius",
            "Radius",
            ticks.radius,
            25,
            95,
            5,
            95
        ));

        const topRow = document.createElement("div");
        topRow.className = "henn-editor-top-row";

        topRow.appendChild(
            this._compactNumberBox(
                "ticks.font.size",
                "Font",
                ticks.font.size,
                5,
                1
            )
        );

        topRow.appendChild(
            this._compactNumberBox(
                "ticks.width",
                "Width",
                ticks.width,
                ticks.font.size * 2,
                1
            )
        );

        topRow.appendChild(
            hennSegmentRow(
                "Direction",
                ticks.direction ?? "vertical",
                [
                    ["vertical", "Vertical"],
                    ["radial", "Radial"]
                ],
                "vertical",
                (v, def) => this._valueChangedOrDefault("ticks.direction", v, def)
            )
        );

        body.appendChild(topRow);

        const table = document.createElement("div");
        table.style.display = "grid";
        table.style.gap = "6px";

        const head = document.createElement("div");
        head.className = "henn-editor-tick-table henn-editor-tick-table-head";
        head.innerHTML = `
        <div></div>
        <div>Color</div>
        <div>Stroke</div>
        <div>Length</div>
        <div>Show</div>
    `;
        table.appendChild(head);

        table.appendChild(this._universalTableRow(
            "ticks.inner", "Inner", ticks.inner,
            "stroke", null, "show",
            this._effectiveTicks().color, true
        ));

        table.appendChild(this._universalTableRow(
            "ticks.outer", "Outer", ticks.outer,
            "stroke", null, "show",
            this._effectiveTicks().color, true
        ));

        table.appendChild(this._universalTableRow(
            "ticks.minor", "Minor", ticks.minor,
            "stroke", "length", "show",
            this._effectiveTicks().color, true
        ));

        table.appendChild(this._universalTableRow(
            "ticks.fill", "Fill", ticks.fill,
            null, null, "show",
            null, false
        ));
        body.appendChild(table);
        host.appendChild(body);
    }

    _renderDefaultsSection() {
        const host = this.querySelector("#defaults-section");
        host.className = "henn-editor-section";
        host.innerHTML = "";

        const open = this._config._editor_defaults_open !== false;

        const right = document.createElement("div");
        right.style.display = "flex";
        right.style.gap = "6px";
        right.style.alignItems = "center";

        right.appendChild(
            hennIconButton(
                open ? "▾" : "▸",
                false,
                () => this._valueChanged("_editor_defaults_open", !open)
            )
        );

        const title = this._title("Seeriate vaikimisi seaded", right);
        title.classList.add("henn-editor-section-title");
        host.appendChild(title);

        if (!open) return;

        const body = document.createElement("div");
        body.className = "henn-editor-section-body"; // 


        body.appendChild(hennTextRow(this, "history_period", "History", this._config.history_period ?? "1d", "1d"));

        body.appendChild(createSeparator());

        body.appendChild(
            this._bucketSizeRow(
                this._config.bucketing ?? "day",
                this._config.bucket_size ?? "10m" 
            )
        ); 

        body.appendChild(createSeparator());
        
        body.appendChild(
            hennSegmentRow(
                "Aggregate",
                this._config.aggregate ?? "avg",
                [
                    ["avg", "Average"],
                    ["sum", "Sum"],
                    ["count", "Count"],
                    ["max", "Max"],
                    ["min", "Min"],
                    ["distinct", "Distinct"]
                ],
                "avg",
                (v, def) => this._valueChangedOrDefault("aggregate", v, def) 
            )
        ); 
        body.appendChild(createSeparator());

        const row = document.createElement("div");

        row.style.display = "grid";
        row.style.gridTemplateColumns = "1fr 1fr";
        row.style.gap = "8px";

        row.appendChild(
            hennSegmentRow(
                "Type",
                this._config.diagram_type ?? "gradient",
                [
                    ["gradient", "Gradient"],
                    ["bar", "Bar"],
                    ["line", "Line"]
                ],
                "gradient",
                (v, def) => this._valueChangedOrDefault("diagram_type", v, def)
            )
        );

        row.appendChild(
            hennSegmentRow(
                "Anchor",
                this._config.anchor ?? "lower",
                [
                    ["lower", "Lower"],
                    ["upper", "Upper"]
                ],
                "lower",
                (v, def) => this._valueChangedOrDefault("anchor", v, def)
            )
        );

        body.appendChild(row);
        body.appendChild(createSeparator());

        const uss = hennSausageRow(this._config.history_period ?? "1d", HENN_PERIOD_LIST, "1d",
            (v, def) => this._valueChangedOrDefault("history_period", v, def) 
        );

        body.appendChild(uss);
        body.appendChild(createSeparator());

//        body.appendChild(this._subTitle("Line"));

        const lineTable = this._createMiniTable(["", "Color", "Stroke", "Gap", "Smoth\nShow"]);

        lineTable.appendChild(this._universalTableRow( 
            "line", "Line", this._config.line,
            "stroke", null, "smooth",
            this._config.line.color, false
        )); // kumba pidi peab olema

        

        lineTable.appendChild(this._universalTableRow(
            "fill", "Fill", this._config.fill,
            null, null, "show",
            this._config.fill.color, true
        ));

        lineTable.appendChild(this._universalTableRow(
            "upper", "Upper\nrail", this._config.upper,
            "stroke", "gap", "show",
            this._config.upper.color, true
        ));
        lineTable.appendChild(this._universalTableRow(
            "lower", "Lower\nrail", this._config.lower,
            "stroke", "gap", "show",
            this._config.lower.color, true
        ));
        body.appendChild(lineTable); 

        body.appendChild(createSeparator());

        body.appendChild(this._subTitle("Defaul for gradient - by opacity or by color"));
        const gradientTable = this._createMiniTable(["", "Color", "","Opacity or", "Colors"]);
        gradientTable.appendChild(this._universalTableRow(
            "gradient", "Gradient\nColor", this._config.gradient,
            null, null, "opacity_or_color",
            this._config.gradient.color, true
        ));
        body.appendChild(gradientTable)
        body.appendChild(createSeparator());

        body.appendChild(this._subTitle("Fill"));
        body.appendChild(hennCheckboxRow(this, "fill.show", "Enabled", hennGetPath(this._config, "fill.show") !== false, true));
        body.appendChild(hennColorRow(this, "fill.color", "Color", hennGetPath(this._config, "fill.color"), null));

        body.appendChild(createSeparator());

        body.appendChild(this._subTitle("Gradient"));
        body.appendChild(hennColorRow(this, "gradient.color", "Color", hennGetPath(this._config, "gradient.color") ?? "orange", "orange"));
        body.appendChild(hennNumberRow(this, "gradient.min_opacity", "Min opacity", hennGetPath(this._config, "gradient.min_opacity") ?? 0.15, 0.15, 0.05));
        body.appendChild(hennNumberRow(this, "gradient.max_opacity", "Max opacity", hennGetPath(this._config, "gradient.max_opacity") ?? 0.9, 0.9, 0.05));
        body.appendChild(hennColorRow(this, "gradient.min_color", "Min color", hennGetPath(this._config, "gradient.min_color"), null));
        body.appendChild(hennColorRow(this, "gradient.max_color", "Max color", hennGetPath(this._config, "gradient.max_color"), null));
        host.append(body);
    }

    _renderSeriesSection() {
        const host = this.querySelector("#series-section");
        host.className = "henn-editor-section";

        const addButton = document.createElement("button");
        addButton.className = "henn-editor-button";
        addButton.textContent = "+";
        addButton.title = "Add series";
        addButton.addEventListener("click", () => this._addSeries());

        host.appendChild(this._title("Seeriad", addButton));

        const series = this._config.series || [];

        if (!series.length) {
            const empty = document.createElement("div");
            empty.className = "henn-editor-small";
            empty.textContent = "No series yet.";
            host.appendChild(empty);
            return;
        }

        series.forEach((s, index) => {
            host.appendChild(this._renderSeries(index, s));
        });
    }

    _renderSeries(index, s) {
        const wrap = document.createElement("div");
        wrap.style.display = "grid";

        const open = s._editor_open !== false;
        const enabled = s.enabled !== false;

        const title =
            s.name ||
            s.caption ||
            s.value_entity ||
            `Series ${index + 1}`;

        const header = document.createElement("div");
        header.className = "henn-series-header";
        header.innerHTML = `
        <button class="henn-editor-button" data-action="up">↕</button>
        <div>
            <div>${title}</div>
            <div class="henn-editor-small">${s.diagram_type || this._config.diagram_type || "gradient"}</div>
        </div>
        <button class="henn-editor-button" data-action="open">${open ? "Close" : "Open"}</button>
        <input type="checkbox" data-action="enabled" ${enabled ? "checked" : ""}>
        <button class="henn-editor-button" data-action="delete">×</button>
    `;

        header.querySelector('[data-action="open"]').addEventListener("click", () => {
            this._seriesValueChanged(index, "_editor_open", !open);
        });

        header.querySelector('[data-action="enabled"]').addEventListener("change", ev => {
            this._seriesValueChanged(index, "enabled", ev.target.checked, true);
        });

        header.querySelector('[data-action="delete"]').addEventListener("click", () => {
            this._deleteSeries(index);
        });

        wrap.appendChild(header);

        if (!open) return wrap;

        const body = document.createElement("div");
        body.className = enabled ? "henn-series-body" : "henn-series-body henn-editor-muted";

        const owner = this._seriesOwner(index);

        const entityHost = document.createElement("div");
        entityHost.className = "henn-editor-row";
        entityHost.innerHTML = `<div>Entity</div><div id="series-entity-${index}"></div>`;
        body.appendChild(entityHost);

        body.appendChild(hennTextRow(owner, "name", "Name", s.name ?? "", ""));

        body.appendChild(this._selectRowFor(owner, "diagram_type", "Type", s.diagram_type ?? this._config.diagram_type ?? "gradient", [
            ["gradient", "Gradient"],
            ["bar", "Bar"],
            ["line", "Line"]
        ], this._config.diagram_type ?? "gradient"));

        body.appendChild(hennTextRow(owner, "history_period", "History", s.history_period ?? this._config.history_period ?? "1d", this._config.history_period ?? "1d"));
        body.appendChild(hennTextRow(owner, "bucket_size", "Bucket size", s.bucket_size ?? this._config.bucket_size ?? "1h", this._config.bucket_size ?? "1h"));

        body.appendChild(this._selectRowFor(owner, "aggregate", "Aggregate", s.aggregate ?? this._config.aggregate ?? "avg", [
            ["avg", "Average"],
            ["sum", "Sum"],
            ["count", "Count"],
            ["max", "Max"],
            ["min", "Min"],
            ["distinct", "Distinct"]
        ], this._config.aggregate ?? "avg"));

        body.appendChild(this._selectRowFor(owner, "anchor", "Anchor", s.anchor ?? this._config.anchor ?? "lower", [
            ["lower", "Lower"],
            ["upper", "Upper"]
        ], this._config.anchor ?? "lower"));

        body.appendChild(this._subTitle("Raadiused"));
        body.appendChild(hennNumberRow(owner, "lower.radius", "Lower radius", hennGetPath(s, "lower.radius") ?? hennGetPath(this._config, "lower.radius") ?? 30, hennGetPath(this._config, "lower.radius") ?? 30));
        body.appendChild(hennNumberRow(owner, "upper.radius", "Upper radius", hennGetPath(s, "upper.radius") ?? hennGetPath(this._config, "upper.radius") ?? 90, hennGetPath(this._config, "upper.radius") ?? 90));

        const type = s.diagram_type || this._config.diagram_type || "gradient";

        if (type === "line") {
            body.appendChild(this._subTitle("Line"));
            body.appendChild(hennColorRow(owner, "line.color", "Color", hennGetPath(s, "line.color") ?? hennGetPath(this._config, "line.color"), hennGetPath(this._config, "line.color") ?? null));
            body.appendChild(hennNumberRow(owner, "line.stroke", "Stroke", hennGetPath(s, "line.stroke") ?? hennGetPath(this._config, "line.stroke") ?? 2, hennGetPath(this._config, "line.stroke") ?? 2));
            body.appendChild(hennCheckboxRow(owner, "line.smooth", "Smooth", hennGetPath(s, "line.smooth") === true, hennGetPath(this._config, "line.smooth") === true));
        }

        if (type === "bar") {
            body.appendChild(this._subTitle("Bar"));
            body.appendChild(hennColorRow(owner, "fill.color", "Color", hennGetPath(s, "fill.color") ?? hennGetPath(this._config, "fill.color"), hennGetPath(this._config, "fill.color") ?? null));
            body.appendChild(hennTextRow(owner, "bar.cap", "Cap", hennGetPath(s, "bar.cap") ?? "", ""));
        }

        if (type === "gradient") {
            body.appendChild(this._subTitle("Gradient"));
            body.appendChild(hennColorRow(owner, "gradient.color", "Color", hennGetPath(s, "gradient.color") ?? hennGetPath(this._config, "gradient.color") ?? "orange", hennGetPath(this._config, "gradient.color") ?? "orange"));
            body.appendChild(hennNumberRow(owner, "gradient.min_opacity", "Min opacity", hennGetPath(s, "gradient.min_opacity") ?? hennGetPath(this._config, "gradient.min_opacity") ?? 0.15, hennGetPath(this._config, "gradient.min_opacity") ?? 0.15, 0.05));
            body.appendChild(hennNumberRow(owner, "gradient.max_opacity", "Max opacity", hennGetPath(s, "gradient.max_opacity") ?? hennGetPath(this._config, "gradient.max_opacity") ?? 0.9, hennGetPath(this._config, "gradient.max_opacity") ?? 0.9, 0.05));
        }

        body.appendChild(this._subTitle("Seeria rööpad"));
        body.appendChild(this._railRowFor(owner, "lower", "Lower", s.lower || {}, this._config.lower || {}));
        body.appendChild(this._railRowFor(owner, "upper", "Upper", s.upper || {}, this._config.upper || {}));

        wrap.appendChild(body);

        customElements.whenDefined("ha-selector").then(() => {
            this._addEntityPickerTo(`#series-entity-${index}`, s.value_entity || "", value => {
                this._seriesValueChanged(index, "value_entity", value);
            });
        });

        return wrap;
    }

    _effectiveTicks() {
        const t = this._config.ticks || {};

        const color = t.color ?? "black";
        const fontSize = t.font?.size ?? t.font_size ?? 5;
        const width = t.width ?? fontSize * 2;
        const radius = t.radius ?? 95;

        return {
            show: t.show !== false,
            color,
            radius,
            width,
            direction: t.direction ?? "vertical",
            font: {
                ...(t.font || {}),
                size: fontSize,
                color: t.font?.color ?? color
            },
            inner: {
                show: t.inner?.show !== false,
                color: t.inner?.color ?? color,
                stroke: t.inner?.stroke ?? 1,
                radius: t.inner?.radius ?? radius - width / 2
            },
            outer: {
                show: t.outer?.show !== false,
                color: t.outer?.color ?? color,
                stroke: t.outer?.stroke ?? 1,
                radius: t.outer?.radius ?? radius + width / 2
            },
            minor: {
                show: t.minor?.show !== false,
                color: t.minor?.color ?? color,
                stroke: t.minor?.stroke ?? 0.5,
                radius: t.minor?.radius ?? radius,
                length: t.minor?.length ?? fontSize / 2
            },
            fill: {
                show: t.fill?.show === true,
                color: t.fill?.color ?? null
            }
        };
    }

    _createMiniTable(headers) {
        const table = document.createElement("div");
        table.style.display = "grid";
        table.style.gap = "6px";
        const head = document.createElement("div");
        head.className = "henn-editor-tick-table henn-editor-tick-table-head";
        head.innerHTML = headers.map(h => `<div>${h ?? ""}</div>`).join("");
        table.appendChild(head);
        return table;
    }


    _railRowFor(owner, path, label, value, defaults) {
        const effective = {
            show: value.show === true,
            color: value.color ?? defaults.color ?? "white",
            stroke: value.stroke ?? defaults.stroke ?? 1,
            radius: value.radius ?? defaults.radius ?? 50,
            gap: value.gap ?? defaults.gap ?? 0
        };

        const row = document.createElement("div");
        row.className = "henn-editor-grid4";

        row.appendChild(hennColorCell(owner, `${path}.color`, effective.color, defaults.color ?? "white"));
//        row.appendChild(hennColorPicker(owner, `${path}.color`, effective.color, defaults.color ?? "white"));
        row.appendChild(hennNumberInput(owner, `${path}.stroke`, effective.stroke, defaults.stroke ?? 1));
        row.appendChild(hennNumberInput(owner, `${path}.gap`, effective.gap, defaults.gap ?? 0));
        row.appendChild(hennCheckbox(owner, `${path}.show`, effective.show, false));

        const wrap = document.createElement("div");
        wrap.className = effective.show ? "" : "henn-editor-muted";
        wrap.innerHTML = `<div class="henn-editor-small">${label}</div>`;
        wrap.appendChild(row);
        return wrap;
    }

    _title(text, rightEl = null) {
        const div = document.createElement("div");
        div.className = "henn-editor-title";

        const left = document.createElement("div");
        left.textContent = text;
        div.appendChild(left);

        if (rightEl) div.appendChild(rightEl);
        return div;
    }

    _subTitle(text) {
        const div = document.createElement("div");
        div.className = "henn-editor-small";
        div.style.fontWeight = "600";
        div.textContent = text;
        return div;
    }

    _emptyCell() {
        const div = document.createElement("div");
        return div;
    }

    _textRow(path, label, value, defaultValue = "") {
        return hennTextRow(this, path, label, value, defaultValue);
    }


    _numberRow(path, label, value, defaultValue = 0, step = 1) {
        return hennNumberRow(this, path, label, value, defaultValue, step);
    }

    _checkboxRow(path, label, value, defaultValue = false) {
        return hennCheckboxRow(this, path, label, value, defaultValue);
    }

    _selectRow(path, label, value, options, defaultValue = null) {
        return this._selectRowFor(this, path, label, value, options, defaultValue);
    }

    _selectRowFor(owner, path, label, value, options, defaultValue = null) {
        const row = this._row(label);

        const select = document.createElement("select");
        select.className = "henn-editor-select";
        select.classList.toggle("henn-editor-inherited", hennGetPath(owner._config, path) === undefined);

        options.forEach(([v, t]) => {
            const opt = document.createElement("option");
            opt.value = v;
            opt.textContent = t;
            opt.selected = String(v) === String(value);
            select.appendChild(opt);
        });

        select.addEventListener("change", () => {
            owner._valueChangedOrDefault(path, select.value, defaultValue);
        });

        row.appendChild(select);
        return row;
    }

    _colorRow(path, label, value, defaultValue = null) {
        return this._colorRowFor(this, path, label, value, defaultValue);
    }

    _colorRowFor(owner, path, label, value, defaultValue = null) {
        const row = this._row(label);

        const cell = document.createElement("div");
        cell.style.maxWidth = "260px";

        cell.appendChild(
            hennColorCell(owner, path, value, defaultValue)
        );

        row.appendChild(cell);
        return row;
    }

    _colorCell(path, value, defaultValue = null) {
        return hennColorCellFor(this, path, value, defaultValue);
    }

    _colorCellFor(owner, path, value, defaultValue = null) {
        const box = document.createElement("div");
        box.className = "henn-color-cell";

        const selector = hennCreateListSelector(
            owner,
            path,
            "",
            value ?? defaultValue ?? "",
            HENN_CSS_COLORS2,
            "color"
        );

        selector.classList.add("henn-color-cell-selector");

        box.appendChild(selector);
        box.appendChild(
            hennColorPicker(owner, path, value, defaultValue)
        );

        return box;
    }

    _row(label) {
        const row = document.createElement("div");
        row.className = "henn-editor-row";

        const lab = document.createElement("div");
        lab.textContent = label;

        row.appendChild(lab);
        return row;
    }

    old_textInput(path, value, defaultValue = "") {
        return hennTextInput(this, path, value, defaultValue);
    }


    old_numberInput(path, value, defaultValue = 0, step = 1) {
        return hennNumberInput(this, path, value, defaultValue, step);
    }


    old_colorPicker(path, value, defaultValue = null) {
        return hennColorPicker(this, path, value, defaultValue);
    }

     old_checkbox(path, value, defaultValue = false) {
        return hennCheckbox(this, path, value, defaultValue);
    }

    _addEntityPickerTo(selector, value, onChange) {
        const host = this.querySelector(selector);
        if (!host || !this._hass) return;

        host.innerHTML = "";

        const picker = document.createElement("ha-selector");
        picker.hass = this._hass;
        picker.value = value || "";
        picker.selector = {
            entity: {
                domain: "sensor"
            }
        };

        picker.addEventListener("value-changed", ev => {
            onChange(ev.detail.value);
        });

        host.appendChild(picker);
    }

    _addSeries() {
        const series = [...(this._config.series || [])];

        series.push({
            enabled: true,
            _editor_open: true,
            diagram_type: this._config.diagram_type || "gradient"
        });

        this._config = {
            ...this._config,
            series
        };

        hennFireConfigChanged(this);
    }

    _deleteSeries(index) {
        const series = [...(this._config.series || [])];
        series.splice(index, 1);

        this._config = {
            ...this._config,
            series
        };

        hennFireConfigChanged(this);
    }

    _seriesOwner(index) {
        const editor = this;

        return {
            get _config() {
                return editor._config.series?.[index] || {};
            },

            _valueChanged(path, value) {
                editor._seriesValueChanged(index, path, value);
            },

            _valueChangedOrDefault(path, value, defaultValue) {
                editor._seriesValueChangedOrDefault(index, path, value, defaultValue);
            }
        };
    }

    _valueChanged(path, value) {
        this._config = hennSetPath(this._config, path, value);
        hennFireConfigChanged(this);
    }

    _valueChangedOrDefault(path, value, defaultValue) {
        this._config = hennSetOrDeleteDefault(this._config, path, value, defaultValue);
        hennFireConfigChanged(this);
    }

    _seriesValueChanged(index, path, value) {
        const series = [...(this._config.series || [])];
        series[index] = hennSetPath(series[index] || {}, path, value);

        this._config = {
            ...this._config,
            series
        };

        hennFireConfigChanged(this);
    }

    _seriesValueChangedOrDefault(index, path, value, defaultValue) {
        const series = [...(this._config.series || [])];
        series[index] = hennSetOrDeleteDefault(series[index] || {}, path, value, defaultValue);

        this._config = {
            ...this._config,
            series
        };

        hennFireConfigChanged(this);
    }

    _wideColorRow(path, label, value, defaultValue = null) {
        const wrap = document.createElement("div");
        wrap.className = "henn-editor-wide-row";

        const lab = document.createElement("div");
        lab.className = "henn-editor-wide-label";
        lab.textContent = label;

        wrap.appendChild(lab);
        wrap.appendChild(this._colorCellFor(this, path, value, defaultValue));

        return wrap;
    }

    _sliderNumberRow(path, label, value, min = 0, max = 100, step = 1, defaultValue = 0) {
        const wrap = document.createElement("div");
        wrap.className = "henn-editor-wide-row";

        const lab = document.createElement("div");
        lab.className = "henn-editor-wide-label";
        lab.textContent = label;
        wrap.appendChild(lab);

        const row = document.createElement("div");
        row.className = "henn-editor-slider-number-row";

        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = min;
        slider.max = max;
        slider.step = step;
        slider.value = value ?? defaultValue;

        const number = hennNumberInput(this, path, value, defaultValue, step);
        number.classList.add("henn-editor-compact-number");

        slider.addEventListener("input", () => {
            number.value = slider.value;
        });

        slider.addEventListener("change", () => {
            this._valueChangedOrDefault(path, Number(slider.value), defaultValue);
        });

        number.addEventListener("input", () => {
            if (number.value !== "") slider.value = number.value;
        });

        row.appendChild(slider);
        row.appendChild(number);
        wrap.appendChild(row);

        return wrap;
    }

    _compactNumberBox(path, label, value, defaultValue = 0, step = 1) {
        const wrap = document.createElement("div");
        wrap.className = "henn-editor-wide-row";

        const lab = document.createElement("div");
        lab.className = "henn-editor-wide-label";
        lab.textContent = label;

        const input = hennNumberInput(this, path, value, defaultValue, step);
        input.classList.add("henn-editor-compact-number");

        wrap.appendChild(lab);
        wrap.appendChild(input);

        return wrap;
    }

    _lineSelectorRow(path, label, value, options, defaultValue = null) {
        const wrap = document.createElement("div");
        wrap.className = "henn-editor-wide-row";

        const lab = document.createElement("div");
        lab.className = "henn-editor-wide-label";
        lab.textContent = label;

        const selector = hennCreatePathLineSelector(
            this,
            path,
            "",
            value ?? defaultValue,
            options,
            defaultValue
        );

        wrap.appendChild(lab);
        wrap.appendChild(selector);

        return wrap;
    }



    _universalTableRow(
        path,
        label,
        value,
        num1Name = "stroke",
        num2Name = "length",
        checkName = "show",
        colorFallback = null,
        checkDefault = true
    ) {
        const row = document.createElement("div");
        row.className = "henn-editor-tick-table";

        if (checkDefault && checkName) {
            row.classList.toggle("henn-editor-muted", value?.[checkName] === false);
        }

        const lab = document.createElement("div").addClasses("henn-editor-tick-row-label");
        lab.textContent = label;
        row.appendChild(lab);

        row.appendChild(
            hennColorCell(
                this,
                `${path}.color`,
                value?.color,
                colorFallback
            )
        );

        if (num1Name) {
            row.appendChild(hennNumberInput(this,
                `${path}.${num1Name}`,
                value?.[num1Name],
                value?.[num1Name],
                { classList: ["henn-editor-mini-number"] }
            ));
        } else {
            row.appendChild(document.createElement('div'));
        }

        if (num2Name) {
            row.appendChild(hennNumberInput(this,
                `${path}.${num2Name}`,
                value?.[num2Name],
                value?.[num2Name],
                { classList: ["henn-editor-mini-number"] }
            ));
        } else {
            row.appendChild(document.createElement('div'));
        }

        if (checkName) {
            row.appendChild(hennCheckbox(this,
                `${path}.${checkName}`,
                value?.[checkName], //?? defaultValue,
                null,  {classList: "henn-editor-pill-check"}
            ));
        } else {
            row.appendChild(document.createElement('div'));
        }

        return row;
    }

    _bucketSizeRow(bucketing, value) {
        const map = {
            day: {
                unit: "m",
                values: [5, 10, 15, 30, 60]
            },
            month: {
                unit: "h",
                values: [3, 6, 12, 24]
            },
            year: {
                unit: "d",
                values: [1, 7, 10, 15]
            }
        };

        const cfg = map[bucketing] || map.day;

        const row = document.createElement("div");
        row.className = "henn-editor-wide-row";

        const label = document.createElement("div");
        label.className = "henn-editor-wide-label";
        label.textContent = "Bucket size";

        const right = document.createElement("div");
        right.style.display = "grid";
        right.style.gridTemplateColumns = "1fr 70px 40px";
        right.style.gap = "8px";
        right.style.alignItems = "center";

        right.appendChild(
            hennSegmentRow(
                "",
                value,
                cfg.values.map(v => [`${v}${cfg.unit}`, `${v}`]),
                null,
                v => this._valueChanged("bucket_size", v),
                {
                    wrapStyle: {
                        display: "contents"
                    },
                    labelStyle: {
                        display: "none"
                    },
                    segmentStyle: {
                        width: "100%",
                        display: "flex"
                    },
                    buttonStyle: {
                        flex: "1"
                    }
                }
            ).lastElementChild
        );

        const input = document.createElement("input");
        input.type = "number";
        input.className = "henn-editor-input";
        input.value = parseInt(value) || cfg.values[0];

        input.addEventListener("change", () => {
            this._valueChanged(
                "bucket_size",
                `${input.value}${cfg.unit}`
            );
        });

        right.appendChild(input);

        const unit = document.createElement("div");
        unit.textContent = cfg.unit;

        right.appendChild(unit);

        row.appendChild(label);
        row.appendChild(right);

        return row;
    }

}

customElements.define("henn-stonehenge-card-editor", HennStonehengeCardEditor);

class HennLayeredCard extends HTMLElement {

    setConfig(config) {
        this.config = {
            globals: [],
            order: {
                reverse: false,
                nulls: "last"
            },
            layers: [],
            ...config
        };

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

        const layers = this.getOrderedLayers(this.config.layers || []);

        for (const layerConfig of layers) {

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
            delete rawConfig.layer_seq;

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

    getOrderedLayers(layers) {
        const reverse = this.config.order?.reverse === false;
        const nulls = this.config.order?.nulls || "last";

        return layers
            .map((layer, index) => ({ layer, index }))
            .sort((a, b) => {
                const aHasSeq = a.layer.layer_seq !== undefined && a.layer.layer_seq !== null;
                const bHasSeq = b.layer.layer_seq !== undefined && b.layer.layer_seq !== null;

                if (!aHasSeq && !bHasSeq) {
                    return a.index - b.index;
                }

                if (!aHasSeq) {
                    return nulls === "first" ? -1 : 1;
                }

                if (!bHasSeq) {
                    return nulls === "first" ? 1 : -1;
                }

                const diff = Number(a.layer.layer_seq) - Number(b.layer.layer_seq);

                if (diff !== 0) {
                    return reverse ? -diff : diff;
                }

                return a.index - b.index;
            })
            .map(x => x.layer);
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

        // 1. Uus üldine preprocessor:
        // teeb {@entity} ja {@@global} asendused kogu config-puus,
        // kaasa arvatud henn_resolve reeglite sees.
        this.resolveReferencesInPlace(clone);

        // 2. Vana deklaratiivne henn_resolve loogika
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

    resolveReferencesInPlace(obj) {
        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                obj[i] = this.resolveReferencesInPlace(obj[i]);
            }
            return obj;
        }

        if (obj && typeof obj === "object") {
            for (const key of Object.keys(obj)) {
                obj[key] = this.resolveReferencesInPlace(obj[key]);
            }
            return obj;
        }

        if (typeof obj === "string") {
            return this.resolveReferenceString(obj);
        }

        return obj;
    }

    resolveReferenceString(text) {

        // kõigepealt globalid
        text = text.replace(/\{@@([^}]+)\}/g, (match, name) => {

            const value = this.getGlobalValue(name.trim());

            if (value === undefined || value === null) {
                return match;
            }

            return String(value);
        });

        // siis entity viited
        text = text.replace(/\{@([^}]+)\}/g, (match, ref) => {

            const value = this.getEntityReferenceValue(ref.trim());

            if (value === undefined || value === null) {
                return match;
            }

            return String(value);
        });

        return text;
    }

    getGlobalValue(name) {
        const globals = this.config?.globals || [];
        //console.log("GLOBALS=", globals);
        // Lihtkuju:
        // globals:
        //   test: testtext
        if (!Array.isArray(globals) && typeof globals === "object") {
            const item = globals[name];

            if (item === undefined || item === null) {
                return undefined;
            }

            if (typeof item === "object" && item.value_source) {
                return this.getEntityReferenceValue(item.value_source);
            }

            if (typeof item === "object" && item.value !== undefined) {
                return item.value;
            }

            return item;
        }

        // Pikk kuju:
        // globals:
        //   - name: test
        //     value: testtext
        for (const item of globals) {
            if (!item) continue;
            if (item.name !== name) continue;

            if (item.value_source) {
                return this.getEntityReferenceValue(item.value_source);
            }

            return item.value;
        }

        return undefined;
    }
    getEntityReferenceValue(ref) {

        const entity = this._hass?.states?.[ref];

        if (!entity) {
            return undefined;
        }

        return entity.state;
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

customElements.define("henn-layered-card", HennLayeredCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "henn-layered-card",
    name: "Henn Layered Card",
    description: "Custom layered card containing multiple cards, stacked for Home Assistant"
});



function hennColorToHex(color) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = color || "";
    return ctx.fillStyle || "#000000";
}

function hennHexToColorName(hex) {
    if (!hex) return "";

    const h = hex.toLowerCase();

    for (const [name, value] of Object.entries(HENN_CSS_COLORS)) {
        if (value.toLowerCase() === h) {
            return name;
        }
    }

    return "";
}

function hennCreateSingleSlider(editor, key, label, value, min, max, step = 1, unit = "", smallStep = 1) {
    const wrapper = document.createElement("div");
    let dirty = false;
    let currentValue = normalize(value ?? min);
    let committedValue = currentValue;

    wrapper.innerHTML = `
        <div class="henn-slider-root">
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
        commitIfDirty();
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

        setFromPointer(ev, true);

        try {
            trackWrap.releasePointerCapture(ev.pointerId);
        } catch (_) {
            // ignore
        }
    });

    trackWrap.addEventListener("pointercancel", ev => {
        dragging = false;
        try {
            trackWrap.releasePointerCapture(ev.pointerId);
        } catch { }
    });

    trackWrap.addEventListener("keydown", ev => {

        if (ev.key === "Enter") {
            ev.preventDefault();
            commitIfDirty();
            return;
        }

        if (ev.key === "Escape") {
            ev.preventDefault();

            currentValue = committedValue;
            dirty = false;

            updateUi();
            return;
        }

        let delta = 0;

        if (ev.key === "ArrowRight" || ev.key === "ArrowUp") {
            delta = ev.shiftKey ? smallStep : step;
        }
        else if (ev.key === "ArrowLeft" || ev.key === "ArrowDown") {
            delta = ev.shiftKey ? -smallStep : -step;
        }
        else {
            commitIfDirty();
            return;
        }

        ev.preventDefault();

        currentValue = normalize(currentValue + delta);
        updateUi();

        dirty = true;
    });

    trackWrap.addEventListener("blur", () => {
        commitIfDirty();
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

    function setValue(newValue, commit = false) {
        currentValue = normalize(newValue);
        updateVisuals();

        if (commit) {
            committedValue = currentValue;
            dirty = false;
            fireChange();
        } else {
            dirty = true;
        }
    }

    function commitIfDirty() {
        if (!dirty) return;

        committedValue = currentValue;
        dirty = false;
        //fireChange();
        commit();
    }

    return wrapper;
}

function hennCreateDoubleSlider(
    owner,
    fieldMin,
    fieldMax,
    label,
    valueMin,
    valueMax,
    min,
    max,
    step,
    onChange
) {
    const wrapper = document.createElement("div");
    wrapper.className = "henn-slider-root";

    let activeThumb = null;

    let vMin = Number(valueMin ?? min);
    let vMax = Number(valueMax ?? max);
    clampAndOrder();

    let dirty = false;
    let committedMin = vMin;
    let committedMax = vMax;

    function clampAndOrder() {
        vMin = Math.max(min, Math.min(max, vMin));
        vMax = Math.max(min, Math.min(max, vMax));

        if (vMin > vMax) {
            const t = vMin;
            vMin = vMax;
            vMax = t;
        }
    }

    function snap(value) {
        const snapped = Math.round((value - min) / step) * step + min;
        return Number(snapped.toFixed(6));
    }

    function pct(value) {
        return ((value - min) / (max - min)) * 100;
    }

    wrapper.innerHTML = `
        <div class="henn-slider-header">
            <span>${label}</span>
            <strong>
                <span class="henn-slider-value-min">${vMin}</span> – 
                <span class="henn-slider-value-max">${vMax}</span>
            </strong>
        </div>

        <div class="henn-slider-track-wrap" tabindex="0" role="slider"
             aria-label="${label}"
             aria-valuemin="${min}"
             aria-valuemax="${max}">
            <div class="henn-slider-track"></div>
            <div class="henn-slider-range"></div>
            <div class="henn-slider-thumb henn-slider-thumb-min"></div>
            <div class="henn-slider-thumb henn-slider-thumb-max"></div>
        </div>
    `;

    const trackWrap = wrapper.querySelector(".henn-slider-track-wrap");
    const rangeEl = wrapper.querySelector(".henn-slider-range");
    const thumbMinEl = wrapper.querySelector(".henn-slider-thumb-min");
    const thumbMaxEl = wrapper.querySelector(".henn-slider-thumb-max");
    const valueMinEl = wrapper.querySelector(".henn-slider-value-min");
    const valueMaxEl = wrapper.querySelector(".henn-slider-value-max");

    function updateVisuals() {
        clampAndOrder();

        const left = pct(vMin);
        const right = pct(vMax);

        rangeEl.style.left = `${left}%`;
        rangeEl.style.width = `${right - left}%`;

        thumbMinEl.style.left = `${left}%`;
        thumbMaxEl.style.left = `${right}%`;

        valueMinEl.textContent = vMin;
        valueMaxEl.textContent = vMax;

        trackWrap.setAttribute("aria-valuetext", `${vMin} – ${vMax}`);
    }

    function fireChange() {
        if (typeof onChange === "function") {
            onChange(vMin, vMax);
            return;
        }

        owner._config = {
            ...owner._config,
            [fieldMin]: vMin,
            [fieldMax]: vMax
        };

        owner.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: owner._config },
            bubbles: true,
            composed: true
        }));
    }

    function valueFromEvent(ev) {
        const rect = trackWrap.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, ev.clientX - rect.left));
        const raw = min + (x / rect.width) * (max - min);
        return Math.max(min, Math.min(max, snap(raw)));
    }

    function chooseThumb(value) {
        const distMin = Math.abs(value - vMin);
        const distMax = Math.abs(value - vMax);
        return distMin <= distMax ? "min" : "max";
    }

    function setActiveValue(value, commit = false) {
        if (activeThumb === "min") {
            vMin = Math.min(value, vMax);
        } else {
            vMax = Math.max(value, vMin);
        }

        updateVisuals();

        if (commit) {
            committedMin = vMin;
            committedMax = vMax;
            dirty = false;
            fireChange();
        } else {
            dirty = true;
        }
    }

    function commitIfDirty() {
        if (!dirty) return;

        committedMin = vMin;
        committedMax = vMax;
        dirty = false;

        fireChange();
    }

    trackWrap.addEventListener("pointerdown", (ev) => {
        ev.preventDefault();

        commitIfDirty();

        trackWrap.focus();

        const value = valueFromEvent(ev);

        if (ev.target === thumbMinEl) {
            activeThumb = "min";
        } else if (ev.target === thumbMaxEl) {
            activeThumb = "max";
        } else {
            activeThumb = chooseThumb(value);
        }

        trackWrap.setPointerCapture(ev.pointerId);

        setActiveValue(value, false);
    });

    trackWrap.addEventListener("pointermove", (ev) => {
        if (!activeThumb) return;
        setActiveValue(valueFromEvent(ev), false);
    });

    trackWrap.addEventListener("pointerup", (ev) => {
        setActiveValue(valueFromEvent(ev), true);

        try {
            trackWrap.releasePointerCapture(ev.pointerId);
        } catch { }
    });

    trackWrap.addEventListener("pointercancel", () => {
        activeThumb = null;
    });

    trackWrap.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") {
            ev.preventDefault();
            commitIfDirty();
            return;
        }

        if (ev.key === "Escape") {
            ev.preventDefault();

            vMin = committedMin;
            vMax = committedMax;
            dirty = false;

            updateVisuals();
            return;
        }

        const keyStep =
            ev.key === "PageUp" || ev.key === "PageDown"
                ? step * 10
                : step;

        if (!["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(ev.key)) {
            commitIfDirty();
            return;
        }

        ev.preventDefault();

        if (!activeThumb) activeThumb = "min";

        const delta =
            ev.key === "ArrowLeft" || ev.key === "ArrowDown" || ev.key === "PageDown"
                ? -keyStep
                : keyStep;

        const current = activeThumb === "min" ? vMin : vMax;

        setActiveValue(snap(current + delta), false);
    });

    trackWrap.addEventListener("blur", () => {
        activeThumb = null;
        commitIfDirty();
    });

    updateVisuals();

    return wrapper;
}

function hennCreateLineSelector(editor, key, label, value, options) {
    const wrapper = document.createElement("div");
    wrapper.className = "henn-line-selector-root";

    const currentValue = value;

    wrapper.innerHTML = `
        <div class="henn-line-selector-header">
            ${label} <strong>${currentValue ?? ""}</strong>
        </div>

        <div class="henn-line-selector-track-wrap">
            <div class="henn-line-selector-track"></div>
        </div>
    `;

    const trackWrap = wrapper.querySelector(".henn-line-selector-track-wrap");

    options.forEach((opt, index) => {
        const optValue = opt[0];
        const optLabel = opt[1];

        const edgePad = 4; // protsenti mõlemast servast

        const pct = options.length === 1
            ? 50
            : edgePad + (index / (options.length - 1)) * (100 - edgePad * 2);

        const isSelected = String(optValue) === String(currentValue);

        const item = document.createElement("div");
        item.className = "henn-line-selector-option" + (isSelected ? " selected" : "");
        item.style.left = `${pct}%`;
        item.innerHTML = `
            <div class="henn-line-selector-dot"></div>
            <div class="henn-line-selector-label">${optLabel}</div>
        `;

        item.addEventListener("click", () => {
            editor._config = {
                ...editor._config,
                [key]: optValue
            };

            editor.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: editor._config },
                bubbles: true,
                composed: true
            }));
        });

        trackWrap.appendChild(item);
    });

    return wrapper;
}

function hennListSelectorNormalizeOptions(options) {
    return (options ?? []).map(o => {
        if (Array.isArray(o)) {
            return {
                value: o[0],
                label: o[1] ?? o[0]
            };
        }

        return {
            value: o.value,
            label: o.label ?? o.value
        };
    });
}

function hennCreateListSelector(editor, key, label, value, options, mode = "list") {
    const items = hennListSelectorNormalizeOptions(options);
    const isColor = mode === "color";
    if (isColor) { mode = "search"; } // Värvivalik on sisuliselt otsinguga list, kus on erikoht värvidele."


    const root = document.createElement("div");
    root.className = "henn-select-root";

    const header = document.createElement("div");
    header.className = "henn-select-header";
    header.textContent = label ?? "";

    const preview = document.createElement("div");
    preview.className = "henn-select-preview";
    preview.tabIndex = 0;

    const text = document.createElement("span");
    text.textContent = getLabel(value);

    const arrow = document.createElement("span");
    arrow.className = "henn-select-arrow";
    arrow.textContent = "▾";

    preview.append(text, arrow);
    root.append(header, preview);

    let popup = null;
    let currentValue = value;
    let activeIndex = getIndex(currentValue);

    let input = null;
    let inputHint = null;
    let firstComboBackspace = true;

    if (activeIndex < 0) activeIndex = 0;

    function isCombo() {
        return mode === "combo";
    }

    function isSearch() {
        return mode === "search";
    }

    function hasInput() {
        return isCombo() || isSearch();
    }

    function getIndex(v) {
        for (let i = 0; i < items.length; i++) {
            if (String(items[i].value) === String(v)) return i;
        }
        return -1;
    }

    function getLabel(v) {
        for (const item of items) {
            if (String(item.value) === String(v)) return item.label;
        }
        return v ?? "";
    }

    function getItem(v) {
        for (const item of items) {
            if (String(item.value) === String(v)) return item;
        }
        return null;
    }

    function fireChanged(v) {
        if (typeof editor._valueChanged === "function") {
            editor._valueChanged(key, v);
            return;
        }

        editor._config = {
            ...editor._config,
            [key]: v
        };

        editor.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: editor._config },
            bubbles: true,
            composed: true
        }));
    }

    function closePopup() {
        if (popup) {
            popup.remove();
            popup = null;
        }

        input = null;
        inputHint = null;
    }

    function getRows() {
        if (!popup) return [];
        return Array.from(popup.querySelectorAll(".henn-select-row"));
    }

    function isRowVisible(row) {
        return row && row.style.display !== "none";
    }

    function markActive() {
        if (!popup) return;

        const rows = getRows();

        rows.forEach((row, i) => {
            row.classList.toggle("active", i === activeIndex);
        });

        const activeRow = rows[activeIndex];

        if (activeRow && isRowVisible(activeRow)) {
            activeRow.scrollIntoView({ block: "nearest" });
        }
    }

    function firstVisibleIndex() {
        const rows = getRows();

        for (let i = 0; i < rows.length; i++) {
            if (isRowVisible(rows[i])) return i;
        }

        return -1;
    }

    function moveActiveVisible(delta) {
        const rows = getRows();

        if (!rows.length) return;

        let i = activeIndex;

        if (i < 0 || !isRowVisible(rows[i])) {
            activeIndex = firstVisibleIndex();
            markActive();
            return;
        }

        while (true) {
            i += delta;

            if (i < 0 || i >= rows.length) return;

            if (isRowVisible(rows[i])) {
                activeIndex = i;
                markActive();
                return;
            }
        }
    }

    function updateInputHint() {
        if (!inputHint || !input) return;

        if (isCombo()) {
            const item = getItem(input.value);
            inputHint.textContent = item ? item.label : "";
        }

        if (isSearch()) {
            inputHint.textContent = "";
        }
    }

    function updateActiveFromComboValue() {
        if (!input) return;

        const ix = getIndex(input.value);

        if (ix >= 0) {
            activeIndex = ix;
        } else if (isColor && input.value.startsWith("#")) {
            activeIndex = -1;
        }

        markActive();
        updateInputHint();
    }

    function filterRows() {
        if (!popup || !input) return;
        // kui input algab # siis return
        if (input.value.startsWith("#")) {
            activeIndex = -1;
            return;
        }


        const q = String(input.value ?? "").toLowerCase();
        const rows = getRows();

        rows.forEach((row, i) => {
            const item = items[i];

            const hit =
                String(item.label ?? "").toLowerCase().includes(q) ||
                String(item.value ?? "").toLowerCase().includes(q);

            row.style.display = hit ? "" : "none";
        });

        activeIndex = firstVisibleIndex();
        markActive();
    }

    function commitValue(v) {
        currentValue = v;

        const item = getItem(v);
        text.textContent = item ? item.label : v;

        fireChanged(currentValue);
        closePopup();
    }

    function commitIndex(index) {
        if (index < 0 || index >= items.length) return;

        const item = items[index];

        if (isCombo()) {
            activeIndex = index;
            input.value = item.value;
            updateInputHint();
            markActive();
            input.focus();
            return;
        }

        if (isSearch()) {
            activeIndex = index;
            markActive();
            input.focus();
            return;
        }

        currentValue = item.value;
        activeIndex = index;
        text.textContent = item.label;

        fireChanged(currentValue);
        closePopup();
    }

    function commitCurrent() {
        if (isCombo()) {
            commitValue(input ? input.value : currentValue);
            return;
        }

        else if (isColor) {
            if (activeIndex >= 0) {
                const item = items[activeIndex];
                if (item) commitValue(item.label);
            } else if (input) {
                commitValue(input.value);
            }
        }

        else if (isSearch()) {
            if (activeIndex >= 0) {
                const item = items[activeIndex];
                if (item) commitValue(item.value);
            }
            return;
        }

        commitIndex(activeIndex);
    }

    function moveActive(delta) {
        if (!popup) {
            openPopup();
            return;
        }

        if (isSearch()) {
            moveActiveVisible(delta);
            return;
        }

        activeIndex += delta;

        if (activeIndex < 0) activeIndex = 0;
        if (activeIndex >= items.length) activeIndex = items.length - 1;

        if (isCombo() && input && items[activeIndex]) {
            input.value = items[activeIndex].value;
            updateInputHint();
            input.focus();
        }

        markActive();
    }

    function createInput() {
        const wrap = document.createElement("div");
        wrap.className = "henn-select-combo-wrap";

        input = document.createElement("input");
        input.className = "henn-select-combo-input";

        if (isCombo() || isColor) {
            input.value = currentValue ?? "";
        }        

        else if (isSearch()) {
            input.value = "";
            input.placeholder = "Search...";
        }

        inputHint = document.createElement("div");
        inputHint.className = "henn-select-combo-hint";

        wrap.append(input, inputHint);

        input.addEventListener("input", () => {
            if (isCombo()) {
                firstComboBackspace = false;
                updateActiveFromComboValue();
                filterRows();
            }

            if (isSearch()) {
                filterRows();
            }
        });

        input.addEventListener("keydown", e => {
            if ((isCombo() || isColor) && e.key === "Backspace" && firstComboBackspace) {
                e.preventDefault();
                input.value = "";
                firstComboBackspace = false;
                updateActiveFromComboValue();
                return;
            }

            firstComboBackspace = false;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                moveActive(1);
                return;
            }

            if (e.key === "ArrowUp") {
                e.preventDefault();
                moveActive(-1);
                return;
            }

            if (e.key === "Enter") {
                e.preventDefault();
                commitCurrent();
                return;
            }

            if (e.key === "Escape") {
                e.preventDefault();
                closePopup();
                return;
            }
        });

        requestAnimationFrame(() => {
            input.focus();

            if (isCombo()) {
                input.select();
                updateActiveFromComboValue();
            }

            if (isSearch()) {
                //filterRows();
                input.select();
            }
        });

        return wrap;
    }

    function createButtons() {
        const buttons = document.createElement("div");
        buttons.className = "henn-select-buttons";

        const ok = document.createElement("button");
        ok.type = "button";
        ok.className = "henn-select-button";
        ok.textContent = "OK";

        const cancel = document.createElement("button");
        cancel.type = "button";
        cancel.className = "henn-select-button";
        cancel.textContent = "Cancel";

        ok.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            commitCurrent();
        });

        cancel.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            closePopup();
        });

        buttons.append(ok, cancel);
        return buttons;
    }

    function positionPopup() {
        const gap = 6;

        popup.style.position = "fixed";
        popup.style.zIndex = "99999";
        popup.style.visibility = "hidden";
        popup.style.left = "0px";
        popup.style.top = "0px";
        popup.style.right = "auto";
        popup.style.width = `${preview.getBoundingClientRect().width}px`;

        const previewRect = preview.getBoundingClientRect();
        const popupRect = popup.getBoundingClientRect();

        let left = previewRect.left;
        let top = previewRect.bottom + gap;

        if (top + popupRect.height > window.innerHeight) {
            top = previewRect.top - popupRect.height - gap;
        }

        if (left + popupRect.width > window.innerWidth - gap) {
            left = window.innerWidth - popupRect.width - gap;
        }

        if (left < gap) left = gap;
        if (top < gap) top = gap;

        popup.style.left = `${left}px`;
        popup.style.top = `${top}px`;
        popup.style.visibility = "";
    }

    function openPopup() {
        if (popup) return;

        activeIndex = getIndex(currentValue);
        if (activeIndex < 0) activeIndex = 0;

        firstComboBackspace = true;

        popup = document.createElement("div");
        popup.className = "henn-select-popup";
        if (isColor) {
            popup.style.minWidth = "320px";
        }

        if (hasInput()) {
            popup.appendChild(createInput());
        }

        const list = document.createElement("div");
        list.className = "henn-select-list";

        items.forEach((item, i) => {
            const row = document.createElement("div");
            row.className = "henn-select-row";

            row.innerHTML = `
            <span class="henn-select-row-label">${item.label}</span>
            <span class="henn-select-row-right">
                <span class="henn-select-row-value">${item.value}</span>
                ${isColor ? `<span class="henn-select-row-color" style="background:${item.value};"></span>` : ""}
            </span>
            `;

            row.addEventListener("click", e => {
                e.preventDefault();
                e.stopPropagation();
                commitIndex(i);
            });

            row.addEventListener("dblclick", e => {
                e.preventDefault();
                e.stopPropagation();

                if (isCombo()) {
                    commitValue(items[i].value);
                } else if (isColor) {
                    commitValue(items[i].label);
                } else if (isSearch()) {
                    commitValue(items[i].value);
                } else { commitIndex(i); }
            });

            list.appendChild(row);
        });

        popup.appendChild(list);

        if (hasInput()) {
            popup.appendChild(createButtons());
        }

        const popupHost =
            root.closest("hui-dialog-edit-card") ||
            root.closest("ha-dialog") ||
            root.closest("ha-card") ||
            root.parentElement ||
            root;

        popupHost.appendChild(popup);

        if (hasInput()) {
            //filterRows();
        }

        positionPopup();

        requestAnimationFrame(markActive);
    }

    function togglePopup() {
        if (popup) closePopup();
        else openPopup();
    }

    preview.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        preview.focus();
        togglePopup();
    });

    preview.addEventListener("keydown", e => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            moveActive(1);
            return;
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            moveActive(-1);
            return;
        }

        if (e.key === "Enter") {
            e.preventDefault();

            if (popup) {
                commitCurrent();
            } else {
                openPopup();
            }

            return;
        }

        if (e.key === "Escape") {
            e.preventDefault();
            closePopup();
        }
    });

    return root;
}

function hennCreateColorPicker(editor, key, label, value) {
    const root = document.createElement("div");
    root.className = "henn-color-picker-root";

    const input = document.createElement("input");
    input.type = "color";
    input.className = "henn-color-picker-input";

    input.value = hennColorToHex(value ?? editor._config[key] ?? "#000000");

    input.addEventListener("change", () => {
        const hex = input.value;
        const name = hennHexToColorName(hex);

        editor._config = {
            ...editor._config,
            [key]: name || hex
        };

        editor.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: editor._config },
            bubbles: true,
            composed: true
        }));
    });

    root.appendChild(input);
    return root;
}

function hennCreatePathLineSelector(editor, key, label, value, options, defaultValue = null) {
    const wrapper = document.createElement("div");
    wrapper.className = "henn-line-selector-root";

    const currentValue = value ?? defaultValue;

    wrapper.innerHTML = `
        <div class="henn-line-selector-header">
            ${label ? label + " " : ""}<strong>${currentValue ?? ""}</strong>
        </div>

        <div class="henn-line-selector-track-wrap">
            <div class="henn-line-selector-track"></div>
        </div>
    `;

    const trackWrap = wrapper.querySelector(".henn-line-selector-track-wrap");

    options.forEach((opt, index) => {
        const optValue = opt[0];
        const optLabel = opt[1];

        const edgePad = 4;

        const pct = options.length === 1
            ? 50
            : edgePad + (index / (options.length - 1)) * (100 - edgePad * 2);

        const isSelected = String(optValue) === String(currentValue);

        const item = document.createElement("div");
        item.className = "henn-line-selector-option" + (isSelected ? " selected" : "");
        item.style.left = `${pct}%`;
        item.innerHTML = `
            <div class="henn-line-selector-dot"></div>
            <div class="henn-line-selector-label">${optLabel}</div>
        `;

        item.addEventListener("click", () => {
            if (editor._valueChangedOrDefault) {
                editor._valueChangedOrDefault(key, optValue, defaultValue);
            } else if (editor._valueChanged) {
                editor._valueChanged(key, optValue);
            } else {
                editor._config = hennSetPath(editor._config, key, optValue);
                hennFireConfigChanged(editor);
            }
        });

        trackWrap.appendChild(item);
    });

    return wrapper;
}

function hennGetPath(obj, path) {
    if (!obj || !path) return undefined;

    return String(path)
        .split(".")
        .reduce((cur, part) => cur?.[part], obj);
}

function hennSetPath(obj, path, value) {
    const parts = String(path).split(".");
    const root = { ...(obj || {}) };

    let cur = root;

    for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i];

        cur[p] = {
            ...(cur[p] || {})
        };

        cur = cur[p];
    }

    cur[parts[parts.length - 1]] = value;

    return root;
}

function hennDeletePath(obj, path) {
    const parts = String(path).split(".");
    const root = { ...(obj || {}) };

    let cur = root;

    for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i];

        if (!cur[p]) return root;

        cur[p] = { ...cur[p] };
        cur = cur[p];
    }

    delete cur[parts[parts.length - 1]];

    return root;
}

function hennDeepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function hennValueOrDefault(value, defaultValue) {
    return value === undefined || value === null ? defaultValue : value;
}

function hennIsInherited(config, path) {
    return hennGetPath(config, path) === undefined;
}

function hennSetOrDeleteDefault(obj, path, value, defaultValue) {
    if (hennDeepEqual(value, defaultValue)) {
        return hennDeletePath(obj, path);
    }

    return hennSetPath(obj, path, value);
}

function hennFireConfigChanged(editor) {
    editor.dispatchEvent(new CustomEvent("config-changed", {
        detail: { config: editor._config },
        bubbles: true,
        composed: true
    }));
}

function hennIconButton(icon, active = false, onClick = null) {
    const btn = document.createElement("button");

    btn.className =
        "henn-editor-head-icon" +
        (active ? " active" : "");

    btn.textContent = icon;

    if (onClick) {
        btn.addEventListener("click", onClick);
    }

    return btn;
}

function hennSegmentRow(label, value, options, defaultValue, onChange, opts = {}) {
    const wrap = document.createElement("div");
    wrap.className = "henn-editor-wide-row";

    if (opts.wrapStyle) {
        Object.assign(wrap.style, opts.wrapStyle);
    }

    const lab = document.createElement("div");
    lab.className = "henn-editor-wide-label";
    lab.textContent = label;

    if (opts.labelStyle) {
        Object.assign(lab.style, opts.labelStyle);
    }

    const seg = document.createElement("div");
    seg.className = "henn-editor-segment";

    if (opts.segmentStyle) {
        Object.assign(seg.style, opts.segmentStyle);
    }

    options.forEach(([v, text]) => {
        const btn = document.createElement("button");

        btn.type = "button";

        btn.className =
            "henn-editor-segment-button" +
            (String(v) === String(value) ? " selected" : "");

        btn.textContent = text;

        if (opts.buttonStyle) {
            Object.assign(btn.style, opts.buttonStyle);
        }

        btn.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();

            [...seg.querySelectorAll(".henn-editor-segment-button")]
                .forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");

            onChange(v, defaultValue);
        });

        seg.appendChild(btn);
    });

    wrap.appendChild(lab);
    wrap.appendChild(seg);

    return wrap;
}


function hennColorRow(owner, path, label, value, defaultValue = null) {
    return hennFieldRow(
        label,
        hennColorCell(owner, path, value, defaultValue)
    );
}

function oldhennColorPicker(owner, path, value, defaultValue = null) {
    const picker = document.createElement("input");
    picker.type = "color";
    picker.className = "henn-editor-input";
    picker.style.width = "44px";
    picker.style.height = "34px";
    picker.style.padding = "2px";

    picker.value = hennColorToHex(value ?? defaultValue ?? "#000000");

    picker.addEventListener("change", () => {
        const hex = picker.value.toLowerCase();
        const name = hennHexToColorName(hex);

        owner._valueChangedOrDefault(path, name || hex, defaultValue);
    });

    return picker;
}

function oldhennColorCell(owner, path, value, defaultValue = null) {
    const box = document.createElement("div");
    box.className = "henn-color-cell";

    const selector = hennCreateListSelector(
        owner,
        path,
        "",
        value ?? defaultValue ?? "",
        HENN_CSS_COLORS2,
        "color"
    );

    selector.classList.add("henn-color-cell-selector");

    box.appendChild(selector);
    box.appendChild(
        hennColorPicker(owner, path, value, defaultValue)
    );

    return box;
}

function createSeparator() {
    const hr = document.createElement("div");
    hr.style.height = "1px";
    hr.style.background = "var(--divider-color)";
    hr.style.margin = "8px 0";
    return hr;
}

function hennSausageRow(value, options, defaultValue = "1d", onChange = null, opts = {}) {
    const gap = opts.gap ?? 5;              // %
    const maxExtraDays = opts.maxExtraDays ?? 10;

    const parsePeriod = (v) => {
        if (!v || v === "_") return null;

        const s = String(v).trim();
        const m = s.match(/^(\d+)\s*(d|w|mo|y)$/i);
        if (!m) return null;

        const n = Number(m[1]);
        const unit = m[2].toLowerCase();

        const days =
            unit === "d" ? n :
                unit === "w" ? n * 7 :
                    unit === "mo" ? n * 30 :
                        unit === "y" ? n * 360 :
                            null;

        return { raw: s, n, unit, days };
    };

    const points = options
        .map((p, i) => {
            const val = parsePeriod(p[0]);
            const lab = p[1] && p[1] !== "_" ? String(p[1]) : null;
            return { index: i, value: p[0], label: lab, parsed: val };
        })
        .filter(p => p.parsed);

    if (points.length < 2) return "";

    const step = (100 - 2 * gap) / (points.length - 1);

    for (const p of points) {
        p.left = gap + p.index * step;
    }

    const wanted = parsePeriod(value) ?? parsePeriod(defaultValue);
    const minDays = points[0].parsed.days;
    const maxDays = points[points.length - 1].parsed.days;

    let mummLeft = null;

    if (wanted && wanted.days >= minDays && wanted.days <= maxDays + maxExtraDays) {
        if (wanted.days >= maxDays) {
            mummLeft = points[points.length - 1].left;
        } else {
            for (let i = 0; i < points.length - 1; i++) {
                const a = points[i];
                const b = points[i + 1];

                if (wanted.days >= a.parsed.days && wanted.days <= b.parsed.days) {
                    const k = (wanted.days - a.parsed.days) / (b.parsed.days - a.parsed.days);
                    mummLeft = a.left + k * (b.left - a.left);
                    break;
                }
            }
        }
    }

    const rings = points
        .filter(p => p.label)
        .map(p => `<div class="henn-sausage-ring" style="left:${p.left}%"></div>`)
        .join("");

    const covers = points
        .filter(p => p.label)
        .map(p => `<div class="henn-sausage-cover" style="left:${p.left}%"></div>`)
        .join("");

    const labels = points
        .filter(p => p.label)
        .map(p => `<div class="henn-sausage-label" style="left:${p.left}%">${p.label}</div>`)
        .join("");

    const mumm = mummLeft == null
        ? ""
        : `<div class="henn-sausage-mumm" style="left:${mummLeft}%"></div>`;

    const track = document.createElement('div');
    track.className = "henn-sausage-track";
    // siin lisame träkile eventid
    track.addEventListener("click", ev => {
        if (!onChange) return;

        const r = track.getBoundingClientRect();
        const x = ev.clientX - r.left;
        const pct = gap + (x / r.width) * (100 - 2 * gap);

        const newValue = hennSausageValueFromPercent(pct, points, gap);
        if (newValue) onChange(newValue, defaultValue);
    });


    const wrap = document.createElement('div');
    wrap.className = "henn-sausage";
    wrap.innerHTML = rings;
    wrap.appendChild(track);
    wrap.insertAdjacentHTML("beforeend", covers);
    wrap.insertAdjacentHTML("beforeend", mumm);
    wrap.insertAdjacentHTML("beforeend", labels);
    return wrap;
}

function hennSausageValueFromPercent(pct, points, gap = 3) {
    if (!points?.length) return null;

    const first = points[0];
    const last = points[points.length - 1];

    if (pct <= first.left) return first.value;
    if (pct >= last.left) return last.value;

    for (let i = 0; i < points.length - 1; i++) {
        const a = points[i];
        const b = points[i + 1];

        if (pct >= a.left && pct <= b.left) {
            const k = (pct - a.left) / (b.left - a.left);
            const days = a.parsed.days + k * (b.parsed.days - a.parsed.days);
            return hennSausageFormatDays(days, a.parsed.unit, b.parsed.unit, points);
        }
    }

    return null;
}

function hennSausageFormatDays(days, leftUnit, rightUnit, points) {
    let d = Math.round(days);

    const exact = points.find(p => p.parsed.days === d);
    if (exact) return exact.value;

    if (leftUnit === "d" && rightUnit === "d") {
        return `${d}d`;
    }

    if (leftUnit === "w" || rightUnit === "w") {
        return d % 7 === 0 ? `${d / 7}w` : `${d}d`;
    }

    if (d % 30 === 0) return `${d / 30}mo`;
    if (d % 7 === 0) return `${d / 7}w`;

    d = Math.round(d / 10) * 10;

    const exactAfterRound = points.find(p => p.parsed.days === d);
    if (exactAfterRound) return exactAfterRound.value;

    return `${d}d`;
}

function clamp01(x) {
    if (isNaN(x)) return 0;
    return Math.max(0, Math.min(1, x));
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function hexToRgb(hex) {
    hex = String(hex || "").trim();

    const named = {
        white: "#ffffff",
        black: "#000000",
        red: "#ff0000",
        green: "#008000",
        blue: "#0000ff",
        orange: "#ffa500",
        yellow: "#ffff00",
        gray: "#808080",
        grey: "#808080"
    };

    hex = named[hex.toLowerCase()] || hex;

    if (hex.startsWith("#")) {
        hex = hex.substring(1);
    }

    if (hex.length === 3) {
        hex = hex.split("").map(x => x + x).join("");
    }

    if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
        return { r: 255, g: 165, b: 0 }; // orange fallback
    }

    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}

function mixColor(c1, c2, t) {
    t = clamp01(t);

    const a = hexToRgb(c1);
    const b = hexToRgb(c2);

    const r = Math.round(lerp(a.r, b.r, t));
    const g = Math.round(lerp(a.g, b.g, t));
    const b2 = Math.round(lerp(a.b, b.b, t));

    return `rgb(${r},${g},${b2})`;
}

function hennGenericInput(owner, input, path, value, defaultValue,
    { onChange = null, classList = [], style = {}, eventListeners = {} } = {}) {

    function readValue() {
        if (input.type === "number") {
            const v = Number(input.value);
            return isNaN(v) ? null : v;
        }

        if (input.type === "checkbox") {
            return input.checked;
        }

        if (input.type === "color") {
            const hex = input.value.toLowerCase();
            const name = hennHexToColorName(hex);
            return name || hex;
        }

        return input.value;
    }

    if (Array.isArray(classList)) { 
        for (const cls of classList || []) {
            input.classList.add(cls);
        }
    }

    Object.assign(input.style, style);

    input.addEventListener("change", () => {
        const newValue = readValue();

        if (typeof onChange === "function") {
            onChange(path, newValue, defaultValue, owner);
        }
        else if (defaultValue !== undefined) {
            owner._config = hennSetOrDeleteDefault(
                owner._config,
                path,
                newValue,
                defaultValue
            );
            hennFireConfigChanged(owner);
        }
        else {
            owner._config = hennSetPath(
                owner._config,
                path,
                newValue
            );
            hennFireConfigChanged(owner);
        }
    });

    for (const [eventName, handler] of Object.entries(eventListeners || {})) {
        input.addEventListener(eventName, handler);
    }

    return input;
}

function hennTextInput(owner, path, value, defaultValue = "", opt = {}) {
    const input = document.createElement("input")
        .setType("text")
        .addClasses("henn-editor-input");
    input.value = value ?? "";

    return hennGenericInput(owner, input, path, value, defaultValue, opt);
}
function hennNumberInput(owner, path, value, defaultValue, step = 1, min = undefined, max = undefined, opt = {}) {
    ({ min = min, max = max, step = step } = opt || {});
    const input = document.createElement('input')
        .addClasses('henn-editor-input')
        .setType('number')
        .addProperties(
            {
                step, min, max, value: value ?? ""
            }
        )
        ;
    return hennGenericInput(owner, input, path, value, defaultValue, opt);
}

function hennCheckbox(owner, path, value, defaultValue = "", opt = {}) {
    const input = document.createElement("input").addClasses('henn-editor-input').setType('checkbox')
        .addProperties({
            checked: !!value,
            value: value ?? ""
        })
        ;

    return hennGenericInput(owner, input, path, value, defaultValue, opt);
}

function hennColorCell(owner, path, value, defaultValue = null, opt = {}) {
    const box = document.createElement("div");
    box.className = "henn-color-cell"; 

    const selector = hennCreateListSelector(
        owner,
        path,
        "",
        value ?? defaultValue ?? "",
        HENN_CSS_COLORS2,
        "color"
    );

    selector.classList.add("henn-color-cell-selector");

    box.appendChild(selector);
    box.appendChild(
        hennColorPicker(owner, path, value, defaultValue, opt)
    );

    return box;
}

function hennColorPicker(owner, path, value, defaultValue = null, opt = {}) {
    const picker = document.createElement("input")
        .addClasses("henn-editor-input")
        .addStyle({
            width: "44px",
            height: "34px",
            padding: "2px"
        }).setType("color");
    picker.value = hennColorToHex(value ?? defaultValue ?? "#000000");
    return hennGenericInput(owner, picker, path, value, defaultValue, opt);
}



function hennTextRow(owner, label, path, value, defaultValue = "", opt = {}) {
    return hennFieldRow(label, hennTextInput(owner, path, value, defaultValue, opt));
}

function hennNumberRow(owner, label, path, value, defaultValue, step = 1, min = undefined, max = undefined, opt = {}) {
    return hennFieldRow(label, hennNumberInput(owner, path, value, defaultValue, step, min, max, opt));
}

function hennCheckboxRow(owner, label, path, value, defaultValue = "", onChange = null, opt = {}) {
    return hennFieldRow(label, hennCheckbox(owner, path, value, defaultValue, onChange, opt));
}

function hennFieldRow(label, control, className = "henn-editor-row", labelClassName = undefined) {
    const row = document.createElement("div").addClasses(className || "henn-editor-row");

    const lab = document.createElement("div").addClasses(labelClassName);
    lab.textContent = label;

    row.appendChild(lab);
    row.appendChild(control);

    return row;
}

function hennMultiRow(label, controls = [], className = "henn-editor-row", labelClassName = undefined) {
    const row = document.createElement("div").addClasses(className);

    const lab = document.createElement("div"). addClasses(className);
    lab.textContent = label;

    row.appendChild(lab);

    if (Array.isArray(controls)) {
        for (const control of controls || []) {
            row.appendChild(control || document.createElement("div"));
        }
    }

    return row;
}
