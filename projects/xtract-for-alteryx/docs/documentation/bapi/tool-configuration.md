---
title: Tool Configuration
description: An overview and description of the settings in the configuration menu of the Xtract BAPI component
---

{% include "components/xfa-configuration.md"  %}

### Output Mappings

The section *Output Mappings* of the configuration menu displays which [output tables](input-and-output.md/#add-tables-to-output) correspond to which [output anchor](index.md/#input-and-output-anchors) of the component.
The Xtract BAPI component has 5 output anchors for tables that are numbered from 1 to 5.
The number of tables that can be added to the output is therefore limited to 5 tables.

!!! tip
	When an output anchor is connected to an Alteryx tool, you can switch output anchors by right-clicking the connecting line between the tools and selecting **Switch Origin to...**.

![output-table-mapping](../../assets/images/xfa/documentation/{{ page.meta.componentFolder }}/output-table-mapping.png){:class="img-responsive" style="border:1px solid black"} 


### Transaction Commit
Some SAP Function Modules require calling the function module BAPI_TRANSACTION_COMMIT to successfully update data in the database, e.g., BAI_PO_CREATE. 
To automatically call BAPI_TRANSACTION_COMMIT after the selected Function Module / BAPI is processed, activate the option **Commit work in SAP after execution** in the configuration menu of the {{ bapi }} {{ component }}.

![import-parameters](../../assets/images/{{ abbr }}/documentation/bapi/xtract-bapi-commit-transaction.png){:class="img-responsive"}
