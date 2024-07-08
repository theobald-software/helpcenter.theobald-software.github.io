
### Preparation

Defines the action on the target database before the data is inserted into the target table.

| Option | Description |
|---------|--------------|
| *Drop & Create* | Remove table if available and create new table (default). |
| *Truncate Or Create* | Empty table if available, otherwise create. |
| *Create If Not Exists* | Create table if not available. |
| *Prepare Merge* | Prepares the merge process and creates e.g. a temporary staging table, see [Merge Data](#merging-data). |
| *None* | no action |
| *Custom SQL* | Here you can define your own script, see [Custom SQL Statements](#custom-sql-statements). |

If you only want to create the table in the first step and do not want to insert any data, you have two options:
1. Copy the SQL statement and execute it directly on the target data database.
2. Select the None option for Row Processing and execute the extraction.

Once the table is created, it is up to you to change the table definition, e.g., by creating corresponding key fields and indexes or additional fields.

### Row Processing

Defines how the data is inserted into the target table.

| Option | Description |
|---------|--------------|
| *Insert* | Insert records (default). |
| *Fill merge staging table* | Insert records into the staging table. |
| *None* | No action. |
| *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |
| *Merge (deprecated)* | This option is obsolete, see [Merge Data](#merge-data). Use the *Fill merge staging table* option.  |


### Finalization

Defines the action on the target database after the data has been successfully inserted into the target table.

| Option | Description |
|---------|--------------|
| *Finalize Merge*| Closes the merge process and deletes the temporary staging table, for example.  |
| *None* | No action (default). |
| *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |

