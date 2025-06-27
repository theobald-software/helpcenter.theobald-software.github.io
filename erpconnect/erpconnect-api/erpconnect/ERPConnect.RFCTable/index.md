Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

RFCTable represents a single table to be assigned to a RFCServerFunction object or to a RFCFunction object

```csharp
public sealed class RFCTable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCTable](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCTable()

Initializes a new RFCTable object

```csharp
public RFCTable()

```

### RFCTable(string)

Initializes a new RFCTable object and sets the name of the table

```csharp
public RFCTable(string name)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the table

### RFCTable(string, RFCTableColumnCollection)

Initializes a new RFCTable object and sets the name and columns of the table

```csharp
public RFCTable(string name, RFCTableColumnCollection columns)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the table

`columns` [RFCTableColumnCollection](../ERPConnect.RFCTableColumnCollection/)

Columns of the table

## Properties

### Columns

Returns a collection of RFCTableColumn objects which represent the columns of the table.

```csharp
public RFCTableColumnCollection Columns { get; }

```

#### Property Value

[RFCTableColumnCollection](../ERPConnect.RFCTableColumnCollection/)

### IsSupplied

Gets or sets a value indicating whether this table is included in the remote function call. By default this is `true`.

```csharp
public bool IsSupplied { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

When using NWRFC, some function modules might not even calculate the result. The FM can use `IS SUPPLIED` to check whether the table was supplied or requested.

### Name

Returns the name of the table as provided by the function module

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### RowCount

Returns the number of rows contained in this table

```csharp
public int RowCount { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rows

Returns a collection of RFCStructure object which represent the rows of the table

```csharp
public RFCStructureCollection Rows { get; }

```

#### Property Value

[RFCStructureCollection](../ERPConnect.RFCStructureCollection/)

### this[int]

Returns a row represented by a RFCStructure object at a given index

```csharp
public object this[int rowIndex] { get; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### this[int, int]

Returns the value of table line at row RowIndex and column index ColIndex

```csharp
public object this[int rowIndex, int columnIndex] { get; set; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### this[int, string]

Returns the value of table line at row RowIndex and column ColName

```csharp
public object this[int rowIndex, string columnName] { get; set; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### AddRow()

Adds a new row and returns the new RFCStructure object

```csharp
public RFCStructure AddRow()

```

#### Returns

[RFCStructure](../ERPConnect.RFCStructure/)

The new RFCStrucure object which represents the new row

### Clear()

Empties the table

```csharp
public void Clear()

```

### CopyValues(RFCTable)

Sets values for all cells that have a matching column name

```csharp
public void CopyValues(RFCTable copyFrom)

```

#### Parameters

`copyFrom` [RFCTable](./)

### NewRows()

Replaces the current `ERPConnect.RFCTable.Rows` instance with a new one

```csharp
public void NewRows()

```

### RetrieveColumnsByStructure(string, IR3Connection)

Retrieves the columns directly from the SAP Data Dictionary. The RFCColumn collection will be overwritten

```csharp
public void RetrieveColumnsByStructure(string structureName, IR3Connection connection)

```

#### Parameters

`structureName` [string](https://learn.microsoft.com/dotnet/api/system.string)

DDIC name of the structure

`connection` [IR3Connection](../ERPConnect.IR3Connection/)

R3Connection object

### RowLength()

Returns the width of one table row

```csharp
public int RowLength()

```

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

The width of a table row

### ToADOTable()

Converts the RFCTable object into an ADO.NET DataTable object

```csharp
public DataTable ToADOTable()

```

#### Returns

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

A newly created ADO.NET DataTable

### ToADOTable(string[])

Converts the RFCTable object into an ADO.NET DataTable object

```csharp
public DataTable ToADOTable(string[] columnNames)

```

#### Parameters

`columnNames` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

Column array

#### Returns

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

A newly created DataTable object

### ToADOTable(string)

Converts the RFCTable object into an ADO.NET DataTable object

```csharp
public DataTable ToADOTable(string filter)

```

#### Parameters

`filter` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filter expression

#### Returns

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

A newly created DataTable object

### ToADOTable(string[], string)

Converts the RFCTable object into an ADO.NET DataTable object

```csharp
public DataTable ToADOTable(string[] columnNames, string filter)

```

#### Parameters

`columnNames` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

Column array

`filter` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filter expression

#### Returns

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

A newly created DataTable object
