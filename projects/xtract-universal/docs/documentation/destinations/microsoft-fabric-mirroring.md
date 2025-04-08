---
title: Microsoft Fabric Mirroring
description: How to set up open mirroring of SAP in Xtract Universal
status: beta
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

## Workflow

Follow the workflow below to set up Open Mirroring with {{ productName }}:

<div class="workflow" markdown>

1. Create a mirrored database in Microsoft Fabric.
2. [Create a Microsoft Fabric Mirroring destination](#create-a-new-microsoft-fabric-open-mirroring-destination) in {{ productName }}.
3. Create a [TableCDC extraction](../table-cdc/index.md) and assign the {{ page.meta.title }} destination.
4. [Run the extraction](../execute-and-automate/run-an-extraction.md#run-extractions-in-the-designer) to initialize the delta mechanism and optionally load the fist data to Microsoft Fabric.
5. [Schedule the extraction](../execute-and-automate/call-via-scheduler.md) to run in an interval of your choice.

</div>

## Requirements

- An active and running Fabric capacity is required. A paused or deleted capacity affects Mirroring so that no data is replicated.
- The Landing Zone URL of a mirrored database in Microsoft OneLake is required, see [Microsoft Tutorial: Configure Microsoft Fabric open mirrored databases](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring-tutorial).
- The {{ page.meta.title }} destination is currently only supported by the [Table CDC](../table-cdc/index.md) extraction type. 
Table CDC requires the installation of the corresponding [custom function modules](../setup-in-sap/custom-function-module-for-tablecdc.md) in SAP. 
Also note that Table CDC is licensed and purchased separately from other extraction types.
- The {{ page.meta.title }} destination uses [Microsoft Entra ID (formerly Azure Active Directory)](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) with OAuth 2.0 for authentication.
Follow the steps below to set up the authentication with Microsoft:
	1. Register Microsoft Fabric OneLake as an app using the [Azure portal > App registrations](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade) service.
	For more information, see [Microsoft Documentation: Register an application in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate#configure-platform-settings).
	2. Make sure the registered app allows authentication from *Mobile and desktop applications*:<br>
	![authentication](../../assets/images/documentation/destinations/fabric/auth.png)
	3. Add the following API permissions to the registered app:
		- **Azure Storage > user impersonation** <br>
		This allows {{ productName }} to act on behalf of the signed-in user and access Azure Storage resources like OneLake.
		- **Microsoft Graph > User.Read**<br>
		This allows {{ productName }} to read the profile of the signed-in user like name and tenant ID.
		
		For more information, see [Microsoft Documentation: Add permissions to your web API](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-your-web-api).<br>
		![API permissions](../../assets/images/documentation/destinations/fabric/api-permissions.png)
	4. When connecting {{ productName }} to Microsoft Fabric, make sure to provide the credentials of a Microsoft user that has one of the following user roles:
		- Storage Blob Data Contributor
		- Storage Blob Data Owner
		
		For more information, see [Microsoft Documentation: Assign an Azure role](https://learn.microsoft.com/en-us/azure/storage/blobs/assign-azure-role-data-access?tabs=portal#assign-an-azure-role).


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


You can copy the URL from the [Microsoft Fabric portal](https://app.fabric.microsoft.com/home).
The Landing Zone URL is displayed in the details section on the Home screen of the mirrored database.

![mirroring-landing-zone-url](../../assets/images/documentation/destinations/fabric-mirroring/mirroring-landing-zone-url.png)

Example: 
`https://onelake.dfs.fabric.microsoft.com/12345678-aaaa-bbbb-cccc-123456789abc/12345678-dddd-ffff-gggg-123456789abc/Files/LandingZone`


## Connection Retry and Rollback

{% include "destinations/connection-retry.md" %}

{% include "destinations/connection-retry-cloud.md" %}

	
{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/fabric-mirroring/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

!!! note
	If an object's name does not begin with a letter, the prefix 'x' is automatically appended, e.g., `_namespace_tabname.csv` is renamed to `x_namespace_tabname.csv` upon upload. <br> This ensures compatibility with Azure Data Factory, Hadoop, and Spark, which require names to start with a letter or handle certain symbols differently.

{% include "parameters/file-name-script-expressions.md" %}

<!-- {% include "destinations/column-name-style.md" %} -->

{% include "destinations/date-conversion.md" %}



## Related Links
- [Microsoft Documentation: What is Mirroring in Fabric?](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/overview)
- [Microsoft Documentation: Open mirroring in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring)
- [Microsoft Documentation: Tutorial Configure Microsoft Fabric open mirrored databases](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring-tutorial)
