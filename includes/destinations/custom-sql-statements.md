
## Custom SQL Statements

The {{ page.meta.title }} destination supports the use of custom SQl statements in the staging steps of the database.
Follow the steps below to create custom SQL statements in the {{ page.meta.title }} destination:

1. In the main window of the Xtract Universal Designer, select an extraction from the list of extractions..
2. Click **[:designer-destination:Destination]**, the window "Destination Settings" opens.
3. Make sure to assign the {{ page.meta.title }} destination to the extraction.
4. Select the option *Custom SQL* from the drop-down list :number-1: in one of the following sections:
	- [Preparation](#preparation)
	- [Row Processing](#row-processing)
	- [Finalization](#finalization)
	
	![Formula-ExistsTable](../../assets/images/documentation/destinations/ms-sql/custom-sql.png){:class="img-responsive"}
4. Click **[Edit SQL]** :number-2:. The window "Edit SQL" opens.
5. Enter your custom SQL statement and click **[OK]** to confirm your input.


### Use Templates

Existing SQL commands can be used as templates.<br>
You can write your user-defined SQL expressions and adapt the loading of the data to your needs.
You can additionally execute stored procedures that exist in the database.
To do so, use the SQL templates provided in the following staging steps:

- [Preparation](#preparation), e.g., in *Drop & Create* or *Create if Not Exists*
- [Row Processing](#row-processing), e.g., in *Insert* or *Merge*
- [Finalization](#finalization)

Follow the steps below to generate a Custom SQL command from a template:

1. In one of the staging steps, select the *Custom SQL* option from the drop-down list :number-1:.
2. Click **[Edit SQL]** :number-2:. The dialogue "Edit SQL" opens.<br>
![Formula-ExistsTable](../../assets/images/documentation/destinations/ms-sql/custom-sql.png){:class="img-responsive"}
3. Navigate to the drop-down menu and select an existing command :number-3:. 
4. Click **[Generate Statement]**. A new statement is generated.<br>
![Formula-ExistsTable](../../assets/images/documentation/destinations/ms-sql/custom-sql-generate-statement.png){:class="img-responsive"}
5. Click **[Copy]** to copy the statement to the clipboard.
6. Click **[OK]** to confirm your input.

Check out the [Microsoft SQL Server example](microsoft-sql-server.md#custom-sql-statements) for details on predefined expressions.

!!! note
	The custom SQL code is used for SQL Server destinations. 
	A syntactic adaptation of the code is necessary to use the custom SQL code for other database destinations.

### Use Script Expressions

<!--- --8<-- [start:script] -->

You can use script expressions for Custom SQL commands.
The following Xtract Universal specific custom script expressions are supported: 

| Input                                                   | Description|
|:--------------------------------------------------------|:-----------|
|<pre>#{Extraction.ExtractionName}#</pre> | Name of the extraction.  |
|<pre>#{Extraction.FullyQualifiedExtractionName}#</pre> | Name of the extraction. If the extraction is part of an [extraction group](../organize-extractions.md), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. |
|<pre>#{Extraction.TableName }#</pre> |  Name of the database table extracted data is written to. |
|<pre>#{Extraction.RowsCount }#</pre> | Count of the extracted rows. |
|<pre>#{Extraction.RunState}#</pre> |  Status of the extraction (Running, FinishedNoErrors, FinishedErrors). |
|<pre>#{(int)Extraction.RunState}#</pre> |  Status of the extraction as number (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors). |
|<pre>#{Extraction.Timestamp}#</pre> |  Timestamp of the extraction.  |

<!--- --8<-- [end:script] -->

For more information, see [Script Expressions](../parameters/script-expressions.md).

```sql linenums="1" title="Example: Verify the existence of a table in a database using 'ExistsTable'"
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

The table "ExtractionStatistics" provides an overview and status of the executed Xtract Universal extractions.
To create the "ExtractionStatistics" table, create an SQL table according to the following example:

```sql linenums="1" title="Create ExtractionStatistics"
CREATE TABLE [dbo].[ExtractionStatistics](
	[TableName] [nchar](50) NULL,
	[RowsCount] [int] NULL,
	[Timestamp] [nchar](50) NULL,
	[RunState] [nchar](50) NULL
) ON [PRIMARY]
GO
```

The *ExtractionStatistics* table is filled in the **Finalization** process step, using the following SQL statement:

```sql linenums="1" title="Fill ExtractionStatistics"
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
