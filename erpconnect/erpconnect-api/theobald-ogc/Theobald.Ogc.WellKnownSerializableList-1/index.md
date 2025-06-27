Namespace: [Theobald.Ogc](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public sealed class WellKnownSerializableList<T> : IWellKnownSerializable<WellKnownSerializableList<T>> where T : IWellKnownSerializable<T>, new()

```

#### Type Parameters

`T`

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [WellKnownSerializableList<T>](./)

#### Implements

[IWellKnownSerializable\<WellKnownSerializableList<T>>](../Theobald.Ogc.IWellKnownSerializable-1/)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### WellKnownSerializableList(in IEnumerable<T>)

```csharp
public WellKnownSerializableList(in IEnumerable<T> items)

```

#### Parameters

`items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T>

### WellKnownSerializableList()

```csharp
public WellKnownSerializableList()

```

## Properties

### WkbDimensions

```csharp
public WkbDimensions WkbDimensions { get; }

```

#### Property Value

[WkbDimensions](../Theobald.Ogc.WkbDimensions/)

## Methods

### AsBinary(in EwkbWriter)

```csharp
public EwkbWriter AsBinary(in EwkbWriter writer)

```

#### Parameters

`writer` [EwkbWriter](../Theobald.Ogc.EwkbWriter/)

#### Returns

[EwkbWriter](../Theobald.Ogc.EwkbWriter/)

### AsText(in StringBuilder)

```csharp
public void AsText(in StringBuilder builder)

```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### Read(in EwkbReader, out WellKnownSerializableList<T>)

```csharp
public EwkbReader Read(in EwkbReader reader, out WellKnownSerializableList<T> t)

```

#### Parameters

`reader` [EwkbReader](../Theobald.Ogc.EwkbReader/)

`t` [WellKnownSerializableList](./)<T>

#### Returns

[EwkbReader](../Theobald.Ogc.EwkbReader/)
