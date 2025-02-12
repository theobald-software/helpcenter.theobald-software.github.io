
### Edit Selections

{% if page.meta.componentFolder == "deltaq" %}

!!! note
	Do not define selections when using the update mode Delta Update, because the selections of the Init mode are automatically applied.

{% endif %} 
{% if  page.meta.componentFolder != "odp" and page.meta.componentFolder != "deltaq" and page.meta.componentFolder != "odata"%}

The *Selection Screen* in the main window of the component corresponds to the input screen in SAP.

!!! note
	Some selection fields only have a technical name and no description. 
	To understand which field corresponds to a field in SAP, open the input screen in SAP. 
	Click on a selection field and press the function key ++f1++ to display the technical name of the selection field. 

{% endif %}

Follow the steps below to edit selection fields and filter data:

1. In the subsection {% if page.meta.componentFolder == "deltaq" %}*OLTP Fields*, click **Edit** {% elif page.meta.componentFolder == "odp" %}*Fields*, click **Edit** {% else %}*Selection Screen*, click **[Edit]** {% endif %}next to the field you want to edit. The window “Edit selection” opens.<br>
![Sections](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/selections.png)
2. Click **[Single]**{% if page.meta.product != "xtract-is" %}, **[Range]** or **[List]**{% else %} or **[Range]**{% endif %} to add a corresponding filter, see [Filter Options](#filter-options).
3. In the column **Sign** :number-1:, select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.<br>
{% if page.meta.product != "xtract-is" %}![edit-selections](../../assets/images/documentation/components/edit-selections.png){:class="img-responsive"}{% else %}![edit-selections](../../assets/images/documentation/components/edit-selections-xis.png){:class="img-responsive"}{% endif %}
4. In the column **Option** :number-2:, select an operator, see [Filter Options](#filter-options). 
5. In the column **Value**, enter values directly into the input fields **Low** and **High** or assign existing {% if page.meta.product != "xtract-is" %} [{{ variables }}](edit-runtime-parameters.md) {% else %} {{ variables }} {% endif %} to the selection fields :number-3:.

	!!! note
		When {{ variables }} are available, you can use the icon button next to the input field to switch between static values (:runtime-parameters-static:) and {{ variables }} (:runtime-parameters-dynamic:).

6. Click **[OK]** to confirm your input. 
{% if page.meta.componentFolder != "query" and page.meta.componentFolder != "query" %}7. Click {{ previewBtn }} in the main window of the {{ component }} to check the result of your selection. 
If {{ variables }} are defined, you are prompted to populate the parameters with actual values.
{% endif %}

{% if page.meta.componentFolder != "deltaq" and page.meta.componentFolder != "odp" %}

Note that edited selection fields overwrite the selection fields in the variant. 

!!! tip
	If you use multiple selection parameters, it is more efficient to create a variant in SAP.

{% endif %}
