---
title: Microsoft Fabric (OneLake)
description: Write SAP data to Microsoft Fabric OneLake
attempt: seven
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination enables users to load SAP data to a Microsoft Fabric Lakehouse.


## Requirements
The {{ page.meta.title }} destination uses [Microsoft Entra ID (formerly Azure Active Directory)](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) with OAuth 2.0 for authentication.
Make sure the authentication uses the following settings:
- Register Microsoft Fabric OneLake as a *Mobile and desktop application*, see [Microsoft Documentation: Configure platform settings](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate#configure-platform-settings):<br>
![authentication](../../assets/images/documentation/destinations/fabric/auth.png)
- Add the following API permissions:
	- Azure Storage - *user impersonation*
	- Microsoft Graph - *User.Read*
	
	For more information, see [Microsoft Documentation: Add permissions to your web API](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-your-web-api).<br>
	![API permissions](../../assets/images/documentation/destinations/fabric/api-permissions.png)
	

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/documentation/destinations/fabric/destination-details.png){:class="img-responsive"}

{% include "destinations/fabric.md" %}

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
	When an object's name does not start with a letter, an 'x' is added at the beginning. , e.g., `_namespace_tabname.csv` becomes `x_namespace_tabname.csv` when uploaded. <br> This ensures compatibility with Azure Data Factory, Hadoop, and Spark, which require names to start with a letter or handle certain symbols differently.

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

{% include "destinations/empty-files.md" %}

----

## Related Links
- [Mirosoft Tutorial: Create a Fabric workspace](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-lakehouse-get-started)
- [Mirosoft Tutorial: Create a lakehouse, ingest sample data, and build a report](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-build-lakehouse)