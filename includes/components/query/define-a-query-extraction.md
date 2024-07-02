
### Look up an SAP Query
1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window "Query Lookup" opens.<br>
![Query_main-window_add](../../assets/images/{{ abbr }}/documentation/query/query_main-window_add.png){:class="img-responsive"}
2. Enter the name of an SAP query in the field **Query Name** or the name of a user group in the field **User group** :number-1:. 
Use wildcards (*) if needed.<br>
![Look-Up-Query](../../assets/images/documentation/components/Query/Query_look-up.png){:class="img-responsive"}
3. Select the query work area that contains the query object :number-2:. For more information, see [SAP Documentation: Query Areas](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/4e/3bdad0b8503b0fe10000000a42189e/frameset.htm).
4. Click **[:magnifying-glass:]**. Search results are displayed.
4. Select a query :number-3: and click **[OK]**.

The application returns to the main window of the {{ component }}.

### Define the {{ query }} {{ Component }}

The {{ query }} {{ component }} offers the following options for query extractions:

1. If the SAP query has variants, select a variant from the drop-down-list *Variant*. For more information, see [Choose a Variant](variants-and-selections.md/#choose-a-variant).<br>
![Variants-Section](../../assets/images/{{ abbr }}/documentation/{{ page.meta.componentFolder }}/variant.png){:class="img-responsive"}
2. In the section *Selection Screen*, edit a selection criterion you want to change or dynamize :number-2:. For more information, see [Edit Selections](variants-and-selections.md/#edit-selections).<br>
![Sections](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/selections.png)
3. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the {{ extraction }}.
4. Click **[OK]** to save the {{ component }}.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% endif %}.
