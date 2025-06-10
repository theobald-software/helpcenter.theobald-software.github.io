---
title: Microsoft Fabric (OneLake)
description: Write SAP data to Microsoft Fabric OneLake
attempt: seven
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination enables users to load SAP data to a Microsoft Fabric Lakehouse.


## Demonstration Video

The following video demonstrates how to set up the {{ page.meta.title }} destination and how to load SAP data into a Microsoft Fabric Lakehouse.

<div class="video-wrapper"> 
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2J00qUiKDkM?si=AdVqxKAndvuoUG_G&amp;start=1052" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Requirements

The {{ page.meta.title }} destination uses [Microsoft Entra ID (formerly Azure Active Directory)](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) with OAuth 2.0 for authentication.
Follow the steps below to set up the authentication with Microsoft:
1. Register Microsoft Fabric OneLake as an app using the [Azure portal > App registrations](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade) service.
For more information, see [Microsoft Documentation: Register an application in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate#configure-platform-settings).
2. Make sure the registered app allows authentication from *Mobile and desktop applications*:<br>
![authentication](../../assets/images/documentation/destinations/fabric/auth.png)
3. Add the following API permissions to the registered app:
	- **Azure Storage > user impersonation** <br>
	This allows {{ productName }} to act on behalf of the signed-in user and access Azure Storage resources like OneLake.
	- **Microsoft Graph > User.Read**<br>
	This allows {{ productName }} to read the profile of the signed-in user.
	
	For more information, see [Microsoft Documentation: Add permissions to your web API](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-your-web-api).<br>
	![API permissions](../../assets/images/documentation/destinations/fabric/api-permissions.png)
4. When connecting {{ productName }} to Microsoft Fabric, make sure to provide the credentials of a Microsoft user that has one of the following user roles:
	- Storage Blob Data Contributor
	- Storage Blob Data Owner
	
	For more information, see [Microsoft Documentation: Assign an Azure role](https://learn.microsoft.com/en-us/azure/storage/blobs/assign-azure-role-data-access?tabs=portal#assign-an-azure-role).


{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/documentation/destinations/fabric/destination-details.png){:class="img-responsive"}

{% include "destinations/fabric.md" %}


### Files Folder

#### URL

Enter the URL of the Lakehouse, including the folder path in which the data is written.
Example:<br>
`https://onelake.dfs.fabric.microsoft.com/my-workspace/my-lakehouse.Lakehouse/my-folder`

You can copy the URL in the [Microsoft Fabric portal](https://app.fabric.microsoft.com/home) using the properties of a OneLake folder:
	
![xu-onelake-url](../../assets/images/documentation/destinations/fabric/url.png)



### File Format

Select the required file format. You can choose between *CSV*, *JSON* and *Parquet*.

![Destination-Details](../../assets/images/documentation/destinations/fabric/destination-details_2.png){:class="img-responsive"}

#### CVS Settings

The settings for file type *CSV* correspond to the settings of the *Flat File CSV* destination:

- [CSV Settings](csv-flat-file.md/#csv-settings)
- [Convert / Encoding](csv-flat-file.md/#convert-encoding)

#### JSON Settings

To use the JSON file format, no further settings are necessary.

#### Parquet Settings

The settings for file type *Parquet* correspond to the settings of the *Flat File Parquet* destination - [Compatibility Mode](parquet.md/#compatibility-mode).


## Connection Retry and Rollback

{% include "destinations/connection-retry.md" %}

{% include "destinations/connection-retry-cloud.md" %}

Rollback applies to situations where extractions fail, not because of connection issues, but due to an error when connecting to SAP. 
In these cases, Xtract Universal attempts to delete any files created in the Lakehouse during the extraction process.
	
{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/fabric/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

!!! note
	If an object's name does not begin with a letter, the prefix 'x' is automatically appended, e.g., `_namespace_tabname.csv` is renamed to `x_namespace_tabname.csv` upon upload. <br> This ensures compatibility with Azure Data Factory, Hadoop, and Spark, which require names to start with a letter or handle certain symbols differently.

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

{% include "destinations/empty-files.md" %}

----

## Related Links
- [Mirosoft Tutorial: Create a Fabric workspace](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-lakehouse-get-started)
- [Mirosoft Tutorial: Create a lakehouse, ingest sample data, and build a report](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-build-lakehouse)