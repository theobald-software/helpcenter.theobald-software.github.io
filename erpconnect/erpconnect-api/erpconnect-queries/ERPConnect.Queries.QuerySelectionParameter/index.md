Namespace: [ERPConnect.Queries](../)\
Assembly: ERPConnectStandard20.dll

QuerySelection.

```csharp
public class QuerySelectionParameter

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [QuerySelectionParameter](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### QuerySelectionParameter()

Constructs a new QuerySelectionParameter object

```csharp
public QuerySelectionParameter()

```

### QuerySelectionParameter(string, string, string, int, bool, bool, Kind)

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

`Kind` [Kind](../ERPConnect.Queries.Kind/)

## Properties

### ABAPType

The ABAP type (e.g. C,N,I....)

```csharp
public string ABAPType { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### DescriptionText

A description text

```csharp
public string DescriptionText { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### FieldName

The name of the field

```csharp
public string FieldName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Kind

Determines if the Selection Parameter is a Select Option or only a single Parameter

```csharp
public Kind Kind { get; set; }

```

#### Property Value

[Kind](../ERPConnect.Queries.Kind/)

### Length

The length of the value, if it is not numeric

```csharp
public int Length { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

The unique name of the parameter

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### NoDisplay

Determines whether the Selection Parameter is not displayed on a normal selection screen

```csharp
public bool NoDisplay { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Obligatory

Determines whether the value is obligatory

```csharp
public bool Obligatory { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Ranges

The Range collection associated with this QuerySelectionParameter object

```csharp
public RangeCollection Ranges { get; set; }

```

#### Property Value

[RangeCollection](../ERPConnect.Queries.RangeCollection/)

## Methods

### AddRange(Sign, RangeOption, string, string)

Adds a new Range object to the Ranges collection

```csharp
public virtual void AddRange(Sign Sign, RangeOption Option, string LowValue, string HighValue)

```

#### Parameters

`Sign` [Sign](../ERPConnect.Queries.Sign/)

Sign Inlcude / Exclude

`Option` [RangeOption](../ERPConnect.Queries.RangeOption/)

Option (e.g. Equals, GreaterThan...)

`LowValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The first / low value

`HighValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The second / high value (only needed when Option is bt for between)

### AddRange(Sign, RangeOption, string)

Adds a new Range object to the Ranges collection

```csharp
public virtual void AddRange(Sign Sign, RangeOption Option, string Value)

```

#### Parameters

`Sign` [Sign](../ERPConnect.Queries.Sign/)

Sign Inlcude / Exclude

`Option` [RangeOption](../ERPConnect.Queries.RangeOption/)

Option (e.g. Equals, GreaterThan...)

`Value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value

### AddRange(string)

Adds a new Range object to the Ranges collection

```csharp
public virtual void AddRange(string Value)

```

#### Parameters

`Value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value
