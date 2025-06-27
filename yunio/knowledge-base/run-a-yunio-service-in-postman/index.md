The following article shows how to run a yunIO service in Postman.

Postman is an API platform for building and using APIs. You can use Postmn as a Desktop App or in your browser. For more information on Postman, see [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/).

### Prerequisites in yunIO

1. [Create a service](../../getting-started/#create-a-service) in yunIO. The depicted example uses the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. The service has the following settings:
1. Set the Import Parameter NAME1 to *Supplied by Caller*.
1. Select all fields in the Table *CUSTOMER_T* for the output.
1. Click to copy the URL of the service definition or click to download the service definition.

### Load a yunIO Service in Postman

1. Open Postman in your browser or on your desktop.
1. To load a service definition in Postman, navigate to your workspace and click **[Import]**.
1. There are 2 ways to import a yunIO service definition:
1. Paste the URL of the service definition in the tab **Links**.
1. Upload a service definition from your harddrive in the tab **File**.
1. Click **[Import]** to import the service definition. The service definition is now available in your workspace.

Tip

If you don’t have any authentication, headers, or parameters to add to the service, open a new tab and paste the URL of your yunIO service endpoint into the main URL input line. Select *POST* from the method drop-down list and click **[Send]** to execute the service.

### Parameterize the Service

All parameters defined in yunIO are accessible in the request body of the service.\
To set parameters, edit the *Body* accordingly e.g., set the input parameter NAME1 to "John%" to get all data of customers whose names starts with "John".\
There are multiple ways to set the parameter:

- Enter the parameter value directly into the request body: `"NAME1": "John%"`
- Use a variable to set the parameter: `"NAME1": "{{my_variable}}"`\
  For more information on variables in Postman, see [Using Variables in Postman](https://learning.postman.com/docs/sending-requests/variables/).

### Run the Service

Note

If the option [*Request credentials from callers when running services*](../../documentation/sap-connection/settings/#authentication) is active in the connection settings in yunIO, you have to select *Basic Authentication* in the *Authentication* tab of Postman and enter your SAP credentials before running the service.

After importing the service definition, the URL of the service endpoint is available in the main URI input line. If not, enter the URL and select the *POST* method. Click **[Send]** to execute the service.

The results are displayed in the **Response** section of Postman.

______________________________________________________________________

#### Related Links

- [Web Version of Postman](https://www.postman.com/)
- [Postman Documentation: Using Variables in Postman](https://learning.postman.com/docs/sending-requests/variables/)
- [Getting Started: Run and Integrate Services](../../getting-started/#run-services)
