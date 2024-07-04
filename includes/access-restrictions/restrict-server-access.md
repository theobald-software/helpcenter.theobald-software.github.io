
This page shows how to restrict access to {{ productName }}'s built in web server to Windows AD users or [custom users](user-management.md#create-custom-users).
Access restrictions on the web server ensure that only dedicated users can execute extractions. 
Windows AD credentials or credentials of a custom user must be submitted when running an extraction.

{% if page.meta.product == "board-connector" %}

!!! note
	As of Board Server version 11.3 submitting credentials for Basic Authentication (custom users) is not supported by the SAP Data Reader.
	Securing web access to extractions can be accomplished by using network level security methods, e.g., firewalls.

{% endif %}

### Prerequisites

Access restrictions require users to access the web server through an https connection (TLS encryption). 
This requires the installation of an X.509 certificate.
If the certificate is not listed in the Windows certificate store, [install the X.509 certificate](install-x.509-certificate.md/#create-the-x509-certificate).

1. Open **Server > Settings** from the main window of the Designer.<br>
![security-manage-users](../../assets/images/documentation/access-restriction/server-settings_manage.png){:class="img-responsive"}
2. In the tab *Web Server* tab, select one of the following protocols:
	- **HTTPS - Restricted to AD users with Designer read access**
	- **HTTPS - Restricted to custom users with Designer read access** 

	![webserver settings](../../assets/images/documentation/access-restriction/server-settings-security.png){:class="img-responsive"}
3. Click **[Select X.509 certificate]**. The "Edit certificate location" window opens.
4. Select the X.509 certificate created for your machine under **Local Machine > Personal**.<br>
![certificate-edit-location](../../assets/images/documentation/access-restriction/certificate-edit-location.png){:class="img-responsive"}
5. Click **[OK]** to confirm your input. The window closes.
6. Optional: Change the port number of the *HTTPS port*.
7. Click **[OK]** to confirm your input. If prompted, restart the server.

### Restrict Access to Windows AD Users (Kerberos Authentication) 

Follow the steps below to limit the execution of extractions to users that pass Windows AD credentials, when calling extractions.
The caller must have at least *Read access* to the Designer.

1. Assign a Windows service account under which the {{ productName }} service runs, see [Change Service Account](../setup/service-account.md).
2. Activate TLS encryption, see [Prerequisites](#prerequisites). <br>
![WebServerSettings_https](../../assets/images/documentation/access-restriction/server-settings-sso-certificate.png){:class="img-responsive"}
3. Open **Server > Settings** from the main window of the Designer. <br>
![security-manage-users](../../assets/images/documentation/access-restriction/server-settings_manage.png){:class="img-responsive"}
4. In the tab *Web Server*, select **HTTPS - Restricted to AD users with Designer read access**.
5. In the tab *Configuration Server*, add the custom users or groups that are allowed to execute extractions. 
For more information, see [Restrict Designer Access](restrict-designer-access.md/#restrict-access-to-the-designer). <br>
![ConfigurationServerSettings_](../../assets/images/documentation/access-restriction/server-settings-sso-certificate-users.png){:class="img-responsive"}
6. Assign at least *Read* permission to the Windows AD users.
7. Close all windows with **[OK]**. If prompted, restart the server.

!!! note
	This type of authentication uses Kerberos authentication via SPNEGO. NTLM is not supported.


### Restrict Access to Custom Users (Basic Authentication)

Follow the steps below to limit the execution of extractions to users that pass [custom credentials](user-management.md/#create-custom-users), when calling extractions.
The custom user must have at least *Read access* to the Designer.

1. Activate TLS encryption, see [Prerequisites](#prerequisites).
2. Open **Server > Settings** from the main window of the Designer. <br>
![security-manage-users](../../assets/images/documentation/access-restriction/server-settings_manage.png){:class="img-responsive"}
3. In the tab *Web Server*, select **HTTPS - Restricted to custom users with Designer read access**.
4. In the tab *Configuration Server*, add the custom users or groups that are allowed to execute an extraction.
For more information, see [Restrict Designer Access](restrict-designer-access.md/#restrict-access-to-the-designer). <br>
![ConfigurationServerSettings_](../../assets/images/documentation/access-restriction/server-settings-sso-certificate-users.png){:class="img-responsive"}
4. Assign at least *Read* permission to the custom users.
5. Close all windows with **[OK]**. If prompted, restart the server.

{% if page.meta.product == "xtract-universal" %}

!!! note
	For information on how to call an extraction with Basic Authentication using the *xu.exe*, see [Basic Authentication via Commandline](../execute-and-automate/call-via-commandline.md#basic-authentication-via-commandline).

{% endif %}


*********
#### Related Links
- [Wikipedia: SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)
- [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../knowledge-base/enable-snc-using-pse-file.md)
- [Server Settings](../server/server-settings.md)