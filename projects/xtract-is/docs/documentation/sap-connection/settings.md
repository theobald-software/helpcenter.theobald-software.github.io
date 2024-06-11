---
title: Connection Settings
description: Overview of SAP connection settings
---

This page contains an overview of the SAP connection settings in the XTRACT Connection Manager. 

![Connection-Manager](../../assets/images/xis/documentation/sap-connection/Connection-Manager.png){:class="img-responsive" }

### SAP Credentials

Enter the credentials of an SAP dialog or an SAP system user in the following input fields:

| Input Field | Description |
| :------ |:--- | 
| **Client** | A three-digit number of the SAP client between 000 and 999, e.g., 800. | 
| **Username** | SAP username. | 
| **Password** | Password of the SAP user. | 
| **Language** | The logon language for the SAP system, e.g., EN for English or DE for German. | 

### Connection Methods

Some input fields for the SAP connection vary depending on the selected connection method. 
{{ productName }} supports the following connection methods to SAP systems:

- Connection to a single application server.
- Connection to a message server, see [SAP Documentation: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).

=== "Use Single Application Server"

	| Input Field | Description |
	| :------ |:--- | 
	| **Application server** |  Host name or IP address of the application server (Property Host).  | 
	| **Instance number** | A two-digit number between 00 and 99 (Property SystemNumber). | 

=== "Use Load Balancing"

	| Input Field | Description |
	| :------ |:--- | 
	| **System ID** |  Three-digit System ID (Property SID e.g.,  MSS). | 
	| **Logon group** |  Property LogonGroup, usually *PUBLIC*. | 
	| **Message Server** |  Name or IP address of the message server (Property MessageServer). | 


### Trace Directory

You can log debug information and save it locally. <br>
Enter a path to a local directory in the field **Trace directory** to save the debug information.
For more information, see [Troubleshooting: Trace Directory](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).

!!! warning
	**Increase of used hard drive memory.** <br>
	A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
	Activate the debug logging only when necessary e.g., upon request of the support team.

### RFC Libraries

The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system.  
There are two options for using RFC libraries in Xtract IS:
- Use classic RFC library (librfc32.dll)
- Use NetWeaver RFC libraries (sapnwrfc.dll)

!!! tip "recommendation" 
	Use the not supported librfc32.dll for some {{ components }}, e.g., DeltaQ as it runs more stable than the NetWeaver RFC library.

See additional information on SAP libraries on the [SAP Help Site - RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm) <br>
SAP does not [support librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) anymore. 

For some older SAP releases, e.g., R/3 4.6C, it is necessary to enter the user name in upper case when using the NetWeaver RFC library.

!!! note 
	When using the NetWeaver RFC library with the {{ deltaq }} {{ component }} or the {{ ohs }} {{ component }}, the RFC destination in SAP transaction SM59 must be set to *Unicode*. 

### Test Connection

Clicking **[Test Connection]** validates the connection parameters. 
A window with a status message opens in the bottom right corner of the window.


### Additions

In the window "Xtract IS Connection Manager" click **Additions**. 
The window "Xtract IS Connection Manager Additions" opens.

![SNC](../../assets/images/xis/documentation/sap-connection/snc-connection-manager.png){:class="img-responsive"}

#### SNC

The section *SNC* contains the Secure Network Connection options of the XTRACT Connection Manager.
For more information, see [SNC Authentication](snc-authentication.md)<br>

| Input Field | Description |
| :------ |:--- | 
| **SNC enabled** | Activate this option to enable Secure Network Communication (SNC) between {{ productName }} and SAP. |
| **SNC library (32 Bit, Visual Studio)** | The path to the SNC library for 32 Bit, e.g., `C:\Program Files (x86)\SAP\FrontEnd\SecureLogin\sapcrypto.dll` |
| **SNC library (64 Bit)** | The path to the SNC library for 64 Bit, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\sapcrypto.dll` |
| **Partner Name** | The SAP Partner Name configured for the SAP application server, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`. |
| **Quality of Protection** | The SNC level of protection. The default value is *9 - Maximum*. For more information, see [SAP Documentation: Secure Network Communications (SNC) - Levels of Protection](https://help.sap.com/docs/SAP_NETWEAVER_701/6f3e0bea6c4b101484fcf5305b4d624b/e656f466e99a11d1a5b00000e835363f.html?version=7.01.22#levels-of-protection). |

#### Expert Options

| Input Field | Description |
| :------ |:--- | 
| **Legacy storage mode (connection string)** | Activate this option, if you still use a single connection string for the SAP connection (default in {{ productName }} versions before 09.2017). You can either use *Connection properties* or a *Connection string*, not both. *Connection string* does not support [sensitive environment variable](connection-parameters.md#sensitive-environment-variable-in-ssisdb-catalog).| 
| **Obfuscate Password** | Masks the SAP connection password. This option is activated by default when activating **Legacy storage mode**.|
| **Internal Table Function** | Defines the function module that is used for Xtract IS' internal communication with SAP, e.g., retrieving metadata. To [change the selected function module](../setup-in-sap/custom-function-module-for-table-extraction.md), type the name of function module manually. |
| **AttachesSapGui** | This option is only accessible in the *Properties* of the XTRACT Connection Manager and not in the GUI. There are SAP Reports and BAPIs that require an installed SAP GUI even when they are called remotely. In this case, set the *AttachesSapGui* property in the *Expert Options* of the XTRACT Connection Manager to *True*. |

!!! warning
	**'sapgui' start failed.**<br>
	Sometimes SAP opens a pop-up window that requires input when running extractions.
	To deactivate pop-up windows, open the SAP GUI Logon pad and navigate to **Options... > Security Settings**. 
	Click the **[Open Security Configuration]** button and select *Allow* as the **Default Action**.
	Apply the changes and close the SAP GUI Logon pad.