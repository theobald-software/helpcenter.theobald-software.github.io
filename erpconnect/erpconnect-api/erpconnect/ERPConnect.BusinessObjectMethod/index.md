Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Represents a single method of a SAP business object. Please use R3Connection.CreateBapi to create a properly defined instance of this class.

```csharp
public sealed class BusinessObjectMethod : RFCFunction

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCFunction](../ERPConnect.RFCFunction/) ← [BusinessObjectMethod](./)

#### Inherited Members

[RFCFunction.Execute(string, string)](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Execute_System_String_System_String_), [RFCFunction.Execute(string)](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Execute_System_String_), [RFCFunction.Execute()](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Execute), [RFCFunction.SaveToXML(XmlWriter)](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_SaveToXML_System_Xml_XmlWriter_), [RFCFunction.SaveToXML(string)](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_SaveToXML_System_String_), [RFCFunction.SaveToXML()](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_SaveToXML), [RFCFunction.LoadFromXML(XmlReader)](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_LoadFromXML_System_Xml_XmlReader_), [RFCFunction.LoadFromXML(string)](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_LoadFromXML_System_String_), [RFCFunction.LoadFromXML(TextReader)](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_LoadFromXML_System_IO_TextReader_), [RFCFunction.LoadFromXMLString(string)](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_LoadFromXMLString_System_String_), [RFCFunction.Name](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Name), [RFCFunction.Connection](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Connection), [RFCFunction.Imports](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Imports), [RFCFunction.Exports](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Exports), [RFCFunction.Changings](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Changings), [RFCFunction.Tables](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_Tables), [RFCFunction.CallbackFunctions](../ERPConnect.RFCFunction/#ERPConnect_RFCFunction_CallbackFunctions), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### BusinessObjectMethod(R3Connection)

Initializes an BusinessObjectMethod

```csharp
public BusinessObjectMethod(R3Connection Connection)

```

#### Parameters

`Connection` [R3Connection](../ERPConnect.R3Connection/)

R3Connection object

## Properties

### MethodName

The Name of the Method of the SAP Business Object

```csharp
public string MethodName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObjectName

The Name of the SAP Business Object

```csharp
public string ObjectName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Returns

Rteurns a collection of BapiReturn object that represent all the BAPI return messages.

```csharp
public BapiReturnCollection Returns { get; set; }

```

#### Property Value

[BapiReturnCollection](../ERPConnect.BapiReturnCollection/)

## Methods

### CommitWork(bool)

Execute external Commit when using BAPIs (only few BAPIs need this function)

```csharp
public void CommitWork(bool Wait)

```

#### Parameters

`Wait` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Wait until Commit is processed

### Execute()

Exectutes the BAPI

```csharp
public override void Execute()

```

### RollbackWork()

Execute external Rollback when using BAPIs (only few BAPIs support this function)

```csharp
public void RollbackWork()

```
