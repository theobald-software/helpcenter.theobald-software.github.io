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

![img](assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to install and set up {{ productName }} for the first time. 


### Video Introduction

Get started with {{ productName }} by watching our onboarding video or following the step-by-step instructions below.

<iframe style="border: 1px solid black;" width="800" height="450" src="https://www.youtube.com/embed/8rMl0NN00c8?si=Q9Z0J7rdXHsQ_hZD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


{% include "xu-bc-getting-started.md" %}


### Write Data to a Target Environment

<!---
this script generates a link to the destination details / destination settings of the selected destination.
the option in the list must be set as follows:
	<option value="name-of-the-md-file-of-the-destination">DisplayedName</option>
-->

  <script>
  function getSelectedValueSettings(){
	var selectedValueS = document.getElementById("destinationsettings").value;
	window.location = "../documentation/destinations/" + selectedValueS + "#destination-settings"
	}
	
  function getSelectedValueDetails(){
	var selectedValueD = document.getElementById("destination").value;
	window.location = "../documentation/destinations/" + selectedValueD + "#destination-details"
	}
  </script> 
 
{{ productName }} allows you to load data to a wide range of target environments, including databases, cloud storages, BI tools, etc.
By default, extractions use the [**http-csv**](documentation/destinations/csv-via-http.md) destination as a target environment.

Follow the steps below to add a new destination to {{ productName }}:


1. In the main window of the Designer, select an extraction.
2. Click **[:designer-destination:Destination]**. The window “Destination Settings” opens.<br>
![xu_designer_destination](assets/images/documentation/destinations/xu_designer_destination.png){:class="img-responsive"}
3. In the “Destination Settings” window, click **[+]** to add a new destination. <br>
![add-destination](assets/images/documentation/destinations/add-destination.png){:class="img-responsive"}

	!!! note
		To write data to an existing destination, select the destination from the **Destination** dropdown list.
		[http-csv](documentation/destinations/csv-via-http.md) and [http-json](documentation/destinations/json-via-http.md) are available by default.

4. In the window "Destination Details", enter a name for the destination.
4. Select a destination type from the drop-down menu. A list of connection details opens.<br>
![select-destination-type](assets/images/documentation/destinations/select-destination-type.png){:class="img-responsive"}
5. Fill out the destination details to connect to the destination.
Destination details vary depending on the destination type.
For more information about destination details, select your destination: <br>
<select class="custom-dropdown" name="destinationlist" id="destination" onChange="getSelectedValueDetails();">
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
	<option value="microsoft-fabric-mirroring">Microsoft Fabric Open Mirroring</option>
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
5. Click **[OK]** to confirm your input. The window "Destination Details" closes.
4. Optional: change the default destination settings.
Destination settings are specific to the selected extraction and vary depending on the destination type.
For more information about destination settings, select your destination: <br>
<select class="custom-dropdown" id="destinationsettings" onChange="getSelectedValueSettings();">
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
	<option value="microsoft-fabric-mirroring">Microsoft Fabric Open Mirroring</option>
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

