Namespace: [Theobald.Ogc](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public sealed class MultiPolygon<T> : Geometry<WellKnownSerializableList<Polygon<T>>> where T : IWellKnownSerializable<T>, new()

```

#### Type Parameters

`T`

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Geometry](../Theobald.Ogc.Geometry/) ← [Geometry\<WellKnownSerializableList\<Polygon<T>>>](../Theobald.Ogc.Geometry-1/) ← [MultiPolygon<T>](./)

#### Inherited Members

[Geometry\<WellKnownSerializableList\<Polygon<T>>>.AsText(in StringBuilder)](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_AsText_System_Text_StringBuilder__), [Geometry\<WellKnownSerializableList\<Polygon<T>>>.AsBinary(in EwkbWriter)](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_AsBinary_Theobald_Ogc_EwkbWriter__), [Geometry\<WellKnownSerializableList\<Polygon<T>>>.With(in WellKnownSerializableList\<Polygon<T>>, in Srid?)](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_With__0__System_Nullable_Theobald_Ogc_Srid___), [Geometry\<WellKnownSerializableList\<Polygon<T>>>.WithoutSrid()](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_WithoutSrid), [Geometry\<WellKnownSerializableList\<Polygon<T>>>.Read(in EwkbReader, out Geometry\<WellKnownSerializableList\<Polygon<T>>>)](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_Read_Theobald_Ogc_EwkbReader__Theobald_Ogc_Geometry__0___), [Geometry\<WellKnownSerializableList\<Polygon<T>>>.WkbDimensions](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_WkbDimensions), [Geometry\<WellKnownSerializableList\<Polygon<T>>>.Value](../Theobald.Ogc.Geometry-1/#Theobald_Ogc_Geometry_1_Value), [Geometry.WithoutSrid()](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WithoutSrid), [Geometry.AsText(in StringBuilder)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_AsText_System_Text_StringBuilder__), [Geometry.ToString()](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_ToString), [Geometry.AsBinary(in EwkbWriter)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_AsBinary_Theobald_Ogc_EwkbWriter__), [Geometry.ToBinary(in WkbByteOrder)](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_ToBinary_Theobald_Ogc_WkbByteOrder__), [Geometry.FromBinary(in byte[])](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_FromBinary_System_Byte____), [Geometry.WktGeometryTag](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WktGeometryTag), [Geometry.WkbDimensions](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WkbDimensions), [Geometry.WkbGeometryType](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_WkbGeometryType), [Geometry.Srid](../Theobald.Ogc.Geometry/#Theobald_Ogc_Geometry_Srid), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### MultiPolygon(in IEnumerable\<Polygon<T>>, Srid?)

```csharp
public MultiPolygon(in IEnumerable<Polygon<T>> value, Srid? srid)

```

#### Parameters

`value` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)\<[Polygon](../Theobald.Ogc.Polygon-1/)<T>>

`srid` [Srid](../Theobald.Ogc.Srid/)?

### MultiPolygon(in IEnumerable\<Polygon<T>>)

```csharp
public MultiPolygon(in IEnumerable<Polygon<T>> value)

```

#### Parameters

`value` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)\<[Polygon](../Theobald.Ogc.Polygon-1/)<T>>

### MultiPolygon()

```csharp
public MultiPolygon()

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

### With(in WellKnownSerializableList\<Polygon<T>>, in Srid?)

```csharp
public override Geometry<WellKnownSerializableList<Polygon<T>>> With(in WellKnownSerializableList<Polygon<T>> value, in Srid? maybeSrid)

```

#### Parameters

`value` [WellKnownSerializableList](../Theobald.Ogc.WellKnownSerializableList-1/)\<[Polygon](../Theobald.Ogc.Polygon-1/)<T>>

`maybeSrid` [Srid](../Theobald.Ogc.Srid/)?

#### Returns

[Geometry](../Theobald.Ogc.Geometry-1/)\<[WellKnownSerializableList](../Theobald.Ogc.WellKnownSerializableList-1/)\<[Polygon](../Theobald.Ogc.Polygon-1/)<T>>>
