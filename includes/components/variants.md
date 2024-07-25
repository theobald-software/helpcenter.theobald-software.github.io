
{% if page.meta.componentFolder == "query" %}

Most queries allow entering selections before query execution.
Selections limit the result set of the query to extract only records that match the selection.<br>
A selection variant can be created in SAP, see [SAP Help: Query Variants](https://help.sap.com/docs/SAP_NETWEAVER_750/40d2cb3a4f9249d58e9bbc95f4dbaff8/4e535406a32c4f49e10000000a42189e.html?locale=en-US). 
The purpose of a variant is to minimize the necessity to enter selections when running a query.

{% endif %}{% if page.meta.componentFolder == "report" %}

Most reports allow entering selections before report execution. 
Selections limit the result set of the report to extract only records that match the selection. 

In SAP a [selection variant](https://help.sap.com/docs/btp/ABAP/3353524716.html) can be created in the input screen of an ABAP report. 
The purpose of a variant is to save selection settings on your input screen and to minimize the necessity to enter selections when running a report.

{% endif %}

!!! note
	Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

### Choose a Variant
Choose a variant from the drop-down-list *Variant*. <br>
When creating a new variant in SAP after creating the extraction, click **[:refresh:]** to load the new variant.

![Variants-Section](../../assets/images/{{ abbr }}/documentation/{{ page.meta.componentFolder }}/variant.png){:class="img-responsive"}

The selections of the variant are **not** displayed in the *Selection Screen* section of the window. 
To see the definition of a variant, open the variant in SAP.

{% if page.meta.product == "xtract-universal" %}

!!! tip
	You can define the variant at runtime by using a corresponding parameter in the extraction URL, see [Extraction Parameters](../parameters/extraction-parameters.md).

{% endif %}
