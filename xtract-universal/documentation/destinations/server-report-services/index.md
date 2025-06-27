This page shows how to set up and use the Microsoft Power BI Report Server destination. The Microsoft Power BI Report Server destination loads data in Power BI Report Server (SSRS).

## Requirements

The Power BI Report Server destination requires the following components:

- Visual Studio 2017 or higher
- the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio) plugin (version 2.6.11 or higher) for Visual Studio.
- Power BI Report Server (January 2020 or later)
- Xtract Universal (version 4.29 or higher)
- To use [Transport Layer Security](../../access-restrictions/restrict-server-access/#activate-tls-encryption), it is necessary to modify the Registry of the machine that runs the SSRS server according to the [Microsoft Documentation: Configure Strong cryptography](https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client#configure-for-strong-cryptography).

Note

The Power BI Report Builder is not supported.

## Installation

To use the Power BI Report Server destination, install the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio) plugin in Visual Studio. After the installation is complete, close Visual Studio.

Microsoft Power BI Report Server (SQL Server Reporting Services) supports a wide variety of data sources out of the box. To add Xtract Universal to the list of data sources, install the [Xtract Universal Report Server Plugin](#installation-of-the-xtract-universal-report-server-plugin) for Visual Studio **and** the Report Server. The plugin must be installed on both environments to consume the data extracted by Xtract Universal, see graphic below:

To complete the installation close all Visual Studio windows.

Note

Make sure to install the latest version of the *Microsoft Reporting Services Projects* plugin and Xtract Universal.

### Installation of the Xtract Universal Report Server Plugin

The Xtract Universal Report Server Plugin can be installed as part of the [Xtract Universal Setup](../../setup/installation/).\
To install the Xtract Universal Report Server Plugin on multiple environments without installing the Xtract Universal Designer, follow the steps below:

1. Make sure the *Microsoft Reporting Services Projects* plugin for Visual Studio is installed and active.
1. Close Visual Studio.
1. [Install Xtract Universal](../../setup/installation/) on the environment on which the license runs.
1. Download the [XtractUniversalReportServerPluginSetup.exe](../../../assets/files/xu/XtractUniversalReportServerPluginSetup.exe).
1. Run the *XtractUniversalReportServerPluginSetup.exe* on any environment that uses Visual Studio to design reports or where the Report Server runs. This installs the Xtract Universal Report Server Plugin on all compatible versions of Visual Studio and/or Report Server found on the environment.
1. After the installation on the Report Server is complete, restart the Report Server for the changes to take effect. You can restart the server in the Report Server Configuration Manager by clicking **[stop]** and then **[start]**.

Note

If the *Reporting Services Projects* plugin for Visual Studio is updated, the Xtract Universal Report Server Plugin is not available anymore. The Report Server Plugin must be reinstalled.

After installation of Xtract Universal Report Server Plugin the following entries and extensions are available in the Visual Studio installation directory `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\`:

- XUDataExtension2020.05.dll
- Theobald.Common.dll
- Theobald.Distillery.Common.dll
- Theobald.Net.dll
- RSReportDesigner.config

## Create a new Microsoft Power BI Report Server Destination

Follow the steps below to add a new Microsoft Power BI Report Server destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Microsoft Power BI Report Server* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination. To use the Microsoft Power BI Report Server destination, no further settings are necessary.

## Assign the Microsoft Power BI Report Server Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Microsoft Power BI Report Server destination from the dropdown list.
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

## SSRS in Visual Studio

The following section contains step-by-step instructions on how to access SAP data in the SSRS environment via Xtract Universal.

#### Prerequisites in Xtract Universal

To make SAP data available in the SSRS environment, [create an extraction](../../../getting-started/#create-an-extraction) in the Xtract Universal Designer. Make sure the Microsoft Power BI Report Server destination is [assigned](#assign-the-microsoft-power-bi-report-server-destination-to-an-extraction) to the extraction.

### Add an Extraction as a Data Source in Visual Studio

Follow the steps below to create an Xtract Universal data source in Visual Studio:

1. Create a new "Report Server Project" in Visual Studio.
1. Right-click the *Shared Data Sources* folder in the *Solution Explorer* and select **Add New Data Source**. The window "Shared Data Source Properties" opens.
1. In the tab *General*, assign a name for the new data source .
1. Select the type *Xtract Universal* from the drop-down list .\
   If *Xtract Universal* is not available or displayed in all caps, make sure that the latest Xtract Universal version and *Microsoft Reporting Services Projects* plugin are both installed.
1. Enter a *connection string* to the [Xtract Universal Web Server](../../designer/#connect-the-designer-to-a-server) in the format `Url=http://[host]:[port]/` e.g, `Url=http://localhost:8065/`. Note that the *connection string* is case sensitive.
1. Optional (only required if [access restriction to the Xtract Universal web server](../../access-restrictions/restrict-server-access/) is configured or if the SAP source requires SAP credentials): Switch to the *Credentials* tab and enter your [username and password](../../access-restrictions/user-management/) for Xtract Universal.
1. Confirm your input with **[OK]**.

If Xtract Universal is not available in the drop-down list even though the *Microsoft Reporting Services Projects* plugin (version 2.6.11 or higher) and the latest version of Xtract Universal are both installed, send the log file located in `C:\Program Files\XtractUniversal\ssrs\log.txt` to [Theobald Support](https://support.theobald-software.com).

Tip

The *connection string* is part of the URL string displayed in the ["Run Extraction" window](../../execute-and-automate/run-an-extraction/#run-extractions-in-the-designer) of the Designer. Copy the URL string up to '?' and paste it as the *connection string* into Visual Studio.

Note

When **https Restricted...** or **https Unrestricted** is activated in the [XU web server settings](../../access-restrictions/restrict-server-access/#activate-tls-encryption), make sure to modify the Registry of the machine that runs the SSRS server according to the [Microsoft Documentation: Configure Strong cryptography](https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client#configure-for-strong-cryptography).

### Create a Report using an Xtract Universal Data Source

The following steps guide you through the creation of a Report in Visual Studio using an Xtract Universal data source:

1. [Add a Power BI Report Server extraction as a data source in Visual Studio](#add-an-extraction-as-a-data-source-in-visual-studio).

1. Right-click the *Reports* folder in the *Solution Explorer* and select **Add New Report**. The "Report Wizard" opens.

1. In the wizard, select a data source and click **[Next]**.

1. Click **[Query Builder...]**. The window "Query Designer" opens.

1. Select an Xtract Universal extraction from the drop-down menu .

   Note

   If no extractions are available, make sure the *connection string* in the data source is correct and an extraction with an *SQL Server Reporting Server* destination exists in Xtract Universal.

   If you don't see the editor shown below, click **Edit as Text**.

1. Optional: Change [runtime parameters](../../parameters/extraction-parameters/) of the extraction . Parameter changes are visible in the Query string . Invalid input is marked with a red circle that displays an error message when hovering over it.

1. Click **[Preview]** to run the extraction in preview mode.

1. Confirm your input with **[OK]**. The Query Builder closes.

1. Make sure the Query string from the Query Builder is displayed in the Report Wizard before clicking **[Next]**.

1. Complete the Report Wizard according to your preferences.

After creating the report, you can access the Query Builder by right-clicking the *Dataset* in *Report Data* and selecting **Query...**.

Tip

Passing the (Windows) user that runs a report on the report server or in Visual Studio is supported. For this, you need to set up the [web server authentication](../../server/server-settings/#web-server) in Xtract Universal. Single Sign On in SAP is also supported, see [Single Sign On](../../sap-connection/#single-sign-on-sso).

### Parameterization

Xtract Universal Designer uses [runtime parameters](../../parameters/extraction-parameters/) for parameterization.\
Runtime parameters are accessible in the Query Builder. They can have one of the following **Behaviors**:

| Behaviour | Description | | --- | --- | | *Default* | Uses the value specified in Xtract Universal Designer. | | *Constant* | Enter a constant value to be used during runtime. | | *Parameterized* | Enter the name of a dynamic query parameter to use as a runtime parameter. The value of that parameter can either come from an input field, from the user or from a computed parameter using a formula. |

Note

Every runtime parameter with *Parameterized Behaviour* allows only one query parameter name as its input. If you want to use multiple inputs for a runtime parameter, you can use VS Report Designer tools to combine multiple parameters into a single *Computed Query Parameter*, see [Use Computed Query Parameters for SSRS with Xtract Universal](../../../knowledge-base/xu-ssrs-parameterizing-in-vs/).

Use VS query parameters as input for Xtract runtime parameters.

1. To create a new query parameter right-click the data set in the *Report Data* section and select **Dataset Properties**. The window "Dataset Properties" opens.
1. Switch to the tab *Parameters* and press **[Add]**.
1. Enter a *Parameter Name* and a *Parameter Value* or use the **[f(x)]** button to use formulas and/or combine multiple input values.
1. Switch to the *Query* tab and press **[Query Designer...]**. The window "Query Designer" opens.
1. Select *Parameterized* as the **Behaviour** of the runtime parameter you want to dynamize.
1. Enter the name of the new query parameter under **Value**.
1. Confirm your input with **[OK]**.

If a query parameter is NULL, that parameter is not passed at runtime and thus will be ignored.

Note

Depending on the extraction type, some runtime parameters are mandatory, e.g., most custom parameters.

1. Right-click the input field of the parameter you want to be optional and select *Parameter Properties*. The window "Report Parameter Properties" opens.
1. In the *General* tab, activate the checkbox **Allow null value**.
1. Confirm your input with **[OK]**. A checkbox **NULL** appears next to the input field.
1. If the checkbox **NULL** is activated, the parameter will be ignored at runtime.

Tip

You can also use a computed query parameter to create a value of NULL. Create a formula that returns *Nothing* as the value.

______________________________________________________________________

## Related Links

- [Microsoft Documentation: Report Design Tips](https://docs.microsoft.com/en-us/sql/reporting-services/report-design/report-design-tips-report-builder-and-ssrs?view=sql-server-ver15)
- [Microsoft Documentation: Reporting Services Tutorials (SSRS)](https://docs.microsoft.com/en-us/sql/reporting-services/reporting-services-tutorials-ssrs?view=sql-server-ver15)
- [Microsoft Documentation: Add a Query Parameter to Create a Report Parameter](https://docs.microsoft.com/en-us/sql/reporting-services/tutorial-add-a-parameter-to-your-report-report-builder?view=sql-server-ver15#Query)
- [Knowledge Base Article: Use Computed Query Parameters for SSRS with Xtract Universal](../../../knowledge-base/xu-ssrs-parameterizing-in-vs/)
- [Integration via Azure Data Factory](../../execute-and-automate/call-via-etl/#integration-via-azure-data-factory)
