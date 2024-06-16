
This option can be used if the data transfer to the target environment takes a lot of time, e.g., when bulk-inserts are deactivated for database destinations.
**Background job timeout (seconds)** sets a timeout period for extractions that run in background mode.<br>
The default value is 180 seconds. The maximum timeout value is 3600 seconds. 

!!! note 
	This setting only takes effect if the extractions run in background mode using [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md).
