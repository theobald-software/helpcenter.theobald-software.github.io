
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

Represents an SAP timestamp, similar to `System.DateTime`.
Accuracy is ticks (100 nanoseconds).
Both packed numbers (data elements TIMESTAMP, TIMESTAMPL) and native (type utclong)
representations are supported.

```csharp
public readonly struct AbapTimestamp : IComparable, IComparable<AbapTimestamp>, IEquatable<AbapTimestamp>
```

#### Implements

[IComparable](https://learn.microsoft.com/dotnet/api/system.icomparable), 
[IComparable<AbapTimestamp\>](https://learn.microsoft.com/dotnet/api/system.icomparable\-1), 
[IEquatable<AbapTimestamp\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

The Julian calendar is used from 0001-01-01 to 1582-10-04.
The Gregorian calendar is used from 1582-10-15.
The date range from 1582-10-05 to 1582-10-14 is invalid.

## Constructors

### <a id="ERPConnect_AbapTimestamp__ctor_System_UInt64__"></a> AbapTimestamp\(in ulong\)

Initializes a new instance of `ERPConnect.AbapTimestamp`
from total ticks (100 nanoseconds passed since 01.01.0001).

```csharp
public AbapTimestamp(in ulong ticks)
```

#### Parameters

`ticks` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Ticks are outside the valid min or max range

### <a id="ERPConnect_AbapTimestamp__ctor_System_UInt16__System_Byte__System_Byte__"></a> AbapTimestamp\(in ushort, in byte, in byte\)

Initializes a new instance of `ERPConnect.AbapTimestamp` using
a 1-based year, month and day.

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

### <a id="ERPConnect_AbapTimestamp__ctor_System_UInt16__System_Byte__System_Byte__System_TimeSpan__"></a> AbapTimestamp\(in ushort, in byte, in byte, in TimeSpan\)

Initializes a new instance of `ERPConnect.AbapTimestamp` using
a 1-based year, month, day and the time of day.

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

### <a id="ERPConnect_AbapTimestamp_Day"></a> Day

Gets the current day in currently represented `ERPConnect.AbapTimestamp.Month` and `ERPConnect.AbapTimestamp.Year`.

```csharp
public byte Day { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ERPConnect_AbapTimestamp_InitialValue"></a> InitialValue

Gets a constant value representing the initial value (0 ticks).

```csharp
public static AbapTimestamp InitialValue { get; }
```

#### Property Value

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

### <a id="ERPConnect_AbapTimestamp_MaxValue"></a> MaxValue

Gets the maximum representable date and time.
Currently this is 31.12.9999 23:59:59.99999999

```csharp
public static AbapTimestamp MaxValue { get; }
```

#### Property Value

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

### <a id="ERPConnect_AbapTimestamp_MinValue"></a> MinValue

Gets the minimum representable date and time.
Currently this is 01.01.0001 00:00:00.0000000

```csharp
public static AbapTimestamp MinValue { get; }
```

#### Property Value

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

### <a id="ERPConnect_AbapTimestamp_Month"></a> Month

Gets the current month in currently represented `ERPConnect.AbapTimestamp.Year`.

```csharp
public byte Month { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ERPConnect_AbapTimestamp_Ticks"></a> Ticks

Gets the total ticks. A single tick represents 100 nanoseconds since 01.01.0001.

```csharp
public ulong Ticks { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### <a id="ERPConnect_AbapTimestamp_Time"></a> Time

Gets the current time of day.

```csharp
public TimeSpan Time { get; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="ERPConnect_AbapTimestamp_Year"></a> Year

Gets the currently represented year.

```csharp
public ushort Year { get; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### <a id="ERPConnect_AbapTimestamp_AddDays_System_Int32__"></a> AddDays\(in int\)

Adds (or subtracts) the specified amount of
days from the currently represented date and time.

```csharp
public AbapTimestamp AddDays(in int days)
```

#### Parameters

`days` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The resulting `ERPConnect.AbapTimestamp` is out of range of a representable date

### <a id="ERPConnect_AbapTimestamp_AddHours_System_Int32__"></a> AddHours\(in int\)

Adds (or subtracts) the specified amount of
hours from the currently represented date and time.

```csharp
public AbapTimestamp AddHours(in int hours)
```

#### Parameters

`hours` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The resulting `ERPConnect.AbapTimestamp` is out of range of a representable date

### <a id="ERPConnect_AbapTimestamp_AddMinutes_System_Int64__"></a> AddMinutes\(in long\)

Adds (or subtracts) the specified amount of
minutes from the currently represented date and time.

```csharp
public AbapTimestamp AddMinutes(in long minutes)
```

#### Parameters

`minutes` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The resulting `ERPConnect.AbapTimestamp` is out of range of a representable date

### <a id="ERPConnect_AbapTimestamp_AddSeconds_System_Int64__"></a> AddSeconds\(in long\)

Adds (or subtracts) the specified amount of
seconds from the currently represented date and time.

```csharp
public AbapTimestamp AddSeconds(in long seconds)
```

#### Parameters

`seconds` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The resulting `ERPConnect.AbapTimestamp` is out of range of a representable date

### <a id="ERPConnect_AbapTimestamp_AddTicks_System_Int64__"></a> AddTicks\(in long\)

```csharp
public AbapTimestamp AddTicks(in long ticks)
```

#### Parameters

`ticks` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

### <a id="ERPConnect_AbapTimestamp_CompareTo_ERPConnect_AbapTimestamp_"></a> CompareTo\(AbapTimestamp\)

```csharp
public int CompareTo(AbapTimestamp other)
```

#### Parameters

`other` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_AbapTimestamp_CompareTo_System_Object_"></a> CompareTo\(object\)

```csharp
public int CompareTo(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_AbapTimestamp_Equals_ERPConnect_AbapTimestamp_"></a> Equals\(AbapTimestamp\)

```csharp
public bool Equals(AbapTimestamp other)
```

#### Parameters

`other` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_AbapTimestamp_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_AbapTimestamp_FromPackedNumber_System_Decimal__"></a> FromPackedNumber\(in decimal\)

```csharp
public static AbapTimestamp FromPackedNumber(in decimal packedNumber)
```

#### Parameters

`packedNumber` [decimal](https://learn.microsoft.com/dotnet/api/system.decimal)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

### <a id="ERPConnect_AbapTimestamp_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_AbapTimestamp_Parse_System_String__"></a> Parse\(in string\)

```csharp
public static AbapTimestamp Parse(in string abapString)
```

#### Parameters

`abapString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

### <a id="ERPConnect_AbapTimestamp_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_AbapTimestamp_TryToDateTime_System_Nullable_System_DateTime___"></a> TryToDateTime\(out DateTime?\)

Tries to convert to the corresponding `System.DateTime` value.

```csharp
public bool TryToDateTime(out DateTime? value)
```

#### Parameters

`value` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The ABAP values 0001-01-01 and 0001-01-02 cannot be converted.
Assuming the proleptic Julian calendar, they would correspond to 0000-12-30 and 0000-12-31,
which is out of range for `System.DateTime`.

### <a id="ERPConnect_AbapTimestamp_UtcNow"></a> UtcNow\(\)

Gets an `ERPConnect.AbapTimestamp` representing the current date and time (UTC).

```csharp
public static AbapTimestamp UtcNow()
```

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

### <a id="ERPConnect_AbapTimestamp_UtcToday"></a> UtcToday\(\)

Gets an `ERPConnect.AbapTimestamp` representing the current date (UTC).

```csharp
public static AbapTimestamp UtcToday()
```

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

## Operators

### <a id="ERPConnect_AbapTimestamp_op_Addition_ERPConnect_AbapTimestamp_ERPConnect_AbapTimestamp_"></a> operator \+\(AbapTimestamp, AbapTimestamp\)

```csharp
public static AbapTimestamp operator +(AbapTimestamp a, AbapTimestamp b)
```

#### Parameters

`a` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

`b` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

### <a id="ERPConnect_AbapTimestamp_op_Equality_ERPConnect_AbapTimestamp_ERPConnect_AbapTimestamp_"></a> operator ==\(AbapTimestamp, AbapTimestamp\)

```csharp
public static bool operator ==(AbapTimestamp a, AbapTimestamp b)
```

#### Parameters

`a` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

`b` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_AbapTimestamp_op_GreaterThan_ERPConnect_AbapTimestamp_ERPConnect_AbapTimestamp_"></a> operator \>\(AbapTimestamp, AbapTimestamp\)

```csharp
public static bool operator >(AbapTimestamp a, AbapTimestamp b)
```

#### Parameters

`a` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

`b` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_AbapTimestamp_op_Inequality_ERPConnect_AbapTimestamp_ERPConnect_AbapTimestamp_"></a> operator \!=\(AbapTimestamp, AbapTimestamp\)

```csharp
public static bool operator !=(AbapTimestamp a, AbapTimestamp b)
```

#### Parameters

`a` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

`b` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_AbapTimestamp_op_LessThan_ERPConnect_AbapTimestamp_ERPConnect_AbapTimestamp_"></a> operator <\(AbapTimestamp, AbapTimestamp\)

```csharp
public static bool operator <(AbapTimestamp a, AbapTimestamp b)
```

#### Parameters

`a` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

`b` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_AbapTimestamp_op_Subtraction_ERPConnect_AbapTimestamp_ERPConnect_AbapTimestamp_"></a> operator \-\(AbapTimestamp, AbapTimestamp\)

```csharp
public static AbapTimestamp operator -(AbapTimestamp a, AbapTimestamp b)
```

#### Parameters

`a` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

`b` [AbapTimestamp](ERPConnect.AbapTimestamp.md)

#### Returns

 [AbapTimestamp](ERPConnect.AbapTimestamp.md)

