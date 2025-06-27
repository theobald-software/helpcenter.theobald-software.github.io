This page shows how to set up and use the Alteryx destination. The Alteryx destination enables users to load SAP data directly from within Alteryx.

## Requirements

To use the Alteryx destination, the Xtract Universal Alteryx plugin for the Alteryx Designer must be installed.

The Xtract Universal setup installs the Xtract Universal Alteryx plugin if there is a valid Alteryx installation on the current system. If you install Alteryx after installing Xtract Universal, run the Xtract Universal setup again. The Xtract Universal setup creates the following entries and extensions in the installation directory of that Alteryx installation:

- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

Note

Run the Xtract Universal setup on every machine that needs the Xtract Universal Alteryx plugin. If there is more than one Alteryx installation on your system, the Xtract Universal setup only detects one installation. In this case, a manual installation is required.

When encountering issues during or after the installation of the plugin (e.g., the plugin is not showing in Alteryx), send the setup.log file located in `C:\Program Files\XtractUniversal\alteryx\setup.log` to the [Theobald Support](https://support.theobald-software.com).

## Create a new Alteryx Destination

Follow the steps below to add a new Alteryx destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Alteryx* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination. To use the Alteryx destination, no further settings are necessary.

## Assign the Alteryx Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Alteryx destination from the dropdown list.
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

## Use Xtract Universal in Alteryx

To use Xtract Universal extractions in the Alteryx Designer, add the the Xtract Universal tool to your Alteryx workflow. The specify the [*Connection*](#connection) settings and the [*Parameters*](#parameters) settings of the Xtract Universal tool.

### Connection

Connect to the Xtract Universal Server and select the extraction you want to to execute in Alteryx.

Note

Make sure the Xtract Universal server is running.

#### Server

Enter the name, IP or domain and port to access the server that runs Xtract Universal within the network. Format: `[Server]:[Port]`.

#### Extraction

Select an extraction from the drop-down menu.\
Only extractions with that have the Alteryx destination [assigned](#assign-the-alteryx-destination-to-an-extraction) to them are displayed.

#### Send SAP credentials

Activate the checkbox **Send SAP credentials**, if the option *Require SAP Credentials to be explicitly supplied for execution* is active in the [SAP source](../../sap-connection/settings/#authentication) settings in Xtract Universal.\
The setting *Send SAP credentials* can be useful in self service scenarios. When each extraction needs to be executed using an individual user's SAP credentials instead of the globally defined credentials.

#### Authenticate using current Windows user

Activate the checkbox **Authenticate using current Windows user** to use the Windows user that runs Alteryx for authentication.

### Parameters

In the tab *Parameters* tab, the Xtract Universal tool loads available [parameters](../../parameters/) for the specified extraction. The depicted examples show how to override custom parameters created in Xtract Universal.

In the following example, an extraction of SAP customers contains the [custom parameter](../../parameters/extraction-parameters/#custom) *city*. The parameter is available in the tab *Custom Defined Parameters* and can be overwritten with a static value. To override the parameter *city*, activate the checkbox **Override** and enter a new value, e.g., "Stuttgart".

The Xtract Universal tool can receive inputs, e.g., via the *Input Data* tool. The data input can be used to dynamically override parameters in Xtract Universal.\
In the following example, an extraction of SAP customers contains the [custom parameter](../../parameters/extraction-parameters/#custom) *city* The parameter is available in the tab *Custom Defined Parameters* and can be overwritten with a dynamic input value.

To override the parameter *city*, activate the checkbox **Override** and the checkbox **Map**. Select an item out of the drop-down list in the field **value**.

Tip

If the connection to the specified Xtract Universal server is not established and no errors are shown, the Xtract Unversal tool offers a tooltip in the following format: `[Extraction] @ [Server]`.
