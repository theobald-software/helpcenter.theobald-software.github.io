This page shows how to set up and use the Snowflake destination. The Snowflake destination loads data into a Snowflake environment.

## Requirements

The connection to the Snowflake target environment is made via the ODBC driver for Windows 64-bit architectures. No additional installations are required to use the Snowflake destination.

- Download and install the [SnowflakeDSIIDriver](https://sfc-repo.snowflakecomputing.com/odbc/win64/latest/index.html) on the machines that run the Xtract Universal server and the Xtract Universal Designer.
- To connect through a proxy server, configure the following environment variables: `http_proxy`, `https_proxy`, `no_proxy`.\
  For more information, see [Snowflake: ODBC Configuration and Connection Parameters](https://docs.snowflake.com/en/user-guide/odbc-parameters.html#using-environment-variables).
- The ODBC default port (443) for HTTPS is enabled and allows outbound traffic from the network to Snowflake's services.
- The Snowflake account used to upload data to Snowflake needs the corresponding access and role privileges, see [Snowflake Documentation: Overview of Access Control - Roles](https://docs.snowflake.com/en/user-guide/security-access-control-overview#roles). The following privileges are required:
  - PUT command
  - COPY command
  - TABLE

The Snowflake destination only supports [Snowflake managed data stages](https://docs.snowflake.com/en/user-guide/data-load-local-file-system). To write SAP data to external stages in Snowflake, refer to the [Azure Storage](../azure-storage/), [AWS S3](../amazon-aws-s3/) or [Google Cloud](../google-cloud-storage/) destination.

## Create a new Snowflake Destination

Follow the steps below to add a new Snowflake destination to Xtract Universal:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.
1. Click **[Add]** to create a new destination. The window "Destination Details" opens.
1. Enter a **Name** for the destination.
1. Select the destination type *Snowflake* from the drop-down menu. A list of connection details opens.
1. Fill out the [destination details](#destination-details) to connect to the destination.
1. Click **[OK]** to confirm your input.

The destination can now be assigned to extractions.

### Destination Details

The destination details define the connection to the destination.

### General

#### Output directory

Enter an existing local directory in which the extracted data is written as a csv file.\
Process during an extraction:

- A csv file is created in the output directory.
- Once the file has reached a certain size, it is zipped (gzip), see [File Splitting](#file-splitting).
- The zipped file is uploaded via PUT command to the Snowflake staging area.
- The data is then copied via COPY command to the target table in Snowflake.

This process (gzip + PUT command) repeats itself until the extraction is finished. While running an extraction, the csv files in the local directory and the staging area are deleted.

#### Account Name

Enter the Snowflake authentication account.\
The account name can be derived from the connection URL.

- URL for organization account identifier:\
  `https://[organization]-[account_name].snowflakecomputing.com/console#/`
- URL for region account identifier (legacy):\
  `https://[account_name].[region].[cloud].snowflakecomputing.com/console#/`

#### Database

Enter the name of the Snowflake database.

#### Schema

Enter the schema of the Snowflake database.

#### Role

Enter a Snowflake user role. If no user role is entered, the default user role is used for the connection.

### Account Identifier

#### Organization (preferred)

Enter the name of your organization. Authentication via the account name in your organization is the preferred way of identifying youself against Snowflake, see [Snowflake Documentation: Account Name in Your Organization](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization)

#### Region (legacy)

Select the region of the Snowflake environment from the drop-down-menu. The selected region must match the information in the assigned account.

Note

Regions with the suffix *(legacy)* are deprecated. Select the *(legacy)* option if you connect to Snowflake using an old *Cloud Region ID*. For more information on the current *Cloud Region IDs*, see [Snowflake Documentation: Supported Cloud Regions](https://docs.snowflake.com/en/user-guide/intro-regions.html).

### Authentication

#### Username

Enter the Snowflake authentication user name.

#### Basic

If this option is active, basic authentication is used for authentication. Enter the Snowflake authentication password of the user in the field **Password**.

Warning

**Deprecation of single-factor password sign-ins.**\
Snowflake announced the deprecation of single-factor password sign-ins to enforce more secure authentication. This affects the basic authentication option in Xtract Universal. To comply with the new authentication policy, we recommend using Key Pair authentication. Snowflake will enforce the new authentication policy around June to October 2025. For more information, refer to the [Snowflake Documentation: Deprecation of single-factor password sign-ins](https://docs.snowflake.com/en/user-guide/security-mfa-rollout).

#### Key Pair

If this option is active, key pairs are used for authentication, see [Snowflake Documentation: Key Pair Authentication & Key Pair Rotation](https://docs.snowflake.com/en/user-guide/key-pair-auth). Select the path to your private key in the field **Private Key Path**. Both encrypted and non-encrypted private keys are supported. If you use encrypted private key for authentication, enter the password that is used by snowflake to decrypt it in the field **Key password**.

### Stages

Click **[Test Connection]** to fetch all stages and warehouses from Snowflake. The stages and warehouses then become available for selection.

#### Stage name

Select a Snowflake Stage. Note that only Snowflake managed data stages are displayed.

#### Warehouse

Select a Snowflake Data Warehouse.

## Assign the Snowflake Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
1. Click **[Destination]**. The window “Destination Settings” opens.
1. In the “Destination Settings” window, select your Snowflake destination from the dropdown list.
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

### File Splitting

Writes extraction data of a single extraction to multiple files. Each filename is appended by *\_part[nnn]*.

#### Max. file size

The value set in *Max. file size* determines the maximum size of each file.

Note

The option *Max. file size* does not apply to gzip files. The size of a gzipped file cannot be determined in advance.

### Preparation

Defines the action on the target database before the data is inserted into the target table.

| Option | Description | | --- | --- | | *None* | No action. | | *Drop & Create* | Remove table if available and create new table (default). | | *Truncate Or Create* | Empty table if available, otherwise create. | | *Truncate* | Empty table if available. | | *Create If Not Exists* | Create table if not available. | | *Custom SQL* | Here you can define your own script, see [Custom SQL Statements](#custom-sql-statements). |

To only create the table in the first step and not insert any data, you have two options:

1. Copy the SQL statement and execute it directly on the target data database.
1. Select the *None* option for **Row Processing** and execute the extraction.

Once the table is created, it is up to you to change the table definition, e.g., by creating corresponding key fields and indexes or additional fields.

### Row Processing

Defines how the data is inserted into the target table.

| Option | Description | | --- | --- | | *None* | No action. | | *Copy file to table* | Insert records (default). | | *Merge File to table* | Insert records into the staging table. | | *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |

### Finalization

Defines the action on the target database after the data has been successfully inserted into the target table.

| Option | Description | | --- | --- | | *None* | No action (default). | | *Custom SQL* | Define your own script, see [Custom SQL Statements](#custom-sql-statements). |

### Transaction style

Note

The available options for Transaction Style vary depending on the destination.

#### One Transaction

*Preparation*, *Row Processing* and *Finalization* are all performed in a single transaction.

- Advantage: clean rollback of all changes.
- Disadvantage: possibly extensive locking during the entire extraction period.

Recommendation

Only use *One Transaction* in combination with DML commands, e.g., "truncate table" and "insert. Using DDL commands commits the active transaction, causing rollback issues for the steps after the DDL command. Example: If a table is created in the preparation step, the opened "OneTransaction" is committed and a rollback in the next steps is not performed correctly. For more information, see [Snowflake Documentation: DDL Statements](https://docs.snowflake.com/en/sql-reference/transactions#label-transactions-ddl).

#### RowProcessingOnly

Only *Row Processing* is executed in a transaction. *Preparation* and *Finalization* without an explicit transaction (implicit commits).

- Advantage: DDL in 'Preparation *and* Finalization\* for DBMS that do not allow DDL in explicit transactions (e.g. AzureDWH)
- Disadvantage: no rollback of *Preparation/Finalization*.

#### No Transaction

No explicit transactions.

- Advantage: no transaction management required by DBMS (locking, DB transaction log, etc.). This means no locking and possible performance advantages.
- Disadvantage: no rollback

### Empty Values

Warning

**NULL result in a non-nullable column.**\
By default empty strings are converted to NULL values when uploading data to Snowflake. To deactivate the conversion, disable **Replace empty values with SQL NULL**.

This option controls the Snowflake file format parameter EMPTY_FIELD_AS_NULL. When **Replace empty values with SQL NULL** is active, empty strings are converted to NULL values when uploading data to Snowflake.

### Append Extraction Timestamp

When **Add timestamp column to result set** is active, an additional column *ExtractionTimestamp* is added to the output of the extraction. The timestamp uses the format `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'` (UTC).

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
1. Make sure to assign Snowflake destination to the extraction.
1. Apply the following destination settings:
1. Click **[OK]** and [run the extraction](../../execute-and-automate/run-an-extraction/#run-extractions-in-the-designer).

More information about the updated fields can be found in the SQL statement.\
It is possible to edit the SQL statement if necessary, e.g., to exclude certain columns from the update.\
Fields that do not appear in the SQL statement are not affected by changes.

## Custom SQL Statements

The Snowflake destination supports the use of custom SQl statements in the staging steps of the database. Follow the steps below to create custom SQL statements in the Snowflake destination:

1. In the main window of the Xtract Universal Designer, select an extraction from the list of extractions..

1. Click **[Destination]**, the window "Destination Settings" opens.

1. Make sure to assign the Snowflake destination to the extraction.

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

### Custom SQL Example

In the depicted example, the DataSource *0FI_AP_4* is extended by one column that is filled with the user-defined runtime parameter *RUNTIMEPARAMETER*. The filling of the new column is implemented dynamically in the **Finalization** section of the destination settings.

1. In Snowflake, deselect the **Error on Column Count Mismatch** option in the *XTRACT_UNIVERSAL* File Format.

1. Open the extraction and click **Edit runtime parameter** to create the runtime parameter *RUNTIMEPARAMETER* .

1. Choose a field in the sections *Fields* and click **Edit** to add a selection criterion that uses the runtime parameter .

1. Close the extraction and open the [Destination Settings](#assign-the-snowflake-destination-to-an-extraction) of the extraction.

1. Make sure to assign the Snowflake destination to the extraction.

1. In the staging step **Preparation**, select the option *Custom SQL* from the drop-down list and click **[Edit SQL]**. The window "Edit SQL" opens.

1. In the drop-down menu, select the option *Drop & Create* and click **[Generate Statement]** to [use the template](#use-templates) for *Drop & Create*.

1. Add the following line in the generated statement:

   ```sql
   "RUNTIMEPARAMETER" VARCHAR(4),

   ```

1. Click **[OK]** to confirm your input.

1. In the staging step **Row Processing**, select the option *Copy file to table*.\
   At this point, no data from the SAP source system but `NULL` values are written to the newly created column *RUNTIMEPARAMETER*.

1. In the staging step **Finalization**, the `NULL` values can be filled by a custom SQL statement. Select the option *Custom SQL* from the drop-down list and click **[Edit SQL]**. The window "Edit SQL" opens.

1. Paste the following SQl statement into the editor:

   ```sql
   UPDATE "0FI_AP_4"
   SET RUNTIMEPARAMETER= '@RUNTIMEPARAMETER'
   WHERE RUNTIMEPARAMETER IS NULL;

   ```

   The `NULL` values are filled with the runtime parameter *RUNTIMEPARAMETER* and written into the SQL target table using the T-SQL command `UPDATE`.

1. Click **[OK]** to confirm your input and close the destination settings.

1. Open the "Run Extraction" window of the Designer and enter a value for the runtime parameter , before running the extraction .

Check the existence of the new column *RUNTIMEPARAMETER* in the Snowflake Console of the table *0FI_AP_4*.

______________________________________________________________________

## Related Links

- [Requirements: .NET-Framework](../../setup/requirements/#other-applications-and-frameworks)
- [Requirements: 64-bit Architecture](../../setup/requirements/#hardware)
- [Snowflake Documentation: Installing and Configuring the ODBC Driver for Windows](https://docs.snowflake.com/en/user-guide/odbc-windows.html)
- [Snowflake Documentation: Snowflake Identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers)
- [Knowledge Base Article: Integrate SAP Data into a Snowflake Data Warehouse](../../../knowledge-base/integrate_sap_data_into_a_Snowflake_data_warehouse/)
- [Knowledge Base Article: SAP Integration with Matillion Data Loader](../../../knowledge-base/create-a-custom-cennector-in-matillion-data-loader/)
- [Extraction Parameters](../../parameters/extraction-parameters/#custom)
