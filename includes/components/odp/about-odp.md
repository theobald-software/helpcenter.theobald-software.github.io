

### About ODP
Operational data provisioning (ODP) is a framework in SAP ABAP applications for transferring data between systems.
ODP provides a technical infrastructure for data extraction and replication from different SAP (ABAP) Systems, e.g.:
- ECC
- S/4 HANA
- BW 
- BW/4 HANA

The {{ odp }} {{ component }} acts as a subscriber (consumer) and [subscribes](subscriptions.md) to a data provider. 
ODP supports mechanisms to load data incrementally from data providers.
For SAP BW/4HANA, ODP is the central infrastructure for data extraction and replication from SAP (ABAP) applications to an SAP BW/4HANA Data Warehouse. 

The {{ odp }} {{ component }} provides data transfer from the following providers (also called [Provider Context](provider-context.md)): 
 
Provider Context | SAP Source Objects |
------------ |------------ |
ABAP Core Data Services [[ABAP_CDS](provider-context.md/#abap-cds-views)]|- CDS Views |
SAP NetWeaver Business Warehouse [[BW](provider-context.md/#bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query as InfoProvider<br> **BW systems:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
SAP HANA Information Views [[HANA](provider-context.md/#hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
DataSources/Extractors [[SAPI](provider-context.md/#extractors)] | - DataSources and Extractors |
SAP LT Queue Alias [[SLT~your_queue_alias](provider-context.md/#slt-server)] | - SAP Tables<br> - Cluster tables<br> - Pool tables |


Depending on the connected SAP source system there are differences in available provider contexts.<br>
For more information on SAP ODP, see [SAP Wiki: Operational Data Provisioning (ODP) and Delta Queue (ODQ)](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646).
 