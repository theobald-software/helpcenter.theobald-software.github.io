
The installation of an X.509 certificate is required for transport encryption and authentication.
There are two main approaches for creating an X.509 certificate:
- Certificate released by an (internal) certification authority (CA) 
- Self-signed certificate

{% if page.meta.product == "board-connector" %}

!!! note
	When using Board Cloud, make sure to use a certificate released by a public certification authority (CA).

{% endif %}


!!! note
	On test environments you can use a self-signed certificate. For production environment it is recommended to use a certificate released by an (internal) certificate authority (CA). 

### Create the X.509 Certificate

Make sure to have a TLS certificate issued by your IT network team considering the following points:
 
- The certificate property “Subject Alternative Name” contains the DNS name of the server on which the Windows service (e.g. Xtract Universal Service or Board Connector Service) is running. 
- Place the certificate in the [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) on the machine, on which the Windows service is running.
- The certificate common name (CN) attribute contains the DNS name of the server. 

!!! tip
	To display the Common Name (CN) of the certificate, double-click the certificate in the Cetrificate Manager and navigate to the *Details* tab.


{% if page.meta.product != "xtract-core" %}

### Integrate the X.509 Certificate


1. Import the certificate to the Windows Certificate Store using Microsoft Management Console (mmc).
In the example shown, the server name is "TODD":
![X509-MMC](/{{ product }}/assets/images/documentation/access-restriction/X509-MMC.png){:class="img-responsive"}
2. Open **Server > Settings** from the main window of the Designer. <br>
![security-manage-users](/{{ product }}/assets/images/documentation/access-restriction/server-settings_manage.png){:class="img-responsive"}
3. In the tab *Web Server*, click **[Select X.509 certificate]**. The window "Edit certificate location" opens.
4. Select the X.509 certificate created for your machine under **Local Machine > Personal**.<br>
![certificate-edit-location](/{{ product }}/assets/images/documentation/access-restriction/certificate-edit-location.png){:class="img-responsive"}
5. Click **[OK]** to confirm your input. If prompted, restart the server.

The certificate is  now available on your machine.

*****
#### Related Links
- [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../knowledge-base/enable-snc-using-pse-file.md)
- [Change Service Account](../server/service-account.md)
{% endif %}