
This page shows how to create custom users and user groups in the {{ productName }} Designer.
To restrict access to the {{ productName }} Designer or Server, you can use already existing [Windows AD Users](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-default-user-accounts) and Groups or create your own custom users and groups.

!!! note 
	Windows AD Users and Groups are created outside of the Designer.
	Be careful to only add Windows AD *Security Groups* to the Designer.
	Users that are assigned to *Distribution Groups* are denied access at logon.

### Create Custom Users

Follow the steps below to create custom users:

1. Open **Server > Manage Users** from the main window of the Designer.<br>
![security-manage-users](../../assets/images/documentation/access-restriction/security-manage-users.png){:class="img-responsive"}
2. Click **[Add]** to create a new user.<br>
![security-manage-users](../../assets/images/documentation/access-restriction/users.png){:class="img-responsive"}
3. Enter a username and a password for the user.
4. Click **[OK]** to confirm your input.

At the time of user creation, no rights need to be assigned. For information on how to assign access rights, see [Access Management](access-management.md).

### Assign Custom Users to User Groups

Follow the steps below to assign custom users to user groups.
It is recommended to assign users to groups and grant access to particular actions instead of adding single users and granting them access one by one.

1. Open **Server >  Settings**. <br>
![security-manage-users](../../assets/images/documentation/access-restriction/server-settings_manage.png){:class="img-responsive"}
2. In the tab *Configuration Server*, activate the option **Restrict Designer access to the following users/groups**.<br>
![server-settings-add](../../assets/images/documentation/access-restriction/server-settings-add-group.png){:class="img-responsive"}
3. Click **[New]** to create a custom user group.<br>
![server-settings-add-groups](../../assets/images/documentation/access-restriction/server-seetings-create-user-group.png){:class="img-responsive"}
4. Click **[OK]** to close the server settings. If prompted, restart the Designer.
5. Open **Server > Manage Users** from the main window of the Designer.<br>
![security-manage-users](../../assets/images/documentation/access-restriction/security-manage-users.png){:class="img-responsive"}
6. Select an existing custom user and click **[Edit]**. The "Edit user" window opens.
7. Use the arrows **[<]** and **[>]** to assign and remove users to and from groups.<br>
![server-settings-add](../../assets/images/documentation/access-restriction/user-management-groups.png){:class="img-responsive"}
8. Click **[OK]** to confirm your input.

Custom users can only be assigned to custom user groups. 
Windows AD users can only be assigned to Windows AD groups, but not to custom user groups. 

### User Groups after Migration

As custom users can only be assigned to custom user groups and Windows AD users can only be assigned to Windows AD groups, the created custom user groups may disappear when migrating to a newer product version.
This does not affect access management, but the access at user level is resolved. 

To grant access at group level, the Windows AD users need to be assigned to new Windows AD groups.
