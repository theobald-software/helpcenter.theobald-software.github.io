
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

Represents a collection of RFCTableColumn objects for a RFCTable or a RFCStructure.

```csharp
public sealed class RFCTableColumnCollection : IList<RFCTableColumn>, ICollection<RFCTableColumn>, IEnumerable<RFCTableColumn>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCTableColumnCollection](ERPConnect.RFCTableColumnCollection.md)

#### Implements

[IList<RFCTableColumn\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<RFCTableColumn\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<RFCTableColumn\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### <a id="ERPConnect_RFCTableColumnCollection__ctor"></a> RFCTableColumnCollection\(\)

```csharp
public RFCTableColumnCollection()
```

## Properties

### <a id="ERPConnect_RFCTableColumnCollection_ABAPStructureName"></a> ABAPStructureName

The name of the ABAP structure

```csharp
public string ABAPStructureName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCTableColumnCollection_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableColumnCollection_Includes"></a> Includes

```csharp
public IList<IncludeStructure> Includes { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IncludeStructure](ERPConnect.IncludeStructure.md)\>

### <a id="ERPConnect_RFCTableColumnCollection_RowLength"></a> RowLength

Gets or sets the number bytes required for a table row / structure
based on these columns

```csharp
public int RowLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableColumnCollection_Item_System_Int32_"></a> this\[int\]

returns a single RFCTableColumn object from the collection

```csharp
public RFCTableColumn this[int index] { get; set; }
```

#### Property Value

 [RFCTableColumn](ERPConnect.RFCTableColumn.md)

### <a id="ERPConnect_RFCTableColumnCollection_Item_System_String_"></a> this\[string\]

returns a single RFCTableColumn object from the collection

```csharp
public RFCTableColumn this[string columnName] { get; set; }
```

#### Property Value

 [RFCTableColumn](ERPConnect.RFCTableColumn.md)

## Methods

### <a id="ERPConnect_RFCTableColumnCollection_Add_ERPConnect_RFCTableColumn_"></a> Add\(RFCTableColumn\)

Adds a new RFCTableColumn object to the collection.

```csharp
public void Add(RFCTableColumn newColumn)
```

#### Parameters

`newColumn` [RFCTableColumn](ERPConnect.RFCTableColumn.md)

### <a id="ERPConnect_RFCTableColumnCollection_Add_System_String_System_Int32_System_Int32_ERPConnect_RFCTYPE_System_Int32_"></a> Add\(string, int, int, RFCTYPE, int\)

Adds a new RFCTableColumn object to the collection.

```csharp
public void Add(string name, int length, int decimals, RFCTYPE type, int offset)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the column as provieded in the DDIC

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the column

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the column

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Byte-Offset

### <a id="ERPConnect_RFCTableColumnCollection_Add_System_String_System_Int32_System_Int32_ERPConnect_RFCTYPE_"></a> Add\(string, int, int, RFCTYPE\)

Adds a new RFCTableColumn object to the collection.

```csharp
public void Add(string name, int length, int decimals, RFCTYPE type)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the column as provieded in the DDIC

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the column

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the column

### <a id="ERPConnect_RFCTableColumnCollection_Add_System_String_System_Int32_ERPConnect_RFCTYPE_"></a> Add\(string, int, RFCTYPE\)

Adds a new RFCTableColumn object to the collection.

```csharp
public void Add(string name, int length, RFCTYPE type)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the column as provieded in the DDIC

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the column

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the column

### <a id="ERPConnect_RFCTableColumnCollection_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="ERPConnect_RFCTableColumnCollection_Contains_ERPConnect_RFCTableColumn_"></a> Contains\(RFCTableColumn\)

```csharp
public bool Contains(RFCTableColumn item)
```

#### Parameters

`item` [RFCTableColumn](ERPConnect.RFCTableColumn.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCTableColumnCollection_Contains_System_String_"></a> Contains\(string\)

```csharp
public bool Contains(string columnName)
```

#### Parameters

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCTableColumnCollection_CopyTo_ERPConnect_RFCTableColumn___System_Int32_"></a> CopyTo\(RFCTableColumn\[\], int\)

```csharp
public void CopyTo(RFCTableColumn[] array, int arrayIndex)
```

#### Parameters

`array` [RFCTableColumn](ERPConnect.RFCTableColumn.md)\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableColumnCollection_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator<RFCTableColumn> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[RFCTableColumn](ERPConnect.RFCTableColumn.md)\>

### <a id="ERPConnect_RFCTableColumnCollection_IndexOf_ERPConnect_RFCTableColumn_"></a> IndexOf\(RFCTableColumn\)

```csharp
public int IndexOf(RFCTableColumn item)
```

#### Parameters

`item` [RFCTableColumn](ERPConnect.RFCTableColumn.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableColumnCollection_Insert_System_Int32_ERPConnect_RFCTableColumn_"></a> Insert\(int, RFCTableColumn\)

```csharp
public void Insert(int index, RFCTableColumn item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` [RFCTableColumn](ERPConnect.RFCTableColumn.md)

### <a id="ERPConnect_RFCTableColumnCollection_Remove_ERPConnect_RFCTableColumn_"></a> Remove\(RFCTableColumn\)

```csharp
public bool Remove(RFCTableColumn item)
```

#### Parameters

`item` [RFCTableColumn](ERPConnect.RFCTableColumn.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCTableColumnCollection_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

```csharp
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableColumnCollection_RemoveAt_System_String_"></a> RemoveAt\(string\)

```csharp
public void RemoveAt(string columnName)
```

#### Parameters

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)

