
### Configure SNC in the SAP Source

Follow the steps below to set up an SAP connection that uses SNC:

1. Create or open an SAP source. For more information, see [Connect to SAP](index.md#connect-to-sap).
2. In the *General* tab, enter the system details of your SAP system.  

	!!! tip
		Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.
	
3. In the *Authentication* tab, select the authentication method **Secure Network Communication (SNC)**.<br>
![sap-source-authentication-snc](../../assets/images/documentation/sap-connection/sap-source-authentication-snc.png){:class="img-responsive"}
4. Enter the SAP username and password of an SAP system or dialogue user in the fields **User** and **Password**.
5. Enter the path to the SNC library in the field **SNC library**, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\sapcrypto.dll`.
6. Enter the SAP Partner Name configured for the SAP application server in the field **SNC Partner Name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.
7. In the subsection *When running extractions*, select one of the following SNC implementations:

	| SNC Implementation | Description |
	| :------ |:--- | 
	| **Use static SAP credentials / Windows service account** | This option activates SNC without SSO. If available, the SAP credentials in the fields **User** and **Password** are used for authentication. The Windows Active Directory user used to open the connection is the service account under which the {{ productName }} Windows service runs. |
	| **Request SAP credentials from caller** | This option activates SNC with user and password. If this option is active, SAP credentials entered in the fields **User** and **Password** are not applied. Instead, SAP credentials need to be provided via basic authentication when running an extraction. |
	| **SSO - Log in as caller via External ID** | This option activates SSO with External ID. SSO with External ID uses a Personal Security Environment (PSE) to create a trust relationship between the SAP application server and the service account that runs {{ productName }}. This allows {{ productName }} to impersonate any SAP user. For more information, see [Knowledge Base Article: SSO with External ID](../../knowledge-base/sso-with-external-id.md). |
	| **SSO - Impersonate caller via Kerberos** | This option activates Kerberos SSO. The Windows Active Directory user is used for authentication. For this scenario “HTTPS - Restricted to AD users with Designer read access” must be selected and configured in the [Server Settings](server-settings.md#web-server). For more information, see [Knowledge Base Article: SSO with Kerberos SNC](../../knowledge-base/sso-with-kerberos-snc.md). |
	| **SSO - Enroll certificate on behalf of caller** | This option activates Certificate SSO. The Certificate SSO authentication uses Certificate Enrollment (Enroll-On-Behalf-Of) via Active Directory Certificate Services for the Windows Active Directory user who calls the extraction. For this scenario “HTTPS - Restricted to AD users with Designer read access” must be configured in the [Server Settings](server-settings.md#web-server). For more information, see [Knowledge Base Article: SSO with Client Certificates](../../knowledge-base/sso-with-client-certificates.md). |

8. Click **[Test designer connection]** to validate the connection between the {{ productName }} Designer and the SAP system. 
9. Click **[Test server connection]** to validate the connection between the {{ productName }} Server and the SAP system. 
10. Click **[OK]** to save the SAP source.
