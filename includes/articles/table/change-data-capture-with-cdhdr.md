
The following article shows how to load data incrementally (daily) from an SAP Table with no delta pointers / date fields.
The depicted example scenario uses two tables:

- MAKT (Material Descriptions), which has no date fields.
- CDHDR (Change Documents Header), which holds the header information of the changed records.
CDHDR is used to determine the delta information of MAKT and other tables.

### Prerequisites

- Prepare a record for the delta extraction:<br>
Change the description of a material in MAKT, e.g., change the description “ABC” of material 2593 to "Test_delta”.<br>
![MAKT-change](../assets/images/articles/table/MAKT-change.png){:class="img-responsive"}
- Check if CDHDR registered the change:<br>
Filter the field UPDATE for today's date. The change made in MAKT should be listed.<br>
![CDHDR-change](../assets/images/articles/table/CDHDR-change.png){:class="img-responsive"}

### Daily Data Extraction

The following steps describe how to only extract the data from MAKT that has been changed on today’s date.

1. Create a new Table extraction.
2. Look up the tables MAKT and CDHDR.<br>
![CDHDR-MAKT](../assets/images/articles/table/CDHDR-MAKT.png){:class="img-responsive"}
3. Select the fields OBJECTID and UDATE from CDHDR for the output.<br>
	- OBJECTID contains information about the Key on which the changes are made. 
	This field is used for joining the tables and to get the delta data from MAKT.
	- UDATE contains the date on which updates occurred. This field is used to filter the data for specific dates.
4. Select the fields you want to extract from MAKT for the output (MATNR is mandatory).
5. Open the tab *Joins* and click **[Add]**. The window "Join" opens. <br>
![CDHDR-MAKT-Join](../assets/images/articles/table/CDHDR-MAKT-Join.png){:class="img-responsive"}
6. Select the join type *INNER_JOIN* to combine the tables CDHDR and MAKT.
The OBJECTID from CDHDR and MATNR from MAKT have same entries and thus form an inner join condition.<br>
7. Click **[Add]** and confirm your selection with **[OK]**.
8. Open the tab *WHERE Clause* and enter the following filter criteria:
```
CDHDR~UDATE = '#{ DateTime.Now.ToString("yyyyMMdd") }#'
```
This criteria uses script expressions to get the current date in the SAP format ("yyyyMMdd").
![CDHDR-MAKT-where](../assets/images/articles/table/CDHDR-MAKT-where.png){:class="img-responsive"}
9. Click **[Load live review]** to check the results.
Only the data in MAKT that has been changed on today's date is extracted.
10. Schedule the {{ extraction }} daily. 

!!! tip

	To extract all changes of the day before, change the WHERE clause to `CDHDR~UDATE >= '#{ DateTime.Now.AddDays(-1).ToString("yyyyMMdd") }#'` and schedule the extraction every night at 1p.m. or later. 

*****

#### Related Links
- [Delta Table Extraction](delta-table-extraction.md)
- [{{ table }}: WHERE Clause](../documentation/table/where-clause.md)