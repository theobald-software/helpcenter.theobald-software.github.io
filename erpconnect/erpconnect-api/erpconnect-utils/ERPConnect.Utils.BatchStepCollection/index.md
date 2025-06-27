Namespace: [ERPConnect.Utils](../)\
Assembly: ERPConnectStandard20.dll

BatchStepCollection represents a collection of BatchStep objects

```csharp
public class BatchStepCollection : CollectionBase, IList, ICollection, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← [BatchStepCollection](./)

#### Implements

[IList](https://learn.microsoft.com/dotnet/api/system.collections.ilist), [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[CollectionBase.Clear()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.clear), [CollectionBase.RemoveAt(int)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.removeat), [CollectionBase.GetEnumerator()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.getenumerator), [CollectionBase.OnSet(int, object, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onset), [CollectionBase.OnInsert(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.oninsert), [CollectionBase.OnClear()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onclear), [CollectionBase.OnRemove(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onremove), [CollectionBase.OnValidate(object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onvalidate), [CollectionBase.OnSetComplete(int, object, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onsetcomplete), [CollectionBase.OnInsertComplete(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.oninsertcomplete), [CollectionBase.OnClearComplete()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onclearcomplete), [CollectionBase.OnRemoveComplete(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onremovecomplete), [CollectionBase.InnerList](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.innerlist), [CollectionBase.List](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.list), [CollectionBase.Capacity](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.capacity), [CollectionBase.Count](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.count), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### BatchStepCollection()

Initializes an empty collection over BatchStep objects

```csharp
public BatchStepCollection()

```

## Properties

### this[int]

Returns a BatchStep object by a given index

```csharp
public virtual BatchStep this[int Index] { get; set; }

```

#### Property Value

[BatchStep](../ERPConnect.Utils.BatchStep/)

## Methods

### Add(BatchStep)

Adds a new BatchStep object to the collection

```csharp
public virtual void Add(BatchStep NewParameter)

```

#### Parameters

`NewParameter` [BatchStep](../ERPConnect.Utils.BatchStep/)

The BatchStep object to be added

### Insert(int, BatchStep)

Inserts a new BatchStep object

```csharp
public virtual void Insert(int Index, BatchStep NewParameter)

```

#### Parameters

`Index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the new BatchStep object

`NewParameter` [BatchStep](../ERPConnect.Utils.BatchStep/)

The BatchStep object to be added
