Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

RFCFunction objects represent SAP function modules that can be executed in the SAP system.

```csharp
public class RFCFunction

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCFunction](./)

#### Derived

[BusinessObjectMethod](../ERPConnect.BusinessObjectMethod/)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCFunction(string)

Initializes a new RFCFunction object

```csharp
public RFCFunction(string functionName)

```

#### Parameters

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the function module

### RFCFunction(IR3Connection, string)

Initializes a new RFCFunction object

```csharp
public RFCFunction(IR3Connection connection, string functionName)

```

#### Parameters

`connection` [IR3Connection](../ERPConnect.IR3Connection/)

A R3Connection object

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the function module

## Properties

### CallbackFunctions

Gets a list of associated callback functions that are used for handling incoming callbacks

```csharp
public IList<RFCCallbackFunction> CallbackFunctions { get; }

```

#### Property Value

[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)\<[RFCCallbackFunction](../ERPConnect.RFCCallbackFunction/)>

### Changings

Returns a RFCParameter collection which represents the export parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Changings { get; }

```

#### Property Value

[RFCParameterCollection](../ERPConnect.RFCParameterCollection/)

### Connection

Gets / sets the R3Connection object which is assigned to the function

```csharp
public IR3Connection Connection { get; set; }

```

#### Property Value

[IR3Connection](../ERPConnect.IR3Connection/)

### Exports

Returns a RFCParameter collection which represents the export parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Exports { get; }

```

#### Property Value

[RFCParameterCollection](../ERPConnect.RFCParameterCollection/)

### Imports

Returns a RFCParameter collection which represents the import parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Imports { get; }

```

#### Property Value

[RFCParameterCollection](../ERPConnect.RFCParameterCollection/)

### Name

Gets / sets the name of the function module

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Tables

Returns a RFCTable collection which represents the tables to be exchanged with the SAP system

```csharp
public RFCTableCollection Tables { get; }

```

#### Property Value

[RFCTableCollection](../ERPConnect.RFCTableCollection/)

## Methods

### Execute(string, string)

Executes a function in qRFC context. No import parameters are passed back to the calling program

```csharp
public void Execute(string tid, string queue)

```

#### Parameters

`tid` [string](https://learn.microsoft.com/dotnet/api/system.string)

Transaction ID

`queue` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the inbound queue

### Execute(string)

Executes a function in tRFC context. No import parameters are passed back to the calling program

```csharp
public void Execute(string tid)

```

#### Parameters

`tid` [string](https://learn.microsoft.com/dotnet/api/system.string)

Transaction ID

### Execute()

Executes the function module. Consider using `ERPConnect.R3Connection.Execute(ERPConnect.RFCFunction)` instead.

```csharp
public virtual void Execute()

```

### LoadFromXML(XmlReader)

Loads the RFCFunction object from XML

```csharp
public void LoadFromXML(XmlReader reader)

```

#### Parameters

`reader` XmlReader

XmlReader object for reading the XML

### LoadFromXML(string)

Loads the RFCFunction object from XML

```csharp
public void LoadFromXML(string path)

```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to the source file

### LoadFromXML(TextReader)

Loads the RFCFunction object from XML

```csharp
public void LoadFromXML(TextReader reader)

```

#### Parameters

`reader` [TextReader](https://learn.microsoft.com/dotnet/api/system.io.textreader)

TextReader object for reading the XML

### LoadFromXMLString(string)

Loads the RFCFunction object from a string which contains XML

```csharp
public void LoadFromXMLString(string xml)

```

#### Parameters

`xml` [string](https://learn.microsoft.com/dotnet/api/system.string)

String which contains the XML

### RetrieveMetadata()

```csharp
protected void RetrieveMetadata()

```

### SaveToXML(XmlWriter)

Saves the RFCFunction object to XML

```csharp
public void SaveToXML(XmlWriter writer)

```

#### Parameters

`writer` XmlWriter

XmlWriter object for writing the XML

### SaveToXML(string)

Saves the RFCFunction object to XML

```csharp
public void SaveToXML(string path)

```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to the output file

### SaveToXML()

Saves the RFCFunction object to XML

```csharp
public string SaveToXML()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

String which contains the XML
