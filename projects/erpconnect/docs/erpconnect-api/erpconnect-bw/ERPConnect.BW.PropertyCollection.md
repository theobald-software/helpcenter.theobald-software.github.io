
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnectStandard20.dll  

A collection of property objects

```csharp
public class PropertyCollection : CollectionBase, IList, ICollection, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← 
[PropertyCollection](ERPConnect.BW.PropertyCollection.md)

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

### <a id="ERPConnect_BW_PropertyCollection__ctor"></a> PropertyCollection\(\)

Create a new PropertyCollection object

```csharp
public PropertyCollection()
```

## Properties

### <a id="ERPConnect_BW_PropertyCollection_Item_System_Int32_"></a> this\[int\]

Returns the property object at the given position

```csharp
public virtual Property this[int Index] { get; set; }
```

#### Property Value

 [Property](ERPConnect.BW.Property.md)

### <a id="ERPConnect_BW_PropertyCollection_Item_System_String_"></a> this\[string\]

Returns the property object with the given name

```csharp
public virtual Property this[string Name] { get; set; }
```

#### Property Value

 [Property](ERPConnect.BW.Property.md)

## Methods

### <a id="ERPConnect_BW_PropertyCollection_Add_ERPConnect_BW_Property_"></a> Add\(Property\)

Adds a Property object to the collection

```csharp
public virtual void Add(Property NewParameter)
```

#### Parameters

`NewParameter` [Property](ERPConnect.BW.Property.md)

The property object to be added

### <a id="ERPConnect_BW_PropertyCollection_Add_System_String_System_String_System_String_"></a> Add\(string, string, string\)

Creates a new Dimension property and adds it to the collection

```csharp
public virtual Property Add(string Name, string Caption, string DataType)
```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the property

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

Caption of the property

`DataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Data type of the property

#### Returns

 [Property](ERPConnect.BW.Property.md)

The newly created Property object

### <a id="ERPConnect_BW_PropertyCollection_Contains_System_String_"></a> Contains\(string\)

Checks, if there's a property with the name contained in the collection

```csharp
public virtual bool Contains(string Name)
```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the property

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true / false

### <a id="ERPConnect_BW_PropertyCollection_TryGetValue_System_String_ERPConnect_BW_Property__"></a> TryGetValue\(string, out Property\)

```csharp
public bool TryGetValue(string name, out Property value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [Property](ERPConnect.BW.Property.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

