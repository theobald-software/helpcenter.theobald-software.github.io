The following article shows how to load data incrementally (daily) from an SAP Table based on date fields. The depicted example scenarios use the table VBAK (SAP Sales Document Header), which has two date fields:

- ERDAT for creation date
- AEDAT for update date

### Extract Data using a Date Parameter

The depicted example extracts data that was created or changed after a specific date. The date is provided as a parameter at runtime.

1. Create a new Xtract Table extraction.

1. Look up a table you want to extract data from, e.g., VBAK.

1. Open the WHERE clause tab of theXtract Table component and enter the following criterion:

   ```text
   ( VBAK~ERDAT GE @LastDate AND VBAK~AEDAT EQ '00000000' ) OR VBAK~AEDAT GE @LastDate

   ```

   This criterion extracts data if one of the following conditions is true:

   - The data was created (ERDAT) after the date provided by the parameter `@LastDate` and it has not been changed (AEDAT).
   - The data has changed (ARDAT) after the date provided by the parameter `@LastDate`.

1. Click **[OK]** to confirm your input.

1. Create a SSIS variable `LastDate` of type string.

1. Enter a value for `LastDate` in the format `YYYYmmDD` when running the SSIS package.

1. Check the results.

### Daily Data Extraction

The depicted example extracts data that was created or changed the day before. The depicted example uses script expressions to query the current date.

1. Create a new Table extraction.

1. Look up a table you want to extract data from, e.g., VBAK.

1. Open the WHERE clause tab of the Table component and enter the following criterion:

   ```text
   (ERDAT >= '#{ DateTime.Now.AddDays(-1).ToString("yyyyMMdd") }#' AND AEDAT = '00000000') OR AEDAT >= '#{ DateTime.Now.AddDays(-1).ToString("yyyyMMdd") }#'` <br>

   ```

   This criterion extracts data if one of the following conditions is true:

   - The data was created (ERDAT) the day before the current date and it has not been changed (AEDAT).
   - The data has changed (ARDAT) the day before the current date.

1. Click **[OK]** to confirm your input.

1. Run the SSIS package.

The extraction can be scheduled every night at 1p.m. or later to extract all changes of the day before. Providing extraction dates is not necessary.

______________________________________________________________________

#### Related Links

- [Xtract Table: WHERE Clause](../../documentation/table/where-clause/)
