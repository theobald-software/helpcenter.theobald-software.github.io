Namespace: [ERPConnect.Utils](../)\
Assembly: ERPConnectStandard20.dll

Reads SAP database tables via RFC

```csharp
public sealed class ReadTable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [ReadTable](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### ReadTable()

```csharp
public ReadTable()

```

### ReadTable(IR3Connection)

```csharp
public ReadTable(IR3Connection connection)

```

#### Parameters

`connection` [IR3Connection](../../erpconnect/ERPConnect.IR3Connection/)

## Properties

### Connection

```csharp
public IR3Connection Connection { get; set; }

```

#### Property Value

[IR3Connection](../../erpconnect/ERPConnect.IR3Connection/)

### Fields

Represents the fields that should be / have been retrieved. This collection will be filled and / or refreshed during Run().

```csharp
public ReadTableFieldCollection Fields { get; }

```

#### Property Value

[ReadTableFieldCollection](../ERPConnect.Utils.ReadTableFieldCollection/)

### OrderBy

Defines the order of the result on SAP side. Works only with specialized custom function modules.

```csharp
public string OrderBy { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### PackageSize

Number of rows to retrieve per RFC call

```csharp
public int PackageSize { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### RaiseIncomingPackageEvent

Indicates whether the IncomingPackage event should be raised and results should be processed per package.

```csharp
public bool RaiseIncomingPackageEvent { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Result

Result of the query, if IncomingPackage event is not used.

```csharp
public DataTable Result { get; }

```

#### Property Value

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

### RowCount

Upper limit for number of rows retrieved in total

```csharp
public int RowCount { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### RowSkip

Number of rows to be skipped at the start.

```csharp
public int RowSkip { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### TableName

```csharp
public string TableName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### WhereClause

Selection criteria

```csharp
public string WhereClause { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AddField(string)

Appends a field to the Fields collection

```csharp
public void AddField(string fieldName)

```

#### Parameters

`fieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of DDIC table field

### RetrieveAllFieldsOfTable()

Retrieves all fields of the given table from SAP and fills the Fields collection

```csharp
public void RetrieveAllFieldsOfTable()

```

### Run()

Retrieves table rows from SAP. This method will block until all data has been extracted.

```csharp
public void Run()

```

### SetCustomFunctionName(string)

Call this method to use a custom function module. This overrides `ERPConnect.IR3Connection.ReadTableFunctionName`.

```csharp
public void SetCustomFunctionName(string name)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the custom function module

### IncomingPackage

IncomingPackage is fired, when addtional data packages are fetched from SAP.

```csharp
public event ReadTable.OnIncomingPackage IncomingPackage

```

#### Event Type

[ReadTable](./).[OnIncomingPackage](../ERPConnect.Utils.ReadTable.OnIncomingPackage/)

### PackageProgress

PackageProgress is fired, when addtional data packages are fetched from SAP.

```csharp
public event ReadTable.OnPackageProgress PackageProgress

```

#### Event Type

[ReadTable](./).[OnPackageProgress](../ERPConnect.Utils.ReadTable.OnPackageProgress/)
