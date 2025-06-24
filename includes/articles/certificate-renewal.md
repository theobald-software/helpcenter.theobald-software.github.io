

The following article shows how to manually and automatically renew a X.509 certificate used for TLS in {{ productName }}.

!!! warning  
	**Expired Certificate.**<br>
    The Cryptographic key pair associated with the certificate is no longer valid and this may cause security risks.
	Always use a valid certificate. To access the Designer after a certificate has expired, delete the `tls.json` file in the {{ productName }} installation directory (`{{ installationDir }}\config\servers\`) and restart the {{ productName }} service.
    This resets all TLS settings in {{ productName }}, including the certificate selection.

### Renew a Certificate Manually

=== "Renew a Certificate with New Key"

	1. Before the old certificate expires, install a new certificate on the server machine.
	2. Open the {{ productName }} Designer and reference the new certificate, see {% if product=="yunio" %}[Server Settings - Transport Layer Security](../documentation/server-settings.md/#transport-layer-security){% else %}[Install an X.509 Certificate](../documentation/access-restrictions/install-x.509-certificate.md/#integrate-the-x509-certificate){% endif %}.
	3. Delete the old certificate from the Microsoft Certificate Store.

{% if product=="yunio" %}=== "Renew a Certificate with the Same Key"

	1. Block external access to {{ productName }} using the firewall.
	2. Open the {{ productName }} Designer and enable anonymous access, see [Access Restrictions - Anonymous Access](../documentation/access-restrictions/global-access.md/#settings).
	3. Disable TLS in the Designer, see [Server Settings - Transport Layer Security](../documentation/server-settings.md/#transport-layer-security).
	4. Renew the certificate with the same key using Windows AD Certificate Services.
	5. Enable TLS in the Designer with the new certificate.
	6. Disable anonymous access in the Designer.
	7. Allow external access to yunIO using the firewall.

{% else %}=== "Renew a Certificate with the Same Key"

	1. Open the {{ productName }} Designer and navigate to **Settings > Server**.
	2. In the *Web Server* tab, select the protocol **HTTP - Unrestricted** to disable TLS.
	3. Click **[OK]** to save the settings. When prompted to restart the service, click **[OK]** again.
	4. Renew the certificate with the same key using Windows AD Certificate Services.
	5. Open the {{ productName }} Designer and 
	6. Reference the new certificate, see [Install an X.509 Certificate](../documentation/access-restrictions/install-x.509-certificate.md/#integrate-the-x509-certificate).
	7. Click **[OK]** to save the settings. When prompted to restart the service, click **[OK]** again.

	
!!! note
		
	If you use TLS encryption for the communication with the {{ productName }} Designer, make sure to reference the new certificate in the [*Configuration Server* tab](../documentation/server/server-settings.md/#configuration-server) of the server settings,.

{% endif %}

### Renew a Certificate Automatically

If you're using [win-acme](https://www.win-acme.com/reference/plugins/installation/script) for the renewal of Letsencrypt certificates, run the following PowerShell script with the same client that runs win-acme.

{% if product=="yunio" %}
[:material-download-circle: Download PowerShell Script for Letsencrypt Certificate Renewal](../assets/files/yunio/yunio-le.ps1){ .md-button .md-button--primary }
{% elif product=="xtract-universal" %}
[:material-download-circle: Download PowerShell Script for Letsencrypt Certificate Renewal](../assets/files/xu/xu-le.ps1){ .md-button .md-button--primary }
{% elif product=="board-connector" %}
[:material-download-circle: Download PowerShell Script for Letsencrypt Certificate Renewal](../assets/files/bc/bc-le.ps1){ .md-button .md-button--primary }
{% endif %}

#### About win-acme
win-acme creates a scheduled task for the renewal process. 
When this process is triggered, it issues a new certificate and stores it in the Windows Certificate Store. 
The old certificate is deleted. 

#### About the PowerShell Script

The `{{ certificateRenewal }}` script replaces the old certificate in the {{ productName }} settings with the new certificate.
No manual changes in {{ productName }} are required.

The `{{ certificateRenewal }}` script requires 2 input parameters:
- the thumbprint of the old certificate
- the thumbprint of the new certificate


******

#### Related Links
{% if product=="yunio" %}
- [Install an X.509 Certificate](x509-certificate.md)
- [Enable Secure Network Communication (SNC) via X.509 certificate](enable-snc-using-pse-file.md)
- [yunIO Documentation: Server Settings](../documentation/server-settings.md)
{% else %}
- [{{ productName }} Documentation: Install an X.509 Certificate](../documentation/access-restrictions/install-x.509-certificate.md)
- [{{ productName }} Documentation: Server Settings](../documentation/server/server-settings.md)
- [Enable Secure Network Communication (SNC) via X.509 certificate](enable-snc-using-pse-file.md)
{% endif %}