
The following article shows how to operate {{ productName }} with load balancing.<br>
In this context, load balancing means to distribute the network traffic across multiple Windows servers to avoid server overloads. 

### About Load Balancing

In today's highly interconnected world, a load balancer is a crucial tool for managing traffic effectively. 
When distributing network traffic caused by {{ productName }}, it is necessary to use a load balancer between different Windows servers that run the {{ productName }}.

Typical use cases for load balancing include:
- Improved Performance: By distributing network traffic across multiple {{ productName }} servers, a load balancer can significantly improve the performance of your network. 
This can be especially important for high-traffic applications that require fast and reliable access.
- Increased Reliability: Load balancing can help increase the reliability of your network by ensuring that no one {{ productName }} server becomes overloaded with traffic. 
This helps to prevent downtime and ensures that your network is always available.
- Scalability: A load balancer can also help improve the scalability of your network by allowing you to easily add or remove {{ productName }} servers as needed. 
This can be important for businesses that experience sudden spikes in traffic.
- Centralized Management: A load balancer allows you to manage multiple servers from a single location. 
This makes it easier to monitor your network, troubleshoot issues, and make necessary adjustments.
- Parallel Processing: A load balancer allows running multiple extractions at the same time on different servers. 
This increases the amount of extractions that can be run in parallel.

![Load-Balancer](../assets/images/articles/{{ abbr }}/load-balancer.png){:class="img-responsive" width="700px"}

### Prerequisites

- Every {{ productName }} servers needs a server license, see [Documentation: Licensing](../documentation/setup/license.md).
- All {{ productName }} servers must share the same configuration folder, e.g., by mapping the configuration folder to an external shared storage. 
The configuration folder contains the settings for the destinations, extractions, sources, server and users.
The folder is located in the installation directory of {{ productName }}, e.g., `{{ installationDir }}\config`.
For versioning of the configuration folder you can use [git version control](deploy-extractions-using-Git-version-control.md).
- All {{ productName }} installations must use the same software version to avoid any version compatibility issues.

### The Process

A load balancer setup with two {{ productName }} servers uses the following process when processing requests:
<!--- Sending a request to a load balancer setup with two {{ productName }} servers triggers the following process: -->

1. A client sends a web request to the load balancer. The load balancer is the entry point for all incoming web requests, so it's the first component to receive the request.
2. The load balancer uses a predefined algorithm (e.g., round-robin, least connections, or IP hash) to select the {{ productName }} server to handle the incoming web request.
3. The load balancer forwards the request to the selected {{ productName }} server.
4. The selected {{ productName }} server processes the incoming request and sends the response back to the load balancer.
5. The load balancer receives the response from the selected server and forwards the response to the client.
6. For subsequent web requests, the load balancer repeats this process.


This setting can also be configured to act as Active / Standby servers. <br>
This means you have multiple servers with identical configurations and applications where only one server is active, while the others remain passive or on standby until a failover event occurs.

The load balancer forwards incoming requests to the active server. If the active server fails, the load balancer will automatically switch to one of the passive servers.
The goal is to provide redundancy and ensure high availability and reliability of critical applications and services.

****
#### Related Links:
- [Deploying Extractions Using Git Version Control](deploy-extractions-using-Git-version-control.md)
- [Documentation: Installation and Update - Program Directory Files](../documentation/setup/installation.md/#installation-directory-files)
