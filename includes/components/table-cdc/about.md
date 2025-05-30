This page shows how to use the {{ tableCDC }} {{ component }}.<br>
The {{ tableCDC }} {{ component }} can be used to map data from SAP Tables to various target environments.
Unlike a full data load, where all records in a table are transferred from the source to the target environment, Table CDC captures only the data changes since the last load. 

!!! note
	Table CDC is an Add-On that requires a separate license. 
	For more information, contact Theobald Software's sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com).

### About Table CDC

Change Data Capture (CDC) is a method to keep track of data changes such as insert, update and delete in SAP tables.
The Table CDC component creates a log table in SAP that records any changes made to a selected table. 
The content of the log table is cleared after every successful run of the extraction. Data that was not extracted is not cleared from the log table.

For a detailed overview of this process, refer to the Knowledge Base article [Delta Mechanism of TableCDC](../../knowledge-base/table-cdc-mechanism.md).

!!! note
	Clusters, pool tables and views are not supported by the {{ tableCDC }} {{ component }}. 

### System Requirements
 
- The {{ tableCDC }} {{ component }} is compatible with SAP ECC 5.0 and higher
- Supported databases:
	- HANA
	- SQL Server
	- Oracle
	- IBM Db2
	- IBM for i (Db4)
	- IBM for z/os (Db6)
	- MaxDB
	
### Prerequisites

- SAP custom function module [/THEO/CDC_ECC or /THEO/CDC_S4](../setup-in-sap/custom-function-module-for-tablecdc.md) is installed in SAP.
- SAP custom function module [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md) is installed in SAP.
- A connection to an SAP system is available, see [SAP Connection](../sap-connection/index.md).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects.md/#table-cdc).

The SAP transport requests for the function modules are provided in the installation directory: `{{ installationDir }}\ABAP\`, see [Custom function module for TableCDC](../setup-in-sap/custom-function-module-for-tablecdc.md).
