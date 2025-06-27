This page shows how to set up and use the KNIME destination. The KNIME destination loads data to [KNIME](https://www.knime.com/).

## Create a new KNIME Destination

Follow the steps below to add a new KNIME destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *KNIME* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination. To use the KNIME destination, no further settings are necessary.

## Assign the KNIME Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your KNIME destination from the dropdown list.
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

## KNIME Integration via SAP Reader

### Requirements

The following software applications must be installed for integration into KNIME:

- Latest version of Xtract Universal, see [Download Trial Version](https://theobald-software.com/en/download-trial)
- Latest version of the [KNIME Analytics Platform](https://www.knime.com/downloads)

### Step by Step Guide

1. Create an extraction in Xtract Universal. Select KNIME as the destination for the extraction .
1. Start the *KNIME Analytics Platform*.
1. Install the extension [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory).
1. Drag & Drop the Node / Source 'SAP Reader (Theobald Software)' onto the KNIME Canvas.
1. Open the SAP Reader Task 'Settings' and enter the URL address of the Xtract Universal Server, e.g. `http://localhost:8065/` .
1. Click **[Fetch Queries]** and select an extraction.
1. Confirm your input with **[OK]** .
1. Start the extraction via **[Execute]**.
1. Check the extracted SAP data via **[SAP Query Result]**.

______________________________________________________________________

## Related Links

- [KNIME SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory)
- [Youtube-Video: Webinar "SAP Data to Insights with KNIME"](https://www.youtube.com/watch?v=KQLLoDUoOEg)
- [Knowledge Base Article: Dynamic Runtime Parameter within KNIME Workflow](../../../knowledge-base/dynamic-runtime-paramater-within-KNIME-workflow/)
