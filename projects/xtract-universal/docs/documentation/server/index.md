---
title: Security 
description: Security
---

The communication security between the {{ productName }} Designer and the {{ productName }} Server is provided using the following techniques:

- Authentication
- Transport encryption
- Access control

### Authentication 
The authentication security method guarantees the verification of the identity of the logged in user.  
After the initial connecting to the server using the default authentication methods such as "Windows Credentials" or "Anonymous", you can define 
further details in the server settings, see [User Management](./security/user-management).


### Transport Encryption
The transport encryption security method prevents spying or manipulation of data that is exchanged between the Designer and the Server, e.g., SAP credentials. 

{{ productName }} supports the following methods of transport encryption:
-	[Kerberos](https://msdn.microsoft.com/en-us/library/windows/desktop/aa374762(v=vs.85).aspx)
-	[Transport Layer Security (TLS)](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol)

The encryption is implemented using the standard .NET APIs.
The ciphers are chosen automatically depending on the operating system of the machine running the {{ productName }} Server.

For more information, see [Microsoft Documentation: Cipher Suites in TLS/SSL](https://docs.microsoft.com/en-us/windows/win32/secauthn/cipher-suites-in-schannel) and [Microsoft Documentation: SslStream Class](https://docs.microsoft.com/en-us/dotnet/api/system.net.security.sslstream?view=net-5.0).

### Access Control
The access control security method allows granting and restricting access to certain users or user groups. 
Access rights are assigned on the server level, but can be further restricted for selected extractions or sources.

For more information, see [Access Management](#link).



