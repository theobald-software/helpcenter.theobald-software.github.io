
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

RFCTableColumn object represent an one column in a table or a structure to be exchanged with a function module

```csharp
public sealed class RFCTableColumn
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCTableColumn](ERPConnect.RFCTableColumn.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### <a id="ERPConnect_RFCTableColumn__ctor_System_String_"></a> RFCTableColumn\(string\)

return a RFCTableColumn object by a given name

```csharp
public RFCTableColumn(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name auf the column

### <a id="ERPConnect_RFCTableColumn__ctor_System_String_System_Int32_ERPConnect_RFCTYPE_"></a> RFCTableColumn\(string, int, RFCTYPE\)

constructs a RFCTableColumn object

```csharp
public RFCTableColumn(string name, int length, RFCTYPE type)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the column

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the column

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the column

### <a id="ERPConnect_RFCTableColumn__ctor_System_String_System_Int32_System_Int32_ERPConnect_RFCTYPE_"></a> RFCTableColumn\(string, int, int, RFCTYPE\)

constucts a RFCTableColumn object

```csharp
public RFCTableColumn(string name, int length, int decimals, RFCTYPE type)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the column

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the column (be careful with BCD types)

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type

## Properties

### <a id="ERPConnect_RFCTableColumn_Decimals"></a> Decimals

Number of decimal digits of the table column

```csharp
public int Decimals { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableColumn_IsNonStructureLineType"></a> IsNonStructureLineType

Gets a value which indicates if this column is a wrapper column
for a non-structure line type (single value or table).
This is needed because RFCTable objects can only have RFCStructure objects
as lines

```csharp
public bool IsNonStructureLineType { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCTableColumn_Length"></a> Length

Length of the column

```csharp
public int Length { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableColumn_Name"></a> Name

Name of the column

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCTableColumn_NestedColumns"></a> NestedColumns

Gets or sets the columns nested inside this column

```csharp
public RFCTableColumnCollection NestedColumns { get; set; }
```

#### Property Value

 [RFCTableColumnCollection](ERPConnect.RFCTableColumnCollection.md)

### <a id="ERPConnect_RFCTableColumn_Offset"></a> Offset

Offset of the column

```csharp
public int Offset { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableColumn_Tag"></a> Tag

A tag that can be used for everything

```csharp
public object Tag { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="ERPConnect_RFCTableColumn_Type"></a> Type

RFC type of the table column

```csharp
public RFCTYPE Type { get; set; }
```

#### Property Value

 [RFCTYPE](ERPConnect.RFCTYPE.md)

