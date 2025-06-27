This page shows how to connect to SAP using the "XTRACT" Connection Manager.\
A connection to an SAP system is required to perform tasks like designing ETL packages, extracting metadata, previewing and deploying data using Xtract IS.

An SAP connection is required to use any Xtract IS component.

Warning

**Missing Authorization.**\
To establish a connection to SAP, the access to general authority objects must be available. Adjust the [SAP Authority Objects](/xtract-is/documentation/setup-in-sap/sap-authority-objects#general-authorization-objects) accordingly.

**Supported Connection Methods**

- Connection to a single application server
- Connection to a message server (Load Balancing)

**Supported Authentication Methods**

- [Plain login](#connect-to-sap) using SAP username and password (system or dialogue user)
- [Secure Network Communication (SNC)](snc-authentication/) using username and password via basic authentication

### Connect to SAP

Follow the steps below to create a connection manager that connects to SAP:

1. Create a new Integration Services Project and add a data flow task.

1. Right-click within the “Solution Explorer” area and select **New Connection Manager** from the context menu. The window "Add SSIS Connection Manager" opens.

1. Select the XTRACT Connection Manager from the list of available connection managers and click **[Add...]**. The XTRACT Connection Manager is now available in the connection managers area.

1. Double-click the XTRACT Connection Manager. The window "XTRACT Connection Manager" opens.

1. Enter the system details of your SAP system and enter the SAP username and password of an SAP system or dialogue user.

   Tip

   Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.

1. Click **[Test connection]** to validate the connection parameters.

1. Click **[OK]** to save the XTRACT Connection Manager.

For information on how to connect to SAP using Secure Network Authentication (SNC), see [SNC Authentication](snc-authentication/). For information on properties and parameters of the XTRACT Connection Manager, see [Parameterize Connections](parameterize-connections/).

### Assign Connection Managers to Xtract Components

XTRACT Connection Managers can be assigned to an Xtract component automatically or manually.

1. Create an XTRACT Connection Manager as shown in [Connect to SAP](#connect-to-sap).

1. Drag & drop an Xtract component into the data flow task.

1. Double-click the Xtract component to automatically assign a Connection Manager. If there are multiple XTRACT Connection Managers, the window "Select Connection Manager" opens.

   Select an XTRACT Connection Manager and click **[OK]**.

1. Create an XTRACT Connection Manager as shown in [Connect to SAP](#connect-to-sap).

1. Drag & drop an Xtract component into the data flow task.

1. Select the Xtract component and click *Show Advanced Editor* in the *Properties* menu of the component . The window "Advanced Editor" opens .

1. Select an XTRACT Connection Manager from the drop-down-menu .

1. Confirm your selection with **[OK]** .

Note

The Xtract BAPI component does not have an *Advanced Editor*.\
To manually assign an XTRACT Connection Manager to an Xtract BAPI component, open the main window of the Xtract BAPI component. The main window of the Xtract BAPI component contains a *Change Connection Manager* menu.

### Connect via Router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. For more information on SAP routers, see [SAP Help: SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).

Example:\
If the application server is "hamlet" and the router string is `/H/lear.theobald-software.com/H/`, set the host property to `/H/lear.theobald-software.com/H/hamlet`.

______________________________________________________________________

#### Related Links

- [Microsoft Documentation: Create connection managers](https://learn.microsoft.com/en-us/sql/integration-services/connection-manager/integration-services-ssis-connections?view=sql-server-ver16#create-connection-managers).
- [XTRACT Connection Manager: Properties and Parameters](parameterize-connections/)
- [Connection Settings](settings/)
