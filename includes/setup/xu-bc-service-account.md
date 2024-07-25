
This page shows how to run the {{ productName }} service under a dedicated Windows domain user account instead of the *Local System* account.
After the installation, the {{ productName }} service runs under the *Local System* account by default.

The following scenarios require the service to run under a dedicated Windows domain user account:

- Enabling [Kerberos authentication](../access-restrictions/restrict-server-access.md/#restrict-access-to-windows-ad-users-kerberos-authentication) for the {{ productName }} web server
- Enabling Windows authentication for {% if page.meta.product == "xtract-universal" %}an Xtract Universal destination that allows Windows credentials for log on, e.g., SQL Server destination, PostgreSQL destination.{% else %} Board Connector{% endif %}
- Enabling [SSO with Kerberos SNC](../../knowledge-base/sso-with-kerberos-snc.md)
- Enabling [SSO with SAP Logon Tickets](../../knowledge-base/sso-with-logon-ticket.md)

!!! note 
	As of {{ productName }} version 5.0 SAP passwords are encrypted with a key that is derived from the Windows account that runs the {{ productName }} Service.
	The passwords can only be accessed from the same service account, when restoring a backup or moving the files to a different machine. 
	If the service account changes, passwords need to be re-entered manually.

### Basic Settings

1. Create a Windows AD service account and assign an SPN (Service Principle Name) to the service account in the following format: `HTTP/[FQDN of {{ Abbr }} Server]`.<br>

	!!! tip
		Use the ```setspn``` command to check the SPNs of a user account.

	![service account](../../assets/images/documentation/setup/service-account-SPN.png){:class="img-responsive"}
2. Grant access rights to the installation folder of {{ productName }} and all sub folders to the service account as shown in the following screenshot:<br>
![service account permissions](../../assets/images/{{ abbr }}/documentation/setup/service-account-permissions.png){:class="img-responsive"}
3. If applicable, make sure the service account has *Read* access to the private key of the [X.509 certificate](../access-restrictions/install-x.509-certificate.md) used by {{ productName }}.<br>
![service account private key 1](../../assets/images/documentation/setup/service-account-privatekey_1.png){:class="img-responsive" width="64%"}
![service account private key 2](../../assets/images/{{ abbr }}/documentation/setup/service-account-privatekey_2.png){:class="img-responsive" width="34%"}
4. Let the {{ productName }} service run under the service account. Make sure to use the correct domain, e.g., *.company.local* instead of *.company.com*.<br>
![service account services](../../assets/images/{{ abbr }}/documentation/setup/service-account-services.png){:class="img-responsive"}
5. In the {{ productName }} Designer startup window "Connect to {{ productName }} Server", set **Authentication** to *Windows credentials* or *Custom Credentials (Kerberos authentication)*.<br>
![service account login](../../assets/images/{{ abbr }}/documentation/setup/service-account-login.png){:class="img-responsive"}
6. Enter the User Principal Name (UPN) of the service account in the **Target Principal** field. For more information, see [Knowledge Base Article: Target Principal Field](../../knowledge-base/target-principal-TPN.md).<br>


### Settings for SSO with Kerberos SNC

When using [SSO with Kerberos SNC](../../knowledge-base/sso-with-kerberos-snc.md) additional steps are necessary:<br>

1. Set *constrained delegation* for the Windows domain account under which the {{ productName }} Service runs.<br>
![service_account_constr_deleg](../../assets/images/{{ abbr }}/documentation/setup/SSO_WinAD_Delegation.png){:class="img-responsive"}
2. Enter the SPN of the service account under which the SAP ABAP application server is running (SAP Service Account), e.g., `SAPServiceERP/do_not_care`.<br>
For more information about the partner name notation in SAP, see the [SAP Help: Preparing the Primary Application Server Instance](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/en-US/440ebb40b9920d1be10000000a114a6b.html).


*********
#### Related Links
- [Microsoft Documentation: About Service Logon Accounts](https://docs.microsoft.com/en-us/windows/win32/ad/about-service-logon-accounts)
- [Microsoft Documentation: Service Principal Names](https://docs.microsoft.com/en-us/windows/win32/ad/service-principal-names)
- [Knowledge Base Article: Target Principal Field](../../knowledge-base/target-principal-TPN.md)

