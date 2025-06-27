Namespace: [Theobald.Ogc](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public abstract class Geometry<T> : Geometry where T : IWellKnownSerializable<T>

```

#### Type Parameters

`T`

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Geometry](../Theobald.Ogc.Geometry/) ← [Geometry<T>](./)

#### Inherited Members

[Geometry.WithoutSrid()](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WithoutSrid), [Geometry.AsText(in StringBuilder)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_AsText_System_Text_StringBuilder__), [Geometry.ToString()](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_ToString), [Geometry.AsBinary(in EwkbWriter)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_AsBinary_Theobald_Ogc_EwkbWriter__), [Geometry.ToBinary(in WkbByteOrder)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_ToBinary_Theobald_Ogc_WkbByteOrder__), [Geometry.Read(in EwkbReader)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_Read_Theobald_Ogc_EwkbReader__), [Geometry.FromBinary(in byte[])](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_FromBinary_System_Byte____), [Geometry.WktGeometryTag](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WktGeometryTag), [Geometry.WkbDimensions](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WkbDimensions), [Geometry.WkbGeometryType](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WkbGeometryType), [Geometry.Srid](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_Srid), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Geometry(in T, in Srid?)

```csharp
protected Geometry(in T value, in Srid? srid)

```

#### Parameters

`value` T

`srid` [Srid](../Theobald.Ogc.Srid/)?

## Properties

### Value

```csharp
public T Value { get; }

```

#### Property Value

T

### WkbDimensions

```csharp
public override WkbDimensions WkbDimensions { get; }

```

#### Property Value

[WkbDimensions](../Theobald.Ogc.WkbDimensions/)

## Methods

### AsBinary(in EwkbWriter)

```csharp
public override EwkbWriter AsBinary(in EwkbWriter writer)

```

#### Parameters

`writer` [EwkbWriter](../Theobald.Ogc.EwkbWriter/)

#### Returns

[EwkbWriter](../Theobald.Ogc.EwkbWriter/)

### AsText(in StringBuilder)

```csharp
public override void AsText(in StringBuilder builder)

```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### Read(in EwkbReader, out Geometry<T>)

```csharp
public EwkbReader Read(in EwkbReader reader, out Geometry<T> geometry)

```

#### Parameters

`reader` [EwkbReader](../Theobald.Ogc.EwkbReader/)

`geometry` [Geometry](./)<T>

#### Returns

[EwkbReader](../Theobald.Ogc.EwkbReader/)

### Read(in EwkbReader)

```csharp
protected override Geometry Read(in EwkbReader reader)

```

#### Parameters

`reader` [EwkbReader](../Theobald.Ogc.EwkbReader/)

#### Returns

[Geometry](../Theobald.Ogc.Geometry/)

### With(in T, in Srid?)

```csharp
public abstract Geometry<T> With(in T value, in Srid? maybeSrid)

```

#### Parameters

`value` T

`maybeSrid` [Srid](../Theobald.Ogc.Srid/)?

#### Returns

[Geometry](./)<T>

### WithoutSrid()

```csharp
public override Geometry WithoutSrid()

```

#### Returns

[Geometry](../Theobald.Ogc.Geometry/)
