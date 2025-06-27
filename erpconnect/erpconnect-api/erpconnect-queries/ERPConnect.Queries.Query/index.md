Namespace: [ERPConnect.Queries](../)\
Assembly: ERPConnectStandard20.dll

Class for executing SAP Queries and retrieving the data.

```csharp
public class Query

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Query](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Query(R3Connection)

Constructs a new query object

```csharp
public Query(R3Connection Connection)

```

#### Parameters

`Connection` [R3Connection](../../erpconnect/ERPConnect.R3Connection/)

A valid connection object

## Properties

### ExternalRepresentation

Set or gets if fields with user exits should be represented in external format

```csharp
public bool ExternalRepresentation { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Fields

Output fields of the query

```csharp
public QueryFieldCollection Fields { get; set; }

```

#### Property Value

[QueryFieldCollection](../ERPConnect.Queries.QueryFieldCollection/)

### MaxRows

The maximum number of rows to be extracted (0 for all)

```csharp
public int MaxRows { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

Name of the query

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Result

A ADO .NET DataTable which contains the data result

```csharp
public DataTable Result { get; }

```

#### Property Value

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

### SelectionParameters

A collection of SelectParameters which represent the selection screen of the query

```csharp
public QuerySelectionParameterCollection SelectionParameters { get; set; }

```

#### Property Value

[QuerySelectionParameterCollection](../ERPConnect.Queries.QuerySelectionParameterCollection/)

### UserGroup

Name of the user group

```csharp
public string UserGroup { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Variant

Name of the variant (if used)

```csharp
public string Variant { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### WorkArea

The current query workspace

```csharp
public WorkSpace WorkArea { get; set; }

```

#### Property Value

[WorkSpace](../ERPConnect.Queries.WorkSpace/)

## Methods

### Execute()

Executes the query and fills the Result property

```csharp
public void Execute()

```

### ToString()

Retrieves a textual description of the whole query structure

```csharp
public override string ToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

Query structure
