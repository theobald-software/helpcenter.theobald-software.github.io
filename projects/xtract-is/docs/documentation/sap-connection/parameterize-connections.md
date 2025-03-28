---
title: Parameterize Connections
description: Parameterize SAP Connections
---

This page shows how to parameterize an SAP connection.

### Parameterize an XTRACT Connection Manager

The properties of the XTRACT Connection Manager can be parameterized.
Follow the steps below to set up project parameters for Connection Manager properties:

1. Right-click an XTRACT Connection Manager and select **Parameterize...** from the context menu. The window "Parameterize" opens.
2. Select the property you want to parameterize.<br>
![connection-manager-parameterize](../../assets/images/documentation/sap-connection/xis/connection-manager-parameterize.png){:class="img-responsive"}
3. Select the option **Use existing parameter** to assign a parameter to the selected property or select the option **Create New Parameter** to create a new parameter.
4. In the section *Scope* select **Project** to create a project parameter. 
5. Click **[OK]**. The new project parameter is now available under *Project.params* in the "Solution Explorer".<br>
![connection-manager-project-params](../../assets/images/documentation/sap-connection/xis/connection-manager-project-params.png){:class="img-responsive"}

For more information on package and project parameters, see [Microsoft Documentation: Integration Services (SSIS) Package and Project Parameters](https://learn.microsoft.com/en-us/sql/integration-services/integration-services-ssis-package-and-project-parameters?view=sql-server-ver16).

### List of XTRACT Connection Manager Properties

|Property Name|Description|
|:----|:----|
| *AppServer* | Host name or IP address of the SAP application server. |
| *AttachesSapGui* | Set to *True* for Reports and BAPIs that require an installed SAP GUI.|
| *Client* | The three-digit number of the SAP client between 000 and 999. |
| *InstanceNumber* | A two-digit number between 00 and 99. |
| *InternalTableFunction*| The function module used for Xtract IS’ internal communication with SAP, e.g., retrieving metadata. |
| *Language* | The logon language for the SAP system, e.g., EN for English or DE for German. |
| *LegacyStorageMode* | Enables backward compatibility. SAP connection parameters are no longer stored as Connection Strings, but as Properties. |
| *LoadBalancingEnabled* | Enables load balancing (SAP message server). |
| *LogOnGroup*| SAP Logon group for Load Balancing. |
| *MessageServer* | Name or IP address of the SAP message server. |
| *Name* | Name of the Connection Manager.|
| *Password* | Password of the SAP user. |
| *PasswordObfuscated* | If *LegacySorageMode* is enabled, this property determines if the password is stored as plain text or if it is masked. |
| *RfcLibrary* | Select an RFC library to establish an RFC connection to an SAP system. |
| *SncEnabled* | Enables Secure Network Connection (SNC).|
| *SncLibraryPathX64* |  The complete path to the library location for 64 bit systems. |
| *SncLibraryPathX86* | The complete path to the library location for 32 bit systems.|
| *SncPartnerName* | The SAP Partner Name configured for the SAP application server, e.g., `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL` |
| *SncQualityOfProtection* | The SNC level of protection, e.g., *9 - Maximum* |
| *SystemId* | A three-digit System ID, e.g., MSS. |
| *TraceDirectory* | A local path to a folder, where you want to save the debug information. |
| *User*| Name of the SAP user.|


### Sensitive Environment Variables in SSISDB Catalog

Environment variables in the [SSISDB catalog](https://learn.microsoft.com/en-us/sql/integration-services/catalog/ssis-catalog?view=sql-server-ver16) can be used in combination with project parameters to achieve the following:
- Parameterize SSIS packages after deploying to the server.
- Encode sensitive data, e.g., SAP passwords.

Follow the steps below to set up a sensitive environment variable for an XTRACT Connection Manager property:

1. Configure an XTRACT Connection Manager that uses project parameters, see [Parameterize an XTRACT Connection Manager](#parameterize-an-xtract-connection-manager).
2. Deploy the project to an SSISDB catalog. 
3. Create an environment in the SSISDB catalog. 
4. Create a sensitive variable in the environment properties.<br>
![XIS_sensitive_variable_1](../../assets/images/documentation/sap-connection/xis/XIS_sensitive_variable_1.png){:class="img-responsive" }
5. Open the configuration menu of the project. The project parameters from step 1 are available in the parameter list.
6. Click **[...]** to assign a sensitive environment variable to a project parameter.<br>
![XIS_sensitive_variable_1](../../assets/images/documentation/sap-connection/xis/XIS_sensitive_variable_2.png){:class="img-responsive" }
7. Execute a package using the environment.

*****

#### Related Links
- [XTRACT Connection Manager](index.md/#connect-to-sap)
- [SAP Connection with SNC](snc-authentication.md)
- [Microsoft Documentation: SSIS Catalog](https://learn.microsoft.com/en-us/sql/integration-services/catalog/ssis-catalog?view=sql-server-ver16)
- [Microsoft Documentation: Access Control for Sensitive Data in Packages](https://learn.microsoft.com/en-us/sql/integration-services/security/access-control-for-sensitive-data-in-packages#protection-level-setting-and-the-ssisdb-catalog)
