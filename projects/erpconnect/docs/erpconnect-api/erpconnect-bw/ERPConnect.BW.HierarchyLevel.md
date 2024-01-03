
Namespace: [ERPConnect.BW](index.md)  
Assembly: ERPConnect35.dll  

This class represents a SAP BW Hierarchy Level

```csharp
public class HierarchyLevel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HierarchyLevel](ERPConnect.BW.HierarchyLevel.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_BW_HierarchyLevel__ctor"></a> HierarchyLevel\(\)

Constructs a new, empty BW Hierarchy

```csharp
public HierarchyLevel()
```

### <a id="ERPConnect_BW_HierarchyLevel__ctor_ERPConnect_BW_Hierarchy_System_String_System_String_System_String_"></a> HierarchyLevel\(Hierarchy, string, string, string\)

Constructs a new BW Hierarchy Level

```csharp
public HierarchyLevel(Hierarchy Hierarchy, string Name, string UniqueName, string Caption)
```

#### Parameters

`Hierarchy` [Hierarchy](ERPConnect.BW.Hierarchy.md)

Reference of the Hierarchy this level belongs to

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the hierarchy

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Unique name of the hierarchy

`Caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

A brief description text

## Properties

### <a id="ERPConnect_BW_HierarchyLevel_Caption"></a> Caption

A brief description text

```csharp
public string Caption { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_HierarchyLevel_Hierarchy"></a> Hierarchy

Reference of the cube this hierarchy belongs to

```csharp
public Hierarchy Hierarchy { get; set; }
```

#### Property Value

 [Hierarchy](ERPConnect.BW.Hierarchy.md)

### <a id="ERPConnect_BW_HierarchyLevel_Name"></a> Name

Name of the hierarchy

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_BW_HierarchyLevel_UniqueName"></a> UniqueName

Unique name of the hierarchy

```csharp
public string UniqueName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

