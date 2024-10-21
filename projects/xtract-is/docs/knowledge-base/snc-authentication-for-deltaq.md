---
title: SNC Authentication for DeltaQ and OHS
description: SNC Authentication for DeltaQ and OHS extraction types
---


The following article is for users who want to run SSIS packages with SNC Authentication when {{ deltaq }} or {{ ohs }} {{ components }} are used. 

When using Secure Network Connection (SNC), the associated application server, RFC destination (*SM59*) and SAP user need to enable SNC via partner name. 
This way, the communication between the application server and Xtract IS takes place via an RFC destination for {{ deltaq }} or {{ ohs }} {{ components }}. 

### User Configuration in SAP

Follow the steps below to enable SNC for the SAP user that is used in Xtract IS:

1. Open SAP and run the SAP transaction SU01.
2. Enter the name of the SAP user that is used in the XTRACT Connection Manager and click **[Change]**. 
3. Open the SNC tab and provide the SNC Name of the SAP user :number-1:. In the depicted example, *MALAPATI* is the user and *THEOBALD.LOCAL* is the domain.<br>
![sap_user_settings_snc](../assets/images/articles/xis/sap_user_settings_snc.png){:class="img-responsive"}
4. Click **[Save]**. 


### SAP Connection Settings in Xtract IS

Follow the steps below to enable SNC in Xtract IS:

1. Open the Connection Manager of the SAP connection.
2. Provide details of an SAP user that has SNC enabled :number-1:.<br>
![connection_manager](../assets/images/articles/xis/connection_manager.png){:class="img-responsive"}
3. Click **Additions**. The window "XTRACT Connection Manager Additions" opens.<br>
	![connection_manager_addition](../assets/images/articles/xis/connection_manager_addition.png){:class="img-responsive"}
	1. Check the box SNC :number-2:.
	2. Enter the complete path of the Kerberos library in the field **SNC library 32 Bit** :number-3:.
	3. Enter the complete path of the Kerberos library in the field **SNC library 64 Bit** :number-4:.
	4. Enter the SPN of the SAP service account in the field **Partner name** :number-5:. <br>Use the following notation: `p:[SPN]@[Domain-FQDN-Uppercase]`.
	5. Set the **Quality of Protectio** to *8 - Default* :number-6:.
	6. Click **[OK]** :number-7: to save your input.
4. Click **[Test connection]** :number-8:. If the connection is successful, a confirmation window opens.
5. Click **[OK]** to confirm.
   

### RFC Destination Configuration in SAP

Follow the steps below to enable SNC for the corresponding RFC destination in regard to the Service Principal Name (SPN) of the SAP user account. 

1. Open SAP and run the SAP transaction SM59.
2. Double-click on an existing TCP/IP RFC destination, see [Create an RFC Destination](../documentation/setup-in-sap/customization-for-ohs-in-bw.md/#create-an-rfc-destination).
3. Navigate to **Edit > SNC Options**. The window "Change View "SNC Extension": Details" opens.<br>
![rfc_destination_snc1](../assets/images/articles/xis/rfc_destination_snc1.png){:class="img-responsive"}
	1. Provide the SPN of the SAP user account in the field **Partners** :number-1:, e.g., *p:RfcServer/Malapati@THEOBALD.LOCAL*.
    2. Set the **Quality of Protection** to *8 - Default* :number-2:.
    3. Activate the checkbox **SNC Active** :number-3:.
4.	Open the Unicode tab and activate **Unicode**.<br>
![rfc_destination_unicode](../assets/images/articles/xis/rfc_destination_unicode.png){:class="img-responsive"}
5. Click **[Save]** to save your changes.

***********
#### Related Links
- [Documentation: Create an RFC Destination](../documentation/setup-in-sap/customization-for-ohs-in-bw.md/#create-an-rfc-destination)
- [Documentation: Connect to SAP](../documentation/sap-connection/index.md/#connect-to-sap)
- [Documentation: SAP Connection with SNC](../documentation/sap-connection/snc-authentication.md)
- [SAP Help: Maintaining RFC destinations and their SNC options](https://help.sap.com/viewer/e73bba71770e4c0ca5fb2a3c17e8e229/7.5.8/en-US/57898009a859493a8bce56caaf0f8e13.html)

