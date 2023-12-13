
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnect35.dll  

A cube's variable

```csharp
public class BWVariable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BWVariable](ERPConnect.BW.BWVariable.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_BW_BWVariable__ctor"></a> BWVariable\(\)

Constructs a new BWVariable object

```csharp
public BWVariable()
```

### <a id="ERPConnect_BW_BWVariable__ctor_ERPConnect_BW_BWCube_System_String_System_String_System_String_System_Boolean_ERPConnect_BW_BWVariableSelectionType_System_String_ERPConnect_BW_BWVariableType_"></a> BWVariable\(BWCube, string, string, string, bool, BWVariableSelectionType, string, BWVariableType\)

Constructs a new BWVariable object

```csharp
public BWVariable(BWCube cube, string name, string caption, string dataType, bool isRequired, BWVariableSelectionType selectionType, string referenceDimension, BWVariableType type)
```

#### Parameters

`cube` [BWCube](ERPConnect.BW.BWCube.md)

Reference to the cube the variable is belonging to

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the variable

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

Caption or description of the variable

`dataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

DataType of the variable

`isRequired` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Defines if this variable is obligatory or not

`selectionType` [BWVariableSelectionType](ERPConnect.BW.BWVariableSelectionType.md)

Defines the type of the variable (complex, single or interval)

`referenceDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

Defines which dimension this variable refers to

`type` [BWVariableType](ERPConnect.BW.BWVariableType.md)

Defines if the variable is numeric, member or hierarchy

## Properties

### <a id="ERPConnect_BW_BWVariable_Caption"></a> Caption

Caption or description of the variable

```csharp
public string Caption { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_BWVariable_ComplexRanges"></a> ComplexRanges

Represents a collection of ranges when the selection type is complex

```csharp
public RangeCollection ComplexRanges { get; set; }
```

#### Property Value

 [RangeCollection](../erpconnect-queries/ERPConnect.Queries.RangeCollection.md)

### <a id="ERPConnect_BW_BWVariable_Cube"></a> Cube

Reference to the cube the variable is belonging to

```csharp
public BWCube Cube { get; set; }
```

#### Property Value

 [BWCube](ERPConnect.BW.BWCube.md)

### <a id="ERPConnect_BW_BWVariable_DataType"></a> DataType

DataType of the variable

```csharp
public string DataType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_BWVariable_Name"></a> Name

Name of the variable

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_BWVariable_ReferenceDimensionName"></a> ReferenceDimensionName

Defines which dimension this variable refers to

```csharp
public string ReferenceDimensionName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_BWVariable_Required"></a> Required

Defines if this variable is obligatory or not

```csharp
public bool Required { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_BW_BWVariable_SelectionType"></a> SelectionType

Defines the type of the variable (complex, single or interval)

```csharp
public BWVariableSelectionType SelectionType { get; set; }
```

#### Property Value

 [BWVariableSelectionType](ERPConnect.BW.BWVariableSelectionType.md)

### <a id="ERPConnect_BW_BWVariable_SingleRange"></a> SingleRange

Represents a single range when the selection type is interval or single

```csharp
public Range SingleRange { get; set; }
```

#### Property Value

 [Range](../erpconnect-queries/ERPConnect.Queries.Range.md)

### <a id="ERPConnect_BW_BWVariable_Type"></a> Type

Defines if the variable is numeric, member or hierarchy

```csharp
public BWVariableType Type { get; set; }
```

#### Property Value

 [BWVariableType](ERPConnect.BW.BWVariableType.md)

## Methods

### <a id="ERPConnect_BW_BWVariable_GetMembers_System_Int32_System_Int32_"></a> GetMembers\(int, int\)

Returns all members of this variable (can be used for designing a value help)

```csharp
public MembersDataTable GetMembers(int StartRow, int EndRow)
```

#### Parameters

`StartRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The row number the selection starts with

`EndRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The row number the selection ends with

#### Returns

 [MembersDataTable](ERPConnect.BW.MembersDataTable.md)

A DataTable that contains the members

### <a id="ERPConnect_BW_BWVariable_ToString"></a> ToString\(\)

Converts this object to string

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The string

