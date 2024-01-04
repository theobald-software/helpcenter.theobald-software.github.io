
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public sealed class WellKnownSerializableList<T> : IWellKnownSerializable<WellKnownSerializableList<T>> where T : IWellKnownSerializable<T>, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WellKnownSerializableList<T\>](Theobald.Ogc.WellKnownSerializableList\-1.md)

#### Implements

[IWellKnownSerializable<WellKnownSerializableList<T\>\>](Theobald.Ogc.IWellKnownSerializable\-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="Theobald_Ogc_WellKnownSerializableList_1__ctor_System_Collections_Generic_IEnumerable__0___"></a> WellKnownSerializableList\(in IEnumerable<T\>\)

```csharp
public WellKnownSerializableList(in IEnumerable<T> items)
```

#### Parameters

`items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### <a id="Theobald_Ogc_WellKnownSerializableList_1__ctor"></a> WellKnownSerializableList\(\)

```csharp
public WellKnownSerializableList()
```

## Properties

### <a id="Theobald_Ogc_WellKnownSerializableList_1_WkbDimensions"></a> WkbDimensions

```csharp
public WkbDimensions WkbDimensions { get; }
```

#### Property Value

 [WkbDimensions](Theobald.Ogc.WkbDimensions.md)

## Methods

### <a id="Theobald_Ogc_WellKnownSerializableList_1_AsBinary_Theobald_Ogc_EwkbWriter__"></a> AsBinary\(in EwkbWriter\)

```csharp
public EwkbWriter AsBinary(in EwkbWriter writer)
```

#### Parameters

`writer` [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

#### Returns

 [EwkbWriter](Theobald.Ogc.EwkbWriter.md)

### <a id="Theobald_Ogc_WellKnownSerializableList_1_AsText_System_Text_StringBuilder__"></a> AsText\(in StringBuilder\)

```csharp
public void AsText(in StringBuilder builder)
```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### <a id="Theobald_Ogc_WellKnownSerializableList_1_Read_Theobald_Ogc_EwkbReader__Theobald_Ogc_WellKnownSerializableList__0___"></a> Read\(in EwkbReader, out WellKnownSerializableList<T\>\)

```csharp
public EwkbReader Read(in EwkbReader reader, out WellKnownSerializableList<T> t)
```

#### Parameters

`reader` [EwkbReader](Theobald.Ogc.EwkbReader.md)

`t` [WellKnownSerializableList](Theobald.Ogc.WellKnownSerializableList\-1.md)<T\>

#### Returns

 [EwkbReader](Theobald.Ogc.EwkbReader.md)

