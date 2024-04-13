---
title: Execute Services
description: Run Services
---

The following section shows how to test, integrate and pass parameters to services created in yunIO.


### Testing a Service in yunIO

Follow the steps below to pass parameters and testrun the service directly in yunIO:

1. Click :yunio-run: to open the *Run Service* menu.<br>
![yunIO-Services](../assets/images/yunio/yunio-run-services1.png){:class="img-responsive" }
2. If [Global Access Control](./access-control#global-access-control) and/or [Service Access Control](./access-control#service-access-control) is enabled, enter valid credentials (1).
3. If the service requires input parameters, enter values for the parameters listed under *Input Parameters* (2). Use the **[ + ]** button to display nested items.
The depicted example uses an input parameter *NAME*.<br>
![Run-Service](../assets/images/yunio/run-service.png){:class="img-responsive" }
4. Click **[Run]**. The response body of the service is displayed under *Output Parameters* (3).<br>
If the service returns multiple items, expand the items to view the content or use the control buttons to adjust the display of the parameters.<br>
If the response body returns an error message, click **[Logs]** to open the [logs](./logs) of the service run.
5. Click **[Close]** to close the *Run Service* menu.

!!! tip
    Click **[Edit]** to edit the service or add parameters.

#### Run Menu

The following control buttons in the *Run Service* menu regulate the display of input and output parameters.

- :yunio-run-collapse: collapses all parameter items.
- :yunio-run-expand: expands all parameter items.
- :yunio-run-download: saves all entered parameters in a .json file. The file can be used to reload the parameter values or to share values with other yunIO instances.
- :yunio-run-upload: uploads parameter values from a local .json file. The json file can be created using :yunio-run-download:.
- :yunio-run-reset: removes all defined input parameters. This option is only available for input parameters.
- :yunio-run-fullscreen: displays the parameters in a full screen view. To close the full screen view, click **[ X ]**.

 
### Integrating a Service

Web services created with yunIO can be integrated into all cloud applications that support REST API/Swagger (OpenAPI), e.g. Power Automate, Nintex, etc.

- Click :yunio-copy: to copy the URL of the service definition to your clipboard.<br>
The service definition URL can be used by third-party-tools to load the meta data of the service.
- Click :yunio-download: to download the service definition.<br>
The service definition is saved as a JSON file that defines how to run the service. 
The JSON file can be imported into third-party tools.

![yunIO-Services](../assets/images/yunio/yunio-run-services-https.png){:class="img-responsive" }

Examples for integrating yunIO services in third-party-tools:

[:simple-powerautomate: Integrating a yunIO Service with Power Automate](../knowledge-base/index.md/#microsoft-power-automate-integration)

[:3rd-party-nintex: Integrating a yunIO Service with Nintex](../knowledge-base/index.md/#nintex-automation-cloud-integration)

[:3rd-party-alteryx: Integrating a yunIO Service with Alteryx](../knowledge-base/index.md/#alteryx-integration)


### Passing Parameters

How parameters are passed to a yunIO service, depends on the http method that is used to call the service.
yunIO supports the http methods `POST` and `GET`, see [POST vs GET](#post-vs-get).

=== "POST"

	Parameters are listed in the request body of a service.
	Edit the request body to assign values to the parameters. The depicted example uses an input parameter *NAME1*:<br>
	![yunIO-HTTP-POST](../assets/images/yunio/http-post.png){:class="img-responsive" }

=== "GET"

	Parameters are available as query parameters in the service URL. 
	Use query parameters to assign values or add the values directly in the service URL. The depicted example uses an input parameter *NAME1*:<br>
	![yunIO-HTTP-GET](../assets/images/yunio/http-get.png){:class="img-responsive" }

!!! note
    If URL parameters contain characters other than `A–Z a–z 0–9 - _ . ! ~ * ' ( )` use an escape sequence for the characters. 
	Some characters can break the URL, e.g., `# % &`.

### POST vs GET
yunIO services support the http methods `POST` and `GET`.

|  | POST | GET |
|--|-----|------|
| Data Length | No restrictions. | Maximum URL length is 2048 characters. |
| Parameters | Parameters are part of the http request body. | Supports query parameters in the URL. | 
| Data Safety | Parameters are not stored in the browser history or in web server logs. | Parameters are visible in the service URL. Data is cached. | 
| Data Types | No restrictions. | Only supports ASCII characters. |

!!! tip "Recommendation"
	We recommend using the POST method with [Transport Layer Security](./server-settings) (HTTPS) to ensure data protection.
    Do not use the GET method to send sensible data, e.g. credentials.

When using the OpenAPI/Swagger definition, `POST` and `GET` are both available. Select the method you want to use:<br>
![yunIO-HTTP-POST-GET](../assets/images/yunio/http-post-get.png){:class="img-responsive" }


*****
#### Related Links
- [SAP Table or Views](./table-and-views)
- [Function Module / BAPI](./bapis-and-function-modules)
- [Transactions](./transactions)
- [Report](./report)
