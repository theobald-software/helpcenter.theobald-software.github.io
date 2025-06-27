This page shows how to use SSO via Logon-Tickets between Board Connector and SAP. Note that this connection is not encrypted.

### Prerequisites

- SSO with Logon-Tickets must be configured on the SAP system and and the application server, see [Knowledge Base Article: SSO with Logon-Ticket](../../../knowledge-base/sso-with-logon-ticket/#requirements).
- The Board Connector service must run under an [BC Service Account](../../server/service-account/).
- The Board Connector server must be set up to use the HTTPS protocol, see [Server Settings](../../server/server-settings/#web-server).

### Configure SSO with Logon-Ticket in the SAP Source

Follow the steps below to set up an SAP connection that uses SSO with Logon-Ticket:

1. Create or open an SAP source. For more information, see [Connect to SAP](../).

1. In the *General* tab, enter the system details of your SAP system.

   Tip

   Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.

1. In the *Authentication* tab, select the authentication method **SAP Logon Ticket**.

1. Enter the URL of an Application Server Java (AS Java) that is configured to issue logon tickets in the field **Ticket issuer Url**. For more information, see [SAP Help: Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm).

1. To open the connection in the Windows Active Directory user context of the caller, activate the option **Impersonate caller when running extractions (Kerberos SSO)**. Otherwise the connection is opened in the context of the service account under which the Board Connector Windows service runs.

1. Click **[Test designer connection]** to validate the connection between the Board Connector Designer and the SAP system.

1. Click **[Test server connection]** to validate the connection between the Board Connector Server and the SAP system.

1. Click **[OK]** to save the SAP source.

______________________________________________________________________

#### Related Links

- [Single Sign-On (SSO)](../#single-sign-on-sso)
- [Knowledge Base Article: SSO with Logon-Ticket](../../../knowledge-base/sso-with-logon-ticket/)
