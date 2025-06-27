Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

```csharp
public static class Global

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Global](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### SetCpicConnectTimeout(in ushort)

Sets the max. number of milliseconds for establishing the underlying CPIC connection. Must be set before any connections are opened an cannot be reset.

```csharp
public static void SetCpicConnectTimeout(in ushort milliseconds)

```

#### Parameters

`milliseconds` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)
