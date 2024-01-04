
Namespace: [ERPConnect.Utils](index.md)  
Assembly: ERPConnectStandard20.dll  

BatchStep represents a single step for a SAP transaction

```csharp
public class BatchStep
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BatchStep](ERPConnect.Utils.BatchStep.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_Utils_BatchStep__ctor"></a> BatchStep\(\)

Initializies an empty batch step.

```csharp
public BatchStep()
```

### <a id="ERPConnect_Utils_BatchStep__ctor_System_String_System_String_System_Boolean_System_String_System_String_"></a> BatchStep\(string, string, bool, string, string\)

Initializes a new Batch Step

```csharp
public BatchStep(string ProgramName, string DynproNumber, bool BeginNewDynpro, string FieldName, string FieldValue)
```

#### Parameters

`ProgramName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the ABAP program

`DynproNumber` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the current dynpro number

`BeginNewDynpro` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True / false whether the step begins to fill a new dynpro

`FieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the dynprofield to be set

`FieldValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

Value of the field to be set

## Properties

### <a id="ERPConnect_Utils_BatchStep_BeginNewDynpro"></a> BeginNewDynpro

True / false whether the step begins to fill a new dynpro

```csharp
public bool BeginNewDynpro { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_Utils_BatchStep_DynproNumber"></a> DynproNumber

Name of the current dynpro number

```csharp
public string DynproNumber { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchStep_FieldName"></a> FieldName

Name of the dynprofield to be set

```csharp
public string FieldName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchStep_FieldValue"></a> FieldValue

Value of the field to be set

```csharp
public string FieldValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchStep_ProgramName"></a> ProgramName

Name of the ABAP program

```csharp
public string ProgramName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

