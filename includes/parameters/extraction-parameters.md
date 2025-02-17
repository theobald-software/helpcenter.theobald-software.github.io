
The following categories of extraction parameters are available:

- [Extraction](#extraction) parameters affect the extraction and destination settings.
- [Source](#source) parameters affect the SAP connection settings.
- [Custom](#custom) parameters correspond to the user-defined runtime parameters {% if page.meta.product == "xtract-universal" %}or [SQL parameters](sql-parameters.md) {% endif %}of an extraction.

The parameters can be accessed in the "Run Extraction" window.<br>
To open the "Run Extraction" window, select an extraction from the [list of extractions](../designer.md/#list-of-extractions) and click **[:designer-run:Run]**.
For more information, see [Run Extractions](../{{ run_extractions }}/#run-extractions-in-the-designer).

![Extraction parameters](site:assets/images/documentation/parameters/{{ abbr }}/run_extraction_param2.png){:class="img-responsive"}


### Extraction

The number of available parameters depends on the extraction type and destination.<br>
Example: *decimalSeparator* is a parameter specific to CSV destinations.

Parameter  | Description | Information
------------ | ------------- | -------------
clearBuffer | Clears/Keeps the result buffer | Default value is *false*
preview | Enables/Disables the preview mode | Default value is *false*
source | Selects the SAP source system from which data is extracted (e.g., SAP_DEV and SAP_PROD). Applies only if more than one SAP system is used. | -
destination | Selects the destination to which extraction is written (e.g., db_1 and db_2). Applies only if more than one destination is used.| -
rows | Sets the maximum number of rows to be extracted | Available for [Table](../table/settings.md#row-limit)
whereClause | Sets a WHERE clause. SAP system variables are applicable. | Available for [Table](../table/where-clause.md) 
packageSize | Sets the package size | Available for [Table](../table/settings.md#package-size)  
updateMode | Sets the update mode to use for the run: Full, Delta, Recovery | Available for [ODP](../odp/update-mode.md)
subscriptionSuffix | Suffix to use multiple inits on a single SAP system | Available for [ODP](../odp/index.md)
extractDataOnDeltaInit | Extracts data if request is *delta init*| Available for [ODP](../odp/update-mode.md)
hierarchyName | The name of the hierarchy to extract | Available for ODP, DeltaQ & Hierarchy
representation | The representation / output format of the hierarchy to extract: "ParentChild", "Natural" or "ParentChildWithNodeNames"  | Available for [Hierarchy](../hierarchy/output-format.md)
dateTo | The valid-to-date of the hierarchy to extract in the format YYYYMMDD | Available for [Hierarchy](../hierarchy/index.md)
variant | Name of a variant | Available for [Report](../report/variants-and-selections.md) & [SAP Query](../query/variants-and-selections.md)
batchJobName | Name of the Batch Job| Available for [Report](../report/settings.md)
gatwewayHost | Gateway Host | Available for [DeltaQ](../deltaq/deltaq-customization.md)
gatewayService | Gateway Service | Available for [DeltaQ](../deltaq/deltaq-customization.md)
programID | Program ID | Available for [DeltaQ](../deltaq/deltaq-customization.md)
logicalDestination | Logical Destination | Available for [DeltaQ](../deltaq/deltaq-customization.md)
requestID | Request ID (for Repair Request only) | Available for [DeltaQ](../deltaq/deltaq-customization.md)
updateType | Sets the update mode to use for the run: F (Full), C (Delta Init), S (Init no data), D (Delta Update), R (Repeat)| Available for [DeltaQ](../deltaq/update-mode.md)
decimalSeparator | Sets a symbol between integer and fractional part | Available for CSV destinations
columnSeparator |  Sets a symbol which indicates the start of a new column | Available for CSV destinations

#### Example
1. Select the checkbox of the parameter you want to override.
2. Enter the value and confirm by pressing enter. 
	- Extraction URL before changing the parameter:<br>
	`http://sherri.theobald.local:8065/start/KNA1/`
	- Extraction URL after editing the parameter **source** (name of the SAP source system):<br>
	`http://sherri.theobald.local:8065/start/KNA1/?source=SAP_PROD` 


### Source

The connection settings to an SAP source can be changed dynamically{% if page.meta.product == "xtract-universal" %} via the URL and the [command-line tool xu.exe](../execute-and-automate/call-via-commandline.md){% endif %}. 
In the *Source* tab you can override the values that are defined in [SAP source details](../sap-connection/settings.md).

![Source parameters](../../assets/images/documentation/parameters/{{ abbr }}/run_extraction_source_parameters.png){:class="img-responsive"}


Parameter name | Parameter description 
------------ | ------------- 
lang | Changes the logon language of the SAP source system  
logonTicket | Changes the ticket issuer of the [SAP logon ticket](../sap-connection/sso-with-logon-ticket.md)

!!! note 
	The parameter **logonTicket** can only be set if SAP logon ticket is selected as the authentication method in [SAP source details](../sap-connection/sso-with-logon-ticket.md/#configure-sso-with-logon-ticket-in-the-sap-source).


#### Example
1. Select the checkbox of the parameter you want to override.
2. Enter the value and confirm by pressing enter. 
	- Extraction URL before changing the parameter:<br>
	`http://sherri.theobald.local:8065/start/KNA1/`
	- Extraction URL after editing the parameter **lang** (language setting for the SAP source system):<br>
	`http://sherri.theobald.local:8065/start/KNA1/&lang=DE` 


### Custom

The tab *Custom* is only active when [user-defined runtime parameters](index.md/#about-custom-runtime-parameters){% if page.meta.product == "xtract-universal" %} or [SQL parameters](sql-parameters.md){% endif %} are available. <br>
Check the checkbox and enter a new value to set the user defined parameter.

![Custom parameters](site:assets/images/documentation/parameters/{{ abbr }}/run_extraction_param_cust.png){:class="img-responsive"}

#### Example
1. Select the checkbox of the parameter you want to override.
2. Enter the value and confirm by pressing enter. 
	- Extraction URL before changing the parameter:<br>
	`http://sherri.theobald.local:8065/start/KNA1/`
	- Extraction URL after editing the parameter **myParameter** (name of a runtime parameter):<br>
	`http://sherri.theobald.local:8065/start/KNA1/&myParameter=EN`  

****
#### Related Links:
- [Web API](../../web-api.md)
- [Script Expressions](script-expressions.md)
