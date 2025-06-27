Namespace: [ERPConnect.BW](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public class MDXExecuter

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [MDXExecuter](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### MDXExecuter(R3Connection)

Constructs a MDXExecuter object

```csharp
public MDXExecuter(R3Connection Connection)

```

#### Parameters

`Connection` [R3Connection](../../erpconnect/ERPConnect.R3Connection/)

Reference to a valid R3Connection object

## Properties

### Connection

Reference to a valid R3Connection object

```csharp
public R3Connection Connection { get; set; }

```

#### Property Value

[R3Connection](../../erpconnect/ERPConnect.R3Connection/)

### MDX

MDX statement

```csharp
public string MDX { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MaxRows

Number of rows to maximal retrieved.

```csharp
public int MaxRows { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### PackageSize

Defines if the result is fetched in more than one data packet (set PackageSize to greater 0 to enable packaging)

```csharp
public int PackageSize { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Result

Contains the resultset of the MDX execution

```csharp
public DataTable Result { get; }

```

#### Property Value

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

### UnitsInResultset

Gets or sets a value indicating whether the units of a measure are output into a separated column in the resultset

```csharp
public bool UnitsInResultset { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseFlattening

For internal use only! Do not use!!!!!

```csharp
public bool UseFlattening { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseFormattedValue

Defines whether the formatted value or the technical should be used (this can defined in BEX analyzer)

```csharp
public bool UseFormattedValue { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseMemberUniqueNamesInsteadOfCaption

For internal use only! Do not use!!!!!

```csharp
public bool UseMemberUniqueNamesInsteadOfCaption { get; set; }

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

## Methods

### Execute()

Executes the current MDX statement and fills the Result table

```csharp
public void Execute()

```

### DebuggingDetails

```csharp
public event MDXExecuter.OnDebuggingDetails DebuggingDetails

```

#### Event Type

[MDXExecuter](./).[OnDebuggingDetails](../ERPConnect.BW.MDXExecuter.OnDebuggingDetails/)

### IncomingPackage

IncomingPackage is fired, when addtional data packages are fetched from SAP.

```csharp
public event MDXExecuter.OnIncomingPackage IncomingPackage

```

#### Event Type

[MDXExecuter](./).[OnIncomingPackage](../ERPConnect.BW.MDXExecuter.OnIncomingPackage/)
