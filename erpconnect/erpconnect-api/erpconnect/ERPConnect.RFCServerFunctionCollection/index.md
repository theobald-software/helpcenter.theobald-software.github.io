Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

A set of RFCServerFunction objects

```csharp
public sealed class RFCServerFunctionCollection : IList<RFCServerFunction>, ICollection<RFCServerFunction>, IEnumerable<RFCServerFunction>, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCServerFunctionCollection](./)

#### Implements

[IList<RFCServerFunction>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1), [ICollection<RFCServerFunction>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1), [IEnumerable<RFCServerFunction>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCServerFunctionCollection()

```csharp
public RFCServerFunctionCollection()

```

## Properties

### Count

```csharp
public int Count { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### this[int]

```csharp
public RFCServerFunction this[int index] { get; set; }

```

#### Property Value

[RFCServerFunction](../ERPConnect.RFCServerFunction/)

### this[string]

```csharp
public RFCServerFunction this[string name] { get; set; }

```

#### Property Value

[RFCServerFunction](../ERPConnect.RFCServerFunction/)

## Methods

### Add(RFCServerFunction)

Adds a new Item to the Collection

```csharp
public void Add(RFCServerFunction rfcServerFunction)

```

#### Parameters

`rfcServerFunction` [RFCServerFunction](../ERPConnect.RFCServerFunction/)

RFCServerFunction to be added

### Add(string)

Adds a new function object to the collection

```csharp
public RFCServerFunction Add(string functionName)

```

#### Parameters

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the function module to be added

#### Returns

[RFCServerFunction](../ERPConnect.RFCServerFunction/)

A newly created RFCServerFunction object

### Clear()

```csharp
public void Clear()

```

### Contains(RFCServerFunction)

```csharp
public bool Contains(RFCServerFunction item)

```

#### Parameters

`item` [RFCServerFunction](../ERPConnect.RFCServerFunction/)

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

### CopyTo(RFCServerFunction[], int)

```csharp
public void CopyTo(RFCServerFunction[] array, int arrayIndex)

```

#### Parameters

`array` [RFCServerFunction](../ERPConnect.RFCServerFunction/)[]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetEnumerator()

```csharp
public IEnumerator<RFCServerFunction> GetEnumerator()

```

#### Returns

[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)\<[RFCServerFunction](../ERPConnect.RFCServerFunction/)>

### IndexOf(RFCServerFunction)

```csharp
public int IndexOf(RFCServerFunction item)

```

#### Parameters

`item` [RFCServerFunction](../ERPConnect.RFCServerFunction/)

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Insert(int, RFCServerFunction)

```csharp
public void Insert(int index, RFCServerFunction item)

```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` [RFCServerFunction](../ERPConnect.RFCServerFunction/)

### Remove(RFCServerFunction)

```csharp
public bool Remove(RFCServerFunction item)

```

#### Parameters

`item` [RFCServerFunction](../ERPConnect.RFCServerFunction/)

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
public void RemoveAt(string name)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)
