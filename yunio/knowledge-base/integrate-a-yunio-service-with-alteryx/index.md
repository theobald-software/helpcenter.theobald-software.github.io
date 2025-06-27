This article shows how to integrate a yunIO service with Alteryx.\
Alteryx is a software platform, which allows accessing, cleansing, testing, combining and analyzing output data. For more Information on Alteryx, see [Alteryx Official Website](https://www.alteryx.com/).

### Integrate yunIO in Alteryx

yunIO is the connector, which reads and writes data from and to SAP. For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

1. Open or create a new Alteryx workflow.
1. Add a **Download** tool to your workflow.
1. In the *Configuration* section of the **Download** tool, activate the option **Use Data Connection Manager (DCM)** and click **[Set Up Connection]**. The Alteryx Data Connection Manager (DCM) opens.
1. Click **[New]** to create a new data source.
1. Enter a name for the connection.
1. Copy the Base URL of your yunIO instance into the field **Base URL**.
1. Click **[Save]**. The subsection *Connection* is displayed.
1. In the subsection *Connection* select one of the following authentication methods:
1. *No Credentials* (if no authentication is set up in yunIO).
1. *Username* (if no authentication is set up in yunIO).
1. *Username and password* (if Basic Authentication is set up in yunIO, see [yunIO Documentation: Access Restrictions](../../documentation/access-restrictions/)).
1. Select an existing credential or click **+ Connect Credential** to create a new credential that can access and run yunIO services.
1. Click **[Link]** / **[Create and link]** to link the credential to the connection.
1. Click **[Connect]** to establish a connection to yunIO. The Data Connection Manager closes.
1. Use the name of a yunIO service as input for the **Download** tool to call the service.\
   For more information about calling and passing parameters to yunIO services, see [Call yunIO Services in Alteryx](#call-yunio-services-in-alteryx).

For more information about the Alteryx **Download** tool, see [Alteryx Designer Documentation: Download-Tool](https://help.alteryx.com/20231/designer/download-tool).

### Call yunIO Services in Alteryx

Follow the steps below to call yunIO services in Alteryx:

1. [Create a new SAP Connection](../../getting-started/#connect-to-sap) in yunIO.

1. [Create a new service](../../getting-started/#create-a-service) in yunIO. This example uses a yunIO transaction service that changes customer master data in SAP, see [Transaction XD02 - Change Customer Master Data](../transaction-xd02/).

1. Open or create a new Alteryx workflow.

1. Add an **Input Data** tool that provides values for the input parameters of the yunIO service. Example:

   | | Name | Value | | --- | --- | --- | | 1 | skipPopups | false | | 2 | CustomerNo | 1001 | | 3 | Name | The Fresh Loaf | | 4 | Street | Washington Boulevard | | 5 | HouseNo | 1000 | | 6 | PostalCode | 65936 | | 7 | City | Frankfurt | | 8 | Country | DE | | 9 | Region | 06 | | 10 | Phone | 069-467653-0 |

1. Add a **JSON Build** tool to format the input data into a JSON format that can be processed by the yunIO service. Example:

1. Add a **Formula** tool to add a new column *Service* to the result of the **JSON Build** tool. The column contains the name of the service you want to call e.g., `/Customer_Change_Alteryx`.

1. Add a **Download** tool to your workflow and set up a connection to yunIO, see [Integrate yunIO in Alteryx](#integrate-yunio-in-alteryx).

1. Select the *Service* column that contains the name of the service as the input for the URL field. Make sure that the combination of the base URL and the service name represents a valid URL e.g., `https://yunio.example.com:8175/services/Customer_Change_Alteryx`.

1. Add a **JSON Parse** tool to parse the JSON results returned by the service.

1. Add a **Browse** tool to view the parsed result message of the yunIO service.

1. Run the workflow. If the run is successful, the workflow returns the following message:\
   "Changes have been made".

### Sample Workflow

[Download yunIO_Customer_Update.yxwz](../../assets/files/yunio/yunIO_Customer_Update.yxwz)

______________________________________________________________________

#### Related Links

- [yunIO Documentation](../../documentation/introduction/)
- [Alteryx Designer Documentation: Data Connection Manager](https://help.alteryx.com/current/en/designer/tools/dcm---designer.html)
- [Alteryx Designer Documentation: Download-Tool](https://help.alteryx.com/current/en/designer/tools/developer/download-tool.html)
- [Alteryx Designer Documentation: JSON Build-Tool](https://help.alteryx.com/current/en/designer/tools/developer/json-parse-tool.html)
