# Henn Layered Card

`custom:henn-layered-card` creates ordinary Home Assistant cards through `loadCardHelpers()` and places each one as an absolute layer in a shared container. The container fills the available width and height and has a minimum height of 500 px. The card reports six dashboard rows.

Before creating each child card, it resolves global and entity references throughout that child's configuration, then applies any `henn_resolve` rules. `style` and `layer_seq` control the wrapper and are not passed to the child card.

## Configuration

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | string | required | Must be `custom:henn-layered-card`. |
| `globals` | object or list | sample object | Named constant values or entity-backed values used by `{@@name}` references. The default object contains `main_entity`, `outside_temp`, and `accent`; both supported shapes are shown below. |
| `order` | object | see below | Controls sorting by `layer_seq`. |
| `order.reverse` | boolean | `false` | Due to the implemented comparison, `false` sorts numeric sequence values descending and `true` sorts them ascending. |
| `order.nulls` | string | `last` | `first` places layers without `layer_seq` first; every other value places them last. Their original relative order is retained. |
| `layers` | list | `[]` | Child-card configurations, including the layer-only fields below. |
| `layers[].show` | boolean | `true` | `false` keeps the layer in the editor but excludes it from rendering. The field is not passed to the child card. |
| `layers[].layer_seq` | number | unset | Optional sort key. It is removed before the child card is created. Equal values retain YAML order. |
| `layers[].style` | object | `{}` | CSS properties assigned to the absolute wrapper. They override the wrapper defaults `position: absolute` and `inset: 0`. |
| `layers[].henn_resolve` | list | `[]` | Declarative rules applied to the child configuration, then removed before child creation. |
| `layers[].henn_resolve[].entity` | entity ID | required for a rule | Entity whose current state or attribute supplies the value. A missing entity skips the rule. |
| `layers[].henn_resolve[].attribute` | string | unset | If present, read this entity attribute instead of state. |
| `layers[].henn_resolve[].template` | JavaScript expression | unset | Optional expression evaluated with numeric variable `value`; for example `value * 2`. On an error the untransformed value is used. |
| `layers[].henn_resolve[].target` | dotted path | required for a rule | Existing nested path in the child configuration to overwrite, such as `card_mod.style.opacity`. Missing intermediate objects cause no assignment. |

Every other key in a `layers[]` item is the embedded card's own configuration. The Layered Card does not constrain those fields.

## References and globals

`{@sensor.entity_id}` is replaced with that entity's current **state**. Attributes are not supported by this shorthand. `{@@name}` is replaced with a global value. Replacement traverses strings inside nested objects and arrays. References embedded in a longer string become strings; unresolved references remain unchanged.

When `globals` is omitted, the card uses this default object. The editor displays it but does not write it to YAML unless it is changed:

```yaml
globals:
  main_entity: light.elutuba
  outside_temp: sensor.outdoor_temperature
  accent: "#00aaff"
```

Globals may use an object:

```yaml
globals:
  title: Weather
  fixed_radius:
    value: 42
  period:
    value_source: input_select.weather_period
```

Or a list:

```yaml
globals:
  - name: title
    value: Weather
  - name: period
    value_source: input_select.weather_period
```

In object form a plain scalar is returned directly, `{ value: ... }` returns `value`, and `{ value_source: ... }` returns that entity's current state. In list form each item uses `name` with either `value` or `value_source`.

## YAML examples

Two overlaid cards with reference substitution:

```yaml
type: custom:henn-layered-card
globals:
  rose_color: deepskyblue
order:
  reverse: false
  nulls: last
layers:
  - layer_seq: 20
    type: markdown
    content: "Wind: {@sensor.wind_speed}"
    style:
      z-index: 2
      pointer-events: none
  - layer_seq: 10
    type: custom:henn-windrose-card
    direction_entity: sensor.wind_direction
    speed_entity: sensor.wind_speed
    color: "{@@rose_color}"
    style:
      z-index: 1
```

Declarative value assignment:

```yaml
type: custom:henn-layered-card
layers:
  - type: gauge
    entity: sensor.battery_voltage
    min: 0
    max: 20
    severity:
      green: 12
      yellow: 10
      red: 0
    henn_resolve:
      - entity: sensor.battery_limits
        attribute: maximum
        target: max
      - entity: sensor.battery_limits
        attribute: minimum
        template: value * 0.9
        target: min
```

## Visual editor

Choose **Henn Layered Card** in Home Assistant's card picker. The editor follows the same shared helper controls and section styling as the Stonehenge editor.

- **Layered Card** controls whether numeric `layer_seq` values sort ascending or descending and whether layers without a sequence come first or last.
- **Globals** edits the supported object or list form as JSON because the structure is open-ended.
- **Layers** adds, collapses, shows/hides, and deletes layers. Each layer has a Stonehenge-style header and a collapsible **Card settings** section for `layer_seq`, wrapper `style`, and `henn_resolve` rules.
- Press **+** to add a layer, then choose its child card through Home Assistant's card picker.
- When the selected child card implements `getConfigElement()`, its own visual editor is mounted directly inside the layer. Changes from that editor are merged back while preserving `layer_seq`, `style`, and `henn_resolve`.
- When a child card has no visual editor or its editor cannot be created, it falls back to Home Assistant's card-element editor.
- The checkmark toggles `show`. For deletion safety, the trash button appears only after the layer has been hidden.

Wrapper CSS and resolution rules are edited as JSON because their structures are open-ended and have no matching shared helper. Invalid JSON is marked with the error color and is not written to the configuration. Ordering, sequence numbers, choices, and boolean values use the same shared helpers as the Stonehenge editor. YAML code mode remains available when it is more convenient.

## Manual checks

Start with two Markdown cards and distinct `z-index` or positioning styles so stacking is obvious. Add one through the Layered editor and verify that the Markdown card's own editor appears and persists its changes. Add a custom card with an editor and one card without an editor to exercise both the nested GUI and Home Assistant fallback. Change `layer_seq`, `order.reverse`, and `order.nulls` independently and verify the visible order. Hide a layer and confirm that it is not rendered and that the delete button becomes available; show it again and verify that the delete button disappears. Test object-form and list-form globals, an entity shorthand, and a `henn_resolve` rule for both state and attribute. Save and reopen the dashboard. Use an invalid entity once and confirm its reference remains visible or its rule is skipped. Check the browser console if a child card type is not installed, a nested editor fails, or a template expression fails.
