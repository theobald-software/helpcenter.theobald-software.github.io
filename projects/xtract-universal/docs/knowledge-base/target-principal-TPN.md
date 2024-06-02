---
title: Target Principal Field (TPN)
description: How to use target principal field (TPN)
---

The following article describes how to use the **Target Principal** field when connecting the {{ productName }} Designer to an {{ productName }} Server.

The use of a Target Principal Name (TPN) is required to use Kerberos transport encryption or to authenticate Active Directory users. 
The Target Principal Name (TPN) can be either a User Principal Name (UPN) or a Service Principal Name (SPN).

!!! note
    The Target Principal Name only needs to be changed in the {{ productName }} Designer login screen if the service account of the {{ productName }} Windows service is changed.

### About Target Principal Name (TPN)

By default, the {{ productName }} Service is executed under the Local System Account. 

![XU service](../assets/images/xu/articles/xu_service.png){:class="img-responsive"}

In the Active Directory (AD), this user acts as a computer account. 
When dialing into a remote server where the service is not used in the local environment, both an UPN and an SPN can be used in the following form:

|Field | Syntax | Example |
|:---|:---|:---|
|{{ Abbr }} Server| `[host].[domain]:[port]` | theosoftw2012r2.theobald.local:8064 |
|Target Principal as **UPN** | `[AD-user]@[domain]`| svc_xusrv@theobald.local |
|Target Principal as **SPN** | `[service class]/[host]@[domain]` | HTTP/theosoftw2012r2.theobald.local@THEOBALD.LOCAL|


The Target Principal Name must correspond either to the UPN of the user under which the {{ productName }} Windows service is running, or to an SPN assigned to this user.
The UPN or SPN of the {{ productName }} Windows service executes the write processes for the target environments in this context. <br> 
Accordingly, this user must have the necessary write permissions for the database.

!!! note
    {{ productName }} can be used as a distributed application on a central application instance in the company network using appropriate UPNs or SPNs. <br> 
	All users connect to this remote server in the company network using the locally installed {{ productName }} Designer.

#### Example

=== "Local System Account"

	![XU3_Default Log on](../assets/images/xu/articles/log_on_local_system_account.png){height="340px"} 
	![XU3_Designer_Authentication](../assets/images/xu/articles/XU3_Designer_Authentication.png){height="340px"}

=== "User Principal Name (UPN)"

	![XU3_Default Log on](../assets/images/xu/articles/log_on_diesen_account.png){height="340px"}
	![XU3_Designer_Authentication](../assets/images/xu/articles/xu_UPN_steffan@.png){height="340px"}


### User Principal Name (UPN)

A User Principal Name identifies users in a domain. For more information, see [Microsoft Documentation: User Principal Name](https://docs.microsoft.com/en-us/windows/win32/secauthn/user-name-formats?redirectedfrom=MSDN#user-principal-name). 
A UPN is assigned in the following form:

|Field | Syntax | Example |
|:---|:---|:---|
|{{ Abbr }} Server| `[host].[domain]:[port]` | TODD.theobald.local:8064 (or localhost:8064)|
|Target Principal | `[AD-user]@[domain]`| steffan@theobald.local |

!!! note
    After changing the user context of the Windows service, the UPN or SPN for logging in to the {{ productName }} Server must also be adjusted.

Follow the steps below to configure the service to use with UPN:

1. Open *Windows Services (Local)*.
2. Right-click the {{ productName }} service to open the service **Properties**.<br>
![XU service](../assets/images/xu/articles/xu_service.png){:class="img-responsive"}
3. Open the *Log-on* tab and switch to **This Account**.
4. Click  **[Browse]** to look up Windows AD users.
5. Click **[Locations]** and select *Entire Directory*.<br>
![Search UPN](../assets/images/xu/articles/select_user_or_service_account.png){:class="img-responsive"}
6. Select an existing UPN or SPN and confirm with **[OK]**.<br>
![XU Log On UPN](../assets/images/xu/articles/log_on_diesen_account.png){:class="img-responsive"}
9. Apply the changes by restarting the {{ productName }} service.
10. Adjust the UPN in the Target Principal field when logging on to the {{ productName }} Designer.<br>
![XU TPN UPN](../assets/images/xu/articles/xu_UPN_steffan@.png){:class="img-responsive"}


### Service Principal Name (SPN)

A Service Principal Name is an identifier for services within an authentication domain. For more information, see [Microsoft Documentation: Service Principal Names](https://msdn.microsoft.com/en-us/library/ms677949(VS.85).aspx). 
An SPN is assigned in the following form:

|Field | Syntax | Example |
|:---|:---|:---|
|{{ Abbr }} Server | `[host].[domain]:[port]` | TODD.theobald.local:8064 (or localhost:8064)|
|Target Principal| `HOST/[hostname]@[domain]` | HOST/TODD.theobald.local@THEOBALD.LOCAL|


The service class and host name are required for authenticating a service instance to a logon account. 
Domain Admin rights are required for processing *Manage Service Accounts* in Active Directory Users and Computers. 

![AD User and computers - SPN](../assets/images/xu/articles/xu_ad_spn.png){:class="img-responsive"}

### Windows Service does not Start

When a service does not start, configure the service to use a user account with the following rights:

- **Local Security Policy > Local Policies > User Right Management**: *Log on as a service*
- Permissions for the installation folder and subfolders: *Modify*
- HTTP URL Access Control List e.g.,  `urlacl url=https://+:80/MyUri user=DOMAIN\user` 


***********
#### Related Links

- [Microsoft Documentation: User Principal Name](https://docs.microsoft.com/en-us/windows/win32/secauthn/user-name-formats?redirectedfrom=MSDN#user-principal-name)
- [Microsoft Documentation: Service Principal Names](https://msdn.microsoft.com/en-us/library/ms677949(VS.85).aspx)
