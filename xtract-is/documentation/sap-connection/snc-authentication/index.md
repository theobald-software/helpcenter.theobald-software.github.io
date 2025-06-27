This page shows how to configure an XTRACT Connection Manager to use encrypted communication via [Secure Network Communication (SNC)](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true) between Xtract IS and SAP.

### Prerequisites

- SNC must be configured in your SAP system. For more information about SNC configuration in SAP, see [SAP Help: Configuring the Application Server](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm).
- Check the SAP profile parameter *snc/gssapi_lib* in SAP (transaction RZ10) to determine, which library is used for encryption in your SAP system. Your SAP Basis has to import and configure the same library on the application server and on the machine that runs Xtract IS, e.g., `sapcrypto.dll`.

For information on how to set up SNC via X.509 certificate, refer to the [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../../knowledge-base/enable-snc-using-pse-file/).

### Configure an XTRACT Connection Manager to use SNC

Follow the steps below to set up an SAP connection that uses SNC:

1. Create or open an XTRACT Connection Manager. For more information, see [Connect to SAP](../#connect-to-sap).

1. Enter the system details of your SAP system and enter the SAP username and password of an SAP system or dialogue user.

   Tip

   Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.

1. In the "XTRACT Connection Manager" window, click **Additions**. The window "XTRACT Connection Manager Additions" opens.

1. Activate the option **SNC enabled**.

1. Enter the path to the SNC library for 32 Bit & 64 Bit in the **SNC library** fields, e.g., `C:\Program Files (x86)\SAP\FrontEnd\SecureLogin\sapcrypto.dll`.

1. Enter the SAP Partner Name configured for the SAP application server in the field **Partner Name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.

1. Select the SNC level of protection in the field **Quality of protection**. The default value is *9 - Maximum*.\
   For more information, see [SAP Help: Secure Network Communications (SNC) - Levels of Protection](https://help.sap.com/docs/SAP_NETWEAVER_701/6f3e0bea6c4b101484fcf5305b4d624b/e656f466e99a11d1a5b00000e835363f.html?version=7.01.22#levels-of-protection).

1. Click **[OK]** to confirm your input.

1. Click **[Test Connection]** to validate the connection parameters.

1. Click **[OK]** to save the XTRACT Connection Manager.

### Download Kerberos DLLs

It is possible to use Kerberos libraries for encryption between the client and the SAP server. For more information, see [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).\
Different DLLs for 32-bit (`gsskrb5.dll`) and 64-bit (`gx64krb5.dll`) platforms are provided with [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).
