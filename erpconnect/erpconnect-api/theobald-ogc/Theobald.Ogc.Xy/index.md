Namespace: [Theobald.Ogc](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public readonly struct Xy : IWellKnownSerializable<Xy>

```

#### Implements

[IWellKnownSerializable<Xy>](../Theobald.Ogc.IWellKnownSerializable-1/)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Xy(in double, in double)

```csharp
public Xy(in double x, in double y)

```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### WkbDimensions

```csharp
public WkbDimensions WkbDimensions { get; }

```

#### Property Value

[WkbDimensions](../Theobald.Ogc.WkbDimensions/)

### X

```csharp
public double X { get; }

```

#### Property Value

[double](https://learn.microsoft.com/dotnet/api/system.double)

### Y

```csharp
public double Y { get; }

```

#### Property Value

[double](https://learn.microsoft.com/dotnet/api/system.double)

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

### FromBinary(in EwkbReader, out Xy)

```csharp
public static EwkbReader FromBinary(in EwkbReader reader, out Xy xy)

```

#### Parameters

`reader` [EwkbReader](../Theobald.Ogc.EwkbReader/)

`xy` [Xy](./)

#### Returns

[EwkbReader](../Theobald.Ogc.EwkbReader/)

### Read(in EwkbReader, out Xy)

```csharp
public EwkbReader Read(in EwkbReader reader, out Xy xy)

```

#### Parameters

`reader` [EwkbReader](../Theobald.Ogc.EwkbReader/)

`xy` [Xy](./)

#### Returns

[EwkbReader](../Theobald.Ogc.EwkbReader/)
