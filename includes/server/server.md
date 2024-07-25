
{{ productName }} is created for [distributed use](../introduction.md/#software-architecture). 
The {{ productName }} Service can be installed on a central server instance, e.g., a company-wide application server.
As a result, several users can connect their {{ productName }} Designer to the server instance to create and modify extractions.
The users must have access to the `{{ installationDir }}\config` directory on the server instance.


!!! tip
	Use the [access restrictions](../access-restrictions/index.md) in {{ productName }} to allow only users with administrator rights to perform fundamental changes on the central repository. 

### Install the {{ productName }} Server

When executing *{{ setup }}Setup.exe*, the {{ productName }} server is installed and started as a standard Windows service.
Make sure to mark the option **Server > Install Service** during the [Installation](../setup/installation.md).

![Services-Install](../../assets/images/documentation/server/Setup.png){:class="img-responsive"}

The {{ productName }} Service can be installed and removed using the `{{ installationDir }}\{{ service }}.exe` application.
{{ service }}.exe is used via the Windows command line and supports the following commands:

- `/i` - install Windows service
- `/u` - uninstall Windows service


**Example:**
``` console
{{ installationDir }}>{{ service }}.exe /i
{{ installationDir }}>{{ service }}.exe /u
```

{% if page.meta.product == "xtract-universal" %}

!!! tip
	There is a standalone version of the {{ productName }} Designer that can be used to connect to a central {{ productName }} server instance without any software installation, see [Installation of the Standalone Designer](../setup/installation.md/#installation-of-the-standalone-designer).

{% endif %}

### Windows Service

After installation, the Windows service can be started, stopped and configured via the Windows Services administration or the Task Manager.
For information on how to run the service under a dedicated Windows service account, see [Change Service Account](service-account.md).

![Services-Start-Server](../../assets/images/{{ abbr }}/documentation/server/Services.png){:class="img-responsive"}

### Ports

The {{ productName }} Server runs as a Windows service with the main process being the {{ service }}.exe that is located in the installation directory of {{ productName }}, e.g., `{{ installationDir }}\XtractService.exe`. 
The {{ service }}.exe starts two listener processes that listen on the following ports by default:

{% if page.meta.product == "xtract-universal" %}

Listener Process| Default Port | Comment
------------ | ------------- |--------
[*Theobald.Xu.Web.Listener.exe*](server-tasks.md/#theobald{{ abbr }}weblistenerexe) | 8065 (HTTP) and 8165 (HTTPS) | Port can be changed. <br>The web server accepts extraction calls via HTTP(S). 
[*Theobald.Xu.Rpc.Listener.exe*](server-tasks.md/#theobald{{ abbr }}rpclistenerexe) | 8064 | Port can be changed. <br>The configuration server communicates with the {{ productName }} Designer via a dedicated port. 

{% else %}

Listener Process| Default Port | Comment
------------ | ------------- | -------------
[*Theobald.Bc.Web.Listener.exe*](server-tasks.md/#theobald{{ abbr }}weblistenerexe) | 8097 (HTTP) and 8197 (HTTPS) | Port can be changed. <br>The web server accepts extraction calls from the Board server via HTTP(S).
[*Theobald.Bc.Rpc.Listener.exe*](server-tasks.md/#theobald{{ abbr }}rpclistenerexe) | 8096 | Port can be changed. <br>The configuration server communicates with the Board Connector Designer.
*BCAPIServer.exe* | 8098 | Port can not be changed, no encryption. <br>The API Server makes the extractions’ metadata available to the Board server’s data reader.

{% endif %}

If manual adjustments of the port number are necessary, ask your network team for the correct ports.

!!! note
	In the case of distributed use, create corresponding [Inbound Port Rules](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/create-an-inbound-port-rule) for the protocol type **TCP** of the listener processes mentioned above.

!!! warning
	**Changing the default ports**<br>
	After manually adjusting the default ports, the {{ productName }} service does not start.
	The stored ports are already assigned and must be adapted in the following config files. 
	Administrator access rights are required for altering the [config files](../setup/migration.md/#configuration-files).<br>
	`{{ installationDir }}\config\server\config\general.json`<br>
	`{{ installationDir }}\config\server\web\general.json`

