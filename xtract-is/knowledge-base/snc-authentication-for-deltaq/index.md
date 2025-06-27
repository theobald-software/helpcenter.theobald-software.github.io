The following article is for users who want to run SSIS packages with SNC Authentication when Xtract DeltaQ or Xtract OHS components are used.

When using Secure Network Connection (SNC), the associated application server, RFC destination (*SM59*) and SAP user need to enable SNC via partner name. This way, the communication between the application server and Xtract IS takes place via an RFC destination for Xtract DeltaQ or Xtract OHS components.

### User Configuration in SAP

Follow the steps below to enable SNC for the SAP user that is used in Xtract IS:

1. Open SAP and run the SAP transaction SU01.
1. Enter the name of the SAP user that is used in the XTRACT Connection Manager and click **[Change]**.
1. Open the SNC tab and provide the SNC Name of the SAP user . In the depicted example, *MALAPATI* is the user and *THEOBALD.LOCAL* is the domain.
1. Click **[Save]**.

### SAP Connection Settings in Xtract IS

Follow the steps below to enable SNC in Xtract IS:

1. Open the Connection Manager of the SAP connection.
1. Provide details of an SAP user that has SNC enabled .
1. Click **Additions**. The window "XTRACT Connection Manager Additions" opens.
   1. Check the box SNC .
   1. Enter the complete path of the Kerberos library in the field **SNC library 32 Bit** .
   1. Enter the complete path of the Kerberos library in the field **SNC library 64 Bit** .
   1. Enter the SPN of the SAP service account in the field **Partner name** .\
      Use the following notation: `p:[SPN]@[Domain-FQDN-Uppercase]`.
   1. Set the **Quality of Protectio** to *8 - Default* .
   1. Click **[OK]** to save your input.
1. Click **[Test connection]** . If the connection is successful, a confirmation window opens.
1. Click **[OK]** to confirm.

### RFC Destination Configuration in SAP

Follow the steps below to enable SNC for the corresponding RFC destination in regard to the Service Principal Name (SPN) of the SAP user account.

1. Open SAP and run the SAP transaction SM59.
1. Double-click on an existing TCP/IP RFC destination, see [Create an RFC Destination](../../documentation/setup-in-sap/customization-for-ohs-in-bw/#create-an-rfc-destination).
1. Navigate to **Edit > SNC Options**. The window "Change View "SNC Extension": Details" opens.
   1. Provide the SPN of the SAP user account in the field **Partners** , e.g., *p:RfcServer/Malapati@THEOBALD.LOCAL*.
   1. Set the **Quality of Protection** to *8 - Default* .
   1. Activate the checkbox **SNC Active** .
1. Open the Unicode tab and activate **Unicode**.
1. Click **[Save]** to save your changes.

______________________________________________________________________

#### Related Links

- [Documentation: Create an RFC Destination](../../documentation/setup-in-sap/customization-for-ohs-in-bw/#create-an-rfc-destination)
- [Documentation: Connect to SAP](../../documentation/sap-connection/#connect-to-sap)
- [Documentation: SAP Connection with SNC](../../documentation/sap-connection/snc-authentication/)
- [SAP Help: Maintaining RFC destinations and their SNC options](https://help.sap.com/viewer/e73bba71770e4c0ca5fb2a3c17e8e229/7.5.8/en-US/57898009a859493a8bce56caaf0f8e13.html)
