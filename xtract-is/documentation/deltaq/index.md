This page shows how to use the Xtract DeltaQ component.\
The Xtract DeltaQ component can be used to extract delta data from SAP DataSources. This means that only recently added or changed data is extracted, instead of a full load. For more information on the delta process, see [Initialize a Delta Process](update-mode/#initialize-a-delta-process).

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#deltaq).
- Configure your SAP system to make DataSources accessible, see [SAP Customization for DeltaQ](../setup-in-sap/customization-for-deltaq/).
- To use DataSources in Xtract IS, make sure that the DataSources are activated in SAP.

Warning

**Missing Authorization.**\
To use the Xtract DeltaQ component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: DeltaQ](../setup-in-sap/sap-authority-objects/#deltaq) accordingly.

### SAP Transactions for Working with DeltaQ

The following SAP transaction can support you when working with DataSources:

- SBIW - SAP DataSources start page

- RSA3 - Extractor Checker

- RSA5 - Install DataSources and Hierarchies from Business Content

- RSA6 - Postprocess DataSources and Hierarchies

- SM59 - Configuration of RFC Connections

- SMQS - qRFC Monitor (QOUT Scheduler): Number of *Max.Conn.* should be at least 10

- SM37 - Background jobs

- SM58 - Transactional RFC

- SM50 - Process overview

- SMGW - Gateway Monitor

- RSA7 - Delta Queue Maintenance

- SMQ1 - qRFC Monitor (outbound queue)

- WE02 - IDoc list

- WE20 - Partner profiles

### Add an Xtract DeltaQ Component

Follow the steps below to add an Xtract Table component to your SSIS package:

1. Drag&drop the Xtract DeltaQ component from the SSIS toolbox into your data flow task.

1. Double-click the component. A connection manager is automatically assigned to the component and the main window of the component opens.

   Note

   If there are multiple connection managers, the window "Select Connection Manager" opens, see [SAP Connection](../sap-connection/#assign-connection-managers-to-xtract-components). Once a connection manager is selected, the main window of the component opens.

The majority of the functions of the component can be accessed in the main window.

### Look Up Extractors or Hierarchies

1. In the main window of the component, click **[]**. The window “Look Up OLTP Source” opens.

1. In the field **Name**, enter the name of a DataSource . Use wildcards ( * ), if needed.

1. Click **[]**. Search results are displayed.

1. Select an extractor and click **[OK]** to confirm.

1. In the main window of the component, click **[]**. The window “Look Up OLTP Source” opens

1. In the field **Name**, enter the name of a Hierarchy . Use wildcards ( * ), if needed. Alternatively, enter the description of a Hierarchy in the field **Description**.

1. Click **[]**. Search results are displayed.

1. Select an extractor of type *HIER* and click **[OK]** to confirm. All available Hierarchies are fetched and the window "Look Up DeltaQ Hierarchies" opens.

1. Select a Hierarchy and click **[OK]** to confirm.

The application now returns to the main window of the component.

### Define the Xtract DeltaQ Component

The Xtract DeltaQ component offers the following options for DataSource extractions:

1. Navigate to **Gateway** and click **[]** to look up an RFC destination. For more information, see [DeltaQ Customizing: Gateway](deltaq-customization/#gateway).

1. Navigate to **Logical Destination** and click **[]** to look up a logical RFC target system. For more information, see [DeltaQ Customizing: Logical Destination](deltaq-customization/#logical-destination).

1. Click **Customizing Check** to validate the DeltaQ Customizing on the SAP system. Make sure that all check marks are green. For more information, see [DeltaQ Customizing: Customizing Check](deltaq-customization/#customizing-check).

1. Select an [Update Mode](update-mode/), e.g., to initialize delta extractions.

1. Select the items you want to extract.

1. Optional: click the **Edit** option next to an item to [filter the data](selections/).

1. Click **[Activate]** to activate the extraction in SAP. After a successful activation, a corresponding status message opens:

   Note

   The activation is only required for the update modes *Delta*, *Full* or *Init*. Do not activate the extraction for the *Delta Update* mode.

1. Check the [Settings](settings/) before running the SSIS package.

1. Click **[OK]** to save the component.

1. Navigate to **Gateway** and click **[]** to look up an RFC destination. For more information, see [DeltaQ Customizing: Gateway](deltaq-customization/#gateway).

1. Navigate to **Logical Destination** and click **[]** to look up a logical RFC target system. For more information, see [DeltaQ Customizing: Logical Destination](deltaq-customization/#logical-destination).

1. Click **Customizing Check** to validate the DeltaQ Customizing on the SAP system. Make sure that all check marks are green. For more information, see [DeltaQ Customizing: Customizing Check](deltaq-customization/#customizing-check).

1. Select an [Update Mode](update-mode/), e.g., to initialize delta extractions.

1. Select the items you want to extract.

1. Optional: click the **Edit** option next to an item to [filter the data](selections/).

1. Optional: click **Settings** to set the language and output format of the Hierarchy, see [settings](settings/).

1. Click **[OK]** to save the component.

Tip

Unlike attributes and transactions, Hierarchies do not have to be activated.

You can now run the SSIS package.

### Execute DeltaQ in Parallel

When extracting multiple DataSources in parallel, it is recommended to use separate RFC destinations, e.g., XTRACT01, XTRACT02, etc.\
Parallel execution of DataSources with an identical RFC destination is possible, but not recommended.

______________________________________________________________________

#### Related Links

- [DeltaQ Troubleshooting Guide](../../troubleshooting/#deltaq-troubleshooting).
- [SAP Help: Activate the BI Content DataSource](https://help.sap.com/saphelp_scm70/helpdata/ru/d8/8f5738f988d439e10000009b38f842/content.htm?no_cache=true)
- [Knowledge Base Article: Create Generic DataSource using Function Module and Timestamps](../../knowledge-base/create-generic-datasource-using-function-module-and-timestamps/)
