---
sidebar_position: 0
---

# Cell Type

Cell Types are used to identify cells. They are made of two parts: a `cellId` and a `modId`.

## `modId`

The `modId` needs to be unique. There can't be two mods using the same `modId`.

## `cellId`

While there can be multiple cells with the same `cellId`, a combination of both a `modId` and a `cellId` has to be unique.

## Implementation

Although Cell Type stores both the `modId` and the `cellId` as a `short`, every public API uses a `String` for both.

```java
private final short modId;
private final short cellId;

public CellType(String modId, String cellId)

public String getModIdString()
public String getCellIdString()
```

## Default Cell Types

### Vanilla (`modId: cell_machine`)

- `mover`
- `push`
- `slide`
- `wall`
- `generator`
- `trash`
- `cwrotator`
- `ccwrotator`
- `enemy`
- `placeable`

### Base Mod (`modId: base`)

- `freeze`