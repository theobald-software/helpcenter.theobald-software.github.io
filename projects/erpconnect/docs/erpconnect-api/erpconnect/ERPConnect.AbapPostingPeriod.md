
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

Represents an SAP posting period (DDIC type ACCP).

```csharp
public readonly struct AbapPostingPeriod
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_AbapPostingPeriod__ctor_System_UInt16__System_Byte__"></a> AbapPostingPeriod\(in ushort, in byte\)

```csharp
public AbapPostingPeriod(in ushort year, in byte month)
```

#### Parameters

`year` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`month` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Properties

### <a id="ERPConnect_AbapPostingPeriod_InitialValue"></a> InitialValue

Gets a constant value representing the initial value (ABAP string 000000).

```csharp
public static AbapPostingPeriod InitialValue { get; }
```

#### Property Value

 [AbapPostingPeriod](ERPConnect.AbapPostingPeriod.md)

### <a id="ERPConnect_AbapPostingPeriod_MaxValue"></a> MaxValue

Gets the maximum representable posting period (9999-12).

```csharp
public static AbapPostingPeriod MaxValue { get; }
```

#### Property Value

 [AbapPostingPeriod](ERPConnect.AbapPostingPeriod.md)

### <a id="ERPConnect_AbapPostingPeriod_MinValue"></a> MinValue

Gets the minimum representable posting period (0001-01).

```csharp
public static AbapPostingPeriod MinValue { get; }
```

#### Property Value

 [AbapPostingPeriod](ERPConnect.AbapPostingPeriod.md)

### <a id="ERPConnect_AbapPostingPeriod_Month"></a> Month

```csharp
public byte Month { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ERPConnect_AbapPostingPeriod_Year"></a> Year

```csharp
public ushort Year { get; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### <a id="ERPConnect_AbapPostingPeriod_Parse_System_String__"></a> Parse\(in string\)

```csharp
public static AbapPostingPeriod Parse(in string abapString)
```

#### Parameters

`abapString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [AbapPostingPeriod](ERPConnect.AbapPostingPeriod.md)

### <a id="ERPConnect_AbapPostingPeriod_ToDateTime"></a> ToDateTime\(\)

```csharp
public DateTime? ToDateTime()
```

#### Returns

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

### <a id="ERPConnect_AbapPostingPeriod_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_AbapPostingPeriod_UtcToday"></a> UtcToday\(\)

Gets an <xref href="ERPConnect.AbapPostingPeriod" data-throw-if-not-resolved="false"></xref> representing the current date (UTC).

```csharp
public static AbapPostingPeriod UtcToday()
```

#### Returns

 [AbapPostingPeriod](ERPConnect.AbapPostingPeriod.md)

