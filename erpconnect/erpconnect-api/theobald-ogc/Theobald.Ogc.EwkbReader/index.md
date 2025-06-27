Namespace: [Theobald.Ogc](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public readonly struct EwkbReader

```

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### ReadCount(out uint)

```csharp
public EwkbReader ReadCount(out uint count)

```

#### Parameters

`count` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

[EwkbReader](./)

### ReadDouble(out double)

```csharp
public EwkbReader ReadDouble(out double value)

```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

[EwkbReader](./)

### ReadHeader(out WkbDimensions, out WkbGeometryType, out Srid?)

```csharp
public EwkbReader ReadHeader(out WkbDimensions dimensions, out WkbGeometryType geometryType, out Srid? maybeSrid)

```

#### Parameters

`dimensions` [WkbDimensions](../Theobald.Ogc.WkbDimensions/)

`geometryType` [WkbGeometryType](../Theobald.Ogc.WkbGeometryType/)

`maybeSrid` [Srid](../Theobald.Ogc.Srid/)?

#### Returns

[EwkbReader](./)
