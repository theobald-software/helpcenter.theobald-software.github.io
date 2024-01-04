
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnectStandard20.dll  

```csharp
public sealed class TlsSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TlsSettings](ERPConnect.TlsSettings.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ERPConnect_TlsSettings__ctor"></a> TlsSettings\(\)

```csharp
public TlsSettings()
```

## Properties

### <a id="ERPConnect_TlsSettings_ClientCertificateLogon"></a> ClientCertificateLogon

Gets or sets whether a certificate found in the <xref href="ERPConnect.TlsSettings.ClientPse" data-throw-if-not-resolved="false"></xref>
should be used for authentication instead of user and password. If unset
(null) the default NetWeaver library value is used.
Corresponds to NetWeaver connection parameter "TLS_CLIENT_CERTIFICATE_LOGON".

```csharp
public bool? ClientCertificateLogon { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="ERPConnect_TlsSettings_ClientPse"></a> ClientPse

The name of the client PSE file to use.
When using <xref href="ERPConnect.TlsSettings.ClientCertificateLogon" data-throw-if-not-resolved="false"></xref> it should also
contain the client certificate used for authentication.
Corresponds to NetWeaver connection parameter "TLS_CLIENT_PSE".

```csharp
public string ClientPse { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_TlsSettings_CryptoLibrary"></a> CryptoLibrary

Gets or sets the path to the crypto library to use. The library will be loaded
when opening an <xref href="ERPConnect.R3Connection" data-throw-if-not-resolved="false"></xref> and cannot be changed once loaded for
the current process, even when using a different <xref href="ERPConnect.R3Connection" data-throw-if-not-resolved="false"></xref>.
Corresponds fo NetWeaver ini parameter "TLS_SAPCRYPTOLIB".

```csharp
public string CryptoLibrary { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_TlsSettings_IsEnabled"></a> IsEnabled

Gets or sets whether TLS is enabled. If unset (null) the default
NetWeaver library value is used.
Corresponds to NetWeaver connection parameter "USE_TLS".

```csharp
public bool? IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="ERPConnect_TlsSettings_TrustAll"></a> TrustAll

Gets or sets whether certificate trust checks should be skipped. If
unset (null) the default NetWeaver library value is used.
Corresponds to NetWeaver connection parameter "TLS_TRUST_ALL".

```csharp
public bool? TrustAll { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

