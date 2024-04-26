---
title: Employee Onboarding using Nintex and yunIO
description: Employee Onboarding using Nintex and yunIO
---

The following article shows how to use the Nintex [Employee Onboarding scenario template](https://gallery.nintex.com/t/employee-onboarding) with yunIO to create new employees in SAP.<br>


### About

The [Employee Onboarding scenario template](https://gallery.nintex.com/t/employee-onboarding) provided by Nintex includes a form for filling in employee details. 
Based on the input, the workflow generates and sends the new hire their ‘Employee Contract’. 
Once the contract is signed, the workflow automatically stores the employee contract in a file storage system, starts user provisioning with Active Directory, and sends the new hire a welcome email.

This article leads you through all necessary steps to add a yunIO Xtension to the Employee Onboarding workflow to create the new employee in SAP.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

!!! note
    The parameters that are needed to create new employees are dependent on your customized SAP settings.

1. [Create a service](../getting-started.md/#create-a-service) in yunIO.
The depicted example uses the integration type *Transaction* for the service.
2. Record SAP transactions to create a new employee in SAP, see [Transaction PA40 - Personnel Actions](transaction-pa40.md). Example:<br>
![PA40](../assets/images/yunio/articles/pa40.gif){:class="img-responsive"  style="border:1px solid black;"}
3. Parameterize all mandatory SAP fields in the yunIO service. 
For information on how to parameterize services, see [Documentation: Parameterize Transactions](../documentation/transactions/transactions.md/#parameterize-transactions).
The depicted example uses the following input parameters:
	- *EntryDate*
	- *FirstName*
	- *LastName*
	- *BirthDate*
	- *BirthPlace*
	- *Language*
	- *Nationality*
	- *Street*
	- *City*
	- *PostalCode*
	
	The input parameters can be adjusted according to your individual scenario requirements.
	![PA40](../assets/images/yunio/articles/pa40-parameters.gif){:class="img-responsive"  style="border:1px solid black;"}
4. Click :yunio-run: to testrun the service in yunIO :number-1:. For more information, see [Documentation: Run Services in yunIO](../documentation/run-services.md/#run-services-in-yunio).
5. Click :yunio-run-download: to download the service definition :number-2:.<br>
![yunio-Services-Function-Download](../assets/images/yunio/articles/yunio-run-services-function-download.png){:class="img-responsive" }

<!---
&bull; Entry Date <br>
&bull; First Name <br>
&bull; Last Name <br>
&bull; Birth Date <br>
&bull; Birth Place <br>
&bull; Language <br>
&bull; Nationality <br>
&bull; Street <br>
&bull; City <br>
&bull; Postal Code <br>
-->

### Setup in Nintex

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as an Xtension in Nintex, see [Integrate a yunIO Service with Nintex: Configure a yunIO Xtension in Nintex](integrate-a-yunio-service-with-nintex.md/#configure-a-yunio-xtension-in-nintex).
2. Import the Nintex template for Employee Onboarding to your tenant, see [Nintex Gallery: Employee Onboarding](https://gallery.nintex.com/t/employee-onboarding).
3. Open the imported Nintex workflow.
4. Add the yunIO Xtension from step 1 after the contract is signed.<br>
![personnel-actions-nintex](../assets/images/yunio/articles/personnel-actions-nintex.png){:class="img-responsive"}
5. Edit the start form to include input fields for SAP (*EntryDate*, *FirstName*, *LastName*, *BirthDate*, *BirthPlace*, *Language*, *Nationality*, *Street*, *City*, *PostalCode*):<br>
![personnel-actions-nintex-form2](../assets/images/yunio/articles/personnel-actions-nintex-form2.png){:class="img-responsive" width="700px"}
6. Create a new variable for every *Date/Time* field to change the date to the format "DD.MM.YYYY". This format is required by SAP.<br>
![personnel-actions-nintex-date](../assets/images/yunio/articles/personnel-actions-nintex-date.png){:class="img-responsive" }
7. Map the parameters of the input form to the input fields of the yunIO Xtension.<br>
![personnel-actions-nintex-parameters](../assets/images/yunio/articles/personnel-actions-nintex-parameters.png){:class="img-responsive"}
8. Optional: Add a **Log to instance details** action after the yunIO Xtension to monitor any returned error messages.
9. Test the workflow.


*****
#### Related Links
- [yunIO Documentation: Transactions](../documentation/transactions/index.md)
- [Nintex Gallery: Employee Onboarding](https://gallery.nintex.com/t/employee-onboarding)
- [Integrate a yunIO Service with Nintex](integrate-a-yunio-service-with-nintex.md)
