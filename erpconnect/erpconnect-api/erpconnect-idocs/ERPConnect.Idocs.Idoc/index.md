Namespace: [ERPConnect.Idocs](../)\
Assembly: ERPConnectStandard20.dll

Represents a single IDoc including its segments

```csharp
public class Idoc

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Idoc](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Idoc()

Initializes an empty Idoc object

```csharp
public Idoc()

```

### Idoc(string, string)

initializes an empty Idoc object

```csharp
public Idoc(string IdocType, string Extension)

```

#### Parameters

`IdocType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the idoc type

`Extension` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the extension. If no extension is requiered, set to ""

## Properties

### ARCKEY

Key for external message archive

```csharp
public string ARCKEY { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CIMTYP

Extension (defined by customer)

```csharp
public string CIMTYP { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CREDAT

Created on

```csharp
public string CREDAT { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CRETIM

Time Created

```csharp
public string CRETIM { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Connection

R3Connection object to which the Idoc will be sent

```csharp
public R3Connection Connection { get; set; }

```

#### Property Value

[R3Connection](../../erpconnect/ERPConnect.R3Connection/)

### DIRECT

Direction

```csharp
public string DIRECT { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### DOCNUM

IDoc number

```csharp
public string DOCNUM { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### DOCREL

SAP Release for IDoc

```csharp
public string DOCREL { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Description

Description

```csharp
public string Description { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### EXPRSS

Overriding in inbound processing

```csharp
public string EXPRSS { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### IDOCTYP

Name of basic type

```csharp
public string IDOCTYP { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LastTID

Transaction ID of last outbound call

```csharp
public string LastTID { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MANDT

Client

```csharp
public string MANDT { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MESCOD

Message code

```csharp
public string MESCOD { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MESFCT

Message function

```csharp
public string MESFCT { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MESTYP

Message type

```csharp
public string MESTYP { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### OUTMOD

Output mode

```csharp
public string OUTMOD { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### RCVLAD

Logical address of recipient

```csharp
public string RCVLAD { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### RCVPFC

Partner function of recipient

```csharp
public string RCVPFC { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### RCVPOR

Receiver port

```csharp
public string RCVPOR { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### RCVPRN

Partner number of recipient

```csharp
public string RCVPRN { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### RCVPRT

Partner Type of receiver

```csharp
public string RCVPRT { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### RCVSAD

Recipient address (SADR)

```csharp
public string RCVSAD { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### REFGRP

Message group (EDI Message Group)

```csharp
public string REFGRP { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### REFINT

Transmission file (EDI Interchange)

```csharp
public string REFINT { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### REFMES

Message (EDI Message)

```csharp
public string REFMES { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SERIAL

Serialization

```csharp
public string SERIAL { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SNDLAD

Logical address of sender

```csharp
public string SNDLAD { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SNDPFC

Partner Function of Sender

```csharp
public string SNDPFC { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SNDPOR

Sender port (SAP System, external subsystem)

```csharp
public string SNDPOR { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SNDPRN

Partner Number of Sender

```csharp
public string SNDPRN { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SNDPRT

Partner type of sender

```csharp
public string SNDPRT { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SNDSAD

Sender address (SADR)

```csharp
public string SNDSAD { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### STATUS

Status of IDoc

```csharp
public string STATUS { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### STD

EDI standard, flag

```csharp
public string STD { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### STDMES

EDI message type

```csharp
public string STDMES { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### STDVRS

EDI standard, version and release

```csharp
public string STDVRS { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Segments

Collection of all segment that are child relation to the current segment

```csharp
public IdocSegmentCollection Segments { get; set; }

```

#### Property Value

[IdocSegmentCollection](../ERPConnect.Idocs.IdocSegmentCollection/)

### SkipHLevel

DO NOT USE!!!! FOR INTERNAL USE ONLY!!!

```csharp
public bool SkipHLevel { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TABNAM

Name of table structure

```csharp
public string TABNAM { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### TEST

Test flag

```csharp
public string TEST { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### TemplateSegments

Gets a collection of available template segments retrieved or loaded from a schema by calling `ERPConnect.R3Connection.CreateEmptyIdoc(System.String%2cSystem.String)` or `ERPConnect.Idocs.Idoc.LoadIdocSchema(System.String)`.

```csharp
public Dictionary<string, IdocSegment> TemplateSegments { get; }

```

#### Property Value

[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)\<[string](https://learn.microsoft.com/dotnet/api/system.string), [IdocSegment](../ERPConnect.Idocs.IdocSegment/)>

## Methods

### CreateSegment(string)

Creates a new segment with fields to be filled with data.

```csharp
public IdocSegment CreateSegment(string SegmentName)

```

#### Parameters

`SegmentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the segment. Please refer to transaction WE60 to find out which segments can be used for the idoc type.

#### Returns

[IdocSegment](../ERPConnect.Idocs.IdocSegment/)

A newly created IdocSegment object

### GetCurrentStatus()

Returns an IdocStatus object which represents the current status of the IDoc

```csharp
public IdocStatus GetCurrentStatus()

```

#### Returns

[IdocStatus](../ERPConnect.Idocs.IdocStatus/)

IdocStatus object

### GetIdocSchemaString()

Gets the IDoc schema as string

```csharp
public string GetIdocSchemaString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

String with IDoc schema data

### LoadIdocSchema(string)

Loads a schema file and stores the segments internally for further use (e.g. for the CreateSegment method)

```csharp
public void LoadIdocSchema(string SchemaFileName)

```

#### Parameters

`SchemaFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filename

#### Remarks

Please use the IDocSchemaGenerator tool that is included in the ERPConnect installation package

### LoadIdocSchema(StreamReader)

Loads a schema file and stores the segments internally for further use (e.g. for the CreateSegment method)

```csharp
public void LoadIdocSchema(StreamReader IdocSchemaStreamReader)

```

#### Parameters

`IdocSchemaStreamReader` [StreamReader](https://learn.microsoft.com/dotnet/api/system.io.streamreader)

StreamReader object that points to an resource file

#### Remarks

Please use the IDocSchemaGenerator tool that is included in the ERPConnect installation package

### LoadIdocSchema(TextReader)

Loads a schema and stores the segments internally for further use (e.g. for the CreateSegment method)

```csharp
public void LoadIdocSchema(TextReader TextReader)

```

#### Parameters

`TextReader` [TextReader](https://learn.microsoft.com/dotnet/api/system.io.textreader)

TextReader

#### Remarks

Please use the IDocSchemaGenerator tool that is included in the ERPConnect installation package

### LoadPlainData(StreamReader)

Loads IDoc from a single plain file. You must make sure to have a shema loaded before calling this function

```csharp
public virtual void LoadPlainData(StreamReader strm)

```

#### Parameters

`strm` [StreamReader](https://learn.microsoft.com/dotnet/api/system.io.streamreader)

A StreamReader object

### LoadPlainData(string)

Loads IDoc from a single plain file. You must make sure to have a shema loaded before calling this function

```csharp
public virtual void LoadPlainData(string FileName)

```

#### Parameters

`FileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filename

### LoadPlainDataString(string)

```csharp
public virtual void LoadPlainDataString(string Content)

```

#### Parameters

`Content` [string](https://learn.microsoft.com/dotnet/api/system.string)

### LoadXMLData(string)

Loads a XML IDoc data file.

```csharp
public virtual void LoadXMLData(string IdocFile)

```

#### Parameters

`IdocFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filename

#### Remarks

Please make sure to use LoadIdocSchema or RFCConnection.CreateEmptyIdoc before loading the IDoc data. It is not possible to load data without having defined the segments:

```
R3Connection con = new R3Connection("hamlet",90,"RFCTestUser","pass01","DE","800");
con.Open(false);

Idoc i = new Idoc();
i.Connection = con;

i.LoadIdocSchema(@"c:\ORDERS01.xsd");
i.LoadData(@"c:\Order.xml");

i.Send();

con.Close();
```

### LoadXMLData(TextReader)

Loads a XML IDoc data file.

```csharp
public virtual void LoadXMLData(TextReader IdocFileTextReader)

```

#### Parameters

`IdocFileTextReader` [TextReader](https://learn.microsoft.com/dotnet/api/system.io.textreader)

XML TextReader

### SaveIdocSchema(string)

Saves the schema file of this IDoc type and enhancement to a file

```csharp
public void SaveIdocSchema(string SchemaFileName)

```

#### Parameters

`SchemaFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SaveIdocSchema(XmlWriter)

Saves the schema file of this IDoc type and enhancement to a XmlWriter object

```csharp
public void SaveIdocSchema(XmlWriter XmlWriter)

```

#### Parameters

`XmlWriter` XmlWriter

### SavePlainData(StreamWriter)

Writes the whole IDoc to a single file

```csharp
public virtual void SavePlainData(StreamWriter writer)

```

#### Parameters

`writer` [StreamWriter](https://learn.microsoft.com/dotnet/api/system.io.streamwriter)

A StreamWriter object

### SavePlainData()

Writes the whole IDoc to a single file

```csharp
public virtual string SavePlainData()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SavePlainData(string)

Writes the whole IDoc to a single file

```csharp
public virtual void SavePlainData(string FileName)

```

#### Parameters

`FileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filename

### SavePlainData(string, Encoding)

Writes the whole IDoc to a single file

```csharp
public void SavePlainData(string FileName, Encoding Encoding)

```

#### Parameters

`FileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filename

`Encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)

Encoding

### SaveXMLData(TextWriter)

Saves the IDoc to an XML file (including all segments)

```csharp
public virtual void SaveXMLData(TextWriter IdocFileTextWriter)

```

#### Parameters

`IdocFileTextWriter` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

TextWriter

### SaveXMLData(string)

Saves the IDoc to an XML file (including all segments)

```csharp
public virtual void SaveXMLData(string IdocFileName)

```

#### Parameters

`IdocFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filename and path

### SaveXMLData(string, string)

Saves the IDoc to an XML file (including all segments)

```csharp
public virtual void SaveXMLData(string IdocFileName, string XMLEncoding)

```

#### Parameters

`IdocFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filename and path

`XMLEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

XML Encoding e.g. ISO-8859-1

### Send(string, string)

Sends the Idoc to the SAP system within a qRFC context of the given TID and inbound queue

```csharp
public virtual void Send(string tid, string queue)

```

#### Parameters

`tid` [string](https://learn.microsoft.com/dotnet/api/system.string)

Transaction ID

`queue` [string](https://learn.microsoft.com/dotnet/api/system.string)

Inbound queue

### Send(string)

Sends the Idoc to the SAP system within a tRFC context of the given TID and inbound queue

```csharp
public virtual void Send(string tid)

```

#### Parameters

`tid` [string](https://learn.microsoft.com/dotnet/api/system.string)

Transaction ID

### Send()

Sends the Idoc to the SAP system

```csharp
public virtual void Send()

```

### SendAndWait()

Sends the IDocs and waits until the IDocs is processed. You can call GetCurrentStatus after SendAndWait()

```csharp
public virtual bool SendAndWait()

```

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

IDoc is processed successfully true/false

### ToString()

Returns the idoc as string for debugging purpose

```csharp
public override string ToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

Idoc as string
