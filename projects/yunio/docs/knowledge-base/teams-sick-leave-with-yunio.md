---
title: Sync Microsoft Teams with SAP using Power Automate and yunIO
description: Sync Microsoft Teams with SAP using Power Automate and yunIO
---

The following article shows how to use forms in Microsoft Teams to send data to SAP.<br>
In the following scenario, a Teams form is used to transfer an employee's sick leave request to SAP.

### About
This article leads you through all necessary steps to set up the following process:

- When a sick leave is requested via a Microsoft Teams form, a Power Automate workflow is triggered. 
- The workflow starts an approval process.
- The workflow runs a yunIO service that transfers the details of the sick leave to SAP.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).<br>
Follow the steps below to set up a yunIO service that creates sick leaves in SAP:

!!! note
    Every type of sick leave requires a designated yunIO service.
    It is not possible to cover multiple types of sick leave in a single service, because of varying input screens.

!!! note
    The parameters that are needed to create a sick leave are dependent on your customized SAP settings.

1. [Create an SAP connection](../getting-started.md/#connect-to-sap) in yunIO. 
2. [Create a service](../getting-started.md/#create-a-service) in yunIO. The depicted example uses the integration type *Transaction* for the service.
3. Record the SAP transaction PA30 to create a new sick leave in SAP, e.g., for an annual sick leave (*Infotype* 2001 and *STy* 0100). <br>
![yunio-pa30](../assets/images/yunio/articles/yunio-pa30.gif){:class="img-responsive" style="border:1px solid black;"}
4. Set parameters for the following input options. For more information on how to parameterize transactions, see [Documentation: Parameterize Transactions](../documentation/transactions/index.md/#parameterize-transactions).
	- Employee number
	- Start date of the sick leave
	- End date of the sick leave
5. Click **[Save]** to save the service.
6. Click :yunio-run: to testrun the service in yunIO :number-1:. For more information, see [Documentation: Run Services in yunIO](../documentation/run-services.md/#run-services-in-yunio).
7. Click :yunio-run-download: to download the service definition :number-2:.<br>
![yunio-Services-Function-Download](../assets/images/yunio/articles/yunio-run-services-function-download.png){:class="img-responsive" }
8. Repeat steps 3 to 7 to create a service for every relevant type of sick leave:
	- Illness with certificate (*Infotype* 2001 and *STy* 0200)
	- Parental leave (*Infotype* 2001 and *STy* 0600)
	- Unpaid leave (*Infotype* 2001 and *STy* 0620) 
	- Sick child (*Infotype* 2001 and *STy* 0550).


### Setup in Microsoft Teams

The setup in Teams requires the installation of the Teams app [Team Forms](https://teamforms.app/) from the Microsoft Teams app store.

1. Open the Team Forms template "Sick Leave Request".
2. Open the editor for the mandatory input field **Leave type**.<br>
![teams-form-edit](../assets/images/yunio/articles/teams-form-edit.png){:class="img-responsive" }
3. Navigate to the tab *Data* and edit the labels and values of **Leave type** to provide the following SAP input:

    | Leave Type | Value | 
    | :------ |:--- | 
    | Annual Leave | 0100 | 
    | Illness with certificate | 0200 | 
    | Parental Leave | 0600 | 
    | Unpaid Leave | 0620 | 
    | Sick child (unpaid) | 0550 |
   
4. Click **[Save]** to save the changes.<br>
![teams-form-leave](../assets/images/yunio/articles/teams-form-leave.png){:class="img-responsive" }
5. Optional: Further edit the form to fit the requirements of your organization.
6. Click **[Publish]** to make the form available to your team.

For more information on Team Forms, see [Team Forms Documentation](https://docs.teamforms.app/).

### Setup in Power Automate

1. Integrate the yunIO services created in [Setup in yunIO](#setup-in-yunio) as Custom Connectors in Power Automate, see [Integrate a yunIO Service with Power Automate](integrate-a-yunio-service-with-power-automate.md#configure-a-yunio-custom-connector-in-power-automate).
2. Create a new workflow that is triggered when a new Team form is submitted.
3. Optional: Add an approval process for the leave request to the workflow.
5. Add a *Switch* action to the workflow that queries the value of the leave type defined in the Team form :number-1:.<br>
![teams-workflow](../assets/images/yunio/articles/teams-workflow.png){:class="img-responsive" }
6. Add the corresponding yunIO connector created in step 1 for each each leave type :number-2:.<br>
7. Map the data from the Team form to the input parameters of yunIO :number-3:. 
8. Make sure the input uses the right format, e.g., dates use the format `DD.mm.YYYY`.<br>
	
	!!! Tip
		The following code reformats dates returned by the Teams form from `yyyy-MM-dd'T'HH:mm:ss*SSSZZZZ` to `DD.mm.YYYY`:

		 ```
		 #Start date:
		 concat(substring(triggerOutputs()?['body/data/startDate'], 8, 2), '.', substring(triggerOutputs()?['body/data/startDate'], 5, 2), '.', substring(triggerOutputs()?['body/data/startDate'], 0, 4))
		 #End date:
		 concat(substring(triggerOutputs()?['body/data/endDate'], 8, 2), '.', substring(triggerOutputs()?['body/data/endDate'], 5, 2), '.', substring(triggerOutputs()?['body/data/endDate'], 0, 4))
		 ```
9. Optional: Send notifications when a sick leave is requested. 
10. Turn on the workflow.


### Trigger the Process

1. Open the Teams form and fill out the details of your sick leave.<br>
Enter the SAP employee number, select the leave type and the start and end date of the sick leave.
2. Submit the Teams form.
3. The Power Automate workflow runs and transfers the details of the sick leave to SAP.
