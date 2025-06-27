Namespace: [Theobald.Ogc](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public interface IWellKnownSerializable<T>

```

#### Type Parameters

`T`

## Properties

### WkbDimensions

```csharp
WkbDimensions WkbDimensions { get; }

```

#### Property Value

[WkbDimensions](../Theobald.Ogc.WkbDimensions/)

## Methods

### AsBinary(in EwkbWriter)

```csharp
EwkbWriter AsBinary(in EwkbWriter writer)

```

#### Parameters

`writer` [EwkbWriter](../Theobald.Ogc.EwkbWriter/)

#### Returns

[EwkbWriter](../Theobald.Ogc.EwkbWriter/)

### AsText(in StringBuilder)

```csharp
void AsText(in StringBuilder builder)

```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### Read(in EwkbReader, out T)

```csharp
EwkbReader Read(in EwkbReader reader, out T t)

```

#### Parameters

`reader` [EwkbReader](../Theobald.Ogc.EwkbReader/)

`t` T

#### Returns

[EwkbReader](../Theobald.Ogc.EwkbReader/)
