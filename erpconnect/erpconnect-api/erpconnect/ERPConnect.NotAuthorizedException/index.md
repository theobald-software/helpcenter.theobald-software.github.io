Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

The exception that is thrown when a program-driven exception is raised by the ABAP program / function module, which is related to authorization problems.

```csharp
public sealed class NotAuthorizedException : ABAPProgramException, ISerializable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← [ERPException](../ERPConnect.ERPException/) ← [ABAPProgramException](../ERPConnect.ABAPProgramException/) ← [NotAuthorizedException](./)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

#### Inherited Members

[ERPException.GetObjectData(SerializationInfo, StreamingContext)](../ERPConnect.ERPException/#ERPConnect_ERPException_GetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_), [ERPException.ABAPException](../ERPConnect.ERPException/#ERPConnect_ERPException_ABAPException), [Exception.GetBaseException()](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception), [Exception.GetObjectData(SerializationInfo, StreamingContext)](https://learn.microsoft.com/dotnet/api/system.exception.getobjectdata), [Exception.ToString()](https://learn.microsoft.com/dotnet/api/system.exception.tostring), [Exception.GetType()](https://learn.microsoft.com/dotnet/api/system.exception.gettype), [Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite), [Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace), [Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message), [Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data), [Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception), [Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink), [Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source), [Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### NotAuthorizedException(string, ABAPProgramException)

```csharp
public NotAuthorizedException(string message, ABAPProgramException innerException)

```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`innerException` [ABAPProgramException](../ERPConnect.ABAPProgramException/)
