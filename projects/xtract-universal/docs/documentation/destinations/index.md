---
title: Destinations
description: Destinations
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
![xu_destination](../../assets/images/xu/documentation/destinations/xu_destination.png)

!!! note
	The **http-csv** destination is a default destination and cannot be deleted.
	
### Databases / Data Warehouses

::cards:: cols=4

- title: Amazon Redshift <br><br><span class="keyword">push-destination</span>
  image: site:assets/images/xu/documentation/destinations/logos/Amazon-Redshift.png
  url: amazon-redshift
  
- title: Azure Synapse Analytics <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Azure-Synapse-Analytics.png
  url: azure-synapse-analytics
  
- title: Azure SQL Database <br><br><span class="keyword">push-destination</span>
  image: site:assets/images/xu/documentation/destinations/logos/Azure-SQL-Database.png
  url: microsoft-sql-server

- title: EXASolution <br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Exasol.svg
  url: exasol
  
- title: IBM Db2 <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/IBM-db2.png
  url: ibm-db2

- title: MySQL <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/MySQL.png
  url: mysql

- title: Oracle <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Oracle.png
  url: oracle
  
- title: PostgreSQL <br><br><span class="keyword">push-destination</span>
  image: site:assets/images/xu/documentation/destinations/logos/PostgreSQL.png
  url: postgreSQL

- title: SAP HANA <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/SAP-Logo.png
  url: sap-hana
    
- title: Snowflake <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Snowflake.png
  url: snowflake

- title: SQL Server <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/SQL-Server.png
  url: microsoft-sql-server
  
::/cards::


### Business Intelligence / Analytics / ETL

::cards:: cols=4

- title: Alteryx <br><br><br><span class="keyword">pull-destination</span>
  image: site:assets/images/logos/business-content/Alteryx-Logo.png
  url: alteryx
    
- title: KNIME <br><br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/KNIME.png
  url: knime
  
- title: Power BI Connector <br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Power-BI.png
  url: power-bi-connector
  
- title: Power BI Report Server <br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Power-BI-Report-Server.png
  url: server-report-services
  
- title: QlikSense and QlikView <br><br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Qlik.png
  url: qliksense-qlikview
 
- title: SQL Server Reporting Services <br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/SQL-Server.png
  url: server-report-services
  
- title: Tableau <br><br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Tableau.svg
  url: tableau

::/cards::

### Business Systems

::cards:: cols=4

- title: Salesforce <br><br><span class="keyword">push-destination</span>
  image: site:assets/images/xu/documentation/destinations/logos/Salesforce.png
  url: salesforce
  
- title: SharePoint <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/SharePoint.png
  url: sharepoint
  
::/cards::


### Cloud Storage

::cards:: cols=4

- title: Amazon S3 <br><br><br><span class="keyword">push-destination</span>
  image: site:assets/images/xu/documentation/destinations/logos/Amazon-S3.png
  url: amazon-aws-s3
  
- title: Azure Blob Storage<br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Azure-Blob.png
  url: azure-storage
  
- title: Azure Data Lake Storage <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Azure-Data-Lake.png
  url: azure-storage
  
- title: Google Cloud Storage <br><br><span class="keyword">push-destination</span>
  image: site:assets/images/xu/documentation/destinations/logos/Google-Cloud.png
  url: google-cloud-storage
  
- title: Huawei Cloud OBS <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Huawei.png
  url: huawei
  
::/cards::

<!---
- title: Azure Storage (Blob / Data Lake) <br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Azure.png
  url: azure-storage
-->


### Generic Destinations

::cards:: cols=4

- title: CSV Web Service <br><br><span class="keyword">pull-destination</span>
  image: site:assets/images/xu/documentation/destinations/logos/net_csv.svg
  url: csv-via-http
  
- title: JSON Web Service <br><br><span class="keyword">pull-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/net_json.svg
  url: json-via-http
  
- title: CSV Flat-Files<br><br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/doc_csv.svg
  url: csv-flat-file
  
- title: JSON Flat-Files<br><br><br><span class="keyword">push-destination</span>
  image: site:assets/images/xu/documentation/destinations/logos/doc_json.svg
  url: json-flat-file
  
- title: Parquet Flat-Files<br><br><span class="keyword">push-destination</span> 
  image: site:assets/images/xu/documentation/destinations/logos/Parquet.png
  url: parquet
  
::/cards::

