
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

Represents an SAP date (ABAP type d, or DDIC type DATS).

```csharp
public readonly struct AbapDate
```

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Remarks

The Julian calendar is used from 0001-01-01 to 1582-10-04.
The Gregorian calendar is used from 1582-10-15.
The date range from 1582-10-05 to 1582-10-14 is invalid.

## Constructors

### <a id="ERPConnect_AbapDate__ctor_System_UInt16__System_Byte__System_Byte__"></a> AbapDate\(in ushort, in byte, in byte\)

Initializes a new instance of <xref href="ERPConnect.AbapDate" data-throw-if-not-resolved="false"></xref> using
a 1-based year, month and day.

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

### <a id="ERPConnect_AbapDate_Day"></a> Day

Gets the current day in currently represented <xref href="ERPConnect.AbapDate.Month" data-throw-if-not-resolved="false"></xref> and <xref href="ERPConnect.AbapDate.Year" data-throw-if-not-resolved="false"></xref>.

```csharp
public byte Day { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ERPConnect_AbapDate_InitialValue"></a> InitialValue

Gets a constant value representing the initial value (ABAP string 00000000).

```csharp
public static AbapDate InitialValue { get; }
```

#### Property Value

 [AbapDate](ERPConnect.AbapDate.md)

### <a id="ERPConnect_AbapDate_MaxValue"></a> MaxValue

Gets the maximum representable date (9999-12-31).

```csharp
public static AbapDate MaxValue { get; }
```

#### Property Value

 [AbapDate](ERPConnect.AbapDate.md)

### <a id="ERPConnect_AbapDate_MinValue"></a> MinValue

Gets the minimum representable date (0001-01-01).

```csharp
public static AbapDate MinValue { get; }
```

#### Property Value

 [AbapDate](ERPConnect.AbapDate.md)

### <a id="ERPConnect_AbapDate_Month"></a> Month

Gets the current month in currently represented <xref href="ERPConnect.AbapDate.Year" data-throw-if-not-resolved="false"></xref>.

```csharp
public byte Month { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ERPConnect_AbapDate_Year"></a> Year

Gets the currently represented year.

```csharp
public ushort Year { get; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### <a id="ERPConnect_AbapDate_IsJulianDate_System_UInt16__System_Byte__System_Byte__"></a> IsJulianDate\(in ushort, in byte, in byte\)

```csharp
public static bool IsJulianDate(in ushort year, in byte month, in byte day)
```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`month` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`day` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_AbapDate_IsLeapYear_System_UInt16__"></a> IsLeapYear\(in ushort\)

Checks whether this year is a leap year. Years before 1582 follow
the Julian rule (every 4 years) for leap years, afterwards the
Gregorian rule is used for leap years.

```csharp
public static bool IsLeapYear(in ushort year)
```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_AbapDate_Parse_System_String__"></a> Parse\(in string\)

```csharp
public static AbapDate Parse(in string abapString)
```

#### Parameters

`abapString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [AbapDate](ERPConnect.AbapDate.md)

### <a id="ERPConnect_AbapDate_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_AbapDate_TryToDateTime_System_Nullable_System_DateTime___"></a> TryToDateTime\(out DateTime?\)

Tries to convert to the corresponding <xref href="System.DateTime" data-throw-if-not-resolved="false"></xref> value.

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
which is out of range for <xref href="System.DateTime" data-throw-if-not-resolved="false"></xref>.

### <a id="ERPConnect_AbapDate_UtcToday"></a> UtcToday\(\)

Gets an <xref href="ERPConnect.AbapDate" data-throw-if-not-resolved="false"></xref> representing the current date (UTC).

```csharp
public static AbapDate UtcToday()
```

#### Returns

 [AbapDate](ERPConnect.AbapDate.md)

