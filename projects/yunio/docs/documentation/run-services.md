---
title: Run Services
description: How to testrun services directly in yunIO ad hwo to integrate services in 3rd-party-tool
---

This section shows how to test, integrate and pass parameters to services created in yunIO.


### Run Services in yunIO

Follow the steps below to pass parameters and testrun the service directly in yunIO:

1. Navigate to the  :yunio-nav-services: *Services* menu in the left side navigation of the Designer.
2. Click :yunio-run: to open the *Run Service* menu of a service.<br>
![yunIO-Services](../assets/images/yunio/yunio-run-services1.png){:class="img-responsive" }
2. If [Access Restrictions](./access-restrictions/index.md) are enabled, enter valid user credentials :number-1:. 
If no restrictions apply, the credentials input is grayed out.<br>
![Run-Service](../assets/images/yunio/run-service.png){:class="img-responsive" }
3. If the service requires input parameters, enter values for the parameters :number-2:. Use the **[ + ]** button to display nested items.
The depicted example uses an input parameter *NAME*.

	!!! tip
		Click **[Edit]** to add or delete parameters.
		
4. Click **[Run]** to execute the service. The response body of the service is displayed under *Output Parameters* :number-3:.

	!!! tip
		If the response body returns an error message, click **[Logs]** to open the [logs](logs.md) of the service run.

5. Click **[Close]** to close the *Run Service* menu.

The following control buttons in the *Run Service* menu regulate the display of input and output parameters.
	
| Button | Description |
|:---: | :--- |
| :yunio-run-collapse: | Collapses all parameter items. |
| :yunio-run-expand: | Expands all parameter items. |
| :yunio-run-download: | Saves all entered parameters in a .json file. The file can be used to reload the parameter values or to share values with other yunIO instances. |
| :yunio-run-upload: | Uploads parameter values from a local .json file. The json file can be created using :yunio-run-download:. |
| :yunio-run-reset: | Removes all defined input parameters. This option is only available for input parameters. |
| :yunio-run-fullscreen: | Displays the parameters in a full screen view. To close the full screen view, click **[ X ]**. |
 
### Integrate Services with 3rd-Party-Tools

Web services created with yunIO can be integrated into all cloud applications that support REST API/Swagger (OpenAPI), e.g. Power Automate, Nintex, etc.

- Click :yunio-copy: to copy the URL of the service definition to your clipboard.<br>
The service definition URL can be used by third-party-tools to load the meta data of the service.
- Click :yunio-download: to download the service definition.<br>
The service definition is saved as a JSON file that defines how to run the service. 
The JSON file can be imported into third-party tools.

![yunIO-Services](../assets/images/yunio/yunio-run-services-https.png){:class="img-responsive" }

{% include "yunio/3rd-party-integration.md" %}

### Pass Parameters

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
	We recommend using the POST method with [Transport Layer Security](server-settings.md) (HTTPS) to ensure data protection.
    Do not use the GET method to send sensible data, e.g. credentials.

