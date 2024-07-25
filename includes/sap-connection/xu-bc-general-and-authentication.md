

This page contains an overview of the SAP connection settings in the window "Change Source".<br>
To open the server settings, navigate to **[Server] > [Manager Sources]** in the main window of the Designer and click **[:pen-button:]**.

![sap-source-general](../../assets/images/{{ abbr }}/documentation/sap-connection/open-manage-sources.png){:class="img-responsive"}

### General


Some input fields for the SAP connection vary depending on the selected connection method. 

=== "Single Application Server"

	![sap-source-general](../../assets/images/documentation/sap-connection/sap-source-general.png){:class="img-responsive"}

	| Input Field | Description |
	| :------ |:--- | 
	| **Host** |  Host name or IP address of the application server (Property Host).  | 
	| **Instance No.** | A two-digit number between 00 and 99 (Property SystemNumber). | 
	| **Client** | A three-digit number of the SAP client between 000 and 999, e.g., 800. | 
	| **Language** | The logon language for the SAP system, e.g., EN for English or DE for German. | 

=== "Load Balancing"

	![sap-source-general-load-balancing](../../assets/images/documentation/sap-connection/sap-source-general-load-balancing.png){:class="img-responsive"}

	| Input Field | Description |
	| :------ |:--- | 
	| **Message Server** |  Name or IP address of the message server (Property MessageServer). | 
	| **System ID** |  Three-digit System ID (Property SID e.g.,  MSS). | 
	| **Logon group** |  Property LogonGroup, usually *PUBLIC*. | 
	| **Client** | A three-digit number of the SAP client between 000 and 999, e.g., 800. | 
	| **Language** | The logon language for the SAP system, e.g., EN for English or DE for German. | 

=== "WebSocket"

	![sap-source-websocket](../../assets/images/documentation/sap-connection/sap-source-general-websocket.png){:class="img-responsive"}

	| Input Field | Description |
	| :------ |:--- | 
	| **Host** |  Name or IP address of the SAP (cloud) system. | 
	| **Port** |  Port of the SAP (cloud) system, e.g., 443. | 
	| **Library** |  Path to the SAP Cryptographic Library (download available in the SAP Service Marketplace). | 
	| **Client PSE** |  Path to the client .pse file, see [Knowledge Base Article: Create a Client PSE to connect to SAP Cloud Systems](../../knowledge-base/create-personal-security-environment.md) | 
	| **Client** | A three-digit number of the SAP client between 000 and 999, e.g., 800. | 
	| **Language** | The logon language for the SAP system, e.g., EN for English or DE for German. | 


### Authentication

Some input fields for the SAP connection vary depending on the selected authentication method. 


=== "Plain"

	![sap-source-authentication-plain](../../assets/images/documentation/sap-connection/sap-source-authentication-plain.png){:class="img-responsive"}

	| Input Field | Description |
	| :------ |:--- | 
	| **User** | SAP username. | 
	| **Password** | Password of the SAP user. | 
	| **User name is alias** | Activate this option when connecting to an SAP cloud system using the WebSocket connection method. When this option is active, the name entered in the field **User** is used as the internet user alias. | 
	| **Request SAP credentials from caller when running extractions** | If this option is active, SAP credentials entered in the fields **User** and **Password** are not applied. Instead, SAP credentials need to be provided via basic authentication when running an extraction. Caching the result of extractions is inactive. | 

=== "Secure Network communication (SNC)"

	![sap-source-authentication-snc](../../assets/images/documentation/sap-connection/sap-source-authentication-snc.png){:class="img-responsive"}

	| Input Field | Description |
	| :------ |:--- | 
	| **User** | SAP username. | 
	| **Password** | Password of the SAP user. | 
	| **User name is alias** | Activate this option when connecting to an SAP cloud system using the WebSocket connection method. When this option is active, the name entered in the field **User** is used as the internet user alias. | 
	| **SNC library** | Path to the SNC library, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\sapcrypto.dll` |
	| **SNC Partner Name** | The SAP Partner Name configured for the SAP application server, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`. |
	| **Use static SAP credentials / Windows service account** | This option activates SNC without SSO. If available, the SAP credentials in the fields **User** and **Password** are used for authentication. The Windows Active Directory user used to open the connection is the service account under which the {{ productName }} Windows service runs. |
	| **Request SAP credentials from caller** | This option activates SNC with user and password. If this option is active, SAP credentials entered in the fields **User** and **Password** are not applied. Instead, SAP credentials need to be provided via basic authentication when running an extraction. |
	| **SSO - Log in as caller via External ID** | This option activates SSO with External ID. SSO with External ID uses a Personal Security Environment (PSE) to create a trust relationship between the SAP application server and the service account that runs {{ productName }}. This allows {{ productName }} to impersonate any SAP user. For more information, see [Knowledge Base Article: SSO with External ID](../../knowledge-base/sso-with-external-id.md). |
	| **SSO - Impersonate caller via Kerberos** | This option activates Kerberos SSO. The Windows Active Directory user is used for authentication. For this scenario “HTTPS - Restricted to AD users with Designer read access” must be selected and configured in the [Server Settings](../server/server-settings.md#web-server). For more information, see [Knowledge Base Article: SSO with Kerberos SNC](../../knowledge-base/sso-with-kerberos-snc.md). |
	| **SSO - Enroll certificate on behalf of caller** | This option activates Certificate SSO. The Certificate SSO authentication uses Certificate Enrollment (Enroll-On-Behalf-Of) via Active Directory Certificate Services for the Windows Active Directory user who calls the extraction. For this scenario “HTTPS - Restricted to AD users with Designer read access” must be configured in the [Server Settings](../server/server-settings.md#web-server). For more information, see [Knowledge Base Article: SSO with Client Certificates](../../knowledge-base/sso-with-client-certificates.md). |

=== "SAP Logon Ticket"

	![sap-source-authentication-logon-ticket](../../assets/images/documentation/sap-connection/sap-source-authentication-logon-ticket.png){:class="img-responsive"}

	| Input Field | Description |
	| :------ |:--- | 
	| **Ticket issuer URL** | URL of an Application Server Java (AS Java) that is configured to issue logon tickets. For more information, see [SAP Help: Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm). | 
	| **Impersonate caller when running extractions (Kerberos SSO)** | Activate this option to open the connection in the Windows Active Directory user context of the caller. Otherwise the connection is opened in the context of the service account under which the {{ productName }} Windows service runs. For more information, see [Knowledge Base Article: SSO with Logon-Ticket](../../knowledge-base/sso-with-logon-ticket.md).| 

