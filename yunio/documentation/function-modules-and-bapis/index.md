This page shows how to use the *Function module / BAPI* integration type.\
The *Function module / BAPI* integration type can be used to parameterize and execute SAP function modules and BAPIs for automation.

### About Function Modules / BAPIs

Function modules are procedures that encapsulate and reuse global functions in the SAP system. SAP systems contain several predefined functions modules that can be called from any ABAP program. A Business Application Programming Interface (BAPI) is a remote function module that can access business data and processes of an SAP system from different systems.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#bapi).

Warning

**Missing Authorization.**\
To use the *Function module / BAPI* integration type, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: BAPI](../setup-in-sap/sap-authority-objects/#bapi) accordingly.

### Look up a Function Module / BAPI

1. [Create a new service](../../getting-started/#create-a-service) of integration type *Function module / BAPI*.
1. In the *Search SAP function modules* menu, enter the name of a Function Module / BAPI or a function groups . Use wildcards (\*) if needed.
1. Click **[Search]** to display the search results.
1. Select a source file from the list of available search results .

The settings of the *Function module / BAPI* integration type open.

### Define the *Function module / BAPI* Service

Set up parameters for the service. The necessary parameters of a *Function module / BAPI* service vary depending on the BAPI.

1. Add input parameters (data you want to send to SAP) to the service, see [Import Parameters](settings/#import-parameters).
1. Add output parameters (data you want to receive from SAP) to the service, see [Export Parameters](settings/#export-parameters).
1. Click **[Run]** to check the results, see [Running Services in yunIO](../run-services/#run-services-in-yunio).

### Parameterize the Service

Import parameters can be parameterized in the request body of the service. The depicted example shows the request body of a service where the Import Parameter *NAME* is set to *Supplied by Caller*.

Note

When parameterzing the import parameters of the service, make sure the input matches the data type of the parameters.

### Custom BAPIs

The use of custom BAPIs (Z function modules) is possible. Issues specific to Z function modules are not included in the scope of support provided by Theobald Software.
