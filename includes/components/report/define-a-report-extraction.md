

### Look up a Report or Transaction
1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Report Lookup” opens.<br>
![Look-Up-Report](../../assets/images/documentation/components/report/{{ abbr }}/report_main-window_add.png){:class="img-responsive"}	
2. In the field **Report Name**, enter the name of a report to extract :number-1:. Use wildcards (*), if needed.
Alternatively, select **TCODE** to look up SAP Transaction codes. <br>	
![Look-Up-Report](../../assets/images/documentation/components/report/report_look-up.png){:class="img-responsive"}	

	!!! tip
		In certain cases reports cannot be determined based on the TCODE. 
		You can check the report name of a TCODE using the SAP GUI menu **System > Status...**.
		
3. Click **[:magnifying-glass:]** :number-2:. Search results are displayed.
4. Select a report and click **[OK]** to confirm.

The application now returns to the main window of the {{ component }}.

### Define the {{ report }}  {{ Component }}

The {{ report }} {{ component }} offers the following options for report extractions:

1. If the report has variants, select a variant from the drop-down-list *Variant*. For more information, see [Choose a Variant](variants-and-selections.md/#choose-a-variant).<br>
![Variants-Section](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/{{ abbr }}/variant.png){:class="img-responsive"}
2. Optional: In the section *Selection Screen*, edit a selection criterion you want to change or dynamize :number-2:. For more information, see [Edit Selections](variants-and-selections.md/#edit-selections).<br>
![Sections](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/selections.png)
3. Click {{ previewBtn }} to display a live preview of the first 100 records.
4. Optional: If your report has varying column widths, activate **Dynamic column widths and offsets**.
The column widths and offsets are then adjusted dynamically at report runtime. 
5. Click **[Automatically detect columns]** to execute the report based on the selected variant or selections and detect columns automatically.<br>
![Report-automatic-columns](../../assets/images/documentation/components/report/Report_new_automatic_columns.png){:class="img-responsive"} 
6. Check if the automatically detected columns are accurate. <br>
When automatic column detection is not possible, the column names, widths and offsets must be set manually, see [Define Columns manually](report-columns-define.md/#define-columns-manually).
7. Optional: Define row settings to remove or parse certain rows, see [Define Rows](report-rows-define.md).
8. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the {{ extraction }}.
9. Click **[OK]** to save the {{ component }}.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% endif %}.


### Example Extraction

The depicted example shows how to set up a simple report extraction:

1. Look up report RLT10010 (Evaluation of Movements per Storage Type).
2. Select variant *VAR01*.
3. Load a live preview.
4. Automatically detect columns.
5. Remove the header (skip the first 8 rows).

![Report-Animation](../../assets/images/documentation/components/report/report.gif){:class="img-responsive" style="border:1px solid black;"}

