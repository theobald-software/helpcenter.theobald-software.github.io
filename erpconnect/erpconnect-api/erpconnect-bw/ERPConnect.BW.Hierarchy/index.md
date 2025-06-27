Namespace: [ERPConnect.BW](../)\
Assembly: ERPConnectStandard20.dll

This class represents a SAP BW Hierarchy

```csharp
public class Hierarchy

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Hierarchy](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Hierarchy()

Constructs a new, empty BW Hierarchy

```csharp
public Hierarchy()

```

### Hierarchy(Dimension, string, string, string)

Constructs a new BW Hierarchy

```csharp
public Hierarchy(Dimension Dimension, string Name, string UniqueName, string Caption)

```

#### Parameters

`Dimension` [Dimension](../ERPConnect.BW.Dimension/)

Reference of the Dimension this hierarchy belongs to

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the hierarchy

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Unique name of the hierarchy

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

A brief description text

## Properties

### Caption

A brief description text

```csharp
public string Caption { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Dimension

Reference of the cube this hierarchy belongs to

```csharp
public Dimension Dimension { get; set; }

```

#### Property Value

[Dimension](../ERPConnect.BW.Dimension/)

### Levels

A collection of levels

```csharp
public HierarchyLevelCollection Levels { get; set; }

```

#### Property Value

[HierarchyLevelCollection](../ERPConnect.BW.HierarchyLevelCollection/)

### Name

Name of the hierarchy

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SelectForFlatMDX

Defines if this hierarchy is contained in the flat mdx functionality

```csharp
public bool SelectForFlatMDX { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UniqueName

Unique name of the hierarchy

```csharp
public string UniqueName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
