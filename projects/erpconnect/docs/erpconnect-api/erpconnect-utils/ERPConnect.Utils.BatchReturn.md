
Namespace: [ERPConnect.Utils](index.md)  
Assembly: ERPConnect35.dll  

Represents a message returned from a Batch Input transaction.

```csharp
public class BatchReturn
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BatchReturn](ERPConnect.Utils.BatchReturn.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_Utils_BatchReturn__ctor"></a> BatchReturn\(\)

Initializes a new BapiReturn object.

```csharp
public BatchReturn()
```

## Properties

### <a id="ERPConnect_Utils_BatchReturn_Message"></a> Message

Message

```csharp
public string Message { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchReturn_MessageID"></a> MessageID

Batch input message ID

```csharp
public string MessageID { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchReturn_MessageNumber"></a> MessageNumber

Number of system message

```csharp
public string MessageNumber { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchReturn_MessageVariable1"></a> MessageVariable1

Variable contained in the message string

```csharp
public string MessageVariable1 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchReturn_MessageVariable2"></a> MessageVariable2

Variable contained in the message string

```csharp
public string MessageVariable2 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchReturn_MessageVariable3"></a> MessageVariable3

Variable contained in the message string

```csharp
public string MessageVariable3 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchReturn_MessageVariable4"></a> MessageVariable4

Variable contained in the message string

```csharp
public string MessageVariable4 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Utils_BatchReturn_Type"></a> Type

Message type (e.g. W for warning or E for error)

```csharp
public string Type { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

