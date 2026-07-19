# Henn Wind Rose Card

`custom:henn-windrose-card` draws a transparent SVG ring from Home Assistant history. For every numeric speed sample, the card uses the latest direction sample at or before that time, rotates it, and adds the non-negative speed to a direction bucket. Bucket opacity is normalized against the strongest bucket.

The card requests history once when it first receives the Home Assistant object. Its visual height is reported as three dashboard rows, while the rendered `ha-card` itself has a transparent background, no border, and no shadow.

## Configuration

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | string | required | Must be `custom:henn-windrose-card`. |
| `direction_entity` | entity ID | required | Numeric wind direction in degrees. Missing or non-numeric history states are ignored. |
| `speed_entity` | entity ID | required | Numeric wind speed. Negative values contribute zero; the unit is otherwise irrelevant because values are normalized. |
| `period` | string | `1d` | History window. Accepted behavior is `day`/`1d`, `week`/`7d`, `month`/`30d`, or an integer followed by `d`. Any other value falls back to one day. |
| `bucket_size` | number | `5` | Direction bucket width in degrees. The editor offers 5, 6, 10, 12, 15, 20, and 30. |
| `inner_radius` | number | `35` | Inner SVG radius. Rendering clamps it to 0–50. The editor stub initially uses 30. |
| `outer_radius` | number | `50` | Outer SVG radius. Rendering clamps it to the effective inner radius–100 range. |
| `rotation` | number | `0` | Degrees added to every direction before bucketing. The editor range is -180–180 in steps of 5. |
| `color` | CSS color | `deepskyblue` | Fill color for all sectors. |
| `min_opacity` | number | `0.15` | Opacity assigned to a bucket with normalized value 0. The editor range is 0–1. |
| `max_opacity` | number | `0.9` | Opacity assigned to the strongest bucket. The editor range is 0–1. |

`bucket_size` should be positive. Values that divide 360 produce equal sectors and match the editor's choices. The card does not validate radius or opacity ordering in YAML; use sensible numeric values or the paired editor sliders.

## YAML examples

Minimal:

```yaml
type: custom:henn-windrose-card
direction_entity: sensor.wind_direction
speed_entity: sensor.wind_speed
```

Customized:

```yaml
type: custom:henn-windrose-card
direction_entity: sensor.weather_station_wind_direction
speed_entity: sensor.weather_station_wind_speed
period: 10d
bucket_size: 10
inner_radius: 30
outer_radius: 55
rotation: -15
color: "#00bfff"
min_opacity: 0.1
max_opacity: 0.85
```

## Visual editor

Choose **Henn Wind Rose Card** in Home Assistant's card picker. The editor provides:

- sensor-only entity pickers for direction and speed;
- a period selector;
- the supported bucket-size buttons;
- a CSS color selector and color picker;
- a rotation slider;
- paired inner/outer radius and minimum/maximum opacity sliders.

The newly added card stub uses `period: 30d` and `inner_radius: 30`, which intentionally differ from the runtime defaults used when those keys are absent. Although the period selector displays additional choices such as `1w` and `1M`, the current card logic only interprets the formats listed in the configuration table; unsupported values fall back to one day.

## Manual checks

Use two numeric sensors with recorder history. Confirm that the minimal configuration renders, then change the period and bucket width and reload the view. Rotate the rose and verify that the sectors move. Set noticeably different opacity endpoints and verify the contrast between weak and strong buckets. Finally, use an entity with no usable history and check that the card remains empty without a JavaScript error.
