
The following article shows how to install an X.509 certificate for transport encryption.<br>
The installation of an X.509 certificate is required to use [Transport Layer Security (TLS)](https://learn.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol) and secure authentication with {{ productName }}.

### About X.509 Certificates 

There are two main approaches for creating an X.509 certificate:
- Certificate released by an (internal) certification authority (CA) 
- Self-signed certificate

On test environments you can use a self-signed certificate. For production environment it is recommended to use a certificate released by an (internal) certificate authority (CA). 

{% if page.meta.product == "board-connector" %}

!!! note
	When using Board Cloud, make sure to use a certificate released by a public certification authority (CA).

{% endif %}

### Create and Import the X.509 Certificate

Make sure to have a TLS certificate issued by your IT network team considering the following points:
 
1. The certificate property “Subject Alternative Name” contains the DNS name of the server that runs the {{ serviceName }} Windows service. 
When activating TLS, the *Subject Alternative Name* is used as the new hostname. 
2. The certificate common name (CN) attribute contains the DNS name of the server. 
To display the Common Name (CN) of the certificate, double-click the certificate in the Cetrificate Manager and navigate to the *Details* tab.
3. Import the certificate to the [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) of the machine, that runs the {{ serviceName }} Windows service using the Microsoft Management Console (mmc.exe).
The depicted example uses the server name "TODD":<br>
![X509-MMC](site:{{ product }}/assets/images/documentation/access-restriction/X509-MMC.png){:class="img-responsive"}
4. Right-click the certificate and navigate to **All Tasks > Manage private keys** to add a new permission entry for the Windows user that runs the {{ serviceName }} Windows service.
5. Enter the object name "NT Service\{{ serviceName }} Service" and click **[Check Names]** before applying the changes.<br>
![certificate](site:{{ product }}/assets/images/documentation/access-restriction/x509-certificate-permission.png){:class="img-responsive"}

The certificate is now available on your machine.
{% if page.meta.product == "yunio" %}For information on how to renew a certificate, see [Certificate Renewal for TLS](../knowledge-base/certificate-renewal.md).{% endif %}

!!! note
    The Windows Certificate Store works with most browsers. NMozilla Firefox offers its own certificate storage.
    Configure your Firefox browser to trust certificates in the Windows certificate store or import the certificate via an enterprise policy, see [Mozilla Support: Setting Up Certificate Authorities (CAs) in Firefox](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox).


{% if page.meta.product == "xtract-core" %}

### Enable TLS in Xtract Core

Follow the steps below to enable TLS for the Xtract Core Windows service:

1. Open the following file in the Xtract Core installation directory: `config/servers/tls.json`. If the directory and file do not exist, create them.
2. Enable TLS in the `tls.json` file and add the details of the certificate. Example:
	```json title="tls.json"
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
3. Restart the Xtract Core service to restart the listener.

The web server now uses the HTTPS protocol for communication. 
The default port for secured communication is {{ port_https }}.
You can change the port in the `listener.json` file using the property *securePort*, see [Network Settings](../getting-started.md/#network-settings).

{% elif page.meta.product == "yunio" %}

### Integrate the X.509 Certificate

1. Import the certificate to the Windows Certificate Store using Microsoft Management Console (mmc).
In the example shown, the server name is "sherri":<br>
![XU-X509-MMC](../assets/images/yunio/articles/certificate.png){:class="img-responsive"}
2. Open the yunIO Designer and navigate to the *Settings* menu. 
3. Click **[Pick Certificate]** to reference the X.509 certificate.<br>
Information about the currently saved certificate is displayed in the Transport Layer Security section of the menu.<br>
![import-certificate](../assets/images/yunio/articles/certificate-settings.png){:class="img-responsive"}
4. Click **Enable TLS** to activate Transport Layer Security, see [Documentation: Server Settings](../documentation/server-settings.md).
5. Click **[Save]** and restart the yunIO Windows service to implement the changes.

The yunIO Designer and the services created in yunIO are now accessible via https protocol. 

#### Related Links:
- [Certificate Renewal for TLS](./certificate-renewal.md)
- [Enable Secure Network Communication (SNC) via X.509 certificate](./enable-snc-using-pse-file.md)
- [Documentation: Server Settings](../documentation/server-settings.md)

{% else %}

### Integrate the X.509 Certificate

1. Open **Server > Settings** from the main window of the Designer. <br>
![security-manage-users](site:{{ product }}/assets/images/documentation/access-restriction/server-settings_manage.png){:class="img-responsive"}
2. In the tab *Web Server*, click **[Select X.509 certificate]**. The window "Edit certificate location" opens.
3. Select the X.509 certificate created for your machine under **Local Machine > Personal**.<br>
![certificate-edit-location](site:{{ product }}/assets/images/documentation/access-restriction/certificate-edit-location.png){:class="img-responsive"}
4. Click **[OK]** to confirm your input. If prompted, restart the server.

The {{ productName }} server is now accessible via https protocol. 

*****
#### Related Links
- [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../knowledge-base/enable-snc-using-pse-file.md)
- [Change Service Account](../server/service-account.md)
{% endif %}
