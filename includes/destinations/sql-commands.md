
### Preparation

Defines the action on the target database before the data is inserted into the target table.

{% if page.meta.destination == "snowflake" %}

| Option | Description |
|---------|--------------|
| *None* | No action. |
| *Drop & Create* | Remove table if available and create new table (default). |
| *Truncate Or Create* | Empty table if available, otherwise create. |
| *Truncate* | Empty table if available. |
| *Create If Not Exists* | Create table if not available. |
| *Custom SQL* | Here you can define your own script, see [Custom SQL Statements](#custom-sql-statements). |

{% else %}

| Option | Description |
|---------|--------------|
| *Drop & Create* | Remove table if available and create new table (default). |
| *Truncate Or Create* | Empty table if available, otherwise create. |
| *Create If Not Exists* | Create table if not available. |
| *Prepare Merge* | Prepares the merge process and creates e.g. a temporary staging table, see [Merge Data](#merge-data). |
| *None* | No action. |
| *Custom SQL* | Here you can define your own script, see [Custom SQL Statements](#custom-sql-statements). |

{% endif %}

To only create the table in the first step and not insert any data, you have two options:
1. Copy the SQL statement and execute it directly on the target data database.
2. Select the *None* option for **Row Processing** and execute the extraction.

Once the table is created, it is up to you to change the table definition, e.g., by creating corresponding key fields and indexes or additional fields.

### Row Processing

Defines how the data is inserted into the target table.

{% if page.meta.destination == "snowflake" %}

| Option | Description |
|---------|--------------|
| *None* | No action. |
| *Copy file to table* | Insert records (default). |
| *Merge File to table* | Insert records into the staging table. |
| *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |

{% else %}

| Option | Description |
|---------|--------------|
| *Insert* | Insert records (default). |
| *Fill merge staging table* | Insert records into the staging table. |
| *None* | No action. |
| *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |
{% if page.meta.destination != "azure" and page.meta.destination != "postgres" and page.meta.destination != "redshift" %}| {% if page.meta.destination == "sap-hana" %}*Upsert (deprecated)*{% else %}*Merge (deprecated)*{% endif %} | This option is obsolete, see [Merge Data](#merge-data). Use the *Fill merge staging table* option.  |{% endif %}

{% endif %}

### Finalization

Defines the action on the target database after the data has been successfully inserted into the target table.

{% if page.meta.destination == "snowflake" %}

| Option | Description |
|---------|--------------|
| *None* | No action (default). |
| *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |

{% else %}

| Option | Description |
|---------|--------------|
| *Finalize Merge*| Closes the merge process and deletes the temporary staging table, for example.  |
| *None* | No action (default). |
| *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |

{% endif %}