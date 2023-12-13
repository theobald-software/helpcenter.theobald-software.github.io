
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

RFCFunction objects represent SAP function modules that can be executed in the SAP system.

```csharp
public class RFCFunction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCFunction](ERPConnect.RFCFunction.md)

#### Derived

[BusinessObjectMethod](ERPConnect.BusinessObjectMethod.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_RFCFunction__ctor_System_String_"></a> RFCFunction\(string\)

Initializes a new RFCFunction object

```csharp
public RFCFunction(string functionName)
```

#### Parameters

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the function module

### <a id="ERPConnect_RFCFunction__ctor_ERPConnect_IR3Connection_System_String_"></a> RFCFunction\(IR3Connection, string\)

Initializes a new RFCFunction object

```csharp
public RFCFunction(IR3Connection connection, string functionName)
```

#### Parameters

`connection` [IR3Connection](ERPConnect.IR3Connection.md)

A R3Connection object

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the function module

## Properties

### <a id="ERPConnect_RFCFunction_CallbackFunctions"></a> CallbackFunctions

Gets a list of associated callback functions that are used for handling incoming callbacks

```csharp
public IList<RFCCallbackFunction> CallbackFunctions { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[RFCCallbackFunction](ERPConnect.RFCCallbackFunction.md)\>

### <a id="ERPConnect_RFCFunction_Changings"></a> Changings

Returns a RFCParameter collection which represents the export parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Changings { get; }
```

#### Property Value

 [RFCParameterCollection](ERPConnect.RFCParameterCollection.md)

### <a id="ERPConnect_RFCFunction_Connection"></a> Connection

Gets / sets the R3Connection object which is assigned to the function

```csharp
public IR3Connection Connection { get; set; }
```

#### Property Value

 [IR3Connection](ERPConnect.IR3Connection.md)

### <a id="ERPConnect_RFCFunction_Exports"></a> Exports

Returns a RFCParameter collection which represents the export parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Exports { get; }
```

#### Property Value

 [RFCParameterCollection](ERPConnect.RFCParameterCollection.md)

### <a id="ERPConnect_RFCFunction_Imports"></a> Imports

Returns a RFCParameter collection which represents the import parameters to be exchanged with the SAP system

```csharp
public RFCParameterCollection Imports { get; }
```

#### Property Value

 [RFCParameterCollection](ERPConnect.RFCParameterCollection.md)

### <a id="ERPConnect_RFCFunction_Name"></a> Name

Gets / sets the name of the function module

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCFunction_Tables"></a> Tables

Returns a RFCTable collection which represents the tables to be exchanged with the SAP system

```csharp
public RFCTableCollection Tables { get; }
```

#### Property Value

 [RFCTableCollection](ERPConnect.RFCTableCollection.md)

## Methods

### <a id="ERPConnect_RFCFunction_Execute_System_String_System_String_"></a> Execute\(string, string\)

Executes a function in qRFC context. No import parameters are passed back to the calling program

```csharp
public void Execute(string tid, string queue)
```

#### Parameters

`tid` [string](https://learn.microsoft.com/dotnet/api/system.string)

Transaction ID

`queue` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the inbound queue

### <a id="ERPConnect_RFCFunction_Execute_System_String_"></a> Execute\(string\)

Executes a function in tRFC context. No import parameters are passed back to the calling program

```csharp
public void Execute(string tid)
```

#### Parameters

`tid` [string](https://learn.microsoft.com/dotnet/api/system.string)

Transaction ID

### <a id="ERPConnect_RFCFunction_Execute"></a> Execute\(\)

Executes the function module.
Consider using <xref href="ERPConnect.R3Connection.Execute(ERPConnect.RFCFunction)" data-throw-if-not-resolved="false"></xref> instead.

```csharp
public virtual void Execute()
```

### <a id="ERPConnect_RFCFunction_LoadFromXML_System_Xml_XmlReader_"></a> LoadFromXML\(XmlReader\)

Loads the RFCFunction object from XML

```csharp
public void LoadFromXML(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

XmlReader object for reading the XML

### <a id="ERPConnect_RFCFunction_LoadFromXML_System_String_"></a> LoadFromXML\(string\)

Loads the RFCFunction object from XML

```csharp
public void LoadFromXML(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to the source file

### <a id="ERPConnect_RFCFunction_LoadFromXML_System_IO_TextReader_"></a> LoadFromXML\(TextReader\)

Loads the RFCFunction object from XML

```csharp
public void LoadFromXML(TextReader reader)
```

#### Parameters

`reader` [TextReader](https://learn.microsoft.com/dotnet/api/system.io.textreader)

TextReader object for reading the XML

### <a id="ERPConnect_RFCFunction_LoadFromXMLString_System_String_"></a> LoadFromXMLString\(string\)

Loads the RFCFunction object from a string which contains XML

```csharp
public void LoadFromXMLString(string xml)
```

#### Parameters

`xml` [string](https://learn.microsoft.com/dotnet/api/system.string)

String which contains the XML

### <a id="ERPConnect_RFCFunction_RetrieveMetadata"></a> RetrieveMetadata\(\)

```csharp
protected void RetrieveMetadata()
```

### <a id="ERPConnect_RFCFunction_SaveToXML_System_Xml_XmlWriter_"></a> SaveToXML\(XmlWriter\)

Saves the RFCFunction object to XML

```csharp
public void SaveToXML(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

XmlWriter object for writing the XML

### <a id="ERPConnect_RFCFunction_SaveToXML_System_String_"></a> SaveToXML\(string\)

Saves the RFCFunction object to XML

```csharp
public void SaveToXML(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to the output file

### <a id="ERPConnect_RFCFunction_SaveToXML"></a> SaveToXML\(\)

Saves the RFCFunction object to XML

```csharp
public string SaveToXML()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

String which contains the XML

