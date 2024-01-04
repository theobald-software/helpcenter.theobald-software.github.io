
Namespace: [ERPConnect.Idocs](index.md)  
Assembly: ERPConnectStandard20.dll  

Represent a single field of a segment

```csharp
public class IdocSegmentField
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdocSegmentField](ERPConnect.Idocs.IdocSegmentField.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_Idocs_IdocSegmentField__ctor"></a> IdocSegmentField\(\)

Initiliazes an IdocSegmentFiled object

```csharp
public IdocSegmentField()
```

### <a id="ERPConnect_Idocs_IdocSegmentField__ctor_System_String_"></a> IdocSegmentField\(string\)

Initiliazes an IdocSegmentFiled object

```csharp
public IdocSegmentField(string Name)
```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of Idoc segment field

### <a id="ERPConnect_Idocs_IdocSegmentField__ctor_System_String_System_String_System_Int32_System_Int32_System_String_System_Object_"></a> IdocSegmentField\(string, string, int, int, string, object\)

initilizes an IdocSegmentFiled object

```csharp
public IdocSegmentField(string Name, string Description, int Length, int Offset, string DataType, object FieldValue)
```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the segment field

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

Description of the segment field

`Length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the segment field

`Offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Offset in data buffer of the segment field

`DataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Data type of the segment field

`FieldValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

The value

## Properties

### <a id="ERPConnect_Idocs_IdocSegmentField_DataType"></a> DataType

Data type (e.g. CHAR, NUMC ...)

```csharp
public string DataType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocSegmentField_Description"></a> Description

Description as defined in the DDIC

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocSegmentField_ExternalLength"></a> ExternalLength

Output Length

```csharp
public int ExternalLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Idocs_IdocSegmentField_FieldName"></a> FieldName

Field Name

```csharp
public string FieldName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocSegmentField_FieldValue"></a> FieldValue

Object that contains the data of the field (in most cases this is a string)

```csharp
public object FieldValue { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="ERPConnect_Idocs_IdocSegmentField_OffsetInBuffer"></a> OffsetInBuffer

Index of first byte

```csharp
public int OffsetInBuffer { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ERPConnect_Idocs_IdocSegmentField_Clone"></a> Clone\(\)

Creates a copy of the current object

```csharp
public IdocSegmentField Clone()
```

#### Returns

 [IdocSegmentField](ERPConnect.Idocs.IdocSegmentField.md)

The cloned IdocSegemntField object

