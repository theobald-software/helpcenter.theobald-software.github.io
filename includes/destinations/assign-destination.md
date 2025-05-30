
{% if page.meta.id == "mirroring" %}

## Assign the {{ page.meta.title }} Destination to an Extraction

Extractions write data to their assigned destination. 
The {{ page.meta.title }} destination only supports [{{ tableCDC }}](../table-cdc/index.md) extractions.
Follow the steps below to assign a destination to a {{ tableCDC }} extraction:

1. In the main window of the Designer, select a {{ tableCDC }} extraction.
2. Click **[:designer-destination:Destination]**. The window “Destination Settings” opens.<br>
![xu_designer_destination](../../assets/images/documentation/destinations/fabric-mirroring/xu_designer_mirroring-destination.png){:class="img-responsive"}
3. In the “Destination Settings” window, select your {{ page.meta.title }} destination from the dropdown list.<br>
![assign-destination](../../assets/images/documentation/destinations/assign-destination.png){:class="img-responsive"}
4. Optional: edit the [destination settings](#destination-settings).
5. Click **[OK]** to confirm your input.

When running the extraction, the extracted SAP data is now written to the destination.

{% else %}

## Assign the {{ page.meta.title }} Destination to an Extraction

Extractions write data to their assigned destination. Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
2. Click **[:designer-destination:Destination]**. The window “Destination Settings” opens.<br>
![xu_designer_destination](../../assets/images/documentation/destinations/xu_designer_destination.png){:class="img-responsive"}
3. In the “Destination Settings” window, select your {{ page.meta.title }} destination from the dropdown list.<br>
![assign-destination](../../assets/images/documentation/destinations/assign-destination.png){:class="img-responsive"}
4. Optional: edit the [destination settings](#destination-settings).
5. Click **[OK]** to confirm your input.

When running the extraction, the extracted SAP data is now written to the destination.

{% endif %}

### Destination Settings

The destination settings only affect the extraction that the destination is assigned to.
To open the destination settings, select an extraction in the main window of the Designer and click **[:designer-destination:Destination]**.
The window "Destination Settings" opens.
