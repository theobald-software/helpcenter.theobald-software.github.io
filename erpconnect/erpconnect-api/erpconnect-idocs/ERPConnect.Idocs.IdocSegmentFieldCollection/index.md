Namespace: [ERPConnect.Idocs](../)\
Assembly: ERPConnectStandard20.dll

Collection of IdocSegmentField objects

```csharp
public class IdocSegmentFieldCollection : CollectionBase, IList, ICollection, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← [IdocSegmentFieldCollection](./)

#### Implements

[IList](https://learn.microsoft.com/dotnet/api/system.collections.ilist), [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[CollectionBase.Clear()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.clear), [CollectionBase.RemoveAt(int)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.removeat), [CollectionBase.GetEnumerator()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.getenumerator), [CollectionBase.OnSet(int, object, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onset), [CollectionBase.OnInsert(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.oninsert), [CollectionBase.OnClear()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onclear), [CollectionBase.OnRemove(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onremove), [CollectionBase.OnValidate(object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onvalidate), [CollectionBase.OnSetComplete(int, object, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onsetcomplete), [CollectionBase.OnInsertComplete(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.oninsertcomplete), [CollectionBase.OnClearComplete()](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onclearcomplete), [CollectionBase.OnRemoveComplete(int, object)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onremovecomplete), [CollectionBase.InnerList](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.innerlist), [CollectionBase.List](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.list), [CollectionBase.Capacity](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.capacity), [CollectionBase.Count](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.count), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### IdocSegmentFieldCollection()

Initializes an empty collection

```csharp
public IdocSegmentFieldCollection()

```

## Properties

### this[int]

Returns a IdocSegmentField object at a given position

```csharp
public virtual IdocSegmentField this[int Index] { get; set; }

```

#### Property Value

[IdocSegmentField](../ERPConnect.Idocs.IdocSegmentField/)

### this[string]

Returns a IdocSegmentField object at a given position

```csharp
public virtual IdocSegmentField this[string SegmentName] { get; set; }

```

#### Property Value

[IdocSegmentField](../ERPConnect.Idocs.IdocSegmentField/)

## Methods

### Add(IdocSegmentField)

Adds a new item to the collection

```csharp
public void Add(IdocSegmentField NewParameter)

```

#### Parameters

`NewParameter` [IdocSegmentField](../ERPConnect.Idocs.IdocSegmentField/)

Valid IdocSegmentField object

### Add(string)

Creates a new IdocSegmentField object, adds it to the collection and returns it

```csharp
public IdocSegmentField Add(string Name)

```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the segment field

#### Returns

[IdocSegmentField](../ERPConnect.Idocs.IdocSegmentField/)

Returns the newly created IdocSegmentField object

### Add(string, string, int, int, string, object)

Creates a new IdocSegmentField object, adds it to the collection and returns the new object

```csharp
public IdocSegmentField Add(string Name, string Description, int Length, int Offset, string DataType, object FieldValue)

```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the segment field

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

Description of the segment field

`Length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the segment field

`Offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Offset in data buffer of the segment field

`DataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Data type of the segment field

`FieldValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

The value

#### Returns

[IdocSegmentField](../ERPConnect.Idocs.IdocSegmentField/)

Returns the newly created IdocSegmentField object
