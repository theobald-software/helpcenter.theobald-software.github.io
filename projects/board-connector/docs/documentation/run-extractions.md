---
title: Run Extractions
description: How to run extractions
---

This page shows how to run extractions directly in the Designer and in Board. <br>
Extractions are triggered by an HTTP request and executed on the [Board Connector Server](server/index.md).

The configuration of [source](../sap-connection.md/#connect-to-sap), destination and [{{ component }}](../introduction.md/#extraction-types) defines how the data transfer is performed.
This configuration can contain dynamic elements, like [extraction parameters](parameters/extraction-parameters.md) and [script expressions](parameters/script-expressions.md).

### Run Extractions in the Designer

The {{ productName }} Designer offers a test run option for extractions to make sure that the extraction runs properly. 
You can define runtime parameters and other options to run an extraction directly in your web browser.

1. Select an extraction from the [list of extractions](site:documentation/designer/#list-of-extractions) and click **[:designer-run:Run]** :number-1:. The window "Run Extraction" opens.<br>
![Extraction-Run](../../assets/images/{{ abbr }}/documentation/automation/Run-Table-Extraction-Plants.png){:class="img-responsive"}
2. If needed, define [extraction parameters](../parameters/extraction-parameters.md):
	- Select the checkbox of the parameter you want to override :number-2:. The parameter is added to the extraction URL. :number-3:
	- Enter a value for the parameter.
3. Click **[Run in Browser]** to display the extraction results in your browser. <br>
![Table-Extraction-Browser-Result](../../assets/images/{{ abbr }}/documentation/automation/run_output_browser.png){:class="img-responsive"}

Extractions are triggered by an HTTP request and executed on the {{ productName }} server.


### Run Extractions in Board

Extractions can be loaded in Board using the [Data Reader](https://www.boardmanual.com/board14/data-modeling/data-model-design-sections/data-reader/basic-concepts-data-reader.htm). <br>
The depicted example uses an extraction "Plants" that extracts data from the SAP table *T001W*. 

1. In Board, select **[+ DATA READER]**  to create a new Data Reader. Enter a name and a group . Select the source type **SAP**. <br>
![Load-Extraction-01](../../assets/images/bc/documentation/automation/Load-Extraction-01.png)
2. Create a new connection to the Board Connector Server or select an existing connection. Set a *name* and the *URL* of the Board Connector Server, e.g., localhost:8197.<br>
3. Click the "Connect" icon to pull a list of extractions from Board Connector.
4. Select an extraction (here: T001W)  from the EXTRACTOR box on the right hand-side. The extraction's metadata (field names, data types) is listed in the window below.
![Load-Extraction-02](../../assets/images/bc/documentation/automation/Load-Extraction-02.png)
5. **Optionally:** Specify URL parameter(s) to add to the connection string. 
In the depicted scenario a WHERE-clause is specified, restricting the extraction to purchasing organization (EKORG) '1000'. 
For more information about URL parameters, see [Dynamic Connection Parameters](extraction-parameters.md).
6. Click **[Browse Table]** to get a preview of the extracted SAP data. The preview displays real or dummy data depending on the {{ component }}.<br>
![Load-Extraction-03](../../assets/images/bc/documentation/automation/Load-Extraction-03.png)
7. Click **[MAPPING]** to proceed to mapping the fields of the extraction with existing Board entities. 
8. Select the corresponding fields for mapping (e.g., WERKS, NAME1, etc.).
![Load-Extraction-04](../../assets/images/bc/documentation/automation/Load-Extraction-04.png)
9. In the column **Position**, map each field of the entity to an SAP field. Select the correct mode for *Insert* or *Update*. In the depicted example, the mode "ADD NEW ITEM" is selected for all fields.
10. Click **[Browse Query]** and **[OK]**.
![Load-Extraction-05](../../assets/images/bc/documentation/automation/Load-Extraction-05.png)
11. Execute the Data Reader to extract the SAP data. <br>
![Load-Extraction-06](../../assets/images/bc/documentation/automation/Load-Extraction-06.png)

After executing the Data Reader, the Board protocol shows how many rows are loaded. <br>

!!! note 
	When using Board SaaS with Board Connector, a recent software change requires users to update Board and to change the connection URL of the Data Reader.
	Set the connection URL of the Board Data Reader from TCP to an HTTP connection (port 8097) or an HTTPS (port 8197) connection.
	For more information, see [Board Release Notes Summer 2023](https://www.boardmanual.com/2021/summer/whats-new-release-notes/2023-summer-release/other-enhancements.htm?rhsearch=sap%20connector&rhhlterm=sap%20connector)
