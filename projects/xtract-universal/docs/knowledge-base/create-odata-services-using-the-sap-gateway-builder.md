---
title: Create OData Services using the SAP Gateway Builder
description: How to create OData Services using the SAP Gateway Builder
---

This article shows how to use the SAP Gateway Builder to create OData services that can be consumed by {{ productName  }}.
The [{{ odata }} {{ component }}](../documentation/odata/index.md) of {{ productName }} consumes the data provided by SAP OData services.
These services can be created on SAP on-premise systems using the SAP Gateway Builder. 

This article focuses on OData services that provide ODP-based data.

!!! note
	This article focuses on SAP on-premise systems. 
	For information on how to create OData services in the SAP cloud, refer to [SAP Help: Setting up Communication Management](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320).

### Prerequisites

- SAP NetWeaver Gateway Release 2.0 Support Package 4 or above. In SAP S/4HANA, the Gateway is embedded, but need to be activated.
- Access to the SAP Gateway Service Builder
- Optional: authorization for CTS (Change and Transport System) is required to transport services from one SAP system to another, e.g., from a test environment to a production environment.
- Optional: to test services directly in SAP, activate the SAP Gateway Client via transaction /IWFND/GW_CLIENT.

### Workflow

- Service Definition Phase: In this phase, you create a project to bundle all artifacts that are needed to develop a service.
- Data Model Definition Phase: In this phase, you define the model (entity types, entity sets, associations, and so on) that the service is based on.
- Service Implementation Phase: In this phase, you implement the operations that are supported by the service.
- Service Maintenance Phase: In this phase, the service is registered and activated in an SAP Gateway hub system.

### Create an OData Service

Follow the steps below to create an OData service in the SAP Gateway Builder:

1. Log in to SAP.
2. Go to transaction SEGW. The SAP Gateway Builder opens.
3. Click **Create Project** (:material-file-outline:).<br>
![create-project](../assets/images/articles/odata/sap-gwb.png)
4. Enter a nema and description for the OData service.<br>
![create-project](../assets/images/articles/odata/sap-gwb-create.png)
5. Select the project type *Service with SAP Annotations*.
6. If the **Package** property is mandatory, enter *$TMP* for temporary objects. 
If you want to transport the service to another SAP system, e.g., from a test environment to a production environment, define a transport package.
7. Click **Local Object**. The new service is listed in the main window of the SAP Gateway Builder.
8. Right-click the *DataModel* folder. In the context menu, navigate to **Redefine** and select one of the following options in the options:
	- ODP Extraction (this should be available in ODP OData) The OData access for ODP can combine multiple ODPs in one SAP Gateway service.
	- BOPF Service - A BOPF configuration may include an FPM BOPF Integration (FBI) view.
	- OData Service (SAP GW)
	- BW Query Service (BW easy query and MDX are combined in the wizard for BW Query Service and distinguished using the Access Type.
	- OData Service
	
	
9. Define SAP Object
10. ...
11. ...
12. Click ok to save. The subfolder of the *DataModel* folder now contain ...
13. Click **Generate Runtime Objects** (:generate:) to generate the service.
14. Gp to transaction /n/IWFND/MAINT_SERVIE. The "Activate and Maintain Services" menu opens.
15. Click **Add Service**.
16. Click **Get Services**.
System Alias LOCAL
Select Service and click **Add Service**

*****

#### Related Links
- [SAP Help: Managing an SAP Gateway Service](https://learning.sap.com/learning-journeys/building-odata-services-with-sap-gateway/managing-an-sap-gateway-service)