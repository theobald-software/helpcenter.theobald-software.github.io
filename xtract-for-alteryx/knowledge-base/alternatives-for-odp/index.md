The following article shows how to replace most Xtract ODP [provider contexts](../../documentation/odp/provider-context/) with other components.

Aside from the components presented in this article, Xtract for Alteryx offers the [Xtract ODP (OData)](../../documentation/odp-odata/) component that enables users to extract ODP data via OData protocol. While Xtract ODP (OData) covers all provider contexts, the extraction time for large data sets is longer compared to components that use the standard RFC protocol.

| Provider Context | Alternative | | --- | --- | | ABAP Core Data Services \[[ABAP_CDS](../../documentation/odp/provider-context/#abap-cds-views)\] | [Xtract Table](../../documentation/table/) | | HANA Information Views \[[HANA](../../documentation/odp/provider-context/#hana-views)\] | [Xtract Table](../../documentation/table/) [Xtract Cube](../../documentation/bwcube/) | | SAP NetWeaver Business Warehouse or BW4/HANA \[[BW](../../documentation/odp/provider-context/#bw-infoproviders)\] | [Xtract Cube](../../documentation/bwcube/) [Xtract Table](../../documentation/table/) | | Datasources/Extractors \[[SAPI](../../documentation/odp/provider-context/#extractors)\] | - | | SAP LT Queue Alias \[[SLT~your_queue_alias](../../documentation/odp/provider-context/#slt-server)\] | [Xtract Table](../../documentation/table/) |

### Extract Data from CDS Views

Alternative for the *ABAP Core Data Services [ABAP_CDS]* provider context:\
To extract data from CDS Views, use the [Xtract Table](../../documentation/table/) component.

Note

When looking up CDS Views in Xtract for Alteryx, make sure to look up the name of the DDL SQL View (CDS Database View) instead of the CDS View name.

### Extract Data from HANA Views

Alternative for the *HANA Information Views [HANA]* provider context:\
To extract data from HANA Views, use the [Xtract Cube](../../documentation/bwcube/) component or the [Xtract Table](../../documentation/table/) component.

- **Extraction via Xtract Table**

  ______________________________________________________________________

  - In SAP, expose the HANA View to ABAP CDS Views, see [SAP Community: How to consume HANA Calculation views in S/4HANA CDS views](https://community.sap.com/t5/technology-blogs-by-members/how-to-consume-hana-calculation-views-in-s-4hana-cds-views/ba-p/13476798).
  - Extract the CDS View using the [Xtract Table](../../documentation/table/) component.

- **Extraction via Xtract Cube**

  ______________________________________________________________________

  - In SAP, expose the HANA View to CompositeProviders, see [SAP Learning: Consuming a Calculation View with SAP BW/4HANA](https://learning.sap.com/learning-journeys/upgrading-your-sap-bw-skills-to-sap-bw-4hana/consuming-a-calculation-view-with-sap-bw-4hana_ac069075-173b-41fb-bb35-b950b213d407)
  - Extract the CompositeProvider using the [Xtract Cube](../../documentation/table/) component.

### Extract Data from BW Systems (CompositeProviders, Cubes, InfoObjects, etc.)

Alternative for the *SAP NetWeaver Business Warehouse or BW4/HANA [BW]* provider context:

- To extract data from CompositeProviders, InfoCubes, MultiProviders, aDSO/DSOs etc., use the [Xtract Cube](../../documentation/bwcube/) component.
- To extract data from InfoObjects (Master data, Text data or Hierarchies), look up the respective tables (P, T, H) in the [Xtract Table](../../documentation/table/) component.
- To extract data from Hierarchy InfoObjects, use the [Xtract Hierarchy](../../documentation/hierarchy/) component.

### Extract Data from Tables

Alternative for the *SAP LT Queue Alias [SLT~your_queue_alias]* provider context:\
To extract data from regular (application) tables, cluster or pooled tables, use the [Xtract Table](../../documentation/table/) component.

______________________________________________________________________

#### Related Links

- [Guidance on SAP Note 3255746 for Theobald Software Xtract Products](https://theobald-software.com/en/products-technology-en/guidance-on-sap-note-3255746-for-theobald-software-xtract-products/).
- [Create (ODP) OData Services using the SAP Gateway Builder](../create-odata-services-using-the-sap-gateway-builder/)
