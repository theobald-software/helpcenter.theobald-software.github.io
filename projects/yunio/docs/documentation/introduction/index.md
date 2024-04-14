---
title: Introduction to yunIO
description: Introduction
---

<div class="grid cards" markdown>

-   ![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section contains a documentation for yunIO.

</div>

### About yunIO

yunIO is a no-code application for designing, automating, and integrating SAP processes in the cloud. <br>
The service offers easy integration of SAP data and business processes in different platforms and applications. 

yunIO provides REST-based services to read and write data from an to connected SAP systems. <br>
The web services can be easily integrated into your process automation solutions, e.g. Power Automate, Nintex, etc.

=== "Automation"

	![yunIO-Automation](../../assets/images/yunio/yunio-automation.png){:class="img-responsive" width="800px" }<br>

=== "Business Processes"

	![yunIO-Business-Processes](../../assets/images/yunio/yunio-business.png){:class="img-responsive" width="800px" }<br>

=== "Data Management"

	![yunIO-Data-Management](../../assets/images/yunio/yunio-data-management.png){:class="img-responsive" width="800px" }


### Software Architecture

yunIO comes with an embedded Web UI, the yunIO Designer, that can be accessed through a standard web browser. A Windows service enables connectivity with SAP. <br>
The yunIO service is installed on a local or cloud-hosted Windows server environment. <br>
If yunIO is installed on a local server environment, a Gateway instance of your choice (e.g. Microsoft om-premises data gateway) can be used to securely tunnel the connection. <br> 

![yunIO-Components](../../assets/images/yunio/theobald-software_architecture_yunio.png){:class="img-responsive" width="800px" }

### Integration Types

yunIO offers the following {{ components }} to cover a wide range of integration scenarios.


|  Functionality / SAP Objects  |  Description   |  
|----------|-------------|
| [**Function Module / BAPI**](./bapis-and-function-modules.md) | Execute BAPIs and Function Modules. |
| [**Report**](./report.md) | Extract SAP ABAP reports. | 
| [**SAP Table or View**](./table-and-views.md) | Extract data from SAP tables and views. |
| [**Transaction**](./transactions.md) | Execute SAP transactions without SAP GUI interaction. |

