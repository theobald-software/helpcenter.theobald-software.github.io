
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

Converts between 1-character proprietary SAP language keys and
2-character ISO 639-1 language keys (also used by SAP)

```csharp
public static class AbapLanguageKey
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AbapLanguageKey](ERPConnect.AbapLanguageKey.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ERPConnect_AbapLanguageKey_GetOneCharKey_System_String_"></a> GetOneCharKey\(string\)

Returns a matching 1-character SAP language key

```csharp
public static string GetOneCharKey(string languageKey)
```

#### Parameters

`languageKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Exceptions

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

### <a id="ERPConnect_AbapLanguageKey_OneToTwoCharKey_System_String_"></a> OneToTwoCharKey\(string\)

Converts an 1-character SAP language key to a 2-character ISO 639-1 language key

```csharp
public static string OneToTwoCharKey(string oneCharKey)
```

#### Parameters

`oneCharKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

1-character SAP language key

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

2-character ISO 639-1 language key

#### Exceptions

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

### <a id="ERPConnect_AbapLanguageKey_TwoToOneCharKey_System_String_"></a> TwoToOneCharKey\(string\)

Converts a 2-character ISO 639-1 language key to an 1-character SAP language key

```csharp
public static string TwoToOneCharKey(string twoCharKey)
```

#### Parameters

`twoCharKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

2-character ISO 639-1 language key

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

1-character SAP language key

#### Exceptions

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

