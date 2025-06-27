Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

RFCStructure object represent a real structure or a row in a RFC table

```csharp
public sealed class RFCStructure

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCStructure](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCStructure()

Initializes a new RFCStructure object

```csharp
public RFCStructure()

```

### RFCStructure(RFCTableColumnCollection)

Constructs a new RFCStructure. The structure is defined by the RFCTableColumnCollection

```csharp
public RFCStructure(RFCTableColumnCollection columns)

```

#### Parameters

`columns` [RFCTableColumnCollection](../ERPConnect.RFCTableColumnCollection/)

A RFCTableColumnCollections

## Properties

### Columns

Returns a RFCTableColumn collection

```csharp
public RFCTableColumnCollection Columns { get; }

```

#### Property Value

[RFCTableColumnCollection](../ERPConnect.RFCTableColumnCollection/)

### Length

returns the overall width of a structured Type

```csharp
public int Length { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### this[int]

Returns the value of a structure element by providing the index of element

```csharp
public object this[int index] { get; set; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### this[string]

Returns the value of a structure element by providing the name of element

```csharp
public object this[string columnName] { get; set; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### CopyValues(RFCStructure)

Sets all values that have a matching column name

```csharp
public void CopyValues(RFCStructure copyFrom)

```

#### Parameters

`copyFrom` [RFCStructure](./)

### IsStructure(string)

Returns whether a component of a structure is a structure

```csharp
public bool IsStructure(string componentName)

```

#### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the component

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsStructure(int)

Returns wether a component of a structure is a structure

```csharp
public bool IsStructure(int componentIndex)

```

#### Parameters

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the component

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsTable(string)

Returns whether a component of a structure is a table

```csharp
public bool IsTable(string componentName)

```

#### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the component

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsTable(int)

Returns whether a component of a structure is a table

```csharp
public bool IsTable(int componentIndex)

```

#### Parameters

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the component

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetValueInternal(int, object)

Sets the parameter value for a structure element directly without any checks or conversions

```csharp
public void SetValueInternal(int index, object value)

```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

### ToStructure(string)

Converts a component of the structure to RFCStructure

```csharp
public RFCStructure ToStructure(string componentName)

```

#### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the component

#### Returns

[RFCStructure](./)

Component converted to RFCStructure

### ToStructure(int)

Converts a component of the structure to RFCStructure

```csharp
public RFCStructure ToStructure(int componentIndex)

```

#### Parameters

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the component

#### Returns

[RFCStructure](./)

Component converted to RFCStructure

### ToTable(string)

Converts a component of the structure to RFCTable

```csharp
public RFCTable ToTable(string componentName)

```

#### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the component

#### Returns

[RFCTable](../ERPConnect.RFCTable/)

Component converted to RFCTable

### ToTable(int)

Converts a component of the structure to RFCTable

```csharp
public RFCTable ToTable(int componentIndex)

```

#### Parameters

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the component

#### Returns

[RFCTable](../ERPConnect.RFCTable/)

Component converted to RFCTable
