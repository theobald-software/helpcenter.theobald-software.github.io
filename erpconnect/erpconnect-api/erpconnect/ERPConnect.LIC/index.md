Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

This class is for licensing purpose

```csharp
public static class LIC

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [LIC](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### ExpirationDate

Date on which the license key expires

```csharp
public static DateTime ExpirationDate { get; }

```

#### Property Value

[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

## Methods

### IsValid()

Checks if the current license key is valid.

```csharp
public static bool IsValid()

```

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Exceptions

[ERPException](../ERPConnect.ERPException/)

Thrown, if current license is not valid.

### SetLic(string)

Sets the current licence key

```csharp
public static void SetLic(string key)

```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

Licence key

#### Remarks

Use this Method to set a valid licence key before opening a server or client connection to SAP

```
ERPConnect.LIC.SetLic("XXXXXXXXXX");
```
