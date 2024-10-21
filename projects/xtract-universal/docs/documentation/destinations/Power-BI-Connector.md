---
title: Microsoft Power BI
description: Write SAP data to a Power BI Connector destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to Power BI

The destination offers two ways to connect Power BI with Xtract Universal:
- Power BI custom connector
- Generic Power Query M-script using one of the following ways:
	- [Power BI Desktop](#power-bi-desktop)
	- [Power BI Service - Microsoft Fabric Dataflow Gen2](#power-bi-service-microsoft-fabric-dataflow-gen2)

With the Power Query M-script you can additionally directly integrate data into Dataflow Gen2 using [Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/data-factory/create-first-dataflow-gen2).

![Power-BI-Connector](../../assets/images/documentation/destinations/power-bi/PowerBI_Connector_Architecture_SSO.png){:class="img-responsive"}

## Supported Power BI Environments

Xtract Universal supports the following environments:
- [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/) via [Power BI Custom Connector](#power-bi-custom-connector)
- [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) via [Power BI on-premises data gateway](../../knowledge-base/connect-to-power-bi-service.md)
- [Power BI Report Server](https://docs.microsoft.com/en-us/power-bi/report-server/get-started) via [Power Query M-script](#power-query-m-script)


|                        | Custom Connector | M-script |
|------------------------|:-----------------:|:----------:|
| Power BI Desktop       |         :white_check_mark:        |     :white_check_mark:   |
| Power BI Service       |         :white_check_mark:       |     :white_check_mark:   |
| Power BI Report Server |         :x:        |     :white_check_mark:   |

{% include "destinations/create-destination.md" %}
To use the {{ page.meta.title }} destination, no further settings are necessary.

![Destination-Details](../../assets/images/documentation/destinations/power-bi/destination-details.png){:class="img-responsive"}

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/power-bi/destination-settings.png){:class="img-responsive"}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}


## Power BI Custom Connector

The {{ page.meta.title }} destination works in combination with a custom extension file for Power BI. 
This extension file *XtractUniversalExtension.pqx* is located in the *powerbi* folder of the Xtract Universal installation directory, e.g., `{{ installationDir }}\powerbi\`. 
The Power BI Custom Connector was developed following Microsoft's guidelines for [custom connectors in Power BI](https://docs.microsoft.com/en-US/power-bi/desktop-connector-extensibility). 

### Install the Power BI Custom Connector
Follow the steps below to install the Power BI Custom Connector.

=== "Automatic Setup"
	1. Open the *powerbi* folder located in the Xtract Univesal installation directory, e.g., `{{ installationDir }}`.
	2. Run the *install-connector* PowerShell script. <br>
	This script copies the *XtractUniversalExtension.pqx* file to the `[Documents]\Power BI Desktop\Custom Connectors` folder. 
	If the folder does not exist, the script creates the folder.
	3. Run the *trust-connector* PowerShell script. <br>
	This script modifies the registry at `HKLM:\SOFTWARE\Policies\Microsoft\Power BI Desktop\`. 
	The script adds or modifies the registry value *TrustedCertificateThumbprints* with the thumbprint of the *XtractUniversalExtension.pqx* file. 
	This procedure follows Microsoft's recommendations for [trusting third-party connectors](https://docs.microsoft.com/en-us/power-bi/desktop-trusted-third-party-connectors).

=== "Manual Setup for Power BI Desktop"

	1. Check if the directory `[Documents]\Power BI Desktop\Custom Connectors` exists.
	2. Create this directory if it doesn't exist.
	3. Open the *powerbi* folder located in the Xtract Univesal installation directory, e.g., `{{ installationDir }}\powerbi\`.
	4. Copy the *XtractUniversalExtension.pqx* file from the *powerbi* folder to `[Documents]\Power BI Desktop\Custom Connectors`.
	5. Restart Power BI.
	6. In Power BI Desktop, navigate to **File > Options and settings > Options > Security**.
	7. In the subsection [Data Extensions](https://docs.microsoft.com/en-us/power-bi/desktop-connector-extensibility#data-extension-security), activate the option **(Not Recommended) Allow any extension to load without validation or warning**. <br>
	![powerbi-data-extension](../../assets/images/documentation/destinations/power-bi/power-bi-data-extension.png){:class="img-responsive"}
	8. Click **[OK]**.
	9. Restart Power BI.

	The Xtract Universal data source is now available within Power BI.<br>
	![powerbi-datasource](../../assets/images/documentation/destinations/power-bi/XU_pbi_connector_xu_datasouce.png){:class="img-responsive"}

#### Power BI Settings

Adjust the following settings in Power BI:

1. In Power BI, navigate to **File > Options and settings > Options** to open the option menu.
2. Activate the option **(Not Recommended) Allow any extension to load without validation or warning** in the tab *Security*.<br>
![Power BI cache](../../assets/images/documentation/destinations/power-bi/XU_PBI_PBI_Security.png){:class="img-responsive"}
2. Optional: Increase the Power BI cache in the tab *Load Data* to prevent multiple calls from Power BI to Xtract Universal when extracting large data volumes.
	
	!!! note
		Multiple calls to Xtract Universal result in in multiple entries for the same extraction in the Xtract Universal extraction log.<br>

	![Power BI cache](../../assets/images/documentation/destinations/power-bi/XU_PBI_PBI_Cache.png){:class="img-responsive"}

### Connect Power BI with Xtract Universal

Follow the steps below to connect Power BI with Xtract Universal
1. In Power BI, select Xtract Universal from the *Get Data* menu.
2. Click the **[Connect]** button.
3. Enter the URL of the Xtract Universal [web server](../designer.md/#connect-the-designer-to-a-server) `<Protocol>://<HOST or IP address>:<Port>/`.<br>
![powerbi-XU_URL](../../assets/images/documentation/destinations/power-bi/XU_pbi_connector_XU_URL.png){:class="img-responsive"}

	When prompted for *Anonymous*, *Basic* or *Windows* authentication, follow the steps as outlined in [Single Sign On and SAP authentication](#single-sign-on-and-sap-authentication).<br>
	The "Navigator" window lists all extractions that are [assigned to a {{ page.meta.title }} destination](#assign-the-power-bi-connector-destination-to-an-extraction) in Xtract Universal. 
4. Select an extraction from the list. The preview data shows the actual SAP column headers and preview data (real data or dummy data, depending on the extraction type).
5. Click the **[Load]** button. This triggers an extraction in Xtract Universal and writes the extracted data to Power BI.<br>
![powerbi-navigator](../../assets/images/documentation/destinations/power-bi/XU_pbi_connector_navigator.png){:class="img-responsive"}

The data is now available for further processing.


### Tutorial

The following YouTube tutorial shows how to install the Power BI Connector and how to use Xtract Universal with Power BI:

<div class="video-wrapper">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/al1FOtJjVIM?si=EJgku3sgYMhGk1BM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parameterizing in Power BI Custom Connector 

When using the Power BI Custom Connector, Xtract Universal [custom parameters](../parameters/extraction-parameters.md/#custom) can be populated when setting up the connection in Power BI.

A list of an extraction's custom parameters is displayed under the *Custom* tab in the "Run Extraction" window. 
In the depicted example the list contains one entry *BUKRS_low*. <br>

![XU-Custom-Parameter-exposed](../../assets/images/documentation/destinations/power-bi/XU_PBI_XU_Parameters_1.png){:class="img-responsive"}

The list of Xtract Universal custom parameters is exposed in Power BI Desktop when creating a report based on the selected extraction. 
The exposed Xtract Universal parameters can be filled with values from within Power BI Desktop. <br>
![XU-Custom-Parameter-exposed](../../assets/images/documentation/destinations/power-bi/XU_PBI_XU_Parameters_2.png){:class="img-responsive"}


## Power Query M-script

Instead of the Power BI Custom Connector, you can also use the Custom Power Query M-script to connect Power BI to Xtract Universal. 
The Power BI Query M-script is located inside the Xtract Universal installation directory, e.g., `{{ installationDir }}\powerbi\loading_script.txt`.

!!! warning
	**Use of the Custom Connector & Query M-script**<br>
	Power Query M-script and Power BI Custom Connector do not belong together.<br>
	Use either the Power Query M-script **or** the Power BI Custom Connector.

### Power BI Desktop

!!! note
	Only use the extractions with the Power BI Connector destination assigned to them.

Follow the steps below to set up the Power Query M-script in Power BI to connect with Xtract Universal:

1. Create a new Power BI report using **Home > Get Data > Blank Query** as a data source.
2. Open the **[Advanced Editor]**.<br>
![Advanced Editor](../../assets/images/documentation/destinations/power-bi/pbi_advanced_editor.png){:class="img-responsive"}
3. Open the Xtract Universal *loading_script.txt* in any text editor.
4. Copy the content of *loading_script.txt* into the *Advanced Editor* in Power BI.
5. Change the values for **ExtractionName** and the **ServerURL** to match the names of your Xtract Universal extraction and [web server](../designer.md/#connect-the-designer-to-a-server) :number-1:.<br>
![PowerQueryEditor](../../assets/images/documentation/destinations/power-bi/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}
6. Within the *Advanced Editor*, click **[Done]** :number-2: to confirm the script.
7. Click **[Close & Apply]**.
8. In Power BI, navigate to **File > Options and settings > Options** to open the option menu.
9. Activate the option **(Not Recommended) Allow any extension to load without validation or warning** in the tab *Security*.<br>
![Power BI cache](../../assets/images/documentation/destinations/power-bi/XU_PBI_PBI_Security.png){:class="img-responsive"}
10. Optional: Increase the Power BI cache in the tab *Load Data* to prevent multiple calls from Power BI to Xtract Universal when extracting large data volumes.

	!!! note
		Multiple calls to Xtract Universal result in in multiple entries for the same extraction in the Xtract Universal extraction log.
		
	![Power BI cache](../../assets/images/documentation/destinations/power-bi/XU_PBI_PBI_Cache.png){:class="img-responsive"}

### Parameterizing in Power Query M-Script

1. Open the Power Query M-script.
2. Navigate to *Parameters* and replace the values with actual values or with parameters defined in Power BI.

	```
		// Record containing run parameters with corresponding values, can be empty
		// Usage: <XU parameter name>= <value or Power BI parameter>
		// MUST NOT use "name" as a record field here
		Parameters = [ /*rows= "300", myparameter= SomePowerBIParameter*/ ],
	```

=== "Replace with actual values"
	![XU-Custom-Parameter-exposed](../../assets/images/documentation/destinations/power-bi/XU_PBI_XU_Parameters_3.png){:class="img-responsive"}
=== "Replace with Power BI parameters"
	![XU-Custom-Parameter-exposed](../../assets/images/documentation/destinations/power-bi/XU_PBI_XU_Parameters_4.png){:class="img-responsive" width="37%"}
	![XU-Custom-Parameter-exposed](../../assets/images/documentation/destinations/power-bi/XU_PBI_XU_Parameters_5.png){:class="img-responsive" width="62%"}


### Power BI Service (Microsoft Fabric Dataflow Gen2)

#### Requirements
- Active [Power BI on-premises data gateway](../../knowledge-base/connect-to-power-bi-service.md)
- Power BI Destination within Xtract Universal
- Microsoft Fabric Subscription

#### Procedure
1. Navigate to **My Workspace > New > Data factoring > Dataflow Gen2**
2. Create a new Power BI report using **Home > Get Data > Blank Query** as a data source. <br> ![Blank Query](../../assets/images/documentation/destinations/power-bi/XU_pbi_blank_query.png){:class="img-responsive"}
2. Open the **[Advanced Editor]**.<br>
![Advanced Editor](../../assets/images/documentation/destinations/power-bi/pbi_advanced_editor.png){:class="img-responsive"}
3. Open the Xtract Universal *loading_script.txt* in any text editor.
4. Copy the content of *loading_script.txt* into the *Advanced Editor*. <br> ![Data Source](../../assets/images/documentation/destinations/power-bi/XU_pbi_connect_to_data_source.png){:class="img-responsive"} 
5. Select the appropriate data gateway from the dropdown-list. <br> ![Data Gateway](../../assets/images/documentation/destinations/power-bi/XU_pbi_data_gateway.png){:class="img-responsive"}
6. Click **[Next]**. <br> ![Result](../../assets/images/documentation/destinations/power-bi/XU_pbi_result.png)


## Single Sign On and SAP Authentication

When setting up the Xtract Universal data source in Power BI for the first time, you are prompted for one of the following authorization methods. Select an authorization method according to your landscape:

- *Anonymous*: Select this option if the Xtract Universal server settings don't require any authentication for running an extraction.
- *Basic*: Select this option if the *Require SAP Credentials to be explicitly supplied for execution* checkbox is marked in the [SAP Source Settings](../sap-connection/settings.md/#authentication) in Xtract Universal. Enter your SAP credentials in the respective input fields.
- *Windows*: Select this option if you want to use [SSO](../sap-connection/sso-with-logon-ticket.md) or if you have restricted access to extractions in the Xtract Universal server settings. Enter \<domain>\\\<Windows AD user> in the *user* field and your Windows password in the *Password* field.

Xtract Universal and the Power BI Connector destination support single sign on (SSO) to SAP. 
If SSO is set up correctly, the Windows credentials of the executing Power BI user are mapped to this user's SAP credentials. 
This leverages the user's SAP authorizations and Power BI will only show data that matches the user's SAP authorizations.

![XU_PBI_EN_SSO](../../assets/images/documentation/destinations/power-bi/XU_PBI_EN_SSO.png){:class="img-responsive"}

****

## Related Links
- [Connect Xtract Universal to Power BI Service](../../knowledge-base/connect-to-power-bi-service.md)
- [Microsoft Documentation: What is an on-premises data gateway?](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem)
- [Microsoft Documentation: Use custom data connectors with the on-premises data gateway](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-custom-connectors)
- [Microsoft Documentation: Configure scheduled refresh](https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh)
- [Microsoft Documentation: Parameters in Power BI Desktop](https://docs.microsoft.com/en-us/power-query/power-query-query-parameters)
- [Microsoft Fabric - Creating Dataflows](https://learn.microsoft.com/en-us/fabric/data-factory/create-first-dataflow-gen2)