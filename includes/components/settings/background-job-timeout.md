
Sets a timeout period for extractions that run in background mode.<br>
The default value is 180 seconds. The maximum timeout value is 3600 seconds. 

{% if page.meta.product == "xtract-universal" %}This option can be used if the data transfer to a destination takes a lot of time, e.g., when bulk-inserts are deactivated for database destinations.{% endif %} 

!!! note 
	This setting only takes effect if the extractions run in background mode using [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md).
