Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

RFCParameters object represent the parameters to be exchanged with the SAP function module

```csharp
public sealed class RFCParameter

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCParameter](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### RFCParameter(string, RFCTYPE, int, int, object)

Initializes a new RFCParameter object

```csharp
public RFCParameter(string name, RFCTYPE type, int length, int decimals, object paramValue)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`type` [RFCTYPE](../ERPConnect.RFCTYPE/)

RFC type of the parameter

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the parameter in bytes

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

`paramValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

Object which represnts the value that is exchanged with the SAP system

### RFCParameter(string, RFCTYPE, int, int)

Initializes a new RFCParameter object

```csharp
public RFCParameter(string name, RFCTYPE type, int length, int decimals)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`type` [RFCTYPE](../ERPConnect.RFCTYPE/)

RFC type of the parameter

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the parameter in bytes

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

### RFCParameter(string, RFCTYPE, int)

Initializes a new RFCParameter object

```csharp
public RFCParameter(string name, RFCTYPE type, int length)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`type` [RFCTYPE](../ERPConnect.RFCTYPE/)

RFC type of the parameter

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the parameter in bytes

### RFCParameter(string, RFCTYPE)

Initializes a new RFCParameter object

```csharp
public RFCParameter(string name, RFCTYPE type)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`type` [RFCTYPE](../ERPConnect.RFCTYPE/)

RFC type of the parameter

### RFCParameter(string, RFCTableColumnCollection)

Initializes a new RFCParameter object that is a structure

```csharp
public RFCParameter(string name, RFCTableColumnCollection columns)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`columns` [RFCTableColumnCollection](../ERPConnect.RFCTableColumnCollection/)

ColumnCollection object for structured parameters

## Properties

### DDICFieldType

Represents the DDIC field type

```csharp
public string DDICFieldType { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Decimals

Gets / sets the number decimals digits

```csharp
public int Decimals { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsSupplied

Gets or sets a value indicating whether this parameter is included in the remote function call.

Exports/Changings:\
If this property is set to `false`, no value will be sent to SAP and the default value as defined in the function module will be used. That's the default behaviour for `RFCFunction.Exports`, unless a value has been assigned through `ParamValue`.

Imports/Changings:\
If this property is set to `false`, no value will be received from SAP.\
When using NWRFC, some function modules might not even calculate the result. The FM can use `IS SUPPLIED` to check whether the parameter was requested.

```csharp
public bool IsSupplied { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Length

Gets / sets the parameter length in bytes

```csharp
public int Length { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

Gets or sets the name of the parameter (as defined in the function module)

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ParamValue

Get or sets the value of the parameter. Please pay close attention to the data type and the RFC type:

- ABAP type C -> System.String
- ABAP type I -> System.Int32
- ABAP type F -> System.Double
- ABAP type D -> System.String (YYYYMMDD)
- ABAP type T -> System.String (HHMMSS)
- ABAP type P -> System.Decimal
- ABAP type N -> System.String
- ABAP type X -> System.Byte[]
- ABAP type utclong -> System.DateTime? (nullable)
- ABAP Type structure -> RFCStructure object

```csharp
public object ParamValue { get; set; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### Tag

A tag that can be used for everything

```csharp
public object Tag { get; set; }

```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### Type

Gets or sets this parameters RFC type

```csharp
public RFCTYPE Type { get; set; }

```

#### Property Value

[RFCTYPE](../ERPConnect.RFCTYPE/)

## Methods

### GetLength()

```csharp
[Obsolete("Please use Length instead")]
public int GetLength()

```

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsStructure()

Returns whether the parameter is a structured data type

```csharp
public bool IsStructure()

```

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true / false

### IsTable()

Returns whether the parameter is an internal table

```csharp
public bool IsTable()

```

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true / false

### RetrieveColumnsByStructure(IR3Connection, string)

Retrieves a structure from the SAP Data Dictionary

```csharp
public void RetrieveColumnsByStructure(IR3Connection connection, string structureName)

```

#### Parameters

`connection` [IR3Connection](../ERPConnect.IR3Connection/)

R3Connection object

`structureName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the DDIC structure

### SetValueInternal(object)

Sets the parameter value directly without any checks or conversions

```csharp
public void SetValueInternal(object value)

```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

### ToBytes()

Converts the parameter value to System.Byte[]

```csharp
public byte[] ToBytes()

```

#### Returns

[byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

System.Byte[] object

### ToDouble()

Converts the parameter value to System.Double

```csharp
public double ToDouble()

```

#### Returns

[double](https://learn.microsoft.com/dotnet/api/system.double)

System.Double object

### ToInt32()

Converts the parameter value to System.Int32

```csharp
public int ToInt32()

```

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

System.Int32 object

### ToString()

Converts the paramter value to System.String

```csharp
public override string ToString()

```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

System.String object

### ToStructure()

Converts the parameter value to RFCStructure

```csharp
public RFCStructure ToStructure()

```

#### Returns

[RFCStructure](../ERPConnect.RFCStructure/)

RFCStructure object

### ToTable()

Converts the parameter value to RFCTable

```csharp
public RFCTable ToTable()

```

#### Returns

[RFCTable](../ERPConnect.RFCTable/)

RFCTable object
