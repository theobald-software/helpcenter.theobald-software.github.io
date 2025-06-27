This page shows how to encrypt communication between Board Connector and the SAP system via [Secure Network Communication (SNC)](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true).

### Prerequisites

- SNC must be configured in your SAP system. For more information about SNC configuration in SAP, see [SAP Help: Configuring the Application Server](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm).
- Check the SAP profile parameter *snc/gssapi_lib* in SAP (transaction RZ10) to determine, which library is used for encryption in your SAP system. Your SAP Basis has to import and configure the same library on the application server and on the machine that runs Board Connector, e.g., `sapcrypto.dll`.
- The Board Connector server must be set up to use the HTTPS protocol, see [Server Settings](../../server/server-settings/#web-server).

For information on how to set up SNC via X.509 certificate, refer to the [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../../knowledge-base/enable-snc-using-pse-file/).

### Configure SNC in the SAP Source

Follow the steps below to set up an SAP connection that uses SNC:

1. Create or open an SAP source. For more information, see [Connect to SAP](../).

1. In the *General* tab, enter the system details of your SAP system.

   Tip

   Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.

1. In the *Authentication* tab, select the authentication method **Secure Network Communication (SNC)**.

1. Enter the SAP username and password of an SAP system or dialogue user in the fields **User** and **Password**.

1. Enter the path to the SNC library in the field **SNC library**, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\sapcrypto.dll`.

1. Enter the SAP Partner Name configured for the SAP application server in the field **SNC Partner Name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.

1. In the subsection *When running extractions*, select one of the following SNC implementations:

   - [Use static SAP credentials / Windows service account](../settings/#use-static-sap-credentials-windows-service-account)
   - [Request SAP credentials from caller](../settings/#request-sap-credentials-from-caller)
   - [SSO - Log in as caller via External ID](../settings/#sso-log-in-as-caller-via-external-id)
   - [SSO - Impersonate caller via Kerberos](../settings/#sso-impersonate-caller-via-kerberos)
   - [SSO - Enroll certificate on behalf of caller](../settings/#sso-enroll-certificate-on-behalf-of-caller)

1. Click **[Test designer connection]** to validate the connection between the Board Connector Designer and the SAP system.

1. Click **[Test server connection]** to validate the connection between the Board Connector Server and the SAP system.

1. Click **[OK]** to save the SAP source.

### Download Kerberos DLLs

It is possible to use Kerberos libraries for encryption between the client and the SAP server. For more information, see [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).\
Different DLLs for 32-bit (`gsskrb5.dll`) and 64-bit (`gx64krb5.dll`) platforms are provided with [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).

______________________________________________________________________

#### Related Links

- [Knowledge Base Article: SSO with External ID](../../../knowledge-base/sso-with-external-id/)
- [Knowledge Base Article: SSO with Kerberos SNC](../../../knowledge-base/sso-with-kerberos-snc/)
- [Knowledge Base Article: SSO with Client Certificates](../../../knowledge-base/sso-with-client-certificates/)
