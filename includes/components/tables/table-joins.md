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

To use table join, the function module {% if page.meta.product == "yunio" %}[/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md/#installation-of-theoread_table){% else %}[/THEO/READ_TABLE](../sap-customizing/custom-function-module-for-table-extraction.md){% endif %} needs to be available in SAP. 


{% if page.meta.product == "yunio" %}
### How to Join Tables

The following example shows how to join the tables KNA1 and KNVV.

1. [Create a new service](../../getting-started.md/#create-a-service) of type {{ table }} or click :yunio-edit: to edit an existing service.
2. [look up](tables-and-views.md/#look-up-an-sap-table-or-view) the first table or view for the join, e.g, KNA1.
3. Click :where-clause-add: to add the additional tables for the join, e.g., KNVV :number-1:.<br>
![table-joins](../../assets/images/yunio/table-joins.png){:class="img-responsive"}
4. Define the [output columns](#output-columns) you want to extract for both tables :number-2:.
5. Optional: define a [WHERE clause](#where-clause-editor) for the tables.

	!!! note
		Be careful of [WHERE clause restrictions ](where-clause.md/#where-clause-restrictions) when specifying a WHERE-clause to the right table of table joins using a LEFT OUTER JOIN.

6. Click **[Add join]** :number-3:. The *Join Editor* opens.
7. If necessary, change the default values of *Left Table*, *Right Table* and *Join Type*. <br>
![join-editor](../../assets/images/yunio/join-editor.png){:class="img-responsive" width="700px"}
8. Click **[Join/Add]** :number-4:. A new join condition is added to the join. 
9. Select a table column in the *Left Table* field and in the *Right Table* field to map the table contents. It is possible to add multiple join conditions.

	!!! tip
		Different tables can have identical field / column names. 
		Defining a join condition based on the identical field names not always delivers the expected result, e.g., VBAK~VBELN <> LIPS~VBELN.
		Make sure the fields you use in a join condition contain the same content/data.

10. Click **[OK]** to save the join.

{% else %} 

### Joining two Tables
The following example shows how to join the tables KNA1 and KNVV.

![Table join steps](../../assets/images/join_steps_1.png){:class="img-responsive"}

1. In the tab *Tables and Fields*, click **[Add]** (1) to add two tables (e.g., KNA1 and KNVV).
2. Select both tables on the left and check the fields you want to extract (2). 
3. Switch to the *Joins* (3) tab to define the join condition. A Join condition is automatically preset. The Join condition is based on the foreign key relationship of the joined tables, 
4. Optional: Switch to the *WHERE clause* tab and specify a [WHERE clause](./where-clause).

!!! note
	Be careful of [WHERE clause restrictions ](where-clause.md/#where-clause-restrictions) when specifying a WHERE-clause to the right table of table joins using a LEFT OUTER JOIN.

In the *Joins* tab, click ![pen](../../assets/images/icons/pen.png) to display joining options. <br>
In the depicted example a left outer join on tables KNA1 (left table) and KNVV (right table) on the field KUNNR is performed. A WHERE clause on *KNA1~LAND1 = 'DE'* is specified. 
![Table-Join-Connections](../../assets/images/join_verknüpfungen_01.png){:class="img-responsive"}

*Left Table*, *Right Table*, *Join Type* and *Join Mapping* are preset with default values. They can be modified as required. The *Join Mapping* is based on the foreign key relationship of the joined tables.<br>
- Click **[Add]** to extend the join condition to more fields. 
- Click ![trashbin](../../assets/images/icons/trashbin.png) to remove existing joins. 
- Join additional tables in the tab *Tables and Fields*. 

!!! tip
	Different tables can have identical field names. Defining a join condition based on the identical field names not always delivers the expected result (e.g., VBAK~VBELN <> LIPS~VBELN).
	Make sure the fields you use in a join condition contain the same content/data.

{% endif %} 


{% if page.meta.product != "yunio" %}
#### Auto Mapping Function (optional)

The **[Auto-map]** button deletes existing join conditions and performs a new field mapping based on the foreign key relationship of the joined tables. 

![Table-Join-Automapping](../../assets/images/join_automap.png){:class="img-responsive"}


### Joining three Tables
Example of a join with a third table KNB1:

![Table-Join-Verknüpfungen2](../../assets/images/join_verknüpfungen_02.png){:class="img-responsive"}

![Table-Join-Verknüpfungen3](../../assets/images/join_verknüpfungen_03.png){:class="img-responsive"}

{% endif %} 


!!! tip "Recommendation" 
	To avoid poor extraction performance, do not join more than five tables.
