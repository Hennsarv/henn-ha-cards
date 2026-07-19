# Henn Stonehenge Card

`custom:henn-stonehenge-card` is a circular history profile. It loads numeric state history for every enabled series, assigns samples to a day, 31-day month, or 360-part year dial, aggregates each bucket, normalizes each series against its own minimum and maximum, and renders it as a gradient ring, radial bars, or a circular line.

Root series settings are defaults. Any matching key in a `series[]` item overrides that default. Dial (`ticks`) and center-label (`label`) settings are root-only. The card reports three dashboard rows.

## Root configuration

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | string | required | Must be `custom:henn-stonehenge-card`. |
| `bucketing` | string | `day` | Dial and time-of-cycle mapping: `day`, `month`, or `year`. Day uses local time, month uses day 1–31, and year maps days to 360 positions. |
| `bucket_size` | string/number | `1h` | Bucket width for day/month: integer plus `m`, `h`, or `d`; a bare number is treated as minutes. Year always renders 360 buckets, so this value does not change year bucket count. |
| `history_period` | string | `1d` | History loaded for every series unless overridden. Supports `day`, `week`, `month`, `year`, or an integer followed by `m`, `h`, or `d`; other formats fall back to one day. |
| `diagram_type` | string | `gradient` | Default series renderer: `gradient`, `bar`, or `line`. |
| `anchor` | string | `lower` | For bars and lines, map low values from `lower` or from `upper`. It does not alter gradient rendering. |
| `aggregate` | string | `avg` | `avg`, `sum`, `count`, `max`, `min`, or `distinct`. The code also accepts `countunique` and `count_unique` as aliases of `distinct`. |
| `series` | list | `[]` | Series definitions. No data is drawn until a series with `value_entity` is provided. |
| `gradient`, `bar`, `line`, `fill` | object | see below | Shared defaults inherited by every series. |
| `lower`, `upper` | object | see below | Shared rail geometry and style. Series inherit their values but must explicitly set their own rail `show: true` to draw a per-series rail. |
| `ticks` | object | see below | Root dial labels, circles, minor ticks, and dial fill. |
| `label` | object | see below | Optional multiline text at the center, top, or bottom. |
| `debug` | boolean | `false` | When `true`, shows a render counter and time stamp on the card and editor. |
| `max_opacity`, `min_opacity`, `opacity` | number | unset | Legacy root aliases copied into `gradient.max_opacity`, `gradient.min_opacity`, and `gradient.opacity` unless the nested value overrides them. |
| `label_text` | string | `""` | Legacy root alias used as `label.text` unless nested `label.text` overrides it. |
| `color`, `mode`, `min_color`, `max_color`, `line_width` | mixed | unset | Legacy fallbacks inherited by series. Prefer `gradient.*` and `line.stroke`; nested values take precedence in normal configurations. |

## Series fields

| Field | Type | Default/inheritance | Description |
| --- | --- | --- | --- |
| `value_entity` | entity ID | unset | Numeric sensor whose recorder history is loaded. |
| `name` | string | unset | Series name, used by the default caption text `{name}` and editor heading. |
| `title` | string | unset | Editor heading only; takes precedence over `name`. |
| `show` | boolean | `true` | `false` excludes the series before loading or rendering. |
| `enabled` | boolean | `true` | `false` also excludes the series. The current editor exposes `show`; `enabled` is YAML-only. |
| `bucket_size`, `history_period`, `diagram_type`, `anchor`, `aggregate` | matching root type | root value | Per-series override of the root default. |
| `gradient`, `bar`, `line`, `fill` | object | root object | Per-series style override, merged one level deep with shared defaults. |
| `lower`, `upper` | object | root object | Per-series geometry/style override. A per-series rail is only drawn when its own `show` is exactly `true`. |
| `caption` | object | see below | Optional text following an arc or the series line. |
| `color` | CSS color | gradient color | Fallback series color used by bars and lines. |

The visual editor also stores `_editor_open` on a series and `_editor_ticks_open` / `_editor_defaults_open` at root to remember collapsed sections. These keys affect only editor presentation, not card output.

## Drawing objects

### `gradient`

| Field | Default | Description |
| --- | --- | --- |
| `color` | `orange` | Sector color in opacity mode and series color fallback. |
| `mode` | `opacity` | `opacity` varies opacity between the endpoints; `color` blends between `min_color` and `max_color`. |
| `min_opacity` | `0.15` | Opacity for the normalized minimum in opacity mode. |
| `max_opacity` | `0.9` | Opacity for the normalized maximum in opacity mode. |
| `opacity` | `0.5` | Fixed opacity in color mode. |
| `min_color` | `null` at runtime (`white` fallback) | Color for the normalized minimum in color mode. |
| `max_color` | `null` at runtime (`black` fallback) | Color for the normalized maximum in color mode. |

### `bar`, `line`, and `fill`

| Field | Default | Description |
| --- | --- | --- |
| `bar.gap` | `0` | Angular gap in degrees between grouped bar series that share the same `bar.cap`. |
| `bar.margin_left` | `0` | Left margin as a percentage of a bucket when automatic grouping is not active. |
| `bar.margin_right` | `0` | Right margin as a percentage of a bucket when automatic grouping is not active. |
| `bar.cap` | unset | Group key. Bar series with the same non-null value are placed side by side automatically. |
| `line.show` | `true` | Draw the line/stroke. |
| `line.color` | `black` | Stroke color. |
| `line.stroke` | `2` | Stroke width. |
| `line.smooth` | `false` | Use a smooth closed curve instead of straight segments. |
| `fill.show` | `true` | Draw bar fill; for line series, fill the area between the line and its anchor rail. |
| `fill.color` | `white` | Fill color. |
| `fill.opacity` | `0` | Fill opacity. |

`line_width` is also read as a legacy fallback for a line-series stroke width, but the normal field is `line.stroke`.

### `lower` and `upper`

Both rail objects accept the same fields:

| Field | Lower default | Upper default | Description |
| --- | --- | --- | --- |
| `show` | `true` | `true` | Draw the root rail. On a series override, only explicit `true` draws that series rail. |
| `stroke` | `1` | `1` | Circle stroke width. |
| `color` | `white` | `white` | Circle color. |
| `radius` | `30` | `90` | SVG radius. These radii also define the value range for bars and lines. |
| `gap` | `0` | `0` | Move the lower rail inward or upper rail outward by this amount. |

## Dial and labels

### `ticks`

| Field | Default | Description |
| --- | --- | --- |
| `show` | `true` | Draw the dial. |
| `tight` | `true` | Stored by the configuration but not consulted by the current renderer. |
| `radius` | `95` | Radius used for dial text and derived circle/minor-tick radii. |
| `direction` | `vertical` | `vertical` keeps labels screen-aligned; `radial` rotates them around the dial. |
| `width` | `ticks.font.size * 2` | Width used to derive inner and outer radii. |
| `color` | `black` | Default color inherited by dial components. |
| `font.size` | `5` | Dial-label font size. |
| `font.color` | `ticks.color` | Accepted and inherited, although the current label renderer uses `ticks.color` directly. |
| `fill.show` | `false` | Fill the ring between inner and outer circles. |
| `fill.color` | `white` | Dial-ring fill color. |
| `inner.show` | `true` | Draw the inner circle. |
| `inner.stroke` | `1` | Inner circle stroke width. |
| `inner.color` | `ticks.color` | Inner circle color. |
| `inner.radius` | `ticks.radius - ticks.width / 2` | Inner circle radius. |
| `inner.gap` | unset | Editable by the visual editor, but not consulted by the current tick renderer. |
| `outer.show` | `true` | Draw the outer circle. |
| `outer.stroke` | `0` | Outer circle stroke width. The editor displays 1 when absent, but the runtime default is 0. |
| `outer.color` | `ticks.color` | Outer circle color. |
| `outer.radius` | `ticks.radius + ticks.width / 2` | Outer circle radius. |
| `outer.gap` | unset | Editable by the visual editor, but not consulted by the current tick renderer. |
| `minor.show` | `true` | Draw unlabeled tick marks. |
| `minor.stroke` | `0.5` | Minor-tick stroke width. |
| `minor.color` | `ticks.color` | Minor-tick color. |
| `minor.radius` | `ticks.radius` | Minor-tick center radius. |
| `minor.length` | `2` | Minor-tick length. |

For compatibility, the renderer also accepts `ticks.inner_line` and `ticks.outer_line` only when `ticks.inner` or `ticks.outer` is absent; normal configuration should use the documented names.

### `label`

| Field | Default | Description |
| --- | --- | --- |
| `show` | `false` | Draw the label when text is non-empty. |
| `position` | `center` | `top`, `bottom`, or any other value for center. |
| `text` | `""` | Text; newline characters create multiple lines. |
| `font_size` | `7` | Text size. |
| `color` | `white` | Text color. |
| `margin` | `12` | Top or bottom offset. |

### `series[].caption`

| Field | Default | Description |
| --- | --- | --- |
| `show` | `false` | Draw the caption. |
| `text` | `{name}` | Text template. `{path}` reads a property from the merged series; `{/path}` reads a root card property. |
| `position` | `up` | `up` follows the upper arc, `down`/`low` the lower arc, `middle` the midpoint, and `line` the series value path. |
| `alignment` | `S` | Arc center: `N`, `NE`, `E`, `SE`, `S`, `SW`, `W`, `NW`, or a numeric angle. |
| `path` | `180` | Caption path span in degrees; must be positive. |
| `text_align` | `middle` | SVG alignment: `start`/`left`, `middle`/`center`, `end`/`right`, or a start-offset value. |
| `gap` | `0` | Radial offset from the selected path. |
| `font.size` | `5` | Caption font size. |
| `font.color` | `black` | Caption text color. |
| `font.fill` | `none` | Color behind the caption path; the path stroke is `font.size + 2`. |
| `font.gap` | `font.size * 0.5` | SVG text `dy` offset. |
| `guide.mode` | `raw` | For `position: line`: `raw`, `average`/`avg`, or `sliding`/`slider`. |
| `guide.strength` | `0.5` | How strongly guided radii move toward the average. |
| `guide.neighbors` | `2` | Neighbor count on each side in sliding mode. |

The runtime defaults are created under the misspelled key `quide`, but rendering reads `guide`. Configure `guide` as shown above for line guidance; an omitted `guide` behaves as raw mode.

## YAML examples

Minimal line profile:

```yaml
type: custom:henn-stonehenge-card
bucketing: day
bucket_size: 1h
history_period: 7d
series:
  - value_entity: sensor.outdoor_temperature
    name: Outdoor temperature
    diagram_type: line
```

Multiple renderers and a customized dial:

```yaml
type: custom:henn-stonehenge-card
bucketing: day
bucket_size: 30m
history_period: 14d
aggregate: avg
ticks:
  color: "#9aa0a6"
  direction: radial
  radius: 90
  minor:
    length: 3
label:
  show: true
  text: "Daily\nprofile"
  color: white
series:
  - value_entity: sensor.outdoor_temperature
    name: Temperature
    diagram_type: gradient
    gradient:
      mode: color
      min_color: deepskyblue
      max_color: orangered
      opacity: 0.75
  - value_entity: sensor.wind_speed
    name: Wind
    diagram_type: bar
    anchor: lower
    fill:
      color: gold
      opacity: 0.65
    line:
      color: orange
      stroke: 0.5
```

Grouped bars and a caption:

```yaml
type: custom:henn-stonehenge-card
bucketing: month
bucket_size: 6h
history_period: 30d
series:
  - value_entity: sensor.energy_import
    name: Import
    diagram_type: bar
    aggregate: sum
    bar:
      cap: energy
      gap: 0.5
    caption:
      show: true
      text: "{name}"
      position: up
      alignment: S
  - value_entity: sensor.energy_export
    name: Export
    diagram_type: bar
    aggregate: sum
    bar:
      cap: energy
      gap: 0.5
```

## Visual editor

Choose **Henn Stonehenge Card** in Home Assistant's card picker. The editor contains:

- **Stonehenge**: day, month, or year bucketing;
- **Numbrilaud**: dial visibility, colors, radius, text direction, circles, minor marks, fill, and font controls;
- **Seeriate vaikimisi seaded**: bucket size, aggregation, diagram type, anchor, history period, shared line/fill/rails, radii, and gradient controls;
- **Seeriad**: add, reorder, show/hide, collapse, or delete series; choose an entity and override the shared settings for that series.

The editor offers history shortcuts including `1w`, `1mo`, and `1y`, but the current history parser only handles the formats documented in the root table. Those shortcuts therefore fall back to one day; enter an equivalent supported value such as `7d`, `30d`, or `365d` in YAML when required. Changing bucketing in the editor resets root `bucket_size` to `10m`, `6h`, or `7d` for day, month, or year respectively.

## Manual checks

Use numeric sensors with recorder history. Verify each renderer (`gradient`, `bar`, `line`), every aggregation, and all three dial choices. Add two series and confirm that a root setting is inherited until overridden on one series. Hide, reorder, and delete a series in the editor, save, and reopen the view. For grouped bars, give two bar series the same `bar.cap`. For captions, test both an arc position and `position: line`. Finally, test a sensor with no usable history and inspect the browser console for history API or SVG errors.
