Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Represents an SAP timestamp, similar to `System.DateTime`. Accuracy is ticks (100 nanoseconds). Both packed numbers (data elements TIMESTAMP, TIMESTAMPL) and native (type utclong) representations are supported.

```csharp
public readonly struct AbapTimestamp : IComparable, IComparable<AbapTimestamp>, IEquatable<AbapTimestamp>

```

#### Implements

[IComparable](https://learn.microsoft.com/dotnet/api/system.icomparable), [IComparable<AbapTimestamp>](https://learn.microsoft.com/dotnet/api/system.icomparable-1), [IEquatable<AbapTimestamp>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

The Julian calendar is used from 0001-01-01 to 1582-10-04. The Gregorian calendar is used from 1582-10-15. The date range from 1582-10-05 to 1582-10-14 is invalid.

## Constructors

### AbapTimestamp(in ulong)

Initializes a new instance of `ERPConnect.AbapTimestamp` from total ticks (100 nanoseconds passed since 01.01.0001).

```csharp
public AbapTimestamp(in ulong ticks)

```

#### Parameters

`ticks` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Ticks are outside the valid min or max range

### AbapTimestamp(in ushort, in byte, in byte)

Initializes a new instance of `ERPConnect.AbapTimestamp` using a 1-based year, month and day.

```csharp
public AbapTimestamp(in ushort year, in byte month, in byte day)

```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`month` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`day` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The date is invalid. e.g. month 13 or 29.02. in any other year than a leap year.

### AbapTimestamp(in ushort, in byte, in byte, in TimeSpan)

Initializes a new instance of `ERPConnect.AbapTimestamp` using a 1-based year, month, day and the time of day.

```csharp
public AbapTimestamp(in ushort year, in byte month, in byte day, in TimeSpan time)

```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`month` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`day` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`time` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

#### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The date is invalid. e.g. month 13 or 29.02. in any other year than a leap year.

## Properties

### Day

Gets the current day in currently represented `ERPConnect.AbapTimestamp.Month` and `ERPConnect.AbapTimestamp.Year`.

```csharp
public byte Day { get; }

```

#### Property Value

[byte](https://learn.microsoft.com/dotnet/api/system.byte)

### InitialValue

Gets a constant value representing the initial value (0 ticks).

```csharp
public static AbapTimestamp InitialValue { get; }

```

#### Property Value

[AbapTimestamp](./)

### MaxValue

Gets the maximum representable date and time. Currently this is 31.12.9999 23:59:59.99999999

```csharp
public static AbapTimestamp MaxValue { get; }

```

#### Property Value

[AbapTimestamp](./)

### MinValue

Gets the minimum representable date and time. Currently this is 01.01.0001 00:00:00.0000000

```csharp
public static AbapTimestamp MinValue { get; }

```

#### Property Value

[AbapTimestamp](./)

### Month

Gets the current month in currently represented `ERPConnect.AbapTimestamp.Year`.

```csharp
public byte Month { get; }

```

#### Property Value

[byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Ticks

Gets the total ticks. A single tick represents 100 nanoseconds since 01.01.0001.

```csharp
public ulong Ticks { get; }

```

#### Property Value

[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Time

Gets the current time of day.

```csharp
public TimeSpan Time { get; }

```

#### Property Value

[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### Year

Gets the currently represented year.

```csharp
public ushort Year { get; }

```

#### Property Value

[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### AddDays(in int)

Adds (or subtracts) the specified amount of days from the currently represented date and time.

```csharp
public AbapTimestamp AddDays(in int days)

```

#### Parameters

`days` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

[AbapTimestamp](./)

#### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The resulting `ERPConnect.AbapTimestamp` is out of range of a representable date

### AddHours(in int)

Adds (or subtracts) the specified amount of hours from the currently represented date and time.

```csharp
public AbapTimestamp AddHours(in int hours)

```

#### Parameters

`hours` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

[AbapTimestamp](./)

#### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The resulting `ERPConnect.AbapTimestamp` is out of range of a representable date

### AddMinutes(in long)

Adds (or subtracts) the specified amount of minutes from the currently represented date and time.

```csharp
public AbapTimestamp AddMinutes(in long minutes)

```

#### Parameters

`minutes` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

[AbapTimestamp](./)

#### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The resulting `ERPConnect.AbapTimestamp` is out of range of a representable date

### AddSeconds(in long)

Adds (or subtracts) the specified amount of seconds from the currently represented date and time.

```csharp
public AbapTimestamp AddSeconds(in long seconds)

```

#### Parameters

`seconds` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

[AbapTimestamp](./)

#### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The resulting `ERPConnect.AbapTimestamp` is out of range of a representable date

### AddTicks(in long)

```csharp
public AbapTimestamp AddTicks(in long ticks)

```

#### Parameters

`ticks` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

[AbapTimestamp](./)

### CompareTo(AbapTimestamp)

```csharp
public int CompareTo(AbapTimestamp other)

```

#### Parameters

`other` [AbapTimestamp](./)

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompareTo(object)

```csharp
public int CompareTo(object obj)

```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Equals(AbapTimestamp)

```csharp
public bool Equals(AbapTimestamp other)

```

#### Parameters

`other` [AbapTimestamp](./)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Equals(object)

```csharp
public override bool Equals(object obj)

```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FromPackedNumber(in decimal)

```csharp
public static AbapTimestamp FromPackedNumber(in decimal packedNumber)

```

#### Parameters

`packedNumber` [decimal](https://learn.microsoft.com/dotnet/api/system.decimal)

#### Returns

[AbapTimestamp](./)

### GetHashCode()

```csharp
public override int GetHashCode()

```

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Parse(in string)

```csharp
public static AbapTimestamp Parse(in string abapString)

```

#### Parameters

`abapString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[AbapTimestamp](./)

### ToString()

```csharp
public override string ToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### TryToDateTime(out DateTime?)

Tries to convert to the corresponding `System.DateTime` value.

```csharp
public bool TryToDateTime(out DateTime? value)

```

#### Parameters

`value` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The ABAP values 0001-01-01 and 0001-01-02 cannot be converted. Assuming the proleptic Julian calendar, they would correspond to 0000-12-30 and 0000-12-31, which is out of range for `System.DateTime`.

### UtcNow()

Gets an `ERPConnect.AbapTimestamp` representing the current date and time (UTC).

```csharp
public static AbapTimestamp UtcNow()

```

#### Returns

[AbapTimestamp](./)

### UtcToday()

Gets an `ERPConnect.AbapTimestamp` representing the current date (UTC).

```csharp
public static AbapTimestamp UtcToday()

```

#### Returns

[AbapTimestamp](./)

## Operators

### operator +(AbapTimestamp, AbapTimestamp)

```csharp
public static AbapTimestamp operator +(AbapTimestamp a, AbapTimestamp b)

```

#### Parameters

`a` [AbapTimestamp](./)

`b` [AbapTimestamp](./)

#### Returns

[AbapTimestamp](./)

### operator ==(AbapTimestamp, AbapTimestamp)

```csharp
public static bool operator ==(AbapTimestamp a, AbapTimestamp b)

```

#### Parameters

`a` [AbapTimestamp](./)

`b` [AbapTimestamp](./)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator >(AbapTimestamp, AbapTimestamp)

```csharp
public static bool operator >(AbapTimestamp a, AbapTimestamp b)

```

#### Parameters

`a` [AbapTimestamp](./)

`b` [AbapTimestamp](./)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(AbapTimestamp, AbapTimestamp)

```csharp
public static bool operator !=(AbapTimestamp a, AbapTimestamp b)

```

#### Parameters

`a` [AbapTimestamp](./)

`b` [AbapTimestamp](./)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \<(AbapTimestamp, AbapTimestamp)

```csharp
public static bool operator <(AbapTimestamp a, AbapTimestamp b)

```

#### Parameters

`a` [AbapTimestamp](./)

`b` [AbapTimestamp](./)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator -(AbapTimestamp, AbapTimestamp)

```csharp
public static AbapTimestamp operator -(AbapTimestamp a, AbapTimestamp b)

```

#### Parameters

`a` [AbapTimestamp](./)

`b` [AbapTimestamp](./)

#### Returns

[AbapTimestamp](./)
