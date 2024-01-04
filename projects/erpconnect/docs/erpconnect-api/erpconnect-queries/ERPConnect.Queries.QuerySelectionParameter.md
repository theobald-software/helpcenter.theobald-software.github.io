
Namespace: [ERPConnect.Queries](index.md)  
Assembly: ERPConnectStandard20.dll  

 QuerySelection.

```csharp
public class QuerySelectionParameter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QuerySelectionParameter](ERPConnect.Queries.QuerySelectionParameter.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_Queries_QuerySelectionParameter__ctor"></a> QuerySelectionParameter\(\)

Constructs a new QuerySelectionParameter object

```csharp
public QuerySelectionParameter()
```

### <a id="ERPConnect_Queries_QuerySelectionParameter__ctor_System_String_System_String_System_String_System_Int32_System_Boolean_System_Boolean_ERPConnect_Queries_Kind_"></a> QuerySelectionParameter\(string, string, string, int, bool, bool, Kind\)

Constructs a new QuerySelectionParameter object

```csharp
public QuerySelectionParameter(string Name, string FieldName, string DescriptionText, int Length, bool Obligatory, bool NoDisplay, Kind Kind)
```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`FieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`DescriptionText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`Obligatory` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`NoDisplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`Kind` [Kind](ERPConnect.Queries.Kind.md)

## Properties

### <a id="ERPConnect_Queries_QuerySelectionParameter_ABAPType"></a> ABAPType

The ABAP type (e.g. C,N,I....)

```csharp
public string ABAPType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Queries_QuerySelectionParameter_DescriptionText"></a> DescriptionText

A description text

```csharp
public string DescriptionText { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Queries_QuerySelectionParameter_FieldName"></a> FieldName

The name of the field

```csharp
public string FieldName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Queries_QuerySelectionParameter_Kind"></a> Kind

Determines if the Selection Parameter is a Select Option or only a single Parameter

```csharp
public Kind Kind { get; set; }
```

#### Property Value

 [Kind](ERPConnect.Queries.Kind.md)

### <a id="ERPConnect_Queries_QuerySelectionParameter_Length"></a> Length

The length of the value, if it is not numeric

```csharp
public int Length { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Queries_QuerySelectionParameter_Name"></a> Name

The unique name of the parameter

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Queries_QuerySelectionParameter_NoDisplay"></a> NoDisplay

Determines whether the Selection Parameter is not displayed on a normal selection screen

```csharp
public bool NoDisplay { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_Queries_QuerySelectionParameter_Obligatory"></a> Obligatory

Determines whether the value is obligatory

```csharp
public bool Obligatory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_Queries_QuerySelectionParameter_Ranges"></a> Ranges

The Range collection associated with this QuerySelectionParameter object

```csharp
public RangeCollection Ranges { get; set; }
```

#### Property Value

 [RangeCollection](ERPConnect.Queries.RangeCollection.md)

## Methods

### <a id="ERPConnect_Queries_QuerySelectionParameter_AddRange_ERPConnect_Queries_Sign_ERPConnect_Queries_RangeOption_System_String_System_String_"></a> AddRange\(Sign, RangeOption, string, string\)

Adds a new Range object to the Ranges collection

```csharp
public virtual void AddRange(Sign Sign, RangeOption Option, string LowValue, string HighValue)
```

#### Parameters

`Sign` [Sign](ERPConnect.Queries.Sign.md)

Sign Inlcude / Exclude

`Option` [RangeOption](ERPConnect.Queries.RangeOption.md)

Option (e.g. Equals, GreaterThan...)

`LowValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The first / low value

`HighValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The second / high value (only needed when Option is bt for between)

### <a id="ERPConnect_Queries_QuerySelectionParameter_AddRange_ERPConnect_Queries_Sign_ERPConnect_Queries_RangeOption_System_String_"></a> AddRange\(Sign, RangeOption, string\)

Adds a new Range object to the Ranges collection

```csharp
public virtual void AddRange(Sign Sign, RangeOption Option, string Value)
```

#### Parameters

`Sign` [Sign](ERPConnect.Queries.Sign.md)

Sign Inlcude / Exclude

`Option` [RangeOption](ERPConnect.Queries.RangeOption.md)

Option (e.g. Equals, GreaterThan...)

`Value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value

### <a id="ERPConnect_Queries_QuerySelectionParameter_AddRange_System_String_"></a> AddRange\(string\)

Adds a new Range object to the Ranges collection

```csharp
public virtual void AddRange(string Value)
```

#### Parameters

`Value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value

