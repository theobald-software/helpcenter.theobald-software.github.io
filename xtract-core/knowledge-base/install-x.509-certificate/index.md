The following article shows how to install an X.509 certificate for transport encryption.\
The installation of an X.509 certificate is required to use [Transport Layer Security (TLS)](https://learn.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol) and secure authentication with Xtract Core.

### About X.509 Certificates

There are two main approaches for creating an X.509 certificate:

- Certificate released by an (internal) certification authority (CA)
- Self-signed certificate

On test environments you can use a self-signed certificate. For production environment it is recommended to use a certificate released by an (internal) certificate authority (CA).

### Create and Import the X.509 Certificate

Make sure to have a TLS certificate issued by your IT network team considering the following points:

1. The certificate property “Subject Alternative Name” contains the DNS name of the server that runs the SAP Connector Windows service. When activating TLS, the *Subject Alternative Name* is used as the new hostname.
1. The certificate common name (CN) attribute contains the DNS name of the server. To display the Common Name (CN) of the certificate, double-click the certificate in the Cetrificate Manager and navigate to the *Details* tab.
1. Import the certificate to the [Windows Certificate Store](<https://technet.microsoft.com/en-us/ms788967(v=vs.91)>) of the machine, that runs the SAP Connector Windows service using the Microsoft Management Console (mmc.exe). The depicted example uses the server name "TODD":
1. Right-click the certificate and navigate to **All Tasks > Manage private keys** to add a new permission entry for the Windows user that runs the SAP Connector Windows service.
1. Enter the object name "NT Service\\SAP Connector Service" and click **[Check Names]** before applying the changes.

The certificate is now available on your machine.

Note

The Windows Certificate Store works with most browsers. NMozilla Firefox offers its own certificate storage. Configure your Firefox browser to trust certificates in the Windows certificate store or import the certificate via an enterprise policy, see [Mozilla Support: Setting Up Certificate Authorities (CAs) in Firefox](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox).

### Enable TLS in Xtract Core

Follow the steps below to enable TLS for the Xtract Core Windows service:

1. Open the following file in the Xtract Core installation directory: `config/servers/tls.json`. If the directory and file do not exist, create them.

1. Enable TLS in the `tls.json` file and add the details of the certificate. Example:

   tls.json

   ```json
   {
       "tlsEnabled": true,
       "certificate": {
       "subjectAltName": "BOB.theobald.local",
       "issuer": "CN=Theobald CA, DC=theobald, DC=local",
       "notAfter": "20250717T152041.000Z",
       "thumbprint": "0C32EEE1053DA57E88E6AE22832DFB13775250F9"
       }
   }

   ```

1. Restart the Xtract Core service to restart the listener.

The web server now uses the HTTPS protocol for communication. The default port for secured communication is 1338. You can change the port in the `listener.json` file using the property *securePort*, see [Network Settings](../../getting-started/#network-settings).
