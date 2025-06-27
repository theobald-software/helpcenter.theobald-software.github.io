This page shows how to create custom users and user groups in the Xtract Universal Designer. To restrict access to the Xtract Universal Designer or Server, you can use already existing [Windows AD Users](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-default-user-accounts) and Groups or create your own custom users and groups.

Note

Windows AD Users and Groups are created outside of the Designer. Be careful to only add Windows AD *Security Groups* to the Designer. Users that are assigned to *Distribution Groups* are denied access at logon.

### Create Custom Users

Follow the steps below to create custom users:

1. Open **Server > Manage Users** from the main window of the Designer.
1. Click **[Add]** to create a new user.
1. Enter a username and a password for the user.
1. Click **[OK]** to confirm your input.

At the time of user creation, no rights need to be assigned. For information on how to assign access rights, see [Designer Access](../restrict-designer-access/).

### Assign Custom Users to User Groups

Follow the steps below to assign custom users to user groups. It is recommended to assign users to groups and grant access to particular actions instead of adding single users and granting them access one by one.

1. Open **Server > Settings**.
1. In the tab *Configuration Server*, activate the option **Restrict Designer access to the following users/groups**.
1. Click **[New]** to create a custom user group.
1. Click **[OK]** to close the server settings. If prompted, restart the Designer.
1. Open **Server > Manage Users** from the main window of the Designer.
1. Select an existing custom user and click **[Edit]**. The "Edit user" window opens.
1. Use the arrows **[\<]** and **[>]** to assign and remove users to and from groups.
1. Click **[OK]** to confirm your input.

Custom users can only be assigned to custom user groups. Windows AD users can only be assigned to Windows AD groups, but not to custom user groups.

### User Groups after Migration

As custom users can only be assigned to custom user groups and Windows AD users can only be assigned to Windows AD groups, the created custom user groups may disappear when migrating to a newer product version. This does not affect access management, but the access at user level is resolved.

To grant access at group level, the Windows AD users need to be assigned to new Windows AD groups.
