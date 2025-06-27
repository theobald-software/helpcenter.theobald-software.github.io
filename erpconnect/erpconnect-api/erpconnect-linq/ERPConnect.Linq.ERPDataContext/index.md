Namespace: [ERPConnect.Linq](../)\
Assembly: ERPConnectStandard20.dll

Represents the main entry point for the LINQ to ERP framework.

```csharp
public class ERPDataContext : IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [ERPDataContext](./)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### ERPDataContext()

Initializes a new instance of the ERPDataContext class.

```csharp
public ERPDataContext()

```

### ERPDataContext(string)

Initializes a new instance of the ERPDataContext class with a given connection string.

```csharp
public ERPDataContext(string connectionString)

```

#### Parameters

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The connection string.

### ERPDataContext(string, ClientProtocol)

Initializes a new instance of the ERPDataContext class with a given connection string.

```csharp
public ERPDataContext(string connectionString, ClientProtocol protocol)

```

#### Parameters

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The connection string.

`protocol` [ClientProtocol](../../erpconnect/ERPConnect.ClientProtocol/)

Classical or Netweaver protocol.

### ERPDataContext(string, int, string, string, string, string)

Initializes a new instance of the ERPDataContext class with given connection data values.

```csharp
public ERPDataContext(string host, int system, string username, string password, string language, string client)

```

#### Parameters

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

The host value.

`system` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The system value.

`username` [string](https://learn.microsoft.com/dotnet/api/system.string)

The username value.

`password` [string](https://learn.microsoft.com/dotnet/api/system.string)

The password value.

`language` [string](https://learn.microsoft.com/dotnet/api/system.string)

The language value.

`client` [string](https://learn.microsoft.com/dotnet/api/system.string)

The client value.

### ERPDataContext(string, int, string, string, string, string, ClientProtocol)

Initializes a new instance of the ERPDataContext class with given connection data values.

```csharp
public ERPDataContext(string host, int system, string username, string password, string language, string client, ClientProtocol protocol)

```

#### Parameters

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

The host value.

`system` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The system value.

`username` [string](https://learn.microsoft.com/dotnet/api/system.string)

The username value.

`password` [string](https://learn.microsoft.com/dotnet/api/system.string)

The password value.

`language` [string](https://learn.microsoft.com/dotnet/api/system.string)

The language value.

`client` [string](https://learn.microsoft.com/dotnet/api/system.string)

The client value.

`protocol` [ClientProtocol](../../erpconnect/ERPConnect.ClientProtocol/)

Classical or Netweaver protocol.

## Properties

### AutoCloseConnection

Gets or sets a value indicating whether to auto-close the connection at disposal.

```csharp
public bool AutoCloseConnection { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Connection

Gets or sets the R3Connection used by this instance of the ERPDataContext.

```csharp
public R3Connection Connection { get; set; }

```

#### Property Value

[R3Connection](../../erpconnect/ERPConnect.R3Connection/)

### Log

Gets and sets the logger object.

```csharp
public TextWriter Log { get; set; }

```

#### Property Value

[TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

## Methods

### CheckDispose()

Please refer to the Microsoft documentation as this is a non-ERPConnect method or property

```csharp
protected void CheckDispose()

```

### CommitWork()

Commits work by calling BAPI_TRANSACTION_COMMIT.

```csharp
public bool CommitWork()

```

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates the succes of processing the commit

### CommitWork(bool)

Commits work by calling BAPI_TRANSACTION_COMMIT.

```csharp
public bool CommitWork(bool wait)

```

#### Parameters

`wait` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Defines that method should wait

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates the succes of processing the commit

### Dispose()

Releases all resources used by the ERPDataContext.

```csharp
public void Dispose()

```

### Dispose(bool)

Please refer to the Microsoft documentation as this is a non-ERPConnect method or property

```csharp
protected virtual void Dispose(bool disposing)

```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Please refer to the Microsoft documentation as this is a non-ERPConnect method or property

### ~ERPDataContext()

Please refer to the Microsoft documentation as this is a non-ERPConnect method or property

```csharp
protected ~ERPDataContext()

```

### GetTable<TEntity>()

Returns a collection of objects of a particular type, where the type is defined by the TEntity parameter.

```csharp
public ERPTable<TEntity> GetTable<TEntity>() where TEntity : class

```

#### Returns

[ERPTable](../ERPConnect.Linq.ERPTable-1/)<TEntity>

A collection of objects.

#### Type Parameters

`TEntity`

### RollbackWork()

Rollbacks work by calling BAPI_TRANSACTION_ROLLBACK.

```csharp
public void RollbackWork()

```
