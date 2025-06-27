Namespace: [ERPConnect.Utils](../)\
Assembly: ERPConnectStandard20.dll

Transaction represents a single SAP transction

```csharp
public class Transaction

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Transaction](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Transaction(R3Connection)

Initializes a Transction object

```csharp
public Transaction(R3Connection Connection)

```

#### Parameters

`Connection` [R3Connection](../../erpconnect/ERPConnect.R3Connection/)

A valid R3Connection object

### Transaction()

Initializes a Tranction object

```csharp
public Transaction()

```

## Properties

### BatchSteps

The steps to be executed when running the transaction

```csharp
public BatchStepCollection BatchSteps { get; set; }

```

#### Property Value

[BatchStepCollection](../ERPConnect.Utils.BatchStepCollection/)

### Connection

A R3Connection object

```csharp
public R3Connection Connection { get; set; }

```

#### Property Value

[R3Connection](../../erpconnect/ERPConnect.R3Connection/)

### ExecutionMode

Defines the execution mode

```csharp
public TransactionDialogMode ExecutionMode { get; set; }

```

#### Property Value

[TransactionDialogMode](../ERPConnect.Utils.TransactionDialogMode/)

### Returns

Batch Input return messages

```csharp
public BatchReturnCollection Returns { get; set; }

```

#### Property Value

[BatchReturnCollection](../ERPConnect.Utils.BatchReturnCollection/)

### TCode

The transaction code to be performed

```csharp
public string TCode { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

Defines the execution type

```csharp
public TransactionType Type { get; set; }

```

#### Property Value

[TransactionType](../ERPConnect.Utils.TransactionType/)

### UpdateMode

Defines the Update mode

```csharp
public TransactionUpdateMode UpdateMode { get; set; }

```

#### Property Value

[TransactionUpdateMode](../ERPConnect.Utils.TransactionUpdateMode/)

## Methods

### AddStepSetCursor(string)

Adds a new Batch step

```csharp
public void AddStepSetCursor(string FieldName)

```

#### Parameters

`FieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the field where the cursor should be set

### AddStepSetField(string, string)

Adds a new batch step

```csharp
public void AddStepSetField(string FieldName, string FieldValue)

```

#### Parameters

`FieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the field to be set

`FieldValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

Value of the field to be set

### AddStepSetNewDynpro(string, string)

Adds a new batch step

```csharp
public void AddStepSetNewDynpro(string Program, string DynproNumber)

```

#### Parameters

`Program` [string](https://learn.microsoft.com/dotnet/api/system.string)

Program name

`DynproNumber` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Dynpronumber of the new screen

### AddStepSetOKCode(string)

Adds a new batch step that executes an OK code in the transaction

```csharp
public void AddStepSetOKCode(string OKCode)

```

#### Parameters

`OKCode` [string](https://learn.microsoft.com/dotnet/api/system.string)

OB code

### AddStepSwitchToShowAll()

Adds a new batch step that switch the mode to 'Show All'

```csharp
public void AddStepSwitchToShowAll()

```

### AddStepSwitchToShowOnlyErrors()

Adds a new batch step that switch the mode to 'Show Only Errors'

```csharp
public void AddStepSwitchToShowOnlyErrors()

```

### Execute()

Executes the transaction

```csharp
public void Execute()

```

### SetCustomFunctionName(string)

Use this function to set a custom RFC instead of RFC_CALL_TRANSACTION_USING or RFC_CALL_TRANSACTION

```csharp
public void SetCustomFunctionName(string CustomFunctionName)

```

#### Parameters

`CustomFunctionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the custom RFC
