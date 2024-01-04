
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnectStandard20.dll  

A collection of BWDimension objects

```csharp
public class DimensionCollection : CollectionBase, IList, ICollection, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CollectionBase](https://learn.microsoft.com/dotnet/api/system.collections.collectionbase) ← 
[DimensionCollection](ERPConnect.BW.DimensionCollection.md)

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

### <a id="ERPConnect_BW_DimensionCollection__ctor"></a> DimensionCollection\(\)

Constructs a new DimensionCollection object

```csharp
public DimensionCollection()
```

## Properties

### <a id="ERPConnect_BW_DimensionCollection_Item_System_Int32_"></a> this\[int\]

Returns a BWDimension object at a given position

```csharp
public virtual Dimension this[int Index] { get; set; }
```

#### Property Value

 [Dimension](ERPConnect.BW.Dimension.md)

### <a id="ERPConnect_BW_DimensionCollection_Item_System_String_"></a> this\[string\]

Returns a BWDimension object for a given name

```csharp
public virtual Dimension this[string UniqueName] { get; set; }
```

#### Property Value

 [Dimension](ERPConnect.BW.Dimension.md)

## Methods

### <a id="ERPConnect_BW_DimensionCollection_Add_ERPConnect_BW_Dimension_"></a> Add\(Dimension\)

Adds an existing BWDimension object to the collection

```csharp
public virtual void Add(Dimension NewParameter)
```

#### Parameters

`NewParameter` [Dimension](ERPConnect.BW.Dimension.md)

The BWDimension object to be added

### <a id="ERPConnect_BW_DimensionCollection_Add_ERPConnect_R3Connection_ERPConnect_BW_BWCube_System_String_System_String_System_String_System_String_ERPConnect_BW_DimensionType_"></a> Add\(R3Connection, BWCube, string, string, string, string, DimensionType\)

Creates a new BWDimension object and adds it to the collection

```csharp
public virtual Dimension Add(R3Connection Connection, BWCube Cube, string Name, string UniqueName, string Description, string Caption, DimensionType Type)
```

#### Parameters

`Connection` [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

A valid connection object

`Cube` [BWCube](ERPConnect.BW.BWCube.md)

A BWCube object

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the dimension

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique name of the dimension

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The description of the dimension

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

The caption of the dimension

`Type` [DimensionType](ERPConnect.BW.DimensionType.md)

The type of the dimension (measure, normal or time)

#### Returns

 [Dimension](ERPConnect.BW.Dimension.md)

The BWDimension object that is created and added to the collection

### <a id="ERPConnect_BW_DimensionCollection_Add_ERPConnect_R3Connection_ERPConnect_BW_BWCube_System_String_System_String_System_String_System_String_ERPConnect_BW_DimensionType_System_String_System_Int32_"></a> Add\(R3Connection, BWCube, string, string, string, string, DimensionType, string, int\)

Creates a new BWDimension object and adds it to the collection

```csharp
public virtual Dimension Add(R3Connection Connection, BWCube Cube, string Name, string UniqueName, string Description, string Caption, DimensionType Type, string DataType, int Decimals)
```

#### Parameters

`Connection` [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

A valid connection object

`Cube` [BWCube](ERPConnect.BW.BWCube.md)

A BWCube object

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the dimension

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique name of the dimension

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The description of the dimension

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

The caption of the dimension

`Type` [DimensionType](ERPConnect.BW.DimensionType.md)

The type of the dimension (measure, normal or time)

`DataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The data type of the dimension (e.g. CHAR)

`Decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of decimals digits (if the DataType is DEC)

#### Returns

 [Dimension](ERPConnect.BW.Dimension.md)

The BWDimension object that is created and added to the collection

### <a id="ERPConnect_BW_DimensionCollection_ContainsDimension_System_String_"></a> ContainsDimension\(string\)

Detects if the diemnsion with a given name is contained in the collection

```csharp
public bool ContainsDimension(string DimensionName)
```

#### Parameters

`DimensionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the dimension to be looked up for

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true / false depending if the dimension is already added to the collection

### <a id="ERPConnect_BW_DimensionCollection_Insert_System_Int32_ERPConnect_BW_Dimension_"></a> Insert\(int, Dimension\)

Inserts an existing BWDimension object to the collection

```csharp
public virtual void Insert(int Index, Dimension NewParameter)
```

#### Parameters

`Index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index where the object should be added at

`NewParameter` [Dimension](ERPConnect.BW.Dimension.md)

The BWDimension object to be added

### <a id="ERPConnect_BW_DimensionCollection_Remove_System_String_"></a> Remove\(string\)

```csharp
public void Remove(string DimensionName)
```

#### Parameters

`DimensionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_DimensionCollection_TryGetValue_System_String_ERPConnect_BW_Dimension__"></a> TryGetValue\(string, out Dimension\)

```csharp
public bool TryGetValue(string uniqueName, out Dimension value)
```

#### Parameters

`uniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [Dimension](ERPConnect.BW.Dimension.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

