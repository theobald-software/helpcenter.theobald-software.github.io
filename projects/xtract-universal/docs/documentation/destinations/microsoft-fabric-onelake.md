---
title: Microsoft Fabric OneLake
description: Write SAP data to Microsoft Fabric OneLake
status: new
attempt: seven
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination enables users to load SAP data to a Microsoft Fabric Lakehouse.


## Requirements

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/xu/documentation/destinations/ms-fabric/destination-details.png){:class="img-responsive"}

Microsoft Entra ID: 
This method of authentication uses OAuth 2.0 and [Microsoft Entra ID](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-azure-active-directory)

#### Storage account
Enter your storage account name. 
	
#### Tenant ID
Enter the ID of the Azure AD tenant. 
	
#### Client ID
Enter the ID of the registered app. 

!!! tip
	You can copy the tenant ID and client ID from the Azure portal.<br>
	![xu-azure-blob-con-3](../../assets/images/xu/documentation/destinations/azure-storage/xu-azure-blob-con_3.png){:class="img-responsive"}

#### Connect
	
Click **[Connect]** to establish a connection to the storage account. 
A browser window pops up, where you have to sign in using your Azure AD credentials.
The "Permissions requested" window lists the requested permissions, see [Knowledge Base Article: Authentication via Microsoft Entra ID](../../knowledge-base/authentication-via-entra-id-with-azure-storage.md). 
Click **[Accept]**. If the connection is successful, a "Connection successful" info window opens. <br>

![xu-azure-blob-con-4](../../assets/images/xu/documentation/destinations/azure-storage/xu-azure-blob-con_4.png){:class="img-responsive"}

#### Folder path
Option to create a folder structure within the container for saving files.
Script expressions are supported, see [**Destination Settings > Folder**](#folder).

For creating a single folder, enter a folder name without slashes: `[folder]` <br>
Subfolders are supported and can be defined using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`


### File Format

Select the required file format. You can choose between *CSV*, *JSON* and *Parquet*.

![Destination-Details](../../assets/images/xu/documentation/destinations/azure-storage/destination-details_2.png){:class="img-responsive"}

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

Rollback covers scenarios where extractions do not fail due to connection failures to Azure but due to an error when connecting to SAP.
In those cases Xtract Universal tries to remove any files from Azure storage that were created in the course of the extraction.

	
{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/xu/documentation/destinations/ms-fabric/destination-settings.png){:class="img-responsive"}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

----

## Related Links
- [Mirosoft Tutorial: Create a Fabric workspace](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-lakehouse-get-started)
- [Mirosoft Tutorial: Create a lakehouse, ingest sample data, and build a report](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-build-lakehouse)