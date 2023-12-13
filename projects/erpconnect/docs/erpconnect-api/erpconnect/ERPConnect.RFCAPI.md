
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

```csharp
public static class RFCAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RFCAPI](ERPConnect.RFCAPI.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

### <a id="ERPConnect_RFCAPI_RequestWaitTime"></a> RequestWaitTime

Gets or sets the time in milliseconds for which the current thread
sleeps between checks for new RFC requests.
<remarks>Only change this value if you are experiencing performance issues</remarks>

```csharp
public static int RequestWaitTime { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_RFCAPI_SynchronizationEnabled"></a> SynchronizationEnabled

Gets or sets a value indicating whether parallel calls to the
classic RFC API are synchronized to prevent resource conflicts.
<remarks>
    Only change this value if you are experiencing performance issues.
    Do not set this value to false if multiple threads are using ERPConnect.
    Otherwise memory access violations may occur which may corrupt the state of your process.</remarks>

```csharp
public static bool SynchronizationEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

