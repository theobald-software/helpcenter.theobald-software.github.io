This page shows how to restrict access to Board Connector's built in web server to Windows AD users or [custom users](../user-management/#create-custom-users). Access restrictions on the web server ensure that only dedicated users can execute extractions. Windows AD credentials or credentials of a custom user must be submitted when running an extraction.

Note

As of Board Server version 11.3 submitting credentials for Basic Authentication (custom users) is not supported by the SAP Data Reader. Securing web access to extractions can be accomplished by using network level security methods, e.g., firewalls.

### Activate TLS Encryption

Access restrictions require users to access the web server through an https connection (TLS encryption). This requires the installation of an X.509 certificate. If the certificate is not listed in the Windows certificate store, [install the X.509 certificate](../install-x.509-certificate/#create-and-import-the-x509-certificate).

1. Open **Server > Settings** from the main window of the Designer.

1. In the tab *Web Server* tab, select one of the following protocols:

   - **HTTPS - Restricted to AD users with Designer read access**
   - **HTTPS - Restricted to custom users with Designer read access**

1. Click **[Select X.509 certificate]**. The "Edit certificate location" window opens.

1. Select the X.509 certificate created for your machine under **Local Machine > Personal**.

1. Click **[OK]** to confirm your input. The window closes.

1. Optional: Change the port number of the *HTTPS port*.

1. Click **[OK]** to confirm your input. If prompted, restart the server.

### Restrict Access to Windows AD Users (Kerberos Authentication)

Follow the steps below to limit the execution of extractions to users that pass Windows AD credentials, when calling extractions. The caller must have at least *Read access* to the Designer.

1. Assign a Windows service account under which the Board Connector service runs, see [Change Service Account](../../server/service-account/).
1. [Activate TLS encryption](#activate-tls-encryption).
1. Open **Server > Settings** from the main window of the Designer.
1. In the tab *Web Server*, select **HTTPS - Restricted to AD users with Designer read access**.
1. In the tab *Configuration Server*, add the custom users or groups that are allowed to execute extractions. For more information, see [Designer Access](../restrict-designer-access/#restrict-access-to-the-designer).
1. Assign at least *Read* permission to the Windows AD users.
1. Close all windows with **[OK]**. If prompted, restart the server.

Note

This type of authentication uses Kerberos authentication via SPNEGO. NTLM is not supported.

### Restrict Access to Custom Users (Basic Authentication)

Follow the steps below to limit the execution of extractions to users that pass [custom credentials](../user-management/#create-custom-users), when calling extractions. The custom user must have at least *Read access* to the Designer.

1. [Activate TLS encryption](#activate-tls-encryption).
1. Open **Server > Settings** from the main window of the Designer.
1. In the tab *Web Server*, select **HTTPS - Restricted to custom users with Designer read access**.
1. In the tab *Configuration Server*, add the custom users or groups that are allowed to execute an extraction. For more information, see [Designer Access](../restrict-designer-access/#restrict-access-to-the-designer).
1. Assign at least *Read* permission to the custom users.
1. Close all windows with **[OK]**. If prompted, restart the server.

______________________________________________________________________

#### Related Links

- [Wikipedia: SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)
- [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../../knowledge-base/enable-snc-using-pse-file/)
- [Knowledge Base Article: Certificate Renewal for TLS](../../../knowledge-base/certificate-renewal/)
- [Server Settings](../../server/server-settings/)
