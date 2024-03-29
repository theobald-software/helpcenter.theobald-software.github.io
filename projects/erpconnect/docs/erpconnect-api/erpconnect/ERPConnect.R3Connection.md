
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

R3Connection represents a connection to a SAP R/3 System

```csharp
public class R3Connection : IR3Connection, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[R3Connection](ERPConnect.R3Connection.md)

#### Implements

[IR3Connection](ERPConnect.IR3Connection.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_R3Connection__ctor"></a> R3Connection\(\)

Initializes a new instance of the R3Connection class

```csharp
public R3Connection()
```

### <a id="ERPConnect_R3Connection__ctor_System_String_System_Int32_System_String_System_String_System_String_System_String_"></a> R3Connection\(string, int, string, string, string, string\)

Initializes a new instance of the R3Connection class and sets the logon data for a single application server

```csharp
public R3Connection(string host, int systemNumber, string userName, string password, string language, string client)
```

#### Parameters

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

Host name of the application server

`systemNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

System number of the application server

`userName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Logon name

`password` [string](https://learn.microsoft.com/dotnet/api/system.string)

Logon password

`language` [string](https://learn.microsoft.com/dotnet/api/system.string)

Logon language

`client` [string](https://learn.microsoft.com/dotnet/api/system.string)

Logon client

### <a id="ERPConnect_R3Connection__ctor_System_String_System_Int32_ERPConnect_SNCSettings_System_String_System_String_"></a> R3Connection\(string, int, SNCSettings, string, string\)

Initializes a new instance of the R3Connection class and sets the logon data for a single application server
with SNC authentication

```csharp
public R3Connection(string host, int systemNumber, SNCSettings sncSettings, string language, string client)
```

#### Parameters

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

Host name of the application server

`systemNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

System number of the application server

`sncSettings` [SNCSettings](ERPConnect.SNCSettings.md)

Settings for SNC

`language` [string](https://learn.microsoft.com/dotnet/api/system.string)

Logon language

`client` [string](https://learn.microsoft.com/dotnet/api/system.string)

Logon client

## Properties

### <a id="ERPConnect_R3Connection_AliasUser"></a> AliasUser

```csharp
public string AliasUser { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_CacheMetadata"></a> CacheMetadata

Get / sets whether the meta data of functions, queries etc. is stored and recycled when a new Create...
statement is called.

```csharp
public bool CacheMetadata { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_R3Connection_Client"></a> Client

Gets / sets the logon client

```csharp
public string Client { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_Codepage"></a> Codepage

```csharp
public string Codepage { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_CpicConversationId"></a> CpicConversationId

Gets the Id of the underlying CPI-C connection

```csharp
public string CpicConversationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_DynamicABAPCustomFunction"></a> DynamicABAPCustomFunction

Sets the name of the function module which is used by the ABAPCode class.

```csharp
public string DynamicABAPCustomFunction { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_Host"></a> Host

Gets / sets the host name

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Only required when using logon to a single application server

### <a id="ERPConnect_R3Connection_InitialEncoding"></a> InitialEncoding

Gets or sets initial encoding (required for some special characters in passwords).

```csharp
public SAPEncodingInfo InitialEncoding { get; set; }
```

#### Property Value

 [SAPEncodingInfo](ERPConnect.SAPEncodingInfo.md)

#### Remarks

`ERPConnect.ClientProtocol.NWRFC` only.

### <a id="ERPConnect_R3Connection_IsOpen"></a> IsOpen

Gets a value indicating whether this connection has been successfully established and has been valid when the
last message has been received/sent. To actively check the current state, please use `ERPConnect.R3Connection.Ping`

```csharp
public bool IsOpen { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_R3Connection_IsUnicode"></a> IsUnicode

Defines whether the partner system is a unicode system

```csharp
public bool IsUnicode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_R3Connection_KernelRelease"></a> KernelRelease

The kernel release number of the SAP system

```csharp
public string KernelRelease { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

700

### <a id="ERPConnect_R3Connection_Language"></a> Language

Gets / sets the logon language

```csharp
public string Language { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

DE od EN

### <a id="ERPConnect_R3Connection_LogDir"></a> LogDir

Gets or sets the path to the directory in which trace files and XML log files are stored

```csharp
public string LogDir { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

To enable logging, set the value to an existing directory to which the process has write access. 
To disable logging set the value to string.Empty.
Property must be set before the connection is opened.

### <a id="ERPConnect_R3Connection_Logging"></a> Logging

Gets or sets a value which indicates whether detailed RFC tracing is enabled or not

```csharp
public bool Logging { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Must be set before the connection is opened. `ERPConnect.IR3Connection.LogDir` must also be set.

### <a id="ERPConnect_R3Connection_LogonGroup"></a> LogonGroup

Gets / sets the logon group

```csharp
public string LogonGroup { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Only required when using logon by load balancing

### <a id="ERPConnect_R3Connection_LogonTicket"></a> LogonTicket

```csharp
public string LogonTicket { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_MessageServer"></a> MessageServer

Gets / sets the SAP message server

```csharp
public string MessageServer { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Required for logon via load balancing

### <a id="ERPConnect_R3Connection_MessageServerService"></a> MessageServerService

Gets or sets the non-standard service the message server listens on.
Corresponds to NetWeaver connection parameter "MSSERV".

```csharp
public string MessageServerService { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_PartnerRelease"></a> PartnerRelease

The release number of the SAP-BASIS of the system

```csharp
public string PartnerRelease { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

700

### <a id="ERPConnect_R3Connection_Password"></a> Password

Gets/ sets the user's password for authentication

```csharp
public string Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_Protocol"></a> Protocol

Get / sets the `ERPConnect.ClientProtocol` for the communication between client and SAP server

```csharp
public ClientProtocol Protocol { get; set; }
```

#### Property Value

 [ClientProtocol](ERPConnect.ClientProtocol.md)

### <a id="ERPConnect_R3Connection_ReadTableFunctionName"></a> ReadTableFunctionName

Gets or sets the name of the function module that is used by `ERPConnect.Utils.ReadTable`.
            This will be overriden by `ERPConnect.Utils.ReadTable.SetCustomFunctionName(System.String)`.

```csharp
public string ReadTableFunctionName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_SAPEncodingInfo"></a> SAPEncodingInfo

Gets information about data encoding

```csharp
public SAPEncodingInfo SAPEncodingInfo { get; }
```

#### Property Value

 [SAPEncodingInfo](ERPConnect.SAPEncodingInfo.md)

### <a id="ERPConnect_R3Connection_SAProuterString"></a> SAProuterString

Gets or sets the parameters to use when the connection should be made
through a SAProuter.
Corresponds to NetWeaver connection parameter "SAPROUTER".

```csharp
public string SAProuterString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_SID"></a> SID

Gets / sets SAP System ID

```csharp
public string SID { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Only required when using logon by load balancing

### <a id="ERPConnect_R3Connection_SNCSettings"></a> SNCSettings

Gets or sets the settings for SNC

```csharp
public SNCSettings SNCSettings { get; set; }
```

#### Property Value

 [SNCSettings](ERPConnect.SNCSettings.md)

#### See Also

[IR3Connection](ERPConnect.IR3Connection.md).[SNCSettings](ERPConnect.IR3Connection.md\#ERPConnect\_IR3Connection\_SNCSettings)

### <a id="ERPConnect_R3Connection_SkipGetSystemInfo"></a> SkipGetSystemInfo

Gets or sets a value which indicates whether details about the SAP system are obtained through an RFC function
call, if necessary.

```csharp
public bool SkipGetSystemInfo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Only set to true, if there's no other way!

### <a id="ERPConnect_R3Connection_SystemNumber"></a> SystemNumber

Gets / sets the system number

```csharp
public int SystemNumber { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

Only required when using logon to a single application server

### <a id="ERPConnect_R3Connection_TlsSettings"></a> TlsSettings

Gets or sets TLS settings to use when connecting using WebSockets.
Corresponds to NetWeaver connection parameters related to TLS.
Only used when `ERPConnect.R3Connection.UsesWebSocket` is set to true and
using `ERPConnect.ClientProtocol.NWRFC`.

```csharp
public TlsSettings TlsSettings { get; set; }
```

#### Property Value

 [TlsSettings](ERPConnect.TlsSettings.md)

#### Remarks

SAP systems require you to use TLS (`ERPConnect.R3Connection.TlsSettings`) when
connecting with RFC over WebSocket.

### <a id="ERPConnect_R3Connection_TraceLevel"></a> TraceLevel

Verbosity of NetWeaver RFC library trace messages.

```csharp
public TraceLevel TraceLevel { get; set; }
```

#### Property Value

 [TraceLevel](ERPConnect.TraceLevel.md)

### <a id="ERPConnect_R3Connection_UseDeltaManager"></a> UseDeltaManager

Gets or sets whether the delta manager is to be used for (de-)serializing
TABLES parameters. If unset (null) the default NetWeaver library value is used.
Corresponds to NetWeaver connection parameter "DELTA".

```csharp
public bool? UseDeltaManager { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="ERPConnect_R3Connection_UseGui"></a> UseGui

Defines whether the SAP GUI should be used

```csharp
public bool UseGui { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_R3Connection_UserName"></a> UserName

Gets / sets the user name for authentication

```csharp
public string UserName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_UsesLoadBalancing"></a> UsesLoadBalancing

Gets or sets a value indicating whether load balancing is used or not

```csharp
public bool UsesLoadBalancing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_R3Connection_UsesWebSocket"></a> UsesWebSocket

Gets or sets whether to use RFC over WebSocket. When set to true
the following properties have to be specified:
<ul><li>`ERPConnect.R3Connection.WebSocketHost`</li><li>`ERPConnect.R3Connection.WebSocketPort`</li><li>`ERPConnect.R3Connection.TlsSettings`</li></ul>

```csharp
public bool UsesWebSocket { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

SAP systems require you to use TLS (`ERPConnect.R3Connection.TlsSettings`) when
connecting with RFC over WebSocket.

### <a id="ERPConnect_R3Connection_WebSocketHost"></a> WebSocketHost

Gets or sets the hostname to use when connecting using WebSockets.
Corresponds to NetWeaver connection parameter "WSHOST".
Only used when `ERPConnect.R3Connection.UsesWebSocket` is set to true and
using `ERPConnect.ClientProtocol.NWRFC`.

```csharp
public string WebSocketHost { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

SAP systems require you to use TLS (`ERPConnect.R3Connection.TlsSettings`) when
connecting with RFC over WebSocket.

### <a id="ERPConnect_R3Connection_WebSocketPort"></a> WebSocketPort

Gets or sets the WebSocket port to use when connecting using WebSockets.
Corresponds to NetWeaver connection parameter "WSPORT".
Only used when `ERPConnect.R3Connection.UsesWebSocket` is set to true and
using `ERPConnect.ClientProtocol.NWRFC`.

```csharp
public ushort WebSocketPort { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ERPConnect_R3Connection_X509Certificate"></a> X509Certificate

Gets or sets an X.509 client certificate

```csharp
public X509Certificate2 X509Certificate { get; set; }
```

#### Property Value

 [X509Certificate2](https://learn.microsoft.com/dotnet/api/system.security.cryptography.x509certificates.x509certificate2)

## Methods

### <a id="ERPConnect_R3Connection_AppendToConnectionString_System_Text_StringBuilder_System_String_System_Object_"></a> AppendToConnectionString\(StringBuilder, string, object\)

Appends a key/value-pair to a connection string.

```csharp
public static void AppendToConnectionString(StringBuilder connectionStringBuilder, string parameterName, object parameterValue)
```

#### Parameters

`connectionStringBuilder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

`parameterName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`parameterValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Remarks

Usage of connection strings is discouraged, connection properties are preferred.

### <a id="ERPConnect_R3Connection_Clone"></a> Clone\(\)

Clones the connection object, but doesn't open it!!!! Please use Open() to open it

```csharp
public R3Connection Clone()
```

#### Returns

 [R3Connection](ERPConnect.R3Connection.md)

The cloned R3Connection object

### <a id="ERPConnect_R3Connection_Close"></a> Close\(\)

Closes the client connection

```csharp
public void Close()
```

### <a id="ERPConnect_R3Connection_ConfirmTID_System_String_"></a> ConfirmTID\(string\)

Confirms a Transaction ID

```csharp
public void ConfirmTID(string tid)
```

#### Parameters

`tid` [string](https://learn.microsoft.com/dotnet/api/system.string)

Transaction ID

### <a id="ERPConnect_R3Connection_CreateBWCube_System_String_"></a> CreateBWCube\(string\)

Creates a new BWCube object. Please refer to the manual for a sample

```csharp
public BWCube CreateBWCube(string cubeName)
```

#### Parameters

`cubeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of BW cube or BW query

#### Returns

 [BWCube](../erpconnect-bw/ERPConnect.BW.BWCube.md)

The created BWCube object

### <a id="ERPConnect_R3Connection_CreateBapi_System_String_System_String_"></a> CreateBapi\(string, string\)

Creates a new BusinessObjectMethod object.

```csharp
public BusinessObjectMethod CreateBapi(string businessObjectName, string methodName)
```

#### Parameters

`businessObjectName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Business Object. Case-sensitive

`methodName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of Business Object's method. Case-sensitive

#### Returns

 [BusinessObjectMethod](ERPConnect.BusinessObjectMethod.md)

A BusinessObjectMethod object

#### Remarks

Please go to folder BAPIGetQty in your Examples folder for example source code.

### <a id="ERPConnect_R3Connection_CreateEmptyIdoc_System_String_System_String_"></a> CreateEmptyIdoc\(string, string\)

Creates an Idoc object. The segments are empty and have to be filled. Therefore use Idoc.CreateSegment

```csharp
public Idoc CreateEmptyIdoc(string idocType, string enhancement)
```

#### Parameters

`idocType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Idoc type (e.g. MATMAS01)

`enhancement` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Idoc enhancement (may be empty if no enhancement is needed)

#### Returns

 [Idoc](../erpconnect-idocs/ERPConnect.Idocs.Idoc.md)

An empty Idoc object

### <a id="ERPConnect_R3Connection_CreateFunction_System_String_"></a> CreateFunction\(string\)

Creates a function by the name of the SAP function module

```csharp
public RFCFunction CreateFunction(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the function module

#### Returns

 [RFCFunction](ERPConnect.RFCFunction.md)

A RFCFunction object

#### Examples

[C#]
<pre><code class="lang-csharp">static void Main(string[] args)
{
    R3Connection con = new R3Connection("hamlet",11,"theobald","pw","DE","800");
    con.Open(false);

    // Create a function object
    RFCFunction func = con.CreateFunction("RFC_CUSTOMER_GET");

    Console.WriteLine("Please enter customer number ...");
    Console.WriteLine("(and do not forget the leading zeros ...");

    // fill the export parameter
    StringBuilder CustomerNo =  new StringBuilder(Console.ReadLine());
    func.Exports["KUNNR"].ParamValue = CustomerNo.ToString();

    try 
    {
	func.Execute();
    }
    catch (ERPException e)
    {
        Console.WriteLine(e.Message);
        Console.ReadLine();
        return;
    }

    // Output the result of the function module
    Console.WriteLine("Name of customer:");
    Console.WriteLine(func.Tables["CUSTOMER_T"].Rows[0,"NAME1"]);
    Console.ReadLine();
}</code></pre>

[VB]
<pre><code class="lang-csharp">Sub Main()
    Dim con As New R3Connection("hamlet", 11, "theobald", "pw", "DE", "800")
    con.Open(False)

    ' Create a function object
    Dim func = con.CreateFunction("RFC_CUSTOMER_GET")

    Console.WriteLine("Please enter customer number ...")
    Console.WriteLine("(and do not forget the leading zeros ...")

    ' fill the export parameter
    Dim CustomerNo As New StringBuilder(Console.ReadLine())
    func.Exports("KUNNR").ParamValue = CustomerNo.ToString()

    Try
        func.Execute()
    Catch e As ERPException
        Console.WriteLine(e.Message)
        Console.ReadLine()
        Return
    End Try

    ' Output the result of the function module
    Console.WriteLine("Name of customer:")
    Console.WriteLine(func.Tables("CUSTOMER_T").Rows(0, "NAME1"))
    Console.ReadLine()
End Sub</code></pre>

#### Remarks

The following example demonstrates, how to logon, to create a function object and to execute the function

### <a id="ERPConnect_R3Connection_CreateIdoc_System_String_System_String_"></a> CreateIdoc\(string, string\)

Creates a fully initialized Idoc object ready to send ...

```csharp
public Idoc CreateIdoc(string idocType, string enhancement)
```

#### Parameters

`idocType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Idoc type (e.g. MATMAS01)

`enhancement` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Idoc enhancement (may be empty is no enhancement is needed)

#### Returns

 [Idoc](../erpconnect-idocs/ERPConnect.Idocs.Idoc.md)

A new Idoc object ready for use

### <a id="ERPConnect_R3Connection_CreateQuery_ERPConnect_Queries_WorkSpace_System_String_System_String_"></a> CreateQuery\(WorkSpace, string, string\)

Creates a new Query object

```csharp
public Query CreateQuery(WorkSpace workSpace, string userGroup, string queryName)
```

#### Parameters

`workSpace` [WorkSpace](../erpconnect-queries/ERPConnect.Queries.WorkSpace.md)

Workspace local / global

`userGroup` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of user group

`queryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of query

#### Returns

 [Query](../erpconnect-queries/ERPConnect.Queries.Query.md)

The new created Query object

### <a id="ERPConnect_R3Connection_CreateTID"></a> CreateTID\(\)

Creates a new transaction ID

```csharp
public string CreateTID()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

New transaction ID

### <a id="ERPConnect_R3Connection_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ERPConnect_R3Connection_Execute_ERPConnect_RFCFunction_"></a> Execute\(RFCFunction\)

Assigns this connection to the supplied `ERPConnect.RFCFunction` and then executes the function.

```csharp
public void Execute(RFCFunction function)
```

#### Parameters

`function` [RFCFunction](ERPConnect.RFCFunction.md)

### <a id="ERPConnect_R3Connection_FromConnectionString_System_String_"></a> FromConnectionString\(string\)

```csharp
public static R3Connection FromConnectionString(string connectionString)
```

#### Parameters

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [R3Connection](ERPConnect.R3Connection.md)

### <a id="ERPConnect_R3Connection_GetConnectionStringParameterValue_System_String_System_String_"></a> GetConnectionStringParameterValue\(string, string\)

Extracts the value of a parameter from a connection string

```csharp
public static string GetConnectionStringParameterValue(string connectionString, string parameterName)
```

#### Parameters

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The connection string from which the value should be extracted

`parameterName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the parameter of which the value should be extracted

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The value of the parameter

### <a id="ERPConnect_R3Connection_GetSSOTicket"></a> GetSSOTicket\(\)

```csharp
public string GetSSOTicket()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_R3Connection_IsSystemEditable"></a> IsSystemEditable\(\)

Checks, whether dynamic ABAP code can be executed.

```csharp
public bool IsSystemEditable()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_R3Connection_Log_System_String_"></a> Log\(string\)

This function can be used to access the internal log mechanism

```csharp
public void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

Message to be logged

### <a id="ERPConnect_R3Connection_Open"></a> Open\(\)

Opens a connection to an SAP R/3 system.

```csharp
public void Open()
```

#### Remarks

For opening via Load Balancing please set `ERPConnect.R3Connection.UsesLoadBalancing` = true

### <a id="ERPConnect_R3Connection_ParseConnectionString_System_String_"></a> ParseConnectionString\(string\)

Parses a connection string and sets all properties accordingly

```csharp
public void ParseConnectionString(string connectionString)
```

#### Parameters

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Does not change the `ERPConnect.R3Connection.ConnectionString` property

### <a id="ERPConnect_R3Connection_Ping"></a> Ping\(\)

Checks, whether the established connection is available

```csharp
public bool Ping()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the operation was successful. No exception is thrown

#### Remarks

Marks the connection as closed if the operation is not successful.

### <a id="ERPConnect_R3Connection_ToConnectionString"></a> ToConnectionString\(\)

Generates a connection string based on the values of properties (ignores the `ERPConnect.R3Connection.ConnectionString`
property).

```csharp
public string ToConnectionString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Usage of connection strings is discouraged, connection properties are preferred.

