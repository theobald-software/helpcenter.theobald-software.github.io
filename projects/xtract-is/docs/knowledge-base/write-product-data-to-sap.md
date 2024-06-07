---
title: Write Product Data to SAP
description: How to Post Data in SAP with Xtract BAPI
---


The following article shows how to use the {{ bapi }} {{ component }} to write product data to SAP.<br>
The depicted example uses the custom function module Z_ECS_PRODUCT_CREATE_MULTI to add new products to SAP.
A table that contains the product information and is stored on an SQL Server is used as input for the function module.


### Custom Function Module Z_ECS_PRODUCT_CREATE_MULTI

The SAP custom function module Z_ECS_PRODUCT_CREATE_MULTI has a table parameter *T_PRODUCTS* that can be used for input. <br>
The table has the following structure:<br>
![ssis-write-sap-01](site:assets/images/articles/bapi/ssis-write-sap-01.png)

### Input Table

When creating input tables, the format (column names and data types) of the table must be compatible with the table parameters of the function module.
The custom function module Z_ECS_PRODUCT_CREATE_MULTI uses the following SQL server table as input: 

```  sql linenums="1" title="Input Table for Z_ECS_PRODUCT_CREATE_MULTI"
CREATE TABLE [SAP Products] (
    [MANDT] nvarchar(3), 
    [PRODUCTNR] nvarchar(18),
    [DESCTEXT] nvarchar(40),
    [PRODTYPE] nvarchar(4),
    [STOCKQUAN] numeric(18,3),
    [MEINS] nvarchar(3),
    [ERDAT] nvarchar(8),
    [ERZET] nvarchar(6)
)
```

The table has the following content:<br>
![ssis-write-sql-01](site:assets/images/articles/bapi/ssis-write-sql-01.png){:class="img-responsive" }

### Setup in SSIS

1. Add a data source to your Data Flow Task. The depicted example uses a table stored on an SQL Server, see [Input Table](#input-table).
2. Add an {{ bapi }} {{ component }} to your Data Flow Task and assign a [Connection Manager](https://help.theobald-software.com/en/xtract-is/sap-connection/the-connection-manager) that contains the connection details to your SAP system. 
3. Look up the function module Z_ECS_PRODUCT_CREATE_MULTI.<br>
![ssis-write-xtractis-fuba-01](site:assets/images/articles/bapi/BAPI-table-input.png){:class="img-responsive" }
4. Connect the input table to the {{ bapi }} {{ component }}. <br>
The input table is automatically mapped to the corresponding table in the {{ bapi }} {{ component }}.<br>
![ssis-write-xtractis-fuba-02](site:assets/images/articles/bapi/ssis-write-xtractis-fuba-02.png){:class="img-responsive" }
5. Run the {{ extraction }} and check the results in SAP.

*****

#### Related Links
- [Documentation: Xtract BAPI](https://help.theobald-software.com/en/xtract-is/bapi)
- [Write CATS data using Xtract BAPI](write-cats-data-to-sap.md)