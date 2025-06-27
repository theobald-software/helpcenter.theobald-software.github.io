Namespace: [ERPConnect.BW](../)\
Assembly: ERPConnectStandard20.dll

This collecton class represents a set of hierarchy objects

```csharp
public class HierarchyLevelCollection : CollectionBase, IList, ICollection, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← [HierarchyLevelCollection](./)

#### Implements

[IList](https://learn.microsoft.com/dotnet/api/system.collections.ilist), [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[CollectionBase.Clear()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.clear), [CollectionBase.RemoveAt(int)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.removeat), [CollectionBase.GetEnumerator()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.getenumerator), [CollectionBase.OnSet(int, object, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onset), [CollectionBase.OnInsert(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.oninsert), [CollectionBase.OnClear()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onclear), [CollectionBase.OnRemove(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onremove), [CollectionBase.OnValidate(object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onvalidate), [CollectionBase.OnSetComplete(int, object, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onsetcomplete), [CollectionBase.OnInsertComplete(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.oninsertcomplete), [CollectionBase.OnClearComplete()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onclearcomplete), [CollectionBase.OnRemoveComplete(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onremovecomplete), [CollectionBase.InnerList](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.innerlist), [CollectionBase.List](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.list), [CollectionBase.Capacity](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.capacity), [CollectionBase.Count](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.count), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### HierarchyLevelCollection()

Constructs a new HierarchyCollection object

```csharp
public HierarchyLevelCollection()

```

## Properties

### this[int]

Returns an hierarchy object of a given position

```csharp
public virtual HierarchyLevel this[int Index] { get; set; }

```

#### Property Value

[HierarchyLevel](../ERPConnect.BW.HierarchyLevel/)

### this[string]

Returns a HierarchyLevel object by its name

```csharp
public virtual HierarchyLevel this[string UniqueName] { get; set; }

```

#### Property Value

[HierarchyLevel](../ERPConnect.BW.HierarchyLevel/)

## Methods

### Add(HierarchyLevel)

Adds an existing Hierarchy object to the collection

```csharp
public virtual void Add(HierarchyLevel NewParameter)

```

#### Parameters

`NewParameter` [HierarchyLevel](../ERPConnect.BW.HierarchyLevel/)

The Hierarchy object to be added

### Add(Hierarchy, string, string, string)

Adds a new Hierarchy Level object to the collection

```csharp
public virtual HierarchyLevel Add(Hierarchy Hierarchy, string Name, string UniqueName, string Caption)

```

#### Parameters

`Hierarchy` [Hierarchy](../ERPConnect.BW.Hierarchy/)

Reference to a Hierarchy Level object

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the hierarchy

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Unique name of the hierarchy

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

A brief description text

#### Returns

[HierarchyLevel](../ERPConnect.BW.HierarchyLevel/)

The hierarchy object that was created and added to the collection

### Insert(int, HierarchyLevel)

Inserts an existing HierarchyLevel object to the collection

```csharp
public virtual void Insert(int Index, HierarchyLevel NewParameter)

```

#### Parameters

`Index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Oridnal number of the position

`NewParameter` [HierarchyLevel](../ERPConnect.BW.HierarchyLevel/)

The Hierarchy object to be added

### TryGetValue(string, out HierarchyLevel)

```csharp
public bool TryGetValue(string uniqueName, out HierarchyLevel value)

```

#### Parameters

`uniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [HierarchyLevel](../ERPConnect.BW.HierarchyLevel/)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)
