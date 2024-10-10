
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

	- [Use static SAP credentials / Windows service account](settings.md/#use-static-sap-credentials-windows-service-account)
	- [Request SAP credentials from caller](settings.md/#request-sap-credentials-from-caller)
	- [SSO - Log in as caller via External ID](settings.md/#sso-log-in-as-caller-via-external-id)
	- [SSO - Impersonate caller via Kerberos](settings.md/#sso-impersonate-caller-via-kerberos)
	- [SSO - Enroll certificate on behalf of caller](settings.md/#sso-enroll-certificate-on-behalf-of-caller)

8. Click **[Test designer connection]** to validate the connection between the {{ productName }} Designer and the SAP system. 
9. Click **[Test server connection]** to validate the connection between the {{ productName }} Server and the SAP system. 
10. Click **[OK]** to save the SAP source.
