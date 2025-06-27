Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Obfuscation for storing sensitive data This is no encryption. It only protects data from being read directly by humans.

```csharp
public static class Obfuscation

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Obfuscation](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### Deobfuscate(byte[], byte[], byte[])

```csharp
public static byte[] Deobfuscate(byte[] obfuscatedData, byte[] key, byte[] iv)

```

#### Parameters

`obfuscatedData` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

`iv` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

#### Returns

[byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### Deobfuscate(string, Encoding, byte[], byte[])

```csharp
public static string Deobfuscate(string obfuscatedText, Encoding encoding, byte[] key, byte[] iv)

```

#### Parameters

`obfuscatedText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

`iv` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Deobfuscate(string)

```csharp
public static string Deobfuscate(string obfuscatedText)

```

#### Parameters

`obfuscatedText` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### DeobfuscateMore(string)

```csharp
[Obsolete("Only for backward compatibilty, please use Deobfuscate(string obfuscatedText) instead")]
public static string DeobfuscateMore(string text)

```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Obfuscate(byte[], byte[], byte[])

```csharp
public static byte[] Obfuscate(byte[] data, byte[] key, byte[] iv)

```

#### Parameters

`data` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

`iv` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

#### Returns

[byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### Obfuscate(string, Encoding, byte[], byte[])

```csharp
public static string Obfuscate(string cleartext, Encoding encoding, byte[] key, byte[] iv)

```

#### Parameters

`cleartext` [string](https://learn.microsoft.com/dotnet/api/system.string)

`encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

`iv` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Obfuscate(string)

```csharp
public static string Obfuscate(string cleartext)

```

#### Parameters

`cleartext` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObfuscateMore(string)

```csharp
[Obsolete("Only for backward compatibilty, please use Obfuscate(string cleartext) instead")]
public static string ObfuscateMore(string cleartext)

```

#### Parameters

`cleartext` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)
