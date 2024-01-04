
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public sealed class MultiPoint<T> : Geometry<WellKnownSerializableList<Point<T>>> where T : struct, IWellKnownSerializable<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Geometry](Theobald.Ogc.Geometry.md) ← 
[Geometry<WellKnownSerializableList<Point<T\>\>\>](Theobald.Ogc.Geometry\-1.md) ← 
[MultiPoint<T\>](Theobald.Ogc.MultiPoint\-1.md)

#### Inherited Members

[Geometry<WellKnownSerializableList<Point<T\>\>\>.AsText\(in StringBuilder\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_AsText\_System\_Text\_StringBuilder\_\_), 
[Geometry<WellKnownSerializableList<Point<T\>\>\>.AsBinary\(in EwkbWriter\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_AsBinary\_Theobald\_Ogc\_EwkbWriter\_\_), 
[Geometry<WellKnownSerializableList<Point<T\>\>\>.With\(in WellKnownSerializableList<Point<T\>\>, in Srid?\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_With\_\_0\_\_System\_Nullable\_Theobald\_Ogc\_Srid\_\_\_), 
[Geometry<WellKnownSerializableList<Point<T\>\>\>.WithoutSrid\(\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_WithoutSrid), 
[Geometry<WellKnownSerializableList<Point<T\>\>\>.Read\(in EwkbReader, out Geometry<WellKnownSerializableList<Point<T\>\>\>\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_Read\_Theobald\_Ogc\_EwkbReader\_\_Theobald\_Ogc\_Geometry\_\_0\_\_\_), 
[Geometry<WellKnownSerializableList<Point<T\>\>\>.WkbDimensions](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_WkbDimensions), 
[Geometry<WellKnownSerializableList<Point<T\>\>\>.Value](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_Value), 
[Geometry.WithoutSrid\(\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_WithoutSrid), 
[Geometry.AsText\(in StringBuilder\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_AsText\_System\_Text\_StringBuilder\_\_), 
[Geometry.ToString\(\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_ToString), 
[Geometry.AsBinary\(in EwkbWriter\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_AsBinary\_Theobald\_Ogc\_EwkbWriter\_\_), 
[Geometry.ToBinary\(in WkbByteOrder\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_ToBinary\_Theobald\_Ogc\_WkbByteOrder\_\_), 
[Geometry.FromBinary\(in byte\[\]\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_FromBinary\_System\_Byte\_\_\_\_), 
[Geometry.WktGeometryTag](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_WktGeometryTag), 
[Geometry.WkbDimensions](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_WkbDimensions), 
[Geometry.WkbGeometryType](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_WkbGeometryType), 
[Geometry.Srid](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_Srid), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="Theobald_Ogc_MultiPoint_1__ctor_System_Collections_Generic_IEnumerable_Theobald_Ogc_Point__0____System_Nullable_Theobald_Ogc_Srid__"></a> MultiPoint\(in IEnumerable<Point<T\>\>, Srid?\)

```csharp
public MultiPoint(in IEnumerable<Point<T>> value, Srid? srid)
```

#### Parameters

`value` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Point](Theobald.Ogc.Point\-1.md)<T\>\>

`srid` [Srid](Theobald.Ogc.Srid.md)?

### <a id="Theobald_Ogc_MultiPoint_1__ctor_System_Collections_Generic_IEnumerable_Theobald_Ogc_Point__0____"></a> MultiPoint\(in IEnumerable<Point<T\>\>\)

```csharp
public MultiPoint(in IEnumerable<Point<T>> value)
```

#### Parameters

`value` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Point](Theobald.Ogc.Point\-1.md)<T\>\>

### <a id="Theobald_Ogc_MultiPoint_1__ctor"></a> MultiPoint\(\)

```csharp
public MultiPoint()
```

## Properties

### <a id="Theobald_Ogc_MultiPoint_1_WkbGeometryType"></a> WkbGeometryType

```csharp
public override WkbGeometryType WkbGeometryType { get; }
```

#### Property Value

 [WkbGeometryType](Theobald.Ogc.WkbGeometryType.md)

### <a id="Theobald_Ogc_MultiPoint_1_WktGeometryTag"></a> WktGeometryTag

```csharp
public override string WktGeometryTag { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Theobald_Ogc_MultiPoint_1_With_Theobald_Ogc_WellKnownSerializableList_Theobald_Ogc_Point__0____System_Nullable_Theobald_Ogc_Srid___"></a> With\(in WellKnownSerializableList<Point<T\>\>, in Srid?\)

```csharp
public override Geometry<WellKnownSerializableList<Point<T>>> With(in WellKnownSerializableList<Point<T>> value, in Srid? maybeSrid)
```

#### Parameters

`value` [WellKnownSerializableList](Theobald.Ogc.WellKnownSerializableList\-1.md)<[Point](Theobald.Ogc.Point\-1.md)<T\>\>

`maybeSrid` [Srid](Theobald.Ogc.Srid.md)?

#### Returns

 [Geometry](Theobald.Ogc.Geometry\-1.md)<[WellKnownSerializableList](Theobald.Ogc.WellKnownSerializableList\-1.md)<[Point](Theobald.Ogc.Point\-1.md)<T\>\>\>

