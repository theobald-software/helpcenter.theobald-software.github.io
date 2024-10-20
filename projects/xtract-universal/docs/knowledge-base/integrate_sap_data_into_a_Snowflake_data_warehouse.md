---
title: Integrate SAP Data into a Snowflake Data Warehouse
description: integrating-sap-data-into-a-snowflake-data-warehouse
author: Christian Tauchmann
---

The following article describes a customer use case, where Theobald Software has partnered with Snowflake to build a showcase for integrating SAP ERP data into a Snowflake cloud data warehouse. 

### Customer Need 

The customer was looking to replace an existing on-premises data warehouse and analytics toolset with primarily cloud-based services. 
Critical business data would have to be sourced from SAP ECC (on-premise), in addition to data stored in various databases or flat files.

The customer was also looking for a fully automated process to bring data from different sources together in a Snowflake cloud data warehouse. 
The data load process had to be fast and support incremental data loads, to ultimately enable near real-time insights for the business users.

### SAP Data Extraction

The customer used our [Xtract Universal](https://theobald-software.com/en/xtract-universal/) product to extract data from their SAP ECC system. 
Incremental data feeds are enabled with the built-in Table and DeltaQ components in {{ productName }}. 
The Table component is easy to configure and delivers performant data extraction from even the largest SAP tables. 
The DeltaQ component provides reliable delta feeds, based on SAP’s native DataSource extractors.

![sap_snowflake](../assets/images/articles/xu/sap_snowflake.png){:class="img-responsive"}

### Cloud Storage 

Once the data is extracted from SAP, it can be directly stored in one of currently 20+ supported target environments. 
It’s a direct pass-through of the data from SAP into the target. In the process, SAP data types are mapped to the data types of the target environment. <br> 
{{ productName }} can write SAP data directly into a database, cloud storage or data warehouse. 
In this case, the customer wants to write the data from {{ productName }} to Azure blob storage first and then to Snowflake DB. 
With this approach an additional staging datalake can be maintained in Azure.
The DDLs to create the proper tables in Snowflake can be auto-generated in {{ productName }}. 
An initial, full data load from the Blob container can be done in Snowflake with the COPY command. 
Subsequent, incremental data loads can be done with a MERGE statement.

### Automation 

The SAP data extractions and the load process in Snowflake can be fully automated, using utilities like the Windows Task Scheduler or Cron, or your scheduling tool of choice. 
This can also work in conjunction with an existing ETL tool for centralized monitoring and management of all data movement processes.

***********

#### Related Links

- [Xtract Universal Product Information](https://theobald-software.com/en/xtract-universal/) 
- [Documentation: Snowflake Destination](../documentation/destinations/snowflake.md)
