The *Join* functionality allows joining two or more tables and extract the result of the join. 
To perform the extraction the corresponding SQL command is generated dynamically and the join is executed on the SAP server. <br>

Possible scenarios can be joining tables for header and item data or tables for master data and texts. 

### Supported Join Types

The following join types are supported:

- Inner Join
- Left Outer Join, also referred to as *Left Join*.

For more information on join types see [SAP Documentation: Inner Join and Outer Join](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true). <br>

!!! note
	Joining of cluster or pool tables is not supported. Cluster or pool tables need to be extracted individually and joined in the destination.

### Prerequisites

To use table join, the function module [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md/#installation-of-theoread_table) needs to be available in SAP. 


### Join Tables

The following example shows how to join the tables KNA1 and KNVV.

{% if page.meta.product == "yunio" %}

1. [Create a new service](../../getting-started.md/#create-a-service) of type {{ table }} or edit an existing service.
2. [Look up](index.md/#look-up-an-sap-table-or-view) the first table or view, e.g, KNA1.
3. Click :where-clause-add: to add the additional tables for the join, e.g., KNVV :number-1:.<br>
![table-joins](../../assets/images/yunio/documentation/table-joins.png){:class="img-responsive"}
4. Define the [output columns](settings.md/#output-columns) you want to extract for both tables :number-2:.
5. Optional: define a [WHERE clause](where-clause.md) for the tables.

	!!! note
		Specifying a WHERE-clause to the right table of a LEFT OUTER JOIN is only possible as of SAP Release 7.40, SP05.
		If your SAP system is older than SAP Release 7.40, SP05, the following error occurs: *RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN*.

6. Click **[Add join]** :number-3:. The *Join Editor* opens.
7. If necessary, change the default values of *Left Table*, *Right Table* and *Join Type*. <br>
![join-editor](../../assets/images/yunio/documentation/join-editor.png){:class="img-responsive" width="700px"}
8. Click **[Join/Add]** :number-4:. A new join condition is added to the join. 
9. Select a table column in the *Left Table* field and in the *Right Table* field to map the table contents. 
It is possible to add multiple join conditions.

	!!! tip
		Different tables can have identical field / column names. 
		Defining a join condition based on the identical field names not always delivers the expected result, e.g., VBAK~VBELN <> LIPS~VBELN.
		Make sure the fields you use in a join condition contain the same content/data.

10. Click **[OK]** to save the join.

{% else %} 

1. In the tab *Tables and Fields*, click **[:material-plus-thick:Add]** to add two tables (e.g., KNA1 and KNVV).<br>
![Table join steps](../../assets/images/documentation/components/table/join_steps_1.png){:class="img-responsive"}
2. Select both tables on the left and check the fields you want to extract :number-1:. 
3. Optional: Switch to the *WHERE clause* tab and specify a [WHERE clause](where-clause.md).
4. Switch to the *Joins* tab :number-2:. A Join condition with default values is automatically available. 
The join condition is based on the foreign key relationship of the joined tables.
5. Click **[:pen-button:]** to edit the join condition. The window "Join" opens. <br>
![Table-Join-Connections](../../assets/images/documentation/components/table/join_steps_2.png){:class="img-responsive"}
6. Select a table column in the *Left Table* field and in the *Right Table* field to map the table contents. 
In the depicted example a left outer join on tables KNA1 (left table) and KNVV (right table) on the field KUNNR is performed.
It is possible to add multiple join conditions.

	- Click **[Add]** to extend the join condition to more fields.
	- Click **[:trashbin:]** to delete existing joins.

	!!! tip
		Different tables can have identical field / column names. 
		Defining a join condition based on the identical field names not always delivers the expected result, e.g., VBAK~VBELN <> LIPS~VBELN.
		Make sure the fields you use in a join condition contain the same content/data.
		
7. Click **[OK]** to save the join.

You can join additional tables by adding tables more in the tab *Tables and Fields*.

!!! warning
	**RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN.**<br>
	Using a WHERE clause on the right table of a LEFT OUTER JOIN is only possible as of SAP Release 7.40, SP05. 


#### Auto Mapping

The **[Auto-map]** button deletes existing join conditions and performs a new field mapping based on the foreign key relationship of the joined tables. 

![Table-Join-Automapping](../../assets/images/documentation/components/table/join_automap.png){:class="img-responsive"}

{% endif %} 


!!! tip "Recommendation" 
	To avoid poor extraction performance, do not join more than five tables.
