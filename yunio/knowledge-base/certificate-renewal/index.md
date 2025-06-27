The following article shows how to manually and automatically renew a X.509 certificate used for TLS in yunIO.

Warning

**Expired Certificate.**\
The Cryptographic key pair associated with the certificate is no longer valid and this may cause security risks. Always use a valid certificate. To access the Designer after a certificate has expired, delete the `tls.json` file in the yunIO installation directory (`C:\Program Files\Theobald Software\yunIO\config\servers\`) and restart the yunIO service. This resets all TLS settings in yunIO, including the certificate selection.

### Renew a Certificate Manually

1. Before the old certificate expires, install a new certificate on the server machine.

1. Open the yunIO Designer and reference the new certificate, see [Server Settings - Transport Layer Security](../../documentation/server-settings/#transport-layer-security).

1. Delete the old certificate from the Microsoft Certificate Store.

1. Block external access to yunIO using the firewall.

1. Open the yunIO Designer and enable anonymous access, see [Access Restrictions - Anonymous Access](../../documentation/access-restrictions/global-access/#settings).

1. Disable TLS in the Designer, see [Server Settings - Transport Layer Security](../../documentation/server-settings/#transport-layer-security).

1. Renew the certificate with the same key using Windows AD Certificate Services.

1. Enable TLS in the Designer with the new certificate.

1. Disable anonymous access in the Designer.

1. Allow external access to yunIO using the firewall.

### Renew a Certificate Automatically

If you're using [win-acme](https://www.win-acme.com/reference/plugins/installation/script) for the renewal of Letsencrypt certificates, run the following PowerShell script with the same client that runs win-acme.

[Download PowerShell Script for Letsencrypt Certificate Renewal](../../assets/files/yunio/yunio-le.ps1)

#### About win-acme

win-acme creates a scheduled task for the renewal process. When this process is triggered, it issues a new certificate and stores it in the Windows Certificate Store. The old certificate is deleted.

#### About the PowerShell Script

The `yunio-le.ps1` script replaces the old certificate in the yunIO settings with the new certificate. No manual changes in yunIO are required.

The `yunio-le.ps1` script requires 2 input parameters:

- the thumbprint of the old certificate
- the thumbprint of the new certificate

______________________________________________________________________

#### Related Links

- [Install an X.509 Certificate](../x509-certificate/)
- [Enable Secure Network Communication (SNC) via X.509 certificate](../enable-snc-using-pse-file/)
- [yunIO Documentation: Server Settings](../../documentation/server-settings/)
