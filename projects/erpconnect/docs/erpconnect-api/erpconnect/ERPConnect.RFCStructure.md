
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

RFCStructure object represent a real structure or a row in a RFC table

```csharp
public sealed class RFCStructure
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCStructure](ERPConnect.RFCStructure.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### <a id="ERPConnect_RFCStructure__ctor"></a> RFCStructure\(\)

Initializes a new RFCStructure object

```csharp
public RFCStructure()
```

### <a id="ERPConnect_RFCStructure__ctor_ERPConnect_RFCTableColumnCollection_"></a> RFCStructure\(RFCTableColumnCollection\)

Constructs a new RFCStructure. The structure is defined by the RFCTableColumnCollection

```csharp
public RFCStructure(RFCTableColumnCollection columns)
```

#### Parameters

`columns` [RFCTableColumnCollection](ERPConnect.RFCTableColumnCollection.md)

A RFCTableColumnCollections

## Properties

### <a id="ERPConnect_RFCStructure_Columns"></a> Columns

Returns a RFCTableColumn collection

```csharp
public RFCTableColumnCollection Columns { get; }
```

#### Property Value

 [RFCTableColumnCollection](ERPConnect.RFCTableColumnCollection.md)

### <a id="ERPConnect_RFCStructure_Length"></a> Length

returns the overall width of a structured Type

```csharp
public int Length { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCStructure_Item_System_Int32_"></a> this\[int\]

Returns the value of a structure element by providing the index of element

```csharp
public object this[int index] { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="ERPConnect_RFCStructure_Item_System_String_"></a> this\[string\]

Returns the value of a structure element by providing the name of element

```csharp
public object this[string columnName] { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### <a id="ERPConnect_RFCStructure_CopyValues_ERPConnect_RFCStructure_"></a> CopyValues\(RFCStructure\)

Sets all values that have a matching column name

```csharp
public void CopyValues(RFCStructure copyFrom)
```

#### Parameters

`copyFrom` [RFCStructure](ERPConnect.RFCStructure.md)

### <a id="ERPConnect_RFCStructure_IsStructure_System_String_"></a> IsStructure\(string\)

Returns whether a component of a structure is a structure

```csharp
public bool IsStructure(string componentName)
```

#### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the component

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCStructure_IsStructure_System_Int32_"></a> IsStructure\(int\)

Returns wether a component of a structure is a structure

```csharp
public bool IsStructure(int componentIndex)
```

#### Parameters

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the component

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCStructure_IsTable_System_String_"></a> IsTable\(string\)

Returns whether a component of a structure is a table

```csharp
public bool IsTable(string componentName)
```

#### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the component

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCStructure_IsTable_System_Int32_"></a> IsTable\(int\)

Returns whether a component of a structure is a table

```csharp
public bool IsTable(int componentIndex)
```

#### Parameters

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the component

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCStructure_SetValueInternal_System_Int32_System_Object_"></a> SetValueInternal\(int, object\)

Sets the parameter value for a structure element directly without
any checks or conversions

```csharp
public void SetValueInternal(int index, object value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="ERPConnect_RFCStructure_ToStructure_System_String_"></a> ToStructure\(string\)

Converts a component of the structure to RFCStructure

```csharp
public RFCStructure ToStructure(string componentName)
```

#### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the component

#### Returns

 [RFCStructure](ERPConnect.RFCStructure.md)

Component converted to RFCStructure

### <a id="ERPConnect_RFCStructure_ToStructure_System_Int32_"></a> ToStructure\(int\)

Converts a component of the structure to RFCStructure

```csharp
public RFCStructure ToStructure(int componentIndex)
```

#### Parameters

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the component

#### Returns

 [RFCStructure](ERPConnect.RFCStructure.md)

Component converted to RFCStructure

### <a id="ERPConnect_RFCStructure_ToTable_System_String_"></a> ToTable\(string\)

Converts a component of the structure to RFCTable

```csharp
public RFCTable ToTable(string componentName)
```

#### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the component

#### Returns

 [RFCTable](ERPConnect.RFCTable.md)

Component converted to RFCTable

### <a id="ERPConnect_RFCStructure_ToTable_System_Int32_"></a> ToTable\(int\)

Converts a component of the structure to RFCTable

```csharp
public RFCTable ToTable(int componentIndex)
```

#### Parameters

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the component

#### Returns

 [RFCTable](ERPConnect.RFCTable.md)

Component converted to RFCTable

