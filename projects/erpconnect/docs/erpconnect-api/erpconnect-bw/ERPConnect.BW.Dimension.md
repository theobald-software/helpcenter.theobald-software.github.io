
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnect35.dll  

A cube's dimension

```csharp
public class Dimension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dimension](ERPConnect.BW.Dimension.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_BW_Dimension__ctor"></a> Dimension\(\)

Constructs a new, empty dimension

```csharp
public Dimension()
```

### <a id="ERPConnect_BW_Dimension__ctor_ERPConnect_R3Connection_ERPConnect_BW_BWCube_System_String_System_String_System_String_System_String_ERPConnect_BW_DimensionType_"></a> Dimension\(R3Connection, BWCube, string, string, string, string, DimensionType\)

Constructs a new dimension that is ready to use

```csharp
public Dimension(R3Connection Connection, BWCube Cube, string Name, string UniqueName, string Description, string Caption, DimensionType Type)
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

### <a id="ERPConnect_BW_Dimension__ctor_ERPConnect_R3Connection_ERPConnect_BW_BWCube_System_String_System_String_System_String_System_String_ERPConnect_BW_DimensionType_System_String_System_Int32_"></a> Dimension\(R3Connection, BWCube, string, string, string, string, DimensionType, string, int\)

Constructs a new dimension that is ready to use

```csharp
public Dimension(R3Connection Connection, BWCube Cube, string Name, string UniqueName, string Description, string Caption, DimensionType Type, string DataType, int Decimals)
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

## Properties

### <a id="ERPConnect_BW_Dimension_Caption"></a> Caption

The caption of the dimension

```csharp
public string Caption { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_Dimension_Connection"></a> Connection

A valid connection object

```csharp
public R3Connection Connection { get; set; }
```

#### Property Value

 [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

### <a id="ERPConnect_BW_Dimension_Cube"></a> Cube

Reference to the BWCube object the dimension belongs to

```csharp
public BWCube Cube { get; set; }
```

#### Property Value

 [BWCube](ERPConnect.BW.BWCube.md)

### <a id="ERPConnect_BW_Dimension_DataType"></a> DataType

The data type of the dimension (e.g. CHAR)

```csharp
public string DataType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_Dimension_Decimals"></a> Decimals

The number of decimals digits (if the DataType is DEC)

```csharp
public int Decimals { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_BW_Dimension_Description"></a> Description

The description of the dimension

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_Dimension_FlatOrdinal"></a> FlatOrdinal

The ordinal number of this dimension when the dimension is contained in the flat mdx statement

```csharp
public int FlatOrdinal { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_BW_Dimension_Hierarchies"></a> Hierarchies

A reference to the Hierarchies collection, if this dimension contains hierarchies

```csharp
public HierarchyCollection Hierarchies { get; set; }
```

#### Property Value

 [HierarchyCollection](ERPConnect.BW.HierarchyCollection.md)

### <a id="ERPConnect_BW_Dimension_IsBWDate"></a> IsBWDate

True if it is a Field of type BW Date

```csharp
public bool IsBWDate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_BW_Dimension_Name"></a> Name

The name of the dimension

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_Dimension_Properties"></a> Properties

A reference to the Properties collection of this dimension

```csharp
public PropertyCollection Properties { get; set; }
```

#### Property Value

 [PropertyCollection](ERPConnect.BW.PropertyCollection.md)

### <a id="ERPConnect_BW_Dimension_SelectForFlatMDX"></a> SelectForFlatMDX

Defines if this dimension is contained in the flat mdx functionality

```csharp
public bool SelectForFlatMDX { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_BW_Dimension_Type"></a> Type

The type of the dimension (measure, normal or time)

```csharp
public DimensionType Type { get; set; }
```

#### Property Value

 [DimensionType](ERPConnect.BW.DimensionType.md)

### <a id="ERPConnect_BW_Dimension_UniqueName"></a> UniqueName

The unique name of the dimension

```csharp
public string UniqueName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="ERPConnect_BW_Dimension_GetMembers"></a> GetMembers\(\)

Returns a DataTable object with all members of the dimension

```csharp
public MembersDataTable GetMembers()
```

#### Returns

 [MembersDataTable](ERPConnect.BW.MembersDataTable.md)

A DataTable with the members of the dimension

### <a id="ERPConnect_BW_Dimension_GetMembers_System_Int32_System_Int32_"></a> GetMembers\(int, int\)

Returns a DataTable object with all members of the dimension

```csharp
public MembersDataTable GetMembers(int StartRow, int EndRow)
```

#### Parameters

`StartRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Start row

`EndRow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

End row

#### Returns

 [MembersDataTable](ERPConnect.BW.MembersDataTable.md)

A DataTable with the members of the dimension

