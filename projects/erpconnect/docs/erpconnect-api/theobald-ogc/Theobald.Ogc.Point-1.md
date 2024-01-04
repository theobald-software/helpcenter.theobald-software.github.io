
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public sealed class Point<T> : Geometry<T>, IWellKnownSerializable<Point<T>> where T : struct, IWellKnownSerializable<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Geometry](Theobald.Ogc.Geometry.md) ← 
[Geometry<T\>](Theobald.Ogc.Geometry\-1.md) ← 
[Point<T\>](Theobald.Ogc.Point\-1.md)

#### Implements

[IWellKnownSerializable<Point<T\>\>](Theobald.Ogc.IWellKnownSerializable\-1.md)

#### Inherited Members

[Geometry<T\>.AsText\(in StringBuilder\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_AsText\_System\_Text\_StringBuilder\_\_), 
[Geometry<T\>.AsBinary\(in EwkbWriter\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_AsBinary\_Theobald\_Ogc\_EwkbWriter\_\_), 
[Geometry<T\>.With\(in T, in Srid?\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_With\_\_0\_\_System\_Nullable\_Theobald\_Ogc\_Srid\_\_\_), 
[Geometry<T\>.WithoutSrid\(\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_WithoutSrid), 
[Geometry<T\>.Read\(in EwkbReader, out Geometry<T\>\)](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_Read\_Theobald\_Ogc\_EwkbReader\_\_Theobald\_Ogc\_Geometry\_\_0\_\_\_), 
[Geometry<T\>.WkbDimensions](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_WkbDimensions), 
[Geometry<T\>.Value](Theobald.Ogc.Geometry\-1.md\#Theobald\_Ogc\_Geometry\_1\_Value), 
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

### <a id="Theobald_Ogc_Point_1__ctor__0__System_Nullable_Theobald_Ogc_Srid___"></a> Point\(in T, in Srid?\)

```csharp
public Point(in T value, in Srid? srid)
```

#### Parameters

`value` T

`srid` [Srid](Theobald.Ogc.Srid.md)?

### <a id="Theobald_Ogc_Point_1__ctor__0__"></a> Point\(in T\)

```csharp
public Point(in T value)
```

#### Parameters

`value` T

### <a id="Theobald_Ogc_Point_1__ctor"></a> Point\(\)

```csharp
public Point()
```

## Properties

### <a id="Theobald_Ogc_Point_1_WkbGeometryType"></a> WkbGeometryType

```csharp
public override WkbGeometryType WkbGeometryType { get; }
```

#### Property Value

 [WkbGeometryType](Theobald.Ogc.WkbGeometryType.md)

### <a id="Theobald_Ogc_Point_1_WktGeometryTag"></a> WktGeometryTag

```csharp
public override string WktGeometryTag { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Theobald_Ogc_Point_1_AsText_System_Text_StringBuilder__"></a> AsText\(in StringBuilder\)

```csharp
public override void AsText(in StringBuilder builder)
```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### <a id="Theobald_Ogc_Point_1_Read_Theobald_Ogc_EwkbReader__Theobald_Ogc_Point__0___"></a> Read\(in EwkbReader, out Point<T\>\)

```csharp
public EwkbReader Read(in EwkbReader reader, out Point<T> t)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

`t` [Point](Theobald.Ogc.Point\-1.md)<T\>

#### Returns

 [EwkbReader](Theobald.Ogc.EwkbReader.md)

### <a id="Theobald_Ogc_Point_1_With__0__System_Nullable_Theobald_Ogc_Srid___"></a> With\(in T, in Srid?\)

```csharp
public override Geometry<T> With(in T value, in Srid? maybeSrid)
```

#### Parameters

`value` T

`maybeSrid` [Srid](Theobald.Ogc.Srid.md)?

#### Returns

 [Geometry](Theobald.Ogc.Geometry\-1.md)<T\>

