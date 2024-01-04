
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

RFCServer represents a running server, that can handle incoming RFC calls from a superposed SAP system

```csharp
public sealed class RFCServer : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCServer](ERPConnect.RFCServer.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_RFCServer__ctor"></a> RFCServer\(\)

Initializes a RFCServer object

```csharp
public RFCServer()
```

### <a id="ERPConnect_RFCServer__ctor_System_Boolean_"></a> RFCServer\(bool\)

Initializes a new instance of the RFCServer class

```csharp
public RFCServer(bool nonUnicodeIsBigEndian)
```

#### Parameters

`nonUnicodeIsBigEndian` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates, whether non-Unicode systems are treated
as big endian systems

### <a id="ERPConnect_RFCServer__ctor_System_String_System_String_System_String_"></a> RFCServer\(string, string, string\)

Initializes a RFCServer object

```csharp
public RFCServer(string gatewayHost, string gatewayService, string programId)
```

#### Parameters

`gatewayHost` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Gateway host

`gatewayService` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Gateway service ("sapgwXX" -&gt; XX = system number)

`programId` [string](https://learn.microsoft.com/dotnet/api/system.string)

Program ID as defined in SM59

### <a id="ERPConnect_RFCServer__ctor_System_String_"></a> RFCServer\(string\)

Initializes a RFCServer object

```csharp
public RFCServer(string connectionString)
```

#### Parameters

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

Connection String

### <a id="ERPConnect_RFCServer__ctor_System_String_System_String_System_String_ERPConnect_SNCSettings_"></a> RFCServer\(string, string, string, SNCSettings\)

Initializes a RFCServer object

```csharp
public RFCServer(string gatewayHost, string gatewayService, string programId, SNCSettings sncSettings)
```

#### Parameters

`gatewayHost` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Gateway host

`gatewayService` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Gateway service ("sapgwXX" -&gt; XX = system number)

`programId` [string](https://learn.microsoft.com/dotnet/api/system.string)

Program ID as defined in SM59

`sncSettings` [SNCSettings](ERPConnect.SNCSettings.md)

Settings for SNC

## Properties

### <a id="ERPConnect_RFCServer_CanReceiveIdocs"></a> CanReceiveIdocs

Defines, whether the server object should be able to receive idocs.

```csharp
public bool CanReceiveIdocs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCServer_GatewayHost"></a> GatewayHost

Name of the gatewayhost

```csharp
public string GatewayHost { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Have a look at <xref href="ERPConnect.RFCServer.Start?text=ERPConnect.RFCServer.Start" data-throw-if-not-resolved="false"></xref> for a complete example.

### <a id="ERPConnect_RFCServer_GatewayService"></a> GatewayService

Name of the gateysevice ("sapgwXX" replace XX by the SAP system number)

```csharp
public string GatewayService { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Have a look at <xref href="ERPConnect.RFCServer.Start?text=ERPConnect.RFCServer.Start" data-throw-if-not-resolved="false"></xref> for a complete example.

### <a id="ERPConnect_RFCServer_IsRunning"></a> IsRunning

Defines, whether the server thread is running at the moment

```csharp
public bool IsRunning { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Have a look at <xref href="ERPConnect.RFCServer.Start?text=ERPConnect.RFCServer.Start" data-throw-if-not-resolved="false"></xref> for a complete example.

### <a id="ERPConnect_RFCServer_IsUnicode"></a> IsUnicode

Defines whether the partner system is a unicode system

```csharp
public bool IsUnicode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCServer_LastTID"></a> LastTID

Transaction ID of last incoming call

```csharp
public string LastTID { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCServer_LogDir"></a> LogDir

If this directory is set, every call will be saved there in a XML file

```csharp
public string LogDir { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCServer_Logging"></a> Logging

Defines, if the calls will be logged to local trace file.

```csharp
public bool Logging { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCServer_ProgramID"></a> ProgramID

ProgrammID as definied in the RFC destintion (Transaction SM59)

```csharp
public string ProgramID { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Have a look at <xref href="ERPConnect.RFCServer.Start?text=ERPConnect.RFCServer.Start" data-throw-if-not-resolved="false"></xref> for a complete example.

### <a id="ERPConnect_RFCServer_Protocol"></a> Protocol

Gets or sets the communication protocol/API

```csharp
public ClientProtocol Protocol { get; set; }
```

#### Property Value

 [ClientProtocol](ERPConnect.ClientProtocol.md)

### <a id="ERPConnect_RFCServer_RegisteredFunctions"></a> RegisteredFunctions

A collection of all RFCServerFunction objects that the connected SAP system can call.

```csharp
public RFCServerFunctionCollection RegisteredFunctions { get; }
```

#### Property Value

 [RFCServerFunctionCollection](ERPConnect.RFCServerFunctionCollection.md)

#### Remarks

Have a look at <xref href="ERPConnect.RFCServer.Start?text=ERPConnect.RFCServer.Start" data-throw-if-not-resolved="false"></xref> for a complete example.

### <a id="ERPConnect_RFCServer_SAPEncodingInfo"></a> SAPEncodingInfo

Gets information about data encoding

```csharp
public SAPEncodingInfo SAPEncodingInfo { get; }
```

#### Property Value

 [SAPEncodingInfo](ERPConnect.SAPEncodingInfo.md)

### <a id="ERPConnect_RFCServer_SNCSettings"></a> SNCSettings

Gets or sets the settings for SNC

```csharp
public SNCSettings SNCSettings { get; set; }
```

#### Property Value

 [SNCSettings](ERPConnect.SNCSettings.md)

## Methods

### <a id="ERPConnect_RFCServer_CancelRegisteredServers"></a> CancelRegisteredServers\(\)

Ends all servers that are registered with the given Program ID at the SAP Host

```csharp
public void CancelRegisteredServers()
```

### <a id="ERPConnect_RFCServer_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ERPConnect_RFCServer_Finalize"></a> \~RFCServer\(\)

```csharp
protected ~RFCServer()
```

### <a id="ERPConnect_RFCServer_Log_System_String_"></a> Log\(string\)

```csharp
public void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCServer_Start"></a> Start\(\)

Starts the server.

```csharp
public void Start()
```

#### Remarks

Please make sure to have all server functions defined, before starting the server.

### <a id="ERPConnect_RFCServer_Start_System_Boolean_"></a> Start\(bool\)

Starts the server.

```csharp
public void Start(bool blocking)
```

#### Parameters

`blocking` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Defines whether the server should run in an own thread (false) or not (true).

#### Remarks

Please make sure to have all server functions defined, before starting the server.

### <a id="ERPConnect_RFCServer_Stop"></a> Stop\(\)

Stop the running server

```csharp
public void Stop()
```

#### Remarks

Have a look at <xref href="ERPConnect.RFCServer.Start?text=ERPConnect.RFCServer.Start" data-throw-if-not-resolved="false"></xref> for a complete example.

### <a id="ERPConnect_RFCServer_Authorizing"></a> Authorizing

Authorizing is fired, when the RFC Server is authorizing an incoming function call. 
If this event has no subscribers, all calls are authorized. 
Otherwise AuthorizingEventArgs.IsAuthorized must be set to 'true' to authorize a call.

```csharp
public event RFCServer.OnAuthorizing Authorizing
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnAuthorizing](ERPConnect.RFCServer.OnAuthorizing.md)

### <a id="ERPConnect_RFCServer_IncomingCall"></a> IncomingCall

IncomingCall is fired, when the SAP system call the RFC server

```csharp
public event RFCServer.OnIncomingCall IncomingCall
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnIncomingCall](ERPConnect.RFCServer.OnIncomingCall.md)

### <a id="ERPConnect_RFCServer_IncomingIdoc"></a> IncomingIdoc

IncomingIdoc is fired, when the SAP system calls the RFC Server to send an idoc

```csharp
public event RFCServer.OnIncomingIdoc IncomingIdoc
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnIncomingIdoc](ERPConnect.RFCServer.OnIncomingIdoc.md)

### <a id="ERPConnect_RFCServer_InternalException"></a> InternalException

An error occured within the server object while the server is running

```csharp
public event RFCServer.OnInternalException InternalException
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnInternalException](ERPConnect.RFCServer.OnInternalException.md)

### <a id="ERPConnect_RFCServer_Logged"></a> Logged

```csharp
public event EventHandler<LoggedEventArgs> Logged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LoggedEventArgs](ERPConnect.LoggedEventArgs.md)\>

### <a id="ERPConnect_RFCServer_Started"></a> Started

Fires after the server has been started

```csharp
public event EventHandler<EventArgs> Started
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)\>

### <a id="ERPConnect_RFCServer_Stopped"></a> Stopped

Fires after the server has been stopped

```csharp
public event EventHandler<EventArgs> Stopped
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)\>

### <a id="ERPConnect_RFCServer_TRFCCheckTID"></a> TRFCCheckTID

TRFCCheckTID is fired, when the SAP system wants the client to check, if a call can be sent.

```csharp
public event RFCServer.OnTRFCCheckTID TRFCCheckTID
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnTRFCCheckTID](ERPConnect.RFCServer.OnTRFCCheckTID.md)

### <a id="ERPConnect_RFCServer_TRFCCommit"></a> TRFCCommit

TRFCCommit is fired, when the SAP system wants to have an Transaktion comitted

```csharp
public event RFCServer.OnTRFCCommit TRFCCommit
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnTRFCCommit](ERPConnect.RFCServer.OnTRFCCommit.md)

### <a id="ERPConnect_RFCServer_TRFCConfirm"></a> TRFCConfirm

TRFCConfirm is fired, when the SAP system a transaction to be rolled back due to an error.

```csharp
public event RFCServer.OnTRFCConfirm TRFCConfirm
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnTRFCConfirm](ERPConnect.RFCServer.OnTRFCConfirm.md)

### <a id="ERPConnect_RFCServer_TRFCRollback"></a> TRFCRollback

TRFCRollback is fired, when the SAP system a transaction to be rolled back due to an error.

```csharp
public event RFCServer.OnTRFCRollback TRFCRollback
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnTRFCRollback](ERPConnect.RFCServer.OnTRFCRollback.md)

### <a id="ERPConnect_RFCServer_UnknownIncomingFunction"></a> UnknownIncomingFunction

UnknownIncomingFunction is fired, when the SAP system calls a function module that is not contained in the RegisteredFunctions collection.

```csharp
public event RFCServer.OnUnknownIncomingFunction UnknownIncomingFunction
```

#### Event Type

 [RFCServer](ERPConnect.RFCServer.md).[OnUnknownIncomingFunction](ERPConnect.RFCServer.OnUnknownIncomingFunction.md)

