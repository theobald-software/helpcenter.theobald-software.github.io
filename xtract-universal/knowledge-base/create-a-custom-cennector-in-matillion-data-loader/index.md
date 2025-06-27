The following article shows how to create a custom connector in Matillion Data Loader that loads SAP data via Xtract Universal into Snowflake. Matillion Data Loader is a cloud based data loading platform that extracts data from popular sources and loads it into cloud destinations, see [Official Website: Matillion Data Loader](https://www.matillion.com/products/data-loader/).

### Prerequisites

- Matillion Hub Account, see [Official Website](https://hub.matillion.com/).
- Snowflake Destination for the Matillion Data Loader pipeline, see [Matillion Documentation: Destinations - Set up Snowflake](https://docs.matillion.com/data-productivity-cloud/batch/docs/set-up-snowflake/).
- Xtract Universal must be accessible via the internet, e.g., by hosting Xtract Universal on a webserver with a static IP address or via third party tools like [ngrock](https://ngrok.com/).

### Setup in Xtract Universal

1. Create an extraction in Xtract Universal, see [Getting Started: Create an Extraction](../../getting-started/#create-an-extraction).\
   The depicted example scenario extracts the SAP table KNA1 (General Data in Customer Master).
1. Assign the `http-json` destination to the extraction, see [Documentation: Assign Destinations](../../documentation/destinations/json-via-http/).

### Create a Custom Connector in Matillion

To extract SAP data via Xtract Universal you must define a custom connector that contains the connection details of Xtract Universal, see [Matillion Documentation: Matillion Custom Connector Overview](https://docs.matillion.com/data-productivity-cloud/custom-connector/docs/custom-connector-overview/).

1. Open the website <https://create-connector.matillion.com/> and log in to create the custom connector.
1. Click **[Add Connector]** to create a new custom connector.
1. Click to change the name of the connector .
1. Copy the URL the extraction into the designated input field and select `GET` as the http method . The URL has the following format:\
   `<Protocol>://<HOST or IP address>:<Port>/?name=<Name of the Extraction>{&<parameter_i>=<value_i>}`\
   Example: the URL `https://6606-185-114-89-133.eu.ngrok.io/?name=kna1` calls the extraction "kna1" via ngrock. For more information about calling extractions via web services, see [Web API](../../web-api/#run-extractions).
1. To test the connection, enter your authentication details and click **[Send]** . If the connection is successful, the http response contains the SAP customer data extracted by Xtract Universal .
1. Click to edit the structure (names and data types) of the http response .\
   The structure is used when loading data into your destination. This example scenario only extracts the KNA1 columns *City_ORT01*, *Name 1_NAME1*, *Country Key_LAND1* and *Customer Number_KUNNR*.
1. Optional: If your extraction uses parameters, open the *Parameters* tab and define the parameters.
1. Click **[Save]** to save the connector.

The custom connector can now be used in a Matillion Data Loader pipeline.

Note

The Matillion Custom Connector must be set to the same region as Matillion Data Loader, e.g., US (N. Virginia).

### Create a Pipeline in Matillion Data Loader

Create a pipeline that triggers the extraction and writes the data to a destination, see [Matillion Documentation: Create a pipeline with custom connectors](https://docs.matillion.com/data-productivity-cloud/custom-connector/docs/custom-connector-batch-pipeline/).

1. Open the [Matillion Data Loader dashboard](https://dataloader.matillion.com/dashboard).
1. Click **[Add Pipeline]** to create a new pipeline .
1. Open the *Custom Connectors* tap to select the custom connector , that contains the connection settings for Xtract Universal.
1. Select the endpoint that calls the Xtract Universal extraction and use the arrow buttons to add the endpoint to the list **Endpoints to extract and load**. Note that a custom connector can have multiple endpoints.
1. Click **[Continue with x endpoint]** .
1. In the *General* tab enter a name for the target table under **Data warehouse table name**.
1. Open the *Authentication* tab and enter the authentication details for the Xtract Universal webservice.
1. Open the *Behaviour* tab and select the elements you want to include as columns in the target table. By default, all elements are selected.
1. Optional: If your endpoint uses parameters, open the *Parameters* tab to define the parameters.
1. Open the *Keys* tab and select a key column that is used to match existing data and prevent duplicates, e.g., *Customer Number_KUNNR* .
1. Click **[Continue]** .
1. Select the destination to which the data is written to, e.g., Snowflake . For more information on how to connect to Snowflake, see [Matillion Documentation: Connect to Snowflake](https://docs.matillion.com/data-productivity-cloud/batch/docs/connect-to-snowflake/).
1. Configure the destination, see [Matillion Documentation: Configure Snowflake](https://docs.matillion.com/data-productivity-cloud/batch/docs/connect-to-snowflake/#configure-snowflake).
1. Click **[Continue]**.
1. Enter a name for the pipeline .
1. Select at which interval pipeline is to be executed . The pipeline first runs after it is created and then continues with the specified frequency.
1. Click **[Create pipeline]** to create and run the pipeline . The pipeline is now listed in your dashboard.
1. Check if the data was successfully uploaded to the destination.

The pipeline now runs automatically at the specified frequency.

______________________________________________________________________

#### Related Links

- [Matillion Documentation: Snowflake Destination](https://docs.matillion.com/data-productivity-cloud/batch/docs/set-up-snowflake/)
- [Matillion Documentation: Matillion Custom Connector Overview](https://docs.matillion.com/data-productivity-cloud/custom-connector/docs/custom-connector-overview/)
- [Matillion Documentation: Create a pipeline with custom connectors](https://docs.matillion.com/data-productivity-cloud/custom-connector/docs/custom-connector-batch-pipeline/).
