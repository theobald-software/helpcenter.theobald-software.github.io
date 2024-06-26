
!!! note
	When running the extraction regularly the content of the log table in SAP is extracted and written to the destination.
	The content of the log table in SAP is cleared after every successful run of the extraction. Data that was not extracted is not cleared.

### Delete Log Table and Triggers

When a Table CDC extraction is no longer in use or if you need to change the structure of the source table, simply deleting the extraction is not enough.
To delete the log table and all associated triggers from your SAP system, open the Table CDC extraction and click **[Delete CDC resources]**. 

To delete the SAP resources of multiple extractions or extractions that are already deleted, see [Active CDC Watches](active-cdc-watches.md).

!!! warning
	**Table change not possible** <br>
	The source table structures can be changed only after clearing the CDC-related resources connected to that table in SAP, see [SAP Note 2284776](https://launchpad.support.sap.com/#/notes/2284776) 
