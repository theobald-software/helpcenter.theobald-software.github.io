Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Collection over RFCStruture objects which represents a row of a table

```csharp
public sealed class RFCStructureCollection : IList<RFCStructure>, ICollection<RFCStructure>, IEnumerable<RFCStructure>, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCStructureCollection](./)

#### Implements

[IList<RFCStructure>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1), [ICollection<RFCStructure>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1), [IEnumerable<RFCStructure>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCStructureCollection(RFCTableColumnCollection)

```csharp
public RFCStructureCollection(RFCTableColumnCollection columns)

```

#### Parameters

`columns` [RFCTableColumnCollection](../ERPConnect.RFCTableColumnCollection/)

### RFCStructureCollection()

```csharp
public RFCStructureCollection()

```

## Properties

### Capacity

```csharp
public int Capacity { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Count

```csharp
public int Count { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### this[int]

Returns a RFCStructure object

```csharp
public RFCStructure this[int index] { get; set; }

```

#### Property Value

[RFCStructure](../ERPConnect.RFCStructure/)

### this[int, int]

Returns the value at a given position in the table (index of the row and index the column)

```csharp
public object this[int rowIndex, int columnIndex] { get; set; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### this[int, string]

Returns the value at a given position in the table (index of the row and name of the column)

```csharp
public object this[int rowIndex, string columnName] { get; set; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### Add(RFCStructure)

Adds a new Item to the Collection

```csharp
public void Add(RFCStructure newStructure)

```

#### Parameters

`newStructure` [RFCStructure](../ERPConnect.RFCStructure/)

RFCStructure to be added

### Add()

Creates a new RFCStructure object and adds it to the collection.

```csharp
public RFCStructure Add()

```

#### Returns

[RFCStructure](../ERPConnect.RFCStructure/)

A RFCStructure object which represents a new table row

### Clear()

```csharp
public void Clear()

```

### Contains(RFCStructure)

```csharp
public bool Contains(RFCStructure item)

```

#### Parameters

`item` [RFCStructure](../ERPConnect.RFCStructure/)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CopyTo(RFCStructure[], int)

```csharp
public void CopyTo(RFCStructure[] array, int arrayIndex)

```

#### Parameters

`array` [RFCStructure](../ERPConnect.RFCStructure/)[]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetEnumerator()

```csharp
public IEnumerator<RFCStructure> GetEnumerator()

```

#### Returns

[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)\<[RFCStructure](../ERPConnect.RFCStructure/)>

### IndexOf(RFCStructure)

```csharp
public int IndexOf(RFCStructure item)

```

#### Parameters

`item` [RFCStructure](../ERPConnect.RFCStructure/)

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Insert(int, RFCStructure)

```csharp
public void Insert(int index, RFCStructure item)

```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` [RFCStructure](../ERPConnect.RFCStructure/)

### Remove(RFCStructure)

```csharp
public bool Remove(RFCStructure item)

```

#### Parameters

`item` [RFCStructure](../ERPConnect.RFCStructure/)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAt(int)

```csharp
public void RemoveAt(int index)

```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)
