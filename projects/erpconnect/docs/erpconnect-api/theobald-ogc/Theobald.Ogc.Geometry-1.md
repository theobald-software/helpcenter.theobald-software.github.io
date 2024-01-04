
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public abstract class Geometry<T> : Geometry where T : IWellKnownSerializable<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Geometry](Theobald.Ogc.Geometry.md) ← 
[Geometry<T\>](Theobald.Ogc.Geometry\-1.md)

#### Inherited Members

[Geometry.WithoutSrid\(\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_WithoutSrid), 
[Geometry.AsText\(in StringBuilder\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_AsText\_System\_Text\_StringBuilder\_\_), 
[Geometry.ToString\(\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_ToString), 
[Geometry.AsBinary\(in EwkbWriter\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_AsBinary\_Theobald\_Ogc\_EwkbWriter\_\_), 
[Geometry.ToBinary\(in WkbByteOrder\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_ToBinary\_Theobald\_Ogc\_WkbByteOrder\_\_), 
[Geometry.Read\(in EwkbReader\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_Read\_Theobald\_Ogc\_EwkbReader\_\_), 
[Geometry.FromBinary\(in byte\[\]\)](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_FromBinary\_System\_Byte\_\_\_\_), 
[Geometry.WktGeometryTag](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_WktGeometryTag), 
[Geometry.WkbDimensions](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_WkbDimensions), 
[Geometry.WkbGeometryType](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_WkbGeometryType), 
[Geometry.Srid](Theobald.Ogc.Geometry.md\#Theobald\_Ogc\_Geometry\_Srid), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="Theobald_Ogc_Geometry_1__ctor__0__System_Nullable_Theobald_Ogc_Srid___"></a> Geometry\(in T, in Srid?\)

```csharp
protected Geometry(in T value, in Srid? srid)
```

#### Parameters

`value` T

`srid` [Srid](Theobald.Ogc.Srid.md)?

## Properties

### <a id="Theobald_Ogc_Geometry_1_Value"></a> Value

```csharp
public T Value { get; }
```

#### Property Value

 T

### <a id="Theobald_Ogc_Geometry_1_WkbDimensions"></a> WkbDimensions

```csharp
public override WkbDimensions WkbDimensions { get; }
```

#### Property Value

 [WkbDimensions](Theobald.Ogc.WkbDimensions.md)

## Methods

### <a id="Theobald_Ogc_Geometry_1_AsBinary_Theobald_Ogc_EwkbWriter__"></a> AsBinary\(in EwkbWriter\)

```csharp
public override EwkbWriter AsBinary(in EwkbWriter writer)
```

#### Parameters

`writer` [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

#### Returns

 [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

### <a id="Theobald_Ogc_Geometry_1_AsText_System_Text_StringBuilder__"></a> AsText\(in StringBuilder\)

```csharp
public override void AsText(in StringBuilder builder)
```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### <a id="Theobald_Ogc_Geometry_1_Read_Theobald_Ogc_EwkbReader__Theobald_Ogc_Geometry__0___"></a> Read\(in EwkbReader, out Geometry<T\>\)

```csharp
public EwkbReader Read(in EwkbReader reader, out Geometry<T> geometry)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

`geometry` [Geometry](Theobald.Ogc.Geometry\-1.md)<T\>

#### Returns

 [EwkbReader](Theobald.Ogc.EwkbReader.md)

### <a id="Theobald_Ogc_Geometry_1_Read_Theobald_Ogc_EwkbReader__"></a> Read\(in EwkbReader\)

```csharp
protected override Geometry Read(in EwkbReader reader)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

#### Returns

 [Geometry](Theobald.Ogc.Geometry.md)

### <a id="Theobald_Ogc_Geometry_1_With__0__System_Nullable_Theobald_Ogc_Srid___"></a> With\(in T, in Srid?\)

```csharp
public abstract Geometry<T> With(in T value, in Srid? maybeSrid)
```

#### Parameters

`value` T

`maybeSrid` [Srid](Theobald.Ogc.Srid.md)?

#### Returns

 [Geometry](Theobald.Ogc.Geometry\-1.md)<T\>

### <a id="Theobald_Ogc_Geometry_1_WithoutSrid"></a> WithoutSrid\(\)

```csharp
public override Geometry WithoutSrid()
```

#### Returns

 [Geometry](Theobald.Ogc.Geometry.md)

