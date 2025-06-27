Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Represents a collection of RFCTableColumn objects for a RFCTable or a RFCStructure.

```csharp
public sealed class RFCTableColumnCollection : IList<RFCTableColumn>, ICollection<RFCTableColumn>, IEnumerable<RFCTableColumn>, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCTableColumnCollection](./)

#### Implements

[IList<RFCTableColumn>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1), [ICollection<RFCTableColumn>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1), [IEnumerable<RFCTableColumn>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCTableColumnCollection()

```csharp
public RFCTableColumnCollection()

```

## Properties

### ABAPStructureName

The name of the ABAP structure

```csharp
public string ABAPStructureName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Count

```csharp
public int Count { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Includes

```csharp
public IList<IncludeStructure> Includes { get; }

```

#### Property Value

[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)\<[IncludeStructure](../ERPConnect.IncludeStructure/)>

### RowLength

Gets or sets the number bytes required for a table row / structure based on these columns

```csharp
public int RowLength { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### this[int]

returns a single RFCTableColumn object from the collection

```csharp
public RFCTableColumn this[int index] { get; set; }

```

#### Property Value

[RFCTableColumn](../ERPConnect.RFCTableColumn/)

### this[string]

returns a single RFCTableColumn object from the collection

```csharp
public RFCTableColumn this[string columnName] { get; set; }

```

#### Property Value

[RFCTableColumn](../ERPConnect.RFCTableColumn/)

## Methods

### Add(RFCTableColumn)

Adds a new RFCTableColumn object to the collection.

```csharp
public void Add(RFCTableColumn newColumn)

```

#### Parameters

`newColumn` [RFCTableColumn](../ERPConnect.RFCTableColumn/)

### Add(string, int, int, RFCTYPE, int)

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

`type` [RFCTYPE](../ERPConnect.RFCTYPE/)

RFC type of the column

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Byte-Offset

### Add(string, int, int, RFCTYPE)

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

`type` [RFCTYPE](../ERPConnect.RFCTYPE/)

RFC type of the column

### Add(string, int, RFCTYPE)

Adds a new RFCTableColumn object to the collection.

```csharp
public void Add(string name, int length, RFCTYPE type)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the column as provieded in the DDIC

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the column

`type` [RFCTYPE](../ERPConnect.RFCTYPE/)

RFC type of the column

### Clear()

```csharp
public void Clear()

```

### Contains(RFCTableColumn)

```csharp
public bool Contains(RFCTableColumn item)

```

#### Parameters

`item` [RFCTableColumn](../ERPConnect.RFCTableColumn/)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Contains(string)

```csharp
public bool Contains(string columnName)

```

#### Parameters

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CopyTo(RFCTableColumn[], int)

```csharp
public void CopyTo(RFCTableColumn[] array, int arrayIndex)

```

#### Parameters

`array` [RFCTableColumn](../ERPConnect.RFCTableColumn/)[]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetEnumerator()

```csharp
public IEnumerator<RFCTableColumn> GetEnumerator()

```

#### Returns

[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)\<[RFCTableColumn](../ERPConnect.RFCTableColumn/)>

### IndexOf(RFCTableColumn)

```csharp
public int IndexOf(RFCTableColumn item)

```

#### Parameters

`item` [RFCTableColumn](../ERPConnect.RFCTableColumn/)

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Insert(int, RFCTableColumn)

```csharp
public void Insert(int index, RFCTableColumn item)

```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` [RFCTableColumn](../ERPConnect.RFCTableColumn/)

### Remove(RFCTableColumn)

```csharp
public bool Remove(RFCTableColumn item)

```

#### Parameters

`item` [RFCTableColumn](../ERPConnect.RFCTableColumn/)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAt(int)

```csharp
public void RemoveAt(int index)

```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveAt(string)

```csharp
public void RemoveAt(string columnName)

```

#### Parameters

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)
