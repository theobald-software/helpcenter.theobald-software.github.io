
Namespace: [Theobald.Ogc](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public readonly struct BinaryHelper
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="Theobald_Ogc_BinaryHelper__ctor_System_Byte____"></a> BinaryHelper\(in byte\[\]\)

```csharp
public BinaryHelper(in byte[] value)
```

#### Parameters

`value` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

## Properties

### <a id="Theobald_Ogc_BinaryHelper_Value"></a> Value

```csharp
public byte[] Value { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="Theobald_Ogc_BinaryHelper_Item_System_Int32__"></a> this\[int\]

```csharp
public byte this[in int i] { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### <a id="Theobald_Ogc_BinaryHelper_EnsureLittleEndian"></a> EnsureLittleEndian\(\)

```csharp
public static void EnsureLittleEndian()
```

### <a id="Theobald_Ogc_BinaryHelper_ToBytesBigEndian_System_UInt32__System_Int32__"></a> ToBytesBigEndian\(in uint, in int\)

```csharp
public void ToBytesBigEndian(in uint uint32, in int offset)
```

#### Parameters

`uint32` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Theobald_Ogc_BinaryHelper_ToBytesBigEndian_System_UInt64__System_Int32__"></a> ToBytesBigEndian\(in ulong, in int\)

```csharp
public void ToBytesBigEndian(in ulong uint64, in int offset)
```

#### Parameters

`uint64` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Theobald_Ogc_BinaryHelper_ToBytesBigEndian_System_Double_System_Int32__"></a> ToBytesBigEndian\(double, in int\)

```csharp
public void ToBytesBigEndian(double d, in int offset)
```

#### Parameters

`d` [double](https://learn.microsoft.com/dotnet/api/system.double)

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Theobald_Ogc_BinaryHelper_ToBytesNative_System_UInt32__System_Int32__"></a> ToBytesNative\(in uint, in int\)

```csharp
public void ToBytesNative(in uint uint32, in int offset)
```

#### Parameters

`uint32` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Theobald_Ogc_BinaryHelper_ToBytesNative_System_Double__System_Int32__"></a> ToBytesNative\(in double, in int\)

```csharp
public void ToBytesNative(in double d, in int offset)
```

#### Parameters

`d` [double](https://learn.microsoft.com/dotnet/api/system.double)

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Theobald_Ogc_BinaryHelper_ToDoubleBigEndian_System_Int32__"></a> ToDoubleBigEndian\(in int\)

```csharp
public double ToDoubleBigEndian(in int offset)
```

#### Parameters

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Theobald_Ogc_BinaryHelper_ToDoubleNative_System_Int32__"></a> ToDoubleNative\(in int\)

```csharp
public double ToDoubleNative(in int offset)
```

#### Parameters

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Theobald_Ogc_BinaryHelper_ToUint32BigEndian_System_Int32__"></a> ToUint32BigEndian\(in int\)

```csharp
public uint ToUint32BigEndian(in int offset)
```

#### Parameters

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="Theobald_Ogc_BinaryHelper_ToUint32Native_System_Int32__"></a> ToUint32Native\(in int\)

```csharp
public uint ToUint32Native(in int offset)
```

#### Parameters

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="Theobald_Ogc_BinaryHelper_ToUint64BigEndian_System_Int32__"></a> ToUint64BigEndian\(in int\)

```csharp
public ulong ToUint64BigEndian(in int offset)
```

#### Parameters

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

