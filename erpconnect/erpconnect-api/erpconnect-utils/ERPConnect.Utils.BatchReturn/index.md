Namespace: [ERPConnect.Utils](../)\
Assembly: ERPConnectStandard20.dll

Represents a message returned from a Batch Input transaction.

```csharp
public class BatchReturn

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [BatchReturn](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### BatchReturn()

Initializes a new BapiReturn object.

```csharp
public BatchReturn()

```

## Properties

### Message

Message

```csharp
public string Message { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MessageID

Batch input message ID

```csharp
public string MessageID { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MessageNumber

Number of system message

```csharp
public string MessageNumber { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MessageVariable1

Variable contained in the message string

```csharp
public string MessageVariable1 { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MessageVariable2

Variable contained in the message string

```csharp
public string MessageVariable2 { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MessageVariable3

Variable contained in the message string

```csharp
public string MessageVariable3 { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MessageVariable4

Variable contained in the message string

```csharp
public string MessageVariable4 { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

Message type (e.g. W for warning or E for error)

```csharp
public string Type { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
