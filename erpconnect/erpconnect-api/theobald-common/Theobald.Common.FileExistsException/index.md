Namespace: [Theobald.Common](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public sealed class FileExistsException : IOException, ISerializable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← [SystemException](https://learn.microsoft.com/dotnet/api/system.systemexception) ← [IOException](https://learn.microsoft.com/dotnet/api/system.io.ioexception) ← [FileExistsException](./)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

#### Inherited Members

[Exception.GetBaseException()](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception), [Exception.GetObjectData(SerializationInfo, StreamingContext)](https://learn.microsoft.com/dotnet/api/system.exception.getobjectdata), [Exception.ToString()](https://learn.microsoft.com/dotnet/api/system.exception.tostring), [Exception.GetType()](https://learn.microsoft.com/dotnet/api/system.exception.gettype), [Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite), [Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace), [Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message), [Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data), [Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception), [Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink), [Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source), [Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### FileExistsException(string, int)

```csharp
public FileExistsException(string path, int hResult)

```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`hResult` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Path

```csharp
public string Path { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
