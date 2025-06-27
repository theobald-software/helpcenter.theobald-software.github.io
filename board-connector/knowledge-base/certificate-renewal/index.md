The following article shows how to manually and automatically renew a X.509 certificate used for TLS in Board Connector.

Warning

**Expired Certificate.**\
The Cryptographic key pair associated with the certificate is no longer valid and this may cause security risks. Always use a valid certificate. To access the Designer after a certificate has expired, delete the `tls.json` file in the Board Connector installation directory (`C:\Program Files\BOARDConnector\config\servers\`) and restart the Board Connector service. This resets all TLS settings in Board Connector, including the certificate selection.

### Renew a Certificate Manually

1. Before the old certificate expires, install a new certificate on the server machine.

1. Open the Board Connector Designer and reference the new certificate, see [Install an X.509 Certificate](../../documentation/access-restrictions/install-x.509-certificate/#integrate-the-x509-certificate).

1. Delete the old certificate from the Microsoft Certificate Store.

1. Block external access to the Board Connector server using the firewall.

1. Open the Board Connector Designer and navigate to **Settings > Server**.

1. In the *Web Server* tab, select the protocol **HTTP - Unrestricted** to disable TLS.

1. Click **[OK]** to save the settings. When prompted to restart the service, click **[OK]** again.

1. Renew the certificate with the same key using Windows AD Certificate Services.

1. Open the Board Connector Designer and enable TLS with the new certificate, see [Activate TLS Encryption](../../documentation/access-restrictions/restrict-server-access/#activate-tls-encryption).

1. Click **[OK]** to save the settings. When prompted to restart the service, click **[OK]** again.

1. Allow external access to the Board Connector server using the firewall.

Note

If you use TLS encryption for the communication with the Board Connector Designer, make sure to also reference the new certificate in the [*Configuration Server*](../../documentation/server/server-settings/#configuration-server) tab of the server settings.

### Renew a Certificate Automatically

If you're using [win-acme](https://www.win-acme.com/reference/plugins/installation/script) for the renewal of Letsencrypt certificates, run the following PowerShell script with the same client that runs win-acme.

[Download PowerShell Script for Letsencrypt Certificate Renewal](../../assets/files/bc/bc-le.ps1)

#### About win-acme

win-acme creates a scheduled task for the renewal process. When this process is triggered, it issues a new certificate and stores it in the Windows Certificate Store. The old certificate is deleted.

#### About the PowerShell Script

The `bc-le.ps1` script replaces the old certificate in the Board Connector settings with the new certificate. No manual changes in Board Connector are required.

The `bc-le.ps1` script requires 2 input parameters:

- the thumbprint of the old certificate
- the thumbprint of the new certificate

______________________________________________________________________

#### Related Links

- [Board Connector Documentation: Install an X.509 Certificate](../../documentation/access-restrictions/install-x.509-certificate/)
- [Board Connector Documentation: Server Settings](../../documentation/server/server-settings/)
- [Enable Secure Network Communication (SNC) via X.509 certificate](../enable-snc-using-pse-file/)
