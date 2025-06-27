Namespace: [ERPConnect.BW](../)\
Assembly: ERPConnectStandard20.dll

A cube dimension's property

```csharp
public class Property

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Property](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Property()

Constructs a new Property object

```csharp
public Property()

```

### Property(string, string, string)

Constructs a new Property object

```csharp
public Property(string Name, string Caption, string DataType)

```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the property

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

Caption of the property

`DataType` [string](https://learn.microsoft.com/dotnet/api/system.string)

SAP data type of the property (e.g. CHAR)

## Properties

### Caption

Caption of the property

```csharp
public string Caption { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### DataType

The SAP data type of the property (e.g. CHAR)

```csharp
public string DataType { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### FlatOrdinal

The ordinal number of the property when using FlatMDX process

```csharp
public int FlatOrdinal { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

Name of the property

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SelectForFlatMDX

Set to true to have this property as column in the output of the FlatMDX process

```csharp
public bool SelectForFlatMDX { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)
