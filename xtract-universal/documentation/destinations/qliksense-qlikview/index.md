This page shows how to set up and use the QlikSense & QlikView destination. The QlikSense & QlikView destination loads data to QlikSense or QlikView.

## About

The QlikSense & QlikView destination [generates a data load script](#generate-a-data-load-script), that needs to be inserted into the data load editor of your Qlik application. Depending on whether you run a QlikSense or QlikView application, Xtract Univeral creates a different data load script.

Running the Qlik application triggers the respective Xtract Universal extraction via the data load script. Xtract Universal sends the extracted SAP data through an HTTP-CSV stream directly to your Qlik application.

## Create a new QlikSense & QlikView Destination

Follow the steps below to add a new QlikSense & QlikView destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *QlikSense & QlikView* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination. To use the QlikSense & QlikView destination, no further settings are necessary.

## Assign the QlikSense & QlikView Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your QlikSense & QlikView destination from the dropdown list.
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

## Generate a Data Load Script

Follow the steps below to generate a data load script in Xtract Universal. The data load script is required to run extractions in your Qlik application.

1. In the main window of the Designer, select an extraction from the list of extractions.
1. Make sure the extraction has the QlikSense & QlikView destination [assigned](#assign-the-qliksense-qlikview-destination-to-an-extraction) to it.
1. Click **[Run]**. The window "Run Extraction" opens.
1. Optional (when using QlikSense): In the *Parameters* section, mark the check boxes for the parameters that you want to add as SET variables in the QlikSense script.
1. Click **[Generate Qlik Script]** to generate a data load script. The window "Script" opens.
1. Select the *QlikView Script* or *QlikSense Script* tab.
1. Click **[Copy to Clipboard]** to copy the script.

When using QlikView, paste the copied script into the QlikView data load editor. For QlikSense, see [Run Extractions from QlikSense](#run-extractions-from-qliksense).

Note

The "SET methods" cannot be edited in the "Script" window. Edit the SET methods in the Qlik data load editor.

### Run Extractions from QlikSense

Before copying the Qlik script [generated by Xtract Universal](#generate-a-data-load-script) to QlikSense, perform the following steps in QlikSense:

1. Create a new data connection of type REST.

   Note

   In QlikSense the default value for the *Timeout* is 30 seconds. Increase the timeout to a sufficiently high value if the time till the first data package arrives from SAP is higher than 30 seconds. The maximum input value is 10.000 seconds.

1. Enter the URL of the Xtract Universal Server and port into the URL text field. In the depicted example, the Xtract Universal server runs on `http://localhost:8065/`.

1. Enter *Xtract_Universal* into the name text field.

1. Activate the security option **Allow response headers**. This option ensures that error messages from Xtract Universal are passed to QlikSense.

1. Paste the QlikSense script from Xtract Universal into the QlikSense Data load editor.

Warning

**Response headers are denied by the current connection. Please edit your connection in order to enable response headers loading.**\
When this error message is displayed in the REST connection, activate the option "Allow response headers" in the *Security* settings of the connector.

### About the QlikSense Data Load Script

Xtract Universal creates a QlikSense script with the following properties:

- The script uses QlikSense [interpretation functions](https://help.qlik.com/en-US/sense/June2020/Subsystems/Hub/Content/Sense_Hub/Scripting/InterpretationFunctions/interpretation-functions.htm) *Num#*, *Text*, *Date* and *Time*. For fields, where an adequate data type can't be determined, no interpretation function is used.
- The field description and the SAP origin of the field are assigned as tags to all fields.
- All date fields with `$date` are explicitly tagged. This function assures that fields containing a [date before January 1, 1980](https://help.qlik.com/en-US/sense/April2020/Subsystems/Hub/Content/Sense_Hub/Scripting/date-time-interpretation.htm) are recognized as date fields in QlikSense.
- The usage of Xtract Universal [Extraction Parameters](../../parameters/extraction-parameters/) is supported. To make parameters available in the QlikSense script, activate the parameters in the ["Run Extraction" window](../../execute-and-automate/run-an-extraction/#run-extractions-in-the-designer) of Xtract Universal.

Note

Do not change the assigned value of variables *xuOriginDateFormat* and *xuOriginTimeFormat*. The chosen format enables Xtract Universal to send the data of date and time fields to QlikSense. Changing the format stops the QlikSense script from running.
