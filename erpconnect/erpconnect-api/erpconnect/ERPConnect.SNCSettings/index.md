Namespace: [ERPConnect](../)\
Assembly: ERPConnectStandard20.dll

Represents settings for SNC connections

```csharp
public sealed class SNCSettings

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [SNCSettings](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### SNCSettings()

```csharp
public SNCSettings()

```

## Properties

### Enabled

Gets or sets a value indicating whether SNC is used or not

```csharp
public bool Enabled { get; set; }

```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExternalIdData

When authenticating via External ID, provide the username etc. using this property. Please make sure to set the correct `ERPConnect.SNCSettings.ExternalIdType` as well.

```csharp
public string ExternalIdData { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ExternalIdType

The type of `ERPConnect.SNCSettings.ExternalIdData`.

```csharp
public ExternalIdType ExternalIdType { get; set; }

```

#### Property Value

[ExternalIdType](../ERPConnect.ExternalIdType/)

### LibraryPath

Gets or sets the path to the SNC DLL

```csharp
public string LibraryPath { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Mechanism

Gets or sets the GSS-API mechansim used for SNC connections

```csharp
public SNCMechanism Mechanism { get; set; }

```

#### Property Value

[SNCMechanism](../ERPConnect.SNCMechanism/)

### OwnName

Gets or sets the own SNC name

```csharp
public string OwnName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### PartnerName

Gets or sets the SNC partner name

```csharp
public string PartnerName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### QualityOfProtection

Gets or sets the preferred quality of protection (security level) for SNC connections

```csharp
public SNCQualityOfProtection QualityOfProtection { get; set; }

```

#### Property Value

[SNCQualityOfProtection](../ERPConnect.SNCQualityOfProtection/)

### RunImpersonated

Impersonates a different user when opening a new RFC connection. Typically used for

```
WindowsIdentity.RunImpersonated()
```

. This property allows to reduce the code that runs in the impersonated context to a minimum, e. g. to avoid access restriction issues.

```csharp
public Action<Action> RunImpersonated { get; set; }

```

#### Property Value

[Action](https://learn.microsoft.com/dotnet/api/system.action-1)\<[Action](https://learn.microsoft.com/dotnet/api/system.action)>
