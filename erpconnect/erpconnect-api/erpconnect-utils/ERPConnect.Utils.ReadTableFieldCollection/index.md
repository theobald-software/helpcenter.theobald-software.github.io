Namespace: [ERPConnect.Utils](../)\
Assembly: ERPConnectStandard20.dll

Represents a collection of ReadTableField objects

```csharp
public sealed class ReadTableFieldCollection : CollectionBase, IList, ICollection, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← [ReadTableFieldCollection](./)

#### Implements

[IList](https://learn.microsoft.com/dotnet/api/system.collections.ilist), [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[CollectionBase.Clear()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.clear), [CollectionBase.RemoveAt(int)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.removeat), [CollectionBase.GetEnumerator()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.getenumerator), [CollectionBase.Capacity](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.capacity), [CollectionBase.Count](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.count), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### ReadTableFieldCollection()

```csharp
public ReadTableFieldCollection()

```

## Properties

### this[int]

Returns the ReadTableField object at the given position

```csharp
public ReadTableField this[int index] { get; set; }

```

#### Property Value

[ReadTableField](../ERPConnect.Utils.ReadTableField/)

## Methods

### Add(ReadTableField)

Adds a new ReadTableField object to the collection

```csharp
public void Add(ReadTableField field)

```

#### Parameters

`field` [ReadTableField](../ERPConnect.Utils.ReadTableField/)

The ReadTableField object to be added
