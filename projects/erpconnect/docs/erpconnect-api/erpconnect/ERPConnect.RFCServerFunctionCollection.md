
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

A set of RFCServerFunction objects

```csharp
public sealed class RFCServerFunctionCollection : IList<RFCServerFunction>, ICollection<RFCServerFunction>, IEnumerable<RFCServerFunction>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCServerFunctionCollection](ERPConnect.RFCServerFunctionCollection.md)

#### Implements

[IList<RFCServerFunction\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<RFCServerFunction\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<RFCServerFunction\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### <a id="ERPConnect_RFCServerFunctionCollection__ctor"></a> RFCServerFunctionCollection\(\)

```csharp
public RFCServerFunctionCollection()
```

## Properties

### <a id="ERPConnect_RFCServerFunctionCollection_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCServerFunctionCollection_Item_System_Int32_"></a> this\[int\]

```csharp
public RFCServerFunction this[int index] { get; set; }
```

#### Property Value

 [RFCServerFunction](ERPConnect.RFCServerFunction.md)

### <a id="ERPConnect_RFCServerFunctionCollection_Item_System_String_"></a> this\[string\]

```csharp
public RFCServerFunction this[string name] { get; set; }
```

#### Property Value

 [RFCServerFunction](ERPConnect.RFCServerFunction.md)

## Methods

### <a id="ERPConnect_RFCServerFunctionCollection_Add_ERPConnect_RFCServerFunction_"></a> Add\(RFCServerFunction\)

Adds a new Item to the Collection

```csharp
public void Add(RFCServerFunction rfcServerFunction)
```

#### Parameters

`rfcServerFunction` [RFCServerFunction](ERPConnect.RFCServerFunction.md)

RFCServerFunction to be added

### <a id="ERPConnect_RFCServerFunctionCollection_Add_System_String_"></a> Add\(string\)

Adds a new function object to the collection

```csharp
public RFCServerFunction Add(string functionName)
```

#### Parameters

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the function module to be added

#### Returns

 [RFCServerFunction](ERPConnect.RFCServerFunction.md)

A newly created RFCServerFunction object

### <a id="ERPConnect_RFCServerFunctionCollection_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="ERPConnect_RFCServerFunctionCollection_Contains_ERPConnect_RFCServerFunction_"></a> Contains\(RFCServerFunction\)

```csharp
public bool Contains(RFCServerFunction item)
```

#### Parameters

`item` [RFCServerFunction](ERPConnect.RFCServerFunction.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCServerFunctionCollection_Contains_System_String_"></a> Contains\(string\)

```csharp
public bool Contains(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCServerFunctionCollection_CopyTo_ERPConnect_RFCServerFunction___System_Int32_"></a> CopyTo\(RFCServerFunction\[\], int\)

```csharp
public void CopyTo(RFCServerFunction[] array, int arrayIndex)
```

#### Parameters

`array` [RFCServerFunction](ERPConnect.RFCServerFunction.md)\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCServerFunctionCollection_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator<RFCServerFunction> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[RFCServerFunction](ERPConnect.RFCServerFunction.md)\>

### <a id="ERPConnect_RFCServerFunctionCollection_IndexOf_ERPConnect_RFCServerFunction_"></a> IndexOf\(RFCServerFunction\)

```csharp
public int IndexOf(RFCServerFunction item)
```

#### Parameters

`item` [RFCServerFunction](ERPConnect.RFCServerFunction.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCServerFunctionCollection_Insert_System_Int32_ERPConnect_RFCServerFunction_"></a> Insert\(int, RFCServerFunction\)

```csharp
public void Insert(int index, RFCServerFunction item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` [RFCServerFunction](ERPConnect.RFCServerFunction.md)

### <a id="ERPConnect_RFCServerFunctionCollection_Remove_ERPConnect_RFCServerFunction_"></a> Remove\(RFCServerFunction\)

```csharp
public bool Remove(RFCServerFunction item)
```

#### Parameters

`item` [RFCServerFunction](ERPConnect.RFCServerFunction.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCServerFunctionCollection_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

```csharp
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCServerFunctionCollection_RemoveAt_System_String_"></a> RemoveAt\(string\)

```csharp
public void RemoveAt(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

