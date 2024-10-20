---
title: KNIME
description: Write SAP data to a KNIME destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to [KNIME](https://www.knime.com/). 

{% include "destinations/create-destination.md" %}
To use the KNIME destination, no further settings are necessary.

![Destination-Details](../../assets/images/documentation/destinations/knime/destination-details.png){:class="img-responsive"}

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/knime/destination-settings.png){:class="img-responsive"}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}


## KNIME Integration via SAP Reader

### Requirements
The following software applications must be installed for integration into KNIME:
- Latest version of Xtract Universal, see [Download Trial Version](https://theobald-software.com/en/download-trial)
- Latest version of the [KNIME Analytics Platform](https://www.knime.com/downloads)

### Step by Step Guide

1. Create an extraction in Xtract Universal. Select KNIME as the destination for the extraction :number-1:.<br>
![XU Extraction](../../assets/images/documentation/destinations/knime/xu_extraction.png){:class="img-responsive"}
2. Start the *KNIME Analytics Platform*. 
3. Install the extension [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory).<br>
![Install KNIME Extension](../../assets/images/documentation/destinations/knime/install_sap_reader.png){:class="img-responsive"}
4. Drag & Drop the Node / Source 'SAP Reader (Theobald Software)' :number-2: onto the KNIME Canvas.<br>
![KNIME Extension](../../assets/images/documentation/destinations/knime/sap_reader_knime_extension.png){:class="img-responsive"}
5. Open the SAP Reader Task 'Settings' and enter the URL address of the Xtract Universal Server, e.g. `http://localhost:8065/` :number-3:.<br>
![SAP Reader Settings](../../assets/images/documentation/destinations/knime/sap_reader_settings.png){:class="img-responsive"}
6. Click **[Fetch Queries]** :number-4: and select an extraction.
7. Confirm your input with **[OK]** :number-5:.
8. Start the extraction via **[Execute]**. <br>
![Execute SAP Reader](../../assets/images/documentation/destinations/knime/execute_sap_reader.png){:class="img-responsive"}
9. Check the extracted SAP data via **[SAP Query Result]**.<br>
![SAP Reader Results](../../assets/images/documentation/destinations/knime/sap_query_results.png){:class="img-responsive"}

****

## Related Links
- [KNIME SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory)
- [Youtube-Video: Webinar "SAP Data to Insights with KNIME"](https://www.youtube.com/watch?v=KQLLoDUoOEg)
- [Knowledge Base Article: Dynamic Runtime Parameter within KNIME Workflow](../../knowledge-base/dynamic-runtime-paramater-within-KNIME-workflow.md)

