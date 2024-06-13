---
title: SNC Authentication
description: SAP Connection with SNC
---

This page shows how to configure an XTRACT Connection Manager to use encrypted communication via [Secure Network Communication (SNC)](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true) between {{ productName }} and SAP.

{% include "/sap-connection/snc-prerequisites.md" %}

### Configure an XTRACT Connection Manager to use SNC

Follow the steps below to set up an SAP connection that uses SNC:

1. Create or open an XTRACT Connection Manager. For more information, see [Connect to SAP](index.md#connect-to-sap).
2. Enter the system details of your SAP system and enter the SAP username and password of an SAP system or dialogue user.  

	!!! tip
		Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.
	
3. In the "Xtract IS Connection Manager" window, click **Additions**. The window "Xtract IS Connection Manager Additions" opens.
4. Activate the option **SNC enabled**.<br>
![SNC](../../assets/images/xis/documentation/sap-connection/snc-connection-manager.png){:class="img-responsive"}
5. Enter the path to the SNC library for 32 Bit & 64 Bit in the **SNC library** fields, e.g., `C:\Program Files (x86)\SAP\FrontEnd\SecureLogin\sapcrypto.dll`.
6. Enter the SAP Partner Name configured for the SAP application server in the field **Partner Name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.
7. Select the SNC level of protection in the field **Quality of protection**. The default value is *9 - Maximum*. <br>
For more information, see [SAP Documentation: Secure Network Communications (SNC) - Levels of Protection](https://help.sap.com/docs/SAP_NETWEAVER_701/6f3e0bea6c4b101484fcf5305b4d624b/e656f466e99a11d1a5b00000e835363f.html?version=7.01.22#levels-of-protection).
8. Click **[OK]** to confirm your input.
9. Click **[Test Connection]** to validate the connection parameters. 
10. Click **[OK]** to save the XTRACT Connection Manager.

{% include "/sap-connection/download-kerberos-dlls.md" %}
