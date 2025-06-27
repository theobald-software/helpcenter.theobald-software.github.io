This page shows how to set up and use the Microsoft Azure Storage destination. The Microsoft Azure Storage destination loads data to a cloud based Azure Storage.

## Video Tutorial

The following YouTube tutorial shows how to set up Xtract Universal with the Azure Storage destination:

## Requirements

The Azure Storage (Blob / Data Lake) destination supports the following Azure storage account types:

- General-purpose V2 (including Azure Data Lake Storage Gen2)
- General-purpose V1
- BlockBlobStorage
- BlobStorage

To use the Azure Storage (Blob / Data Lake) destination you need one of the above Azure storage accounts. For more information, see [Microsoft Documentation: Azure storage account overview](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview).

## Create a new Microsoft Azure Storage Destination

Follow the steps below to add a new Microsoft Azure Storage destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Microsoft Azure Storage* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### Connection Type

The subsection *Connection Type* offers the following methods for authenticating and authorizing access to Azure storage:

- **Access Key**

  ______________________________________________________________________

  This method of authentication authorizes access to the complete storage account. For more information, see [Microsoft Documentation: Manage storage account access keys](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage).

- **Entra ID**

  ______________________________________________________________________

  This method of authentication uses OAuth 2.0 and [Microsoft Entra ID](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-azure-active-directory) (formerly Azure Active Directory), see [Authentication via Microsoft Entra ID for Azure Storage](../../../knowledge-base/authentication-via-entra-id-with-azure-storage/). Access rights can be granted on storage account or container level.

- **Shared Access Signature (Account)**

  ______________________________________________________________________

  This method of authentication uses Shared Access Signatures (SAS) to access the complete storage account. For more information, see [Microsoft Documentation: Grant limited access to Azure Storage resources using shared access signatures](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json).

- **Shared Access Signature (Container)**

  ______________________________________________________________________

  This method of authentication uses Shared Access Signatures (SAS) to access a specific storage container. For more information, see [Microsoft Documentation: Create SAS tokens for storage containers](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/create-sas-tokens?view=doc-intel-4.0.0#use-the-azure-portal)

For information on advantages and disadvantages of the different authentication methods, see [Microsoft Documentation: Choosing the right authentication method](https://learn.microsoft.com/en-us/azure/storage/common/storage-explorer-security).

### Access Key Parameters / SAS Parameters

The input fields in the subsection *Access key parameters* / *SAS parameters* vary depending on the selected [connection type](#connection-type).

#### Storage account

Enter your storage account name. Do not enter the full URL.

#### Access key

Enter the access key of the Azure Storage account. You can copy the storage account name and access key from the [Azure Portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=/azure/storage/blobs/toc.json#view-access-keys-and-connection-string).

#### Connect

Click **[Connect]** to establish a connection to the storage account. If the connection is successful, a "Connection successful" info window opens.

#### Storage account

Enter your storage account name.

#### Tenant ID

Enter the ID of the Azure AD tenant.

#### Client ID

Enter the ID of the registered app. You can copy the tenant ID and client ID in the [Azure portal](https://portal.azure.com/).

#### Connect

Follow the steps below to authenticate Xtract Universal against Microsoft:

1. Click **[Connect]**. The window "Azure OAuth 2.0" opens.
1. When prompted, sign in with your Microsoft credentials. Make sure that the user meets the following requirements:
   - The user has the 'Storage Blob Data Contributor' or 'Owner' role in Azure Storage.
   - The user does not use Multifactor Authentication (MFA) as extractions fail when the MFA of the user expires.
1. If the connection is successful, a "Connection successful" info window opens.

Warning

**The window "Entra ID" shows a blank screen.**\
If the window "Entra ID" shows a blank screen, the content is likely blocked by the Internet Explorer ESC (Enhanced Security Configuration) on Windows servers.\
To disable the Internet Explorer ESC, refer to the instructions in the [Microsoft Documentation: How to turn off Internet Explorer ESC on Windows servers](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/security-privacy/enhanced-security-configuration-faq#how-to-turn-off-internet-explorer-esc-on-windows-servers).

#### Storage account

Enter your storage account name. Do not enter the full URL.

#### SAS token

Enter the SAS token at the Azure Storage container level. You can copy the SAS token from the Azure portal in the following menu: **Storage accounts > [account_name] > Security + networking > Shared access signature**. Note that the following permissions are required when using Shared Access Signature (SAS):

- Add
- Create
- Write
- Delete
- List

#### Connect

Click **[Connect]** to establish a connection to the storage account. If the connection is successful, you can select an existing container from the drop down list **Container**.

#### Storage account

Enter your storage account name. Do not enter the full URL.

#### Container

Enter the name of an existing Azure storage container.

#### SAS token

Enter the SAS token generated at the Azure Storage container level. You can copy the SAS token from the Azure portal in the following menu: **Storage accounts > [account_name] > Data storage > Containers > [account_name] > Generate SAS**. Note that the following permissions are required when using Shared Access Signature (SAS):

- Add
- Create
- Write
- Delete
- List

#### Connect

Click **[Connect]** to establish a connection to the storage account.

### Container

This subsection is activated after a connection to the storage account was successfully established.

- When using Access Key authentication, select a Blob container from the drop-down list.
- When using Entry ID authentication, enter the name of the Blob container manually.
- When using Shared Access Signature (Account) authentication, select a Blob container from the drop-down list.

#### Test connection

Click **[Test Connection]** to check if the storage container can be accessed.\
If the connection is successful, a "Connection to container \<*name of container*> successful" info window opens.

The *Azure Storage (Blob / Data Lake)* destination can now be used.

### Misc

Note

The settings in *Misc* can only be used in combination with a Blob container.

#### Folder path

Creates a folder structure within the container. Script expressions are supported, see [Use Script Expressions as Dynamic Folder Paths](#use-script-expressions-as-dynamic-folder-paths).

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

## Connection Retry and Rollback

Connection retry is a built-in function of the Microsoft Azure Storage destination. The retry function is activated by default.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Microsoft Azure Storage. Xtract Universal follows an exponential retry strategy. The selected exponential strategy results in seven retry attempts and an overall timespan of 140 seconds. If a connection is not established during the timespan of 140 seconds, the extraction fails.

The retry function is applied after receiving one of the following HTTP errors or exceptions:

- 503 Service Unavailable
- 504 Gateway Timeout
- WebExceptionStatus.ConnectionClosed
- WebExceptionStatus.ConnectFailure
- WebExceptionStatus.Timeout
- WebExceptionStatus.RequestCanceled
- WebExceptionStatus.SendFailure
- WebExceptionStatus.NameResolutionFailure

Rollback covers scenarios where extractions do not fail due to connection failures to Azure but due to an error when connecting to SAP. In those cases Xtract Universal tries to remove any files from Azure storage that were created in the course of the extraction.

## Assign the Microsoft Azure Storage Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Microsoft Azure Storage destination from the dropdown list.
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

### Blob Type

#### Append Blob

Creates an [Append Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-append-blobs).

#### Block Blob

Creates a [Block Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-block-blobs).

Note

For both file types an MD5 hash is created upon upload to Azure storage.

### Folder

Writes the extracted data to a specific folder structure within the container. If the specified folder does not exist, it is created.

- Create a single folder by entering a folder name without slashes: `[folder]`
- Create subfolders using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

Note

The specified folder path only applies to the selected extraction. To define a folder path for all extractions, use the **Folder path** option in the [Destination Details](#destination-details).

#### Use Script Expressions as Dynamic Folder Paths

Script expressions can be used to generate a dynamic folder path. This allows generating folder paths that are composed of an extraction's properties, e.g., extraction name, SAP source object. The described scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input | Description | | --- | --- | | `#{Source.Name}#` | Name of the extraction's SAP source. | | `#{Extraction.ExtractionName}#` | Name of the extraction. | | `#{Extraction.FullyQualifiedExtractionName}#` | Name of the extraction. If the extraction is part of an [extraction group](../../organize-extractions/), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. | | `#{Extraction.Type}#` | Extraction type (*Table*, *ODP*, *BAPI*, etc.). | | `#{Extraction.SapObjectName}#` | Name of the SAP object the extraction is extracting data from. | | `#{Extraction.Timestamp}#` | Timestamp of the extraction. | | `#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}#` | Removes the first slash '/' of an SAP object. Example: /BIO/TMATERIAL to BIO/TMATERIAL - prevents creating an empty folder in a file path. | | `#{Extraction.SapObjectName.Replace('/', '_')}#` | Replaces all slashes '/' of an SAP object. Example: /BIO/TMATERIAL to \_BIO_TMATERIAL - prevents splitting the SAP object name by folders in a file path. | | `#{Extraction.Context}#` | Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). | | `#{Extraction.Fields["[NameSelectionFields]"].Selections[0].Value}#` | Only for ODP extractions: returns the input value of a defined selection / filter. | | `#{Odp.UpdateMode}#` | Only for ODP extractions: returns the update mode (*Delta*, *Full*, *Repeat*) of the extraction. | | `#{TableExtraction.WhereClause}#` | Only for Table extractions: returns the WHERE clause of the extraction. | | `#{Extraction.Fields["[0D_NW_CODE]"].Selections[0].Value}#` | Only for BWCube extractions (MDX mode): returns the input value of a defined selection. | | `#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].LowerValue}#` | Only for BWCube extractions (MDX mode): returns the lower input value of a defined selection range. | | `#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].UpperValue}#` | Only for BWCube extractions (MDX mode): returns the upper input value of a defined selection range. | | `#{Extraction.Fields["0D_NW_CODE"].Selections[0].Value}#` | Only for BWCube extractions (BICS mode): returns the input value of a defined selection. | | `#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].LowerValue}#` | Only for BWCube extractions (BICS mode): returns the lower input value of a defined selection range. | | `#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].UpperValue}#` | Only for BWCube extractions (BICS mode): returns the upper input value of a defined selection range. |

### Compression

Compression is only available for the csv file format, see [Destination Details: File Format](#file-format).

#### GZip

The data is transferred compressed and stored as a gz file.

### File Splitting

Writes extraction data of a single extraction to multiple files. Each filename is appended by *\_part[nnn]*.

#### Max. file size

The value set in *Max. file size* determines the maximum size of each file.

Note

The option *Max. file size* does not apply to gzip files. The size of a gzipped file cannot be determined in advance.

### Empty Files

When this option is active, empty result sets create an empty file in the target environment. Deactivate this option to not create empty files.

______________________________________________________________________

## Related Links

- [Knowledge Base Article: Authentication via Microsoft Entra ID for Azure Storage](../../../knowledge-base/authentication-via-entra-id-with-azure-storage/)
- [Integration via Azure Data Factory](../../execute-and-automate/call-via-etl/#integration-via-azure-data-factory)
