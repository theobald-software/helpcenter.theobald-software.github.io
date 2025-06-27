This page shows how to set up and use the IBM Db2 destination. The IBM Db2 destination loads data to an IBM Db2 destination.

## Requirements

The appropriate version (32bit for 32bit OS, 64bit for 64bit OS) of the ADO .NET driver must be installed.\
Select the *IBM Data Server Driver Package* and then the *IBM Data Server Driver Package (Windows AMD64 and Intel EM64T)* or *IBM Data Server Driver Package (Windows 32-bit AMD and Intel x86)*, see [IBM Data Server Client Packages - Version 11.5 GA](https://www.ibm.com/support/pages/node/387577).

If a fixed version is available, download the fixed version of the provider from the software vendor's website, see [Overview IBM Data Server Client Packages](https://www.ibm.com/support/pages/node/323035).

## Create a new IBM Db2 Destination

Follow the steps below to add a new IBM Db2 destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *IBM Db2* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

#### Provider

Select a .Net provider for DB2. To install a provider, refer to [requirements](#requirements).

#### Host Name / Port

Enter the name or IP of the DB2 server and the port number.

#### Username / Password

IBM Db2 authentication user name and password.

#### Database name

Enter the name of the IBM database.

#### Default schema

Enter the schema of the DB2 database.

#### Test Connection

Check the database connection.

## Assign the IBM Db2 Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your IBM Db2 destination from the dropdown list.
1. Optional: edit the [destination settings](#destination-settings).
1. Click **[OK]** to confirm your input.

When running the extraction, the extracted SAP data is now written to the destination.

### Destination Settings

The destination settings only affect the extraction that the destination is assigned to. To open the destination settings, select an extraction in the main window of the Designer and click **[Destination]**. The window "Destination Settings" opens.

### File Name

Determines the name of the target table. The following options are available:

| Option | Description | | --- | --- | | **Same as name of SAP object** | Copy the name of the SAP object. | | **Same as name of extraction** | Adopt the name of the extraction. | | **Fully qualified extraction name** | Adopt the name of the extraction, including the path of the extraction. This option avoids conflicts, when the extraction names are not unique. Use the fully qualified extraction name when the same extraction name is used in multiple [extraction groups](../../organize-extractions/). | | **Custom** | Define a name of your choice. |

#### Append timestamp

Add the timestamp in the UTC format (\_YYYY_MM_DD_hh_mm_ss_fff) to the file name of the extraction

#### Use Script Expressions as Dynamic File Names

Script expressions can be used to generate a dynamic file name. This allows generating file names that are composed of an extraction's properties, e.g. extraction name, SAP source object. This scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input | Description | | --- | --- | | `#{Source.Name}#` | Name of the extraction's SAP source. | | `#{Extraction.ExtractionName}#` | Name of the extraction. | | `#{Extraction.FullyQualifiedExtractionName}#` | Name of the extraction. If the extraction is part of an [extraction group](../../organize-extractions/), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. | | `#{Extraction.Type}#` | Extraction type (*Table*, *ODP*, *BAPI*, etc.). | | `#{Extraction.SapObjectName}#` | Name of the SAP object the extraction is extracting data from. | | `#{Extraction.Timestamp}#` | Timestamp of the extraction. | | `#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}#` | Removes the first slash '/' of an SAP object. Example: /BIO/TMATERIAL to BIO/TMATERIAL - prevents creating an empty folder in a file path. | | `#{Extraction.SapObjectName.Replace('/', '_')}#` | Replaces all slashes '/' of an SAP object. Example /BIO/TMATERIAL to \_BIO_TMATERIAL - prevents splitting the SAP object name by folders in a file path. | | `#{Extraction.Fields["FISCPER"].RangeSelections[0].LowerValue}#` | Lower value of the range selection. | | `#{Extraction.Fields["FISCPER"].RangeSelections[0].UpperValue}#` | Upper value of the range selection. | | `#{Extraction.Context}#` | Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). | | `#{Extraction.Fields["[NameSelectionFiels]"].Selections[0].Value}#` | Only for ODP extractions: returns the input value of a defined selection / filter. | | `#{Odp.UpdateMode}#` | Only for ODP extractions: returns the update mode (*Delta*, *Full*, *Repeat*) of the extraction. | | `#{TableExtraction.WhereClause}#` | Only for Table extractions: returns the WHERE clause of the extraction. |

### Column Name Style

Defines the style of the column name. Following options are available:

| Option | Description | | --- | --- | | *Code* | The SAP technical column name is used as column name in the destination e.g., MAKTX. | | *PrefixedCode* | The SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX | | *CodeAndText* | The SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text). | | *TextAndCode* | The SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)\_MAKTX. | | *Text* | The SAP description is used as column name in the destination e.g., Material Description (Short Text). |

### Convert dates

Converts the character-type SAP date (YYYYMMDD, e.g., 19900101) to a special date format (YYYY-MM-DD, e.g., 1990-01-01). Target data uses a real date data-type and not the string data-type to store dates.

#### Year 0

Converts the SAP date 00000000 to the entered value.

#### Year 9999

Converts the SAP date 9999XXXX to the entered value.

#### Invalid values

If an SAP date cannot be converted to a valid date format, the invalid date is converted to the entered value. NULL is supported as a value. When converting the SAP date the two special cases 00000000 and 9999XXXX are checked first.

### Preparation

Defines the action on the target database before the data is inserted into the target table.

| Option | Description | | --- | --- | | *Drop & Create* | Remove table if available and create new table (default). | | *Truncate Or Create* | Empty table if available, otherwise create. | | *Create If Not Exists* | Create table if not available. | | *Prepare Merge* | Prepares the merge process and creates e.g. a temporary staging table, see [Merge Data](#merge-data). | | *None* | No action. | | *Custom SQL* | Here you can define your own script, see [Custom SQL Statements](#custom-sql-statements). |

To only create the table in the first step and not insert any data, you have two options:

1. Copy the SQL statement and execute it directly on the target data database.
1. Select the *None* option for **Row Processing** and execute the extraction.

Once the table is created, it is up to you to change the table definition, e.g., by creating corresponding key fields and indexes or additional fields.

### Row Processing

Defines how the data is inserted into the target table.

| Option | Description | | --- | --- | | *Insert* | Insert records (default). | | *Fill merge staging table* | Insert records into the staging table. | | *None* | No action. | | *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). | | *Merge (deprecated)* | This option is obsolete, see [Merge Data](#merge-data). Use the *Fill merge staging table* option. |

### Finalization

Defines the action on the target database after the data has been successfully inserted into the target table.

| Option | Description | | --- | --- | | *Finalize Merge* | Closes the merge process and deletes the temporary staging table, for example. | | *None* | No action (default). | | *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |

### Transaction style

Note

The available options for Transaction Style vary depending on the destination.

#### One Transaction

*Preparation*, *Row Processing* and *Finalization* are all performed in a single transaction.

- Advantage: clean rollback of all changes.
- Disadvantage: possibly extensive locking during the entire extraction period.

Recommendation

Only use *One Transaction* in combination with DML commands, e.g., "truncate table" and "insert. Using DDL commands commits the active transaction, causing rollback issues for the steps after the DDL command. Example: If a table is created in the preparation step, the opened "OneTransaction" is committed and a rollback in the next steps is not performed correctly.

#### Three Transactions

*Preparation*, *Row Processing* and *Finalization* are each executed in a separate transaction.

- Advantage: clean rollback of the individual sections, possibly shorter locking phases than with *One Transaction* (e.g. with DDL in *Preparation*, the entire DB is only locked during preparation and not for the entire extraction duration).
- Disadvantage: no rollback of previous step possible (error in *Row Processing* only rolls back changes from *Row Processing*, but not *Preparation*).

#### RowProcessingOnly

Only *Row Processing* is executed in a transaction. *Preparation* and *Finalization* without an explicit transaction (implicit commits).

- Advantage: DDL in 'Preparation *and* Finalization\* for DBMS that do not allow DDL in explicit transactions (e.g. AzureDWH)
- Disadvantage: no rollback of *Preparation/Finalization*.

#### No Transaction

No explicit transactions.

- Advantage: no transaction management required by DBMS (locking, DB transaction log, etc.). This means no locking and possible performance advantages.
- Disadvantage: no rollback

## Merge Data

The following example depicts the update of the existing data records in a database by running an extraction to merge data. In this case, merging means changing a value of a field or inserting a new data row or updating an existing record in SAP.

With a merge command, the updated value is written to the destination database table. The merge command ensures delta processing: new records are inserted into the database and / or existing records are updated.

Tip

Alternatively to merging, the data can be also updated by means of full load. The full load method is less efficient.

### Prerequisites

You need a table with existing SAP data, in which new data can be merged.\
Ideally, the table with existing data is created in the initial load with the corresponding **Preparation** option and filled with data with the **Row Processing** option *Insert*.

After the table is created, open SAP and change a field value in the SAP table that is used for the data merge.

Warning

**Faulty merge.**\
Merge commands require a primary key. If no primary key is set, the merge command runs into an error. Create an appropriate primary key in the [General Settings](../../table/general-settings/#primary-key-tab) of the extraction type to execute the merge command.

### Merge Command

The merge process is performed using a staging table and takes place in three steps:

1. A temporary table is created.
1. The data is inserted in the temporary table.
1. The temporary table is merged with the target table and then the temporary table is deleted.

Follow the steps below to set up the merge process in Xtract Universal:

1. In the main window of the Xtract Universal Designer, select an extraction from the list of extractions.
1. Click **[Destination]**. The window "Destination Settings" opens.
1. Make sure to assign IBM Db2 destination to the extraction.
1. Apply the following destination settings:
1. Click **[OK]** and [run the extraction](../../execute-and-automate/run-an-extraction/#run-extractions-in-the-designer).

More information about the updated fields can be found in the SQL statement.\
It is possible to edit the SQL statement if necessary, e.g., to exclude certain columns from the update.\
Fields that do not appear in the SQL statement are not affected by changes.

## Custom SQL Statements

The IBM Db2 destination supports the use of custom SQl statements in the staging steps of the database. Follow the steps below to create custom SQL statements in the IBM Db2 destination:

1. In the main window of the Xtract Universal Designer, select an extraction from the list of extractions..

1. Click **[Destination]**, the window "Destination Settings" opens.

1. Make sure to assign the IBM Db2 destination to the extraction.

1. Select the option *Custom SQL* from the drop-down list in one of the following sections:

   - [Preparation](#preparation)
   - [Row Processing](#row-processing)
   - [Finalization](#finalization)

1. Click **[Edit SQL]** . The window "Edit SQL" opens.

1. Enter your custom SQL statement and click **[OK]** to confirm your input.

### Use Templates

Existing SQL commands can be used as templates.\
You can write your user-defined SQL expressions and adapt the loading of the data to your needs. You can additionally execute stored procedures that exist in the database. To do so, use the SQL templates provided in the following staging steps:

- [Preparation](#preparation), e.g., in *Drop & Create* or *Create if Not Exists*
- [Row Processing](#row-processing), e.g., in *Insert* or *Merge*
- [Finalization](#finalization)

Follow the steps below to generate a Custom SQL command from a template:

1. In one of the staging steps, select the *Custom SQL* option from the drop-down list .
1. Click **[Edit SQL]** . The dialogue "Edit SQL" opens.
1. Navigate to the drop-down menu and select an existing command .
1. Click **[Generate Statement]**. A new statement is generated.
1. Click **[Copy]** to copy the statement to the clipboard.
1. Click **[OK]** to confirm your input.

Check out the [Microsoft SQL Server example](../microsoft-sql-server/#custom-sql-statements) for details on predefined expressions.

Note

The custom SQL code is used for SQL Server destinations. A syntactic adaptation of the code is necessary to use the custom SQL code for other database destinations.

### Use Script Expressions

You can use script expressions for Custom SQL commands. The following Xtract Universal specific custom script expressions are supported:

| Input | Description | | --- | --- | | `#{Extraction.ExtractionName}#` | Name of the extraction. | | `#{Extraction.FullyQualifiedExtractionName}#` | Name of the extraction. If the extraction is part of an [extraction group](../../organize-extractions/), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. | | `#{Extraction.TableName }#` | Name of the database table extracted data is written to. | | `#{Extraction.RowsCount }#` | Count of the extracted rows. | | `#{Extraction.RunState}#` | Status of the extraction (Running, FinishedNoErrors, FinishedErrors, Cancelled). | | `#{(int)Extraction.RunState}#` | Status of the extraction as number (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors, 6 = Cancelled). | | `#{Extraction.Timestamp}#` | Timestamp of the extraction. |

For more information, see [Script Expressions](../../parameters/script-expressions/).

```sql
#{
   iif
   (
      ExistsTable("MAKT"),
      "TRUNCATE TABLE \"MAKT\";",
      "
         CREATE TABLE \"MAKT\"(
            \"MATNR\" VARCHAR(18),
            \"SPRAS\" VARCHAR(2),
            \"MAKTX\" VARCHAR(40));
      "
   )
}#

```

### Create a Status Overview

The table "ExtractionStatistics" provides an overview and status of the executed Xtract Universal extractions. To create the "ExtractionStatistics" table, create an SQL table according to the following example:

```sql
CREATE TABLE [dbo].[ExtractionStatistics](
    [TableName] [nchar](50) NULL,
    [RowsCount] [int] NULL,
    [Timestamp] [nchar](50) NULL,
    [RunState] [nchar](50) NULL
) ON [PRIMARY]
GO

```

The *ExtractionStatistics* table is filled in the **Finalization** process step, using the following SQL statement:

```sql
INSERT INTO [ExtractionStatistics]
(
     [TableName], 
     [RowsCount], 
     [Timestamp],
     [RunState]
)
VALUES
(
     '#{Extraction.TableName}#', 
     '#{Extraction.RowsCount}#', 
     '#{Extraction.Timestamp}#',
     '#{Extraction.RunState}#'
);

```
