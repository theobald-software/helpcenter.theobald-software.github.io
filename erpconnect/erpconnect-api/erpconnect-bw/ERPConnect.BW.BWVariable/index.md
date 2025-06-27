Namespace: [ERPConnect.BW](../)\
Assembly: ERPConnectStandard20.dll

A cube's variable

```csharp
public class BWVariable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [BWVariable](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### BWVariable()

Constructs a new BWVariable object

```csharp
public BWVariable()

```

### BWVariable(BWCube, string, string, string, bool, BWVariableSelectionType, string, BWVariableType)

Constructs a new BWVariable object

```csharp
public BWVariable(BWCube cube, string name, string caption, string dataType, bool isRequired, BWVariableSelectionType selectionType, string referenceDimension, BWVariableType type)

```

#### Parameters

`cube` [BWCube](../ERPConnect.BW.BWCube/)

Reference to the cube the variable is belonging to

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the variable

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

Caption or description of the variable

`dataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

DataType of the variable

`isRequired` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Defines if this variable is obligatory or not

`selectionType` [BWVariableSelectionType](../ERPConnect.BW.BWVariableSelectionType/)

Defines the type of the variable (complex, single or interval)

`referenceDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

Defines which dimension this variable refers to

`type` [BWVariableType](../ERPConnect.BW.BWVariableType/)

Defines if the variable is numeric, member or hierarchy

## Properties

### Caption

Caption or description of the variable

```csharp
public string Caption { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ComplexRanges

Represents a collection of ranges when the selection type is complex

```csharp
public RangeCollection ComplexRanges { get; set; }

```

#### Property Value

[RangeCollection](../../erpconnect-queries/ERPConnect.Queries.RangeCollection/)

### Cube

Reference to the cube the variable is belonging to

```csharp
public BWCube Cube { get; set; }

```

#### Property Value

[BWCube](../ERPConnect.BW.BWCube/)

### DataType

DataType of the variable

```csharp
public string DataType { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

Name of the variable

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ReferenceDimensionName

Defines which dimension this variable refers to

```csharp
public string ReferenceDimensionName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Required

Defines if this variable is obligatory or not

```csharp
public bool Required { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SelectionType

Defines the type of the variable (complex, single or interval)

```csharp
public BWVariableSelectionType SelectionType { get; set; }

```

#### Property Value

[BWVariableSelectionType](../ERPConnect.BW.BWVariableSelectionType/)

### SingleRange

Represents a single range when the selection type is interval or single

```csharp
public Range SingleRange { get; set; }

```

#### Property Value

[Range](../../erpconnect-queries/ERPConnect.Queries.Range/)

### Type

Defines if the variable is numeric, member or hierarchy

```csharp
public BWVariableType Type { get; set; }

```

#### Property Value

[BWVariableType](../ERPConnect.BW.BWVariableType/)

## Methods

### GetMembers(int, int)

Returns all members of this variable (can be used for designing a value help)

```csharp
public MembersDataTable GetMembers(int StartRow, int EndRow)

```

#### Parameters

`StartRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The row number the selection starts with

`EndRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The row number the selection ends with

#### Returns

[MembersDataTable](../ERPConnect.BW.MembersDataTable/)

A DataTable that contains the members

### ToString()

Converts this object to string

```csharp
public override string ToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

The string
