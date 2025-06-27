Namespace: [ERPConnect.BW](../)\
Assembly: ERPConnectStandard20.dll

A cube's dimension

```csharp
public class Dimension

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Dimension](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Dimension()

Constructs a new, empty dimension

```csharp
public Dimension()

```

### Dimension(R3Connection, BWCube, string, string, string, string, DimensionType)

Constructs a new dimension that is ready to use

```csharp
public Dimension(R3Connection Connection, BWCube Cube, string Name, string UniqueName, string Description, string Caption, DimensionType Type)

```

#### Parameters

`Connection` [R3Connection](../../erpconnect/ERPConnect.R3Connection/)

A valid connection object

`Cube` [BWCube](../ERPConnect.BW.BWCube/)

A BWCube object

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the dimension

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique name of the dimension

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The description of the dimension

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

The caption of the dimension

`Type` [DimensionType](../ERPConnect.BW.DimensionType/)

The type of the dimension (measure, normal or time)

### Dimension(R3Connection, BWCube, string, string, string, string, DimensionType, string, int)

Constructs a new dimension that is ready to use

```csharp
public Dimension(R3Connection Connection, BWCube Cube, string Name, string UniqueName, string Description, string Caption, DimensionType Type, string DataType, int Decimals)

```

#### Parameters

`Connection` [R3Connection](../../erpconnect/ERPConnect.R3Connection/)

A valid connection object

`Cube` [BWCube](../ERPConnect.BW.BWCube/)

A BWCube object

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the dimension

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique name of the dimension

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The description of the dimension

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

The caption of the dimension

`Type` [DimensionType](../ERPConnect.BW.DimensionType/)

The type of the dimension (measure, normal or time)

`DataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The data type of the dimension (e.g. CHAR)

`Decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of decimals digits (if the DataType is DEC)

## Properties

### Caption

The caption of the dimension

```csharp
public string Caption { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Connection

A valid connection object

```csharp
public R3Connection Connection { get; set; }

```

#### Property Value

[R3Connection](../../erpconnect/ERPConnect.R3Connection/)

### Cube

Reference to the BWCube object the dimension belongs to

```csharp
public BWCube Cube { get; set; }

```

#### Property Value

[BWCube](../ERPConnect.BW.BWCube/)

### DataType

The data type of the dimension (e.g. CHAR)

```csharp
public string DataType { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Decimals

The number of decimals digits (if the DataType is DEC)

```csharp
public int Decimals { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Description

The description of the dimension

```csharp
public string Description { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### FlatOrdinal

The ordinal number of this dimension when the dimension is contained in the flat mdx statement

```csharp
public int FlatOrdinal { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Hierarchies

A reference to the Hierarchies collection, if this dimension contains hierarchies

```csharp
public HierarchyCollection Hierarchies { get; set; }

```

#### Property Value

[HierarchyCollection](../ERPConnect.BW.HierarchyCollection/)

### IsBWDate

True if it is a Field of type BW Date

```csharp
public bool IsBWDate { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

The name of the dimension

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Properties

A reference to the Properties collection of this dimension

```csharp
public PropertyCollection Properties { get; set; }

```

#### Property Value

[PropertyCollection](../ERPConnect.BW.PropertyCollection/)

### SelectForFlatMDX

Defines if this dimension is contained in the flat mdx functionality

```csharp
public bool SelectForFlatMDX { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Type

The type of the dimension (measure, normal or time)

```csharp
public DimensionType Type { get; set; }

```

#### Property Value

[DimensionType](../ERPConnect.BW.DimensionType/)

### UniqueName

The unique name of the dimension

```csharp
public string UniqueName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### GetMembers()

Returns a DataTable object with all members of the dimension

```csharp
public MembersDataTable GetMembers()

```

#### Returns

[MembersDataTable](../ERPConnect.BW.MembersDataTable/)

A DataTable with the members of the dimension

### GetMembers(int, int)

Returns a DataTable object with all members of the dimension

```csharp
public MembersDataTable GetMembers(int StartRow, int EndRow)

```

#### Parameters

`StartRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Start row

`EndRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

End row

#### Returns

[MembersDataTable](../ERPConnect.BW.MembersDataTable/)

A DataTable with the members of the dimension
