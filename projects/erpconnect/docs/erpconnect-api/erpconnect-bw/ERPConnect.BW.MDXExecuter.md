
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnect35.dll  

```csharp
public class MDXExecuter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MDXExecuter](ERPConnect.BW.MDXExecuter.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_BW_MDXExecuter__ctor_ERPConnect_R3Connection_"></a> MDXExecuter\(R3Connection\)

Constructs a MDXExecuter object

```csharp
public MDXExecuter(R3Connection Connection)
```

#### Parameters

`Connection` [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

Reference to a valid R3Connection object

## Properties

### <a id="ERPConnect_BW_MDXExecuter_Connection"></a> Connection

Reference to a valid R3Connection object

```csharp
public R3Connection Connection { get; set; }
```

#### Property Value

 [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

### <a id="ERPConnect_BW_MDXExecuter_MDX"></a> MDX

MDX statement

```csharp
public string MDX { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_MDXExecuter_MaxRows"></a> MaxRows

Number of rows to maximal retrieved.

```csharp
public int MaxRows { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_BW_MDXExecuter_PackageSize"></a> PackageSize

Defines if the result is fetched in more than one data packet (set PackageSize to greater 0 to enable packaging)

```csharp
public int PackageSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_BW_MDXExecuter_Result"></a> Result

Contains the resultset of the MDX execution

```csharp
public DataTable Result { get; }
```

#### Property Value

 [DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

### <a id="ERPConnect_BW_MDXExecuter_UnitsInResultset"></a> UnitsInResultset

Gets or sets a value indicating whether the units of a measure are output into a separated column in the resultset

```csharp
public bool UnitsInResultset { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_BW_MDXExecuter_UseFlattening"></a> UseFlattening

For internal use only! Do not use!!!!!

```csharp
public bool UseFlattening { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_BW_MDXExecuter_UseFormattedValue"></a> UseFormattedValue

Defines whether the formatted value or the technical should be used (this can defined in BEX analyzer)

```csharp
public bool UseFormattedValue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_BW_MDXExecuter_UseMemberUniqueNamesInsteadOfCaption"></a> UseMemberUniqueNamesInsteadOfCaption

For internal use only! Do not use!!!!!

```csharp
public bool UseMemberUniqueNamesInsteadOfCaption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_BW_MDXExecuter_UseNewOlapBapis"></a> UseNewOlapBapis

Gets or sets a value indicating whether the new OLAP BAPIs should be used for the extraction (see SAP note 1232751)

```csharp
public bool UseNewOlapBapis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="ERPConnect_BW_MDXExecuter_Execute"></a> Execute\(\)

Executes the current MDX statement and fills the Result table

```csharp
public void Execute()
```

### <a id="ERPConnect_BW_MDXExecuter_DebuggingDetails"></a> DebuggingDetails

```csharp
public event MDXExecuter.OnDebuggingDetails DebuggingDetails
```

#### Event Type

 [MDXExecuter](ERPConnect.BW.MDXExecuter.md).[OnDebuggingDetails](ERPConnect.BW.MDXExecuter.OnDebuggingDetails.md)

### <a id="ERPConnect_BW_MDXExecuter_IncomingPackage"></a> IncomingPackage

IncomingPackage is fired, when addtional data packages are fetched from SAP.

```csharp
public event MDXExecuter.OnIncomingPackage IncomingPackage
```

#### Event Type

 [MDXExecuter](ERPConnect.BW.MDXExecuter.md).[OnIncomingPackage](ERPConnect.BW.MDXExecuter.OnIncomingPackage.md)

