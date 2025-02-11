---
title: Microsoft Fabric Mirroring of SAP using Xtract Universal
description: How to set up open mirroring of SAP in Xtract Universal
---

The following article shows how to use Xtract Universal in combination with Microsoft Fabric's open mirroring feature to map SAP data to a datalake.


### About Open Mirroring

Microsoft Fabric's Open Mirroring allows users to replicate existing data directly into Fabric's OneLake from a variety of external databases and other data sources. 
The data is written into an open mirroring landing zone, where it is processed by the mirroring replication engine of Microsoft Fabric.
Mirroring delivers the data incrementally in a parquet format that is used to merge the data in OneLake. 

For more information, see [Microsoft Documentation: Open mirroring in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring).

!!! note
	Note that Microsoft Fabric Open Mirroring is still in preview. During preview, not all Fabric regions support Mirroring.
	For more information, see [Microsoft Documentation: Microsoft Fabric preview information](https://learn.microsoft.com/en-us/fabric/fundamentals/preview).
	
	
### Prerequisites

- Active and running Fabric capacity. A paused or deleted capacity affects Mirroring so that no data is replicated.
- Mirroring requires the use of the extraction type [Table CDC](../documentation/table-cdc/index.md) and the installation of the corresponding [custom function modules](../documentation/setup-in-sap/custom-function-module-for-tablecdc.md) in SAP. 
Note that Table CDC is licensed and purchased separately from other extraction types.

## Setup with Table CDC

Follow the steps below to load an SAP Table into the Microsoft Fabric Open Mirroring landing zone:

1. Create a Table CDC extraction, see [Documentation: Table CDC](../documentation/table-cdc/index.md/#create-a-table-cdc-extraction). 
2. [Look up](../documentation/table-cdc.md/#look-up-a-table) the SAP table you want to map.
3. Optional: To extract the complete table when first running the extraction, activate the checkbox **[Extract table on first run]**.

	!!! tip
		You can also use the regular [Table](../documentation/table/index.md) extraction type to extract the initial full load of the Table.

4. Save the extraction.
5. [Assign](../documentation/destinations/microsoft-fabric-onelake.md/#assign-the-microsoft-fabric-onelake-destination-to-an-extraction) the Microsoft Fabric (OneLake) destination to the extraction.

## Setup with Table

If Mirroring is used with a component like Table (that does not support incremental change), then:

RowMaker value should be 0 for INSERT by default. User has the option to change it e.g. to 4 for UPSERT
Default option for Table is to use an existing one if available. User has the option to set it to: Drop and create.


******

#### Related Links
- [Microsoft Documentation: What is Mirroring in Fabric?](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/overview)
- [Microsoft Documentation: Open mirroring in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring)
- [Microsoft Documentation: Tutorial Configure Microsoft Fabric open mirrored databases](https://learn.microsoft.com/en-us/fabric/database/mirrored-database/open-mirroring-tutorial)