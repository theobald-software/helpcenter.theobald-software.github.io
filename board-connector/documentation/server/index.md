Board Connector is created for [distributed use](../introduction/#software-architecture). The Board Connector Service can be installed on a central server instance, e.g., a company-wide application server. As a result, several users can connect their Board Connector Designer to the server instance to create and modify extractions. The users must have access to the `C:\Program Files\BOARDConnector\config` directory on the server instance.

Tip

Use the [access restrictions](../access-restrictions/) in Board Connector to allow only users with administrator rights to perform fundamental changes on the central repository.

### Install the Board Connector Server

When executing *BOARDConnectorSetup.exe*, the Board Connector server is installed and started as a standard Windows service. Make sure to mark the option **Server > Install Service** during the [Installation](../setup/installation/).

The Board Connector Service can be installed and removed using the `C:\Program Files\BOARDConnector\BCService.exe` application. BCService.exe is used via the Windows command line and supports the following commands:

- `/i` - install Windows service
- `/u` - uninstall Windows service

**Example:**

```console
C:\Program Files\BOARDConnector>BCService.exe /i
C:\Program Files\BOARDConnector>BCService.exe /u

```

### Windows Service

After installation, the Windows service can be started, stopped and configured via the Windows Services administration or the Task Manager. For information on how to run the service under a dedicated Windows service account, see [Change Service Account](service-account/).

### Ports

The Board Connector Server runs as a Windows service with the main process being the BCService.exe that is located in the installation directory of Board Connector, e.g., `C:\Program Files\BOARDConnector\XtractService.exe`. The BCService.exe starts two listener processes that listen on the following ports by default:

| Listener Process | Default Port | Comment | | --- | --- | --- | | [*Theobald.Bc.Web.Listener.exe*](server-tasks/#theobaldbcweblistenerexe) | 8097 (HTTP) and 8197 (HTTPS) | Port can be changed. The web server accepts extraction calls from the Board server via HTTP(S). | | [*Theobald.Bc.Rpc.Listener.exe*](server-tasks/#theobaldbcrpclistenerexe) | 8096 | Port can be changed. The configuration server communicates with the Board Connector Designer. | | *BCAPIServer.exe* | 8098 | Port can not be changed, no encryption. The API Server makes the extractions’ metadata available to the Board server’s data reader. |

If manual adjustments of the port number are necessary, ask your network team for the correct ports.

Note

In the case of distributed use, create corresponding [Inbound Port Rules](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/create-an-inbound-port-rule) for the protocol type **TCP** of the listener processes mentioned above.

Warning

**Changing the default ports**\
After manually adjusting the default ports, the Board Connector service does not start. The stored ports are already assigned and must be adapted in the following config files. Administrator access rights are required for altering the [config files](../setup/migration/#configuration-files).\
`C:\Program Files\BOARDConnector\config\server\config\general.json`\
`C:\Program Files\BOARDConnector\config\server\web\general.json`
