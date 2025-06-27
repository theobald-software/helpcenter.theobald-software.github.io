Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Arguments for OnAuthorizing event

```csharp
public sealed class RFCServer.AuthorizingEventArgs : EventArgs

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← [RFCServer.AuthorizingEventArgs](./)

#### Inherited Members

[EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### FunctionName

```csharp
public string FunctionName { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### HostName

```csharp
public string HostName { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### IsAuthorized

```csharp
public bool IsAuthorized { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ProgramName

```csharp
public string ProgramName { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SID

```csharp
public string SID { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SystemNumber

```csharp
public string SystemNumber { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Username

```csharp
public string Username { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
