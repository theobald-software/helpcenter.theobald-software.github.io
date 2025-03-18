---
title: Microsoft Fabric Open Mirroring
description: How to set up open mirroring of SAP in Xtract Universal
status: new
attempt: seven
---

This page shows how to set up and use the {{ page.meta.title }} destination.
This destination enables users to continously map SAP data to a datalake using Microsoft Fabric's open mirroring feature.


## About Open Mirroring

Microsoft Fabric's Open Mirroring allows users to replicate existing data directly into Fabric's OneLake from a variety of external databases and other data sources. 
The data is written into an open mirroring landing zone, where it is processed by the mirroring replication engine of Microsoft Fabric.
Mirroring delivers the data incrementally in a parquet format that is used to merge the data in OneLake. 

For more information, see [Microsoft Documentation: Open mirroring in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring).

!!! note
	Note that Microsoft Fabric Open Mirroring is still in preview. During preview, not all Fabric regions support Mirroring.
	For more information, see [Microsoft Documentation: Microsoft Fabric preview information](https://learn.microsoft.com/en-us/fabric/fundamentals/preview).

### Workflow

1. Create a mirrored database in Microsoft Fabric.
2. Create a Microsoft Fabric Mirroring destination in {{ productName }}.
3. Create a [TableCDC extraction](../table-cdc/index.md) in {{ productName }} and assign the Microsoft Fabric Mirroring destination.
4. Run the extraction to initialize the delta mechanism and optionally load the fist data to Microsoft Fabric.
5. Schedule the extraction in an interval of your choice, see [Execute and Automate - Call via Scheduler](../execute-and-automate/call-via-scheduler.md).


``` mermaid
graph TD
  A[Create a mirrored database in Microsoft Fabric.] --> B[Create a Microsoft Fabric Mirroring destination in Xtract Unviersal];
  B -->C[Create a TableCDC extraction in Xtract Universal and assign the Microsoft Fabric Mirroring destination.];
  C --> D[Run the extraction to initialize the delta mechanism and optionally load the fist data to Microsoft Fabric.];
  D --> [Schedule the extraction in an interval of your choice, see];
```

## Requirements


- An active and running Fabric capacity is required. A paused or deleted capacity affects Mirroring so that no data is replicated.
- Create a mirrored database in Microsoft OneLake, see [Microsoft Tutorial: Configure Microsoft Fabric open mirrored databases](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring-tutorial).
- The {{ page.meta.title }} destination is currently only supported by the [Table CDC](../table-cdc/index.md) extraction type. 
Table CDC requires the installation of the corresponding [custom function modules](../setup-in-sap/custom-function-module-for-tablecdc.md) in SAP. 
Also note that Table CDC is licensed and purchased separately from other extraction types.
- The {{ page.meta.title }} destination uses [Microsoft Entra ID (formerly Azure Active Directory)](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) with OAuth 2.0 for authentication.
Make sure the authentication uses the following settings:
	- Register Microsoft Fabric OneLake as a *Mobile and desktop application*, see [Microsoft Documentation: Configure platform settings](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate#configure-platform-settings):<br>
	![authentication](../../assets/images/documentation/destinations/fabric/auth.png)
	- Add the following [API permissions](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-your-web-api):
		- Azure Storage - *user impersonation*
		- Microsoft Graph - *User.Read*<br>
	![API permissions](../../assets/images/documentation/destinations/fabric/api-permissions.png)


!!! tip
	You can also use the regular [Table](../table/index.md) extraction type to extract the initial full load of the Table.


{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/documentation/destinations/fabric-mirroring/destination-details.png){:class="img-responsive"}

{% include "destinations/fabric.md" %}


### Landing Zone

#### URL

Enter the URL of the Microsoft Fabric Mirroring Landing Zone.
The URL uses the following format:<br>
`https://onelake.dfs.fabric.microsoft.com/<workspace id>/<mirrored database id>/Files/LandingZone/`

Example: 
`https://onelake.dfs.fabric.microsoft.com/12345678-aaaa-bbbb-cccc-123456789abc/12345678-dddd-ffff-gggg-123456789abc/Files/LandingZone`


You can copy the URL from the [Microsoft Fabric portal](https://app.fabric.microsoft.com/home).
The Landing Zone URL is displayed in the details section on the Home screen of the mirrored database.

![mirroring-landing-zone-url](../../assets/images/documentation/destinations/fabric-mirroring/mirroring-landing-zone-url.png)

## Connection Retry and Rollback

{% include "destinations/connection-retry.md" %}

{% include "destinations/connection-retry-cloud.md" %}

	
{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/fabric-mirroring/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

!!! note
	When an object's name does not start with a letter, an 'x' is added at the beginning. , e.g., `_namespace_tabname.csv` becomes `x_namespace_tabname.csv` when uploaded. <br> This ensures compatibility with Azure Data Factory, Hadoop, and Spark, which require names to start with a letter or handle certain symbols differently.

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}



## Related Links
- [Microsoft Documentation: What is Mirroring in Fabric?](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/overview)
- [Microsoft Documentation: Open mirroring in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring)
- [Microsoft Documentation: Tutorial Configure Microsoft Fabric open mirrored databases](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring-tutorial)