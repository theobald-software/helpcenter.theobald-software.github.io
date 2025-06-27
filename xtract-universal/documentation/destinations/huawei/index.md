This page shows how to set up and use the Huawei Cloud OBS destination. The Huawei Cloud OBS destination loads data to a Huawei Cloud Object Storage Service (OBS).

Warning

**File Fragments in the Cloud Storage**\
Huawei Cloud OBS destination uses multipart upload. That means that data is uploaded in fragments that are merged into a single file at the end of the extraction. When an extraction fails due to connection issues, the request to cancel the multipart upload can fail.\
Delete the fragments manually, see [Huawei Cloud Support: Deleting Fragments Directly](https://support.huaweicloud.com/intl/en-us/obs_faq/obs_faq_0046.html#section1).

## Create a new Huawei Cloud OBS Destination

Follow the steps below to add a new Huawei Cloud OBS destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Huawei Cloud OBS* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### Authentication

#### Access Key ID (AK)

Enter the access key of the Huawei Cloud OBS account. For more information on how to create access keys, see [Huawei Cloud Support: Managing Access Keys (AK and SK)](https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0003.html).

#### Secret Access Key ID (SK)

Enter the secret access key of the Huawei Cloud OBS account. For more information on how to create access keys, see [Huawei Cloud Support: Managing Access Keys (AK and SK)](https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0003.html).

#### Region

Select the region of the data storage.

#### Connect

Click **[Connect]** to establish a connection to the storage account. If the connection is successful, "Connected" is displayed next to the button.

### Bucket

This setting only becomes available after a connection to the storage account is established.\
Select a bucket. The SAP data is extracted into the selected bucket. Click **[]** to refresh the list of available buckets.

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

## Connection Retry and Rollback

Connection retry is a built-in function of the Huawei Cloud OBS destination. The retry function is activated by default.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Huawei Cloud OBS. Xtract Universal follows an exponential retry strategy. The selected exponential strategy results in seven retry attempts and an overall timespan of 140 seconds. If a connection is not established during the timespan of 140 seconds, the extraction fails.

The retry function is applied after receiving one of the following HTTP errors or exceptions:

- 503 Service Unavailable
- 504 Gateway Timeout
- WebExceptionStatus.ConnectionClosed
- WebExceptionStatus.ConnectFailure
- WebExceptionStatus.Timeout
- WebExceptionStatus.RequestCanceled
- WebExceptionStatus.SendFailure
- WebExceptionStatus.NameResolutionFailure

Rollback covers scenarios where extractions do not fail due to connection failures to Huawei but e.g. due to an error when connecting to SAP. In those cases Xtract Universal tries to remove any files from the Huawei Cloud storage that were created in the course of the extraction.

## Assign the Huawei Cloud OBS Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Huawei Cloud OBS destination from the dropdown list.
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
