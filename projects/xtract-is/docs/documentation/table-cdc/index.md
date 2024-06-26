---
title: Table CDC
icon: component/table-cdc
description: Information about the extraction type Table
---

{% include "components/table-cdc/about.md"  %}

{% include "components/table/auth-warning.md"  %}

{% include "components/xis-new.md"  %}

{% include "components/table-cdc/define-table-cdc.md"  %}


### Run the Extraction for the First Time

Run the extraction for the first time to create a log table in SAP that records any changes made to a selected table or view.

- If the option **[Extract table on first run]** in the {{ tableCDC }} {{ component }} is active, the extracted table contains the original SAP table.
- If the option **[Extract table on first run]** in the {{ tableCDC }} {{ component }} is not active, the extracted table is empty.

The log table in SAP is now available for the Table CDC component.
The extracted SAP table is now available in your destination.

<!---
Depending on whether the option **[Extract table on first run]** in the Table CDC component was activated or not, the table contains either the original SAP table or is empty.
-->

{% include "components/table-cdc/delete-log-tables.md"  %}
