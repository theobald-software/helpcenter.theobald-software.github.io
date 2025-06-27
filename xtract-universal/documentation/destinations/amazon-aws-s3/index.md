This page shows how to set up and use the Amazon S3 destination. The Amazon S3 destination loads data to the [Amazon S3](https://aws.amazon.com/s3/) cloud storage.\
For more information on Amazon S3, see [AWS Documentation: Getting Started with Amazon S3](https://aws.amazon.com/s3/getting-started/).

Tip

You can install Xtract Universal in an Amazon Elastic Compute (EC2) instance. Check [Amazon EC2: Getting Started with Amazon EC2](https://aws.amazon.com/ec2/getting-started/) to deploy an instance where you can install Xtract Universal in your AWS Account. Make sure the instance is deployed in the same region as your SAP solution to reduce latency and optimize performance.

## Requirements

- An Amazon Web Services (AWS) Account.
- [Access Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) (consisting of "access key ID" and "secret access key") of your AWS user or an IAM role attached to the EC2 instance that runs Xtract Universal, see [AWS Documentation: Using an IAM role to grant permissions to applications running on Amazon EC2 instances](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html). For more information on the IAM role, see [AWS Documentation: Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).
- An S3 bucket, in which you can upload data.
- Sufficient permissions for list, read and write activities on S3. You must grant these rights in the user policy, but you can limit them to certain buckets. In the following example, the set permissions have been tested in a test environment:

Note

Xtract Universal uses so called [Multipart](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html) upload for uploading data to S3. Data extracted from SAP is uploaded to S3 not as one big chunk of data but in smaller parts. These parts are buffered on the S3 side. If the extraction is successful, those parts are assembled by S3 into one file. While the extraction is still running this file is not visible on S3.

Recommendation

It's recommended you enable S3 versioning or perform data backups regularly, see [Amazon AWS: Getting Started - Backup & Restore with AWS](https://aws.amazon.com/backup-restore/getting-started/).

### Extraction Failed

In case the extraction fails, the already uploaded parts are deleted from S3. In case of an "uncontrolled" extraction failure, for example due to network issues, Xtract Universal will not be able to delete those uploaded parts from S3.

Therefore it is recommended to change the settings on S3 in a way that will trigger the automatic deletion of unused multiparts, e.g. after a day. You can find this setting by selecting a bucket and opening the "Management" tab. Select "Lifecycle" and "Add lifecycle rule" and create a rule for deleting unused multiparts.

## Create a new Amazon S3 Destination

Follow the steps below to add a new Amazon S3 destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Amazon S3* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### API Endpoints

The endpoint defines which IP address is used to connect to an Amazon S3 instance.

#### Use AWS S3 Endpoint

When this option is active, Xtract Universal connects to Amazon S3 using a URL that consists of the bucket name and the Amazon S3 default URL: `https://[BucketName].s3.amazonaws.com/`

#### Use VPC Endpoint

When this option is active, Xtract Universal connects to Amazon S3 using a [Virtual Private Cloud (VPC) endpoint](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html). This option requires Xtract Universal to run on an AWS VPC instance. Enter the VPC endpoint in the format `http://bucket.[endpoint]` in the field **VPC endpoint**. Example:\
*http://bucket.vpce-0123456789abcdefg-hijklmno.s3.us-east-1.vpce.amazonaws.com*.

### Authenthication

The authentication method defines how Xtract Universal authenticates itself against Amazon AWS.

#### Use IAM role

When this option is active, the credentials and permissions of the IAM role assigned to the [EC2 instance](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html), on which Xtract Universal is running are used for authentication. For more information on the IAM role, see [AWS Documentation: Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).

#### Use user credentials

Preferable authentication method towards Amazon AWS. Determine the values for the [Access Keys (access key ID and secret key)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) via AWS Identity and Access Management ([IAM](https://console.aws.amazon.com/iam/home#/home)).

#### Connect

After entering *Access key ID* and *Secret key*, click **[Connect]** to connect to AWS. After successfully connecting, select bucket name and region.

### Bucket

#### Bucket name and Region

Select a bucket and a region of the bucket's location. The SAP data is extracted into the selected bucket.

Note

The drop-down menus list **all** available buckets and regions, make sure to select the correct combination of bucket & region. Validate the connectivity to the selected bucket by clicking **\[Test Connection)**.

#### Test Connection

Validates the right combination of bucket and region. Insures bucket's accessibility from Xtract Universal using the entered access keys.

### Server-side encryption

Choose how to encrypt data after uploading them to S3.

Note

The setting "Server-side encryption" does not relate to transport encryption between Xtract Universal and S3. By default, the channel for sending data to S3 is always encrypted.

#### None

Server-sided encryption of data not active. For more information, see [AWS Documentation: Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html).

#### SSE-S3

Encrypts data using the by default available S3 user account encryption key, see [S3 Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html).

#### SSE-KMS / Key ID

Encryption using a custom encryption key created on AWS, see [AWS Key Management Services](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html). The key can be created on the [AWS website](https://console.aws.amazon.com/iam/home#/encryptionKeys/.)

### Misc

All settings in *Misc* are optional.

#### Folder path

Creates a folder structure within the bucket. Script expressions are supported, see [Use Script Expressions as Dynamic Folder Paths](#use-script-expressions-as-dynamic-folder-paths).

- Create a single folder by entering a folder name without slashes: `[folder]`
- Create subfolders using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

Note

The specified folder path applies to all extractions. To define a folder path for single extractions, use the **Folder** option in the [Destination Settings](#destination-settings).

#### File Owner

If you upload files as an AWS user of an Account A to an Account B, you can select the option "Bucket Owner". Without a declared owner, uploaded files cannot be opened directly.

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

Connection retry is a built-in function of the Amazon S3 destination. The retry function is activated by default.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Amazon S3. Xtract Universal follows an exponential retry strategy. The selected exponential strategy results in seven retry attempts and an overall timespan of 140 seconds. If a connection is not established during the timespan of 140 seconds, the extraction fails.

The retry function is applied after receiving one of the following HTTP errors or exceptions:

- 503 Service Unavailable
- 504 Gateway Timeout
- WebExceptionStatus.ConnectionClosed
- WebExceptionStatus.ConnectFailure
- WebExceptionStatus.Timeout
- WebExceptionStatus.RequestCanceled
- WebExceptionStatus.SendFailure
- WebExceptionStatus.NameResolutionFailure

For more general information about retry strategies in an AWS S3 environment go to the official [AWS Help](https://docs.aws.amazon.com/general/latest/gr/api-retries.html).

## Assign the Amazon S3 Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Amazon S3 destination from the dropdown list.
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

- [Knowledge Base Article: Run Xtract Universal in a VM on AWS EC2](../../../knowledge-base/run-xu-in-aws/)
- [Amazon AWS: Getting Started - Backup & Restore with AWS](https://aws.amazon.com/backup-restore/getting-started/)
- [Amazon S3: Getting Started with Amazon S3](https://aws.amazon.com/s3/getting-started/)
- [Amazon EC2: Getting Started with Amazon EC2](https://aws.amazon.com/ec2/getting-started/)
- [Amazon Documentation: Amazon EC2 security groups for Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)
- [Amazon Documentation: Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [Amazon Documentation: Overview of managing access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html)
