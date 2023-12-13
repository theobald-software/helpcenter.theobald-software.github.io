
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnect35.dll  

```csharp
public abstract class Geometry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Geometry](Theobald.Ogc.Geometry.md)

#### Derived

[Geometry<T\>](Theobald.Ogc.Geometry\-1.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="Theobald_Ogc_Geometry__ctor_System_Nullable_Theobald_Ogc_Srid___"></a> Geometry\(in Srid?\)

```csharp
protected Geometry(in Srid? srid)
```

#### Parameters

`srid` [Srid](Theobald.Ogc.Srid.md)?

## Properties

### <a id="Theobald_Ogc_Geometry_Srid"></a> Srid

```csharp
public Srid? Srid { get; }
```

#### Property Value

 [Srid](Theobald.Ogc.Srid.md)?

### <a id="Theobald_Ogc_Geometry_WkbDimensions"></a> WkbDimensions

```csharp
public abstract WkbDimensions WkbDimensions { get; }
```

#### Property Value

 [WkbDimensions](Theobald.Ogc.WkbDimensions.md)

### <a id="Theobald_Ogc_Geometry_WkbGeometryType"></a> WkbGeometryType

```csharp
public abstract WkbGeometryType WkbGeometryType { get; }
```

#### Property Value

 [WkbGeometryType](Theobald.Ogc.WkbGeometryType.md)

### <a id="Theobald_Ogc_Geometry_WktGeometryTag"></a> WktGeometryTag

```csharp
public abstract string WktGeometryTag { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Theobald_Ogc_Geometry_AsBinary_Theobald_Ogc_EwkbWriter__"></a> AsBinary\(in EwkbWriter\)

```csharp
public abstract EwkbWriter AsBinary(in EwkbWriter writer)
```

#### Parameters

`writer` [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

#### Returns

 [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

### <a id="Theobald_Ogc_Geometry_AsText_System_Text_StringBuilder__"></a> AsText\(in StringBuilder\)

```csharp
public abstract void AsText(in StringBuilder builder)
```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### <a id="Theobald_Ogc_Geometry_FromBinary_System_Byte____"></a> FromBinary\(in byte\[\]\)

```csharp
public static Geometry FromBinary(in byte[] ewkb)
```

#### Parameters

`ewkb` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [Geometry](Theobald.Ogc.Geometry.md)

### <a id="Theobald_Ogc_Geometry_Read_Theobald_Ogc_EwkbReader__"></a> Read\(in EwkbReader\)

```csharp
protected abstract Geometry Read(in EwkbReader reader)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

#### Returns

 [Geometry](Theobald.Ogc.Geometry.md)

### <a id="Theobald_Ogc_Geometry_ToBinary_Theobald_Ogc_WkbByteOrder__"></a> ToBinary\(in WkbByteOrder\)

```csharp
public byte[] ToBinary(in WkbByteOrder byteOrder)
```

#### Parameters

`byteOrder` [WkbByteOrder](Theobald.Ogc.WkbByteOrder.md)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="Theobald_Ogc_Geometry_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Theobald_Ogc_Geometry_WithoutSrid"></a> WithoutSrid\(\)

```csharp
public abstract Geometry WithoutSrid()
```

#### Returns

 [Geometry](Theobald.Ogc.Geometry.md)

