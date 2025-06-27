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

1. In the tab *Tables and Fields*, click **[Add]** to add two tables (e.g., KNA1 and KNVV).

1. Select both tables on the left and check the fields you want to extract .

1. Optional: Switch to the *WHERE clause* tab and specify a [WHERE clause](../where-clause/).

1. Switch to the *Joins* tab . A Join condition with default values is automatically available. The join condition is based on the foreign key relationship of the joined tables.

1. Click **[]** to edit the join condition. The window "Join" opens.

1. Select a table column in the *Left Table* field and in the *Right Table* field to map the table contents. In the depicted example a left outer join on tables KNA1 (left table) and KNVV (right table) on the field KUNNR is performed. It is possible to add multiple join conditions.

   - Click **[Add]** to extend the join condition to more fields.
   - Click **[]** to delete existing joins.

   Tip

   Different tables can have identical field / column names. Defining a join condition based on the identical field names not always delivers the expected result, e.g., VBAK~VBELN \<> LIPS~VBELN. Make sure the fields you use in a join condition contain the same content/data.

1. Click **[OK]** to save the join.

You can join additional tables by adding tables more in the tab *Tables and Fields*.

Warning

**RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN.**\
Using a WHERE clause on the right table of a LEFT OUTER JOIN is only possible as of SAP Release 7.40, SP05.

#### Auto Mapping

The **[Auto-map]** button deletes existing join conditions and performs a new field mapping based on the foreign key relationship of the joined tables.

Recommendation

To avoid poor extraction performance, do not join more than five tables.
