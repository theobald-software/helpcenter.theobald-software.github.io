Namespace: [Theobald.Ogc](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public sealed class Point<T> : Geometry<T>, IWellKnownSerializable<Point<T>> where T : struct, IWellKnownSerializable<T>

```

#### Type Parameters

`T`

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Geometry](../Theobald.Ogc.Geometry/) ← [Geometry<T>](../Theobald.Ogc.Geometry-1/) ← [Point<T>](./)

#### Implements

[IWellKnownSerializable\<Point<T>>](../Theobald.Ogc.IWellKnownSerializable-1/)

#### Inherited Members

[Geometry<T>.AsText(in StringBuilder)](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_AsText_System_Text_StringBuilder__), [Geometry<T>.AsBinary(in EwkbWriter)](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_AsBinary_Theobald_Ogc_EwkbWriter__), [Geometry<T>.With(in T, in Srid?)](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_With__0__System_Nullable_Theobald_Ogc_Srid___), [Geometry<T>.WithoutSrid()](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_WithoutSrid), [Geometry<T>.Read(in EwkbReader, out Geometry<T>)](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_Read_Theobald_Ogc_EwkbReader__Theobald_Ogc_Geometry__0___), [Geometry<T>.WkbDimensions](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_WkbDimensions), [Geometry<T>.Value](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_Value), [Geometry.WithoutSrid()](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WithoutSrid), [Geometry.AsText(in StringBuilder)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_AsText_System_Text_StringBuilder__), [Geometry.ToString()](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_ToString), [Geometry.AsBinary(in EwkbWriter)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_AsBinary_Theobald_Ogc_EwkbWriter__), [Geometry.ToBinary(in WkbByteOrder)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_ToBinary_Theobald_Ogc_WkbByteOrder__), [Geometry.FromBinary(in byte[])](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_FromBinary_System_Byte____), [Geometry.WktGeometryTag](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WktGeometryTag), [Geometry.WkbDimensions](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WkbDimensions), [Geometry.WkbGeometryType](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WkbGeometryType), [Geometry.Srid](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_Srid), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Point(in T, in Srid?)

```csharp
public Point(in T value, in Srid? srid)

```

#### Parameters

`value` T

`srid` [Srid](../Theobald.Ogc.Srid/)?

### Point(in T)

```csharp
public Point(in T value)

```

#### Parameters

`value` T

### Point()

```csharp
public Point()

```

## Properties

### WkbGeometryType

```csharp
public override WkbGeometryType WkbGeometryType { get; }

```

#### Property Value

[WkbGeometryType](../Theobald.Ogc.WkbGeometryType/)

### WktGeometryTag

```csharp
public override string WktGeometryTag { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AsText(in StringBuilder)

```csharp
public override void AsText(in StringBuilder builder)

```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### Read(in EwkbReader, out Point<T>)

```csharp
public EwkbReader Read(in EwkbReader reader, out Point<T> t)

```

#### Parameters

`reader` [EwkbReader](../Theobald.Ogc.EwkbReader/)

`t` [Point](./)<T>

#### Returns

[EwkbReader](../Theobald.Ogc.EwkbReader/)

### With(in T, in Srid?)

```csharp
public override Geometry<T> With(in T value, in Srid? maybeSrid)

```

#### Parameters

`value` T

`maybeSrid` [Srid](../Theobald.Ogc.Srid/)?

#### Returns

[Geometry](../Theobald.Ogc.Geometry-1/)<T>
