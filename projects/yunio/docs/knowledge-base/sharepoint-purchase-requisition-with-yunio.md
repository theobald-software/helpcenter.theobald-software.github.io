---
title: Sync SharePoint Custom Lists with SAP using Power Automate and yunIO
description: Sync SharePoint with SAP using Power Automate and yunIO
---

The following article shows how to synchronize SharePoint custom lists in near-real time with SAP.<br>
In the following scenario, data from SharePoint is used to automatically create a purchase requisition in SAP. The newly created SAP purchase requisition number is then written back to SharePoint.

### About
This article leads you through all necessary steps to set up the following process:

- When a new purchase requisition is added to a SharePoint list, a Power Automate workflow is triggered. 
This process also works with other automation tools, e.g., Nintex.
- The workflow uses the SharePoint data to run a yunIO service that creates a new purchase requisition in SAP.
- When the purchase requisition is created in SAP, the new SAP purchase requisition number is written back to the SharePoint list.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).<br>
Follow the steps below to set up a yunIO service that creates purchase requisitions in SAP:

!!! note
    The parameters that are needed to create purchase requisitions are dependent on your customized SAP settings.

1. [Create an SAP connection](../getting-started.md/#connect-to-sap) in yunIO. 
2. [Create a service](../getting-started.md/#create-a-service) in yunIO. The depicted example uses the integration type *Function Module* for the service.
3. [Look up](../documentation/function-modules-and-bapis/index.md/#look-up-a-function-module-bapi) the standard BAPI, BAPI_PR_CREATE that creates purchase requisitions in SAP. 
4. Set the following import parameters to *Supplied by Caller*: 

	| Table | Field | Description |
	| :------ |:--- | :--- |
	| PRHEADER |  | Transfer Structure for Enjoy Purchase Req. - Header |
	| PRHEADER | PR_TYPE | Order Type (Purchasing) |
	| PRHEADERX |  | Change Parameter for Enjoy Purchase Requisition - Header |
	| PRHEADERX | PR_TYPE | Updated information in related user data field |
	
5. Set the following table parameters to *Supplied by Caller*:

	| Table | Field | Description |
	| :------ |:--- | :--- |
	| PRACCOUNT |  | Transfer Structure for Enjoy Purchase Req. - Acct Assignment |
	| PRACCOUNT | PREQ_ITEM | Item Number of Purchase Requisition |
	| PRACCOUNT | SERIAL_NO | Sequential Number of Account Assignment |
	| PRACCOUNT | GL_ACCOUNT | G/L Account Number |
	| PRACCOUNT | COSTCENTER | Cost Center |
	| PRACCOUNTX | | Change Toolbar for Enjoy Purchase Req. - Account Assignment |
	| PRACCOUNTX | PREQ_ITEM | Item Number of Purchase Requisition |
	| PRACCOUNTX | SERIAL_NO | Sequential Number of Account Assignment |
	| PRACCOUNTX | PREQ_ITEMX | Updated information in related user data field |
	| PRACCOUNTX | SERIAL_NOX | Updated information in related user data field |
	| PRACCOUNTX | GL_ACCOUNT | Updated information in related user data field |
	| PRACCOUNTX | COSTCENTER | Updated information in related user data field |
	| PRITEM | | Transfer Structure for Enjoy Purchase Req. - Item Data |
	| PRITEM | PREQ_ITEM | Item Number of Purchase Requisition |
	| PRITEM | MATERIAL | Material Number |
	| PRITEM | PLANT | Plant |
	| PRITEM | QUANTITY | Purchase Requisition Quantity |
	| PRITEM | DELIV_DATE | Item Delivery Date |
	| PRITEM | ACCTASSCAT | Account Assignment Category |
	| PRITEMX | | Change Parameter for Enjoy Purchase Requisition - Item Data |
	| PRITEM | PREQ_ITEM | Item Number of Purchase Requisition |
	| PRITEM | PREQ_ITEMX | Updated information in related user data field |
	| PRITEM | MATERIAL | Updated information in related user data field |
	| PRITEM | PLANT | Updated information in related user data field |
	| PRITEM | QUANTITY | Updated information in related user data field |
	| PRITEM | DELIV_DATE | Updated information in related user data field |
	| PRITEM | ACCTASSCAT | Updated information in related user data field |

6. Select the table RETURN for export. This table contains logs and error messages.
7. Select the export parameter NUMBER for the output. This parameter contains the new SAP purchase requisition number that is written back to SharePoint.
8. Activate the advanced setting **Commits Transaction**. If this option is active, the function module “BAPI_TRANSACTION_COMMIT” is called after processing the selected Function Module / BAPI. 
BAPI_PR_CREATE require this commit function to successfully update data in the database.<br>
![SAPPurchaseRequisitionCreate-export](../assets/images/yunio/articles/SAPPurchaseRequisitionCreate-export.png){:class="img-responsive"}
9. Click :yunio-run: to testrun the service in yunIO :number-1:. For more information, see [Documentation: Run Services in yunIO](../documentation/run-services.md/#run-services-in-yunio).
10. Click :yunio-run-download: to download the service definition :number-2:.<br>
![yunio-Services-Function-Download](../assets/images/yunio/articles/yunio-run-services-function-download.png){:class="img-responsive" }

### Setup in SharePoint

Create a SharePoint list that provides SAP-related fields.
For this example, create the following columns:
- Material
- Plant
- Quantity
- Delivery Date
- Cost Center
- Purchase Requisition Number (when a purchase requisition number is created in SAP, it is written back to this column)

![sharepoint-purchase-requisition](../assets/images/yunio/articles/sharepoint-purchase-requisition0.png){:class="img-responsive" }

For more information on SharePoint lists, see [Microsoft Documentation: Introduction to lists](https://support.microsoft.com/en-us/office/introduction-to-lists-0a1c3ace-def0-44af-b225-cfa8d92c52d7).

!!! note
    Defining other input parameters in SharePoint is optional as they can also be set as static values in Power Automate.

!!! tip
    You can use a Power App form to simplify and validate the SharePoint input, see [Using yunIO Services in Power Apps](populate-drop-down-controls-in-power-apps.md#integrate-yunio-services-in-power-apps).


### Setup in Power Automate

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as a Custom Connector in Power Automate, see [Integrate a yunIO Service with Power Automate](integrate-a-yunio-service-with-power-automate.md#configure-a-yunio-custom-connector-in-power-automate).
2. Create a new workflow that is triggered when a new item is added to the SharePoint list.
3. Add the yunIO connector created in step 1 to the workflow and map the purchase requisition data from SharePoint to the input parameters of yunIO.<br>
![sharepoint-purchase-requisition3](../assets/images/yunio/articles/sharepoint-purchase-requisition3.png){:class="img-responsive"}
4. Make sure that the SharePoint input uses the right format, e.g., the delivery date must have the SAP format `YYYYmmDD` and the cost center must have 10 characters, including leading zeroes.
For conversion tips and code templates, see [Formats and Conversions in Power Automate](conversion-in-power-automate.md).
5. Add a SharePoint **Update Item** tool to write the purchase requisition number from the yunIO Custom Connector back to the SharePoint list.<br>
![sharepoint-purchase-requisition2](../assets/images/yunio/articles/sharepoint-purchase-requisition2.png){:class="img-responsive"}
7. Optional: Send notifications when a purchase requisition is created. 
8. Turn on the workflow.


### Trigger the Process

1. Open SharePoint and add a new purchase requisition.
2. The Power Automate workflow runs and creates the purchase requisition in SAP.
3. Check if the SAP purchase requisition number is written back to SharePoint.<br>
![sharepoint-purchase-requisition](../assets/images/yunio/articles/sharepoint-purchase-requisition.png){:class="img-responsive" }

