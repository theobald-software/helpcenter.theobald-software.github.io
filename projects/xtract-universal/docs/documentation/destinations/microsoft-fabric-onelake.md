---
title: Fabric (OneLake)
description: Write SAP data to Microsoft Fabric OneLake
status: new
attempt: seven
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination enables users to load SAP data to a Microsoft Fabric Lakehouse.


## Requirements
- [Microsoft Entra ID (formerly Azure Active Directory)](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) authentication for Microsoft Fabric.

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/xu/documentation/destinations/fabric/destination-details.png){:class="img-responsive"}

### Authentication

The {{ page.meta.title }} destination uses [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) for authentication.
Register Microsoft OneLake as an application in Entra ID and cofigure OneLake to use the registered application.
	
#### Tenant ID
Enter the Directory (tenant) ID of the registered app.
	
#### Client ID
Enter the Application (client) ID of the registered app. 

!!! tip
	You can copy the tenant ID and client ID in the [Microsoft Entra admin center](https://entra.microsoft.com/#home) or the [Azure portal](https://portal.azure.com/), where the app is registered.<br>
	![xu-azure-blob-con-3](../../assets/images/xu/documentation/destinations/fabric/entraID.png){:class="img-responsive"}

#### Connect
	
Click **[Connect]** to establish a connection to the storage account. 
A browser window pops up, where you have to sign in using your Microsoft credentials.
The "Permissions requested" window lists the requested permissions, see [Knowledge Base Article: Authentication via Microsoft Entra ID](../../knowledge-base/authentication-via-entra-id-with-azure-storage.md). 
Click **[Accept]**. If the connection is successful, a "Connection successful" info window opens. <br>

![xu-entraID](../../assets/images/xu/documentation/destinations/azure-storage/xu-azure-blob-con_4.png){:class="img-responsive"}

### Files Folder

#### URL

Enter the URL of the Lakehouse, including the folder path in which the data is written.
The URL uses the following format:<br>
`https://onelake.dfs.fabric.microsoft.com/<workspaceGUID>/<itemGUID>/<folder>/`

!!! tip
	You can copy the URL in the [Microsoft Fabric portal](https://app.fabric.microsoft.com/home) using the properties of a OneLake folder:
	
	![xu-onelake-url](../../assets/images/xu/documentation/destinations/fabric/url.png)


### File Format

Select the required file format. You can choose between *CSV*, *JSON* and *Parquet*.

![Destination-Details](../../assets/images/xu/documentation/destinations/fabric/destination-details_2.png){:class="img-responsive"}

#### CVS Settings

The settings for file type *CSV* correspond to the settings of the *Flat File CSV* destination:

- [CSV Settings](csv-flat-file.md/#csv-settings)
- [Convert / Encoding](csv-flat-file.md/#convert-encoding)

#### JSON Settings

To use the JSON file format, no further settings are necessary.

#### Parquet Settings

The settings for file type *Parquet* correspond to the settings of the *Flat File Parquet* destination:

- [Compatibility Mode](parquet.md/#compatibility-mode)


## Connection Retry and Rollback

{% include "destinations/connection-retry.md" %}

The retry function is implemented according to [Microsoft Guidelines](https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific#retry-strategies).
The retry logic is based on WebExceptionStatus. 

Rollback covers scenarios where extractions do not fail due to connection failures but due to an error when connecting to SAP.
In those cases Xtract Universal tries to remove any files from the Lakehouse that were created in the course of the extraction.
	
{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/xu/documentation/destinations/fabric/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

!!! note
	If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination.
	This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters. 

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

----

## Related Links
- [Mirosoft Tutorial: Create a Fabric workspace](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-lakehouse-get-started)
- [Mirosoft Tutorial: Create a lakehouse, ingest sample data, and build a report](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-build-lakehouse)