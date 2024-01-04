
Namespace: [ERPConnect.Idocs](index.md)  
Assembly: ERPConnectStandard20.dll  

IdocStatus represents a single status of an IDoc.

```csharp
public sealed class IdocStatus
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdocStatus](ERPConnect.Idocs.IdocStatus.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_Idocs_IdocStatus__ctor"></a> IdocStatus\(\)

```csharp
public IdocStatus()
```

## Properties

### <a id="ERPConnect_Idocs_IdocStatus_CreationDateTime"></a> CreationDateTime

Date and time when this sttus was created

```csharp
public DateTime CreationDateTime { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="ERPConnect_Idocs_IdocStatus_Description"></a> Description

The plain description of this status

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocStatus_Status"></a> Status

Status code

```csharp
public string Status { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocStatus_StatusVar1"></a> StatusVar1

Variable which the description text may contain

```csharp
public string StatusVar1 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocStatus_StatusVar2"></a> StatusVar2

Variable which the description text may contain

```csharp
public string StatusVar2 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocStatus_StatusVar3"></a> StatusVar3

Variable which the description text may contain

```csharp
public string StatusVar3 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocStatus_StatusVar4"></a> StatusVar4

Variable which the description text may contain

```csharp
public string StatusVar4 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Idocs_IdocStatus_UserName"></a> UserName

Defines the SAP user that has caused this status

```csharp
public string UserName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

