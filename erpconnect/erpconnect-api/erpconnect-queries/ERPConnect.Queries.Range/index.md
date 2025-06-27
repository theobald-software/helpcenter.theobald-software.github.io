Namespace: [ERPConnect.Queries](../)\
Assembly: ERPConnectStandard20.dll

QuerySelectionRange.

```csharp
public class Range

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Range](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### Range()

Constructs a new Range object

```csharp
public Range()

```

### Range(Sign, RangeOption, string, string)

Constructs a new Range object

```csharp
public Range(Sign Sign, RangeOption Option, string LowValue, string HighValue)

```

#### Parameters

`Sign` [Sign](../ERPConnect.Queries.Sign/)

Sign (e.g. Include)

`Option` [RangeOption](../ERPConnect.Queries.RangeOption/)

Option (e.g. Between)

`LowValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The low value of this Range object

`HighValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The high value of this Range object

## Properties

### HighValue

The high value of this Range object

```csharp
public string HighValue { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LowValue

The low value of this Range object

```csharp
public string LowValue { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Option

Option (e.g. Between)

```csharp
public RangeOption Option { get; set; }

```

#### Property Value

[RangeOption](../ERPConnect.Queries.RangeOption/)

### Sign

Sign (e.g. Include)

```csharp
public Sign Sign { get; set; }

```

#### Property Value

[Sign](../ERPConnect.Queries.Sign/)
