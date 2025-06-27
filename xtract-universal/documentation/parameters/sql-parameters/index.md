In Xtract Universal you can define custom runtime parameters that can be set dynamically when calling extractions. When using an SQL destination, these parameters are available for SQL commands.

A typical use case is the dynamization of WHERE clauses in the Table extraction type. The following table extraction has a custom parameter *WNAME* in the *WHERE-Clause*:

### Custom SQL Statement

In the window [Destination Settings](../../destinations/microsoft-sql-server/#destination-settings) you can use a custom SQL statement for the three database process steps and / or edit the SQL statement according to your requirements.

1. In the main window select an extraction with a custom parameter in the WHERE-Clause .
1. Click **[Destination]** . The window "Destination Settings" opens.
1. Select the option *Custom SQL* from the drop-down-menus in the following sections:
   - Preparation
   - Finalization
1. Click **[Edit SQL]**. The window "Edit SQL" opens.
1. Define an SQL statement and click **[OK]** to confirm your input .

### Custom SQL Example for Custom Parameters

In the following example the SAP table *KNA1* is expanded by adding the column *Custom_Parameter* of the type *NATIONAL CHARACTER VARYING(10)*. The column is filled dynamically by runtime parameters.

In the section **Row Processing** the column values from SAP are written into the previously created SQL target table. This SQL statement is therefore used as the default *Insert* statement. When rows are processed, only `NULL` values are written into the *Custom_Parameter* column.

In the section **Finalization** these `NULL` values are replaced using the SQL statements of the runtime parameter *WNAME* and the T-SQL command `UPDATE`.

Note

The data types that can be used in SQL statements depend on your SQL database version.

1. In the window "Destination Settings", select the option *Custom SQL* in the section **Preparation**. Click **Edit SQL**.

1. Select *Drop & Create* from the drop-down-menu and click **[Generate Statement]** .

1. Add the following line to the generated statement:

   ```sql
   [Custom_Parameter] NATIONAL CHARACTER VARYING(10)

   ```

1. Click **[OK]** to confirm your input.

1. In the window "Destination Settings", select the option *Custom SQL* in the section **Finalization**. Click **Edit SQL**.

1. Select *Insert* from the drop-down-menu and add the following SQL statement :

   ```sql
   UPDATE [dbo].[KNA1] 
   SET [Custom_Parameter] = @WNAME 
   WHERE [Custom_Parameter] IS NULL; 

   ```

1. Click **[OK]** to confirm your input .

### Set the Custom Parameter WNAME

1. Select the checkbox next to the parameter name to overwrite the parameter *WNAME*.
1. Enter the new value *US* and confirm your input by pressing enter.
1. Click **[Run]** to run the extraction.

### Result in SSMS

Check the result of the column *Custom_Parameter* in the SQL Server View of the *KNA1* table.

______________________________________________________________________

#### Related Links

- [Post-Processing Column Name Style](../../../knowledge-base/adjust-column-name-style/)
