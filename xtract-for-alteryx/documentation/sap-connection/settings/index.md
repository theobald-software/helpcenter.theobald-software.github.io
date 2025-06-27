This page contains an overview of the SAP connection settings in the Xtract data source.

### Xtract Data Source Settings

Some input fields for the SAP connection vary depending on the selected connection method in the field **Technology**.

| Input Field | Description | | --- | --- | | **Data Source Name** | Name of the Xtract data source. | | **Host** | Host name or IP address of the application server (Property Host). | | **Sys. No.** | A two-digit number between 00 and 99 (Property SystemNumber). | | **Client** | A three-digit number of the SAP client between 000 and 999, e.g., 800. | | **Language** | The logon language for the SAP system, e.g., EN for English or DE for German. |

| Input Field | Description | | --- | --- | | **Data Source Name** | Name of the Xtract data source. | | **Message Server** | Name or IP address of the message server (Property MessageServer). | | **Client** | A three-digit number of the SAP client between 000 and 999, e.g., 800. | | **Language** | The logon language for the SAP system, e.g., EN for English or DE for German. |

Tip

Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.

### Advanced Options

#### RFC Libraries

Select an RFC library. The following RFC libraries are supported:

- NetWeaver RFC library (sapnwrfc.dll)
- Classic RFC library (librfc32.dll)

The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system. For more information on SAP libraries, see [SAP Help: RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm).

SAP does not [support librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) anymore.

#### Trace Directory

You can log debug information and save it locally.\
Enter a path to a local directory in the field **Trace directory** to save the debug information. For more information, see [Troubleshooting: Trace Directory](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).

Clear the **Trace Directory** field when it is not needed.

Warning

**Increase of used hard drive memory.**\
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically. Activate the debug logging only when necessary e.g., upon request of the support team.

### Expert Options

#### Use SAP GUI for specialized BAPIs

There are SAP Reports and BAPIs that require an installed SAP GUI even when they are called remotely.\
Activate this option only if necessary.

Warning

**'sapgui' start failed.**\
Sometimes SAP opens a pop-up window that requires input when running extractions. To deactivate pop-up windows, open the SAP GUI Logon pad and navigate to **Options... > Security Settings**. Click the **[Open Security Configuration]** button and select *Allow* as the **Default Action**. Apply the changes and close the SAP GUI Logon pad.
