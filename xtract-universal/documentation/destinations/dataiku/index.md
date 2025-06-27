This page shows how to set up and use the Dataiku destination. The Dataiku destination enables users to load SAP data directly from within [Dataiku](https://www.dataiku.com/).

## Requirements

To use the Dataiku destination, the Xtract Universal Dataiku plugin must be installed. You can fetch the [xu-dataiku-plugin](https://github.com/theobald-software/xu-dataiku-plugin) from the gitHub repository.

For information on how to install plugins in Dataiku, see [Dataiku Documentation: Installing plugins](https://doc.dataiku.com/dss/latest/plugins/installing.html).

## Create a new Dataiku Destination

Follow the steps below to add a new Dataiku destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Dataiku* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination. To use the Dataiku destination, no further settings are necessary.

## Assign the Dataiku Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Dataiku destination from the dropdown list.
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

## Use Xtract Universal in Dataiku

To use Xtract Universal extractions in the Dataiku Designer, make sure that the [Xtract Universal Dataiku Plugin](https://github.com/theobald-software/xu-dataiku-plugin) is installed in Dataiku.

### Plugin Settings

The Xtract Universal plugin has a settings menu that contains settings for the [connection to an Xtract Universal server](#connection). To open the plugin settings, navigate to **Plugin > Installed > Xtract Universal > Settings > Xtract Universal Server**.

#### Definable inline

Allows users to define a connection to an Xtract Universal server on a dataset level. The connection can be defined when adding a new Xtract Universal dataset to a flow. If active, the drop-down menu to select an Xtract Universal server preset contains the option *Manually defined*.

#### Definable at project level

Allows users to define a connection to an Xtract Universal server on a project level. Connections that are created at the project level are available for all datasets within the project. The connection can be defined in the project settings. To open the project settings for Xtract Universal, navigate to **Settings > Plugin presets > Xtract Universal**.

#### ADD PRESET

Click **[+ADD PRESET]** to create a connection to an Xtract Universal server on the plugin level. Connections that are created at the plugin level are available in all projects and datasets.

#### Description

Add a description of the connection.

#### Xtract Universal Server

Enter the hostname or IP address of the server that runs Xtract Universal without the port. The port is specified in the **Customize Port** option.

#### Transport Layer Security (HTTPS)

Activate this option if [TLS is enabled in Xtract Universal](../../access-restrictions/restrict-server-access/#activate-tls-encryption). Optionally, enter a valid username and password for the authentication against the Xtract Universal server. Currently, only [Xtract Universal users](../../access-restrictions/user-management/#create-custom-users) are supported (no Active Directory users).

#### Customize Port

Specify the port that is used to communicate with the Xtract Universal server. Make sure the connection uses the same port that is defined in the Xtract Universal [web server settings](../../server/server-settings/#web-server). The default ports are 8065 without TLS and 8165 with TLS.

### Connection

There are multiple ways to connect to an Xtract Universal Server:

- Add a connection on the plugin level
- Add a connection on a [project level](#definable-at-project-level)
- Add a connection on a [dataset level](#definable-inline) (deactivated by default)

Follow the steps below to add a connection to an Xtract Universal server on the plugin level. Connections that are defined on the plugin level are available in all projects and datasets.

1. Open the plugin settings for the Xtract Universal server. The settings are located in **Plugin > Installed > Xtract Universal > Settings > Xtract Universal Server**.
1. Click **[+ADD PRESET]** to create a new connection.
1. When prompted, enter a name for the connection and click **[CREATE]**.
1. In the field **Xtract Universal server**, enter the host name or IP address of the Xtract Universal server.
1. If [TLS is enabled in Xtract Universal](../../access-restrictions/restrict-server-access/#activate-tls-encryption), activate the option **Use TLS for communication with the XU server** and provide valid credentials.
1. If a non-default port is used for the Xtract Universal [web server](../../server/server-settings/#web-server), click **Customize port** to specify the port.
1. Click **[SAVE]**.

The connection is now available in all projects and datasets.

### Add Datasets with Xtract Universal

Connect to the Xtract Universal Server and select the extraction you want to to execute in Dataiku.

Note

Make sure the Xtract Universal server is running.

1. Open a project in Dataiku.

1. Click **[+DATASET] > Xtract Universal**.

1. Click **Xtract Universal Extraction**.

1. In the drop-down menu **Xtract Universal server preset**, select an existing [connection to an Xtract Universal server](#connection).

1. In the drop-down menu **Extraction**, select an existing extraction. Only extractions with that have the Dataiku destination [assigned](#assign-the-dataiku-destination-to-an-extraction) to them are displayed.

   Tip

   If no extractions are available, check if the [connection settings](#plugin-settings) are correct and if there are extractions on the server that use the Dataiku destination.

1. Optional: click **[+ADD AN OBJECT]** to pass values to an Xtract Universal [extraction parameter](../../parameters/extraction-parameters/). The plugin fetches all available parameters from Xtract Universal.

   - Select a parameter from the drop down menu **Name**.
   - Enter a value for the parameter in the input field **Value**.

1. Click **[TEST & GET SCHEMA]**. A preview of the data is displayed.

1. Click **[CREATE]**. The data is loaded into the workflow.

Tip

In case of errors, navigate to **Administration > Maintenance** to check the logs. The logs contain plugin logs and stack traces, see [Dataiku Documentation: Diagnosing and debugging issues](https://doc.dataiku.com/dss/latest/troubleshooting/diagnosing.html).

______________________________________________________________________

## Related Links

- [Dataiku Documentation](https://doc.dataiku.com/dss/latest/)
- [Dataiku Knowledge Base](https://knowledge.dataiku.com/latest/)
- [Xtract Universal Server](../../server/)
