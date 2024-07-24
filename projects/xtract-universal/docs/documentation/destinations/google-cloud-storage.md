---
title: Google Cloud Storage
description: Google Cloud Storage destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to a Google Cloud Storage.

## About Google Cloud Storage
Google Cloud Platform (GCP) is a collection of cloud services provided by Google.
Google Cloud Platform is available at [cloud.google.com](https://cloud.google.com).

Google Cloud Storage is one of the Google services used for storing data in the Google infrastructure.
For more information see [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs#docs).

### GCP console
The GCP console allows configuring of all resources and services. 
To get to the overview dashboard, navigate to the [Google Cloud Storage](https://cloud.google.com/storage) page and click **[Console]** or **[Go to console]**. 

To access all settings and services use the navigation menu on the upper left side.

![xu-google-cloud-req-01](../../assets/images/xu/documentation/destinations/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
## Requirements 

- A Google account
- A Google Cloud Platform (GCP) subscription (trial version offered)
- A project ("My First Project" is pre-defined)
- A Google Cloud Storage (GCS) bucket for data extractions

{% include "destinations/create-destination.md" %}

### GCS Settings

![Destination-Details](../../assets/images/xu/documentation/destinations/googlecloudstorage/destination-details_1.png){:class="img-responsive"}

#### Connection Type


The subsection *Connection Type* offers two different methods for authenticating and authorizing access to an Azure Storage account:

<div class="grid cards" markdown>

-   __User Login__

    ---

    Logs into Google Cloud Storage using the OAuth client ID authentication. 
	To enable the OAuth 2.0 protocol, configure an OAuth flow with the required access permissions to Xtract Universal, see [Knowledge Base Article: Setting Up OAuth 2.0 for the Google Cloud Storage Destination](../../knowledge-base/google-cloud-storage-oauth.md).

-   __Service Account__

    ---

    Logs into Google Cloud Storage using the credentials of a service account for authentication.
	The service account is identified by a RSA key pair. 
	When creating the keys, the user receives a service account file from Google containing information about the account.

</div>

The following input fields vary depending on the selected authentication method.

=== "Authentication via User Login"

	#### Client ID
	Enter the client ID created in the OAuth 2.0 setup. 
	
	#### Client Secret
	Enter the client secret created in the OAuth 2.0 setup. 

	#### Connect
	Processes the previously created OAuth flow to establish a connection with the storage account.
	Choose your Google account and grant access to Xtract Universal in all required windows. 
	When a connection is successful, an "Authentication succeeded" message is displayed in the browser. 
	In Xtract Universal a "Connection established" message is displayed in a separate window.   
	
	!!! warning
		**This app isn't verified.**<br>
		This error message occurs if you did not verify the app. 
		Click **[Advanced]** and **[Go to Xtract Universal (unsafe)]** to continue. 

=== "Authentication via Service Acccount"

	#### Key file	
	Enter a path to the service account file, that is created together with the keys. 
	Make sure that the Xtract Universal service has access to the file. 

### Bucket
When using OAuth 2.0 authentication, the "Bucket" subsection can only be filled after a connection to the storage account has been established.

#### Project ID
The Project ID can be looked up in the GCP dashboard under *Project info*.

![xu-google-cloud-con-04](../../assets/images/xu/documentation/destinations/googlecloudstorage/xu-google-cloud-con-04.png){:class="img-responsive"}

#### Bucket name
When using OAuth 2.0 authentication, click **[Get buckets]** to display available buckets.<br>
A bucket can be created in the navigation menu under **Storage > Browser**.

![xu-google-cloud-con-05](../../assets/images/xu/documentation/destinations/googlecloudstorage/xu-google-cloud-con-05.png){:class="img-responsive"}

Choose a bucket name, location type and storage class or access control. 

Under **Advanced Settings (optional)** you can select the desired encryption method applied to the bucket. Get more details on encryption on the official [Google Help Page](https://cloud.google.com/storage/docs/encryption).      
![xu-google-cloud-con-06](../../assets/images/xu/documentation/destinations/googlecloudstorage/xu-google-cloud-con-06.png){:class="img-responsive"}


### Encryption

#### Default
Applies the encryption method specified in your GCS bucket. <br>
Google encrypts all data that is stored on the Google servers by default. In addition you can use the Google Cloud Key Management Service (KMS) to create and apply keys to your buckets. <br>
The KMS can be enabled in the GCP console's navigation menu under **Security > Cryptographic Keys**.

#### Customer-supplied
If you check the *Customer-supplied* option, you need to provide a valid AES256 Crypto Key (256 bit in length). <br>
The Crypto key is not stored in the GCP and demands the additional effort to be able to to decrypt your data later. 

#### Crypto key
If *Customer Supplied* is selected as the encryption method, enter the cryptographic key into.

### File Format

Select the required file format. You can choose between *CSV*, *JSON* and *Parquet*.

![Destination-Details](../../assets/images/xu/documentation/destinations/googlecloudstorage/destination-details_2.png){:class="img-responsive" }

#### CVS Settings

The settings for file type *CSV* correspond to the settings of the *Flat File CSV* destination:

- [CSV Settings](csv-flat-file.md/#csv-settings)
- [Convert / Encoding](csv-flat-file.md/#convert-encoding)

#### JSON Settings

To use the JSON file format, no further settings are necessary.

#### Parquet Settings

The settings for file type *Parquet* correspond to the settings of the *Flat File Parquet* destination:

- [Compatibility Mode](parquet.md/#compatibility-mode)


## Connection Retry

Connection retry is a built-in function of the Google Cloud Storage destination. 
The retry function is activated by default.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Google Cloud Storage.
Xtract universal follows an exponential retry strategy. The selected exponential strategy results in 8 retry attempts and an overall timespan of 140 seconds. If a connection is not established during the timespan of 140 seconds, the extraction fails.

For more general information about retry strategies in a Google Cloud Storage environment go to the official [Google Cloud Help](https://cloud.google.com/storage/docs/gsutil/addlhelp/RetryHandlingStrategy).

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/xu/documentation/destinations/googlecloudstorage/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

!!! note 
	If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination.
	This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters. 

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

### Folder name

To write extraction data to a location within a specific folder in a Google Cloud Storage bucket, enter a folder name without slashes.
Subfolders are supported and can be defined using the following syntax: <br>
`[folder]/[subfolder_1]/[subfolder_2]/…`

{% include "parameters/folder-script-expressions.md" %}

{% include "destinations/compression.md" %}

{% include "destinations/file-splitting.md" %}

