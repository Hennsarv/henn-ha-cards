# Henn Stonehenge Card

Compass style directional visualization card.

## Features

- Circular layout
- Direction indicators
- Dynamic marker sizing
- Dynamic styling
- SVG based rendering

## Configuration

### Base Example

```yaml
type: custom:henn-stonehenge-card

compass_entity: sensor.ws2900_v2_01_14_wind_direction
```

### Indicator Example

```yaml
indicators:

  - sensor: sensor.ws2900_v2_01_14_wind_speed

    indicator:
      image: arrow_inward
      size: 10

      dynamic_style:
        sensor: sensor.ws2900_v2_01_14_wind_speed

        bands:
          - from_value: 2
            size: 20
```

## Notes

The card is designed as a generic circular visualization engine.

Indicators may be static or dynamically styled based on Home Assistant entity values.

Multiple indicators may be displayed simultaneously.