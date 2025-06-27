Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Lightweight XML reader, that is able to process somewhat invalid XML (e. g. unescaped control characters in content)

```csharp
public sealed class SlimXmlReader

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [SlimXmlReader](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### SlimXmlReader(TextReader)

```csharp
public SlimXmlReader(TextReader textReader)

```

#### Parameters

`textReader` [TextReader](https://learn.microsoft.com/dotnet/api/system.io.textreader)

## Methods

### BufferToString()

```csharp
public string BufferToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### GetElementName()

```csharp
public string GetElementName()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Read()

```csharp
public SlimXmlReadResult Read()

```

#### Returns

[SlimXmlReadResult](../ERPConnect.SlimXmlReadResult/)

### ReadElementString()

Assumes current position is `ERPConnect.SlimXmlReadResult.StartTag`. Expects the content of the element to contain no child elements. Returns the unescaped content and advances the current position to `ERPConnect.SlimXmlReadResult.EndTag`.

```csharp
public string ReadElementString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ReadElements(Action<string>)

```csharp
public void ReadElements(Action<string> readElement)

```

#### Parameters

`readElement` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)\<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### ReadRootElement()

```csharp
public string ReadRootElement()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Skip()

```csharp
public void Skip()

```

### Unescape(string)

```csharp
public static string Unescape(string content)

```

#### Parameters

`content` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)
