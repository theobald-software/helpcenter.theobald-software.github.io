
Namespace: [ERPConnect.Utils](index.md)  
Assembly: ERPConnectStandard20.dll  

Transaction represents a single SAP transction

```csharp
public class Transaction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Transaction](ERPConnect.Utils.Transaction.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_Utils_Transaction__ctor_ERPConnect_R3Connection_"></a> Transaction\(R3Connection\)

Initializes a Transction object

```csharp
public Transaction(R3Connection Connection)
```

#### Parameters

`Connection` [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

A valid R3Connection object

### <a id="ERPConnect_Utils_Transaction__ctor"></a> Transaction\(\)

Initializes a Tranction object

```csharp
public Transaction()
```

## Properties

### <a id="ERPConnect_Utils_Transaction_BatchSteps"></a> BatchSteps

The steps to be executed when running the transaction

```csharp
public BatchStepCollection BatchSteps { get; set; }
```

#### Property Value

 [BatchStepCollection](ERPConnect.Utils.BatchStepCollection.md)

### <a id="ERPConnect_Utils_Transaction_Connection"></a> Connection

A R3Connection object

```csharp
public R3Connection Connection { get; set; }
```

#### Property Value

 [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

### <a id="ERPConnect_Utils_Transaction_ExecutionMode"></a> ExecutionMode

Defines the execution mode

```csharp
public TransactionDialogMode ExecutionMode { get; set; }
```

#### Property Value

 [TransactionDialogMode](ERPConnect.Utils.TransactionDialogMode.md)

### <a id="ERPConnect_Utils_Transaction_Returns"></a> Returns

Batch Input return messages

```csharp
public BatchReturnCollection Returns { get; set; }
```

#### Property Value

 [BatchReturnCollection](ERPConnect.Utils.BatchReturnCollection.md)

### <a id="ERPConnect_Utils_Transaction_TCode"></a> TCode

The transaction code to be performed

```csharp
public string TCode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_Transaction_Type"></a> Type

Defines the execution type

```csharp
public TransactionType Type { get; set; }
```

#### Property Value

 [TransactionType](ERPConnect.Utils.TransactionType.md)

### <a id="ERPConnect_Utils_Transaction_UpdateMode"></a> UpdateMode

Defines the Update mode

```csharp
public TransactionUpdateMode UpdateMode { get; set; }
```

#### Property Value

 [TransactionUpdateMode](ERPConnect.Utils.TransactionUpdateMode.md)

## Methods

### <a id="ERPConnect_Utils_Transaction_AddStepSetCursor_System_String_"></a> AddStepSetCursor\(string\)

Adds a new Batch step

```csharp
public void AddStepSetCursor(string FieldName)
```

#### Parameters

`FieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the field where the cursor should be set

### <a id="ERPConnect_Utils_Transaction_AddStepSetField_System_String_System_String_"></a> AddStepSetField\(string, string\)

Adds a new batch step

```csharp
public void AddStepSetField(string FieldName, string FieldValue)
```

#### Parameters

`FieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the field to be set

`FieldValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

Value of the field to be set

### <a id="ERPConnect_Utils_Transaction_AddStepSetNewDynpro_System_String_System_String_"></a> AddStepSetNewDynpro\(string, string\)

Adds a new batch step

```csharp
public void AddStepSetNewDynpro(string Program, string DynproNumber)
```

#### Parameters

`Program` [string](https://learn.microsoft.com/dotnet/api/system.string)

Program name

`DynproNumber` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Dynpronumber of the new screen

### <a id="ERPConnect_Utils_Transaction_AddStepSetOKCode_System_String_"></a> AddStepSetOKCode\(string\)

Adds a new batch step that executes an OK code in the transaction

```csharp
public void AddStepSetOKCode(string OKCode)
```

#### Parameters

`OKCode` [string](https://learn.microsoft.com/dotnet/api/system.string)

OB code

### <a id="ERPConnect_Utils_Transaction_AddStepSwitchToShowAll"></a> AddStepSwitchToShowAll\(\)

Adds a new batch step that switch the mode to 'Show All'

```csharp
public void AddStepSwitchToShowAll()
```

### <a id="ERPConnect_Utils_Transaction_AddStepSwitchToShowOnlyErrors"></a> AddStepSwitchToShowOnlyErrors\(\)

Adds a new batch step that switch the mode to 'Show Only Errors'

```csharp
public void AddStepSwitchToShowOnlyErrors()
```

### <a id="ERPConnect_Utils_Transaction_Execute"></a> Execute\(\)

Executes the transaction

```csharp
public void Execute()
```

### <a id="ERPConnect_Utils_Transaction_SetCustomFunctionName_System_String_"></a> SetCustomFunctionName\(string\)

Use this function to set a custom RFC instead of RFC_CALL_TRANSACTION_USING or RFC_CALL_TRANSACTION

```csharp
public void SetCustomFunctionName(string CustomFunctionName)
```

#### Parameters

`CustomFunctionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the custom RFC

