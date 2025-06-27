This page shows how to restrict access to Xtract Universal's Designer to Windows AD users or [custom users](../user-management/#create-custom-users). Access restrictions on the Designer ensure that only dedicated users can create or edit destinations, sources and extractions. Access restrictions can be performed on several levels.

### Restrict Access to the Designer

Follow the steps below to restrict the access to the Designer to specific [users or user groups](../user-management/). By default, the access restrictions also apply to extractions and sources.

1. Open **Server > Settings** from the main window of the Designer.
1. In the tab *Configuration Server*, activate the option **Restrict Designer access to the following users/groups**.
1. Activate or deactivate authentication methods for the users or user groups, see [Authentication Between Designer and Server](../#authentication-between-designer-and-server).
1. Click **[Add]** to add existing Windows AD users or [custom users](../user-management/#create-custom-users).
1. Assign access rights to the users or user groups.

After access restrictions are set up, only designated users can connect to the Xtract Universal server when [starting the Designer](../../designer/).

### Restriction Levels

A user group can have one of the following access rights. These rights only concern actions (read, create, modify) that can be performed within the Designer.

| Restriction Level | Description | | --- | --- | | Read | Members of this group have read access, but cannot edit extractions. | | Modify | Members of this group have the same access rights as users with "read" rights. Furthermore, users with "modify" rights can edit existing extractions, but cannot create or clone extractions. | | Create | Members of this group have identical access rights as the users with "modify" rights. In addition, users with "create" rights can create and clone extractions, but cannot perform any admin activities. | | Admin | Members of this group have all rights, no restrictions and can perform admin tasks. Admin activities include changing server settings, accessing server logs, or editing users and connections (SAP and target environments). Access restrictions on extractions or the source system are ignored. |

### Restrict Access to Extractions

Access control can be performed at extraction level.\
By default, the Designer access restrictions also apply to extractions and sources.

1. Double-click an extraction. The main window of the extraction type opens.
1. Click **[General Settings]**. The window "General Settings" opens.
1. In the tab *Security*, add or remove existing users and assign access rights to the users.

The access control on the extraction level overrides the settings at server level.

### Restrict Access to Sources

Access control can be performed at the SAP source level.\
By default, the Designer access restrictions also apply to extractions and sources.

1. Open **Server > Manage Sources** from the main window. The window "Manage Sources" opens.
1. Click **[]** to edit an existing connection. The window "Change Source" opens.
1. In the tab *Access Control*, add or remove existing users and assign access rights to the users.

The access control on the source level overrides the settings at server level.
