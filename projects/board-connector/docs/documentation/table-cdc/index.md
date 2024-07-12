---
title: Table CDC
icon: component/table-cdc
description: Information about the extraction type Table
---

{% include "components/table-cdc/about.md"  %}

{% include "components/table/auth-warning.md"  %}

{% include "components/xu-bc-new.md"  %}

{% include "components/table-cdc/define-table-cdc.md"  %}


### Run the Extraction for the First Time

Run the extraction for the first time to create a log table in SAP that records any changes made to a selected table or view.

1. Select the extraction in the main window of the Designer.
2. Click **[:designer-run:Run]**. The window “Run Extraction” opens.
3. Click **[Run in Browser]** to run the extraction.

The log table in SAP is now available for the Table CDC component.
The extracted SAP table is now available in your destination.

<!---
Depending on whether the option **[Extract table on first run]** in the Table CDC component was activated or not, the table contains either the original SAP table or is empty.
-->

{% include "components/table-cdc/delete-log-tables.md"  %}
