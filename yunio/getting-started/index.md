This section shows how to install and set up yunIO for the first time.

### Installation

1. [Download](https://theobald-software.com/en/download-trial/) a 30 days trial version of yunIO or download the latest version from the [customer portal](https://my.theobald-software.com/).
1. Run the yunIO executable (yunIOSetup.exe) to install yunIO. For information on system requirements, see [Requirements](../documentation/setup/requirements/).
1. Make sure that the YunIO Service is running on your windows system and that the default port 8077 is not blocked by your firewall.
1. Open the yunIO Designer at `http://localhost:8077/` in a [web browser](../documentation/setup/requirements/#supported-web-browsers) of your choice.\
   If the yunIO service does not run on the same machine as the browser, replace `localhost` with the name or IP address of the host on which the service runs.

For more information, see [Documentation: Installation](../documentation/setup/installation-and-update/).

### Connect to SAP

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP user rights](../documentation/setup-in-sap/sap-authority-objects/#general-authorization-objects).

1. Navigate to the *Connections* menu at the left side navigation area of the Designer.
1. Click **[Add Connection]** to create a new SAP connection.
1. Enter the system details of your SAP system in the subsection *System*.
1. Enter the SAP credentials of the SAP dialog user in the subsection *Authentication*.
1. Click **[Test Connection]** to validate the connection parameters. A window with a status message opens.
1. Click **[Save]** to save the connection settings.

For more information, see [Documentation: SAP Connection](../documentation/sap-connection/).

### Create a Service

Follow the steps below to create a new web service:

1. Navigate to the *Services* menu at the left side navigation are of the Designer.

1. Click **[Add Service]** to create a new web service.

1. Enter a name and a short description of the service.

1. Select an existing SAP connection under **Connection**.

1. Select one of the following integration types under **Type**:

   | Integration Type | Description | | --- | --- | | [*Function module / BAPI*](../documentation/function-modules-and-bapis/) | Execute BAPIs and Function Modules. | | [*SAP Table and View*](../documentation/tables-and-views/) | Extract data from SAP tables and views. | | [*Transaction*](../documentation/transactions/) | Execute SAP transactions without SAP GUI interaction. | | [*Report*](../documentation/reports/) | Extract data from SAP ABAP reports. |

1. Click **[Save and edit]**. The settings of the selected integration type open and the service is now available in the *Services* menu of yunIO.

To edit the name, description and source of an existing service click .\
To edit the integration type settings of the service click .

#### A Simple Service for Beginners

Follow the steps below to extract customer master data from SAP:

1. [Create a service](#create-a-service) that uses the integration type *SAP Table and View*.
1. In the **Search SAP tables and views** menu, enter the name of the SAP standard table KNA1. Use wildcards ( * ) if needed.
1. Click **[Search]** to display the tables found in the SAP system.
1. Select KNA1 from the search results. The settings of the integration type *SAP Table and View* open automatically.
1. Optional: Select the table columns you want to extract. By default all columns are extracted. For more information on filter options and advanced settings, see [Documentation: Create a Table Service](../documentation/tables-and-views/).
1. Click **[Save]** to save the service.

### Run Services

Follow the steps below to run services in your browser:

1. Navigate to the *Services* menu at the left side navigation area of the Designer.
1. Click under *Service* to copy the service URL of a service.
1. Open a new tab in your browser and paste the service URL in the address bar.
1. Press **Enter** to trigger a service run. The response body of the service is displayed in the browser.

Note

This approach only works with simple services that do not use input parameters.

Follow the steps below to run services directly in yunIO:

1. Navigate to the *Services* menu at the left side navigation area of the Designer.
1. Click to open the *Run Service* menu of a service.
1. If no parameters are defined, click **[Run]** to execute the service. The response body of the service is displayed under *Output Parameters (Response)*.
1. Click **[Close]** to close the *Run Service* menu.

For more information about running services and passing parameters, see [Documentation: Run Services](../documentation/run-services/).

### Integrate Services in 3rd-Party-Tools

Web services created with yunIO can be integrated into all cloud applications that support REST API/Swagger (OpenAPI), e.g. Power Automate, Nintex, etc.

1. Navigate to the *Services* menu at the left side navigation area of the Designer.
1. Click to copy or to download the service definition for integration with 3rd-party-tools.

The [knowledge base](/yunio/knowledge-base/) contains articles about multiple integration scenarios, including the following:
