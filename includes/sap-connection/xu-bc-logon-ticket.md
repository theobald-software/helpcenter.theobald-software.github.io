
This page shows how to use SSO via Logon-Tickets between {{ productName }} and SAP.
Note that this connection is not encrypted.

### Prerequisites

- SSO with Logon-Tickets must be configured on the SAP system and and the application server, see [Knowledge Base Article: SSO with Logon-Ticket](../../knowledge-base/sso-with-logon-ticket.md#requirements).
- The {{ productName }} service must run under an [{{ Abbr }} Service Account](#link).
- The {{ productName }} server must be set up to use the HTTPS protocol, see [Server Settings](../server-settings.md#web-server).


### Configure SSO with Logon-Ticket in the SAP Source

Follow the steps below to set up an SAP connection that uses SSO with Logon-Ticket:

1. Create or open an SAP source. For more information, see [Connect to SAP](index.md#connect-to-sap).
2. In the *General* tab, enter the system details of your SAP system.  

	!!! tip
		Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.
	
3. In the *Authentication* tab, select the authentication method **SAP Logon Ticket**.<br>
![sap-source-authentication-logon-ticket](../../assets/images/documentation/sap-connection/sap-source-authentication-logon-ticket.png){:class="img-responsive"}
4. Enter the URL of an Application Server Java (AS Java) that is configured to issue logon tickets in the field **Ticket issuer Url**.
For more information, see [SAP Documentation: Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm).
5. To open the connection in the Windows Active Directory user context of the caller, activate the option **Impersonate caller when running extractions (Kerberos SSO)**. 
Otherwise the connection is opened in the context of the service account under which the {{ productName }} Windows service runs.
6. Click **[Test designer connection]** to validate the connection between the {{ productName }} Designer and the SAP system. 
7. Click **[Test server connection]** to validate the connection between the {{ productName }} Server and the SAP system. 
8. Click **[OK]** to save the SAP source.

*****
#### Related Links
- [Single Sign-On (SSO)](index.md/#single-sign-on-sso)
- [Knowledge Base Article: SSO with Logon-Ticket](../../knowledge-base/sso-with-logon-ticket.md)