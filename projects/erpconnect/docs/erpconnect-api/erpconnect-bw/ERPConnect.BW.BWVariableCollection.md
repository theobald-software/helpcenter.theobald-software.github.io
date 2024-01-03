
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnect35.dll  

A class that holds a set of BWVariable objects

```csharp
public class BWVariableCollection : CollectionBase, IList, ICollection, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← 
[BWVariableCollection](ERPConnect.BW.BWVariableCollection.md)

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

### <a id="ERPConnect_BW_BWVariableCollection__ctor"></a> BWVariableCollection\(\)

Constructs a new BWVariableCollection object

```csharp
public BWVariableCollection()
```

## Properties

### <a id="ERPConnect_BW_BWVariableCollection_Item_System_Int32_"></a> this\[int\]

Returns the BWVariable object at a given index

```csharp
public virtual BWVariable this[int Index] { get; set; }
```

#### Property Value

 [BWVariable](ERPConnect.BW.BWVariable.md)

### <a id="ERPConnect_BW_BWVariableCollection_Item_System_String_"></a> this\[string\]

Returns the BWVariable object with the given name

```csharp
public virtual BWVariable this[string Name] { get; set; }
```

#### Property Value

 [BWVariable](ERPConnect.BW.BWVariable.md)

## Methods

### <a id="ERPConnect_BW_BWVariableCollection_Add_ERPConnect_BW_BWVariable_"></a> Add\(BWVariable\)

Adds a new BWVariable object to the collection

```csharp
public virtual void Add(BWVariable NewParameter)
```

#### Parameters

`NewParameter` [BWVariable](ERPConnect.BW.BWVariable.md)

A new BWVariable object

### <a id="ERPConnect_BW_BWVariableCollection_Add_ERPConnect_BW_BWCube_System_String_System_String_System_String_System_Boolean_ERPConnect_BW_BWVariableSelectionType_System_String_ERPConnect_BW_BWVariableType_"></a> Add\(BWCube, string, string, string, bool, BWVariableSelectionType, string, BWVariableType\)

Adds a new BWVariable object to the collection

```csharp
public virtual BWVariable Add(BWCube Cube, string Name, string Caption, string DataType, bool Required, BWVariableSelectionType SelectionType, string ReferenceDimensionName, BWVariableType Type)
```

#### Parameters

`Cube` [BWCube](ERPConnect.BW.BWCube.md)

Reference to the cube the variable is belonging to

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the variable

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

Caption or description of the variable

`DataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

DataType of the variable

`Required` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Defines if this variable is obligatory or not

`SelectionType` [BWVariableSelectionType](ERPConnect.BW.BWVariableSelectionType.md)

Defines the type of the variable (complex, single or interval)

`ReferenceDimensionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Defines which dimension this variable refers to

`Type` [BWVariableType](ERPConnect.BW.BWVariableType.md)

Defines if the variable is numeric, member or hierarchy

#### Returns

 [BWVariable](ERPConnect.BW.BWVariable.md)

The new BWVariable object

### <a id="ERPConnect_BW_BWVariableCollection_Insert_System_Int32_ERPConnect_BW_BWVariable_"></a> Insert\(int, BWVariable\)

Insert a BWVariable object into the collection at a given index

```csharp
public virtual void Insert(int Index, BWVariable NewParameter)
```

#### Parameters

`Index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The ordinal number where the BWVariable object is to be inserted at

`NewParameter` [BWVariable](ERPConnect.BW.BWVariable.md)

The BWVariable object to be inserted

### <a id="ERPConnect_BW_BWVariableCollection_Remove_System_String_"></a> Remove\(string\)

```csharp
public virtual void Remove(string Name)
```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_BWVariableCollection_ToString"></a> ToString\(\)

Converts the object to a string

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The string

### <a id="ERPConnect_BW_BWVariableCollection_TryGetValue_System_String_ERPConnect_BW_BWVariable__"></a> TryGetValue\(string, out BWVariable\)

```csharp
public bool TryGetValue(string name, out BWVariable value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [BWVariable](ERPConnect.BW.BWVariable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

