The *Join* functionality allows joining two or more tables and extract the result of the join. To perform the extraction the corresponding SQL command is generated dynamically and the join is executed on the SAP server.

Possible scenarios can be joining tables for header and item data or tables for master data and texts.

### Supported Join Types

The following join types are supported:

- Inner Join
- Left Outer Join, also referred to as *Left Join*.

For more information on join types see [SAP Help: Inner Join and Outer Join](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true).

Note

Joining of cluster or pool tables is not supported. Cluster or pool tables need to be extracted individually and joined in the destination.

### Prerequisites

To use table join, the function module [/THEO/READ_TABLE](../../setup-in-sap/custom-function-module-for-table-extraction/#installation-of-theoread_table) needs to be available in SAP.

### Join Tables

The following example shows how to join the tables KNA1 and KNVV.

1. [Create a new service](../../../getting-started/#create-a-service) of type *SAP Table and View* or edit an existing service.

1. [Look up](../#look-up-an-sap-table-or-view) the first table or view, e.g, KNA1.

1. Click to add the additional tables for the join, e.g., KNVV .

1. Define the [output columns](../settings/#output-columns) you want to extract for both tables .

1. Optional: define a [WHERE clause](../where-clause/) for the tables.

   Note

   Specifying a WHERE-clause to the right table of a LEFT OUTER JOIN is only possible as of SAP Release 7.40, SP05. If your SAP system is older than SAP Release 7.40, SP05, the following error occurs: *RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN*.

1. Click **[Add join]** . The *Join Editor* opens.

1. If necessary, change the default values of *Left Table*, *Right Table* and *Join Type*.

1. Click **[Join/Add]** . A new join condition is added to the join.

1. Select a table column in the *Left Table* field and in the *Right Table* field to map the table contents. It is possible to add multiple join conditions.

   Tip

   Different tables can have identical field / column names. Defining a join condition based on the identical field names not always delivers the expected result, e.g., VBAK~VBELN \<> LIPS~VBELN. Make sure the fields you use in a join condition contain the same content/data.

1. Click **[OK]** to save the join.

Recommendation

To avoid poor extraction performance, do not join more than five tables.
