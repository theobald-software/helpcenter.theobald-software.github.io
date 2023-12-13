
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnect35.dll  

```csharp
public sealed class CircularString<T> : Geometry<WellKnownSerializableList<T>> where T : struct, IWellKnownSerializable<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Geometry](Theobald.Ogc.Geometry.md) ← 
[Geometry<WellKnownSerializableList<T\>\>](Theobald.Ogc.Geometry\-1.md) ← 
[CircularString<T\>](Theobald.Ogc.CircularString\-1.md)

#### Inherited Members

[Geometry<WellKnownSerializableList<T\>\>.AsText\(in StringBuilder\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_AsText\_System\_Text\_StringBuilder\_\_), 
[Geometry<WellKnownSerializableList<T\>\>.AsBinary\(in EwkbWriter\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_AsBinary\_Theobald\_Ogc\_EwkbWriter\_\_), 
[Geometry<WellKnownSerializableList<T\>\>.With\(in WellKnownSerializableList<T\>, in Srid?\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_With\_\_0\_\_System\_Nullable\_Theobald\_Ogc\_Srid\_\_\_), 
[Geometry<WellKnownSerializableList<T\>\>.WithoutSrid\(\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_WithoutSrid), 
[Geometry<WellKnownSerializableList<T\>\>.Read\(in EwkbReader, out Geometry<WellKnownSerializableList<T\>\>\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_Read\_Theobald\_Ogc\_EwkbReader\_\_Theobald\_Ogc\_Geometry\_\_0\_\_\_), 
[Geometry<WellKnownSerializableList<T\>\>.WkbDimensions](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_WkbDimensions), 
[Geometry<WellKnownSerializableList<T\>\>.Value](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_Value), 
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
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### <a id="Theobald_Ogc_CircularString_1__ctor_System_Collections_Generic_IEnumerable__0___System_Nullable_Theobald_Ogc_Srid___"></a> CircularString\(in IEnumerable<T\>, in Srid?\)

```csharp
public CircularString(in IEnumerable<T> value, in Srid? srid)
```

#### Parameters

`value` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

`srid` [Srid](Theobald.Ogc.Srid.md)?

### <a id="Theobald_Ogc_CircularString_1__ctor_System_Collections_Generic_IEnumerable__0___"></a> CircularString\(in IEnumerable<T\>\)

```csharp
public CircularString(in IEnumerable<T> value)
```

#### Parameters

`value` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### <a id="Theobald_Ogc_CircularString_1__ctor"></a> CircularString\(\)

```csharp
public CircularString()
```

## Properties

### <a id="Theobald_Ogc_CircularString_1_WkbGeometryType"></a> WkbGeometryType

```csharp
public override WkbGeometryType WkbGeometryType { get; }
```

#### Property Value

 [WkbGeometryType](Theobald.Ogc.WkbGeometryType.md)

### <a id="Theobald_Ogc_CircularString_1_WktGeometryTag"></a> WktGeometryTag

```csharp
public override string WktGeometryTag { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Theobald_Ogc_CircularString_1_With_Theobald_Ogc_WellKnownSerializableList__0___System_Nullable_Theobald_Ogc_Srid___"></a> With\(in WellKnownSerializableList<T\>, in Srid?\)

```csharp
public override Geometry<WellKnownSerializableList<T>> With(in WellKnownSerializableList<T> value, in Srid? maybeSrid)
```

#### Parameters

`value` [WellKnownSerializableList](Theobald.Ogc.WellKnownSerializableList\-1.md)<T\>

`maybeSrid` [Srid](Theobald.Ogc.Srid.md)?

#### Returns

 [Geometry](Theobald.Ogc.Geometry\-1.md)<[WellKnownSerializableList](Theobald.Ogc.WellKnownSerializableList\-1.md)<T\>\>

