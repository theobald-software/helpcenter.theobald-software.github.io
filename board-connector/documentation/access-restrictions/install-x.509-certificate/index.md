The following article shows how to install an X.509 certificate for transport encryption.\
The installation of an X.509 certificate is required to use [Transport Layer Security (TLS)](https://learn.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol) and secure authentication with Board Connector.

### About X.509 Certificates

There are two main approaches for creating an X.509 certificate:

- Certificate released by an (internal) certification authority (CA)
- Self-signed certificate

On test environments you can use a self-signed certificate. For production environment it is recommended to use a certificate released by an (internal) certificate authority (CA).

Note

When using Board Cloud, make sure to use a certificate released by a public certification authority (CA).

### Create and Import the X.509 Certificate

Make sure to have a TLS certificate issued by your IT network team considering the following points:

1. The certificate property “Subject Alternative Name” contains the DNS name of the server that runs the BOARD Connector Windows service. When activating TLS, the *Subject Alternative Name* is used as the new hostname.
1. The certificate common name (CN) attribute contains the DNS name of the server. To display the Common Name (CN) of the certificate, double-click the certificate in the Cetrificate Manager and navigate to the *Details* tab.
1. Import the certificate to the [Windows Certificate Store](<https://technet.microsoft.com/en-us/ms788967(v=vs.91)>) of the machine, that runs the BOARD Connector Windows service using the Microsoft Management Console (mmc.exe). The depicted example uses the server name "TODD":
1. Right-click the certificate and navigate to **All Tasks > Manage private keys** to add a new permission entry for the Windows user that runs the BOARD Connector Windows service.
1. Enter the object name "NT Service\\BOARD Connector Service" and click **[Check Names]** before applying the changes.

The certificate is now available on your machine.

Note

The Windows Certificate Store works with most browsers. NMozilla Firefox offers its own certificate storage. Configure your Firefox browser to trust certificates in the Windows certificate store or import the certificate via an enterprise policy, see [Mozilla Support: Setting Up Certificate Authorities (CAs) in Firefox](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox).

### Integrate the X.509 Certificate

1. Open **Server > Settings** from the main window of the Designer.
1. In the tab *Web Server*, click **[Select X.509 certificate]**. The window "Edit certificate location" opens.
1. Select the X.509 certificate created for your machine under **Local Machine > Personal**.
1. Click **[OK]** to confirm your input. If prompted, restart the server.

The Board Connector server is now accessible via https protocol.

______________________________________________________________________

#### Related Links

- [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../../knowledge-base/enable-snc-using-pse-file/)
- [Knowledge Base Article: Certificate Renewal for TLS](../../../knowledge-base/certificate-renewal/)
- [Change Service Account](../../server/service-account/)
