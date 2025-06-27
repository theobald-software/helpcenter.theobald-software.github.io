This page contains an overview of the extraction settings in the Table CDC extraction type.\
To open the extraction settings, click ****Extraction Settings**** in the main window of the extraction type.

### Initial Load

#### Package size

The extracted data is split into packages of the defined size. The default value is 50000 lines.\
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extractions.

Warning

**RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table**\
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Extract data in background job

If *Background job timeout (seconds)* checkbox is activated, the table extraction is executed as a background job in SAP. This setting is optional and is supported in combination with function module THEO/READ_TABLE or Z_THEO_READ_TABLE version 2.0. Activate the setting *Background job timeout (seconds)* for long-running extractions with a large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

Tip

The extraction jobs can be found in the SAP JobLog (**SM37**) under the JobName *theo_read_table*.

Warning

**Shared Memory ran out of memory!**\
If this error message pops up when running an extraction in the background, adjust the size of the Shared Memory. SAP recommends a Shared Memory size of 800MB~1.5GB for a production/test system or 2GB~4GB for S/4 systems, see [SAP Support: How to solve SYSTEM_NO_SHM_MEMORY runtime error](https://ga.support.sap.com/dtp/viewer/#/tree/1080/actions/12107).

#### Background job timeout (seconds)

Sets a timeout period for extractions that run in background mode.\
The default value is 180 seconds. The maximum timeout value is 3600 seconds.

Note

The background job timeout setting only takes effect if the extractions run in background mode using [/THEO/READ_TABLE](../../setup-in-sap/custom-function-module-for-table-extraction/).
