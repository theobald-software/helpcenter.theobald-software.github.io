
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

Collection of im- or export parameters of function module

```csharp
public sealed class RFCParameterCollection : IList<RFCParameter>, ICollection<RFCParameter>, IEnumerable<RFCParameter>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCParameterCollection](ERPConnect.RFCParameterCollection.md)

#### Implements

[IList<RFCParameter\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<RFCParameter\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<RFCParameter\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_RFCParameterCollection__ctor"></a> RFCParameterCollection\(\)

```csharp
public RFCParameterCollection()
```

## Properties

### <a id="ERPConnect_RFCParameterCollection_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCParameterCollection_Item_System_Int32_"></a> this\[int\]

returns a RFCParameter object from the collection.

```csharp
public RFCParameter this[int index] { get; set; }
```

#### Property Value

 [RFCParameter](ERPConnect.RFCParameter.md)

### <a id="ERPConnect_RFCParameterCollection_Item_System_String_"></a> this\[string\]

Returns a RFCParameter object by a given name.

```csharp
public RFCParameter this[string name] { get; set; }
```

#### Property Value

 [RFCParameter](ERPConnect.RFCParameter.md)

## Methods

### <a id="ERPConnect_RFCParameterCollection_Add_ERPConnect_RFCParameter_"></a> Add\(RFCParameter\)

Adds a RFCParameter object to the collection

```csharp
public void Add(RFCParameter newParameter)
```

#### Parameters

`newParameter` [RFCParameter](ERPConnect.RFCParameter.md)

RFCParameter object

### <a id="ERPConnect_RFCParameterCollection_Add_System_String_ERPConnect_RFCTYPE_System_Int32_System_Int32_System_Object_"></a> Add\(string, RFCTYPE, int, int, object\)

Constructs a new parameter object by giving several properties

```csharp
public RFCParameter Add(string name, RFCTYPE type, int length, int decimals, object paramValue)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the paramneter in the function module

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of Colum

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

`paramValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

Value of the parameter

#### Returns

 [RFCParameter](ERPConnect.RFCParameter.md)

A new RFCParameter object

### <a id="ERPConnect_RFCParameterCollection_Add_System_String_ERPConnect_RFCTYPE_System_Int32_System_Int32_"></a> Add\(string, RFCTYPE, int, int\)

Constructs a new parameter object by giving several properties

```csharp
public RFCParameter Add(string name, RFCTYPE type, int length, int decimals)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the paramneter in the function module

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of Colum

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

#### Returns

 [RFCParameter](ERPConnect.RFCParameter.md)

A new RFCParameter object

### <a id="ERPConnect_RFCParameterCollection_Add_System_String_ERPConnect_RFCTYPE_System_Int32_"></a> Add\(string, RFCTYPE, int\)

Adds and returns a new RFCParameter object

```csharp
public RFCParameter Add(string name, RFCTYPE type, int length)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the parameter as defined in the function module

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the new parameter

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the new parameter in bytes

#### Returns

 [RFCParameter](ERPConnect.RFCParameter.md)

The new RFCParameter object

### <a id="ERPConnect_RFCParameterCollection_Add_System_String_ERPConnect_RFCTYPE_"></a> Add\(string, RFCTYPE\)

Adds and returns a new RFCParameter object

```csharp
public RFCParameter Add(string name, RFCTYPE type)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the parameter as defined in the function module

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the new parameter

#### Returns

 [RFCParameter](ERPConnect.RFCParameter.md)

The new RFCParameter object

### <a id="ERPConnect_RFCParameterCollection_Add_System_String_ERPConnect_RFCTableColumnCollection_"></a> Add\(string, RFCTableColumnCollection\)

Adds and returns a new RFCParameter object

```csharp
public RFCParameter Add(string name, RFCTableColumnCollection columns)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the parameter as defined in the function module

`columns` [RFCTableColumnCollection](ERPConnect.RFCTableColumnCollection.md)

Columns collection for the RFCStructure

#### Returns

 [RFCParameter](ERPConnect.RFCParameter.md)

The new RFCParameter object

### <a id="ERPConnect_RFCParameterCollection_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="ERPConnect_RFCParameterCollection_Contains_ERPConnect_RFCParameter_"></a> Contains\(RFCParameter\)

```csharp
public bool Contains(RFCParameter item)
```

#### Parameters

`item` [RFCParameter](ERPConnect.RFCParameter.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCParameterCollection_Contains_System_String_"></a> Contains\(string\)

```csharp
public bool Contains(string parameterName)
```

#### Parameters

`parameterName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCParameterCollection_CopyTo_ERPConnect_RFCParameter___System_Int32_"></a> CopyTo\(RFCParameter\[\], int\)

```csharp
public void CopyTo(RFCParameter[] array, int arrayIndex)
```

#### Parameters

`array` [RFCParameter](ERPConnect.RFCParameter.md)\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCParameterCollection_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator<RFCParameter> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[RFCParameter](ERPConnect.RFCParameter.md)\>

### <a id="ERPConnect_RFCParameterCollection_IndexOf_ERPConnect_RFCParameter_"></a> IndexOf\(RFCParameter\)

```csharp
public int IndexOf(RFCParameter item)
```

#### Parameters

`item` [RFCParameter](ERPConnect.RFCParameter.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCParameterCollection_Insert_System_Int32_ERPConnect_RFCParameter_"></a> Insert\(int, RFCParameter\)

```csharp
public void Insert(int index, RFCParameter item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` [RFCParameter](ERPConnect.RFCParameter.md)

### <a id="ERPConnect_RFCParameterCollection_Remove_ERPConnect_RFCParameter_"></a> Remove\(RFCParameter\)

```csharp
public bool Remove(RFCParameter item)
```

#### Parameters

`item` [RFCParameter](ERPConnect.RFCParameter.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCParameterCollection_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

```csharp
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCParameterCollection_RemoveAt_System_String_"></a> RemoveAt\(string\)

```csharp
public void RemoveAt(string parameterName)
```

#### Parameters

`parameterName` [string](https://learn.microsoft.com/dotnet/api/system.string)

