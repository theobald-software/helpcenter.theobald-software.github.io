The following article shows how to replace most Xtract ODP [provider contexts](../../documentation/odp/provider-context/) with other components.

| Provider Context | Alternative | | --- | --- | | ABAP Core Data Services \[[ABAP_CDS](../../documentation/odp/provider-context/#abap-cds-views)\] | [Xtract Table](../../documentation/table/) | | HANA Information Views \[[HANA](../../documentation/odp/provider-context/#hana-views)\] | [Xtract Table](../../documentation/table/) [Xtract BWCube](../../documentation/bwcube/) | | SAP NetWeaver Business Warehouse or BW4/HANA \[[BW](../../documentation/odp/provider-context/#bw-infoproviders)\] | [Xtract BWCube](../../documentation/bwcube/) [Xtract Table](../../documentation/table/) [Xtract TableCDC](../../documentation/table-cdc/) [Xtract DeltaQ](../../documentation/deltaq/) [Xtract OHS](../../documentation/ohs/) | | Datasources/Extractors \[[SAPI](../../documentation/odp/provider-context/#extractors)\] | [Xtract DeltaQ](../../documentation/deltaq/) | | SAP LT Queue Alias \[[SLT~your_queue_alias](../../documentation/odp/provider-context/#slt-server)\] | [Xtract Table](../../documentation/table/) [Xtract TableCDC](../../documentation/table-cdc/) |

### Extract Data from CDS Views

Alternative for the *ABAP Core Data Services [ABAP_CDS]* provider context:\
To extract data from CDS Views, use the [Xtract Table](../../documentation/table/) component.

Note

When looking up CDS Views in Xtract IS, make sure to look up the name of the DDL SQL View (CDS Database View) instead of the CDS View name.

### Extract Data from HANA Views

Alternative for the *HANA Information Views [HANA]* provider context:\
To extract data from HANA Views, use the [Xtract BWCube](../../documentation/bwcube/) component or the [Xtract Table](../../documentation/table/) component.

- **Extraction via Xtract Table**

  ______________________________________________________________________

  - In SAP, expose the HANA View to ABAP CDS Views, see [SAP Community: How to consume HANA Calculation views in S/4HANA CDS views](https://community.sap.com/t5/technology-blogs-by-members/how-to-consume-hana-calculation-views-in-s-4hana-cds-views/ba-p/13476798).
  - Extract the CDS View using the [Xtract Table](../../documentation/table/) component.

- **Extraction via Xtract BWCube**

  ______________________________________________________________________

  - In SAP, expose the HANA View to CompositeProviders, see [SAP Learning: Consuming a Calculation View with SAP BW/4HANA](https://learning.sap.com/learning-journeys/upgrading-your-sap-bw-skills-to-sap-bw-4hana/consuming-a-calculation-view-with-sap-bw-4hana_ac069075-173b-41fb-bb35-b950b213d407)
  - Extract the CompositeProvider using the [Xtract BWCube](../../documentation/table/) component.

### Extract Data from BW Systems (CompositeProviders, Cubes, InfoObjects, etc.)

Alternative for the *SAP NetWeaver Business Warehouse or BW4/HANA [BW]* provider context:

- To extract data from CompositeProviders, InfoCubes, MultiProviders, aDSO/DSOs etc., use the [Xtract BWCube](../../documentation/bwcube/) component.
- To extract data from InfoObjects (Master data, Text data or Hierarchies), look up the respective tables (P, T, H) in the [Xtract Table](../../documentation/table/) component.
- To extract data from Hierarchy InfoObjects, use the [Xtract Hierarchy](../../documentation/hierarchy/) component.
- To extraxt data from Infocubes and DSOs, convert the Infocubes and DSOs to DataSources and extract the DataSources using the [Xtract DeltaQ](../../documentation/table/) component.
- If you use Open Hub Service (OHS) destinations that can receive data from Cubes, DSOs, aDSOs etc., the data can be extracted using the [Xtract OHS](../../documentation/ohs/) component. You can also run the process chain that writes data to OHS within SAP BW.
  - To extract the data from OHS tables, use the [Xtract Table](../../documentation/table/) component.
  - To extract delta changes (Inserts, Updates, Deletes) from an OHS table, use the [Xtract TableCDC](../../documentation/table-cdc/) component.

### Extract Data from Extractors

Alternative for the *Datasources/Extractors [SAPI]* provider context:\
To extract data from Extractors, use the [Xtract DeltaQ](../../documentation/deltaq/) component.

### Extract Data from Tables

Alternative for the *SAP LT Queue Alias [SLT~your_queue_alias]* provider context:

- To extract data from regular (application) tables, cluster or pooled tables, use the [Xtract Table](../../documentation/table/) component.
- To extract delta changes (Inserts, Updates, Deletes), use the [Xtract TableCDC](../../documentation/table-cdc/) component.

______________________________________________________________________

#### Related Links

- [Guidance on SAP Note 3255746 for Theobald Software Xtract Products](https://theobald-software.com/en/products-technology-en/guidance-on-sap-note-3255746-for-theobald-software-xtract-products/).
