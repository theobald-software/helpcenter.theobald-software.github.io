This section shows how to install and set up Xtract for Alteryx for the first time.

### Installation

1. [Download](https://theobald-software.com/en/download-trial/) a 30 day trial version of Xtract for Alteryx or download the latest version from the [customer portal](https://my.theobald-software.com/).

1. Close the Alteryx Designer.

1. Run the Xtract for Alteryx executable (XtractForAlteryxSetup.exe) to install Xtract for Alteryx.\
   For information on system requirements, see [Requirements](../documentation/setup/requirements/).

   Note

   During the setup you need to specify the installation directory for Xtract for Alteryx and also the installation directory of Alteryx. If you have multiple instances of Alteryx installed, choose the instance on which you want to use Xtract for Alteryx.

1. Open the Alteryx Designer. The Xtract for Alteryx components are available in the Xtract For Alteryx toolbox.

For more information, see [Setup](../documentation/setup/).

### Connect to SAP

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP user rights](../documentation/setup-in-sap/sap-authority-objects/#general-authorization-objects).

Note

Xtract for Alteryx can connect to SAP using the [Data Connection Manager (DCM)](https://help.alteryx.com/current/en/designer/tools/dcm---designer.html) of Alteryx or the Xtract for Alteryx GUI. If your version of Alteryx does not support the DCM, refer to the [Knowledge Base Article: Create an SAP Connection using the Xtract for Alteryx GUI](../knowledge-base/sap-connection-using-xfa-gui/).

1. In the main menu of the Alteryx Designer navigate to **File > Manage Connections**. The window "Connection Manager" opens.
1. In the tab *Data Sources* click **[New]** to create a new data source.
1. Select the Xtract technology to create an Xtract data source.
1. Enter the system details of your SAP system. Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.
1. Click **[Save]** to save the SAP connection. The subsection *Connection* opens.
1. In the subsection *Connection*, select an authentication methods and link or create and link the credential of your SAP system or dialog user to the data source.

For more information, see [SAP Connection](../documentation/sap-connection/).

### Use Xtract Components in Workflows

Follow the steps below to add an Xtract component to your workflow:

1. Drag & drop an Xtract component from the Xtract for Alteryx toolbox into the workflow .
1. Assign an existing SAP connection .
1. Click **[Edit]** to open the main window of the component. The majority of the functions of the component can be accessed in the main window.

Xtract for Alteryx offers the following components:

| Component | Description | | --- | --- | | [Xtract BAPI](../documentation/bapi/) | Execute BAPIs and Function Modules. | | [Xtract Cube](../documentation/bwcube/) | Extract data from SAP BW InfoCubes and BEx Queries. | | [Xtract Hierarchy](../documentation/hierarchy/) | Extract Hierarchies from an SAP BW / BI system. | | [Xtract ODP](../documentation/odp/) | Extract data via the SAP Operational Data Provisioning (ODP) framework. | | [Xtract ODP (OData)](../documentation/odp-odata/) | Extract ODP-based data using OData services. | | [Xtract Query](../documentation/query/) | Extract data from ERP queries. **Note: BEx queries are covered by the Xtract Cube component**. | | [Xtract Report](../documentation/report/) | Extract data from SAP ABAP reports. | | [Xtract Table](../documentation/table/) | Extract data from SAP tables and views. |

#### A Simple SAP Data Extraction for Beginners

Follow the steps below to extract customer master data from the SAP table KNA1:

1. Drag & drop the Xtract Table component into the workflow.
1. Assign an existing SAP connection and click **[Edit]** to open the main window of the component.
1. Click **[Add]** to look up an SAP table. The window “Table Lookup” opens.
1. In the field **Table Name**, enter the name of the table to extract (KNA1). Use wildcards (\*) if needed.
1. Click **[]**. Search results are displayed.
1. Select the table KNA1 and click **[OK]**. The application returns to the main window of the component.
1. Optional: Select the table columns you want to extract. By default all columns are extracted. For more information on filter options and advanced settings, see, [Define the Xtract Table Component](../documentation/table/#define-the-xtract-table-component).
1. Click **[Load live preview]** to display a live preview of the first 100 records.
1. Click **[OK]** to save the component.

You can now add tools to process the data returned by Xtract Table and run the workflow.
