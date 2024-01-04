
Namespace: [ERPConnect.Idocs](index.md)  
Assembly: ERPConnectStandard20.dll  

Represent a single IDoc segment with all its child segments

```csharp
public class IdocSegment
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdocSegment](ERPConnect.Idocs.IdocSegment.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_Idocs_IdocSegment__ctor"></a> IdocSegment\(\)

```csharp
public IdocSegment()
```

## Properties

### <a id="ERPConnect_Idocs_IdocSegment_ChildSegments"></a> ChildSegments

Collection of all segment that are child relation to the current segment

```csharp
public IdocSegmentCollection ChildSegments { get; set; }
```

#### Property Value

 [IdocSegmentCollection](ERPConnect.Idocs.IdocSegmentCollection.md)

### <a id="ERPConnect_Idocs_IdocSegment_Description"></a> Description

A short description of the segment

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocSegment_Fields"></a> Fields

Fields represent the values and other Properties of the fields that are contained in one segment

```csharp
public IdocSegmentFieldCollection Fields { get; set; }
```

#### Property Value

 [IdocSegmentFieldCollection](ERPConnect.Idocs.IdocSegmentFieldCollection.md)

### <a id="ERPConnect_Idocs_IdocSegment_HasChildren"></a> HasChildren

True / false whether child segments are existing

```csharp
public bool HasChildren { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_Idocs_IdocSegment_MaxOccur"></a> MaxOccur

Defines how often a segment can occur

```csharp
public int MaxOccur { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Idocs_IdocSegment_SegmentName"></a> SegmentName

The DDIC type for this segment

```csharp
public string SegmentName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocSegment_SegmentType"></a> SegmentType

The type name for this segment

```csharp
public string SegmentType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="ERPConnect_Idocs_IdocSegment_Clone"></a> Clone\(\)

Creates a cloned IdocSegment object

```csharp
public IdocSegment Clone()
```

#### Returns

 [IdocSegment](ERPConnect.Idocs.IdocSegment.md)

A new IdocSegment object

### <a id="ERPConnect_Idocs_IdocSegment_ReadDataBuffer_System_Int32_System_Int32_"></a> ReadDataBuffer\(int, int\)

Returns a part of the data buffer of a given length and a given position

```csharp
public string ReadDataBuffer(int Offset, int Length)
```

#### Parameters

`Offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Offset where to read in the data buffer

`Length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of the string

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that contains tha part of data buffer

### <a id="ERPConnect_Idocs_IdocSegment_ToString"></a> ToString\(\)

Returns a string for debugging purpose

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

-

### <a id="ERPConnect_Idocs_IdocSegment_WriteDataBuffer_System_String_System_Int32_System_Int32_"></a> WriteDataBuffer\(string, int, int\)

Writes as string at a given position into the Idoc data buffer

```csharp
public void WriteDataBuffer(string Content, int Offset, int Length)
```

#### Parameters

`Content` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string to be written

`Offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The offset in the buffer where the string should be placed

`Length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The length of the string

