---
title: SAP Connection
icon: simple/sap
description: SAP Connection
---

This page shows how to connect to SAP.

{% include "/sap-connection/sap-auth-warning.md" %}

**Supported Connection Methods** 

- Connection to a single application server
- Connection to a message server (Load Balancing) 

**Supported Authentication Methods**

- [Plain login](#connect-to-sap) using SAP username and password (system or dialogue user)
- [Secure Network Communication (SNC)](snc-authentication.md) using username and password via basic authentication

### Connect to SAP

Follow the steps below to set up an SAP connection that uses an SAP username and password for authentication.

1. Navigate to the  :yunio-nav-connections: *Connections* menu at the left side navigation area of the Designer.
2. Click **[Add Connection]** to create a new SAP connection or click :yunio-edit-connection: to edit an existing SAP connection.<br>
![yunIO-Create-Connection](../../assets/images/yunio/documentation/web-ui.png){:class="img-responsive" }
3. Enter the system details of your SAP system in the subsection [*System*](settings.md/#system) :number-1:.<br>
![yunIO-Create-Connection](../../assets/images/yunio/documentation/yunio-connections.png){:class="img-responsive" }
4. Make sure the toggle in the subsection [*Authentication*](settings.md/#authentication) :number-2: is set to :material-toggle-switch-off: *Plain* authentication.
5. Enter the SAP username and password of an SAP system or dialogue user.
6. Click **[Test Connection]** to validate the connection parameters :number-3:. <br>
A window with a status message opens in the bottom right corner of the window.
7. Click **[Save]** to save the connection settings. <br>

!!! tip
    Activate the option *Request credentials from callers when running services* to pass valid SAP credentials via Basic Authentication. 
	To pass credentials, the access control setting [*Anonymous*](../access-restrictions/global-access.md/#settings) must be activated.


{% include "/sap-connection/connect-via-router.md" %}