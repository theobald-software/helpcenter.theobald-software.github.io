
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public sealed class RFCCallbackFunction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCCallbackFunction](ERPConnect.RFCCallbackFunction.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_RFCCallbackFunction__ctor_System_String_System_Action_ERPConnect_RFCCallbackFunction__"></a> RFCCallbackFunction\(string, Action<RFCCallbackFunction\>\)

Initializes a new <xref href="ERPConnect.RFCCallbackFunction" data-throw-if-not-resolved="false"></xref> object

```csharp
public RFCCallbackFunction(string name, Action<RFCCallbackFunction> callback)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of this function used to dispatch incoming callbacks

`callback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RFCCallbackFunction](ERPConnect.RFCCallbackFunction.md)\>

The handling method which is called when a
            callback for this function is received

## Properties

### <a id="ERPConnect_RFCCallbackFunction_Callback"></a> Callback

Gets the delegate that is used to handle incoming callbacks

```csharp
public Action<RFCCallbackFunction> Callback { get; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RFCCallbackFunction](ERPConnect.RFCCallbackFunction.md)\>

### <a id="ERPConnect_RFCCallbackFunction_Exports"></a> Exports

Gets a RFCParamter collection which represents the export parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Exports { get; }
```

#### Property Value

 [RFCParameterCollection](ERPConnect.RFCParameterCollection.md)

### <a id="ERPConnect_RFCCallbackFunction_Imports"></a> Imports

Gets a RFCParamter collction which represents the import parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Imports { get; }
```

#### Property Value

 [RFCParameterCollection](ERPConnect.RFCParameterCollection.md)

### <a id="ERPConnect_RFCCallbackFunction_Name"></a> Name

Gets the name of this callback function

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCCallbackFunction_Tables"></a> Tables

Gets a RFCTable collection which represents the tables to be exchanged with the SAP system

```csharp
public RFCTableCollection Tables { get; }
```

#### Property Value

 [RFCTableCollection](ERPConnect.RFCTableCollection.md)

