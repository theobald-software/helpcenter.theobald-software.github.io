---
title: Licensing
description: Licensing
status: beta
---

A demo license is automatically installed with the installation of ERPConnect.<br>
A regular license is provided in the [Theobald Software Customer Portal](https://my.theobald-software.com/) after purchasing the product. 

!!! note
    The standard demo license does not support working in web environments.
    To test ERPConnect with your ASP.NET project, apply for a test license number at [sales@theobald-software.com](mailto:sales@theobald-software.com).

### Installing the ERPConnect License 

After the end of the test period ERPConnect will not run without a valid license.

Because ERPConnect checks the licence number on every call (client and server), you need to set your license number before the first connection to SAP is established.<br>
Set the license during runtime through the static class `ERPConnect.LIC` as shown in the code below.

```csharp linenums="1"
ERPConnect.LIC.SetLic("XXXXXXXXXX");
```


### Maintenance
Contact the [sales department](mailto:sales@theobald-software.com) for information about available maintenance options.<br>
In case of technical difficulties, contact the support team: [https://support.theobald-software.com](https://support.theobald-software.com).

<!---
### Support
-->
{% include "requirements/support.md" %}

{% include "requirements/support-disclaimer.md" %}


****
#### Related Links
- [Theobald Software Customer Portal](https://my.theobald-software.com/)
- [Theobald Software Support Portal](https://support.theobald-software.com/helpdesk)
