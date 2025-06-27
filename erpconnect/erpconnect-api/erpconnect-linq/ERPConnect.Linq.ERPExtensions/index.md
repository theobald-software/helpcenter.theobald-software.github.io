Namespace: [ERPConnect.Linq](../)\
Assembly: ERPConnectStandard20.dll

Represents a ERPConnect exception thrown during the execution of LINQ to ERP commands. This class cannot be inherited.

```csharp
public static class ERPExtensions

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [ERPExtensions](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### InList(string, params string[])

This method extends the String object and checks if the current string is contained in the given list values.

```csharp
public static bool InList(this string s, params string[] values)

```

#### Parameters

`s` [string](https://learn.microsoft.com/dotnet/api/system.string)

The main String object

`values` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

The value list to check against

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Returns True if the current String is in the value list

### ToSAPDate(string)

This method extends the String object and checks if the current string is containing a valid SAP date format (YYYYMMDD) and is converting it into an integer. This method is used to support date comparison with LINQ to ERP.

```csharp
public static int ToSAPDate(this string s)

```

#### Parameters

`s` [string](https://learn.microsoft.com/dotnet/api/system.string)

The main String object

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32)

Returns the date as integer, otherwise -1
