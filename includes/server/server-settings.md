
This page contains an overview of the server settings of {{ productName }}.
To open the server settings, navigate to **[Server] > [Settings]** in the main window of the Designer.

![server-settings_manage](../../assets/images/documentation/access-restriction/server-settings_manage.png)

!!! note
	The settings are stored in the following directory: `{{ installationDir }}\config\server` (by default).

### Configuration Server

 The configuration server communicates with the {{ productName }} Designer.
 
![ServerSettings_config_tab](../../assets/images/documentation/server/ServerSettings_config_tab.png){:class="img-responsive"}

#### Port 

Defines the port number for communication between Server and Designer. 
The default is {{ port_designer }}. If you set a different port, add the new port number to the host name on the [logon screen](../designer.md/#connect-the-designer-to-a-server) ([host name]:[port]).

#### Max. age of log files (days)
Defines the maximum age of the config server [log files](../logs.md#access-server-logs) in days. 
After this period the log files are deleted.

#### Authentication methods
Defines the authentication methods that are available when connecting a Designer to the {{ productName }} Server.
For more information, see [Authentication Between Designer and Server](../access-restrictions/index.md/#authentication-between-designer-and-server).

#### Select X.509 certificate
Select an X.509 certificate that is used for for transport encryption and authentication, when [custom users](../access-restrictions/user-management.md) connect a Designer to the Server.
For more information, see [Install an X.509 certificate](../access-restrictions/install-x.509-certificate.md).


#### Access Management
Defines which users and user groups have access to the Designer.
For more information, see [Access Management](../access-restrictions/index.md).


## Web Server

The web server accepts extraction calls via HTTP(S).

![ServerSettings_web_tab](../../assets/images/documentation/server/ServerSettings_web_tab.png){:class="img-responsive"} 


### Protocol 

| Protocol | Description |
|------------|--------------|
| **HTTP - Unrestricted**| Runs extractions as an HTTP-URL. |
| **HTTPS - Unrestricted** | Runs extractions as an HTTPS-URL. This enables secure data transfer via HTTPS. |
| **HTTPS - Restricted to AD users with Designer read access** | This setting enables an additional access control for running an extraction. Extractions can only be executed by Windows AD users with at least a read permission (*Read*) in the *Configuration Server* tab. For more information, see [Restrict Access to Windows AD Users (Kerberos Authentication)](../access-restrictions/restrict-server-access.md/#restrict-access-to-windows-ad-users-kerberos-authentication). | 
| **HTTPS - Restricted to custom users with Designer read access** | This setting enables an additional access control for running an extraction. Extractions can only be executed by custom users with at least a read permission (*Read*) in the *Configuration Server* tab. For more information, see [Restrict Access to Custom Users (Basic Authentication)](../access-restrictions/restrict-server-access.md/#restrict-access-to-custom-users-basic-authentication). | 
 
!!! note
	To receive data via HTTPS, the [installation of a TLS certificate](../access-restrictions/install-x.509-certificate.md) is required on the server that runs the {{ productName }} service. <br>

#### HTTP Port

Defines the port number, on which the Server receives HTTP requests of an extraction. 

#### HTTPS Port

Defines the port number, on which the Server receives HTTPS requests of an extraction.

#### Select X.509 certificate
Select an X.509 certificate that is used for for transport encryption and authentication, when running extractions.
For more information, see [Install an X.509 certificate](../access-restrictions/install-x.509-certificate.md).

### Misc

####  Keep log files (days)
Defines the maximum age of the web server [log files](../logs.md#access-extraction-logs) in days. After this period the log files are deleted.

#### Collect Usage Data

When this checkbox is active, usage data is stored in your local installation directory.
If this checkbox is deactivated, no usage data is collected.

Usage data is collected to improve {{ productName }} and better cater to customer needs. Typical usage data includes the source type and extraction types that are in use, referenced SAP objects, statistics about axtraction runs, etc.
For more information, refer to our [privacy policy](https://theobald-software.com/en/privacy-policy/).


#### Upload Usage Data

When this checkbox is active, usage data is sent to Theobald Software for analysis. 
This requires a connection to the internet.


#### Enable setup distribution for clients
Defines whether the setup of the product version that runs on the server needs to be downloaded. 
When an older Designer version is connected to a newer Server version, you are prompted to download and update the Designer with the product version. 


### Result cache

{% if page.meta.product == "xtract-universal" %}

!!! note
	The *Cache results* option is only available in [pull destinations](../destinations/index.md) (e.g., PBI, Qlik etc.).

{% endif %}

| Option | Description |
|------------|--------------|
| **Target directory** | Sets the directory for the buffer files. The default directory is the result-cache folder in the installation directory, e.g., `{{ installationDir }}\result-cache`. |
| **Max. cached runs** | Defines the maximum count of results of different extractions in the buffer. |
| **Max. age (minutes)** | Defines the maximum age in minutes of an extraction in the buffer. |

