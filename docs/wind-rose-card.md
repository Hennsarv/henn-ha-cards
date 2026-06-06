# Henn Wind Rose Card

Wind rose visualization for Home Assistant weather station data.

## Features

- Wind direction histogram
- Configurable bucket size
- Configurable inner and outer radius
- Rotation support
- Opacity scaling by wind strength
- SVG based rendering

## Configuration

| Parameter | Default | Description |
|------------|------------|------------|
| direction_entity | required | Entity containing wind direction |
| speed_entity | required | Entity containing wind speed |
| period | 1d | Time period |
| bucket_size | 5 | Direction bucket size in degrees |
| inner_radius | 35 | Inner radius percentage |
| outer_radius | 50 | Outer radius percentage |
| rotation | 0 | Diagram rotation |
| color | deepskyblue | Base color |
| min_opacity | 0.05 | Minimum sector opacity |
| max_opacity | 0.9 | Maximum sector opacity |

## Example

```yaml
type: custom:henn-wind-rose-card

direction_entity: sensor.ws2900_v2_01_14_wind_direction
speed_entity: sensor.ws2900_v2_01_14_wind_speed

period: 10d

bucket_size: 10

inner_radius: 35
outer_radius: 50

rotation: 0

color: deepskyblue
```

## Notes

The card uses historical Home Assistant statistics to calculate wind frequency and intensity.

Wind speed affects sector opacity while direction determines sector position.