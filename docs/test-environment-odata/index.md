---
title: Xtract ODP (OData)
description: Operational Data Provisioning (ODP) based data via OData Services
---


This page shows how to use the Xtract ODP (OData) component.<br>
The Xtract ODP (OData) component can be used to extract ODP-based data via OData services.

!!! note
	As the use of the RFC modules of the ODP Data Replication API is prohibited by SAP ([SAP Note 3255746](https://me.sap.com/notesLatestChanges/0003255746/E/diff)), the Xtract ODP (OData) component is the recommended tool for extracting ODP data.

### About ODP via OData


Open Data Protocol (OData) is a web protocol for querying and updating data.
OData can be used to access the [Open Data Provisioning (ODP)](../odp/index.md/#about-odp) framework and extract ODP data, e.g., Hierarchies, Tables, Views, DataSources, etc.


To extract ODP data via OData, a corresponding OData service is required.
The data model of the service specifies which data sets are accessible and how the data is structured. 
Once the service is registered in the SAP Gateway system, Xtract for Alteryx can consume the service. 


![odp-odata](odp-odata.png){:width="400px" class="img-responsive"}


For more information, see [SAP Help: ODP-Based Data Extraction via OData](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/11/853413cf124dde91925284133c007d/frameset.htm).


#### Supported Features
- All available [ODP contexts](../odp/provider-context.md) of an SAP system are accessible.
- Delta extractions (with initial full load) if the ODP data source supports deltas, see [Subscriptions](subscriptions.md).
- Data packaging for large amounts of data, see [Package Size](settings.md/#package-size).
- Selections to filter the data before extraction, see [Selections](selections.md).


#### Limitations

Delta subscriptions are limited to one SAP user per service. 
The ODP framework has to be exposed in multiple different services for a single user to have multiple delta subscriptions.

### Prerequisites

- Alteryx Designer version 2022.3 or higher. The use of Xtract ODP (OData) requires access to the Alteryx **Data Connection Manager (DCM)** that was introduced in Alteryx Designer version 2022.3.
- OData services for ODP extractions must be available in the SAP system, see [SAP Help: Generating a Service for Extracting ODP Data via OData](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/69/b481859ef34bab9cc7d449e6fff7b6/frameset.htm). 
- To extract a DataSource, the DataSource has to be activated in SAP, see [SAP Help: Set Up and Activate DataSources](https://help.sap.com/docs/SLH_advanced_compliance_reporting_service/7a60944343e543a1ab99e9b2904dab09/e5d447257a95416190d29638a64a5dfa.html).
- Before creating ODP (OData) extractions, test the ODP source in SAP using the ABAP report RODPS_REPL_TEST to rule out and troubleshoot ODP problems in the ODP source. 
For more information, see [SAP Wiki: Replication test with RODPS_REPL_TEST](https://help.sap.com/docs/SUPPORT_CONTENT/bwdabc/3361385256.html).

### SAP Connection for OData Access

<!-- While other Xtract {{ components }} use the **Xtract** technology to connect to SAP, -->Xtract ODP (OData) requires a generic **Download** data source to access the OData protocol of an SAP system.
Follow the steps below to create the data source:

1. In the main menu of the Alteryx Designer navigate to **File > Manage Connections**. The window "Connection Manager" opens.
2. In the tab *Data Sources* click **[New]** to create a new data source.
3. Select the **Download** technology to create a URL data source.<br>
![sap-connection-downlaod](xfa/sap-connection-download.png)
4. Enter the Base URL of your SAP system, e.g., `http://sap-erp-as05.example.com:50000`. 
The URL can be requested from the SAP Basis team. <br>
![sap-connection](xfa/sap-connection-on-prem.png)
5. Click **[Save]** to save the SAP connection. The subsection *Connection* opens.
6. In the subsection *Connection* select the authentication method *Username and password*.
7. Select an existing credential that contains the name and password of an SAP dialog user. 
If no credentials exist, select *Create new Credential* to create a new credential.
8. Click **[Link] / [Create and link]** to link the credential to the connection. 

The SAP connection is now available for selection in the Xtract ODP (OData) component.

### Add an Xtract ODP(OData) Component

Follow the steps below to add an Xtract ODP(OData) component to your workflow:

1. Drag & drop the Xtract component to your Alteryx workflow :number-1:.
2. Assign an existing SAP connection :number-2:.<br>
![New](xfa/create-extraction.png){:class="img-responsive"} 
3. Click **[:pen-button: Edit]** :number-3: to open the main window of the component.

The majority of the functions of the {{ component }} can be accessed in the main window.


### Look Up OData Services


1. In the main window of the component, click **[:magnifying-glass:]**. The window “Service Selection” opens.<br>
![Open-Look-Up-ODP](xfa/main-window_add.png){:class="img-responsive"}	
2. In the field **Search pattern** :number-1:, enter one of the following characteristics:
	- name of an OData service
	- description of an OData service
	- name of the entity inside the OData service
	
	Use wildcards (*), if needed.<br>
	![Look-Up-ODP](look-up.png){:class="img-responsive"}	
3. Click **[Search]** :number-2:. Search results are displayed.
4. Select an OData service :number-3: and click **[OK]** to confirm.

The application now returns to the main window of the component.

!!! note 
	To find DataSources, they have to be activated in SAP.


### Define the Xtract ODP (OData) component

The Xtract ODP (OData) component offers the following options for data extractions:

1. In the section *Fields*, select the items you want to extract.<br>
![Datasource Preview](xfa/define-odp-odata.png){:class="img-responsive"}
2. Optional: edit a selection you want to change or dynamize. 
For more information, see [Edit Selections](selections.md/#edit-selections).<br>
3. Optional: Activate the option **Delta / Change tracking** to initialize delta extractions.
4. Click **[Load live Preview]** to display a live preview of the first 100 records.
5. Check the [Extraction Settings](settings.md) and the [General Settings]() before running the workflow.
6. Click **[OK]** to save the component.

You can now run the workflow.
