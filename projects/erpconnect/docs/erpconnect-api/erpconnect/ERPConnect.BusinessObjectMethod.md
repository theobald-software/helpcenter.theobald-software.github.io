
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

Represents a single method of a SAP business object. Please use R3Connection.CreateBapi to create a properly defined instance of this class.

```csharp
public sealed class BusinessObjectMethod : RFCFunction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCFunction](ERPConnect.RFCFunction.md) ← 
[BusinessObjectMethod](ERPConnect.BusinessObjectMethod.md)

#### Inherited Members

[RFCFunction.Execute\(string, string\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Execute\_System\_String\_System\_String\_), 
[RFCFunction.Execute\(string\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Execute\_System\_String\_), 
[RFCFunction.Execute\(\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Execute), 
[RFCFunction.SaveToXML\(XmlWriter\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_SaveToXML\_System\_Xml\_XmlWriter\_), 
[RFCFunction.SaveToXML\(string\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_SaveToXML\_System\_String\_), 
[RFCFunction.SaveToXML\(\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_SaveToXML), 
[RFCFunction.LoadFromXML\(XmlReader\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_LoadFromXML\_System\_Xml\_XmlReader\_), 
[RFCFunction.LoadFromXML\(string\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_LoadFromXML\_System\_String\_), 
[RFCFunction.LoadFromXML\(TextReader\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_LoadFromXML\_System\_IO\_TextReader\_), 
[RFCFunction.LoadFromXMLString\(string\)](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_LoadFromXMLString\_System\_String\_), 
[RFCFunction.Name](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Name), 
[RFCFunction.Connection](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Connection), 
[RFCFunction.Imports](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Imports), 
[RFCFunction.Exports](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Exports), 
[RFCFunction.Changings](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Changings), 
[RFCFunction.Tables](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_Tables), 
[RFCFunction.CallbackFunctions](ERPConnect.RFCFunction.md\#ERPConnect\_RFCFunction\_CallbackFunctions), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_BusinessObjectMethod__ctor_ERPConnect_R3Connection_"></a> BusinessObjectMethod\(R3Connection\)

Initializes an BusinessObjectMethod

```csharp
public BusinessObjectMethod(R3Connection Connection)
```

#### Parameters

`Connection` [R3Connection](ERPConnect.R3Connection.md)

R3Connection object

## Properties

### <a id="ERPConnect_BusinessObjectMethod_MethodName"></a> MethodName

The Name of the Method of the SAP Business Object

```csharp
public string MethodName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BusinessObjectMethod_ObjectName"></a> ObjectName

The Name of the SAP Business Object

```csharp
public string ObjectName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BusinessObjectMethod_Returns"></a> Returns

Rteurns a collection of BapiReturn object that represent all the BAPI return messages.

```csharp
public BapiReturnCollection Returns { get; set; }
```

#### Property Value

 [BapiReturnCollection](ERPConnect.BapiReturnCollection.md)

## Methods

### <a id="ERPConnect_BusinessObjectMethod_CommitWork_System_Boolean_"></a> CommitWork\(bool\)

Execute external Commit when using BAPIs (only few BAPIs need this function)

```csharp
public void CommitWork(bool Wait)
```

#### Parameters

`Wait` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Wait until Commit is processed

### <a id="ERPConnect_BusinessObjectMethod_Execute"></a> Execute\(\)

Exectutes the BAPI

```csharp
public override void Execute()
```

### <a id="ERPConnect_BusinessObjectMethod_RollbackWork"></a> RollbackWork\(\)

Execute external Rollback when using BAPIs (only few BAPIs support this function)

```csharp
public void RollbackWork()
```

