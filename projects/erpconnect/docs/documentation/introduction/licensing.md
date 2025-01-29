---
title: Licensing
description: Licensing
---

A trial license is automatically installed with the installation of ERPConnect.<br>
A regular license is provided in the [Theobald Software Customer Portal](https://my.theobald-software.com/) after purchasing the product. 

!!! note
    The standard trial license does not support working in web environments.
    To test ERPConnect with your ASP.NET project, apply for a test license number at [sales@theobald-software.com](mailto:sales@theobald-software.com).

### Installing the ERPConnect License 

The demo license is valid for one month after downloading. 
After this period, a valid license key or license file must be provided.

ERPConnect checks the licence number on every call (client and server). 
Set the license during runtime before the first connection to SAP is established.

=== "ERPConnectStandard20.dll"

	The `ERPConenctLicense.json` file that contains the license is provided in the [Customer Portal - My Theobald Software](https://my.theobald-software.com/). 
	Use one of the following methods to set the license.
	
	- Read the license file and apply the license:
		``` csharp
		ERPConnect.LIC.LoadJsonLicense(string filename);
		```
	- Copy and paste the content of the `ERPConnectLicense.json` file into a constant string in the code and use the string to set the license:
		```chsarp
		ERPConnect.LIC.SetJsonLicense(string json); 
		```

=== "ERPConnect35.dll"

	Use the following command to set the license number:
	
	```csharp 
	ERPConnect.LIC.SetLic("XXXXXXXXXX");
	```



### Maintenance
Contact the [sales department](mailto:sales@theobald-software.com) for information about available maintenance options.<br>
In case of technical difficulties, contact the support team: [https://support.theobald-software.com](https://support.theobald-software.com).

<!---
### Support
-->
{% include "setup/support.md" %}

{% include "setup/support-disclaimer.md" %}


****
#### Related Links
- [Theobald Software Customer Portal](https://my.theobald-software.com/)
- [Theobald Software Support Portal](https://support.theobald-software.com/helpdesk)
