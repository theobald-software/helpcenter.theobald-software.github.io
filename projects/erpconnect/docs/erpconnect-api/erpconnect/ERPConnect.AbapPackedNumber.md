
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public readonly struct AbapPackedNumber
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ERPConnect_AbapPackedNumber_ToDecimal_System_ArraySegment_System_Byte___System_Int32__"></a> ToDecimal\(in ArraySegment<byte\>, in int\)

Currently we don't support all values for defined total lengths &gt; 28.
We throw an exception, only if the actual value exceeds the supported range.
We only consider fully supported decimal places for range checking (no optimization for ± 7.9228 * 10^28).
If we would like to support more values, we would need to store the raw BCD bytes in a struct or class,
like we do for the ERPConnect.UtcLong type, and convert to string.
(unless a type that supports all values is added to .NET in the future)

```csharp
public static decimal ToDecimal(in ArraySegment<byte> bcdBytesSegment, in int decimalsCount)
```

#### Parameters

`bcdBytesSegment` [ArraySegment](https://learn.microsoft.com/dotnet/api/system.arraysegment\-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

`decimalsCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [decimal](https://learn.microsoft.com/dotnet/api/system.decimal)

### <a id="ERPConnect_AbapPackedNumber_ToDecimal_System_String__"></a> ToDecimal\(in string\)

```csharp
public static decimal ToDecimal(in string abapString)
```

#### Parameters

`abapString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [decimal](https://learn.microsoft.com/dotnet/api/system.decimal)

