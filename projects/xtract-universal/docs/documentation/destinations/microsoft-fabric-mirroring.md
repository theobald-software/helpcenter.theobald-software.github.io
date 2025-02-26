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
	
## Requirements


- An active and running Fabric capacity is required. A paused or deleted capacity affects Mirroring so that no data is replicated.
- The {{ page.meta.title }} destination is currently only supported by the [Table CDC](../documentation/table-cdc/index.md) extraction type. Table CDC requires the installation of the corresponding [custom function modules](../documentation/setup-in-sap/custom-function-module-for-tablecdc.md) in SAP. 
Also note that Table CDC is licensed and purchased separately from other extraction types.
- The {{ page.meta.title }} destination uses [Microsoft Entra ID (formerly Azure Active Directory)](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) with OAuth 2.0 for authentication.
Make sure the authentication uses the following settings:
	- Register Microsoft Fabric OneLake as a *Mobile and desktop application*, see [Microsoft Documentation: Configure platform settings](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate#configure-platform-settings):<br>
	![authentication](../../assets/images/documentation/destinations/fabric/auth.png)
	- Add the following [API permissions](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-your-web-api):
		- Azure Storage - *user impersonation*
		- Microsoft Graph - *User.Read*<br>
	![API permissions](../../assets/images/documentation/destinations/fabric/api-permissions.png)


{% include "destinations/create-destination.md" %}

...

!!! tip
	You can also use the regular [Table](../documentation/table/index.md) extraction type to extract the initial full load of the Table.


RowMaker value should be 0 for INSERT by default. User has the option to change it e.g. to 4 for UPSERT
Default option for Table is to use an existing one if available. User has the option to set it to: Drop and create.


******

#### Related Links
- [Microsoft Documentation: What is Mirroring in Fabric?](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/overview)
- [Microsoft Documentation: Open mirroring in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring)
- [Microsoft Documentation: Tutorial Configure Microsoft Fabric open mirrored databases](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring-tutorial)