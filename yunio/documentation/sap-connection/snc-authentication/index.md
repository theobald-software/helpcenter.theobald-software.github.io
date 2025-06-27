This page shows how to use encrypted communication via [Secure Network Communication (SNC)](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true) between yunIO and SAP.

### Prerequisites

- SNC must be configured in your SAP system. For more information about SNC configuration in SAP, see [SAP Help: Configuring the Application Server](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm).
- Check the SAP profile parameter *snc/gssapi_lib* in SAP (transaction RZ10) to determine, which library is used for encryption in your SAP system. Your SAP Basis has to import and configure the same library on the application server and on the machine that runs yunIO, e.g., `sapcrypto.dll`.

For information on how to set up SNC via X.509 certificate, refer to the [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../../knowledge-base/enable-snc-using-pse-file/).

### SNC Authentication

Follow the steps below to set up an SAP connection that uses SNC:

1. Navigate to the *Connections* menu at the left side navigation area of the Designer.
1. Click **[Add Connection]** to create a new SAP connection or click to edit an existing SAP connection.
1. Enter the system details of your SAP system in the subsection *System*.
1. Set the toggle in the subsection *Authentication* to *Secure Network Communication* authentication.
1. Enter the complete path to the library location in the field **SNC library path**, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
1. Enter the SAP partner name configured for the SAP application server in the field **SNC partner name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.
1. Click **[Test Connection]** to validate the connection parameters.\
   A window with a status message opens in the bottom right corner of the window.
1. Click **[Save]** to save the connection settings.
