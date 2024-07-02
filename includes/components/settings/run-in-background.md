
If *Background job timeout (seconds)* checkbox is activated, the table extraction is executed as a background job in SAP. 
This setting is optional and is supported in combination with function module THEO/READ_TABLE or Z_THEO_READ_TABLE version 2.0. 
Activate the setting *Background job timeout (seconds)* for long-running extractions with a large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

!!! tip
    The extraction jobs can be found in the SAP JobLog (**SM37**) under the JobName *theo_read_table*.

!!! warning
	**Shared Memory ran out of memory!** <br>
	If this error message pops up when running an extraction in the background, adjust the size of the Shared Memory.
	SAP recommends a Shared Memory size of 800MB~1.5GB for a production/test system or 2GB~4GB for S/4 systems, see [SAP Support: How to solve SYSTEM_NO_SHM_MEMORY runtime error](https://ga.support.sap.com/dtp/viewer/#/tree/1080/actions/12107).

