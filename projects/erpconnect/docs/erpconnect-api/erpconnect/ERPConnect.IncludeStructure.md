
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

Represents an include structure within a structure

```csharp
public sealed class IncludeStructure
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IncludeStructure](ERPConnect.IncludeStructure.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### <a id="ERPConnect_IncludeStructure__ctor_System_Int32_System_String_System_Int32_"></a> IncludeStructure\(int, string, int\)

Initializes a new instance of the IncludeStructure class

```csharp
public IncludeStructure(int firstElementIndex, string structureName, int elementsCount)
```

#### Parameters

`firstElementIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

First element of the include structure

`structureName` [string](https://learn.microsoft.com/dotnet/api/system.string)

DDIC name of the include structure

`elementsCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of elements of the include structure

## Properties

### <a id="ERPConnect_IncludeStructure_ElementsCount"></a> ElementsCount

Gets the number of elements of the include structure

```csharp
public int ElementsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_IncludeStructure_FirstElementIndex"></a> FirstElementIndex

Gets the index of the first element of the include structure

```csharp
public int FirstElementIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_IncludeStructure_LastElementIndex"></a> LastElementIndex

Gets the index of the last element of the include structure

```csharp
public int LastElementIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_IncludeStructure_StructureName"></a> StructureName

Gets the DDIC name of the include structure

```csharp
public string StructureName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

