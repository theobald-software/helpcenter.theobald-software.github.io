Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Represents an include structure within a structure

```csharp
public sealed class IncludeStructure

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [IncludeStructure](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### IncludeStructure(int, string, int)

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

### ElementsCount

Gets the number of elements of the include structure

```csharp
public int ElementsCount { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### FirstElementIndex

Gets the index of the first element of the include structure

```csharp
public int FirstElementIndex { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastElementIndex

Gets the index of the last element of the include structure

```csharp
public int LastElementIndex { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### StructureName

Gets the DDIC name of the include structure

```csharp
public string StructureName { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
