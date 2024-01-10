
Namespace: [ERPConnect.Utils](index.md)  
Assembly: ERPConnectStandard20.dll  

Reads SAP database tables via RFC

```csharp
public sealed class ReadTable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReadTable](ERPConnect.Utils.ReadTable.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_Utils_ReadTable__ctor"></a> ReadTable\(\)

```csharp
public ReadTable()
```

### <a id="ERPConnect_Utils_ReadTable__ctor_ERPConnect_IR3Connection_"></a> ReadTable\(IR3Connection\)

```csharp
public ReadTable(IR3Connection connection)
```

#### Parameters

`connection` [IR3Connection](../erpconnect/ERPConnect.IR3Connection.md)

## Properties

### <a id="ERPConnect_Utils_ReadTable_Connection"></a> Connection

```csharp
public IR3Connection Connection { get; set; }
```

#### Property Value

 [IR3Connection](../erpconnect/ERPConnect.IR3Connection.md)

### <a id="ERPConnect_Utils_ReadTable_Fields"></a> Fields

Represents the fields that should be / have been retrieved.
This collection will be filled and / or refreshed during Run().

```csharp
public ReadTableFieldCollection Fields { get; }
```

#### Property Value

 [ReadTableFieldCollection](ERPConnect.Utils.ReadTableFieldCollection.md)

### <a id="ERPConnect_Utils_ReadTable_OrderBy"></a> OrderBy

Defines the order of the result on SAP side.
Works only with specialized custom function modules.

```csharp
public string OrderBy { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_ReadTable_PackageSize"></a> PackageSize

Number of rows to retrieve per RFC call

```csharp
public int PackageSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Utils_ReadTable_RaiseIncomingPackageEvent"></a> RaiseIncomingPackageEvent

Indicates whether the IncomingPackage event should be raised
and results should be processed per package.

```csharp
public bool RaiseIncomingPackageEvent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_Utils_ReadTable_Result"></a> Result

Result of the query, if IncomingPackage event is not used.

```csharp
public DataTable Result { get; }
```

#### Property Value

 [DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

### <a id="ERPConnect_Utils_ReadTable_RowCount"></a> RowCount

Upper limit for number of rows retrieved in total

```csharp
public int RowCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Utils_ReadTable_RowSkip"></a> RowSkip

Number of rows to be skipped at the start.

```csharp
public int RowSkip { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Utils_ReadTable_TableName"></a> TableName

```csharp
public string TableName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_ReadTable_WhereClause"></a> WhereClause

Selection criteria

```csharp
public string WhereClause { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="ERPConnect_Utils_ReadTable_AddField_System_String_"></a> AddField\(string\)

Appends a field to the Fields collection

```csharp
public void AddField(string fieldName)
```

#### Parameters

`fieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of DDIC table field

### <a id="ERPConnect_Utils_ReadTable_RetrieveAllFieldsOfTable"></a> RetrieveAllFieldsOfTable\(\)

Retrieves all fields of the given table from SAP
and fills the Fields collection

```csharp
public void RetrieveAllFieldsOfTable()
```

### <a id="ERPConnect_Utils_ReadTable_Run"></a> Run\(\)

Retrieves table rows from SAP.
This method will block until all data has been extracted.

```csharp
public void Run()
```

### <a id="ERPConnect_Utils_ReadTable_SetCustomFunctionName_System_String_"></a> SetCustomFunctionName\(string\)

Call this method to use a custom function module. This
overrides `ERPConnect.IR3Connection.ReadTableFunctionName`.

```csharp
public void SetCustomFunctionName(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the custom function module

### <a id="ERPConnect_Utils_ReadTable_IncomingPackage"></a> IncomingPackage

IncomingPackage is fired, when addtional data packages are fetched from SAP.

```csharp
public event ReadTable.OnIncomingPackage IncomingPackage
```

#### Event Type

 [ReadTable](ERPConnect.Utils.ReadTable.md).[OnIncomingPackage](ERPConnect.Utils.ReadTable.OnIncomingPackage.md)

### <a id="ERPConnect_Utils_ReadTable_PackageProgress"></a> PackageProgress

PackageProgress is fired, when addtional data packages are fetched from SAP.

```csharp
public event ReadTable.OnPackageProgress PackageProgress
```

#### Event Type

 [ReadTable](ERPConnect.Utils.ReadTable.md).[OnPackageProgress](ERPConnect.Utils.ReadTable.OnPackageProgress.md)

