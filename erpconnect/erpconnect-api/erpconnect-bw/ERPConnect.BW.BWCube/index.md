Namespace: [ERPConnect.BW](../)\
Assembly: ERPConnectStandard20.dll

BWCube represents a BW Cube to extract data from

```csharp
public class BWCube

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [BWCube](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### BWCube(R3Connection)

Constructs a BWCube object

```csharp
public BWCube(R3Connection connection)

```

#### Parameters

`connection` [R3Connection](../../erpconnect/ERPConnect.R3Connection/)

Reference to a valid R3Connection object

## Properties

### AdjustFlatOutputColumnsOrdinal

DO NOT USE!!! FOR INTERNAL USE ONLY!!!!

```csharp
public bool AdjustFlatOutputColumnsOrdinal { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Connection

Reference to a valid R3Connection object

```csharp
public R3Connection Connection { get; set; }

```

#### Property Value

[R3Connection](../../erpconnect/ERPConnect.R3Connection/)

### Dimensions

This collection repesents all dimensions of the BW Cube / BW Query

```csharp
public DimensionCollection Dimensions { get; set; }

```

#### Property Value

[DimensionCollection](../ERPConnect.BW.DimensionCollection/)

### Measures

This collection repesents all measures of the BW Cube / BW Query

```csharp
public DimensionCollection Measures { get; set; }

```

#### Property Value

[DimensionCollection](../ERPConnect.BW.DimensionCollection/)

### Name

Name of the cube

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### PackageSize

Determines if the data should be retreived in packages and if so, how many rows should be in one package

```csharp
public int PackageSize { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseFormattedValue

Determines if the data should be formatted as defined in the query designer (e.g. number of decimals or factor)

```csharp
public bool UseFormattedValue { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseNewOlapBapis

Gets or sets a value indicating whether the new OLAP BAPIs should be used for the extraction (see SAP note 1232751)

```csharp
public bool UseNewOlapBapis { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Variables

This collection repesents all variables of the BW Query

```csharp
public BWVariableCollection Variables { get; set; }

```

#### Property Value

[BWVariableCollection](../ERPConnect.BW.BWVariableCollection/)

## Methods

### CreateCube(string)

Constructs a BWCube object with all its dimensions, properties and measures

```csharp
public void CreateCube(string cubeName)

```

#### Parameters

`cubeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the Cube or Query Cube (e.g. 0D_DECU or 0D_DECU/VARDEMO01)

### Execute()

Executes the cube / query extraction

```csharp
public DataTable Execute()

```

#### Returns

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

DataTable object with flat result

### GetFlatMDX()

Returns a MDX string that represents the query for the cube's data

```csharp
public string GetFlatMDX()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

A MDX string

### LoadFromXML(string)

Load a BWCube object hierachy from an XML file

```csharp
public void LoadFromXML(string FileName)

```

#### Parameters

`FileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filename

### LoadFromXML(StreamReader)

Load a BWCube object hierachy from an XML file

```csharp
public void LoadFromXML(StreamReader reader)

```

#### Parameters

`reader` [StreamReader](https://learn.microsoft.com/dotnet/api/system.io.streamreader)

StreamReader to XML resource

### LoadFromXMLString(string)

Load a BWCube object hierachy from an XML string

```csharp
public void LoadFromXMLString(string XMLString)

```

#### Parameters

`XMLString` [string](https://learn.microsoft.com/dotnet/api/system.string)

XML string

### RefreshMetaData()

```csharp
public void RefreshMetaData()

```

### RefreshMetaData(bool)

For internal use only

```csharp
public void RefreshMetaData(bool onlyStructures)

```

#### Parameters

`onlyStructures` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SaveToXML(string)

Saves the current object to XML

```csharp
public void SaveToXML(string Filename)

```

#### Parameters

`Filename` [string](https://learn.microsoft.com/dotnet/api/system.string)

File name

### SaveToXML()

Saves the current object to XML

```csharp
public string SaveToXML()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

A string which contains the XML file

### SelectAllForFlatMDX()

Do not use! For internal use only

```csharp
public void SelectAllForFlatMDX()

```

### SetBWDateFlags()

For internal use only

```csharp
public void SetBWDateFlags()

```

### ToString()

Returns an object description text

```csharp
public override string ToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

Object description text

### IncomingPackage

IncomingPackage is fired, when addtional data packages are fetched from SAP.

```csharp
public event BWCube.OnIncomingPackage IncomingPackage

```

#### Event Type

[BWCube](./).[OnIncomingPackage](../ERPConnect.BW.BWCube.OnIncomingPackage/)
