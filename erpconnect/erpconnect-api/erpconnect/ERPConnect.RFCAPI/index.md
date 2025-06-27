Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public static class RFCAPI

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [RFCAPI](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### RequestWaitTime

Gets or sets the time in milliseconds for which the current thread sleeps between checks for new RFC requests. Only change this value if you are experiencing performance issues

```csharp
public static int RequestWaitTime { get; set; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### SynchronizationEnabled

Gets or sets a value indicating whether parallel calls to the classic RFC API are synchronized to prevent resource conflicts. Only change this value if you are experiencing performance issues. Do not set this value to false if multiple threads are using ERPConnect. Otherwise memory access violations may occur which may corrupt the state of your process.

```csharp
public static bool SynchronizationEnabled { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)
