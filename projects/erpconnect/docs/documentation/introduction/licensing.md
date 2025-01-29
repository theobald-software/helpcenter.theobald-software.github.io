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

After the end of the test period ERPConnect will not run without a valid license.

ERPConnect checks the licence number on every call (client and server). 
Set the license during runtime before the first connection to SAP is established.

=== "ERPConnectStandard20"

	Place the `ERPConenctLicense.json` file that is provided in the [Customer Portal - My Theobald Software](https://my.theobald-software.com/) into the installation directory of ERPConnect, e.g., `{{ installationDir }}`.
	Use one of the following commands to set the license:
	``` csharp
	ERPConnect.LIC.LoadJsonLicense(string filename); //reads and applies the license file
	ERPConnect.LIC.SetJsonLicense(string json); //sets the license using a json string.
	```

=== "ERPConnect35"

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
