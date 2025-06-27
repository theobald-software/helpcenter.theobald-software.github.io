This page contains an overview of the server settings of Board Connector. To open the server settings, navigate to **[Server] > [Settings]** in the main window of the Designer.

Note

The settings are stored in the following directory: `C:\Program Files\BOARDConnector\config\server` (by default).

## Configuration Server

The configuration server communicates with the Board Connector Designer.

### Designer Connection

#### Port

Defines the port number for communication between Server and Designer. The default is 8096. If you set a different port, add the new port number to the host name on the [logon screen](../../designer/#connect-the-designer-to-a-server) (`[host name]:[port]`).

#### Max. age of log files (days)

Defines the maximum age of the config server [log files](../../logs/#access-server-logs) in days. After this period the log files are deleted.

### Authentication Methods

Defines the authentication methods that are available when connecting a Designer to the Board Connector Server. For more information, see [Authentication Between Designer and Server](../../access-restrictions/#authentication-between-designer-and-server).

#### Select X.509 certificate

Select an X.509 certificate that is used for for transport encryption and authentication, when [custom users](../../access-restrictions/user-management/) connect a Designer to the Server. For more information, see [Install an X.509 certificate](../../access-restrictions/install-x.509-certificate/).

### Access Management

Defines which users and user groups have access to the Designer. For more information, see [Access Management](../../access-restrictions/).

## Web Server

The web server accepts extraction calls via HTTP(S).

### Protocol

| Protocol | Description | | --- | --- | | **HTTP - Unrestricted** | Runs extractions as an HTTP-URL. | | **HTTPS - Unrestricted** | Runs extractions as an HTTPS-URL. This enables secure data transfer via HTTPS. | | **HTTPS - Restricted to AD users with Designer read access** | This setting enables an additional access control for running an extraction. Extractions can only be executed by Windows AD users with at least a read permission (*Read*) in the *Configuration Server* tab. For more information, see [Restrict Access to Windows AD Users (Kerberos Authentication)](../../access-restrictions/restrict-server-access/#restrict-access-to-windows-ad-users-kerberos-authentication). | | **HTTPS - Restricted to custom users with Designer read access** | This setting enables an additional access control for running an extraction. Extractions can only be executed by custom users with at least a read permission (*Read*) in the *Configuration Server* tab. For more information, see [Restrict Access to Custom Users (Basic Authentication)](../../access-restrictions/restrict-server-access/#restrict-access-to-custom-users-basic-authentication). |

Note

To receive data via HTTPS, the [installation of a TLS certificate](../../access-restrictions/install-x.509-certificate/) is required on the server that runs the Board Connector service.

#### HTTP Port

Defines the port number, on which the Server receives HTTP requests of an extraction.

#### HTTPS Port

Defines the port number, on which the Server receives HTTPS requests of an extraction.

#### Select X.509 certificate

Select an X.509 certificate that is used for for transport encryption and authentication, when running extractions. For more information, see [Install an X.509 certificate](../../access-restrictions/install-x.509-certificate/).

### Misc

#### Keep log files (days)

Defines the maximum age of the web server [log files](../../logs/#access-extraction-logs) in days. After this period the log files are deleted.

#### Collect Usage Data

When this checkbox is active, usage data is stored in your local installation directory. If this checkbox is deactivated, no usage data is collected.

#### Upload Usage Data

When this checkbox is active, usage data is sent to Theobald Software for analysis. An internet connection is required to use this option.

#### Transfer SAP Object Names

When this checkbox is active, the names of the SAP objects that are used in extractions are included in the usage data upload.

#### Enable setup distribution for clients

Defines whether the setup of the product version that runs on the server needs to be downloaded. When an older Designer version is connected to a newer Server version, you are prompted to download and update the Designer with the product version.

### Result cache

#### Target directory

Sets the directory for the buffer files. The default directory is the result-cache folder in the installation directory, e.g., `C:\Program Files\BOARDConnector\result-cache`.

#### Max. cached runs

Defines the maximum count of results of different extractions in the buffer.

#### Max. age (minutes)

Defines the maximum age in minutes of an extraction in the buffer.
