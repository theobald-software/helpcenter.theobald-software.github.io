This page shows how to set up and use the HTTP CSV destination.\
The HTTP CSV destination is a generic CSV stream over HTTP. It is supported by many products, e.g., Layer2, INFONEA and KNIME.

## Create a new HTTP CSV Destination

Follow the steps below to add a new HTTP CSV destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *HTTP CSV* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

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

## Assign the HTTP CSV Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your HTTP CSV destination from the dropdown list.
1. Optional: edit the [destination settings](#destination-settings).
1. Click **[OK]** to confirm your input.

When running the extraction, the extracted SAP data is now written to the destination.

### Destination Settings

The destination settings only affect the extraction that the destination is assigned to. To open the destination settings, select an extraction in the main window of the Designer and click **[Destination]**. The window "Destination Settings" opens.

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
