# Henn Home Assistant Cards

Three custom Lovelace cards for Home Assistant, distributed as one JavaScript resource:

- **Henn Layered Card** stacks ordinary Home Assistant cards and resolves values in their configuration.
- **Henn Wind Rose Card** draws a transparent wind-direction ring from direction and speed history.
- **Henn Stonehenge Card** plots one or more sensor histories on a circular day, month, or year scale.

All three cards include visual configuration editors. The Layered editor can open each embedded card's own editor when that card provides one.

## Installation

### HACS

1. In HACS, open **Frontend**.
2. Add `https://github.com/Hennsarv/henn-ha-cards` as a custom repository with category **Dashboard**.
3. Find **Henn HA Cards** and install it.
4. Restart Home Assistant if HACS requests it, then hard-refresh the browser.

HACS installs `dist/henn-ha-cards.js` and normally registers the frontend resource automatically. If the cards are not listed, verify the resource under **Settings → Dashboards → Resources**.

### Manual installation

1. Copy `dist/henn-ha-cards.js` to Home Assistant's `config/www/henn-ha-cards/` directory.
2. Open **Settings → Dashboards → Resources** and add:

   ```text
   /local/henn-ha-cards/henn-ha-cards.js
   ```

3. Select **JavaScript module** as the resource type.
4. Hard-refresh the browser. After an update, append or change a cache-busting query string such as `?v=1.0.28` if the old bundle remains cached.

YAML-managed dashboards can register the same resource in `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/henn-ha-cards/henn-ha-cards.js
      type: module
```

## Cards

### Henn Layered Card

Stacks embedded cards in one 500 px minimum-height container. It supports layer ordering, CSS positioning, globals, entity-state references, and declarative assignments into child-card configuration.

```yaml
type: custom:henn-layered-card
globals:
  accent: deepskyblue
layers:
  - layer_seq: 1
    type: markdown
    content: "Current temperature: {@sensor.outdoor_temperature}"
  - layer_seq: 2
    type: custom:henn-windrose-card
    direction_entity: sensor.wind_direction
    speed_entity: sensor.wind_speed
    color: "{@@accent}"
```

See [Layered Card documentation](docs/layered-card.md) for every field, reference syntax, and `henn_resolve` rules.

### Henn Wind Rose Card

Loads direction and speed history, assigns each speed sample to the most recent direction, sums speed by direction bucket, and visualizes the normalized sums as opacity.

```yaml
type: custom:henn-windrose-card
direction_entity: sensor.wind_direction
speed_entity: sensor.wind_speed
period: 7d
bucket_size: 10
inner_radius: 35
outer_radius: 50
rotation: 0
color: deepskyblue
min_opacity: 0.15
max_opacity: 0.9
```

See [Wind Rose Card documentation](docs/wind-rose-card.md) for every field and editor control.

### Henn Stonehenge Card

Aggregates one or more numeric sensor histories into a circular day, month, or year profile. Each series can use a gradient, radial bars, or a circular line.

```yaml
type: custom:henn-stonehenge-card
bucketing: day
bucket_size: 1h
history_period: 7d
series:
  - value_entity: sensor.outdoor_temperature
    name: Outdoor temperature
    diagram_type: line
    line:
      color: orange
      stroke: 2
```

See [Stonehenge Card documentation](docs/stonehenge-card.md) for every root, series, tick, rail, gradient, line, fill, label, and caption field.

## Using the visual editors

Add a card through **Edit dashboard → Add card** and search for **Henn Wind Rose Card** or **Henn Stonehenge Card**. Home Assistant calls the editor shipped in the same JavaScript bundle; no separate editor resource is needed.

- The **Wind Rose editor** selects two sensor entities and edits period, bucket size, color, rotation, radii, and opacity range.
- The **Stonehenge editor** edits the time scale, dial, shared series defaults, and a reorderable list of series. Add a series with **+**, choose its entity, and use the per-series controls to override shared defaults. The checkmark shows or hides a series and the trash button removes it.
- The **Layered editor** manages ordering, globals, layer sequence, wrapper style, resolution rules, and embedded cards. Add a layer with **+**, select a child card, and configure it with that card's own visual editor. Cards without their own editor fall back to Home Assistant's card-element editor. Use **↺** to replace a child card type.

The editors may omit default-valued keys from the saved YAML. This is expected: the card restores those defaults at runtime.

## Manual verification in Home Assistant

1. Confirm that the resource URL loads without a 404 and that the browser console contains `HENN HA CARDS 1.0.28`.
2. Create a temporary dashboard view and add one minimal example for each card. Replace the sample entity IDs with numeric sensors that have recorder history.
3. For Wind Rose, verify that a ring appears after history loads. Change `rotation`, `bucket_size`, and the opacity range in the visual editor and confirm that the preview and saved YAML update.
4. For Stonehenge, add at least two series, give them different diagram types, and verify the day/month/year dial choices. Change a shared default, override it on one series, hide/show a series, reorder it, and reopen the dashboard to confirm persistence.
5. For Layered Card, place two simple child cards in `layers`, give them different `layer_seq` values and styles, and verify stacking. Then test one `{@entity_id}` reference, one `{@@global}` reference, and one `henn_resolve` rule.
6. Test an entity with no recent history. Wind Rose should render an empty/transparent ring; Stonehenge should leave empty buckets undrawn rather than inventing values.
7. Check both light and dark themes, narrow/mobile width, and the browser console for resource, history API, or custom-element errors.
8. After changing the resource file, hard-refresh or change the resource query string before comparing results, so the browser does not use a cached bundle.

No automated test harness is included; these checks exercise the bundle in its intended Home Assistant environment.
