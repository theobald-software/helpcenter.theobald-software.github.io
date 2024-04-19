---
title: Connect to SAP
description: How to connect to SAP via plain connection or secure network connection
---

### Create an SAP Connection

SAP connections are located in the *Connection* section of the yunIO Designer.
- To add a new SAP connection, click **[Add Connection]** :number-1:.<br>
- To edit an existing connection, click :yunio-edit-connection:.

![yunIO-Create-Connection](../../assets/images/yunio/web-ui.png){:class="img-responsive" }

Fill out the connection details and click **[Save]** to establish an SAP connection.<br>


### Connect via Plain Authentication

4. Click **[Test Connection]** to validate the connection parameters. <br>
A window with a status message opens in the bottom right corner of the window.

!!! note
    To use *Request credentials from callers when running services* the access control setting [*Anonymous*](../access-restrictions/global-access/#settings) must be activated.

### Connect via SNC Authentication

Secure Network Connection (SNC) enables authentication and transport encryption between SAP systems and third-party tools similar to yunIO.

Follow the steps below to set up an SAP connection that uses SNC:

1. Check the SAP profile parameter *snc/gssapi_lib* in SAP (transaction RZ10) to determine, which library is used for encryption in your SAP system. 
Your SAP Basis has to import and configure the same library on the application server and on the machine that runs yunIO.
2. [Create a new SAP connection](#create-an-sap-connection) or edit an existing connection.
3. Fill out the connection details about your SAP system in the subsection *System*.
4. In the subsection *Authentication*, use the toggle to switch to :material-toggle-switch: *Secure Network Communication*.
5. Enter the complete path to the library location in the field **SNC library path**, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.<br>
![yunIO-Authentication](../../assets/images/yunio/yunio-authentication.png){:class="img-responsive" }
6. Enter the SAP partner name configured for the SAP application server in the field **SNC partner name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.
7. Click **[Test Connection]** to validate the connection parameters. <br>
A window with a status message opens in the bottom right corner of the window.
8. Click **[Save]**.

### Connect via Router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. 
For more information on SAP routers, see [SAP Documentation: SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).

Example:
If the application server is "hamlet" and the router string is ``/H/lear.theobald-software.com/H/``, set the host property to ``/H/lear.theobald-software.com/H/hamlet``.


