---
title: Getting Started
description: Learn how to install and connect to an SAP system with ERPConnect.
hide:
  - navigation
  - tags
---

![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to install and set up ERPConnect for the first time.

### Installation

1. [Download](https://theobald-software.com/en/download-trial/) a 30 day trial version of ERPConnect or download the latest version from the [customer portal](https://my.theobald-software.com/).
2. Run the ERPConnect executable (ERPConnectSetup.exe) to install ERPConnect.
For information on system requirements, see [Requirements](documentation/introduction/requirements.md).
3. Download one of the following SAP libraries from the SAP Marketplace download area: 
	- [Classic RFC library](documentation/introduction/saplibraries.md#client-protocol-rfc-librfc32dll)
	- [Netweaver RFC library](documentation/introduction/saplibraries.md#netweaver-rfc-library)
4. When using a 64-bit system, copy the 64-bit version of the library to the `C:\Windows\System32` folder.<br>
When using a 32-bit system, copy the 32-Bit Version of librfc32.dll to the `C:\Windows\SysWoW64` folder.
5. Add the ERPConnect.dll class library as a reference to your project. <br>
The library is located in the ERPConnect installation directory, e.g., `C:\Program Files\ERPConnect`.

For more information, see [Installation](documentation/introduction/installation.md/#setup).

### Connect to SAP

1. Set the (demo) license **before** connecting to SAP.

	=== "ERPConnectStandard20"
		The demo license is provided as a .json file that is located in the installation directory of ERPConenct, e.g., `{{ installationDir }}\ERPConnectLicense.json`.
		Use one of the following commands to set the license:
		``` csharp
		ERPConnect.LIC.LoadJsonLicense(string filename); //reads and applies the license file
		ERPConnect.LIC.SetJsonLicense(string json); //sets the license using a json string.
		```

	=== "ERPConnect35"

		The demo license is provided in the `ERPConnectTrialKey.txt` file in the installation directory of ERPConenct, e.g., `{{ installationDir }}\ERPConnectTrialKey.txt`.
		Use the following command to set the license number:
		
		```csharp 
		ERPConnect.LIC.SetLic("XXXXXXXXXX");
		```
		
		!!! tip
			You can also provide the path to the ERPConnectTrialKey.txt file to set the license. Example:
			
			```csharp
			ERPConnect.LIC.SetLic(File.ReadAllText("C:\\Program Files\\ERPConnect\\ERPConnectTrialKey.txt"));
			```
			
2. Create an `R3Connection` object and define all [input parameters](documentation/sap-connection/log-on-to-sap.md/#input-parameters).<br>
Make sure to use an SAP dialog user with sufficient SAP authorization, see [Authorization Objects - SAP User Rights](documentation/sap-authority-objects.md).
{% include "erpconnect/code/sap-connection.md" %}
3. Establish the connection using `Open()`.
4. Run the program to test the SAP connection.


	
	

For more information, see [Connect to SAP](documentation/sap-connection/log-on-to-sap.md).

### Next Steps

ERPConnect offers the following features for reading and writing data from and to SAP:

{% include "erpconnect/features.md" %}