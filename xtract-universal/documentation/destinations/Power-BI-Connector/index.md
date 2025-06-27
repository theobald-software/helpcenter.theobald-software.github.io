This page shows how to set up and use the Microsoft Power BI destination. The Microsoft Power BI destination loads data to Power BI

The destination offers two ways to connect Power BI with Xtract Universal:

- Power BI custom connector
- Generic Power Query M-script using one of the following ways:
  - [Power BI Desktop](#power-bi-desktop)
  - [Power BI Service - Microsoft Fabric Dataflow Gen2](#power-bi-service-microsoft-fabric-dataflow-gen2)

With the Power Query M-script you can additionally directly integrate data into Dataflow Gen2 using [Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/data-factory/create-first-dataflow-gen2).

## Supported Power BI Environments

Xtract Universal supports the following environments:

- [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/) via [Power BI Custom Connector](#power-bi-custom-connector)
- [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) via [Power BI on-premises data gateway](../../../knowledge-base/connect-to-power-bi-service/)
- [Power BI Report Server](https://docs.microsoft.com/en-us/power-bi/report-server/get-started) via [Power Query M-script](#power-query-m-script)

| | Custom Connector | M-script | | --- | --- | --- | | Power BI Desktop | | | | Power BI Service | | | | Power BI Report Server | | |

## Video Tutorial

The following YouTube tutorial shows how to install the Power BI Custom Connector and how to use Xtract Universal with Power BI:

## Create a new Microsoft Power BI Destination

Follow the steps below to add a new Microsoft Power BI destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Microsoft Power BI* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination. To use the Microsoft Power BI destination, no further settings are necessary.

## Assign the Microsoft Power BI Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Microsoft Power BI destination from the dropdown list.
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

## Power BI Custom Connector

The Microsoft Power BI destination works in combination with a custom extension file for Power BI. This extension file *XtractUniversalExtension.pqx* is located in the *powerbi* folder of the Xtract Universal installation directory, e.g., `C:\Program Files\XtractUniversal\powerbi\`. The Power BI Custom Connector was developed following Microsoft's guidelines for [custom connectors in Power BI](https://docs.microsoft.com/en-US/power-bi/desktop-connector-extensibility).

### Install the Power BI Custom Connector

Follow the steps below to install the Power BI Custom Connector.

1. Open the *powerbi* folder located in the Xtract Univesal installation directory, e.g., `C:\Program Files\XtractUniversal`.

1. Run the *install-connector* PowerShell script.\
   This script copies the *XtractUniversalExtension.pqx* file to the `[Documents]\Power BI Desktop\Custom Connectors` folder. If the folder does not exist, the script creates the folder.

1. Run the *trust-connector* PowerShell script.\
   This script modifies the registry at `HKLM:\SOFTWARE\Policies\Microsoft\Power BI Desktop\`. The script adds or modifies the registry value *TrustedCertificateThumbprints* with the thumbprint of the *XtractUniversalExtension.pqx* file. This procedure follows Microsoft's recommendations for [trusting third-party connectors](https://docs.microsoft.com/en-us/power-bi/desktop-trusted-third-party-connectors).

1. Check if the directory `[Documents]\Power BI Desktop\Custom Connectors` exists.

1. Create this directory if it doesn't exist.

1. Open the *powerbi* folder located in the Xtract Univesal installation directory, e.g., `C:\Program Files\XtractUniversal\powerbi\`.

1. Copy the *XtractUniversalExtension.pqx* file from the *powerbi* folder to `[Documents]\Power BI Desktop\Custom Connectors`.

1. Restart Power BI.

1. In Power BI Desktop, navigate to **File > Options and settings > Options > Security**.

1. In the subsection [Data Extensions](https://docs.microsoft.com/en-us/power-bi/desktop-connector-extensibility#data-extension-security), activate the option **(Not Recommended) Allow any extension to load without validation or warning**.

1. Click **[OK]**.

1. Restart Power BI.

The Xtract Universal data source is now available within Power BI.

#### Power BI Settings

Adjust the following settings in Power BI:

1. In Power BI, navigate to **File > Options and settings > Options** to open the option menu.

1. Activate the option **(Not Recommended) Allow any extension to load without validation or warning** in the tab *Security*.

1. Optional: Increase the Power BI cache in the tab *Load Data* to prevent multiple calls from Power BI to Xtract Universal when extracting large data volumes.

   Note

   Multiple calls to Xtract Universal result in in multiple entries for the same extraction in the Xtract Universal extraction log.

### Connect Power BI with Xtract Universal

Follow the steps below to connect Power BI with Xtract Universal

1. In Power BI, select Xtract Universal from the *Get Data* menu.

1. Click the **[Connect]** button.

1. Enter the URL of the Xtract Universal [web server](../../designer/#connect-the-designer-to-a-server) `<Protocol>://<HOST or IP address>:<Port>/`.

   When prompted for *Anonymous*, *Basic* or *Windows* authentication, follow the steps as outlined in [Single Sign On and SAP authentication](#single-sign-on-and-sap-authentication).\
   The "Navigator" window lists all extractions that are [assigned to a Microsoft Power BI destination](#assign-the-microsoft-power-bi-destination-to-an-extraction) in Xtract Universal.

1. Select an extraction from the list. The preview data shows the actual SAP column headers and preview data (real data or dummy data, depending on the extraction type).

1. Click the **[Load]** button. This triggers an extraction in Xtract Universal and writes the extracted data to Power BI.

The data is now available for further processing.

### Parameterizing in Power BI Custom Connector

When using the Power BI Custom Connector, Xtract Universal [custom parameters](../../parameters/extraction-parameters/#custom) can be populated when setting up the connection in Power BI.

A list of an extraction's custom parameters is displayed under the *Custom* tab in the "Run Extraction" window. In the depicted example the list contains one entry *BUKRS_low*.

The list of Xtract Universal custom parameters is exposed in Power BI Desktop when creating a report based on the selected extraction. The exposed Xtract Universal parameters can be filled with values from within Power BI Desktop.

## Power Query M-script

Instead of the Power BI Custom Connector, you can also use the Custom Power Query M-script to connect Power BI to Xtract Universal. The Power BI Query M-script is located inside the Xtract Universal installation directory, e.g., `C:\Program Files\XtractUniversal\powerbi\loading_script.txt`.

Warning

**Use of the Custom Connector & Query M-script**\
Power Query M-script and Power BI Custom Connector do not belong together.\
Use either the Power Query M-script **or** the Power BI Custom Connector.

### Power BI Desktop

Note

Only use the extractions with the Power BI Connector destination assigned to them.

Follow the steps below to set up the Power Query M-script in Power BI to connect with Xtract Universal:

1. Create a new Power BI report using **Home > Get Data > Blank Query** as a data source.

1. Open the **[Advanced Editor]**.

1. Open the Xtract Universal *loading_script.txt* in any text editor.

1. Copy the content of *loading_script.txt* into the *Advanced Editor* in Power BI.

1. Change the values for **ExtractionName** and the **ServerURL** to match the names of your Xtract Universal extraction and [web server](../../designer/#connect-the-designer-to-a-server) .

1. Within the *Advanced Editor*, click **[Done]** to confirm the script.

1. Click **[Close & Apply]**.

1. In Power BI, navigate to **File > Options and settings > Options** to open the option menu.

1. Activate the option **(Not Recommended) Allow any extension to load without validation or warning** in the tab *Security*.

1. Optional: Increase the Power BI cache in the tab *Load Data* to prevent multiple calls from Power BI to Xtract Universal when extracting large data volumes.

   Note

   Multiple calls to Xtract Universal result in in multiple entries for the same extraction in the Xtract Universal extraction log.

### Parameterizing in Power Query M-Script

1. Open the Power Query M-script.

1. Navigate to *Parameters* and replace the values with actual values or with parameters defined in Power BI.

   ```text
       // Record containing run parameters with corresponding values, can be empty
       // Usage: <XU parameter name>= <value or Power BI parameter>
       // MUST NOT use "name" as a record field here
       Parameters = [ /*rows= "300", myparameter= SomePowerBIParameter*/ ],

   ```

### Power BI Service (Microsoft Fabric Dataflow Gen2)

#### Requirements

- Active [Power BI on-premises data gateway](../../../knowledge-base/connect-to-power-bi-service/)
- Power BI Destination within Xtract Universal
- Microsoft Fabric Subscription

#### Procedure

1. Navigate to **My Workspace > New > Data factoring > Dataflow Gen2**
1. Create a new Power BI report using **Home > Get Data > Blank Query** as a data source.
1. Open the **[Advanced Editor]**.
1. Open the Xtract Universal *loading_script.txt* in any text editor.
1. Copy the content of *loading_script.txt* into the *Advanced Editor*.
1. Select the appropriate data gateway from the dropdown-list.
1. Click **[Next]**.

## Single Sign On and SAP Authentication

When setting up the Xtract Universal data source in Power BI for the first time, you are prompted for one of the following authorization methods. Select an authorization method according to your landscape:

- *Anonymous*: Select this option if the Xtract Universal server settings don't require any authentication for running an extraction.
- *Basic*: Select this option if the *Require SAP Credentials to be explicitly supplied for execution* checkbox is marked in the [SAP Source Settings](../../sap-connection/settings/#authentication) in Xtract Universal. Enter your SAP credentials in the respective input fields.
- *Windows*: Select this option if you want to use [SSO](../../sap-connection/sso-with-logon-ticket/) or if you have restricted access to extractions in the Xtract Universal server settings. Enter \\\\ in the *user* field and your Windows password in the *Password* field.

Xtract Universal and the Power BI Connector destination support single sign on (SSO) to SAP. If SSO is set up correctly, the Windows credentials of the executing Power BI user are mapped to this user's SAP credentials. This leverages the user's SAP authorizations and Power BI will only show data that matches the user's SAP authorizations.

______________________________________________________________________

## Related Links

- [Connect Xtract Universal to Power BI Service](../../../knowledge-base/connect-to-power-bi-service/)
- [Microsoft Documentation: What is an on-premises data gateway?](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem)
- [Microsoft Documentation: Use custom data connectors with the on-premises data gateway](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-custom-connectors)
- [Microsoft Documentation: Configure scheduled refresh](https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh)
- [Microsoft Documentation: Parameters in Power BI Desktop](https://docs.microsoft.com/en-us/power-query/power-query-query-parameters)
- [Microsoft Fabric - Creating Dataflows](https://learn.microsoft.com/en-us/fabric/data-factory/create-first-dataflow-gen2)
