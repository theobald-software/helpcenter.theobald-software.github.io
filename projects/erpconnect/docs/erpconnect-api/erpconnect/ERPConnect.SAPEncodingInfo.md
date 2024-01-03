
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

```csharp
public sealed class SAPEncodingInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SAPEncodingInfo](ERPConnect.SAPEncodingInfo.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Properties

### <a id="ERPConnect_SAPEncodingInfo_DefaultLittleEndian"></a> DefaultLittleEndian

SAP codepage 1100, little endian

```csharp
public static SAPEncodingInfo DefaultLittleEndian { get; }
```

#### Property Value

 [SAPEncodingInfo](ERPConnect.SAPEncodingInfo.md)

### <a id="ERPConnect_SAPEncodingInfo_IsBigEndian"></a> IsBigEndian

```csharp
public bool IsBigEndian { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_SAPEncodingInfo_SAPCodepage"></a> SAPCodepage

```csharp
public ushort SAPCodepage { get; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ERPConnect_SAPEncodingInfo_TwoBytesPerCharacter"></a> TwoBytesPerCharacter

```csharp
public bool TwoBytesPerCharacter { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_SAPEncodingInfo_UTF16BigEndian"></a> UTF16BigEndian

SAP codepage 4102, big endian

```csharp
public static SAPEncodingInfo UTF16BigEndian { get; }
```

#### Property Value

 [SAPEncodingInfo](ERPConnect.SAPEncodingInfo.md)

### <a id="ERPConnect_SAPEncodingInfo_UTF16LittleEndian"></a> UTF16LittleEndian

SAP codepage 4103, little endian

```csharp
public static SAPEncodingInfo UTF16LittleEndian { get; }
```

#### Property Value

 [SAPEncodingInfo](ERPConnect.SAPEncodingInfo.md)

## Methods

### <a id="ERPConnect_SAPEncodingInfo_GetEncoding"></a> GetEncoding\(\)

```csharp
public Encoding GetEncoding()
```

#### Returns

 [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)

