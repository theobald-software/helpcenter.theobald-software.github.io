This page shows how to set up and use the Flat File CSV destination. The Flat File CSV destination is a CSV (comma-separated values) flat file that can be written to a local directory or a network drive.

## Create a new Flat File CSV Destination

Follow the steps below to add a new Flat File CSV destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Flat File CSV* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### File output path

#### File output path

Enter the folder path to save the destination flat files in. If the entered folder does not exist, a new folder is created.

Note

To write flat files to a network drive, you need to:

- Enter the **File output path** in [UNC format](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats#unc-paths) e.g., `\\Server2\Share\Folder1`.
- Grant write permission to the directory to the [Xtract Universal service](../../server/service-account/) or run the service under a user account that has write permission.

### CSV Settings

#### Column seperator

Defines how two columns in CSV are separated.

#### Row separator

Defines how two rows in CSV are separated.

#### Quote symbol

Defines which character is used to encase field data. A sequence of characters may be used as "Quote symbol". Quotation is applied in the following scenarios:

- The Column separator is part of the field data.
- The Quote symbol is part of the field data.
- The Row separator is part of the field data.
- The Escape character is part of the field data.

#### Escape character

When Escape character is part of the field data, the respective field containing this character is encased by the "Quote symbol". The default escape character is the backslash ''. The field may remain empty.

#### Column names in first row

Defines if the first row contains the column names. This option is set per default.

#### Row separator after last row

Defines if the last row contains a row separator. This option is set per default.

### Convert / Encoding

#### Decimal separator

Defines the decimal separator of decimal number for the output. Dot (.) is the default value.

#### Date format

Defines a customized date format (e.g. YYYY-MM-DD or MM/DD/YYYY) for converting valid SAP dates (YYYYMMDD). Default is YYYY-MM-DD.

#### Time format

Defines a customized time format (e.g. HH-MM-SS or HH:MM:SS) for converting valid SAP times (HHMMSS). Default is HH:MM:SS.

#### Text Encoding

Defines the text encoding.

## Assign the Flat File CSV Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Flat File CSV destination from the dropdown list.
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

### Existing files

If a flat file by the same name already exists in the target directory, the following actions can be taken:

| Option | Description | | --- | --- | | **Replace file** | The export process overwrites existing files. | | **Append results** | The export process appends new data to an already existing file, see [Column Mapping](#column-mapping). | | **Abort extraction** | The process is aborted, if the file already exists. |

### File Splitting

Writes extraction data of a single extraction to multiple files. Each filename is appended by *\_part[nnn]*.

#### Max. file size

The value set in *Max. file size* determines the maximum size of each file.

Note

The option *Max. file size* does not apply to gzip files. The size of a gzipped file cannot be determined in advance.

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
