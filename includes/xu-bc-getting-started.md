
### Installation

![Designer-Login](assets/images/{{ abbr }}/getting-started/Designer-login.png){:class="img-responsive" align=right width="32%"}

1. [Download](https://theobald-software.com/en/download-trial/) a 30 days trial version of {{ productName }}.
2. Run the {{ productName }} executable ({{ setup }}Setup.exe) to install the [{{ productName }} Designer and the {{ productName }} Server](documentation/introduction.md/#software-architecture).
For information on system requirements, see [Requirements](documentation/setup/requirements.md).
3. Make sure that the {{ productName }} Service is running on your windows system and that the default port {{ port }} is not blocked by your firewall.<br>
4. Open the {{ productName }} Designer application and click **[:designer-connect: Connect]** to [connect to the {{ productName }} Server](documentation/designer.md/#connect-the-designer-to-a-server) using the default settings.<br>

For more information, see [Setup](documentation/setup/index.md).

### Connect to SAP

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP Authorization Objects](documentation/setup-in-sap/sap-authority-objects.md/#general-authorization-objects).

1. In the main window of the Designer, click **[:material-plus-thick:New]**. The window "Change Source" opens.<br>
![new](assets/images/{{ abbr }}/getting-started/new.png)
2. Enter a name for the SAP connection in the field **Name**, e.g., *s4hana*, *bw*, etc.
3. In the *General* tab, enter the system details of your SAP system.
Input values for the SAP connection can be found in the *Properties* of the SAP Logon Pad or they can be requested from the SAP Basis team.<br>
![sap-source-general](assets/images/documentation/sap-connection/sap-source-general.png){:class="img-responsive" }
4. In the *Authentication* tab, enter the SAP credentials of the SAP dialog user.
5. Click **[Test designer connection]** to validate the connection between the {{ productName }} Designer and the SAP system.
6. Click **[Test server connection]** to validate the connection between the {{ productName }} Server and the SAP system.
7. Click **[OK]** to save the SAP source. 

For more information, see [SAP Connection](documentation/sap-connection/index.md).

!!! tip
	To edit a source or to create new sources, navigate to **Server > Manage Sources** in the menu bar.
	
### Create an Extraction

Extractions are the main entities of {{ productName }}. 
An extraction defines what data to extract from SAP and in which target environment to write the data.

1. In the main window of the Designer, click **[:material-plus-thick:New]**. The window "Create Extraction" opens.
2. Select an SAP Connection from the drop-down menu in **Source** :number-1:.<br>
![Create-Extraction](assets/images/{{ abbr }}/getting-started/Create-Extraction.png)
3. Enter a name for the extraction :number-2:.
4. Select one of the following extraction types :number-3::

	|  {{ Component }}  |  Description   |  
	|----------|-------------|
	| [:component-bapi: {{ bapi }}](documentation/bapi/index.md) | Execute BAPIs and Function Modules. |
	| [:component-bwcube: {{ bwcube }}](documentation/bwcube/index.md) | Extract data from SAP BW InfoCubes and BEx Queries. |
	| [:component-hierarchy: {{ hierarchy }}](documentation/hierarchy/index.md) | Extract Hierarchies from an SAP BW / BI system. |
	| [:component-deltaq: {{ deltaq }}](documentation/deltaq/index.md) | Extract data from DataSources (OLTP) and extractors from ERP and ECC systems. |
	| [:component-odp: {{ odp }}](documentation/odp/index.md) | Extract data via the SAP Operational Data Provisioning (ODP) framework. |
	| [:component-ohs: {{ ohs }}](documentation/ohs/index.md) | Extract data from InfoSpokes and OHS destinations. |
	| [:component-query: {{ query }}](documentation/query/index.md) | Extract data from ERP queries. **Note: BEx queries are covered by {{ bwcube }}**. |
	| [:component-report: {{ report }}](documentation/report/index.md) | Extract data from SAP ABAP reports. | 
	| [:component-table: {{ table }}](documentation/table/index.md) | Extract data from SAP tables and views. |
	| [:component-table-cdc: {{ tableCDC }}](documentation/table-cdc/index.md) | Extract delta data from SAP tables and views. |
	
5. Click **[OK]**. The main window of the extraction type opens automatically.<br>
Follow the instructions in the documentation of the selected {{ component }} to set up the extraction.

#### How to Create a Simple Extraction for Beginners

Follow the steps below to create a simple extraction that extracts customer master data from the SAP table KNA1:

1. [Create an extraction](#create-an-extraction) that uses the {{ table }} {{ component }}.
2. In the main window of the {{ component }}, click **[:material-plus-thick:Add]** to look up an SAP table. The window "Table Lookup" opens.<br>
![table_main-window_add](assets/images/{{ abbr }}/documentation/table/table_main-window_add.png)
3. In the field **Table Name**, enter the name of the table to extract (KNA1) :number-1:. Use wildcards (*) if needed.<br>
![table_look-up](assets/images/documentation/components/table/table_look-up.png)
4. Click **[:magnifying-glass:]** :number-2:. Search results are displayed.
5. Select the table KNA1 :number-3: and click **[OK]**. The application returns to the main window of the {{ component }}.
6. Optional: Select the table columns you want to extract. By default all columns are extracted. 
For more information on filter options and advanced settings, see, [Define the {{ table }} {{ Component }}](documentation/table/index.md/#define-the-table-extraction-type)
7. Click {{ previewBtn }} to display a live preview of the first 100 records.
8. Click **[OK]** to save the {{ component }}.

The extraction is now listed in the main window of the Designer.

!!! tip
	To edit an extraction, double-click the extraction.

### Run an Extraction

Extractions can be run directly in the {{ productName }} Designer{% if page.meta.product == "xtract-universal" %} or via [web service](web-api.md) and [command line](documentation/execute-and-automate/call-via-commandline.md){% else %} or from Board, see [Run Extractions in Board](documentation/run-extractions.md/#run-extractions-in-the-designer){% endif %}.

1. In the main window of the Designer, select an extraction :number-1: and click **[:designer-run:Run]** :number-2:. The window "Run Extraction" opens.
![Run-Extraction](assets/images/{{ abbr }}/getting-started/Run-Extraction.png)
2. Click {{ runBtn }} :number-3: to execute the extraction.{% if page.meta.product == "board-connector" %}
If the extraction runs successfully, the extracted data is displayed in your browser. {% else %}
The status in the subsection *General Info* indicates if the extraction finished successfully.
3. Open the *Output* tab to view the extracted data :number-4:. 
{% endif %}

For more information, see {% if page.meta.product == "xtract-universal" %}[Execute and Automate](documentation/execute-and-automate/index.md){% else %}[Run Extractions](documentation/run-extractions.md){% endif %}.
