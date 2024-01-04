
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

RFCParameters object represent the parameters to be exchanged with the SAP function module

```csharp
public sealed class RFCParameter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCParameter](ERPConnect.RFCParameter.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_RFCParameter__ctor_System_String_ERPConnect_RFCTYPE_System_Int32_System_Int32_System_Object_"></a> RFCParameter\(string, RFCTYPE, int, int, object\)

Initializes a new RFCParameter object

```csharp
public RFCParameter(string name, RFCTYPE type, int length, int decimals, object paramValue)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the parameter

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the parameter in bytes

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

`paramValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

Object which represnts the value that is exchanged with the SAP system

### <a id="ERPConnect_RFCParameter__ctor_System_String_ERPConnect_RFCTYPE_System_Int32_System_Int32_"></a> RFCParameter\(string, RFCTYPE, int, int\)

Initializes a new RFCParameter object

```csharp
public RFCParameter(string name, RFCTYPE type, int length, int decimals)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the parameter

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the parameter in bytes

`decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimal digits

### <a id="ERPConnect_RFCParameter__ctor_System_String_ERPConnect_RFCTYPE_System_Int32_"></a> RFCParameter\(string, RFCTYPE, int\)

Initializes a new RFCParameter object

```csharp
public RFCParameter(string name, RFCTYPE type, int length)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the parameter

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the parameter in bytes

### <a id="ERPConnect_RFCParameter__ctor_System_String_ERPConnect_RFCTYPE_"></a> RFCParameter\(string, RFCTYPE\)

Initializes a new RFCParameter object

```csharp
public RFCParameter(string name, RFCTYPE type)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`type` [RFCTYPE](ERPConnect.RFCTYPE.md)

RFC type of the parameter

### <a id="ERPConnect_RFCParameter__ctor_System_String_ERPConnect_RFCTableColumnCollection_"></a> RFCParameter\(string, RFCTableColumnCollection\)

Initializes a new RFCParameter object that is a structure

```csharp
public RFCParameter(string name, RFCTableColumnCollection columns)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name as provided in the function module

`columns` [RFCTableColumnCollection](ERPConnect.RFCTableColumnCollection.md)

ColumnCollection object for structured parameters

## Properties

### <a id="ERPConnect_RFCParameter_DDICFieldType"></a> DDICFieldType

Represents the DDIC field type

```csharp
public string DDICFieldType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCParameter_Decimals"></a> Decimals

Gets / sets the number decimals digits

```csharp
public int Decimals { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCParameter_IsSupplied"></a> IsSupplied

Gets or sets a value indicating whether this parameter is included
in the remote function call.
<remarks>
  <p>
  Exports/Changings:<br />
  If this property is set to <code>false</code>, no value will be
  sent to SAP and the default value as defined in the function
  module will be used. That's the default behaviour for
  <code>RFCFunction.Exports</code>, unless a
  value has been assigned through <code>ParamValue</code>.
  </p>

  <p>
  Imports/Changings:<br />
  If this property is set to <code>false</code>, no value will be
  received from SAP.<br />
  When using NWRFC, some function modules might not even calculate the result.
  The FM can use <code>IS SUPPLIED</code> to check whether the parameter was requested.
  </p>
</remarks>

```csharp
public bool IsSupplied { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_RFCParameter_Length"></a> Length

Gets / sets the parameter length in bytes

```csharp
public int Length { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCParameter_Name"></a> Name

Gets or sets the name of the parameter (as defined in the function module)

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_RFCParameter_ParamValue"></a> ParamValue

Get or sets the value of the parameter. Please pay close attention to the data type and the RFC type:
<ul><li>ABAP type C -&gt; System.String</li><li>ABAP type I -&gt; System.Int32</li><li>ABAP type F -&gt; System.Double</li><li>ABAP type D -&gt; System.String (YYYYMMDD)</li><li>ABAP type T -&gt; System.String (HHMMSS)</li><li>ABAP type P -&gt; System.Decimal</li><li>ABAP type N -&gt; System.String</li><li>ABAP type X -&gt; System.Byte[]</li><li>ABAP type utclong -&gt; System.DateTime? (nullable)</li><li>ABAP Type structure -&gt; RFCStructure object</li></ul>

```csharp
public object ParamValue { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="ERPConnect_RFCParameter_Tag"></a> Tag

A tag that can be used for everything

```csharp
public object Tag { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="ERPConnect_RFCParameter_Type"></a> Type

Gets or sets this parameters RFC type

```csharp
public RFCTYPE Type { get; set; }
```

#### Property Value

 [RFCTYPE](ERPConnect.RFCTYPE.md)

## Methods

### <a id="ERPConnect_RFCParameter_GetLength"></a> GetLength\(\)

```csharp
[Obsolete("Please use Length instead")]
public int GetLength()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCParameter_IsStructure"></a> IsStructure\(\)

Returns whether the parameter is a structured data type

```csharp
public bool IsStructure()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true / false

### <a id="ERPConnect_RFCParameter_IsTable"></a> IsTable\(\)

Returns whether the parameter is an internal table

```csharp
public bool IsTable()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true / false

### <a id="ERPConnect_RFCParameter_RetrieveColumnsByStructure_ERPConnect_IR3Connection_System_String_"></a> RetrieveColumnsByStructure\(IR3Connection, string\)

Retrieves a structure from the SAP Data Dictionary

```csharp
public void RetrieveColumnsByStructure(IR3Connection connection, string structureName)
```

#### Parameters

`connection` [IR3Connection](ERPConnect.IR3Connection.md)

R3Connection object

`structureName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the DDIC structure

### <a id="ERPConnect_RFCParameter_SetValueInternal_System_Object_"></a> SetValueInternal\(object\)

Sets the parameter value directly without any checks or conversions

```csharp
public void SetValueInternal(object value)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="ERPConnect_RFCParameter_ToBytes"></a> ToBytes\(\)

Converts the parameter value to System.Byte[]

```csharp
public byte[] ToBytes()
```

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

System.Byte[] object

### <a id="ERPConnect_RFCParameter_ToDouble"></a> ToDouble\(\)

Converts the parameter value to System.Double

```csharp
public double ToDouble()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

System.Double object

### <a id="ERPConnect_RFCParameter_ToInt32"></a> ToInt32\(\)

Converts the parameter value to System.Int32

```csharp
public int ToInt32()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

System.Int32 object

### <a id="ERPConnect_RFCParameter_ToString"></a> ToString\(\)

Converts the paramter value to System.String

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String object

### <a id="ERPConnect_RFCParameter_ToStructure"></a> ToStructure\(\)

Converts the parameter value to RFCStructure

```csharp
public RFCStructure ToStructure()
```

#### Returns

 [RFCStructure](ERPConnect.RFCStructure.md)

RFCStructure object

### <a id="ERPConnect_RFCParameter_ToTable"></a> ToTable\(\)

Converts the parameter value to RFCTable

```csharp
public RFCTable ToTable()
```

#### Returns

 [RFCTable](ERPConnect.RFCTable.md)

RFCTable object

