
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

 Obfuscation for storing sensitive data
 <remarks>
     This is no encryption. 
     It only protects data from being read directly by humans.
</remarks>

```csharp
public static class Obfuscation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Obfuscation](ERPConnect.Obfuscation.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### <a id="ERPConnect_Obfuscation_Deobfuscate_System_Byte___System_Byte___System_Byte___"></a> Deobfuscate\(byte\[\], byte\[\], byte\[\]\)

```csharp
public static byte[] Deobfuscate(byte[] obfuscatedData, byte[] key, byte[] iv)
```

#### Parameters

`obfuscatedData` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`iv` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="ERPConnect_Obfuscation_Deobfuscate_System_String_System_Text_Encoding_System_Byte___System_Byte___"></a> Deobfuscate\(string, Encoding, byte\[\], byte\[\]\)

```csharp
public static string Deobfuscate(string obfuscatedText, Encoding encoding, byte[] key, byte[] iv)
```

#### Parameters

`obfuscatedText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`iv` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Obfuscation_Deobfuscate_System_String_"></a> Deobfuscate\(string\)

```csharp
public static string Deobfuscate(string obfuscatedText)
```

#### Parameters

`obfuscatedText` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Obfuscation_DeobfuscateMore_System_String_"></a> DeobfuscateMore\(string\)

```csharp
[Obsolete("Only for backward compatibilty, please use Deobfuscate(string obfuscatedText) instead")]
public static string DeobfuscateMore(string text)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Obfuscation_Obfuscate_System_Byte___System_Byte___System_Byte___"></a> Obfuscate\(byte\[\], byte\[\], byte\[\]\)

```csharp
public static byte[] Obfuscate(byte[] data, byte[] key, byte[] iv)
```

#### Parameters

`data` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`iv` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="ERPConnect_Obfuscation_Obfuscate_System_String_System_Text_Encoding_System_Byte___System_Byte___"></a> Obfuscate\(string, Encoding, byte\[\], byte\[\]\)

```csharp
public static string Obfuscate(string cleartext, Encoding encoding, byte[] key, byte[] iv)
```

#### Parameters

`cleartext` [string](https://learn.microsoft.com/dotnet/api/system.string)

`encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`iv` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Obfuscation_Obfuscate_System_String_"></a> Obfuscate\(string\)

```csharp
public static string Obfuscate(string cleartext)
```

#### Parameters

`cleartext` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Obfuscation_ObfuscateMore_System_String_"></a> ObfuscateMore\(string\)

```csharp
[Obsolete("Only for backward compatibilty, please use Obfuscate(string cleartext) instead")]
public static string ObfuscateMore(string cleartext)
```

#### Parameters

`cleartext` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

