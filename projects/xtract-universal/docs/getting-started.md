---
title: Getting Started
description: Learn how to install and create extractions with Xtract Universal.
hide:
  - navigation
  - tags
tags:
  - quickstart
  - quick start  
---

![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to install and set up {{ productName }} for the first time. 

{% include "xu-bc-getting-started.md" %}


### Write Data to a Target Environment

<!---
this script generates a link to the destination details of the selected destination (in step 5)
the option in the list must be set as follows:
	<option value="name-of-the-md-file-of-the-destination">DisplayedName</option>
	
-->
  <script>
  function getSelectedValueDetails(){
	var selectedValueD = document.getElementById("destination").value;
	window.location = "../documentation/destinations/" + selectedValueD + "#destination-details"
	}
  </script> 
  
{{ productName }} allows you to load data to a wide range of target environments, including databases, cloud storages, BI tools, etc.
By default, extractions use the [**http-csv**](documentation/destinations/csv-via-http.md) destination as a target environment.

Follow the steps below to add a new destination to {{ productName }}:

1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window “Manage Destinations” opens.<br>
![xu-destinations](assets/images/documentation/destinations/xu_destination.png)
2. Click **[Add]** to create a new destination. The window "Destination Details" opens.<br>
![destinations_load_manage_shared](assets/images/documentation/destinations/destinations_load_manage_shared.png)
3. Enter a **Name** for the destination.
4. Select a destination type from the drop-down menu. 
A list of connection details opens.
5. Fill out the destination details to connect to the destination.<br>
Destination details vary depending on the destination type.
For more information about destination details, select your destination: <select name="destinationlist" id="destination" onChange="getSelectedValueDetails();" style="font-family:'Poppins'; font-size:16px; padding-top:3px; padding-bottom:3px;">
    <option value=" " disabled selected>Select a destination</option>
	<option value="alteryx">Alteryx</option>
	<option value="amazon-aws-s3">Amazon S3</option>
	<option value="amazon-redshift">Amazon Redshift</option>
	<option value="dataiku">Dataiku</option>
	<option value="exasol">EXASolution</option>
    <option value="csv-flat-file">Flat File CSV</option>
    <option value="json-flat-file">Flat File JSON</option>
    <option value="parquet">Flat File Parquet</option>
	<option value="google-cloud-storage">Google Cloud Storage</option>
	<option value="csv-via-http">HTTP CSV</option>
	<option value="json-via-http">HTTP JSON</option>
	<option value="huawei">Huawei Cloud OBS</option>
	<option value="ibm-db2">IBM Db2</option>
	<option value="knime">KNIME</option>
	<option value="azure-storage">Microsoft Azure Storage</option>
	<option value="azure-synapse-analytics">Microsoft Azure Synapse Analytics</option>
	<option value="microsoft-fabric-onelake">Microsoft Fabric (OneLake)</option>
	<option value="Power-BI-Connector">Microsoft Power BI</option>
	<option value="server-report-services">Microsoft Power BI Report Server</option>
	<option value="sharepoint">Microsoft SharePoint</option>
	<option value="microsoft-sql-server">Microsoft SQL Server</option>
	<option value="mysql">MySQL</option>
	<option value="oracle">Oracle</option>
	<option value="postgreSQL">PostgreSQL</option>
	<option value="qliksense-qlikview">QlikSense and QlikView</option>
	<option value="salesforce">Salesforce</option>
	<option value="sap-hana">SAP HANA</option>
	<option value="snowflake">Snowflake</option>
	<option value="tableau">Tableau</option>
  </select>
5. Click **[OK]** to confirm your input.

The destination is now available and can be assigned to extractions.

#### Assign a Destination to an Extraction

<!---
this script generates a link to the destination settings of the selected destination (in step 4)
the option in the list must be set as follows:
	<option value="name-of-the-md-file-of-the-destination">DisplayedName</option>
-->
  <script>
  function getSelectedValueSettings(){
	var selectedValueS = document.getElementById("destinationsettings").value;
	window.location = "../documentation/destinations/" + selectedValueS + "#destination-settings"
	}
  </script> 
  
Extractions write data to their assigned destination.
Follow the steps below to assign a destination to an extraction:

1. In the main window of the Designer, select an extraction.
2. Click **[:designer-destination:Destination]**. The window “Destination Settings” opens.<br>
![xu_designer_destination](assets/images/documentation/destinations/xu_designer_destination.png){:class="img-responsive"}
3. In the “Destination Settings” window, select a destination from the drop down menu.<br>
![assign-destination](assets/images/documentation/destinations/assign-destination.png){:class="img-responsive"}
4. Optional: change the destination settings.<br>
Destination settings are specific to the selected extraction and vary depending on the destination type.
For more information about destination settings, select your destination: <select id="destinationsettings" onChange="getSelectedValueSettings();" style="font-family:'Poppins'; font-size:16px; padding-top:3px; padding-bottom:3px;">
    <option value=" " disabled selected>Select a destination</option>
	<option value="alteryx">Alteryx</option>
	<option value="amazon-aws-s3">Amazon S3</option>
	<option value="amazon-redshift">Amazon Redshift</option>
	<option value="dataiku">Dataiku</option>
	<option value="exasol">EXASolution</option>
    <option value="csv-flat-file">Flat File CSV</option>
    <option value="json-flat-file">Flat File JSON</option>
    <option value="parquet">Flat File Parquet</option>
	<option value="google-cloud-storage">Google Cloud Storage</option>
	<option value="csv-via-http">HTTP CSV</option>
	<option value="json-via-http">HTTP JSON</option>
	<option value="huawei">Huawei Cloud OBS</option>
	<option value="ibm-db2">IBM Db2</option>
	<option value="knime">KNIME</option>
	<option value="azure-storage">Microsoft Azure Storage</option>
	<option value="azure-synapse-analytics">Microsoft Azure Synapse Analytics</option>
	<option value="microsoft-fabric-onelake">Microsoft Fabric (OneLake)</option>
	<option value="Power-BI-Connector">Microsoft Power BI</option>
	<option value="server-report-services">Microsoft Power BI Report Server</option>
	<option value="sharepoint">Microsoft SharePoint</option>
	<option value="microsoft-sql-server">Microsoft SQL Server</option>
	<option value="mysql">MySQL</option>
	<option value="oracle">Oracle</option>
	<option value="postgreSQL">PostgreSQL</option>
	<option value="qliksense-qlikview">QlikSense and QlikView</option>
	<option value="salesforce">Salesforce</option>
	<option value="sap-hana">SAP HANA</option>
	<option value="snowflake">Snowflake</option>
	<option value="tableau">Tableau</option>
  </select><br>
5. Click **[OK]** to confirm your input.

When running the extraction, the extracted SAP data is now written to the destination.
For more information on available destinations, see [Destinations](documentation/destinations/index.md).

