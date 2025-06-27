Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public sealed class SAPEncodingInfo

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [SAPEncodingInfo](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### DefaultLittleEndian

SAP codepage 1100, little endian

```csharp
public static SAPEncodingInfo DefaultLittleEndian { get; }

```

#### Property Value

[SAPEncodingInfo](./)

### IsBigEndian

```csharp
public bool IsBigEndian { get; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SAPCodepage

```csharp
public ushort SAPCodepage { get; }

```

#### Property Value

[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TwoBytesPerCharacter

```csharp
public bool TwoBytesPerCharacter { get; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UTF16BigEndian

SAP codepage 4102, big endian

```csharp
public static SAPEncodingInfo UTF16BigEndian { get; }

```

#### Property Value

[SAPEncodingInfo](./)

### UTF16LittleEndian

SAP codepage 4103, little endian

```csharp
public static SAPEncodingInfo UTF16LittleEndian { get; }

```

#### Property Value

[SAPEncodingInfo](./)

## Methods

### GetEncoding()

```csharp
public Encoding GetEncoding()

```

#### Returns

[Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)
