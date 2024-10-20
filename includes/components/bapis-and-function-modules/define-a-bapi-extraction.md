
### Look up a Function Module / BAPI

1. In the main window of the {{ component }}, click **[:magnifying-glass:]** to look up a Function Module / BAPI. 
The window "Function Module Lookup" opens.<br>
![bapi_main-window_add](../../assets/images/documentation/components/bapi/{{ abbr }}-add-bapi.png){:class="img-responsive"}
2. In the window "Function Module Lookup" enter the name of the function module or BAPI :number-1:. Use wildcards (*) if needed.<br>
![Look-Up-BAPIs](../../assets/images/documentation/components/bapi/add-bapi-look-up.png){:class="img-responsive"}
3. Click **[:magnifying-glass:]** :number-2:. Search results are displayed.
4. Select a Function Module / BAPI :number-3: and click **[OK]**. <br>

The application returns to the main window of the {{ component }}.

### Define the {{ bapi }} {{ Component }}

The {{ bapi }} {{ component }} offers the following options for defining parameters of a Function Module / BAPI:

1. Add input parameters (data you want to send to SAP) in **Imports**, see [Import Parameters](input-and-output.md/#import-parameters).<br>
You can enter scalar values :number-1: or structures :number-2:.<br>
![import-parameters](../../assets/images/documentation/components/bapi/{{ abbr }}-import-parameters.png){:class="img-responsive"}
2. Add output parameters (data you want to receive from SAP) in **Exports**, see [Export Parameters](input-and-output.md/#export-parameters).<br>
Select output by activating the checkbox next to the items.<br>
![BAPI export parameters](../../assets/images/documentation/components/bapi/{{ abbr }}-export-parameters.png){:class="img-responsive"}
3. Optional: If available, define input and output parameters in **Changings**, see [Changings Parameters](input-and-output.md/#changing-parameters).<br>
4. Add tables to the output of the {{ component }} or add table parameters to the input of the {{ component }} in **Tables**, see [Table Parameters](input-and-output.md/#table-parameters).<br>
	- Click **[:glasses-button:]** to check the names and data types of the table fields :number-1:.
	- Activate the checkbox in the output column to add items to the output :number-2:.
	- Click **[:pen-button:]** to edit the content of the table :number-3:.

	![BAPI table parameters](../../assets/images/documentation/components/bapi/{{ abbr }}-table-parameters.png){:class="img-responsive"}
5. Optional: If available, define which exceptions thrown by the Function Module / BAPI are ignored during runtime, see [Exceptions](input-and-output.md/#exceptions).
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %} 6. Check the [General Settings](general-settings.md) before running the {{ extraction }}.{% endif %}
7. Click **[OK]** to save the {{ component }}.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% endif %}.
