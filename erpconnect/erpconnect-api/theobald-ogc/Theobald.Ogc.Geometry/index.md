Namespace: [Theobald.Ogc](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public abstract class Geometry

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Geometry](./)

#### Derived

[Geometry<T>](../Theobald.Ogc.Geometry-1/)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Geometry(in Srid?)

```csharp
protected Geometry(in Srid? srid)

```

#### Parameters

`srid` [Srid](../Theobald.Ogc.Srid/)?

## Properties

### Srid

```csharp
public Srid? Srid { get; }

```

#### Property Value

[Srid](../Theobald.Ogc.Srid/)?

### WkbDimensions

```csharp
public abstract WkbDimensions WkbDimensions { get; }

```

#### Property Value

[WkbDimensions](../Theobald.Ogc.WkbDimensions/)

### WkbGeometryType

```csharp
public abstract WkbGeometryType WkbGeometryType { get; }

```

#### Property Value

[WkbGeometryType](../Theobald.Ogc.WkbGeometryType/)

### WktGeometryTag

```csharp
public abstract string WktGeometryTag { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AsBinary(in EwkbWriter)

```csharp
public abstract EwkbWriter AsBinary(in EwkbWriter writer)

```

#### Parameters

`writer` [EwkbWriter](../Theobald.Ogc.EwkbWriter/)

#### Returns

[EwkbWriter](../Theobald.Ogc.EwkbWriter/)

### AsText(in StringBuilder)

```csharp
public abstract void AsText(in StringBuilder builder)

```

#### Parameters

`builder` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### FromBinary(in byte[])

```csharp
public static Geometry FromBinary(in byte[] ewkb)

```

#### Parameters

`ewkb` [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

#### Returns

[Geometry](./)

### Read(in EwkbReader)

```csharp
protected abstract Geometry Read(in EwkbReader reader)

```

#### Parameters

`reader` [EwkbReader](../Theobald.Ogc.EwkbReader/)

#### Returns

[Geometry](./)

### ToBinary(in WkbByteOrder)

```csharp
public byte[] ToBinary(in WkbByteOrder byteOrder)

```

#### Parameters

`byteOrder` [WkbByteOrder](../Theobald.Ogc.WkbByteOrder/)

#### Returns

[byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### ToString()

```csharp
public override string ToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### WithoutSrid()

```csharp
public abstract Geometry WithoutSrid()

```

#### Returns

[Geometry](./)
