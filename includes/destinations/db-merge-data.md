The following example depicts the update of the existing data records in a database by running an extraction to merge data. 
In this case, merging means changing a value of a field or inserting a new data row or updating an existing record in SAP. 

With a merge command, the updated value is written to the destination database table. 
The merge command ensures delta processing: new records are inserted into the database and / or existing records are updated.

![Update-Merge-Example-Data](../../assets/images/xu/documentation/destinations/ms-sql/merge_db_scheme.png){:class="img-responsive"}

!!! tip 
	Alternatively to merging, the data can be also updated by means of full load. 
	The full load method is less efficient.

### Prerequisites 
You need a table with existing SAP data, in which new data can be merged.<br>
Ideally, the table with existing data is created in the initial load with the corresponding **Preparation** option and filled with data with the **Row Processing** option *Insert*.

After the table is created, open SAP and change a field value in the SAP table that is used for the data merge. 

!!! warning
	**Faulty merge.** <br>
	Merge commands require a primary key. If no primary key is set, the merge command runs into an error.
	Create an appropriate primary key in the [General Settings](../table/general-settings.md#primary-key-tab) of the extraction type to execute the merge command.


### Merge Command
The merge process is performed using a staging table and takes place in three steps:
1. A temporary table is created.
2. The data is inserted in the temporary table.
3. The temporary table is merged with the target table and then the temporary table is deleted.

Follow the steps below to set up the merge process in Xtract Universal:

1. In the main window of the Xtract Universal Designer, select an extraction from the list of extractions. 
2. Click **[:designer-destination:Destination]**. The window "Destination Settings" opens.
3. Make sure to assign a database destination to the extraction. 
4. Apply the following destination settings:
![Extraction-Specific-Settings-Merge-Makt](../../assets/images/xu/documentation/destinations/ms-sql/destination_data_merge.png){:class="img-responsive"}
5. Click **[OK]** and [run the extraction](../execute-and-automate/run-an-extraction.md/#run-extractions-in-the-designer).

More information about the updated fields can be found in the SQL statement.<br>
It is possible to edit the SQL statement if necessary, e.g., to exclude certain columns from the update.<br>
Fields that do not appear in the SQL statement are not affected by changes.
