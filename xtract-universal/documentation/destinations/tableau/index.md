This page shows how to set up and use the Tableau destination. The Tableau destination loads data into Tableau Analytics Platform.

The Tableau destination enables you to save data extracted from SAP as Hyper files. It is also possible to upload the Hyper file to Tableau Server or Tableau Online.

## Requirements

- Tableau Export Library
- Visual C++ 2015 Runtime

[Download the Tableau Export Library and Visual C++ 2015 Runtime](https://s3.eu-central-1.amazonaws.com/cdn-files.theobald-software.com/download/XtractUniversal/tableau.zip)

If no Visual C++ 2015 Runtime is installed on your machine, run the vc_redist.x64.exe to install the Visual C++ 2015 Runtime. Copy the `tableau` folder into your Xtract Universal directory so that the following folder structure is created: `C:\Program Files\XtractUniversal\tableau\hyper`.

## Create a new Tableau Destination

Follow the steps below to add a new Tableau destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Tableau* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### Output directory

Enter the path to a folder on the Xtract Universal Server where the generated Tableau files are stored.

Note

Make sure that the directory exists.

### Tableau server

#### Upload to Tableau Server

Option to upload the extracted file (as a data source) to Tableau Server or Tableau Cloud.

#### Delete local file after upload

Option to remove the local file after a successful upload.

#### Host

Enter the IP address or domain name of the remote server, starting with `http://` or `https://`. Examples:

- `https://my-site.tableau.com`
- `https://my-site.us-west-2.tableau.com`
- `http://192.168.1.1`
- `https://us-west-2b.online.tableau.com` (for Tableau Cloud)

#### PAT name

Enter the name of your [Personal Access Token (PAT)](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_auth.htm#make-a-sign-in-request-with-a-personal-access-token).\
To extract data to Tableau Server the site role "Server Administrator" is required.

#### PAT secret

Enter a valid token secret that corresponds to your token name.

#### Site (for Tableau Cloud)

Enter the name of a Tableau Cloud site. This field is mandatory for connecting to the Tableau Cloud.

#### [Test Connection]

Check the database connection.

### Tableau server settings

#### Site

A drop-down list of the sites stored on the connected on-prem server. Selecting a site is mandatory for uploading files.

#### Project

Select the project in which the extracted data is published.

## Assign the Tableau Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Tableau destination from the dropdown list.
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

### Convert dates

Converts the character-type SAP date (YYYYMMDD, e.g., 19900101) to a special date format (YYYY-MM-DD, e.g., 1990-01-01). Target data uses a real date data-type and not the string data-type to store dates.

#### Year 0

Converts the SAP date 00000000 to the entered value.

#### Year 9999

Converts the SAP date 9999XXXX to the entered value.

#### Invalid values

If an SAP date cannot be converted to a valid date format, the invalid date is converted to the entered value. NULL is supported as a value. When converting the SAP date the two special cases 00000000 and 9999XXXX are checked first.

### Existing files

If a flat file by the same name already exists in the target directory, the following actions can be taken:

| Option | Description | | --- | --- | | **Replace file** | The export process overwrites existing files. | | **Append results** | The export process appends new data to an already existing file, see [Column Mapping](#column-mapping). | | **Abort extraction** | The process is aborted, if the file already exists. |

### Column Mapping

Activate **Column Mapping** when appending data to an existing file or entity that has different column names or a different number of columns.\
This can be the case when extracting data from two or more extractions into the same destination file, where the column names of the extraction and the destination file differ.

Note

The column names in the extraction and destination must be unique. If duplicated column names are found, an error message is displayed. The column names must be corrected, before column mapping can be used.

#### Requirements

When working with flat files, ensure that:

- the XU server and the Designer both have access to the destination file.
- the [output directory](#destination-details) and the [file name](#file-name) of the extraction match the destination file.
- the [Column Name Style](#column-name-style) of the extraction and destination file match.

#### Mapping

Follow the steps below to map data:

1. Select the option **Append results** in the subsection [Existing Files](#existing-files).

1. Activate the option **Column Mapping**.

1. Click **[Map]** to assign columns. The window "Column Mapping" opens.

   - *Destination Columns* displays the names of the columns that are available in the destination file or entity.
   - *Not Mapped* defines whether or not columns are mapped to the destination columns.
   - *Source Columns* defines which SAP column is mapped to a destination column.

1. Depending on the column names of the source and target file, follow the instructions below:

   1. If the column names of the extraction and the names of the destination columns match, click **[Auto map by name]**.
   1. If the column names do not match, assign columns manually by selecting the respective SAP column from the dropdown menu under *Source Columns*.
   1. If a column does not have a counterpart or is not supposed to be appended, activate the checkbox in the column *Not Mapped*.

1. Click **[OK]** to confirm your input.

When running the extraction the extracted data is added to the destination file or entity as specified in the column mapping.

Tip

In case an error message pops up, click **[Show more]** to see a description of what caused the error.

Note

Columns that are not mapped are filled with `NULL` values.

______________________________________________________________________

## Related Links

- [Webinar: Visualize your SAP data in Tableau](https://www.youtube.com/watch?v=X6T3NfVDhJE)
- [Knowledge Base Article: Link a BEx query with a Hierarchy in Tableau](../../../knowledge-base/link-bex-query-with-hierarchy/)
