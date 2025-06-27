This page shows how to set up and use the Google Cloud Storage destination. The Google Cloud Storage destination loads data to a Google Cloud Storage.

## About Google Cloud Storage

Google Cloud Platform (GCP) is a collection of cloud services provided by Google. Google Cloud Platform is available at [cloud.google.com](https://cloud.google.com).

Google Cloud Storage is one of the Google services used for storing data in the Google infrastructure. For more information see [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs#docs).

### GCP console

The GCP console allows configuring of all resources and services. To get to the overview dashboard, navigate to the [Google Cloud Storage](https://cloud.google.com/storage) page and click **[Console]** or **[Go to console]**.

To access all settings and services use the navigation menu on the upper left side.

## Requirements

- A Google account
- A Google Cloud Platform (GCP) subscription (trial version offered)
- A project ("My First Project" is pre-defined)
- A Google Cloud Storage (GCS) bucket for data extractions

## Create a new Google Cloud Storage Destination

Follow the steps below to add a new Google Cloud Storage destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Google Cloud Storage* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### GCS Settings

### Connection Type & Parameters

The subsection *Connection Type* offers two different methods for authenticating and authorizing access to an Azure Storage account:

- **User Login**

  ______________________________________________________________________

  Logs into Google Cloud Storage using the OAuth client ID authentication. To enable the OAuth 2.0 protocol, configure an OAuth flow with the required access permissions to Xtract Universal, see [Knowledge Base Article: Setting Up OAuth 2.0 for the Google Cloud Storage Destination](../../../knowledge-base/google-cloud-storage-oauth/).

- **Service Account**

  ______________________________________________________________________

  Logs into Google Cloud Storage using the credentials of a service account for authentication. The service account is identified by a RSA key pair. When creating the keys, the user receives a service account file from Google containing information about the account.

The following input fields vary depending on the selected authentication method.

#### Client ID

Enter the client ID created in the OAuth 2.0 setup. The client ID uses the following format:\
`<project-number>-<unique-identifier>.apps.googleusercontent.com`

Example: *123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com*

#### Client Secret

Enter the client secret created in the OAuth 2.0 setup.

#### Connect

Processes the previously created OAuth flow to establish a connection with the storage account. Choose your Google account and grant access to Xtract Universal in all required windows. When a connection is successful, an "Authentication succeeded" message is displayed in the browser. In Xtract Universal a "Connection established" message is displayed in a separate window.

Warning

**This app isn't verified.**\
This error message occurs if you did not verify the app. Click **[Advanced]** and **[Go to Xtract Universal (unsafe)]** to continue.

#### Key file

Enter a path to the service account file, that is created together with the keys. Make sure that the Xtract Universal service has access to the file.

### Bucket

When using OAuth 2.0 authentication, the "Bucket" subsection can only be filled after a connection to the storage account has been established.

#### Project ID

The Project ID can be looked up in the GCP dashboard under *Project info*.

#### Bucket name

When using OAuth 2.0 authentication, click **[Get buckets]** to display available buckets.\
A bucket can be created in the navigation menu under **Storage > Browser**.

Choose a bucket name, location type and storage class or access control.

Under **Advanced Settings (optional)** you can select the desired encryption method applied to the bucket. Get more details on encryption on the official [Google Help Page](https://cloud.google.com/storage/docs/encryption).

### Encryption

#### Default

Applies the encryption method specified in your GCS bucket.\
Google encrypts all data that is stored on the Google servers by default. In addition you can use the Google Cloud Key Management Service (KMS) to create and apply keys to your buckets.\
The KMS can be enabled in the GCP console's navigation menu under **Security > Cryptographic Keys**.

#### Customer-supplied

If you check the *Customer-supplied* option, you need to provide a valid AES256 Crypto Key (256 bit in length).\
The Crypto key is not stored in the GCP and demands the additional effort to be able to to decrypt your data later.

#### Crypto key

When the encryption method *Customer Supplied* is active, enter the cryptographic key for the encryption.

### Misc

#### Folder path

Creates a folder structure within the bucket. Script expressions are supported, see [Use Script Expressions as Dynamic Folder Paths](#use-script-expressions-as-dynamic-folder-paths).

- Create a single folder by entering a folder name without slashes: `[folder]`
- Create subfolders using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

Note

The specified folder path applies to all extractions. To define a folder path for single extractions, use the **Folder** option in the [Destination Settings](#destination-settings).

### File Format

Select the required file format. You can choose between *CSV*, *JSON* and *Parquet*.

#### CVS Settings

The settings for file type *CSV* correspond to the settings of the *Flat File CSV* destination:

- [CSV Settings](../csv-flat-file/#csv-settings)
- [Convert / Encoding](../csv-flat-file/#convert-encoding)

#### JSON Settings

To use the JSON file format, no further settings are necessary.

#### Parquet Settings

The settings for file type *Parquet* correspond to the settings of the *Flat File Parquet* destination:

- [Compatibility Mode](../parquet/#compatibility-mode)

## Connection Retry

Connection retry is a built-in function of the Google Cloud Storage destination. The retry function is activated by default.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Google Cloud Storage. Xtract Universal follows an exponential retry strategy. The selected exponential strategy results in eight retry attempts and an overall timespan of 140 seconds. If a connection is not established during the timespan of 140 seconds, the extraction fails.

The retry function is applied after receiving one of the following HTTP errors or exceptions:

- 503 Service Unavailable
- 504 Gateway Timeout
- WebExceptionStatus.ConnectionClosed
- WebExceptionStatus.ConnectFailure
- WebExceptionStatus.Timeout
- WebExceptionStatus.RequestCanceled
- WebExceptionStatus.SendFailure
- WebExceptionStatus.NameResolutionFailure

## Assign the Google Cloud Storage Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Google Cloud Storage destination from the dropdown list.
1. Optional: edit the [destination settings](#destination-settings).
1. Click **[OK]** to confirm your input.

When running the extraction, the extracted SAP data is now written to the destination.

### Destination Settings

The destination settings only affect the extraction that the destination is assigned to. To open the destination settings, select an extraction in the main window of the Designer and click **[Destination]**. The window "Destination Settings" opens.

### File Name

Determines the name of the target table. The following options are available:

| Option | Description | | --- | --- | | **Same as name of SAP object** | Copy the name of the SAP object. | | **Same as name of extraction** | Adopt the name of the extraction. | | **Fully qualified extraction name** | Adopt the name of the extraction, including the path of the extraction. This option avoids conflicts, when the extraction names are not unique. Use the fully qualified extraction name when the same extraction name is used in multiple [extraction groups](../../organize-extractions/). | | **Custom** | Define a name of your choice. |

#### Append timestamp

Add the timestamp in the UTC format (\_YYYY_MM_DD_hh_mm_ss_fff) to the file name of the extraction

Note

If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination. This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters.

#### Use Script Expressions as Dynamic File Names

Script expressions can be used to generate a dynamic file name. This allows generating file names that are composed of an extraction's properties, e.g. extraction name, SAP source object. This scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input | Description | | --- | --- | | `#{Source.Name}#` | Name of the extraction's SAP source. | | `#{Extraction.ExtractionName}#` | Name of the extraction. | | `#{Extraction.FullyQualifiedExtractionName}#` | Name of the extraction. If the extraction is part of an [extraction group](../../organize-extractions/), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. | | `#{Extraction.Type}#` | Extraction type (*Table*, *ODP*, *BAPI*, etc.). | | `#{Extraction.SapObjectName}#` | Name of the SAP object the extraction is extracting data from. | | `#{Extraction.Timestamp}#` | Timestamp of the extraction. | | `#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}#` | Removes the first slash '/' of an SAP object. Example: /BIO/TMATERIAL to BIO/TMATERIAL - prevents creating an empty folder in a file path. | | `#{Extraction.SapObjectName.Replace('/', '_')}#` | Replaces all slashes '/' of an SAP object. Example /BIO/TMATERIAL to \_BIO_TMATERIAL - prevents splitting the SAP object name by folders in a file path. | | `#{Extraction.Fields["FISCPER"].RangeSelections[0].LowerValue}#` | Lower value of the range selection. | | `#{Extraction.Fields["FISCPER"].RangeSelections[0].UpperValue}#` | Upper value of the range selection. | | `#{Extraction.Context}#` | Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). | | `#{Extraction.Fields["[NameSelectionFiels]"].Selections[0].Value}#` | Only for ODP extractions: returns the input value of a defined selection / filter. | | `#{Odp.UpdateMode}#` | Only for ODP extractions: returns the update mode (*Delta*, *Full*, *Repeat*) of the extraction. | | `#{TableExtraction.WhereClause}#` | Only for Table extractions: returns the WHERE clause of the extraction. |

### Column Name Style

Defines the style of the column name. Following options are available:

| Option | Description | | --- | --- | | *Code* | The SAP technical column name is used as column name in the destination e.g., MAKTX. | | *PrefixedCode* | The SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX | | *CodeAndText* | The SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text). | | *TextAndCode* | The SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)\_MAKTX. | | *Text* | The SAP description is used as column name in the destination e.g., Material Description (Short Text). |

### Convert dates

Converts the character-type SAP date (YYYYMMDD, e.g., 19900101) to a special date format (YYYY-MM-DD, e.g., 1990-01-01). Target data uses a real date data-type and not the string data-type to store dates.

#### Year 0

Converts the SAP date 00000000 to the entered value.

#### Year 9999

Converts the SAP date 9999XXXX to the entered value.

#### Invalid values

If an SAP date cannot be converted to a valid date format, the invalid date is converted to the entered value. NULL is supported as a value. When converting the SAP date the two special cases 00000000 and 9999XXXX are checked first.

### Folder

Writes the extracted data to a specific folder structure within the bucket. If the specified folder does not exist, it is created.

- Create a single folder by entering a folder name without slashes: `[folder]`
- Create subfolders using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

Note

The specified folder path only applies to the selected extraction. To define a folder path for all extractions, use the **Folder path** option in the [Destination Details](#destination-details).

#### Use Script Expressions as Dynamic Folder Paths

Script expressions can be used to generate a dynamic folder path. This allows generating folder paths that are composed of an extraction's properties, e.g., extraction name, SAP source object. The described scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input | Description | | --- | --- | | `#{Source.Name}#` | Name of the extraction's SAP source. | | `#{Extraction.ExtractionName}#` | Name of the extraction. | | `#{Extraction.FullyQualifiedExtractionName}#` | Name of the extraction. If the extraction is part of an [extraction group](../../organize-extractions/), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. | | `#{Extraction.Type}#` | Extraction type (*Table*, *ODP*, *BAPI*, etc.). | | `#{Extraction.SapObjectName}#` | Name of the SAP object the extraction is extracting data from. | | `#{Extraction.Timestamp}#` | Timestamp of the extraction. | | `#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}#` | Removes the first slash '/' of an SAP object. Example: /BIO/TMATERIAL to BIO/TMATERIAL - prevents creating an empty folder in a file path. | | `#{Extraction.SapObjectName.Replace('/', '_')}#` | Replaces all slashes '/' of an SAP object. Example: /BIO/TMATERIAL to \_BIO_TMATERIAL - prevents splitting the SAP object name by folders in a file path. | | `#{Extraction.Context}#` | Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). | | `#{Extraction.Fields["[NameSelectionFields]"].Selections[0].Value}#` | Only for ODP extractions: returns the input value of a defined selection / filter. | | `#{Odp.UpdateMode}#` | Only for ODP extractions: returns the update mode (*Delta*, *Full*, *Repeat*) of the extraction. | | `#{TableExtraction.WhereClause}#` | Only for Table extractions: returns the WHERE clause of the extraction. | | `#{Extraction.Fields["[0D_NW_CODE]"].Selections[0].Value}#` | Only for BWCube extractions (MDX mode): returns the input value of a defined selection. | | `#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].LowerValue}#` | Only for BWCube extractions (MDX mode): returns the lower input value of a defined selection range. | | `#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].UpperValue}#` | Only for BWCube extractions (MDX mode): returns the upper input value of a defined selection range. | | `#{Extraction.Fields["0D_NW_CODE"].Selections[0].Value}#` | Only for BWCube extractions (BICS mode): returns the input value of a defined selection. | | `#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].LowerValue}#` | Only for BWCube extractions (BICS mode): returns the lower input value of a defined selection range. | | `#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].UpperValue}#` | Only for BWCube extractions (BICS mode): returns the upper input value of a defined selection range. |

### Compression

Compression is only available for the csv file format, see [Destination Details: File Format](#file-format).

| Option | Description | | --- | --- | | **None** | The data is transferred uncompressed and stored as a csv file. | | **GZip** | The data is transferred compressed and stored as a gz file. |

### File Splitting

Writes extraction data of a single extraction to multiple files. Each filename is appended by *\_part[nnn]*.

#### Max. file size

The value set in *Max. file size* determines the maximum size of each file.

Note

The option *Max. file size* does not apply to gzip files. The size of a gzipped file cannot be determined in advance.

### Empty Files

When this option is active, empty result sets create an empty file in the target environment. Deactivate this option to not create empty files.
