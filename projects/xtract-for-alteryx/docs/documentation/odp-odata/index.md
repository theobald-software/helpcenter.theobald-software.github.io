---
title: Xtract ODP(OData)
description: Operational Data Provisioning (ODP) based data via OData Services
icon: component/odp-odata
---

This page shows how to use the {{ odpOdata }} {{ component }}.<br>
The {{ odpOdata }} {{ component }} can be used to extract ODP-based data via OData services.

!!! note
	As the use of the RFC modules of the ODP Data Replication API is prohibited by SAP ([SAP Note 3255746](https://me.sap.com/notesLatestChanges/0003255746/E/diff)), the {{ odpOdata }} {{ component }} is the recommended tool for extracting ODP data.

{% include "components/odp-odata/about.md" %}

### SAP Connection for OData Access

<!-- While other Xtract {{ components }} use the **Xtract** technology to connect to SAP, -->{{ odpOdata }} requires a generic **Download** data source to access the OData protocol of an SAP system.
Follow the steps below to create the data source:

1. In the main menu of the Alteryx Designer navigate to **File > Manage Connections**. The window "Connection Manager" opens.
2. In the tab *Data Sources* click **[New]** to create a new data source.
3. Select the **Download** technology to create a URL data source.<br>
![sap-connection-downlaod](../../assets/images/documentation/components/odp-odata/xfa/sap-connection-download.png)
4. Enter the Base URL of your SAP system, e.g., `http://sap-erp-as05.example.com:50000`. 
The URL can be requested from the SAP Basis team. <br>
![sap-connection](../../assets/images/documentation/components/odp-odata/xfa/sap-connection-on-prem.png)
5. Click **[Save]** to save the SAP connection. The subsection *Connection* opens.
6. In the subsection *Connection* select the authentication method *Username and password*.
7. Select an existing credential that contains the name and password of an SAP dialog user. 
If no credentials exist, select *Create new Credential* to create a new credential.
8. Click **[Link] / [Create and link]** to link the credential to the connection. 

The SAP connection is now available for selection in the {{ odpOdata }} {{ component }}.

{% include "components/xfa-new.md" %}

{% include "components/odp-odata/define-odp-odata.md" %}
