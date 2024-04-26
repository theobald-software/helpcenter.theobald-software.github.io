---
title: Global Access
description: Restrict access to the yunIO server and the yunIO Designer
---

Global access control allows you to restrict user access to the yunIO server and the yunIO Designer.<br>
The global access settings are accessible in the :yunio-nav-access-control: *Access Control* menu.

### Settings

To open the global access settings, navigate to the  :yunio-nav-access-control: *Access Control* menu.

![Access_Control](../../assets/images/yunio/access-control.png){:class="img-responsive"}

#### Server Access

Activate or deactivate access control for the Designer and the server. 

|  Server Access  |  Description   |  
|----------|-------------|
| **Anonymous** | If active, anyone can access the Designer and execute services. **Anonymous** is the default setting.
| **Authenticated** |  is active, only defined users with a designated restriction level have access to the Designer and the server. This option is available, if at least one user is defined and [Transport Layer Security](../server-settings.md) is enabled. |

#### Privileges

All users defined in the [:yunio-nav-user: *Users* menu](user-management.md) are listed in the subsection *Privileges*. 

Select a restriction level from the dropdown list next to the user name to assign a restriction level.
The following restriction levels are available:

|  Restriction Level  |  Description   |  
|----------|-------------|
| *Server Admin* | No restrictions. |
| *Create / Modify* | The user can login to the designer, create new connections and services, and modify existing ones. The user cannot make changes to users, access control, or server settings.|
| *Read / Execute*| The user can login to the Designer, but cannot make any changes. The user can run services.|
| *No access* | The user can not login to the Designer or run any services. This option can be used to temporarily disable users from using yunIO. |


### Restrict Designer and Server Access

Follow the steps below to restrict the access to the Designer and the server. 
By default, the access restrictions also apply to services.
To define custom access restrictions for services, see [Service Access](service-access.md).

1. Navigate to the  :yunio-nav-settings: *Settings* menu.
2. Enable *Transport Layer Security*, see [Server Settings: Transport Layer Security](../server-settings.md#transport-layer-security).<br>
3. Restart the Windows yunIO service and connect to the Designer using an HTTPS connection.
4. Navigate to the  :yunio-nav-access-control: *Access Control* menu.
5. Set the *Server Access* to **Authenticated**, see [Server Access](#settings) :number-1:. <br>
![Access_Control](../../assets/images/yunio/access-control2.png){:class="img-responsive"}
6. Assign a restriction level to existing users, see [Privileges](#privileges) :number-2:.
7. Click **[Save]**. 
8. Restart the Windows yunIO service again.

When connecting to the Designer, you are now prompted to enter user credentials:<br>
![Login](../../assets/images/yunio/yunio-login.png){:class="img-responsive" }

!!! note
    If you lock yourself out and cannot login to the Designer, delete the `permission.json` file in the installation directory of yunIO e.g., `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
    Restart the yunIO server afterwards.

!!! tip
    You can also use SAP credentials for basic authentication, see [SAP Connection](../sap-connection/index.md).
    Using SAP credentials and custom user credentials for basic authentication in parallel is not supported.

