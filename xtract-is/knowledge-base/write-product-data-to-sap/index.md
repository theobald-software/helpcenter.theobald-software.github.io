The following article shows how to use the Xtract BAPI component to write product data to SAP.\
The depicted example uses the custom function module Z_ECS_PRODUCT_CREATE_MULTI to add new products to SAP. A table that contains the product information and is stored on an SQL Server is used as input for the function module.

### Custom Function Module Z_ECS_PRODUCT_CREATE_MULTI

The SAP custom function module Z_ECS_PRODUCT_CREATE_MULTI has a table parameter *T_PRODUCTS* that can be used for input.\
The table has the following structure:

### Input Table

When creating input tables, the format (column names and data types) of the table must be compatible with the table parameters of the function module. The custom function module Z_ECS_PRODUCT_CREATE_MULTI uses the following SQL server table as input:

```sql
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

The table has the following content:

### Setup in SSIS

1. Add a data source to your Data Flow Task. The depicted example uses a table stored on an SQL Server, see [Input Table](#input-table).
1. Add an Xtract BAPI component to your Data Flow Task and assign a [Connection Manager](../../documentation/sap-connection/#assign-connection-managers-to-xtract-components) that contains the connection details to your SAP system.
1. Look up the function module Z_ECS_PRODUCT_CREATE_MULTI.
1. Connect the input table to the Xtract BAPI component.\
   The input table is automatically mapped to the corresponding table in the Xtract BAPI component.
1. Run the SSIS package and check the results in SAP.

______________________________________________________________________

#### Related Links

- [Documentation: Xtract BAPI](../../documentation/bapi/)
- [Write CATS data using Xtract BAPI](../write-cats-data-to-sap/)
