The following article shows how to use the Xtract ODP component of Xtract for Alteryx to load sales documents and customer master data from an SAP ERP system.

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:

- Load all customer master data from the SAP ERP system
- Process the extracted SAP data
- Load sales data using the delta mechanism of the Xtract ODP component

The delta mechanism of the Xtract ODP component allows loading only the added or changed data (since the last run) from an SAP ERP system.

[Download Workflow](../../assets/files/xfa/ODP-ERP-Delta.yxmd)

| SAP System | SAP Objects | Xtract for Alteryx Component | | --- | --- | --- | | SAP ERP | BW Extractors: *2LIS_11_VAITM* (Sales Document Item Data) & *0CUSTOMER_ATTR* (Customer Master Data) | Xtract ODP |

### Prerequisites

To use the Xtract ODP component, multiple prerequisites must be met, see [Documentation: ODP - Prerequisites](../../documentation/odp/#prerequisites).

### Delta Extraction of Sales Documents

Follow the steps below to load sales data from your SAP ERP system:

1. Drag & drop the Xtract ODP component into your Alteryx workflow .
1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).
1. Click **[Edit]** to open the main window of the Xtract ODP component.
1. In the main window of the component click . The window “Operational Data Provider Lookup” opens.
1. In the field **Name** enter the name of the sales data extractor: *2LIS_11_VAITM*. Use wildcards (\*), if needed.
1. Click and select the *2LIS_11_VAITM* extractor from the displayed list .
1. Click **[OK]**.
1. Select the fields you want to add to the output of the Xtract ODP component. For more information on selections and filters, see [Documentation: Xtract ODP - Selections](../../documentation/odp/selections/).
1. In the section *Update Mode* select the option **Delta Update** to only load data from the SAP system that was added or changed since the last run. By default, the first run loads all data from the SAP system. Deactivate the *On delta initialization* option **Extract data** to prevent loading of any data on the first run.\
   For more information on selections and filters, see [Documentation: Xtract ODP - Update Mode](../../documentation/odp/update-mode/).
1. Click **[Load live preview]** to display a live preview of the data without running an extraction.
1. Click **[OK]** to save your input.

The Xtract ODP component can now be used to access and process the extracted SAP sales data.

### Extraction of Customer Master Data

Follow the steps below to load customer master data from your SAP ERP system:

1. Drag & drop the Xtract ODP component into your Alteryx workflow .
1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).
1. Click **[Edit]** to open the main window of the Xtract ODP component.
1. In the main window of the component click . The window “Operational Data Provider Lookup” opens.
1. In the field **Name** enter the name of the customer master data extractor: *0CUSTOMER_ATTR*. Use wildcards (\*), if needed.
1. Click and select the *0CUSTOMER_ATTR* extractor from the displayed list .
1. Click **[OK]**.
1. Select the fields you want to add to the output of the Xtract ODP component. For more information on selections and filters, see [Documentation: Xtract ODP - Selections](../../documentation/odp/selections/).
1. Click **[Load live preview]** to display a live preview of the data without executing an extraction.
1. Click **[OK]** to save your input.

The Xtract ODP component can now be used to access and process the extracted SAP customer data.

______________________________________________________________________

#### Related Links

- [Alteryx Community - ODP based Delta Extraction of Sales and Customer Data from SAP ERP with Xtract for Alteryx](https://community.alteryx.com/t5/Community-Gallery/ODP-based-Delta-Extraction-of-Sales-and-Customer-Data-from-SAP/ta-p/1140120)
- [Documentation: Xtract ODP (Operational Data Provisioning)](../../documentation/odp/)
- [Sample Workflows](../../sample-workflows/)
