---
title: Connection Settings
description: Overview of SAP connection settings
---

{% include "sap-connection/xu-bc-general-and-authentication.md" %}

### RFC Options

![sap-source-rfc-options](../../assets/images/documentation/sap-connection/sap-source-rfc-options.png){:class="img-responsive" }

{% include "sap-connection/rfc-libraries.md" %}

{% include "sap-connection/trace-directory.md" %}


#### Use SAPGUI

There are SAP Reports and BAPIs that require an installed SAP GUI even when they are called remotely. 
Activate this option only if necessary.

{% include "sap-connection/sap-gui-warning.md" %}
	
### Access Control

![sap-source-access-control](../../assets/images/documentation/sap-connection/sap-source-access-control.png){:class="img-responsive"}

Access control can be performed at the source level. This access control overrides the settings at the server level.
For more information, see [Access Restrictions](#link).

