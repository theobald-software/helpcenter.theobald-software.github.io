
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public readonly struct Xyzm : IWellKnownSerializable<Xyzm>
```

#### Implements

[IWellKnownSerializable<Xyzm\>](Theobald.Ogc.IWellKnownSerializable\-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="Theobald_Ogc_Xyzm__ctor_System_Double__System_Double__System_Double__System_Double__"></a> Xyzm\(in double, in double, in double, in double\)

```csharp
public Xyzm(in double x, in double y, in double z, in double m)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

`m` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### <a id="Theobald_Ogc_Xyzm_M"></a> M

```csharp
public double M { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Theobald_Ogc_Xyzm_WkbDimensions"></a> WkbDimensions

```csharp
public WkbDimensions WkbDimensions { get; }
```

#### Property Value

 [WkbDimensions](Theobald.Ogc.WkbDimensions.md)

### <a id="Theobald_Ogc_Xyzm_X"></a> X

```csharp
public double X { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Theobald_Ogc_Xyzm_Y"></a> Y

```csharp
public double Y { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Theobald_Ogc_Xyzm_Z"></a> Z

```csharp
public double Z { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="Theobald_Ogc_Xyzm_AsBinary_Theobald_Ogc_EwkbWriter__"></a> AsBinary\(in EwkbWriter\)

```csharp
public EwkbWriter AsBinary(in EwkbWriter writer)
```

#### Parameters

`writer` [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

#### Returns

 [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

### <a id="Theobald_Ogc_Xyzm_AsText_System_Text_StringBuilder__"></a> AsText\(in StringBuilder\)

```csharp
public void AsText(in StringBuilder builder)
```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### <a id="Theobald_Ogc_Xyzm_FromBinary_Theobald_Ogc_EwkbReader__Theobald_Ogc_Xyzm__"></a> FromBinary\(in EwkbReader, out Xyzm\)

```csharp
public static EwkbReader FromBinary(in EwkbReader reader, out Xyzm xyzm)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

`xyzm` [Xyzm](Theobald.Ogc.Xyzm.md)

#### Returns

 [EwkbReader](Theobald.Ogc.EwkbReader.md)

### <a id="Theobald_Ogc_Xyzm_Read_Theobald_Ogc_EwkbReader__Theobald_Ogc_Xyzm__"></a> Read\(in EwkbReader, out Xyzm\)

```csharp
public EwkbReader Read(in EwkbReader reader, out Xyzm xyzm)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

`xyzm` [Xyzm](Theobald.Ogc.Xyzm.md)

#### Returns

 [EwkbReader](Theobald.Ogc.EwkbReader.md)

