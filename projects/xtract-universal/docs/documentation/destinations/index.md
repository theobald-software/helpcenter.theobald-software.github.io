---
title: Destinations
description: Write SAP data to different target environments
icon: material/bullseye
---

Xtract Universal allows you to extract data from SAP systems and load it to different destination environments.
There are two types of destinations, depending on where the extraction process is started:  

<div class="grid cards" markdown>

-   :material-arrow-down-box:{ .lg .middle } __Pull Destinations__

    ---

    Extractions with pull destinations provide data on request.
	The extraction process is started by the destination environment. 
	When a consumer requests the data, Xtract Universal translates the request into a query for the underlying SAP system, retrieves the data directly from the source system and delivers it to the consumer.

-   :material-arrow-up-box:{ .lg .middle } __Push Destinations__

    ---

    Extractions with push destinations provide data proactively.
	The extraction process is started in Xtract Universal, e.g. via a [scheduled extraction](../execute-and-automate/call-via-scheduler.md).
	An extraction with push destinations extracts data from the SAP source systems and loads them into the destination, where the data can be processed further.

</div>

### Manage Destinations

To open a list of all existing destinations, navigate to **Server > Destinations**.<br>
The window "Manage Destinations" opens. Here, you can edit, delete and add new destinations.<br>
![xu_destination](../../assets/images/documentation/destinations/xu_destination.png)

!!! note
	The **http-csv** destination is a default destination and cannot be deleted.
	
### Databases / Data Warehouses

::cards:: cols=4

- title: Amazon Redshift <br><br><span class="keyword">push-destination</span>
  image: site:assets/images/documentation/destinations/logos/Amazon-Redshift.png
  url: site:documentation/destinations/amazon-redshift
 
- title: EXASolution <br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Exasol.svg
  url: site:documentation/destinations/exasol
  
- title: IBM Db2 <br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/IBM-db2.png
  url: site:documentation/destinations/ibm-db2

- title: Microsoft SQL Server <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/SQL-Server.png
  url: site:documentation/destinations/microsoft-sql-server
  
- title: Microsoft Azure SQL Database <br><br><span class="keyword">push-destination</span>
  image: site:assets/images/documentation/destinations/logos/Azure-SQL-Database.png
  url: site:documentation/destinations/microsoft-sql-server

- title: Microsoft Azure Synapse Analytics <br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Azure-Synapse-Analytics.png
  url: site:documentation/destinations/azure-synapse-analytics

- title: MySQL <br><br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/MySQL.png
  url: site:documentation/destinations/mysql

- title: Oracle <br><br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Oracle.png
  url: site:documentation/destinations/oracle
  
- title: PostgreSQL <br><br><span class="keyword">push-destination</span>
  image: site:assets/images/documentation/destinations/logos/PostgreSQL.png
  url: site:documentation/destinations/postgreSQL

- title: SAP HANA <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/SAP-Logo.png
  url: site:documentation/destinations/sap-hana
    
- title: Snowflake <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Snowflake.png
  url: site:documentation/destinations/snowflake

  
::/cards::


### Business Intelligence / Analytics / ETL

::cards:: cols=4

- title: Alteryx <br><br><br><span class="keyword">pull-destination</span>
  image: site:assets/images/logos/business-content/Alteryx-Logo.png
  url: site:documentation/destinations/alteryx

- title: Dataiku <br><br><br><span class="keyword">pull-destination</span>
  image: site:assets/images/documentation/destinations/logos/Dataiku.png
  url: site:documentation/destinations/dataiku
     
- title: KNIME <br><br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/documentation/destinations/logos/KNIME.png
  url: site:documentation/destinations/knime
  
- title: Microsoft Power BI <br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Power-BI.png
  url: site:documentation/destinations/Power-BI-Connector
  
- title: Microsoft Power BI Report Server <br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Power-BI-Report-Server.png
  url: site:documentation/destinations/server-report-services
  
- title: QlikSense and QlikView <br><br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Qlik.png
  url: site:documentation/destinations/qliksense-qlikview
 
- title: Tableau <br><br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Tableau.svg
  url: site:documentation/destinations/tableau

::/cards::

<!--
- title: Microsoft SQL Server Reporting Services <br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/documentation/destinations/logos/SQL-Server.png
  url: site:documentation/destinations/server-report-services
  
--->

### Business Systems

::cards:: cols=4
  
- title: Microsoft SharePoint <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/SharePoint.png
  url: site:documentation/destinations/sharepoint
  
- title: Salesforce <br><br><br><span class="keyword">push-destination</span>
  image: site:assets/images/documentation/destinations/logos/Salesforce.png
  url: site:documentation/destinations/salesforce

::/cards::

### Cloud Storage

::cards:: cols=4

- title: Amazon S3 <br><br><br><br><span class="keyword">push-destination</span>
  image: site:assets/images/documentation/destinations/logos/Amazon-S3.png
  url: site:documentation/destinations/amazon-aws-s3

- title: Google Cloud Storage <br><br><br><span class="keyword">push-destination</span>
  image: site:assets/images/documentation/destinations/logos/Google-Cloud.png
  url: site:documentation/destinations/google-cloud-storage
  
- title: Huawei Cloud OBS <br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Huawei.png
  url: site:documentation/destinations/huawei
  
- title: Microsoft Azure Blob Storage<br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Azure-Blob.png
  url: site:documentation/destinations/azure-storage
  
- title: Microsoft Azure Data Lake Storage <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Azure-Data-Lake.png
  url: site:documentation/destinations/azure-storage
  
- title: Microsoft Fabric (OneLake) <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/onelake.png
  url: site:documentation/destinations/microsoft-fabric-onelake
  
- title: Microsoft Fabric Open Mirroring <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/onelake.png
  url: site:documentation/destinations/microsoft-fabric-mirroring
  
::/cards::

<!---  

  -->

### Generic Destinations

::cards:: cols=4

- title: CSV Web Service <br><br><span class="keyword">pull-destination</span>
  image: site:assets/images/documentation/destinations/logos/net_csv.svg
  url: site:documentation/destinations/csv-via-http
  
- title: JSON Web Service <br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/documentation/destinations/logos/net_json.svg
  url: site:documentation/destinations/json-via-http
  
- title: CSV Flat-Files<br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/doc_csv.svg
  url: site:documentation/destinations/csv-flat-file
  
- title: JSON Flat-Files<br><br><span class="keyword">push-destination</span>
  image: site:assets/images/documentation/destinations/logos/doc_json.svg
  url: site:documentation/destinations/json-flat-file
  
- title: Parquet Flat-Files<br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/documentation/destinations/logos/Parquet.png
  url: site:documentation/destinations/parquet
  
::/cards::

