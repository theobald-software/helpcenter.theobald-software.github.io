
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnectStandard20.dll  

This collecton class represents a set of hierarchy objects

```csharp
public class HierarchyCollection : CollectionBase, IList, ICollection, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← 
[HierarchyCollection](ERPConnect.BW.HierarchyCollection.md)

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

### <a id="ERPConnect_BW_HierarchyCollection__ctor"></a> HierarchyCollection\(\)

Constructs a new HierarchyCollection object

```csharp
public HierarchyCollection()
```

## Properties

### <a id="ERPConnect_BW_HierarchyCollection_Item_System_Int32_"></a> this\[int\]

Returns an hierarchy object of a given position

```csharp
public virtual Hierarchy this[int Index] { get; set; }
```

#### Property Value

 [Hierarchy](ERPConnect.BW.Hierarchy.md)

### <a id="ERPConnect_BW_HierarchyCollection_Item_System_String_"></a> this\[string\]

Returns a Hierarchy object by its name

```csharp
public virtual Hierarchy this[string UniqueName] { get; set; }
```

#### Property Value

 [Hierarchy](ERPConnect.BW.Hierarchy.md)

## Methods

### <a id="ERPConnect_BW_HierarchyCollection_Add_ERPConnect_BW_Hierarchy_"></a> Add\(Hierarchy\)

Adds an existing Hierarchy object to the collection

```csharp
public virtual void Add(Hierarchy NewParameter)
```

#### Parameters

`NewParameter` [Hierarchy](ERPConnect.BW.Hierarchy.md)

The Hierarchy object to be added

### <a id="ERPConnect_BW_HierarchyCollection_Add_ERPConnect_BW_Dimension_System_String_System_String_System_String_"></a> Add\(Dimension, string, string, string\)

Adds a new Hierarchy object to the collection

```csharp
public virtual Hierarchy Add(Dimension Dimension, string Name, string UniqueName, string Caption)
```

#### Parameters

`Dimension` [Dimension](ERPConnect.BW.Dimension.md)

Reference to a Dimension object

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the hierarchy

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Unique name of the hierarchy

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

A brief description text

#### Returns

 [Hierarchy](ERPConnect.BW.Hierarchy.md)

The hierarchy object that was created and added to the collection

### <a id="ERPConnect_BW_HierarchyCollection_ContainsHierarchy_System_String_"></a> ContainsHierarchy\(string\)

Detects if the hierarchy with a given name is contained in the collection

```csharp
public bool ContainsHierarchy(string HierarchyName)
```

#### Parameters

`HierarchyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the hierarchy to be looked up for

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true / false depending if the hierarchy is already added to the collection

### <a id="ERPConnect_BW_HierarchyCollection_Insert_System_Int32_ERPConnect_BW_Hierarchy_"></a> Insert\(int, Hierarchy\)

Inserts an existing Hierarchy object to the collection

```csharp
public virtual void Insert(int Index, Hierarchy NewParameter)
```

#### Parameters

`Index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Oridnal number of the position

`NewParameter` [Hierarchy](ERPConnect.BW.Hierarchy.md)

The Hierarchy object to be added

### <a id="ERPConnect_BW_HierarchyCollection_TryGetValue_System_String_ERPConnect_BW_Hierarchy__"></a> TryGetValue\(string, out Hierarchy\)

```csharp
public bool TryGetValue(string uniqueName, out Hierarchy value)
```

#### Parameters

`uniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [Hierarchy](ERPConnect.BW.Hierarchy.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

