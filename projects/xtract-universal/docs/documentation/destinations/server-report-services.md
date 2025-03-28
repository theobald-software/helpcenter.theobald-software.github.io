---
title: Microsoft Power BI Report Server
description: Write SAP data to a Power BI Report Server (SQL Server Reporting Services) destination
tags:
  - SQL Server Reporting Services
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data in Power BI Report Server (SSRS).

## Requirements

The Power BI Report Server destination requires the following components:

- Visual Studio 2017 or higher
- the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio) plugin (version 2.6.11 or higher) for Visual Studio.
- Power BI Report Server (January 2020 or later)
- Xtract Universal (version 4.29 or higher)
- To use [Transport Layer Security](../access-restrictions/restrict-server-access.md/#activate-tls-encryption), it is necessary to modify the Registry of the machine that runs the SSRS server according to the [Microsoft Documentation: Configure Strong cryptography](https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client#configure-for-strong-cryptography).

!!! note
	The Power BI Report Builder is not supported.


## Installation

To use the Power BI Report Server destination, install the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio) plugin in Visual Studio. 
After the installation is complete, close Visual Studio.

Microsoft Power BI Report Server (SQL Server Reporting Services) supports a wide variety of data sources out of the box.
To add Xtract Universal to the list of data sources, install the [Xtract Universal Report Server Plugin](#installation-of-the-xtract-universal-report-server-plugin) for Visual Studio **and** the Report Server.
The plugin must be installed on both environments to consume the data extracted by Xtract Universal, see graphic below:

![XU-Setup](../../assets/images/documentation/destinations/ssrs/XUDataExtensionInstallation.png){:class="img-responsive" width="600px" }

To complete the installation close all Visual Studio windows.
 
!!! note
	Make sure to install the latest version of the *Microsoft Reporting Services Projects* plugin and Xtract Universal.  

### Installation of the Xtract Universal Report Server Plugin

The Xtract Universal Report Server Plugin can be installed as part of the [Xtract Universal Setup](../setup/installation.md).<br>
To install the Xtract Universal Report Server Plugin on multiple environments without installing the Xtract Universal Designer, follow the steps below:


1. Make sure the *Microsoft Reporting Services Projects* plugin for Visual Studio is installed and active. 
2. Close Visual Studio.
3. [Install Xtract Universal](../setup/installation.md) on the environment on which the license runs.
4. Download the [XtractUniversalReportServerPluginSetup.exe](../../assets/files/xu/XtractUniversalReportServerPluginSetup.exe).
5. Run the *XtractUniversalReportServerPluginSetup.exe* on any environment that uses Visual Studio to design reports or where the Report Server runs.
This installs the Xtract Universal Report Server Plugin on all compatible versions of Visual Studio and/or Report Server found on the environment.<br>
![XU-Setup](../../assets/images/documentation/destinations/ssrs/XtractUniversalReportServerPluginSetup.png){:class="img-responsive"}
6. After the installation on the Report Server is complete, restart the Report Server for the changes to take effect. 
You can restart the server in the Report Server Configuration Manager by clicking **[stop]** and then **[start]**.

!!! note
	If the *Reporting Services Projects* plugin for Visual Studio is updated, the Xtract Universal Report Server Plugin is not available anymore. 
	The Report Server Plugin must be reinstalled.

After installation of Xtract Universal Report Server Plugin the following entries and extensions are available in the Visual Studio installation directory `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\`:

- XUDataExtension2020.05.dll
- Theobald.Common.dll
- Theobald.Distillery.Common.dll
- Theobald.Net.dll
- RSReportDesigner.config



{% include "destinations/create-destination.md" %}
To use the {{ page.meta.title }} destination, no further settings are necessary.

![Destination-Details](../../assets/images/documentation/destinations/ssrs/destination-details.png){:class="img-responsive"}

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/ssrs/destination-settings.png){:class="img-responsive"}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}


## SSRS in Visual Studio

The following section contains step-by-step instructions on how to access SAP data in the SSRS environment via Xtract Universal.

#### Prerequisites in Xtract Universal

To make SAP data available in the SSRS environment, [create an extraction](../../getting-started.md/#create-an-extraction) in the Xtract Universal Designer.
Make sure the {{ page.meta.title }} destination is [assigned](#assign-the-microsoft-power-bi-report-server-destination-to-an-extraction) to the extraction.


### Add an Extraction as a Data Source in Visual Studio

Follow the steps below to create an Xtract Universal data source in Visual Studio: 

1. Create a new "Report Server Project" in Visual Studio.<br>
![New-Project](../../assets/images/documentation/destinations/ssrs/New-Project.png){:class="img-responsive"}
2. Right-click the *Shared Data Sources* folder in the *Solution Explorer* and select **Add New Data Source**. The window "Shared Data Source Properties" opens.
3. In the tab *General*, assign a name for the new data source :number-1:.<br>
![Shared-Data-Source-Properties](../../assets/images/documentation/destinations/ssrs/Shared-Data-Source-Properties.png){:class="img-responsive"}
4. Select the type *Xtract Universal* from the drop-down list :number-2:. <br>If *Xtract Universal* is not available or displayed in all caps, make sure that the latest Xtract Universal version and *Microsoft Reporting Services Projects* plugin are both installed.
5. Enter a *connection string* :number-3: to the [Xtract Universal Web Server](../designer.md/#connect-the-designer-to-a-server) in the format `Url=http://[host]:[port]/` e.g, `Url=http://localhost:8065/`. Note that the *connection string* is case sensitive.
6. Optional (only required if [access restriction to the Xtract Universal web server](../access-restrictions/restrict-server-access.md) is configured or if the SAP source requires SAP credentials): 
Switch to the *Credentials* tab :number-4: and enter your [username and password](../access-restrictions/user-management.md) for Xtract Universal.
7. Confirm your input with **[OK]**.

If Xtract Universal is not available in the drop-down list :number-2: even though the *Microsoft Reporting Services Projects* plugin (version 2.6.11 or higher) and the latest version of Xtract Universal are both installed, send the log file located in `{{ installationDir }}\ssrs\log.txt` to [Theobald Support](https://support.theobald-software.com).

!!! tip
	The *connection string* is part of the URL string displayed in the ["Run Extraction" window](../execute-and-automate/run-an-extraction.md/#run-extractions-in-the-designer) of the Designer. 
	Copy the URL string up to '?' and paste it as the *connection string* into Visual Studio.

!!! note
	When **https Restricted...** or **https Unrestricted** is activated in the [XU web server settings](../access-restrictions/restrict-server-access.md/#activate-tls-encryption), make sure to modify the Registry of the machine that runs the SSRS server according to the [Microsoft Documentation: Configure Strong cryptography](https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client#configure-for-strong-cryptography).

### Create a Report using an Xtract Universal Data Source

The following steps guide you through the creation of a Report in Visual Studio using an Xtract Universal data source: 

1. [Add a Power BI Report Server extraction as a data source in Visual Studio](#add-an-extraction-as-a-data-source-in-visual-studio).
2. Right-click the *Reports* folder in the *Solution Explorer* and select **Add New Report**. The "Report Wizard" opens.
3. In the wizard, select a data source and click **[Next]**.
4. Click **[Query Builder...]**. The window "Query Designer" opens.
5. Select an Xtract Universal extraction from the drop-down menu :number-5:. <br>

	!!! note
		If no extractions are available, make sure the *connection string* :number-3: in the data source is correct and an extraction with an *SQL Server Reporting Server* destination exists in Xtract Universal.

	If you don't see the editor shown below, click **Edit as Text**.<br>
	![Query-Designer](../../assets/images/documentation/destinations/ssrs/Query-Designer.png){:class="img-responsive"}
6. Optional: Change [runtime parameters](../parameters/extraction-parameters.md) of the extraction :number-6:. Parameter changes are visible in the Query string :number-7:.
Invalid input is marked with a red circle that displays an error message when hovering over it.
7. Click **[Preview]** :number-8: to run the extraction in preview mode.
8. Confirm your input with **[OK]**. The Query Builder closes. 
9. Make sure the Query string from the Query Builder is displayed in the Report Wizard before clicking **[Next]**.<br>
![Report-Wizard](../../assets/images/documentation/destinations/ssrs/Report-Wizard.png){:class="img-responsive"}
10. Complete the Report Wizard according to your preferences.

After creating the report, you can access the Query Builder by right-clicking the *Dataset* in *Report Data* and selecting **Query...**.

!!! tip
	Passing the (Windows) user that runs a report on the report server or in Visual Studio is supported. For this, you need to set up the [web server authentication](../server/server-settings.md#web-server) in Xtract Universal. 
	Single Sign On in SAP is also supported, see [Single Sign On](../sap-connection/index.md/#single-sign-on-sso).

### Parameterization

Xtract Universal Designer uses [runtime parameters](../parameters/extraction-parameters.md) for parameterization.<br>
Runtime parameters are accessible in the Query Builder. They can have one of the following **Behaviors**: <br>

| Behaviour | Description |
|--------------|----------|
| *Default* | Uses the value specified in Xtract Universal Designer. |
| *Constant* | Enter a constant value to be used during runtime. |
| *Parameterized* | Enter the name of a dynamic query parameter to use as a runtime parameter. The value of that parameter can either come from an input field, from the user or from a computed parameter using a formula. |

!!! note
	Every runtime parameter with *Parameterized Behaviour* allows only one query parameter name as its input. 
	If you want to use multiple inputs for a runtime parameter, you can use VS Report Designer tools to combine multiple parameters into a single *Computed Query Parameter*, see [Use Computed Query Parameters for SSRS with Xtract Universal](../../knowledge-base/xu-ssrs-parameterizing-in-vs.md). 


=== "Set dynamic Runtime Parameters"

	Use VS query parameters as input for Xtract runtime parameters.

	1. To create a new query parameter right-click the data set in the *Report Data* section and select **Dataset Properties**. The window "Dataset Properties" opens.
	2. Switch to the tab *Parameters* and press **[Add]**.<br>
	![Query-Parameter](../../assets/images/documentation/destinations/ssrs/query-parameters.png){:class="img-responsive"}
	3. Enter a *Parameter Name* and a *Parameter Value* or use the **[f(x)]** button to use formulas and/or combine multiple input values.
	4. Switch to the *Query* tab and press **[Query Designer...]**. The window "Query Designer" opens.<br>
	![Query-Designer](../../assets/images/documentation/destinations/ssrs/QueryDesigner.png){:class="img-responsive"}
	5. Select *Parameterized* as the **Behaviour** of the runtime parameter you want to dynamize.
	6. Enter the name of the new query parameter under **Value**.
	7. Confirm your input with **[OK]**.

=== "Make Parameters optional"

	If a query parameter is NULL, that parameter is not passed at runtime and thus will be ignored.

	!!! note
		Depending on the {{ component }}, some runtime parameters are mandatory, e.g., most custom parameters.

	1. Right-click the input field of the parameter you want to be optional and select *Parameter Properties*. The window "Report Parameter Properties" opens.<br>
	![Input-Field](../../assets/images/documentation/destinations/ssrs/optional-params.png){:class="img-responsive"}
	2. In the *General* tab, activate the checkbox **Allow null value**.
	3. Confirm your input with **[OK]**. A checkbox **NULL** appears next to the input field.
	4. If the checkbox **NULL** is activated, the parameter will be ignored at runtime.

	!!! tip
		You can also use a computed query parameter to create a value of NULL. Create a formula that returns *Nothing* as the value.

****

## Related Links
- [Microsoft Documentation: Report Design Tips](https://docs.microsoft.com/en-us/sql/reporting-services/report-design/report-design-tips-report-builder-and-ssrs?view=sql-server-ver15)
- [Microsoft Documentation: Reporting Services Tutorials (SSRS)](https://docs.microsoft.com/en-us/sql/reporting-services/reporting-services-tutorials-ssrs?view=sql-server-ver15)
- [Microsoft Documentation: Add a Query Parameter to Create a Report Parameter](https://docs.microsoft.com/en-us/sql/reporting-services/tutorial-add-a-parameter-to-your-report-report-builder?view=sql-server-ver15#Query)
- [Knowledge Base Article: Use Computed Query Parameters for SSRS with Xtract Universal](../../knowledge-base/xu-ssrs-parameterizing-in-vs.md)
- [Integration via Azure Data Factory](../execute-and-automate/call-via-etl.md/#integration-via-azure-data-factory)