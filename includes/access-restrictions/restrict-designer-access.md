
This page shows how to restrict access to {{ productName }}'s Designer to Windows AD users or [custom users](user-management.md#create-custom-users).
Access restrictions on the Designer ensure that only dedicated users can create or edit {% if page.meta.product == "xtract-universal" %}destinations, {% endif %}sources and extractions. 
Access restrictions can be performed on several levels. 

### Restrict Access to the Designer

Follow the steps below to restrict the access to the Designer to specific [users or user groups](user-management.md).
By default, the access restrictions also apply to extractions and sources.

1. Open **Server > Settings** from the main window of the Designer.<br>
![security-manage-users](../../assets/images/documentation/access-restriction/server-settings_manage.png){:class="img-responsive"}
2. In the tab *Configuration Server*, activate the option **Restrict Designer access to the following users/groups**.<br>
![ServerSettings_authenticaion_methods](../../assets/images/documentation/access-restriction/Server-Settings.png){:class="img-responsive"}
3. Activate or deactivate authentication methods for the users or user groups, see [Authentication Between Designer and Server](index.md/#authentication-between-designer-and-server).
3. Click **[Add]** to add existing Windows AD users or [custom users](user-management.md/#create-custom-users).
4. Assign access rights to the users or user groups.

After access restrictions are set up, only designated users can connect to the {{ productName }} server when [starting the Designer](../designer.md).


### Restriction Levels

A user group can have one of the following access rights. 
These rights only concern actions (read, create, modify) that can be performed within the Designer. 

| Restriction Level | Description| 
| :--------  | :-------|
| Read | Members of this group have read access, but cannot edit extractions.|
| Modify | Members of this group have the same access rights as users with "read" rights. Furthermore, users with "modify" rights can edit existing extractions, but cannot create or clone extractions.|
| Create |  Members of this group have identical access rights as the users with "modify" rights. In addition, users with "create" rights can create and clone extractions, but cannot perform any admin activities.|
| Admin| Members of this group have all rights, no restrictions and can perform admin tasks. Admin activities include changing server settings, accessing server logs, or editing users and connections (SAP and target environments). Access restrictions on extractions or the source system are ignored.|

### Restrict Access to Extractions

Access control can be performed at extraction level. <br>
By default, the Designer access restrictions also apply to extractions and sources.

1. Double-click an extraction. The main window of the {{ component }} opens.
2. Click **[General Settings]**. The window "General Settings" opens.<br>
![General Settings](../../assets/images/documentation/components/table/open-general-settings.png)
3. In the tab *Security*, add or remove existing users and assign access rights to the users.<br>
![Security-Settings](../../assets/images/documentation/access-restriction/Extraction_Security3.png){:class="img-responsive"}

The access control on the extraction level overrides the settings at server level.

### Restrict Access to Sources
Access control can be performed at the SAP source level. <br>
By default, the Designer access restrictions also apply to extractions and sources.

1. Open **Server > Manage Sources** from the main window. The window "Manage Sources" opens.<br>
![Source Settings](../../assets/images/documentation/sap-connection/{{ abbr }}/open-manage-sources.png)
2. Click **[:pen-button:]** to edit an existing connection. The window "Change Source" opens.
3. In the tab *Access Control*, add or remove existing users and assign access rights to the users.<br>
![Server-Settings_](../../assets/images/documentation/access-restriction/sap_source-accesscontrol.png){:class="img-responsive"}

The access control on the source level overrides the settings at server level.