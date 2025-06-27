This page shows how to set up and use the Microsoft Fabric (OneLake) destination. The Microsoft Fabric (OneLake) destination enables users to load SAP data to a Microsoft Fabric Lakehouse.

## Demonstration Video

The following video demonstrates how to set up the Microsoft Fabric (OneLake) destination and how to load SAP data into a Microsoft Fabric Lakehouse.

## Requirements

The Microsoft Fabric (OneLake) destination uses [Microsoft Entra ID (formerly Azure Active Directory)](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) with OAuth 2.0 for authentication. Follow the steps below to set up the authentication with Microsoft:

1. Register Microsoft Fabric OneLake as an app using the [Azure portal > App registrations](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade) service. For more information, see [Microsoft Documentation: Register an application in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate#configure-platform-settings).

1. Make sure the registered app allows authentication from *Mobile and desktop applications*:

1. Add the following API permissions to the registered app:

   - **Azure Storage > user impersonation**\
     This allows Xtract Universal to act on behalf of the signed-in user and access Azure Storage resources like OneLake.
   - **Microsoft Graph > User.Read**\
     This allows Xtract Universal to read the profile of the signed-in user.

   For more information, see [Microsoft Documentation: Add permissions to your web API](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-your-web-api).

1. When connecting Xtract Universal to Microsoft Fabric, make sure to provide the credentials of a Microsoft user that has one of the following user roles:

   - Storage Blob Data Contributor
   - Storage Blob Data Owner

   For more information, see [Microsoft Documentation: Assign an Azure role](https://learn.microsoft.com/en-us/azure/storage/blobs/assign-azure-role-data-access?tabs=portal#assign-an-azure-role).

## Create a new Microsoft Fabric (OneLake) Destination

Follow the steps below to add a new Microsoft Fabric (OneLake) destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Microsoft Fabric (OneLake)* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### Authentication

The Microsoft Fabric (OneLake) destination uses [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) for authentication. Register Microsoft OneLake as an application in Entra ID and configure OneLake to use the registered application.

#### Tenant ID

Enter the Directory (tenant) ID of the registered app.

#### Client ID

Enter the Application (client) ID of the registered app.

Tip

You can copy the tenant ID and client ID in the [Microsoft Entra admin center](https://entra.microsoft.com/#home) or the [Azure portal](https://portal.azure.com/), where the app is registered.

#### Authenticate using Entra ID

Follow the steps below to authenticate Xtract Universal against Microsoft:

1. Click **[Authenticate using Entra ID]**. The window "Entra ID" opens.
1. When prompted, sign in with your Microsoft credentials. Make sure that the Microsoft user does not use Multifactor Authentication (MFA) as extractions fail when the MFA of the user expires.
1. If the connection is successful, a "Connection successful" info window opens.

Warning

**The window "Entra ID" shows a blank screen.**\
If the window "Entra ID" shows a blank screen, the content is likely blocked by the Internet Explorer ESC (Enhanced Security Configuration) on Windows servers.\
To disable the Internet Explorer ESC, refer to the instructions in the [Microsoft Documentation: How to turn off Internet Explorer ESC on Windows servers](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/security-privacy/enhanced-security-configuration-faq#how-to-turn-off-internet-explorer-esc-on-windows-servers).

### Files Folder

#### URL

Enter the URL of the Lakehouse, including the folder path in which the data is written. Example:\
`https://onelake.dfs.fabric.microsoft.com/my-workspace/my-lakehouse.Lakehouse/my-folder`

You can copy the URL in the [Microsoft Fabric portal](https://app.fabric.microsoft.com/home) using the properties of a OneLake folder:

### File Format

Select the required file format. You can choose between *CSV*, *JSON* and *Parquet*.

#### CVS Settings

The settings for file type *CSV* correspond to the settings of the *Flat File CSV* destination:

- [CSV Settings](../csv-flat-file/#csv-settings)
- [Convert / Encoding](../csv-flat-file/#convert-encoding)

#### JSON Settings

To use the JSON file format, no further settings are necessary.

#### Parquet Settings

The settings for file type *Parquet* correspond to the settings of the *Flat File Parquet* destination - [Compatibility Mode](../parquet/#compatibility-mode).

## Connection Retry and Rollback

Connection retry is a built-in function of the Microsoft Fabric (OneLake) destination. The retry function is activated by default.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Microsoft Fabric (OneLake). Xtract Universal follows an exponential retry strategy. The selected exponential strategy results in seven retry attempts and an overall timespan of 140 seconds. If a connection is not established during the timespan of 140 seconds, the extraction fails.

The retry function is applied after receiving one of the following HTTP errors or exceptions:

- 503 Service Unavailable
- 504 Gateway Timeout
- WebExceptionStatus.ConnectionClosed
- WebExceptionStatus.ConnectFailure
- WebExceptionStatus.Timeout
- WebExceptionStatus.RequestCanceled
- WebExceptionStatus.SendFailure
- WebExceptionStatus.NameResolutionFailure

Rollback applies to situations where extractions fail, not because of connection issues, but due to an error when connecting to SAP. In these cases, Xtract Universal attempts to delete any files created in the Lakehouse during the extraction process.

## Assign the Microsoft Fabric (OneLake) Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Microsoft Fabric (OneLake) destination from the dropdown list.
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

If an object's name does not begin with a letter, the prefix 'x' is automatically appended, e.g., `_namespace_tabname.csv` is renamed to `x_namespace_tabname.csv` upon upload.\
This ensures compatibility with Azure Data Factory, Hadoop, and Spark, which require names to start with a letter or handle certain symbols differently.

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

### Empty Files

When this option is active, empty result sets create an empty file in the target environment. Deactivate this option to not create empty files.

______________________________________________________________________

## Related Links

- [Mirosoft Tutorial: Create a Fabric workspace](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-lakehouse-get-started)
- [Mirosoft Tutorial: Create a lakehouse, ingest sample data, and build a report](https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-build-lakehouse)
