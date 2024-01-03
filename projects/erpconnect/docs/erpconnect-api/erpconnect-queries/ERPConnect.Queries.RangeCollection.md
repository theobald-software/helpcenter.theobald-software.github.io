
Namespace: [ERPConnect.Queries](index.md)  
Assembly: ERPConnect35.dll  

This class repesents a collection of Range objects

```csharp
public class RangeCollection : CollectionBase, IList, ICollection, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← 
[RangeCollection](ERPConnect.Queries.RangeCollection.md)

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
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_Queries_RangeCollection__ctor"></a> RangeCollection\(\)

```csharp
public RangeCollection()
```

## Properties

### <a id="ERPConnect_Queries_RangeCollection_Item_System_Int32_"></a> this\[int\]

Returns the Range object at the given index

```csharp
public virtual Range this[int Index] { get; set; }
```

#### Property Value

 [Range](ERPConnect.Queries.Range.md)

## Methods

### <a id="ERPConnect_Queries_RangeCollection_Add_ERPConnect_Queries_Range_"></a> Add\(Range\)

Adds a new Range object to the collection

```csharp
public virtual void Add(Range NewParameter)
```

#### Parameters

`NewParameter` [Range](ERPConnect.Queries.Range.md)

The Range object to be added

### <a id="ERPConnect_Queries_RangeCollection_Add_ERPConnect_Queries_Sign_ERPConnect_Queries_RangeOption_System_String_System_String_"></a> Add\(Sign, RangeOption, string, string\)

Creates a new Range object and adds it to the collection

```csharp
public virtual void Add(Sign Sign, RangeOption Option, string LowValue, string HighValue)
```

#### Parameters

`Sign` [Sign](ERPConnect.Queries.Sign.md)

Sign (e.g. Include)

`Option` [RangeOption](ERPConnect.Queries.RangeOption.md)

Option (e.g. Between)

`LowValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The low value of the Range object

`HighValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The high value of the Range object

### <a id="ERPConnect_Queries_RangeCollection_Add_ERPConnect_Queries_Sign_ERPConnect_Queries_RangeOption_System_String_"></a> Add\(Sign, RangeOption, string\)

Creates a new Range object and adds it to the collection

```csharp
public virtual void Add(Sign Sign, RangeOption Option, string Value)
```

#### Parameters

`Sign` [Sign](ERPConnect.Queries.Sign.md)

Sign (e.g. Include)

`Option` [RangeOption](ERPConnect.Queries.RangeOption.md)

Option (e.g. Between)

`Value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value of the Range object

### <a id="ERPConnect_Queries_RangeCollection_Add_System_String_"></a> Add\(string\)

Creates a new Range object and adds it to the collection

```csharp
public virtual void Add(string Value)
```

#### Parameters

`Value` [string](https://learn.microsoft.com/dotnet/api/system.string)

Value

