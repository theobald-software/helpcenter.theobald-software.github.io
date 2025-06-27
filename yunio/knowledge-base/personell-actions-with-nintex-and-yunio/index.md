The following article shows how to use the Nintex [Employee Onboarding scenario template](https://gallery.nintex.com/t/employee-onboarding) with yunIO to create new employees in SAP.

### About

The [Employee Onboarding scenario template](https://gallery.nintex.com/t/employee-onboarding) provided by Nintex includes a form for filling in employee details. Based on the input, the workflow generates and sends the new hire their ‘Employee Contract’. Once the contract is signed, the workflow automatically stores the employee contract in a file storage system, starts user provisioning with Active Directory, and sends the new hire a welcome email.

This article leads you through all necessary steps to add a yunIO Xtension to the Employee Onboarding workflow to create the new employee in SAP.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP. For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

Note

The parameters that are needed to create new employees are dependent on your customized SAP settings.

1. [Create a service](../../getting-started/#create-a-service) in yunIO. The depicted example uses the integration type *Transaction* for the service.

1. Record SAP transactions to create a new employee in SAP, see [Transaction PA40 - Personnel Actions](../transaction-pa40/). Example:

1. Parameterize all mandatory SAP fields in the yunIO service. For information on how to parameterize services, see [Documentation: Parameterize Transactions](../../documentation/transactions/#parameterize-transactions). The depicted example uses the following input parameters:

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

1. Click to testrun the service in yunIO . For more information, see [Documentation: Run Services in yunIO](../../documentation/run-services/#run-services-in-yunio).

1. Click to download the service definition .

### Setup in Nintex

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as an Xtension in Nintex, see [Integrate a yunIO Service with Nintex: Configure a yunIO Xtension in Nintex](../integrate-a-yunio-service-with-nintex/#configure-a-yunio-xtension-in-nintex).
1. Import the Nintex template for Employee Onboarding to your tenant, see [Nintex Gallery: Employee Onboarding](https://gallery.nintex.com/t/employee-onboarding).
1. Open the imported Nintex workflow.
1. Add the yunIO Xtension from step 1 after the contract is signed.
1. Edit the start form to include input fields for SAP (*EntryDate*, *FirstName*, *LastName*, *BirthDate*, *BirthPlace*, *Language*, *Nationality*, *Street*, *City*, *PostalCode*):
1. Create a new variable for every *Date/Time* field to change the date to the format "DD.MM.YYYY". This format is required by SAP.
1. Map the parameters of the input form to the input fields of the yunIO Xtension.
1. Optional: Add a **Log to instance details** action after the yunIO Xtension to monitor any returned error messages.
1. Test the workflow.

______________________________________________________________________

#### Related Links

- [yunIO Documentation: Transactions](../../documentation/transactions/)
- [Nintex Gallery: Employee Onboarding](https://gallery.nintex.com/t/employee-onboarding)
- [Integrate a yunIO Service with Nintex](../integrate-a-yunio-service-with-nintex/)
