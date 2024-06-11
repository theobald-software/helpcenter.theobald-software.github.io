---
title: SNC Authentication
description: SNC Authentication
---

This page shows how to use encrypted communication via [Secure Network Communication (SNC)](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true) between {{ productName }} and SAP.

{% include "/sap-connection/snc-prerequisites.md" %}

### SNC Authentication

Follow the steps below to set up an SAP connection that uses SNC:

1. Navigate to the :yunio-nav-connections: *Connections* menu at the left side navigation area of the Designer.
2. Click **[Add Connection]** to create a new SAP connection or click :yunio-edit-connection: to edit an existing SAP connection.<br>
![yunIO-Create-Connection](../../assets/images/yunio/documentation/web-ui.png){:class="img-responsive" }
3. Enter the system details of your SAP system in the subsection *System*.
4. Set the toggle in the subsection *Authentication* to :material-toggle-switch: *Secure Network Communication* authentication.
5. Enter the complete path to the library location in the field **SNC library path**, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.<br>
![yunIO-Authentication](../../assets/images/yunio/documentation/yunio-authentication.png){:class="img-responsive" }
6. Enter the SAP partner name configured for the SAP application server in the field **SNC partner name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.
7. Click **[Test Connection]** to validate the connection parameters. <br>
A window with a status message opens in the bottom right corner of the window.
7. Click **[Save]** to save the connection settings. <br>

