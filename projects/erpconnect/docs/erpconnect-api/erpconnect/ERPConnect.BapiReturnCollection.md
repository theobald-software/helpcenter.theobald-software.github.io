
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

Collection of BapiReturn objects

```csharp
public class BapiReturnCollection : CollectionBase, IList, ICollection, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← 
[BapiReturnCollection](ERPConnect.BapiReturnCollection.md)

#### Implements

[IList](https://learn.microsoft.com/dotnet/api/system.collections.ilist), 
[ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[CollectionBase.Clear\(\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.clear), 
[CollectionBase.RemoveAt\(int\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.removeat), 
[CollectionBase.GetEnumerator\(\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.getenumerator), 
[CollectionBase.OnSet\(int, object, object\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onset), 
[CollectionBase.OnInsert\(int, object\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.oninsert), 
[CollectionBase.OnClear\(\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onclear), 
[CollectionBase.OnRemove\(int, object\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onremove), 
[CollectionBase.OnValidate\(object\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onvalidate), 
[CollectionBase.OnSetComplete\(int, object, object\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onsetcomplete), 
[CollectionBase.OnInsertComplete\(int, object\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.oninsertcomplete), 
[CollectionBase.OnClearComplete\(\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onclearcomplete), 
[CollectionBase.OnRemoveComplete\(int, object\)](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.onremovecomplete), 
[CollectionBase.InnerList](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.innerlist), 
[CollectionBase.List](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.list), 
[CollectionBase.Capacity](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.capacity), 
[CollectionBase.Count](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase.count), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_BapiReturnCollection__ctor"></a> BapiReturnCollection\(\)

```csharp
public BapiReturnCollection()
```

## Properties

### <a id="ERPConnect_BapiReturnCollection_Item_System_Int32_"></a> this\[int\]

Returns a BapiReturn object at a given position

```csharp
public virtual BapiReturn this[int Index] { get; }
```

#### Property Value

 [BapiReturn](ERPConnect.BapiReturn.md)

## Methods

### <a id="ERPConnect_BapiReturnCollection_Add_ERPConnect_BapiReturn_"></a> Add\(BapiReturn\)

Adds a new BapiReturn object to the collection.

```csharp
public virtual void Add(BapiReturn NewBapiReturn)
```

#### Parameters

`NewBapiReturn` [BapiReturn](ERPConnect.BapiReturn.md)

The BapiReturn to be aded

