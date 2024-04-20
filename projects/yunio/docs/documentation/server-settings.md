---
title: Server Settings
description: Server
tags:
   - ssl
---
 

This section contains an overview of the yunIO server settings in the  :yunio-nav-settings: *Settings* menu. 
Any changes made in this menu only take effect after clicking **[Save]** and restarting the yunIO Windows service.

### Services Endpoint

![Server-Settings-Endpoints](../assets/images/yunio/server-settings-endpoints.png){:class="img-responsive" }

#### Service URL Kind

The *Service URL Kind* defines the URL that is used to connect to yunIO services.


|  *Service URL Kind*  |  Description   |  
|----------|-------------|
| *Default* | If TLS is active, the first *Subject Alternative Name* provided by the X.509 certificate is used as the hostname, see [Transport Layer Security](#transport-layer-security). |
| *Custom* | Allows you to enter a custom hostname. Enter the hostname in the field **Custom Hostname** and click **[Save]** to update the OpenAPI definitions of all existing services. |
| *Azure Relay Hybrid Connection* | When an Azure Relay Hybrid Connection is set up, yunIO services use an Azure Relay address to become accessible to applications running in the Azure cloud. For more information on Azure Relay, refer to the knowledge base article [Establish an Azure Relay Hybrid Connection to yunIO](https://kb.theobald-software.com/yunio/establish-an-azure-relay-hybrid-connection). |

!!! note
    Wildcard certificates are supported. Enter the hostname of the certificate as a custom endpoint.

!!! tip
    To set up multiple endpoints, use multiple yunIO servers, one for each endpoint.

#### OpenAPI Target Kind

The *OpenAPI Target Kind* defines properties that can be added to the Swagger/OpenAPI json file of yunIO services.


|  *OpenAPI Target Kind*  |  Description   |  
|----------|-------------|
| *Default* | If this option is active, the Swagger/OpenAPI json file contains no additional properties. |
| *Nintex Gateway* | Select this option when integrating yunIO services with the [Nintex Gateway](https://help.nintex.com/en-US/nwc/Content/Gateway/InstallAndConfigure.htm). Nintex properties are added to into Swagger/OpenAPI json file and there is no need to manually change the swagger definition. For more information, refer to the knowledge base article [Integrating a yunIO Service via Nintex Gateway](https://kb.theobald-software.com/yunio/integrating-yunio-via-nintex-gateway).|

### Transport Layer Security

![Server-Settings-TLS](../assets/images/yunio/server-settings-tls.png){:class="img-responsive"}

Transport Layer Security (TLS) protocol allows the user to communicate with the respective service in a secure way by encrypting the communication with that service (HTTPS).
This requires the installation of an X.509 certificate, see [Knowledge Base: Installing an X.509 Certificate](https://kb.theobald-software.com/yunio/x509-certificate). <br>
For more information on TLS, see [Microsoft: Transport Layer Security Protocol](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol).

!!! note
    Depending on whether yunIO is hosted on a local server or a cloud environment, the procedure for certificate creation differs.
    Refer to the documentation available on the internet or contact your network administrators.

#### Certificate Access
1. Import the certificate to the Windows Certificate Store using the Microsoft Management Console (mmc).
2. If the certificate is not listed in the menu or in the Windows certificate store, install the X.509 certificate.
The certificate must have an *Subject Alternative Name*. When activating TLS, the *Subject Alternative Name* is used as the new hostname. 
A custom hostname can be entered in the [Services Endpoint](#endpoint) setting.
3. After importing the desired X.509 certificate, manage its private keys to add a permission entry for the Windows user. 
4. Click **[Pick Certificate]** and select an X.509 certificate from the list of available certificates.
5. Enter "NT Service\yunIO Service" within the Object picker UI, check the granted permission and apply the changes. <br>
![Access](../assets/images/yunio/x509-certificate-permission.png){:class="img-responsive" width="500px"}

For information on how to renew a certificate, see [Knowledge Base: Certificate Renewal for TLS](https://kb.theobald-software.com/yunio/certificate-renewal).

#### TLS enabled

![Server-Settings-TLS-Enabled](../assets/images/yunio/server-settings-tls-enabled.png){:class="img-responsive"}

Once a certificate is selected, the option **TLS enabled** is available.<br>
Enable or disable the usage of transport encryption for the web server.

!!! note
    To access the Designer via TLS, restart the yunIO server and connect to the Designer using the following URL pattern: `https://[host]:[port]`.
    If you cannot access the designer. because of problems with the TLS certificate, delete the `tls.json` file in the installation directory of yunIO e.g., `C:\Program Files\Theobald Software\yunIO\config\servers\tls.json`.
    Restart the yunIO server.


### Services, Designer and WebSockets

![Server-Settings-Ports](../assets/images/yunio/server-settings-ports.png){:class="img-responsive" }

In the subsections *Services*, *Designer* and *WebSockets* the ports for service consumption, Designer access and WebSocket configurations are defined. 

Valid port numbers range from 1-65535. 
It is not recommended to use ports below 1000, because they are often already taken and using them with different services can lead to service disruptions.

#### Default Ports

|Service Name|HTTP|HTTPS|Description|
|---|---|---|---|
|Services|8075|8175|This port is used by the web server, which handles the requests to invoke a service.|
|Designer|8077|8177|This port is used to open the yunIO Designer on a client machine.|
|WebSockets|8076|8176|This port is used by the yunIO Designer to read and write configurations, services, etc.|
