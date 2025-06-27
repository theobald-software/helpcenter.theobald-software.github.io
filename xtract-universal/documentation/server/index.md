Xtract Universal is created for [distributed use](../introduction/#software-architecture). The Xtract Universal Service can be installed on a central server instance, e.g., a company-wide application server. As a result, several users can connect their Xtract Universal Designer to the server instance to create and modify extractions. The users must have access to the `C:\Program Files\XtractUniversal\config` directory on the server instance.

Tip

Use the [access restrictions](../access-restrictions/) in Xtract Universal to allow only users with administrator rights to perform fundamental changes on the central repository.

### Install the Xtract Universal Server

When executing *XtractUniversalSetup.exe*, the Xtract Universal server is installed and started as a standard Windows service. Make sure to mark the option **Server > Install Service** during the [Installation](../setup/installation/).

The Xtract Universal Service can be installed and removed using the `C:\Program Files\XtractUniversal\XtractService.exe` application. XtractService.exe is used via the Windows command line and supports the following commands:

- `/i` - install Windows service
- `/u` - uninstall Windows service

**Example:**

```console
C:\Program Files\XtractUniversal>XtractService.exe /i
C:\Program Files\XtractUniversal>XtractService.exe /u

```

Tip

There is a standalone version of the Xtract Universal Designer that can be used to connect to a central Xtract Universal server instance without any software installation, see [Installation of the Standalone Designer](../setup/installation/#installation-of-the-standalone-designer).

### Windows Service

After installation, the Windows service can be started, stopped and configured via the Windows Services administration or the Task Manager. For information on how to run the service under a dedicated Windows service account, see [Change Service Account](service-account/).

### Ports

The Xtract Universal Server runs as a Windows service with the main process being the XtractService.exe that is located in the installation directory of Xtract Universal, e.g., `C:\Program Files\XtractUniversal\XtractService.exe`. The XtractService.exe starts two listener processes that listen on the following ports by default:

| Listener Process | Default Port | Comment | | --- | --- | --- | | [*Theobald.Xu.Web.Listener.exe*](server-tasks/#theobaldxuweblistenerexe) | 8065 (HTTP) and 8165 (HTTPS) | Port can be changed. The web server accepts extraction calls via HTTP(S). | | [*Theobald.Xu.Rpc.Listener.exe*](server-tasks/#theobaldxurpclistenerexe) | 8064 | Port can be changed. The configuration server communicates with the Xtract Universal Designer via a dedicated port. |

If manual adjustments of the port number are necessary, ask your network team for the correct ports.

Note

In the case of distributed use, create corresponding [Inbound Port Rules](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/create-an-inbound-port-rule) for the protocol type **TCP** of the listener processes mentioned above.

Warning

**Changing the default ports**\
After manually adjusting the default ports, the Xtract Universal service does not start. The stored ports are already assigned and must be adapted in the following config files. Administrator access rights are required for altering the [config files](../setup/migration/#configuration-files).\
`C:\Program Files\XtractUniversal\config\server\config\general.json`\
`C:\Program Files\XtractUniversal\config\server\web\general.json`
