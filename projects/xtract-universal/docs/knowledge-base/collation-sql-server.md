---
title: Collation Settings for MSSQL Server Destination
description: example of how to append the collation for a specified column
---

The following article describes a common problem that occurs when pushing SAP data into an SQL server database when collation is not set to case-sensitive.
The depicted example shows how to customize the *Drop & Create* SQL server statement within the {{ productName }} destination settings to accommodate these issues.

### About Collation SQL Server

Collations in SQL Server provide sorting rules, case, and accent sensitivity properties for your data. Collations that are used with character data types, such as *char* and *varchar*, difine the code page and corresponding characters that can be represented for the corresponding data type. 

Collation can be set up on three different levels:
- [Server collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-server-collation?view=sql-server-ver15)
- [Database collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-database-collation?view=sql-server-ver15)
- [Column collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-column-collation?view=sql-server-ver15)

MSSQL server offers different collation statements. The following excerpts provide the necessary adaptions for the given example:

**Option** | **Description**
------------ | -------------
Case-sensitive (_CS) | Distinguishes between uppercase and lowercase letters. If this option is selected, lowercase letters sort ahead of their uppercase versions. If this option isn't selected, the collation is case-insensitive. Which means, SQL Server considers the uppercase and lowercase versions of letters to be identical for sorting purposes. You can explicitly select case insensitivity by specifying _CI.
Accent-sensitive (_AS) | Distinguishes between accented and unaccented characters. For example, "a" is not equal to "ấ". If this option isn't selected, the collation is accent-insensitive. Which means, SQL Server considers the accented and unaccented versions of letters to be identical for sorting purposes. You can explicitly select accent insensitivity by specifying _AI.

For information on usable collations, see [Microsoft Documentation: Collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?redirectedfrom=MSDN&view=sql-server-ver15#Collation_Defn) and [Microsoft Documentation: Collation and Unicode support](https://docs.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?redirectedfrom=MSDN&view=sql-server-ver15). 
The depicted example shows the column collation within {{ productName }} with a [Custom SQL](../documentation/destinations/microsoft-sql-server.md#custom-sql-statements) statement.

### SQL Server Management Studio (SSMS)


Check the database settings.
The following collation statement is displayed: `Latin1_General_100_CI_AI`.

**Option** | **Description**
------------ | -------------
_CI | case-insensitive
_AI | accent-insensitive

![default_collation_statement](../assets/images/articles/xu/collation_example_CI_AI_xu_fas_DB.png)


### Setup in Xtract Universal

Follow the steps below to extract the SAP table *MAKT* from SAP:

1. Create a table extraction, see [Documentation: Table](../documentation/table/index.md).
The look-up process loads the corresponding metadata from our SAP object *MAKT*: 
	1. The composite primary key consists of the table fields *MANDT*, *MATNR*, *SPRAS*, each with a unique constraint.<br>
	![default_collation_statement](../assets/images/articles/xu/makt_metadata.png){:class="img-responsive"}
    2. The SAP field *SPRAS* is of data type *LANG* with a length *1*.<br>
   ![DD_SPRAS](../assets/images/articles/xu/dataDictionary_SPRAS.png){:class="img-responsive"}
2. Create a simple WHERE clause, e.g., `MATNR = '000000000000000038' AND ( SPRAS  = 'd' OR SPRAS = 'D' )`.
3. Click **[Load live preview]**. <br>
The results show that the SAP database interprets the data records with upper-case 'D' and lower-case 'd' in the field *SPRAS* as different data records.
4. Assign an MSSQL server destination to the extraction and click **[Run]**.

The MSSQL server returns the following error:

```
> System.Data.SqlClient.SqlException (0x80131904): Violation of PRIMARY KEY constraint 'PK__makt__3483F06C110B42CD'. 
> Cannot insert  duplicate key in object 'dbo.makt'.The duplicate key value is (800, 000000000000000038, d)
```

### Workaround

As shown in [Setup in Xtract Universal](#setup-in-xtract-universal) the data of MAKT cannot be pushed into the MSSQL server destination due to the collation statement of the database. 
In this case, the user has to customize the SQL statement *Preparation* of the MSSQL destination settings.

1. Change the default value *Drop & Create* to *Custom SQL*.
2. Click **[Edit SQL]** to enter an SQl statement.
3. Select the *Drop & Create* entry from the drop-down menu and click on **[Generate Statement]** for table *MAKT*.
4. Customize the column collation for field *SPRAS* using the following code:

	```sql
	IF (object_id('MAKT') IS NOT NULL)
	BEGIN
	   DROP TABLE [MAKT];
	END;

	CREATE TABLE [MAKT]  
	(
	   [MANDT] NATIONAL CHARACTER VARYING(3) NOT NULL,
	   [MATNR] NATIONAL CHARACTER VARYING(18) NOT NULL,
	   [SPRAS] NATIONAL CHARACTER VARYING(1) COLLATE Latin1_General_100_CS_AS NOT NULL,
	   [MAKTX] NATIONAL CHARACTER VARYING(40),
	   [MAKTG] NATIONAL CHARACTER VARYING(40),
	   PRIMARY KEY
	   (
		  [MANDT], 
		  [MATNR], 
		  [SPRAS]
	   )

	);
	```

5. Click **[OK]** to confirm your input.
6. Run the extraction again. 

The MSSQL server now returns the following message: 

```
Extraction finished successfully
```
