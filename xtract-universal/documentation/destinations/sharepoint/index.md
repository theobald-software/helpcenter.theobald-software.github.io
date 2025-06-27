This page shows how to set up and use the Microsoft SharePoint destination. The Microsoft SharePoint destination loads data into a custom list on a SharePoint server.

## Requirements

To extract data into a SharePoint Custom list, you need either your own SharePoint server or access to a SharePoint Online system as part of Office365.

If your SharePoint server isn't configured for remote access already, go to **Central Administration -> Application Management -> Configure alternate access mappings** and add an appropriate mapping for the zone "Internet".

## Create a new Microsoft SharePoint Destination

Follow the steps below to add a new Microsoft SharePoint destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Microsoft SharePoint* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

#### SharePoint on-premises or SharePoint Online

Select the type of SharePoint environment to write data to.

#### Site URL

Enter the URL of your SharePoint server. To write data to a specific site on the server, include the sub-directories in the URL. The URL uses the following format:

- SharePoint Online: `https://<your-tenant>.sharepoint.com/sites/<your-site-name>`
- SharePoint on-premises: `http(s)://<your-server-name or domain>/<site-path>`

Note

Make sure you only enter the base path, omit page information a browser might show you in the address line like `_layouts/15/start.aspx#/` or similar.

#### User

Enter your SharePoint user name.

#### Password

Enter the password for your SharePoint user account.

#### Test connection

Check the database connection.

## Assign the Microsoft SharePoint Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Microsoft SharePoint destination from the dropdown list.
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

### Column Name Style

Defines the style of the column name. Following options are available:

| Option | Description | | --- | --- | | *Code* | The SAP technical column name is used as column name in the destination e.g., MAKTX. | | *PrefixedCode* | The SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX | | *CodeAndText* | The SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text). | | *TextAndCode* | The SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)\_MAKTX. | | *Text* | The SAP description is used as column name in the destination e.g., Material Description (Short Text). |

### Mode

| Option | Description | | --- | --- | | *Drop, Create & Insert* | Creates a new list on the SharePoint system, deleting any previous list with the same name. | | *Create If Not Exists & Merge* | Merges data with an existing list or creates a new list, if none with the specified name is found. | | *Truncate & Insert* | Creates a new list on the SharePoint system, deleting any previous list with the same name. | | *Merge only*\* | Merges rows, without deleting rows or the list itself. |

#### Max. threads

Sets the number of threads for communication with the SharePoint server. It is recommended to use the default value *2*.

Note

Increasing the thread number may increase the upload speed, depending on the server and network setup. Setting the value to *1* slows down the speed significantly, which may help with a heavy load of the SharePoint server or when connection problems occur.
