
The following article illustrates the process of delta table extractions using the {{ tablecdc }} {{ component }}.

### Table CDC Process

The delta mechanism of Table CDC includes the following processes:
- Lookup process to read SAP metadata for the definition of the Table CDC extraction.
- CDC watch process to create a database trigger on the source table and to create the corresponding log table in SAP.
- Synchronize data process to run Table CDC extractions regularly.

The depicted graphic illustrates the processes in both {{ productName }} and in SAP.
Click the graphic to zoom in.

[![Delta-Process]][Delta-Process]

  [Delta-Process]: ../assets/images/articles/table-cdc/tablecdc-process.png
  

!!! tip

	Use the SAP transaction DB02 to view all triggers of TableCDC log tables in SAP. 

