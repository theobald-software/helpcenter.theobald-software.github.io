
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

This represents a set of tables to be exchanged with a function module

```csharp
public sealed class RFCTableCollection : IList<RFCTable>, ICollection<RFCTable>, IEnumerable<RFCTable>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCTableCollection](ERPConnect.RFCTableCollection.md)

#### Implements

[IList<RFCTable\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<RFCTable\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<RFCTable\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### <a id="ERPConnect_RFCTableCollection__ctor"></a> RFCTableCollection\(\)

```csharp
public RFCTableCollection()
```

### <a id="ERPConnect_RFCTableCollection__ctor_System_Int32_"></a> RFCTableCollection\(int\)

```csharp
public RFCTableCollection(int capacity)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="ERPConnect_RFCTableCollection_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableCollection_Item_System_Int32_"></a> this\[int\]

returns a RFCTable object by a given index

```csharp
public RFCTable this[int index] { get; set; }
```

#### Property Value

 [RFCTable](ERPConnect.RFCTable.md)

### <a id="ERPConnect_RFCTableCollection_Item_System_String_"></a> this\[string\]

returns a RFCTable object by a given table name

```csharp
public RFCTable this[string name] { get; set; }
```

#### Property Value

 [RFCTable](ERPConnect.RFCTable.md)

## Methods

### <a id="ERPConnect_RFCTableCollection_Add_ERPConnect_RFCTable_"></a> Add\(RFCTable\)

Adds a RFCTable object to the collection

```csharp
public void Add(RFCTable newTable)
```

#### Parameters

`newTable` [RFCTable](ERPConnect.RFCTable.md)

RFCTable object

### <a id="ERPConnect_RFCTableCollection_Add_System_String_"></a> Add\(string\)

Create a new RFCTable by a given name a return the new RFCTable object

```csharp
public RFCTable Add(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the table as provided in the function module

#### Returns

 [RFCTable](ERPConnect.RFCTable.md)

A RFCTable object

### <a id="ERPConnect_RFCTableCollection_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="ERPConnect_RFCTableCollection_Contains_ERPConnect_RFCTable_"></a> Contains\(RFCTable\)

```csharp
public bool Contains(RFCTable item)
```

#### Parameters

`item` [RFCTable](ERPConnect.RFCTable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCTableCollection_Contains_System_String_"></a> Contains\(string\)

```csharp
public bool Contains(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCTableCollection_CopyTo_ERPConnect_RFCTable___System_Int32_"></a> CopyTo\(RFCTable\[\], int\)

```csharp
public void CopyTo(RFCTable[] array, int arrayIndex)
```

#### Parameters

`array` [RFCTable](ERPConnect.RFCTable.md)\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableCollection_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator<RFCTable> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[RFCTable](ERPConnect.RFCTable.md)\>

### <a id="ERPConnect_RFCTableCollection_IndexOf_ERPConnect_RFCTable_"></a> IndexOf\(RFCTable\)

```csharp
public int IndexOf(RFCTable item)
```

#### Parameters

`item` [RFCTable](ERPConnect.RFCTable.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableCollection_Insert_System_Int32_ERPConnect_RFCTable_"></a> Insert\(int, RFCTable\)

```csharp
public void Insert(int index, RFCTable item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` [RFCTable](ERPConnect.RFCTable.md)

### <a id="ERPConnect_RFCTableCollection_Remove_ERPConnect_RFCTable_"></a> Remove\(RFCTable\)

```csharp
public bool Remove(RFCTable item)
```

#### Parameters

`item` [RFCTable](ERPConnect.RFCTable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCTableCollection_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

```csharp
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCTableCollection_RemoveAt_System_String_"></a> RemoveAt\(string\)

```csharp
public void RemoveAt(string parameterName)
```

#### Parameters

`parameterName` [string](https://learn.microsoft.com/dotnet/api/system.string)

