Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Represents an SAP posting period (DDIC type ACCP).

```csharp
public readonly struct AbapPostingPeriod

```

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### AbapPostingPeriod(in ushort, in byte)

```csharp
public AbapPostingPeriod(in ushort year, in byte month)

```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`month` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Properties

### InitialValue

Gets a constant value representing the initial value (ABAP string 000000).

```csharp
public static AbapPostingPeriod InitialValue { get; }

```

#### Property Value

[AbapPostingPeriod](./)

### MaxValue

Gets the maximum representable posting period (9999-12).

```csharp
public static AbapPostingPeriod MaxValue { get; }

```

#### Property Value

[AbapPostingPeriod](./)

### MinValue

Gets the minimum representable posting period (0001-01).

```csharp
public static AbapPostingPeriod MinValue { get; }

```

#### Property Value

[AbapPostingPeriod](./)

### Month

```csharp
public byte Month { get; }

```

#### Property Value

[byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Year

```csharp
public ushort Year { get; }

```

#### Property Value

[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### Parse(in string)

```csharp
public static AbapPostingPeriod Parse(in string abapString)

```

#### Parameters

`abapString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[AbapPostingPeriod](./)

### ToDateTime()

```csharp
public DateTime? ToDateTime()

```

#### Returns

[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

### ToString()

```csharp
public override string ToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### UtcToday()

Gets an `ERPConnect.AbapPostingPeriod` representing the current date (UTC).

```csharp
public static AbapPostingPeriod UtcToday()

```

#### Returns

[AbapPostingPeriod](./)
