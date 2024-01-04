
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

RFCServerFunction represents a single function that can be assigned to an RFCServer object

```csharp
public sealed class RFCServerFunction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCServerFunction](ERPConnect.RFCServerFunction.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_RFCServerFunction__ctor_System_String_"></a> RFCServerFunction\(string\)

Initializes a new RFCServerFunction object. You can also use RFCServer.RegisteredFunctions.add()

```csharp
public RFCServerFunction(string functionName)
```

#### Parameters

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the function module to be called by SAP system

## Properties

### <a id="ERPConnect_RFCServerFunction_Exports"></a> Exports

A collection of RFCParameter objects that represents the export parameters that are exchanged during a call.

```csharp
public RFCParameterCollection Exports { get; }
```

#### Property Value

 [RFCParameterCollection](ERPConnect.RFCParameterCollection.md)

### <a id="ERPConnect_RFCServerFunction_FunctionName"></a> FunctionName

Name of the function module

```csharp
public string FunctionName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCServerFunction_Imports"></a> Imports

A collection of RFCParameter objects that represents the import parameters that are exchanged during a call.

```csharp
public RFCParameterCollection Imports { get; }
```

#### Property Value

 [RFCParameterCollection](ERPConnect.RFCParameterCollection.md)

### <a id="ERPConnect_RFCServerFunction_Tables"></a> Tables

A collection of RFCTable objects that represents the table parameters that are exchanged during a call.

```csharp
public RFCTableCollection Tables { get; }
```

#### Property Value

 [RFCTableCollection](ERPConnect.RFCTableCollection.md)

### <a id="ERPConnect_RFCServerFunction_UseTRFC"></a> UseTRFC

Defines whether transactional RFC is expected or not.

```csharp
public bool UseTRFC { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="ERPConnect_RFCServerFunction_LoadFromXML_System_String_"></a> LoadFromXML\(string\)

Loads the RFCServerFunction object from XML

```csharp
public void LoadFromXML(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to the source file

### <a id="ERPConnect_RFCServerFunction_LoadFromXML_System_IO_TextReader_"></a> LoadFromXML\(TextReader\)

Loads the RFCServerFunction object from XML

```csharp
public void LoadFromXML(TextReader reader)
```

#### Parameters

`reader` [TextReader](https://learn.microsoft.com/dotnet/api/system.io.textreader)

TextReader object for reading the XML

### <a id="ERPConnect_RFCServerFunction_LoadFromXMLString_System_String_"></a> LoadFromXMLString\(string\)

Loads the RFCServerFunction object from a string which contains XML

```csharp
public void LoadFromXMLString(string xml)
```

#### Parameters

`xml` [string](https://learn.microsoft.com/dotnet/api/system.string)

String which contains the XML

### <a id="ERPConnect_RFCServerFunction_SaveToXML_System_String_"></a> SaveToXML\(string\)

Saves the RFCServerFunction object to XML

```csharp
public void SaveToXML(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Path to the output file

### <a id="ERPConnect_RFCServerFunction_SaveToXML"></a> SaveToXML\(\)

Saves the RFCServerFunction object to XML

```csharp
public string SaveToXML()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

String which contains the XML

