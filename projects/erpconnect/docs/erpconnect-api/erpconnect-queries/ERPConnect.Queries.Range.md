
Namespace: [ERPConnect.Queries](index.md)  
Assembly: ERPConnect35.dll  

Zusammenfassung für QuerySelectionRange.

```csharp
public class Range
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Range](ERPConnect.Queries.Range.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_Queries_Range__ctor"></a> Range\(\)

Constructs a new Range object

```csharp
public Range()
```

### <a id="ERPConnect_Queries_Range__ctor_ERPConnect_Queries_Sign_ERPConnect_Queries_RangeOption_System_String_System_String_"></a> Range\(Sign, RangeOption, string, string\)

Constructs a new Range object

```csharp
public Range(Sign Sign, RangeOption Option, string LowValue, string HighValue)
```

#### Parameters

`Sign` [Sign](ERPConnect.Queries.Sign.md)

Sign (e.g. Include)

`Option` [RangeOption](ERPConnect.Queries.RangeOption.md)

Option (e.g. Between)

`LowValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The low value of this Range object

`HighValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The high value of this Range object

## Properties

### <a id="ERPConnect_Queries_Range_HighValue"></a> HighValue

The high value of this Range object

```csharp
public string HighValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Queries_Range_LowValue"></a> LowValue

The low value of this Range object

```csharp
public string LowValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Queries_Range_Option"></a> Option

Option (e.g. Between)

```csharp
public RangeOption Option { get; set; }
```

#### Property Value

 [RangeOption](ERPConnect.Queries.RangeOption.md)

### <a id="ERPConnect_Queries_Range_Sign"></a> Sign

Sign (e.g. Include)

```csharp
public Sign Sign { get; set; }
```

#### Property Value

 [Sign](ERPConnect.Queries.Sign.md)

