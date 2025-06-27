The following article shows how to connect Xtract Universal to Power BI Service via an on-premises data gateway.

### Prerequisites

To connect Power BI Service with Xtract Universal, the following components are required:

- [Power BI Account](https://powerbi.microsoft.com/en-us/landing/signin/)
- [On-premises Data Gateway](https://powerbi.microsoft.com/en-us/gateway/)

### Setup On-Premises Data Gateway

To set up the on-premises Data Gateway using the Power BI Custom Connector, follow the steps below.

Note

The connection to Xtract Universal can be created using [Power Query M-script](../../documentation/destinations/Power-BI-Connector/#power-query-m-script) or [Power BI Custom Connector](../../documentation/destinations/Power-BI-Connector/#power-bi-custom-connector). Using Power Query M-script does not require further configuration.

1. Install the on-premises Data Gateway on the Xtract Universal application server.
1. Configure the Data Gateway, see [Use the on-premises data gateway app](https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-app).
1. Switch to the *Connectors* tab and define the path to the Power BI Custom Connector e.g., in `[Documents]\Power BI Desktop\Custom Connectors`.\
   The *XtractUniversalExtension* will then be displayed as a Custom Data Connector.

### Add Xtract Universal as a Data Source

Note

Make sure that [enabling and usage of custom connectors in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-custom-connectors#enable-and-use-custom-connectors) is activated. If the Xtract Universal entry is not available in the drop-down menu, check the configuration in the [Setup On-Premises Data Gateway](#setup-on-premises-data-gateway) section.

The configured on-premises data gateway is integrated into the Power BI service environment. A DataSource to the Xtract Universal Server must then be set up:

1. In the Power BI service, navigate to **Settings > Manage connections and gateways** and click **[New]**. The "New Connection" window opens.
1. Select the connection type *On-premises* (default setting). Fill in the necessary fields:
1. Select the previously created "Data Gateway" from the **Gateway cluster name** drop-down menu.
1. Assign a name to the connection under **Connection name**.
1. Select *Xtract Universal Extraction* under **Connection type**. If the Xtract Universal entry is not available in the drop-down menu, check the configuration in [Setup On-Premisess Data Gateway](#setup-on-premises-data-gateway).
1. Specify the Xract Universal Server URL under **Server**, see [Connect to an Xtract Universal Server](../../documentation/designer/#connect-the-designer-to-a-server).
1. Decide on the appropriate authentication method under **Authentication Method**, see [Single Sign On and SAP Authentication](../../documentation/destinations/Power-BI-Connector/#single-sign-on-and-sap-authentication).
1. Click **[Create]**. A connection is created and an automatic connection test is performed.

### Data Source Status

1. Check the Data Source Status and other settings, e.g., **Schedules Refresh**.
1. Under **[Workspace settings]** navigate to the settings of the dataset **[...]**.
1. Expand the entry **Gateway and cloud connections**.
1. Configure the connection of the uploaded Power BI dataset.
1. Select the defined gateway and select the name of the connection (here XtractUniversal) from the drop-down menu under the option **Extention**.\
   The status of the connection is checked and reported back in the **Status** field.

______________________________________________________________________

#### Related Links

- [Documentation: Power BI Connector](../../documentation/destinations/Power-BI-Connector/)
