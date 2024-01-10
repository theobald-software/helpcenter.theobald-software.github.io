
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

Represents a connection to a SAP R/3 System

```csharp
public interface IR3Connection : IDisposable
```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### <a id="ERPConnect_IR3Connection_Codepage"></a> Codepage

```csharp
string Codepage { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_IR3Connection_IsOpen"></a> IsOpen

Gets a value indicating whether this connection has been successfully established and has been valid when the
last message has been received/sent.

```csharp
bool IsOpen { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_IR3Connection_IsUnicode"></a> IsUnicode

Defines whether the partner system is a unicode system

```csharp
bool IsUnicode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_IR3Connection_Language"></a> Language

Gets the logon language

```csharp
string Language { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

DE od EN

### <a id="ERPConnect_IR3Connection_LogDir"></a> LogDir

Gets or sets the path to the directory in which trace files and XML log files are stored

```csharp
string LogDir { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

To enable logging, set the value to an existing directory to which the process has write access. 
To disable logging set the value to string.Empty.
Property must be set before the connection is opened.

### <a id="ERPConnect_IR3Connection_Logging"></a> Logging

Gets or sets a value which indicates whether detailed RFC tracing is enabled or not

```csharp
bool Logging { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Must be set before the connection is opened. `ERPConnect.IR3Connection.LogDir` must also be set.

### <a id="ERPConnect_IR3Connection_PartnerRelease"></a> PartnerRelease

The release number of the SAP-BASIS of the system

```csharp
string PartnerRelease { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

700

### <a id="ERPConnect_IR3Connection_Protocol"></a> Protocol

The `ERPConnect.ClientProtocol` used for the communication between client and SAP server

```csharp
ClientProtocol Protocol { get; }
```

#### Property Value

 [ClientProtocol](ERPConnect.ClientProtocol.md)

### <a id="ERPConnect_IR3Connection_ReadTableFunctionName"></a> ReadTableFunctionName

Gets or sets the name of the function module that is used by `ERPConnect.Utils.ReadTable`.
            This will be overriden by `ERPConnect.Utils.ReadTable.SetCustomFunctionName(System.String)`.

```csharp
string ReadTableFunctionName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_IR3Connection_SAPEncodingInfo"></a> SAPEncodingInfo

Gets information about data encoding

```csharp
SAPEncodingInfo SAPEncodingInfo { get; }
```

#### Property Value

 [SAPEncodingInfo](ERPConnect.SAPEncodingInfo.md)

### <a id="ERPConnect_IR3Connection_SNCSettings"></a> SNCSettings

Gets or sets the settings for SNC

```csharp
SNCSettings SNCSettings { get; set; }
```

#### Property Value

 [SNCSettings](ERPConnect.SNCSettings.md)

#### See Also

[IR3Connection](ERPConnect.IR3Connection.md).[SNCSettings](ERPConnect.IR3Connection.md\#ERPConnect\_IR3Connection\_SNCSettings)

## Methods

### <a id="ERPConnect_IR3Connection_Close"></a> Close\(\)

Closes the client connection

```csharp
void Close()
```

### <a id="ERPConnect_IR3Connection_CreateFunction_System_String_"></a> CreateFunction\(string\)

Creates a function by the name of the SAP function module

```csharp
RFCFunction CreateFunction(string name)
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

### <a id="ERPConnect_IR3Connection_Execute_ERPConnect_RFCFunction_"></a> Execute\(RFCFunction\)

Assigns this connection to the supplied `ERPConnect.RFCFunction` and then executes the function.

```csharp
void Execute(RFCFunction function)
```

#### Parameters

`function` [RFCFunction](ERPConnect.RFCFunction.md)

### <a id="ERPConnect_IR3Connection_Open"></a> Open\(\)

Opens a connection to an SAP R/3 system.

```csharp
void Open()
```

