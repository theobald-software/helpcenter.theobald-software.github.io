Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Contains methods for parsing string representations of ABAP values

```csharp
public static class AbapString

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [AbapString](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### Parse(string, AbapType)

Parses an ABAP string representation

```csharp
public static object Parse(string value, AbapType abapType)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation

`abapType` [AbapType](../ERPConnect.AbapType/)

The ABAP type of the representation

#### Returns

[object](https://learn.microsoft.com/dotnet/api/system.object)

The typed value of the string representation

### ParseBoolean(string)

Parses a string representation of an ABAP boolean

```csharp
public static bool ParseBoolean(string value)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the ABAP boolean

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The typed value of the string representation

### ParseByteSequence(string)

Parses a string representation of an ABAP byte sequence

```csharp
public static byte[] ParseByteSequence(string value)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the ABAP byte sequence

#### Returns

[byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

The typed value of the string representation

### ParseFloatingPoint(string)

Parses a string representation of an ABAP floating point value

```csharp
public static double ParseFloatingPoint(string value)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the ABAP floating point value

#### Returns

[double](https://learn.microsoft.com/dotnet/api/system.double)

The typed value of the string representation

### ParsePackedNumber(string)

Parses a string representation of an ABAP packed number

```csharp
public static decimal ParsePackedNumber(string value)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the ABAP packed number

#### Returns

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)

The typed value of the string representation

### ParseSignedInteger(string)

Parses a string representation of an ABAP signed integer

```csharp
public static long ParseSignedInteger(string value)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the ABAP signed integer

#### Returns

[long](https://learn.microsoft.com/dotnet/api/system.int64)

The typed value of the string representation

### ParseSignedNumericCharacter(in string)

Parses the SNUMC conversion exit.

```csharp
public static decimal ParseSignedNumericCharacter(in string value)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the SNUMC conversion exit

#### Returns

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)

The signed integer corresponding to the string representation

### ParseUnsignedInteger(string)

Parses a string representation of an ABAP unsigned integer

```csharp
public static int ParseUnsignedInteger(string value)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the ABAP unsigned integer

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

The typed value of the string representation

### ReplaceStar(string, string)

Replaces the star in string representation of SAP table values which are too big for RFC_READ_TABLE

```csharp
public static string ReplaceStar(string value, string starReplacement)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the SAP table value

`starReplacement` [string](https://learn.microsoft.com/dotnet/api/system.string)

The replacement for the star

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation where the star has been replaced

### TryParseTime(string, out TimeSpan)

Try to parse a string representation of an ABAP TIMS (time)

```csharp
public static bool TryParseTime(string value, out TimeSpan timeSpanVal)

```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string representation of the ABAP Time (TIMS)

`timeSpanVal` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

If the parser succeeds, this variable shall contain a TimeSpan between 00:00:00 and 23:59:59, otherwise TimeSpan.Zero

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if the parser succeeds, false otherwise
