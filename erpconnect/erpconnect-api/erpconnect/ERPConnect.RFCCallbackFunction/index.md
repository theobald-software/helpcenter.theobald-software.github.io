Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public sealed class RFCCallbackFunction

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCCallbackFunction](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCCallbackFunction(string, Action<RFCCallbackFunction>)

Initializes a new `ERPConnect.RFCCallbackFunction` object

```csharp
public RFCCallbackFunction(string name, Action<RFCCallbackFunction> callback)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of this function used to dispatch incoming callbacks

`callback` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)\<[RFCCallbackFunction](./)>

The handling method which is called when a callback for this function is received

## Properties

### Callback

Gets the delegate that is used to handle incoming callbacks

```csharp
public Action<RFCCallbackFunction> Callback { get; }

```

#### Property Value

[Action](https://learn.microsoft.com/dotnet/api/system.action-1)\<[RFCCallbackFunction](./)>

### Exports

Gets a RFCParamter collection which represents the export parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Exports { get; }

```

#### Property Value

[RFCParameterCollection](../ERPConnect.RFCParameterCollection/)

### Imports

Gets a RFCParamter collction which represents the import parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Imports { get; }

```

#### Property Value

[RFCParameterCollection](../ERPConnect.RFCParameterCollection/)

### Name

Gets the name of this callback function

```csharp
public string Name { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Tables

Gets a RFCTable collection which represents the tables to be exchanged with the SAP system

```csharp
public RFCTableCollection Tables { get; }

```

#### Property Value

[RFCTableCollection](../ERPConnect.RFCTableCollection/)
