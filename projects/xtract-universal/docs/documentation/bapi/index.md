---
title: BAPI
icon: component/bapi
description: Information about the extraction type Function Module / BAPI
---

This page shows how to use the {{ bapi }} {{ component }}.<br>
The {{ bapi }} {{ component }} can be used to parameterize and execute SAP function modules and BAPIs for automation.

{% include "/components/bapis-and-function-modules/about-bapis.md" %}

{% include "components/bapis-and-function-modules/prerequisites.md" %}

{% include "/components/bapis-and-function-modules/auth-warning.md" %}

{% include "components/xu-bc-new.md"  %}

### Look up a Function Module / BAPI

1. In the main window of the {{ component }}, click **[:magnifying-glass:]** to look up a function module or BAPI. 
The window "Function Module Lookup" opens.<br>
![table_main-window_add](../../assets/images/{{ abbr }}/documentation/table/table_main-window_add.png){:class="img-responsive"}
2. In the window "Function Module Lookup" enter the name of the function module or BAPI :number-1:. Use wildcards (*) if needed.<br>
![Look-Up-BAPIs](../../assets/images/documentation/components/table/table_look-up.png){:class="img-responsive"}
3. Click **[:magnifying-glass:]** :number-2:. Search results are displayed.
4. Select a function module or BAPI :number-3: and click **[OK]**. <br>

The application now returns to the main window of the {{ component }}.

### Define the {{ bapi }} {{ Component }}

The {{ bapi }} {{ component }} offers the following options for defining parameters of a function module or BAPI:

1. Add input parameters (data you want to send to SAP) in **Imports**, see [Import Parameters](parameters.md/#import-parameters).<br>
You can enter scalar values :number-1: or structures :number-2:.<br>
![import-parameters](../../assets/images/documentation/components/bapi/import-parameters.png){:class="img-responsive"}
2. Add output parameters (data you want to receive from SAP) in **Exports**, see [Export Parameters](parameters.md/#export-parameters).<br>
Select output by activating the checkbox next to the items.<br>
![BAPI export parameters](../../assets/images/documentation/components/bapi/export-parameters.png){:class="img-responsive"}
3. Optional: If available, define input and output parameters in **Changings**, see [Changings Parameters](parameters.md/#changings-parameters).<br>
4. Add tables to the output of the {{ component }} or add table parameters to the input of the {{ component }} in **Tables**, see [Table Parameters](parameters.md/#table-parameters).<br>
	- Click **[:glasses-button:]** to check the names and data types of the table fields :number-1:.
	- Activate the checkbox next to the items to add items to the output :number-2:.
	- Click **[:pen-button:]** to edit the content of the table :number-3:.

	![BAPI table parameters](../../assets/images/documentation/components/bapi/table-parameters.png){:class="img-responsive"}
5. Optional: If available, define which exceptions thrown by the BAPI are ignored during runtime, see [Exceptions](parameters.md/#exceptions).
6. Click **[OK]** to confirm your input.



{% include "/components/bapis-and-function-modules/support-disclaimer.md" %}

