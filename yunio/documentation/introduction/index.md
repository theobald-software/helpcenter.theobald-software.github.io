This section contains user documentation for yunIO.

Find more information on how to use and navigate through the user documentation in the section ["About this Documentation"](../about-this-documentation/).

### About yunIO

yunIO is a no-code application for designing, automating, and integrating SAP processes in the cloud. The service offers easy integration of SAP data and business processes in different platforms and applications.

yunIO provides REST-based services to read and write data from and to connected SAP systems. The web services can be easily integrated into your process automation solutions, e.g. Power Automate, Nintex, etc.

### Software Architecture

yunIO comes with an embedded Web UI, the yunIO Designer, that can be accessed through a standard web browser. A Windows service enables connectivity with SAP.

The yunIO service is installed on a local or cloud-hosted Windows server environment. If yunIO is installed on a local server environment, a Gateway instance of your choice (e.g. Microsoft on-premises data gateway) can be used to securely tunnel the connection.

### Integration Types

yunIO offers the following integration types to cover a wide range of integration scenarios.

| Integration Type | Description | | --- | --- | | [*Function module / BAPI*](../function-modules-and-bapis/) | Execute BAPIs and Function Modules. | | [*SAP Table and View*](../tables-and-views/) | Extract data from SAP tables and views. | | [*Transaction*](../transactions/) | Execute SAP transactions without SAP GUI interaction. | | [*Report*](../reports/) | Extract data from SAP ABAP reports. |
