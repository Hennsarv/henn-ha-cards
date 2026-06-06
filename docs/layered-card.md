# Henn Layer Card

Host card capable of rendering multiple Home Assistant cards as layers.

## Features

- Multiple embedded cards
- Absolute positioning
- Layer ordering
- Global variables
- Entity references
- Declarative value resolution
- Configuration preprocessing

## Configuration

### Globals

```yaml
globals:

  title: Weather

  period:
    value_source: input_select.weather_period
```

Globals can be referenced using:

```yaml
{@@title}
{@@period}
```

### Entity References

Entity state references:

```yaml
{@sensor.temperature}
{@input_select.weather_period}
```