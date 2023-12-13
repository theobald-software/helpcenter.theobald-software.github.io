
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnect35.dll  

This class represents a SAP BW Hierarchy

```csharp
public class Hierarchy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Hierarchy](ERPConnect.BW.Hierarchy.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_BW_Hierarchy__ctor"></a> Hierarchy\(\)

Constructs a new, empty BW Hierarchy

```csharp
public Hierarchy()
```

### <a id="ERPConnect_BW_Hierarchy__ctor_ERPConnect_BW_Dimension_System_String_System_String_System_String_"></a> Hierarchy\(Dimension, string, string, string\)

Constructs a new BW Hierarchy

```csharp
public Hierarchy(Dimension Dimension, string Name, string UniqueName, string Caption)
```

#### Parameters

`Dimension` [Dimension](ERPConnect.BW.Dimension.md)

Reference of the Dimension this hierarchy belongs to

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the hierarchy

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Unique name of the hierarchy

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

A brief description text

## Properties

### <a id="ERPConnect_BW_Hierarchy_Caption"></a> Caption

A brief description text

```csharp
public string Caption { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_Hierarchy_Dimension"></a> Dimension

Reference of the cube this hierarchy belongs to

```csharp
public Dimension Dimension { get; set; }
```

#### Property Value

 [Dimension](ERPConnect.BW.Dimension.md)

### <a id="ERPConnect_BW_Hierarchy_Levels"></a> Levels

A collection of levels

```csharp
public HierarchyLevelCollection Levels { get; set; }
```

#### Property Value

 [HierarchyLevelCollection](ERPConnect.BW.HierarchyLevelCollection.md)

### <a id="ERPConnect_BW_Hierarchy_Name"></a> Name

Name of the hierarchy

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_Hierarchy_SelectForFlatMDX"></a> SelectForFlatMDX

Defines if this hierarchy is contained in the flat mdx functionality

```csharp
public bool SelectForFlatMDX { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_BW_Hierarchy_UniqueName"></a> UniqueName

Unique name of the hierarchy

```csharp
public string UniqueName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

