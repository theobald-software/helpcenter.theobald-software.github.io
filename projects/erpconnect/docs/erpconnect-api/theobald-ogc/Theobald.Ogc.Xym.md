
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public readonly struct Xym : IWellKnownSerializable<Xym>
```

#### Implements

[IWellKnownSerializable<Xym\>](Theobald.Ogc.IWellKnownSerializable\-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="Theobald_Ogc_Xym__ctor_System_Double__System_Double__System_Double__"></a> Xym\(in double, in double, in double\)

```csharp
public Xym(in double x, in double y, in double m)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

`m` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### <a id="Theobald_Ogc_Xym_M"></a> M

```csharp
public double M { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Theobald_Ogc_Xym_WkbDimensions"></a> WkbDimensions

```csharp
public WkbDimensions WkbDimensions { get; }
```

#### Property Value

 [WkbDimensions](Theobald.Ogc.WkbDimensions.md)

### <a id="Theobald_Ogc_Xym_X"></a> X

```csharp
public double X { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Theobald_Ogc_Xym_Y"></a> Y

```csharp
public double Y { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="Theobald_Ogc_Xym_AsBinary_Theobald_Ogc_EwkbWriter__"></a> AsBinary\(in EwkbWriter\)

```csharp
public EwkbWriter AsBinary(in EwkbWriter writer)
```

#### Parameters

`writer` [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

#### Returns

 [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

### <a id="Theobald_Ogc_Xym_AsText_System_Text_StringBuilder__"></a> AsText\(in StringBuilder\)

```csharp
public void AsText(in StringBuilder builder)
```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### <a id="Theobald_Ogc_Xym_FromBinary_Theobald_Ogc_EwkbReader__Theobald_Ogc_Xym__"></a> FromBinary\(in EwkbReader, out Xym\)

```csharp
public static EwkbReader FromBinary(in EwkbReader reader, out Xym xym)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

`xym` [Xym](Theobald.Ogc.Xym.md)

#### Returns

 [EwkbReader](Theobald.Ogc.EwkbReader.md)

### <a id="Theobald_Ogc_Xym_Read_Theobald_Ogc_EwkbReader__Theobald_Ogc_Xym__"></a> Read\(in EwkbReader, out Xym\)

```csharp
public EwkbReader Read(in EwkbReader reader, out Xym xym)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

`xym` [Xym](Theobald.Ogc.Xym.md)

#### Returns

 [EwkbReader](Theobald.Ogc.EwkbReader.md)
