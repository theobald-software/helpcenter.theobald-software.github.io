
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

Represents settings for SNC connections

```csharp
public sealed class SNCSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SNCSettings](ERPConnect.SNCSettings.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_SNCSettings__ctor"></a> SNCSettings\(\)

```csharp
public SNCSettings()
```

## Properties

### <a id="ERPConnect_SNCSettings_Enabled"></a> Enabled

Gets or sets a value indicating whether SNC is used or not

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_SNCSettings_ExternalIdData"></a> ExternalIdData

When authenticating via External ID, provide the username etc. using this property.
Please make sure to set the correct `ERPConnect.SNCSettings.ExternalIdType` as well.

```csharp
public string ExternalIdData { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_SNCSettings_ExternalIdType"></a> ExternalIdType

The type of `ERPConnect.SNCSettings.ExternalIdData`.

```csharp
public ExternalIdType ExternalIdType { get; set; }
```

#### Property Value

 [ExternalIdType](ERPConnect.ExternalIdType.md)

### <a id="ERPConnect_SNCSettings_LibraryPath"></a> LibraryPath

Gets or sets the path to the SNC DLL

```csharp
public string LibraryPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_SNCSettings_Mechanism"></a> Mechanism

Gets or sets the GSS-API mechansim used for SNC connections

```csharp
public SNCMechanism Mechanism { get; set; }
```

#### Property Value

 [SNCMechanism](ERPConnect.SNCMechanism.md)

### <a id="ERPConnect_SNCSettings_OwnName"></a> OwnName

Gets or sets the own SNC name

```csharp
public string OwnName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_SNCSettings_PartnerName"></a> PartnerName

Gets or sets the SNC partner name

```csharp
public string PartnerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_SNCSettings_QualityOfProtection"></a> QualityOfProtection

Gets or sets the preferred quality of protection (security level) for SNC connections

```csharp
public SNCQualityOfProtection QualityOfProtection { get; set; }
```

#### Property Value

 [SNCQualityOfProtection](ERPConnect.SNCQualityOfProtection.md)

### <a id="ERPConnect_SNCSettings_RunImpersonated"></a> RunImpersonated

Impersonates a different user when opening a new RFC connection.
Typically used for <pre><code class="lang-csharp">WindowsIdentity.RunImpersonated()</code></pre>.
<remarks>
This property allows to reduce the code that runs in the impersonated context to a minimum,
e. g. to avoid access restriction issues.
</remarks>

```csharp
public Action<Action> RunImpersonated { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[Action](https://learn.microsoft.com/dotnet/api/system.action)\>

