This page shows how to connect to SAP.

Warning

**Missing Authorization.**\
To establish a connection to SAP, the access to general authority objects must be available. Adjust the [SAP Authority Objects](/yunio/documentation/setup-in-sap/sap-authority-objects#general-authorization-objects) accordingly.

**Supported Connection Methods**

- Connection to a single application server
- Connection to a message server (Load Balancing)

**Supported Authentication Methods**

- [Plain login](#connect-to-sap) using SAP username and password (system or dialogue user)
- [Secure Network Communication (SNC)](snc-authentication/) using username and password via basic authentication

### Connect to SAP

Follow the steps below to set up an SAP connection that uses an SAP username and password for authentication.

1. Navigate to the *Connections* menu at the left side navigation area of the Designer.
1. Click **[Add Connection]** to create a new SAP connection or click to edit an existing SAP connection.
1. Enter the system details of your SAP system in the subsection [*System*](settings/#system) .
1. Make sure the toggle in the subsection [*Authentication*](settings/#authentication) is set to *Plain* authentication.
1. Enter the SAP username and password of an SAP system or dialogue user.
1. Click **[Test Connection]** to validate the connection parameters .\
   A window with a status message opens in the bottom right corner of the window.
1. Click **[Save]** to save the connection settings.

Tip

Activate the option *Request credentials from callers when running services* to pass valid SAP credentials via Basic Authentication. To pass credentials, the access control setting [*Anonymous*](../access-restrictions/global-access/#settings) must be activated.

### Connect via Router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. For more information on SAP routers, see [SAP Help: SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).

Example:\
If the application server is "hamlet" and the router string is `/H/lear.theobald-software.com/H/`, set the host property to `/H/lear.theobald-software.com/H/hamlet`.
