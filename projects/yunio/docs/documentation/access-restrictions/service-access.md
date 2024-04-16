---
title: Service Access
description: Restrict access to specific services
---

Service access control allows you to restrict user access to specific services.<br>
The service access settings are accessible for every service in the :yunio-nav-services: *Services* menu.

### Settings 

To open the service access settings, click :yunio-nav-access-control: next to the service you want to restrict access to.

![service-access-control](../../assets/images/yunio/service-access-control-settings0.png){:class="img-responsive"}

#### Service Access

Activate or deactivate further restrictions of existing global access rights for the selected service. 

| Service Access  |  Description   |  
|----------|-------------|
| **Inherit** | If active, the global access rights apply to the service, see [Global Access](global-access.md). **Inherit** is the default setting. |
| **Custom** | If active, the access rights defined in the subsection [*Privileges*](#privileges) apply to the service. Custom service restrictions do not affect users with global *Server Admin* rights. |

#### Privileges

All users defined in the [:yunio-nav-user: *Users* menu](user-management.md) are listed in the subsection *Privileges*. 

Select a restriction level from the dropdown list next to the user name to assign a restriction level.
The following restriction levels are available:

| Restriction Level  |  Description   |  
|----------|-------------|
| *Modify*| The user can read, run and modify the service.|
| *Read / Execute* | The user can read and run the service. |
| *No access* | The user can not access, modify, read or run the service.|

### How to Restrict Access to Services

By default services inherit access restrictions from the server-level, see [Global Access](global-access.ms).
Follow the steps below to further restrict access on the service-level:

1. Navigate to the  :yunio-nav-services:  *Services* menu.
2. Click :yunio-nav-access-control: next to the service you want to restrict access to. 
The service access settings of the service open.<br>
![service-access-control](../../assets/images/yunio/service-access-control.png){:class="img-responsive"}
3. Set the *Service Access* to **Custom**, see [Service Access](#service-access) :number-1:.<br>
![service-access-control-settings](../../assets/images/yunio/service-access-control-settings.png){:class="img-responsive"}
4. Assign a restriction level to existing users, see [Privileges](#privileges) :number-2:.
5. Click **[Save]**.

When running the service, you are now prompted to enter user credentials (basic authentication).

!!! note
    When access rights from the server and service levels differ, the more restrictive access right applies, e.g., a user with *Read/Execute* privilege on the server level cannot be upgraded to *Modify* on the service level.
    The *Administrator* privilege is the only privilege on the server level that cannot be downgraded on the service level.

!!! tip
    Click **[Reset permissions]** to set all user rights to *No Access*.

