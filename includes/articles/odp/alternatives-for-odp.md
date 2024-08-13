

The following article shows how to replace most {{ odp }} [provider contexts](../documentation/odp/provider-context.md) with other {{ components }}.

Aside from the {{ components }} presented in this article, {{ productName }} will offer ODP via OData protocol. 
The OData connectivity is currently in development and scheduled to be released in Q4 2024.
For more information, see [Guidance on SAP Note 3255746 for Theobald Software Xtract Products](https://theobald-software.com/en/products-technology-en/guidance-on-sap-note-3255746-for-theobald-software-xtract-products/).

| Provider Context | Alternative | 
|-------------|-------------|
| ABAP Core Data Services [[ABAP_CDS](../documentation/odp/provider-context.md/#abap-cds-views)] | [{{ table }}](../documentation/table/index.md) | 
| HANA Information Views [[HANA](../documentation/odp/provider-context.md/#hana-views)] | [{{ table }}](../documentation/table/index.md)<br> [{{ bwcube }}](../documentation/bwcube/index.md) |
| SAP NetWeaver Business Warehouse or BW4/HANA [[BW](../documentation/odp/provider-context.md/#bw-infoproviders)] | [{{ bwcube }}](../documentation/bwcube/index.md)<br> [{{ table }}](../documentation/table/index.md){% if page.meta.product != "xtract-for-alteryx" %} <br> [{{ tableCDC }}](../documentation/table-cdc/index.md) <br> [{{ deltaq }}](../documentation/deltaq/index.md)<br> [{{ ohs }}](../documentation/ohs/index.md){% endif %} | 
| Datasources/Extractors [[SAPI](../documentation/odp/provider-context.md/#extractors)] |  {% if page.meta.product == "xtract-for-alteryx" %} - {% else %} [{{ deltaq }}](../documentation/deltaq/index.md) {% endif %} | 
| SAP LT Queue Alias [[SLT~your_queue_alias](../documentation/odp/provider-context.md/#slt-server)] | [{{ table }}](../documentation/table/index.md){% if page.meta.product != "xtract-for-alteryx" %} <br> [{{ tableCDC }}](../documentation/table-cdc/index.md) {% endif %} | 

 
### Extract Data from CDS Views

Alternative for the *ABAP Core Data Services [ABAP_CDS]* provider context:<br>
To extract data from CDS Views, use the [{{ table }}](../documentation/table/index.md) {{ component }}.

!!! note
	When looking up CDS Views in {{ productName }}, make sure to look up the name of the DDL SQL View (CDS Database View) instead of the CDS View name.

=== "CDS Views in {{ odp }}"

	![odp-abap-cds](../assets/images/{{ abbr }}/articles/odp/odp-abap-cds.png)
		
=== "CDS Views in {{ table }}"

	![odp-abap-cds](../assets/images/{{ abbr }}/articles/odp/table-abap-cds.png)


### Extract Data from HANA Views

Alternative for the *HANA Information Views [HANA]* provider context:<br>
To extract data from HANA Views, use the [{{ bwcube }}](../documentation/bwcube/index.md) {{ component }} or the [{{ table }}](../documentation/table/index.md) {{ component }}.<br>

<div class="grid cards" markdown>


-   :component-table: __Extraction via {{ table }}__

    ---

    - In SAP, expose the HANA View to ABAP CDS Views, see [SAP Community: How to consume HANA Calculation views in S/4HANA CDS views](https://community.sap.com/t5/technology-blogs-by-members/how-to-consume-hana-calculation-views-in-s-4hana-cds-views/ba-p/13476798).
	- Extract the CDS View using the [{{ table }}](../documentation/table/index.md) {{ component }}.

-   :component-bwcube: __Extraction via {{ bwcube }}__

    ---

    - In SAP, expose the HANA View to CompositeProviders, see [SAP Learning: Consuming a Calculation View with SAP BW/4HANA](https://learning.sap.com/learning-journeys/upgrading-your-sap-bw-skills-to-sap-bw-4hana/consuming-a-calculation-view-with-sap-bw-4hana_ac069075-173b-41fb-bb35-b950b213d407)
	- Extract the CompositeProvider using the [{{ bwcube }}](../documentation/table/index.md) {{ component }}.

</div>

### Extract Data from BW Systems (CompositeProviders, Cubes, InfoObjects, etc.)

Alternative for the *SAP NetWeaver Business Warehouse or BW4/HANA [BW]* provider context:
- To extract data from CompositeProviders, InfoCubes, MultiProviders, aDSO/DSOs etc., use the [{{ bwcube }}](../documentation/bwcube/index.md) {{ component }}.
- To extract data from InfoObjects (Master data, Text data or Hierarchies), look up the respective tables (P, T, H) in the [{{ table }}](../documentation/table/index.md) {{ component }}.
- To extract data from Hierarchy InfoObjects, use the [{{ hierarchy }}](../documentation/hierarchy/index.md) {{ component }}.
{% if page.meta.product != "xtract-for-alteryx" %}- To extraxt data from Infocubes and DSOs, convert the Infocubes and DSOs to DataSources and extract the DataSources using the [{{ deltaq }}](../documentation/table/index.md) {{ component }}.<br>
![export-datsources](../assets/images/articles/odp/export-datasources.png)
- If you use Open Hub Service (OHS) destinations that can receive data from Cubes, DSOs, aDSOs etc., the data can be extracted using the [{{ ohs }}](../documentation/ohs/index.md) {{ component }}. 
You can also run the process chain that writes data to OHS within SAP BW.
	- To extract the data from OHS tables, use the [{{ table }}](../documentation/table/index.md) {{ component }}.
	- To extract delta changes (Inserts, Updates, Deletes) from an OHS table, use the [{{ tableCDC }}](../documentation/table-cdc/index.md) {{ component }}.

### Extract Data from Extractors

Alternative for the *Datasources/Extractors [SAPI]* provider context:<br>
To extract data from Extractors, use the [{{ deltaq }}](../documentation/deltaq/index.md) {{ component }}.

=== "Extractors in {{ odp }}"

	![odp-abap-cds](../assets/images/{{ abbr }}/articles/odp/odp-sapi.png)
		
=== "Extractors in {{ deltaq }}"

	![odp-abap-cds](../assets/images/{{ abbr }}/articles/odp/deltaq-sapi.png)

{% endif %}

### Extract Data from Tables

Alternative for the *SAP LT Queue Alias [SLT~your_queue_alias]* provider context:<br>
{% if page.meta.product == "xtract-for-alteryx" %}To extract data from regular (application) tables, cluster or pooled tables, use the [{{ table }}](../documentation/table/index.md) {{ component }}.
{% else %}
- To extract data from regular (application) tables, cluster or pooled tables, use the [{{ table }}](../documentation/table/index.md) {{ component }}.
- To extract delta changes (Inserts, Updates, Deletes), use the [{{ tableCDC }}](../documentation/table-cdc/index.md) {{ component }}.
{% endif %}

<!---

=== "Tables in {{ odp }}"

	Coming soon...
		
=== "Tables in {{ table }}"

	Coming soon...
		
{% if page.meta.product != "xtract-for-alteryx" %}

=== "Tables in {{ tableCDC }}"

	Coming soon...
		
{% endif %}

-->