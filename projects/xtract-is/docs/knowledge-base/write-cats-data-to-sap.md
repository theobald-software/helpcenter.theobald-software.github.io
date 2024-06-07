---
title: Write CATS Data to SAP
description: How to Post CATS Data in SAP with Xtract BAPI
authors: Valerie Schipka, Fabian Steffan
---


The following article shows how to upload CATS data from an SQL server table using the BAPI BAPI_CATIMESHEETMGR_INSERT and the {{ bapi }} {{ component }}.

### About BAPI_CATIMESHEETMGR_INSERT

The BAPI BAPI_CATIMESHEETMGR_INSERT creates Time Sheet entries in SAP.

- Input: Relevant import parameters are PROFILE and TESTRUN and the table CATSRECORDS_IN.  
- Output: The results are available in the tables CATSRECORDS_OUT and RETURN. <br>
The RETURN table contains different types of messages, e.g., warnings, information, errors, etc.  


#### Troubleshooting
If the input records do not have any errors, the table CATSRECORDS_OUT are populated with the same number of input records, otherwise it does not contain any entries. <br>

The ROW fields in the RETURN table can be used to identify errors, see [Checking for Errors](#checking-for-errors).<br>
Example: If the second and third entries have errors then the ROW of table RETURN will be populated as 2 and 3.

### Input Table

When creating input tables, the format (column names and data types) of the table must be compatible with the table parameters of the function module.
The depicted example uses the following input table (BAPICATSINPUT) that is stored on an SQL Server:

=== "Table Format"

    ![CATS-Bapi_02](site:assets/images/articles/bapi/CATS-Bapi_02.png){:class="img-responsive"}

=== "Table Content"

    ![CATS-Bapi_03](site:assets/images/articles/bapi/CATS-Bapi_03.png){:class="img-responsive"}


### Setup in SSIS

1. Add a data source to your Data Flow Task. The depicted example uses a table stored on an SQL Server, see [Input Table](#input-table).
2. Add an {{ bapi }} {{ component }} to your Data Flow Task and assign a [Connection Manager](https://help.theobald-software.com/en/xtract-is/sap-connection/the-connection-manager) that contains the connection details to your SAP system. 
3. Look up the BAPI BAPI_CATIMESHEETMGR_INSERT.
4. Provide the PROFILE "TEST" and TESTRUN " " as import parameters.<br>
![CATS-Bapi_04](site:assets/images/articles/bapi/BAPI-CATS-Imports.png){:class="img-responsive"}
5. Add the tables CATSRECORD_OUT and RETURN to the output.<br>
![CATS-Bapi_05](site:assets/images/articles/bapi/BAPI-CATS-Tables.png){:class="img-responsive"}
6. Connect the input table to the {{ bapi }} {{ component }}. The window "Input Output Selection" opens.
7. Select the table CATSRECORD_IN to map the data from the input table to CATSRECORD_IN.
The table fields are mapped automatically. For this, the name and data types of the table columns must match.<br>
If the input table and CATSRECORD_IN do not match, add a *Deprived Column* component between the OLE DB Source and the {{ bapi }} {{ component }} to format the input table accordingly.<br>
![CATS-Bapi_06](site:assets/images/articles/bapi/BAPI-CATS-mapping.png){:class="img-responsive"}
8. Create two *OLE DB destinations* for the tables CATSRECORDS_OUT and RETURN of the {{ bapi }} {{ component }}.<br>
![CATS-Bapi_07](site:assets/images/articles/bapi/CATS-Bapi_04.png){:class="img-responsive"}
9. Run the {{ extraction }} and check the results in SAP (transaction CAT3).<br>
![CATS-Bapi_08](site:assets/images/articles/bapi/CATS-Bapi_16.png){:class="img-responsive"}

### Checking for Errors

The ROW fields in the RETURN table can be used to identify errors. Example:<br>

1. To produce an error, set the the value for ABS_ATT_TYPE in the input table BAPICATSINPUT to 0005.<br>
![CATS-Bapi_21](site:assets/images/articles/bapi/CATS-Bapi_21.jpg){:class="img-responsive"}
2. Run the {{ extraction }}.<br>
The output table CATSRECORDS_OUT does not have any entries. This means that the data in SAP is not updated.
3. Query the SQL table RETURN to identify the error.<br>
The numbers in the ROW column show which rows contain the erroneous records. <br>
The message displayed in the MESSAGE column indicates that the attendance/absence type (0005) is not maintained.<br>
![CATS-Bapi_23](site:assets/images/articles/bapi/CATS-Bapi_23.jpg){:class="img-responsive"}

!!! note
	When using BAPI_CATIMESHEETMGR_INSERT, note that only records without errors are posted. 
	If an error occurs during posting, none of the data – including records without errors – is posted. 
	We recommend including only a small number of records in each posting.

*****

#### Related Links
- [Documentation: Xtract BAPI](https://help.theobald-software.com/en/xtract-is/bapi)
- [Write Product data using Xtract BAPI](write-product-data-to-sap.md)