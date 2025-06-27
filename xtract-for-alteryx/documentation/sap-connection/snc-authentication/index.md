This page shows how to configure the Xtract data source to use encrypted communication via [Secure Network Communication (SNC)](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true) between Xtract for Alteryx and SAP.

### Prerequisites

- SNC must be configured in your SAP system. For more information about SNC configuration in SAP, see [SAP Help: Configuring the Application Server](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm).
- Check the SAP profile parameter *snc/gssapi_lib* in SAP (transaction RZ10) to determine, which library is used for encryption in your SAP system. Your SAP Basis has to import and configure the same library on the application server and on the machine that runs Xtract for Alteryx, e.g., `sapcrypto.dll`.

For information on how to set up SNC via X.509 certificate, refer to the [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../../knowledge-base/enable-snc-using-pse-file/).

### Secure Network Communication (SNC)

Follow the steps below to set up SNC credentials for an SAP connection:

1. In the main menu of the Alteryx Designer navigate to **File > Manage Connections**. The window “Connection Manager” opens.
1. In the tab *Credentials* click **[New]** to create a credential.
1. Enter a name for the credential, e.g., "alice-SNC".
1. Select the authentication method *SAP SNC*.
1. Enter the SAP Partner Name configured for the SAP application server in the field **Partner Name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.
1. Enter the path to the SNC library in the **Library Path** field, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\sapcrypto.dll`.
1. Click **[Save]** to save the credential.

### Assign SNC Credentials to an Xtract Data Source

Follow the steps below to assign the SNC credentials to an Xtract data source:

1. In the main menu of the Alteryx Designer navigate to **File > Manage Connections**. The window “Connection Manager” opens.
1. In the tab *Data Sources* click on a data source to display the details of the data source.
1. Click **+ Connect Credential**.
1. Select the authentication method *SAP SNC*. The sections **USERNAME AND PASSWORD** and **SAP SNC** are displayed.
1. In the section **USERNAME AND PASSWORD**, select the credential that contains the username and password of the SAP dialog or system user that is used for the SAP connection.
1. In the section **SAP SNC**, select the credential that contains the SNC settings for the SAP connection.
1. Click **[Link]** to assign the credentials to the Xtract data source.
