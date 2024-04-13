---
title: Glossary
product: yunio
hide:
  - navigation
---

<div class="grid cards" markdown>

-   ![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section contains an alphabetical list of words often used in relation to yunIO.

</div>

### `Basic Authentication`

:   Basic Authentication is a method for an HTTP user agent (e.g., a web browser) to provide a username and password when making a request. 
	When Basic Authentication is set up for yunIO services, users are required to provide credentials before executing the service.

### `Designer`

:   "Designer" refers to the yunIO web UI. For more information, see [Designer](#).

### `Endpoint`

:   An endpoint in yunIO is a combination of the yunIO base URL and an HTTP method. For more information, see [Endpoint](#). 

### `Integration Type`

:   The integration type defines which SAP objects yunIO is to access. 
	yunIO offers the following integration types: 
	- [Function](#)
	- [Table](#) 
	- [Report](#)
	- [Transaction](#)

### `Service`

:   Services are the main entities in yunIO. 
	When called, a yunIO web service queries the data that is defined in the integration type of the service from the assigned SAP source. 
	The queried data is then returned to the caller in the HTTP response of the service. <br>
	A list of all services is displayed in the *Services* menu of the designer, see [Creating a Service](#). 

### `Source`

:   A source represents a connection to an SAP system. For more information, see [SAP Connection](#). 

### `Swagger/OpenAPI`

:   OpenAPI is the specification used by yunIO services. The services are implemented in the Swagger 2.0 format. For more information, see [OpenAPI Specification](https://swagger.io/specification/v2/). 

### `Transactions`

:   Transaction is the name of an integration type supported by yunIO, see [Transactions](#). In this context, transactions refer to SAP transaction codes that can be executed via yunIO. 

### `Transport Layer Security (TLS)`

:   TLS is a security protocol to ensure a safe data transfer when calling yunIO services via an HTTPS connection. For more information, see [Transport Layer Security](#). 

