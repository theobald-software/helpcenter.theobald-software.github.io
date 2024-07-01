
### Look Up Extractors or Hierarchies


=== "Look Up Extractors"
	1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Look Up OLTP Source” opens.<br>
	![DeltaQ](../../assets/images/{{ abbr }}/documentation/deltaq/deltaq_main-window_add.png){:class="img-responsive"}
	2. In the field **Name**, enter the name of a DataSource :number-1:. Use wildcards ( * ), if needed.<br>
	![search-ds-mat-attr](../../assets/images/documentation/components/deltaq/deltaq_look-up.png){:class="img-responsive"}
	3. Click **[:magnifying-glass:]**. Search results are displayed.
	4. Select an extractor :number-2: and click **[OK]** to confirm.

=== "Look Up Hierarchies"
	1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Look Up OLTP Source” opens<br>
	![DeltaQ](../../assets/images/{{ abbr }}/documentation/deltaq/deltaq_main-window_add.png){:class="img-responsive"}
	2. In the field **Name**, enter the name of a Hierarchy :number-1:. Use wildcards ( * ), if needed.
	Alternatively, enter the description of a Hierarchy in the field **Description**. <br>
	![search-ds-mat-attr](../../assets/images/documentation/components/deltaq/deltaq_look-up-hierarchies1.png){:class="img-responsive"}
	3. Click **[:magnifying-glass:]**.  Search results are displayed.
	4. Select an extractor of type *HIER* :number-2: and click **[OK]** to confirm. All available Hierarchies are fetched and the window "Look Up DeltaQ Hierarchies" opens.
	5. Select a Hierarchy :number-3: and click **[OK]** to confirm. <br>
	![search-ds-mat-attr](../../assets/images/documentation/components/deltaq/deltaq_look-up-hierarchies.png){:class="img-responsive"}


The application now returns to the main window of the {{ component }}.

### Define the {{ deltaq }} {{ component }}

The {{ deltaq }} {{ component }} offers the following options for DataSource extractions:

=== "{{ deltaq }} with Extractors"
	1. Navigate to **Gateway** and click **[:magnifying-glass:]** :number-1: to look up an RFC destination. 
	For more information, see [DeltaQ Customizing: Gateway](deltaq-customization.md/#gateway).<br>
	![DeltaQ2](../../assets/images/{{ abbr }}/documentation/deltaq/DeltaQ2.png){:class="img-responsive"}
	2. Navigate to **Logical Destination** and click **[:magnifying-glass:]** :number-2: to look up a logical RFC target system. 
	For more information, see [DeltaQ Customizing: Logical Destination](deltaq-customization.md/#logical-destination).
	3. Click **Customizing Check** :number-3: to validate the DeltaQ Customizing on the SAP system.
	Make sure that all check marks are green. For more information, see [DeltaQ Customizing: Customizing Check](deltaq-customization.md/#customizing-check).<br>
	![customizing-check-successful](../../assets/images/documentation/components/deltaq/customizing-check-successfull.png){:class="img-responsive"}
	4. Select an [Update Mode](update-mode.md), e.g., to initialize delta extractions.
	5. Select the items you want to extract.<br>
	![DeltaQ-output](../../assets/images/documentation/components/deltaq/DeltaQ-output.png){:class="img-responsive"}
	6. Optional: click the **Edit** option next to an item to [filter the data](selections.md).
	{% if page.meta.product != "xtract-is" %}7. Click **[Run]** to testrun the extraction and validate your settings.{% endif %}
	8. Click **[Activate]** to activate the extraction in SAP. After a successful activation, a corresponding status message opens:<br>
	![Deltaq-System-Parameters-Info](../../assets/images/documentation/components/deltaq/Deltaq-System-Parameters-Info.png){:class="img-responsive"}
			
		!!! note
			The activation is only required for the update modes *Delta*, *Full* or *Init*.
			Do not activate the extraction for the *Delta Update* mode. 
			
	7. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the extraction.
	8. Click **[OK]** to save the {{ component }}.

=== "{{ deltaq }} with Hierarchies"
	1. Navigate to **Gateway** and click **[:magnifying-glass:]** :number-1: to look up an RFC destination. 
	For more information, see [DeltaQ Customizing: Gateway](deltaq-customization.md/#gateway).<br>
	![DeltaQ2](../../assets/images/{{ abbr }}/documentation/deltaq/DeltaQ2.png){:class="img-responsive"}
	2. Navigate to **Logical Destination** and click **[:magnifying-glass:]** :number-2: to look up a logical RFC target system. 
	For more information, see [DeltaQ Customizing: Logical Destination](deltaq-customization.md/#logical-destination).
	3. Click **Customizing Check** :number-3: to validate the DeltaQ Customizing on the SAP system.
	Make sure that all check marks are green. For more information, see [DeltaQ Customizing: Customizing Check](deltaq-customization.md/#customizing-check).<br>
	![customizing-check-successful](../../assets/images/documentation/components/deltaq/customizing-check-successfull.png){:class="img-responsive"}
	4. Select an [Update Mode](update-mode.md), e.g., to initialize delta extractions.
	5. Select the items you want to extract.<br>
	![DeltaQ-output](../../assets/images/documentation/components/deltaq/DeltaQ-output.png){:class="img-responsive"}
	6. Optional: click the **Edit** option next to an item to [filter the data](selections.md).
	7. Optional: click {{ settingsBtn }} to set the language and output format of the Hierarchy, see [{{ settings }}](settings.md). 
	{% if page.meta.product != "xtract-is" %}8. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the extraction.
	9. Click **[Run]** to testrun the extraction and validate your settings.{% endif %}
	10. Click **[OK]** to save the {{ component }}.
	
	!!! tip
		Unlike attributes and transactions, Hierarchies do not have to be activated.
		
You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% endif %}.

### Execute DeltaQ in Parallel

When extracting multiple DataSources in parallel, it is recommended to use separate RFC destinations, e.g., XTRACT01, XTRACT02, etc.<br>
Parallel execution of DataSources with an identical RFC destination is possible, but not recommended.
