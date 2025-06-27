The following article shows how to upload CATS data from an SQL server table using the BAPI BAPI_CATIMESHEETMGR_INSERT and the Xtract BAPI component.

### About BAPI_CATIMESHEETMGR_INSERT

The BAPI BAPI_CATIMESHEETMGR_INSERT creates Time Sheet entries in SAP.

- Input: Relevant import parameters are PROFILE and TESTRUN and the table CATSRECORDS_IN.
- Output: The results are available in the tables CATSRECORDS_OUT and RETURN.\
  The RETURN table contains different types of messages, e.g., warnings, information, errors, etc.

#### Troubleshooting

If the input records do not have any errors, the table CATSRECORDS_OUT are populated with the same number of input records, otherwise it does not contain any entries.

The ROW fields in the RETURN table can be used to identify errors, see [Checking for Errors](#checking-for-errors).\
Example: If the second and third entries have errors then the ROW of table RETURN will be populated as 2 and 3.

### Input Table

When creating input tables, the format (column names and data types) of the table must be compatible with the table parameters of the function module. The depicted example uses the following input table (BAPICATSINPUT) that is stored on an SQL Server:

### Setup in SSIS

1. Add a data source to your Data Flow Task. The depicted example uses a table stored on an SQL Server, see [Input Table](#input-table).
1. Add an Xtract BAPI component to your Data Flow Task and assign a [Connection Manager](../../documentation/sap-connection/#assign-connection-managers-to-xtract-components) that contains the connection details to your SAP system.
1. Look up the BAPI BAPI_CATIMESHEETMGR_INSERT.
1. Provide the PROFILE "TEST" and TESTRUN " " as import parameters.
1. Add the tables CATSRECORD_OUT and RETURN to the output.
1. Connect the input table to the Xtract BAPI component. The window "Input Output Selection" opens.
1. Select the table CATSRECORD_IN to map the data from the input table to CATSRECORD_IN. The table fields are mapped automatically. For this, the name and data types of the table columns must match.\
   If the input table and CATSRECORD_IN do not match, add a *Deprived Column* component between the OLE DB Source and the Xtract BAPI component to format the input table accordingly.
1. Create two *OLE DB destinations* for the tables CATSRECORDS_OUT and RETURN of the Xtract BAPI component.
1. Run the SSIS package and check the results in SAP (transaction CAT3).

### Checking for Errors

The ROW fields in the RETURN table can be used to identify errors. Example:

1. To produce an error, set the the value for ABS_ATT_TYPE in the input table BAPICATSINPUT to 0005.
1. Run the SSIS package.\
   The output table CATSRECORDS_OUT does not have any entries. This means that the data in SAP is not updated.
1. Query the SQL table RETURN to identify the error.\
   The numbers in the ROW column show which rows contain the erroneous records.\
   The message displayed in the MESSAGE column indicates that the attendance/absence type (0005) is not maintained.

Note

When using BAPI_CATIMESHEETMGR_INSERT, note that only records without errors are posted. If an error occurs during posting, none of the data – including records without errors – is posted. We recommend including only a small number of records in each posting.

______________________________________________________________________

#### Related Links

- [Documentation: Xtract BAPI](../../documentation/bapi/)
- [Write Product data using Xtract BAPI](../write-product-data-to-sap/)
