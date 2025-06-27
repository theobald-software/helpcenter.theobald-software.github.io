Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Represents an SAP date (ABAP type d, or DDIC type DATS).

```csharp
public readonly struct AbapDate

```

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

The Julian calendar is used from 0001-01-01 to 1582-10-04. The Gregorian calendar is used from 1582-10-15. The date range from 1582-10-05 to 1582-10-14 is invalid.

## Constructors

### AbapDate(in ushort, in byte, in byte)

Initializes a new instance of `ERPConnect.AbapDate` using a 1-based year, month and day.

```csharp
public AbapDate(in ushort year, in byte month, in byte day)

```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`month` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`day` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Exceptions

[ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The date is invalid. e.g. month 13 or 29.02. in any other year than a leap year.

## Properties

### Day

Gets the current day in currently represented `ERPConnect.AbapDate.Month` and `ERPConnect.AbapDate.Year`.

```csharp
public byte Day { get; }

```

#### Property Value

[byte](https://learn.microsoft.com/dotnet/api/system.byte)

### InitialValue

Gets a constant value representing the initial value (ABAP string 00000000).

```csharp
public static AbapDate InitialValue { get; }

```

#### Property Value

[AbapDate](./)

### MaxValue

Gets the maximum representable date (9999-12-31).

```csharp
public static AbapDate MaxValue { get; }

```

#### Property Value

[AbapDate](./)

### MinValue

Gets the minimum representable date (0001-01-01).

```csharp
public static AbapDate MinValue { get; }

```

#### Property Value

[AbapDate](./)

### Month

Gets the current month in currently represented `ERPConnect.AbapDate.Year`.

```csharp
public byte Month { get; }

```

#### Property Value

[byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Year

Gets the currently represented year.

```csharp
public ushort Year { get; }

```

#### Property Value

[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### IsJulianDate(in ushort, in byte, in byte)

```csharp
public static bool IsJulianDate(in ushort year, in byte month, in byte day)

```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`month` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`day` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLeapYear(in ushort)

Checks whether this year is a leap year. Years before 1582 follow the Julian rule (every 4 years) for leap years, afterwards the Gregorian rule is used for leap years.

```csharp
public static bool IsLeapYear(in ushort year)

```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Parse(in string)

```csharp
public static AbapDate Parse(in string abapString)

```

#### Parameters

`abapString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

[AbapDate](./)

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

### UtcToday()

Gets an `ERPConnect.AbapDate` representing the current date (UTC).

```csharp
public static AbapDate UtcToday()

```

#### Returns

[AbapDate](./)
