---
title: Connection Settings
description: Overview of SAP connection settings
---

This page contains an overview of the SAP connection settings in the Xtract data source. 

![Connection-Manager](../../assets/images/documentation/sap-connection/xfa/data-connection-manager-settings.png){:class="img-responsive" }

### Xtract Data Source Settings

Some input fields for the SAP connection vary depending on the selected connection method in the field **Technology**. 


=== "Xtract SAP Application Server"

	| Input Field | Description |
	| :------ |:--- | 
	| **Data Source Name** | Name of the Xtract data source. |
	| **Host** |  Host name or IP address of the application server (Property Host).  | 
	| **Sys. No.** | A two-digit number between 00 and 99 (Property SystemNumber). | 
	| **Client** | A three-digit number of the SAP client between 000 and 999, e.g., 800. | 
	| **Language** | The logon language for the SAP system, e.g., EN for English or DE for German. | 


=== "Xtract SAP Load Balancing"

	| Input Field | Description |
	| :------ |:--- | 
	| **Data Source Name** | Name of the Xtract data source. |
	| **Message Server** |  Name or IP address of the message server (Property MessageServer). | 
	| **Client** | A three-digit number of the SAP client between 000 and 999, e.g., 800. | 
	| **Language** | The logon language for the SAP system, e.g., EN for English or DE for German. | 


!!! tip
	Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.
	

### Advanced Options

{% include "sap-connection/rfc-libraries.md" %}

{% include "sap-connection/trace-directory.md" %}

### Expert Options

#### Use SAP GUI for specialized BAPIs

There are SAP Reports and BAPIs that require an installed SAP GUI even when they are called remotely. <br>
Activate this option only if necessary.

{% include "sap-connection/sap-gui-warning.md" %}