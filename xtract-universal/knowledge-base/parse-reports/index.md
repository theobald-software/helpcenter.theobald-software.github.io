This articles shows how to use Xtract Universal to parse ABAP reports that contain groups of data sets and merge them into a single data set. The depicted example uses the report *FBL3N* that contains multiple groups where each group has its own header and calculation rows.

The article leads you through the following steps to merge all groups into a single data set:

- [Remove rows](#remove-rows) that calculate the content of the rows before.
- [Select a header](#select-a-header) for the report and remove duplicates.
- [Parse rows that contain additional headers as columns.](#parse-rows-with-additional-headers-as-columns)

### Remove Rows

Follow the steps below to remove rows that calculate the content of the rows before. Calculation rows are marked with an * symbol.

1. [Look up](../../documentation/report/#look-up-a-report-or-transaction) a report that contains groups of data. The depicted example uses report FBL3N (RFITEMGL).
1. If the report has variants, [select a variant](../../documentation/report/variants-and-selections/#choose-a-variant).
1. Click **[Load Preview]** to load a preview of the first 100 rows.
1. Click **[Automatically detect columns]** to define the columns of the report.
1. Open the tab *Skip and Parse Rows*.
1. Click **[Add rows to skip]**.
1. To remove calculation rows, enter the keyword \*.\
   All rows that contain the keyword are displayed in a gray font in the preview section.
1. To remove additional rows that separate calculation rows and headers, enter the keyword ---.
1. Click **[OK]** to save the changes.

The calculation rows are skipped during the report extraction.\
For more information on how to manipulate rows in report extractions, see [Documentation: Define Rows](../../documentation/report/report-rows-define/).

### Select a Header

Follow the steps below to select one of multiple available headers as the report header:

1. Open the report extraction from [Remove Rows](#remove-rows) or any other report that contains multiple headers.

1. Click **[Load Preview]** to load a preview of the first 100 rows.

1. Open the tab *Skip and Parse Rows*.

1. In the preview section, right-click the header row and select **Select as header** from the context menu. All rows that contain the header are displayed in a blue font in the preview section.

   Tip

   If the header is not part of the preview (first 100 rows of the report), enter a pattern in the field [**Header pattern**](../../documentation/report/report-rows-define/#header-pattern) to scan all report rows for the pattern.

1. Click **[OK]** to save the changes.

The report parses the selected header as the report header during report extraction.\
Any duplicates of the header are removed from the result set.

### Parse Rows with Additional Headers as Columns

Follow the steps below to parse header rows that contain information about a data set as columns. The depicted example parses the header rows containing the *G/L Account* number and the *Company Code* of a data set as columns.

1. Open the report extraction from [Select a Header](#select-a-header) or any other report that contains multiple headers.

1. Click **[Load Preview]** to load a preview of the first 100 rows.

1. Open the tab *Skip and Parse Rows*.

1. Click **[Add row to parse as column]** to add a new column.

1. Click **[]**. The window "Parse Helper" opens and a new preview of the report data is fetched. This can take a while.

1. Under **Search keyword** enter a unique keyword from the row you want to parse as a column. Matching rows are displayed in the preview section of the window.

1. Make sure only header rows are displayed in the preview section. If the preview includes regular rows, edit the keyword until only header rows remain.

1. Under **New Column Name** enter a name for the new column.

1. Mark the content of the column in the preview section by pressing and dragging the mouse pointer over the length of the content.

1. Click **[OK]** to save the column properties. All rows that will be parsed as a column are displayed in a blue font in the preview section.

1. Repeat steps 4 to 9 for the *Company Code*.

   Tip

   If the *Company Code* is not relevant for your report analysis, remove the corresponding header row from the result set, see [Remove Rows](#remove-rows).

1. Click **[OK]** to save the changes.

1. Run the extraction and check if the rows are parsed correctly.

The extracted report returns a single data set that includes the content of all original data set groups.

______________________________________________________________________

#### Related Links

- [Report](../../documentation/report/)
- [Skip Rows by Keyword](../../documentation/report/report-rows-define/#skip-rows-by-keyword)
