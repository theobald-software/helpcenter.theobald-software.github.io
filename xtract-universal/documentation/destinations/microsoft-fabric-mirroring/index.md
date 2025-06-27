This page shows how to set up and use the Microsoft Fabric Mirroring destination. This destination enables users to continously map SAP data to a datalake using Microsoft Fabric's open mirroring feature.

## About Open Mirroring

Microsoft Fabric's Open Mirroring allows users to replicate existing data directly into Fabric's OneLake from a variety of external databases and other data sources. The data is written into an open mirroring landing zone, where it is processed by the mirroring replication engine of Microsoft Fabric. Mirroring delivers the data incrementally in a parquet format that is used to merge the data in OneLake.

For more information, see [Microsoft Documentation: Open mirroring in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring).

Note

Note that Microsoft Fabric Open Mirroring is still in preview. During preview, not all Fabric regions support Mirroring. For more information, see [Microsoft Documentation: Microsoft Fabric preview information](https://learn.microsoft.com/en-us/fabric/fundamentals/preview).

## Demonstration Video

The following video demonstrates how to set up the Microsoft Fabric Mirroring destination to synchronize SAP data with Microsoft Fabric.

## Workflow

Follow the workflow below to set up Open Mirroring with Xtract Universal:

1. Create a mirrored database in Microsoft Fabric.
1. [Create a Microsoft Fabric Mirroring destination](#create-a-new-microsoft-fabric-mirroring-destination) in Xtract Universal.
1. Create a [TableCDC extraction](../../table-cdc/) and assign the Microsoft Fabric Mirroring destination.
1. [Run the extraction](../../execute-and-automate/run-an-extraction/#run-extractions-in-the-designer) to initialize the delta mechanism and optionally load the fist data to Microsoft Fabric.
1. [Schedule the extraction](../../execute-and-automate/call-via-scheduler/) to run in an interval of your choice.

## Requirements

- An active and running Fabric capacity is required. A paused or deleted capacity affects Mirroring so that no data is replicated.

- The Landing Zone URL of a mirrored database in Microsoft OneLake is required, see [Microsoft Tutorial: Configure Microsoft Fabric open mirrored databases](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring-tutorial).

- The Microsoft Fabric Mirroring destination is currently only supported by the [Table CDC](../../table-cdc/) extraction type. Table CDC requires the installation of the corresponding [custom function modules](../../setup-in-sap/custom-function-module-for-tablecdc/) in SAP. Also note that Table CDC is licensed and purchased separately from other extraction types.

- The Microsoft Fabric Mirroring destination uses [Microsoft Entra ID (formerly Azure Active Directory)](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) with OAuth 2.0 for authentication. Follow the steps below to set up the authentication with Microsoft:

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

Tip

You can also use the regular [Table](../../table/) extraction type to extract the initial full load of the Table.

## Create a new Microsoft Fabric Mirroring Destination

Follow the steps below to add a new Microsoft Fabric Mirroring destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Microsoft Fabric Mirroring* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### Authentication

The Microsoft Fabric Mirroring destination uses [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) for authentication. Register Microsoft OneLake as an application in Entra ID and configure OneLake to use the registered application.

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

### Landing Zone

#### URL

Enter the URL of the Microsoft Fabric Mirroring Landing Zone. The URL uses the following format:\
`https://onelake.dfs.fabric.microsoft.com/<workspace id>/<mirrored database id>/Files/LandingZone/`

You can copy the URL from the [Microsoft Fabric portal](https://app.fabric.microsoft.com/home). The Landing Zone URL is displayed in the details section on the Home screen of the mirrored database.

Example: `https://onelake.dfs.fabric.microsoft.com/12345678-aaaa-bbbb-cccc-123456789abc/12345678-dddd-ffff-gggg-123456789abc/Files/LandingZone`

## Connection Retry and Rollback

Connection retry is a built-in function of the Microsoft Fabric Mirroring destination. The retry function is activated by default.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Microsoft Fabric Mirroring. Xtract Universal follows an exponential retry strategy. The selected exponential strategy results in seven retry attempts and an overall timespan of 140 seconds. If a connection is not established during the timespan of 140 seconds, the extraction fails.

The retry function is applied after receiving one of the following HTTP errors or exceptions:

- 503 Service Unavailable
- 504 Gateway Timeout
- WebExceptionStatus.ConnectionClosed
- WebExceptionStatus.ConnectFailure
- WebExceptionStatus.Timeout
- WebExceptionStatus.RequestCanceled
- WebExceptionStatus.SendFailure
- WebExceptionStatus.NameResolutionFailure

## Assign the Microsoft Fabric Mirroring Destination to an Extraction

Extractions write data to their assigned destination. The Microsoft Fabric Mirroring destination only supports [Table CDC](../../table-cdc/) extractions. Follow the steps below to assign a destination to a Table CDC extraction:

1. In the main window of the Designer, select a Table CDC extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Microsoft Fabric Mirroring destination from the dropdown list.
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

### Convert dates

Converts the character-type SAP date (YYYYMMDD, e.g., 19900101) to a special date format (YYYY-MM-DD, e.g., 1990-01-01). Target data uses a real date data-type and not the string data-type to store dates.

#### Year 0

Converts the SAP date 00000000 to the entered value.

#### Year 9999

Converts the SAP date 9999XXXX to the entered value.

#### Invalid values

If an SAP date cannot be converted to a valid date format, the invalid date is converted to the entered value. NULL is supported as a value. When converting the SAP date the two special cases 00000000 and 9999XXXX are checked first.

## Related Links

- [Microsoft Documentation: What is Mirroring in Fabric?](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/overview)
- [Microsoft Documentation: Open mirroring in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring)
- [Microsoft Documentation: Tutorial Configure Microsoft Fabric open mirrored databases](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring-tutorial)
