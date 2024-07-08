---
title: Microsoft SQL Server
description: Microsoft SQL Server destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to a Microsoft SQL Server Database or a Microsoft Azure SQL Database destination.

## Requirements

No driver installation is required since the ADO .NET driver for SQL Server is delivered and installed as a part of the .NET framework.

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/xu/documentation/destinations/ms-sql/destination-details.png){:class="img-responsive"}

#### Server Name
Specifies the host address of the SQL Server. Please note the following syntax:

|Syntax | Example |
|:---|:---|
|[ServerName]| `dbtest`|
|[ServerName],[Port]| `dbtest,1433`|
|[ServerName].[Domain],[Port] |  `dbtest.theobald.software,1433`|

It is only necessary to specify the port if it has been edited outside the SQL standard.

#### Require TLS encryption
Client-side enforcement for using [TLS encrpytion](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-connect-query#tls-considerations-for-sql-database-connectivity). 
Adds the following parameters to the connection string:

-  Encrypt = On
- TrustServerCertificate = Off

For more information, see [Microsoft Documentation: Enable Encrypted Connections to the Database Engine](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-2017)

#### Windows Authentication
Uses the service account, under which the XU service is running, for authentication against SQL Server.

!!! note 
	To successfully connect to the database using Windows authentication, make sure to [run the XU service under a Windows AD user](../setup/service-account.md) with access to the database.

#### Impersonate authenticated caller
Uses the Windows AD user, executing the extraction, for authentication against SQL Server using [Kerberos authentication.](https://blogs.msdn.microsoft.com/sqlupdates/2014/12/05/sql-server-kerberos-and-spn-quick-reference/)
For using this functionality a similar configuration as for [Kerberos Single Sign On against SAP](../../knowledge-base/sso-with-kerberos-snc.md) is required.

#### User Name
The user name for the SQL Server authentication. 

#### Password
The password for the SQL Server authentication

#### Database Name
Defines the name of the SQL Server database.

#### Test Connection
Checks the database connection. 


{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/xu/documentation/destinations/ms-sql/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md " %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md " %}

{% include "destinations/sql-commands.md" %}

{% include "destinations/debugging-bulk-insert.md" %}

{% include "destinations/transaction-style.md" %} 

{% include "destinations/db-merge-data.md" %} 

{% include "destinations/custom-sql-statements.md" %} 


### Custom SQL Example
In the depicted example, the table *KNA1* is extended by a column with the current timestamp of type *DATETIME*.
The new column is filled dynamically using a .NET-based function. 

!!! note 
	The data types that can be used in the SQL statement depend on the SQL Server database version.

1. In the staging step **Preparation**, select the option *Custom SQL* from the drop-down list and click **[Edit SQL]**. The window "Edit SQL" opens.
2. In the drop-down menu, select the option *Drop & Create* and click **[Generate Statement]** to [use the template](#use-templates) for *Drop & Create*.
3. Add the following line in the generated statement: <br>
	```sql
	[Extraction_Date] NATIONAL CHARACTER VARYING(23)
	```
4. Click **[OK]** to confirm your input. <br>
5. In the staging step **Row Processing**, select the option *Insert*. <br>
At this point, no data is written from the SAP source system, but `NULL` values are written to the newly created *Extraction_Date* column.
6. In the staging step **Finalization**, the `NULL` values can be filled by a custom SQL statement. 
Select the option *Custom SQL* from the drop-down list and click **[Edit SQL]**.  The window "Edit SQL" opens.
7. Paste the following SQl statement into the editor:

	```sql
	UPDATE [dbo].[KNA1] 
	SET [Extraction_Date] = '#{Extraction.Timestamp}#' 
	WHERE [Extraction_Date] IS NULL;
	```

	The `NULL` values are filled with the [current date of the extraction](#use-script-expressions) and written to the SQL target table using the T-SQL command `UPDATE`. <br>
10. Click **[OK]** to confirm your input and [run the extraction](../execute-and-automate/run-an-extraction.md/#run-extractions-in-the-designer).

Check the existence of the extended column *Extraction_Date*  in the SQL Server View of table *KNA1*.<br>
![Custom_SQL_SQL_Server_Ausgabe](../../assets/images/xu/documentation/destinations/ms-sql/sql_server_extraction_date.png){:class="img-responsive"}

## Related Links

- [Knowledge Base Article: Post-Processing Column Name Style](../../knowledge-base/adjust-column-name-style.md)
- [Integration via Azure Data Factory](../execute-and-automate/call-via-etl.md#integration-via-azure-data-factory)
