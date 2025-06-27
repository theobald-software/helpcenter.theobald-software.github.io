Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

ERPException class

```csharp
public class ERPException : Exception, ISerializable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← [ERPException](./)

#### Derived

[ABAPProgramException](../ERPConnect.ABAPProgramException/), [ABAPRuntimeException](../ERPConnect.ABAPRuntimeException/), [CommunicationException](../ERPConnect.CommunicationException/), [InvalidParameterException](../ERPConnect.InvalidParameterException/), [LogonException](../ERPConnect.LogonException/), [RfcLibraryException](../ERPConnect.RfcLibraryException/)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

#### Inherited Members

[Exception.GetBaseException()](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception), [Exception.GetObjectData(SerializationInfo, StreamingContext)](https://learn.microsoft.com/dotnet/api/system.exception.getobjectdata), [Exception.ToString()](https://learn.microsoft.com/dotnet/api/system.exception.tostring), [Exception.GetType()](https://learn.microsoft.com/dotnet/api/system.exception.gettype), [Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite), [Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace), [Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message), [Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data), [Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception), [Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink), [Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source), [Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult), [Exception.SerializeObjectState](https://learn.microsoft.com/dotnet/api/system.exception.serializeobjectstate), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### ERPException()

Initializes a new instance of the ERPException class.

```csharp
public ERPException()

```

### ERPException(string, string)

Initializes a new instance of the ERPException class.

```csharp
public ERPException(string message, string AbapException)

```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

Plain message

`AbapException` [string](https://learn.microsoft.com/dotnet/api/system.string)

ABAP exception (e.g. TABLE_NOT_FOUND)

### ERPException(string, Exception)

Initializes a new instance of the ERPException class.

```csharp
public ERPException(string message, Exception InnerException)

```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

Plain message

`InnerException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

InnerException

### ERPException(string, Exception, string)

Initializes a new instance of the ERPException class.

```csharp
public ERPException(string message, Exception InnerException, string AbapException)

```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

Plain message

`InnerException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

InnerException

`AbapException` [string](https://learn.microsoft.com/dotnet/api/system.string)

ABAP exception (e.g. TABLE_NOT_FOUND)

### ERPException(string)

Initializes a new instance of the ERPException class.

```csharp
public ERPException(string message)

```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

Exception message

### ERPException(SerializationInfo, StreamingContext)

```csharp
protected ERPException(SerializationInfo info, StreamingContext context)

```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

### ABAPException

The original ABAP Exception

```csharp
public string ABAPException { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### GetObjectData(SerializationInfo, StreamingContext)

```csharp
[SecurityCritical]
public override void GetObjectData(SerializationInfo info, StreamingContext context)

```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)
