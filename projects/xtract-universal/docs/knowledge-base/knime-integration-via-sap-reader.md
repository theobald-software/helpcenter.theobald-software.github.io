---
title: KNIME Integration via SAP Reader (Theobald Software)
description: KNIME Integration via SAP Reader (Theobald Software)
---

The following article describes the integration of {{ productName }} into the BI tool KNIME via SAP Reader (Theobald Software).

### Requirements
The following software applications must be installed for integration into KNIME:
- Latest version of {{ productName }}, obtained from the [Theobald Software website](https://theobald-software.com/en/download-trial)
- Latest version of the [KNIME Analytics Platform](https://www.knime.com/downloads)

### Step by step guide

!!! note
    Basic knowledge of creating extraction in {{ productName }} is necessary for the following integration scenario, see [Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).

1. Create an extraction in {{ productName }} and make sure that the [Web Service - HTTP-CSV](https://help.theobald-software.com/en/xtract-universal/destinations/csv-via-http) :number-1: Destination is selected for the extraction.
![XU Extraction Webservice HTTP](../assets/images/xu/articles/xu_extraction_webservice_http.png){:class="img-responsive"}
2. Start the KNIME Analytics Platform. 
3. Install the extension [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.SAPTheobaldReaderNodeFactory).
![Install KNIME Extension](../assets/images/xu/articles/install_sap_reader.png){:class="img-responsive"}
4. Drag & Drop the Node / Source 'SAP Reader (Theobald Software)' :number-2: onto the KNIME Canvas.
![KNIME Extension](../assets/images/xu/articles/sap_reader_knime_extension.png){:class="img-responsive"}
5. Open the SAP Reader Task 'Settings' and enter the URL address of the {{ productName }} Server, e.g. `http://localhost:8065/` :number-3:.
![SAP Reader Settings](../assets/images/xu/articles/sap_reader_settings.png){:class="img-responsive"}
6. Click on **[Fetch Queries]** :number-4: and select the desired extraction.
7. Confirm the entry by clicking **[OK]** :number-5:.
8. Start the extraction via **[Execute]**. 
![Execute SAP Reader](../assets/images/xu/articles/execute_sap_reader.png){:class="img-responsive"}
9. Check the extracted SAP data via **[SAP Query Result]**.
![SAP Reader Results](../assets/images/xu/articles/sap_query_results.png){:class="img-responsive"}


****
#### Related Links
- [{{ productName }} Web Server Settings](https://help.theobald-software.com/en/xtract-universal/server/server-settings#web-server)
- [{{ productName }} Web Server Port](https://help.theobald-software.com/en/xtract-universal/server/ports)
- [Connecting {{ productName }} Server](https://help.theobald-software.com/en/xtract-universal/getting-started/connect-designer-with-server#connecting-to-a-server)
- [Webinar "SAP Data to Insights with KNIME"](https://www.youtube.com/watch?v=KQLLoDUoOEg)
- [Dynamic Runtime Parameter within KNIME Workflow](https://kb.theobald-software.com/xtract-universal/dynamic-runtime-paramater%20within-KNIME-workflow)

