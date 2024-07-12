---
title: Certificate Renewal for TLS
description: Certificate Renewal for TLS
---

The following article shows how to manually and automatically renew a X.509 certificate used for TLS in yunIO.

### Renew a Certificate Manually

!!! warning  
	**Expired Certificate.**<br>
    Cryptographic key pair associated with the certificate is no longer valid and this may cause security risks.
	Always use a valid certificate. To access the Designer after a certificate has expired, delete the `tls.json` file in the installation directory of yunIO and restart the yunIO service.
    This resets all TLS settings in yunIO, including the certificate selection.

=== "Renew a Certificate with New Key"

	1. Before the old certificate expires, install a new certificate on the server machine.
	2. Open the yunIO Designer and switch to the new certificate, see [Server Settings - Transport Layer Security](../documentation/server-settings.md/#transport-layer-security).
	3. Delete the old certificate from the Microsoft Certificate Store.

=== "Renew a Certificate with the Same Key"

	1. Block external access to yunIO using the firewall.
	2. Open the yunIO Designer and enable anonymous access, see [Access Restrictions - Anonymous Access](../documentation/access-restrictions/global-access.md/#settings).
	3. Disable TLS in the Designer, see [Server Settings - Transport Layer Security](../documentation/server-settings.md/#transport-layer-security).
	4. Renew the certificate with the same key using Windows AD Certificate Services.
	5. Enable TLS in the Designer with the new certificate.
	6. Disable anonymous access in the Designer.
	7. Allow external access to yunIO using the firewall.

### Renew a Certificate Automatically

If you're using [win-acme](https://www.win-acme.com/reference/plugins/installation/script) for the renewal of Letsencrypt certificates, run the following PowerShell script with the same client that runs win-acme.

[Download PowerShell Script for Letsencrypt Certificate Renewal](../assets/files/yunio/yunio-le.ps1){ .md-button .md-button--primary }

#### About win-acme
win-acme creates a scheduled task for the renewal process. 
When this process is triggered, it issues a new certificate and stores it in the Windows Certificate Store. 
The old certificate is deleted. 

#### About the PowerShell Script

The `yunio-le.ps1` script replaces the old certificate in the yunIO settings with the new certificate.
No manual changes in yunIO are required.

The `yunio-le.ps1` script requires 2 input parameters:
- the thumbprint of the old certificate
- the thumbprint of the new certificate


******

#### Related Links
- [Install an X.509 Certificate](x509-certificate.md)
- [Enable Secure Network Communication (SNC) via X.509 certificate](enable-snc-using-pse-file.md)
- [yunIO Documentation: Server Settings](../documentation/server-settings.md)
