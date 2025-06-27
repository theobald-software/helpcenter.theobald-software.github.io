Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

This represents a set of tables to be exchanged with a function module

```csharp
public sealed class RFCTableCollection : IList<RFCTable>, ICollection<RFCTable>, IEnumerable<RFCTable>, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCTableCollection](./)

#### Implements

[IList<RFCTable>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1), [ICollection<RFCTable>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1), [IEnumerable<RFCTable>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCTableCollection()

```csharp
public RFCTableCollection()

```

### RFCTableCollection(int)

```csharp
public RFCTableCollection(int capacity)

```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Count

```csharp
public int Count { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### this[int]

returns a RFCTable object by a given index

```csharp
public RFCTable this[int index] { get; set; }

```

#### Property Value

[RFCTable](../ERPConnect.RFCTable/)

### this[string]

returns a RFCTable object by a given table name

```csharp
public RFCTable this[string name] { get; set; }

```

#### Property Value

[RFCTable](../ERPConnect.RFCTable/)

## Methods

### Add(RFCTable)

Adds a RFCTable object to the collection

```csharp
public void Add(RFCTable newTable)

```

#### Parameters

`newTable` [RFCTable](../ERPConnect.RFCTable/)

RFCTable object

### Add(string)

Create a new RFCTable by a given name a return the new RFCTable object

```csharp
public RFCTable Add(string name)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the table as provided in the function module

#### Returns

[RFCTable](../ERPConnect.RFCTable/)

A RFCTable object

### Clear()

```csharp
public void Clear()

```

### Contains(RFCTable)

```csharp
public bool Contains(RFCTable item)

```

#### Parameters

`item` [RFCTable](../ERPConnect.RFCTable/)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Contains(string)

```csharp
public bool Contains(string name)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CopyTo(RFCTable[], int)

```csharp
public void CopyTo(RFCTable[] array, int arrayIndex)

```

#### Parameters

`array` [RFCTable](../ERPConnect.RFCTable/)[]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetEnumerator()

```csharp
public IEnumerator<RFCTable> GetEnumerator()

```

#### Returns

[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)\<[RFCTable](../ERPConnect.RFCTable/)>

### IndexOf(RFCTable)

```csharp
public int IndexOf(RFCTable item)

```

#### Parameters

`item` [RFCTable](../ERPConnect.RFCTable/)

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Insert(int, RFCTable)

```csharp
public void Insert(int index, RFCTable item)

```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` [RFCTable](../ERPConnect.RFCTable/)

### Remove(RFCTable)

```csharp
public bool Remove(RFCTable item)

```

#### Parameters

`item` [RFCTable](../ERPConnect.RFCTable/)

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
public void RemoveAt(string parameterName)

```

#### Parameters

`parameterName` [string](https://learn.microsoft.com/dotnet/api/system.string)
