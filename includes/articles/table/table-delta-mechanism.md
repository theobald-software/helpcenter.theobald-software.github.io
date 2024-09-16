
The following article illustrates the process of delta table extractions using the {{ table }} {{ component }}.

### Table Delta Process

The delta mechanism of Table includes the following processes:
- Lookup process to read SAP metadata for the definition of the Table extraction.
-  watch process to create a database trigger on the source table and to create the corresponding log table in SAP.
- Synchronize data process to run Table extractions regularly.

The depicted graphic illustrates the processes in both {{ productName }} and in SAP.
Click the graphic to zoom in.

[![Delta-Process]][Delta-Process]

  [Delta-Process]: ../assets/images/articles/table-cdc/tablecdc-process.png
  

!!! tip

	Use the SAP transaction DB02 to view all triggers of Table CDC log tables in SAP. 

