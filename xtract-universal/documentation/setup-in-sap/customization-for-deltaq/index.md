Before using the DeltaQ extraction type, an RFC destination has to be created in the SAP system. This page shows how to create and configure the RFC destination.

Follow the steps on this page in the following order:

1. [Create an RFC Destination of Type R/3](#create-an-rfc-destination-of-type-r3)
1. [Execute the Function Module RSAP_BIW_CONNECT_40](#execute-the-function-module-rsap_biw_connect_40)
1. [Delete the RFC Destination](#delete-the-rfc-destination)
1. [Create an RFC Destination of Type T](#create-an-rfc-destination-of-type-t)
1. [Execute the Function Module RSAS_RBWBCRL_STORE](#execute-the-function-module-rsas_rbwbcrl_store)
1. [Register the RFC Server](#register-the-rfc-server)
1. [qRFC Monitor (QOUT Scheduler)](#qrfc-monitor-qout-scheduler)

### Create an RFC Destination of Type R/3

1. Go to SAP transaction *SM59* to create an RFC destination of type *R/3*.
1. Enter a name in the field **RFC Destination**, e.g., *XTRACT01*. The name of the RFC Destination is needed again for later configuration.

### Execute the Function Module RSAP_BIW_CONNECT_40

Note

Executing the Function Module RSAP_BIW_CONNECT_40 can be performed on modifiable that the SAP systems.

The function module RSAP_BIW_CONNECT_40 creates a connection to a Business Information Warehouse. Go to SAP transaction *SE37* and execute the function module RSAP_BIW_CONNECT_40 with the following import parameters:

| Import Parameter | Example Value | Comment | | --- | --- | --- | | I_LANGU | EN | | | I_SLOGSYS | T90CLNT090 | Logical name of the source system. If you do not know this, look in table **T000** for the respective client (LOGSYS field). | | I_LOGSYS | XTRACT01 | | | I_STEXT | Xtract Destination | | | I_BASIC_IDOC | ZXTIDOC | Unique name of the RFC destinations. | | I_TSPREFIX | XT | Unique name of the RFC destinations. | | I_SAPRL | 700 | Automatically set by the SAP system. | | I_RESTORE | X | |

### Delete the RFC Destination

Go to SAP transaction *SM59* and delete the RFC destination of type *R/3* via **Detailed View > Menu > Delete**.

### Create an RFC Destination of Type T

1. Go to SAP transaction *SM59* to create an RFC destination of type *T=TCP/IP* that has the same name as the deleted RFC destination of type *R/3*.

1. Select the activation type **Registered Server Program**.

1. Set the following parameters:

   | Tab | Field | Example Value | Comment | | --- | --- | --- | --- | | Technical Settings | RFC Destination | XTRACT01 | | | Technical Settings | Connection Type | TCP/IP Connection | | | Technical Settings | Description 1 | Xtract Destination | | | Technical Settings | Activation Type | Registered Server Program | | | Technical Settings | Program ID | XTRACT01 | | | Technical Settings | Gateway Host | sap-erp-as05.example.com | Name or IP address of the SAP system. | | Technical Settings | Gateway service | sapgw00 | In the form sapgwnn, where nn is the SAP instance number (between *00* and *99*). | | Special Options | Serializer | Classic Serializer | Select the "Classic serializer". |

### Execute the Function Module RSAS_RBWBCRL_STORE

Go to SAP transaction *SE37* and execute the function module **RSAS_RBWBCRL_STORE** to activate the target system.

| Import Parameter | Example Value | Comment | | --- | --- | --- | | I_RBWBCRL | 700 | The current SAP system release number | | I_RLOGSYS | XTRACT01 | |

### Register the RFC Server

Note

Registering an RFC Server in SAP Releases is only necessary for SAP kernel version 720 and higher.

1. [Set the profile parameter *gw/acl_mode*](../../../knowledge-base/register-rfc-server-in-sap-releases-in-kernel-release-720-and-higher/#change-the-profile-parameter-gwacl_mode) to 0 (default is 1).
1. [Add the RFC Destination to the whitelist](../../../knowledge-base/register-rfc-server-in-sap-releases-in-kernel-release-720-and-higher/#define-a-whitelist-of-programs-at-the-sap-gateway) of programs that can register at the SAP Gateway.

For more information, refer to the [Knowledge Base Article: Register an RFC Server in SAP with Kernel Release 720 and higher](../../../knowledge-base/register-rfc-server-in-sap-releases-in-kernel-release-720-and-higher/).

### qRFC Monitor (QOUT Scheduler)

1. Go to SAP transaction *SMQS*.
1. Select the created RFC destination, e.g., *XTRACT01*.
1. Click **Register without activation** and set the parameter **Max.Verb.** to 10. Increase this value in case of parallel execution of several DeltaQ extraction types on the same RFC destination.

Note

For DeltaQ customizing errors, refer to the [DeltaQ Troubleshooting](../../../troubleshooting/#deltaq-troubleshooting).
