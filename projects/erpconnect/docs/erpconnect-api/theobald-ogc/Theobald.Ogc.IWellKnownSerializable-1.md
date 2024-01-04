
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public interface IWellKnownSerializable<T>
```

#### Type Parameters

`T` 

## Properties

### <a id="Theobald_Ogc_IWellKnownSerializable_1_WkbDimensions"></a> WkbDimensions

```csharp
WkbDimensions WkbDimensions { get; }
```

#### Property Value

 [WkbDimensions](Theobald.Ogc.WkbDimensions.md)

## Methods

### <a id="Theobald_Ogc_IWellKnownSerializable_1_AsBinary_Theobald_Ogc_EwkbWriter__"></a> AsBinary\(in EwkbWriter\)

```csharp
EwkbWriter AsBinary(in EwkbWriter writer)
```

#### Parameters

`writer` [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

#### Returns

 [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

### <a id="Theobald_Ogc_IWellKnownSerializable_1_AsText_System_Text_StringBuilder__"></a> AsText\(in StringBuilder\)

```csharp
void AsText(in StringBuilder builder)
```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### <a id="Theobald_Ogc_IWellKnownSerializable_1_Read_Theobald_Ogc_EwkbReader___0__"></a> Read\(in EwkbReader, out T\)

```csharp
EwkbReader Read(in EwkbReader reader, out T t)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

`t` T

#### Returns

 [EwkbReader](Theobald.Ogc.EwkbReader.md)

