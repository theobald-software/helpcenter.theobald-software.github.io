This page shows how to run the Board Connector service under a dedicated Windows domain user account. After the installation, the Board Connector service runs under a [virtual service account](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-service-accounts#virtual-accounts) by default.

The following scenarios require the service to run under a dedicated Windows domain user account:

- Enabling [Kerberos authentication](../../access-restrictions/restrict-server-access/#restrict-access-to-windows-ad-users-kerberos-authentication) for the Board Connector web server
- Enabling Windows authentication for Board Connector
- Enabling [SSO with Kerberos SNC](../../../knowledge-base/sso-with-kerberos-snc/)
- Enabling [SSO with SAP Logon Tickets](../../../knowledge-base/sso-with-logon-ticket/)

### Basic Settings

1. Create a Windows AD service account and assign an SPN (Service Principle Name) to the service account in the following format: `HTTP/[FQDN of BC Server]`.

   Tip

   Use the `setspn` command to check the SPNs of a user account.

1. Grant access rights to the installation folder of Board Connector and all sub folders to the service account as shown in the following screenshot:

1. If applicable, make sure the service account has *Read* access to the private key of the [X.509 certificate](../../access-restrictions/install-x.509-certificate/) used by Board Connector.

1. Let the Board Connector service run under the service account. Make sure to use the correct domain, e.g., *.company.local* instead of *.company.com*.

1. In the Board Connector Designer startup window "Connect to Board Connector Server", set **Authentication** to *Windows credentials* or *Custom Credentials (Kerberos authentication)*.

1. Enter the User Principal Name (UPN) of the service account in the **Target Principal** field. For more information, see [Knowledge Base Article: Target Principal Field](../../../knowledge-base/target-principal-TPN/).

### Settings for SSO with Kerberos SNC

When using [SSO with Kerberos SNC](../../../knowledge-base/sso-with-kerberos-snc/) additional steps are necessary:

1. Set *constrained delegation* for the Windows domain account under which the Board Connector Service runs.
1. Enter the SPN of the service account under which the SAP ABAP application server is running (SAP Service Account), e.g., `SAPServiceERP/do_not_care`.\
   For more information about the partner name notation in SAP, see the [SAP Help: Preparing the Primary Application Server Instance](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/en-US/440ebb40b9920d1be10000000a114a6b.html).

______________________________________________________________________

#### Related Links

- [Microsoft Documentation: About Service Logon Accounts](https://docs.microsoft.com/en-us/windows/win32/ad/about-service-logon-accounts)
- [Microsoft Documentation: Service Principal Names](https://docs.microsoft.com/en-us/windows/win32/ad/service-principal-names)
- [Knowledge Base Article: Target Principal Field](../../../knowledge-base/target-principal-TPN/)
