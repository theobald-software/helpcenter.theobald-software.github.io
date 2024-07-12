

This page shows how to connect the {{ productName }} Designer with a {{ productName }} Server.

## Connect the Designer to a Server

When starting the {{ productName }} Designer, the window "Connect to {{ productName }} Server" opens.<br>
Enter connection and user details to connect the Designer to a {{ productName }} Server.

=== "Designer and Server run on the same machine"
	1. Launch the {{ productName }} Designer.
	2. When the {{ productName }} Server is a local server, the server address is *localhost*.<br>
	The default port ({{ port }}) may vary depending on the configuration. <br>
	![local-login](../assets/images/{{ abbr }}/documentation/designer/local-login.png){:class="img-responsive"}
	3. If the service is not running on default port {{ port }}, specify the port by adding :[port] after the host name.
	The default port can be configured in the [server settings](server/server-settings.md).
	4. Select an authentication method. Once logged in, you can activate or deactivate methods of authentication, see [Access Management](access-restrictions/index.md/#authentication-between-designer-and-server). 
	5. Click **[:designer-connect: Connect]** to connect the Designer to the Server. The main window of the Designer opens.

=== "Designer and Server run on different machines"
	1. Launch the {{ productName }} Designer.
	2. When the {{ productName }} Designer and the {{ productName }} Server run on different machines, enter the host name of the {{ productName }} Server. 
	Make sure the port is not blocked by your firewall.<br>
	![remote-login](../assets/images/{{ abbr }}/documentation/designer/remote-login.png){:class="img-responsive"}
	3. If the service does not run on default port {{ port }}, specify the port by adding :[port] after the host name.
	The default port can be configured in the [server settings](server/server-settings.md).
	4. Select an authentication method. Once logged in, you can activate or deactivate methods of authentication, see [Access Management](access-restrictions/index.md/#authentication-between-designer-and-server). 
	5. Click **[:designer-connect: Connect]** to connect the Designer to the Server. The main window of the Designer opens.
	
{{ productName }} offers different methods of authenticating and securing the connection between the {{ productName }} Designer and the {{ productName }} Server. 
The default authentication methods are authentication via *Windows credentials (current user)* and *Anonymous (no encryption)*.


## Main Window of the Designer

The Designer features different functionalities to design and configure extractions.

!!! tip 
	Press ++f1++ to open the documentation page for particular windows.

### Main Menu Bar

![main-window-menubar](../assets/images/{{ abbr }}/documentation/designer/main-window-menubar.png){:class="img-responsive"}


=== "Designer"

	Icon | Menu Item |Description | Details
	-----|------------ | ------------ | -------------
	:designer-reset-preferences: | Reset Preferences  | Reset connection settings to server | [Connect the Designer to a Server](#connect-the-designer-to-a-server)
	:designer-disconnect: | Disconnect | Log off the server | -
	:designer-exit: | Exit | Close the Designer | -

{% if page.meta.product == "xtract-universal" %}=== "Extraction"

	Icon | Menu Item |Description | Details
	-----|------------ | ------------ | -------------
	:designer-add: | New  | Create a new extraction | [Create an Extraction](../getting-started.md/#create-an-extraction)
	:pen-button: | Edit | Edit an existing extraction | -
	:material-trash-can-outline: | Delete | Delete an existing extraction | -
	:designer-clone: | Clone | Clone an existing extraction | -
	:designer-keyword: | Add/Remove Keywords | Define keywords of selected extractions | [General Settings](table/general-settings.md)
	:designer-source:| Source | Select an existing SAP source system | [SAP Connection](sap-connection/index.md)
	:designer-destination:| Destination | Select a destination | [Destinations](destinations/index.md)
	:designer-log1: | Log | Open extraction log | [Extraction Logs](logs.md)
	:designer-run:| Run  | Run a selected extraction | [Run an Extraction](execute-and-automate/run-an-extraction.md/#run-extractions-in-the-designer)
	:designer-abort: | Abort | Abort a selected extraction | -
	:material-timer-outline: | Clear Result Cache | Clear extraction cache | [Cache results](table/general-settings.md/#misc-tab)
	:designer-refresh: | Refresh | Refresh extraction status | -
	:material-filter: | Filter | Define filters or keywords |  [Define Keywords](table/general-settings.md/#misc-tab)

{% else %}=== "Extraction"

	Icon | Menu Item |Description | Details
	-----|------------ | ------------ | -------------
	:designer-add: | New  | Create a new extraction | [Create an Extraction](../getting-started.md/#create-an-extraction)
	:pen-button: | Edit | Edit an existing extraction | -
	:material-trash-can-outline: | Delete | Delete an existing extraction | -
	:designer-clone: | Clone | Clone an existing extraction | -
	:designer-keyword: | Add/Remove Keywords | Define keywords of selected extractions | [General Settings](table/general-settings.md)
	:designer-source:| Source | Select an existing SAP source system | [SAP Connection](sap-connection/index.md)
	:designer-log1: | Log | Open extraction log | [Extraction Logs](logs.md)
	:designer-run:| Run  | Run a selected extraction | [Run an Extraction](run-extractions.md/#run-extractions-in-the-designer)
	:designer-abort: | Abort | Abort a selected extraction | -
	:material-timer-outline: | Clear Result Cache | Clear extraction cache | [Cache results](table/general-settings.md/#misc-tab)
	:designer-refresh: | Refresh | Refresh extraction status | -
	:material-filter: | Filter | Define filters or keywords |  [Define Keywords](table/general-settings.md/#misc-tab)
{% endif %}

=== "Server"

	Icon | Menu Item |Description | Details
	-----|------------ | ------------ | -------------
	:designer-log1: | Logs  | Open server logs | [Server Logs](logs.md)
	:designer-settings: | Settings | Open server settings | [Server Settings](server/server-settings.md)
	:designer-source: | Manage Sources | Edit connection to source system | [SAP Connection](sap-connection/index.md)
	{% if page.meta.product == "xtract-universal" %}:designer-destination: | Manage Destinations | Edit or delete destinations | [Destinations](destinations/index.md).{% endif %}

=== "Security"

	Icon | Menu Item |Description | Details
	-----|------------ | ------------ | -------------
	:designer-keyword: | Set User Password  | Set or change user password  | [User Managements](access-restrictions/user-management.md)
	:designer-user: | Manage Users | Manage user groups | [User Groups](access-restrictions/user-management.md)

=== "Help"

	Icon | Menu Item |Description | Details
	-----|------------ | ------------ | -------------
	:flag_gb:| Online Help (EN) | Open the HelpCenter| <!-----> - <!-----> 
	:designer-support: | Submit Support Ticket | Open the Ticket Portal | [Support Portal](https://support.theobald-software.com/helpdesk/User/Register)
	:designer-refresh: | Download latest version | Link to My Theobald Software | [Customer Portal](https://my.theobald-software.com/)
	:octicons-info-16: | Info | Product information | -
	:designer-version-history: | Version History | List of recent software changes | [Changelog](../changelog.md)

### GUI Buttons

![main-window-guibuttons](../assets/images/{{ abbr }}/documentation/designer/main-window-guibuttons.png){:class="img-responsive"}

{% if page.meta.product == "board-connector" %}

Icon | Menu Item |Description | Details
-----|------------ | ------------ | -------------
:designer-add: | New | Create a new extraction | [Create an Extraction](../getting-started.md/#create-an-extraction)
:pen-button: | Edit |  Edit existing extraction | -
:material-trash-can-outline:  | Delete |  Delete existing extraction  | -
:designer-clone: | Clone |  Clone existing extraction  | - 
:designer-refresh: | Refresh | Update of the extraction status  | -
:material-filter: | Search |  Filter extraction names | [List of Extractions](#list-of-extractions)
:designer-source: | Source|  Select existing SAP source system  | [SAP Connection](sap-connection/index.md)
:designer-log1:| Log | Open extraction log  | [Extraction Logs](logs.md)
:designer-run: | Run  | Run a selected extraction  | [Run an Extraction](run-extractions.md/#run-extractions-in-the-designer)

{% else %}

Icon | Menu Item |Description | Details
-----|------------ | ------------ | -------------
:designer-add: | New | Create a new extraction | [Create an Extraction](../getting-started.md/#create-an-extraction)
:pen-button: | Edit |  Edit existing extraction | -
:material-trash-can-outline:  | Delete |  Delete existing extraction  | -
:designer-clone: | Clone |  Clone existing extraction  | - 
:designer-refresh: | Refresh | Update of the extraction status  | -
:material-filter: | Search |  Filter extraction names | [List of Extractions](#list-of-extractions)
:designer-source: | Source|  Select existing SAP source system  | [SAP Connection](sap-connection/index.md)
:designer-destination: | Destination | Select destination  | [Destinations](destinations/index.md)
:designer-log1:| Log | Open extraction log  | [Extraction Logs](logs.md)
:designer-run: | Run  | Run a selected extraction  | [Run an Extraction](execute-and-automate/run-an-extraction.md/#run-extractions-in-the-designer)


### Extraction Groups

![main-window-extractionlist](../assets/images/{{ abbr }}/documentation/designer/main-window-treeview-main.png){:class="img-responsive"}

Extractions can be organized in groups, see [Organize Extractions](organize-extractions.md).
The treeview in the main window of the Designer displays all extraction groups and reflects the folder structure in the following directory: 
`{{ installationDir }}\config\extractions`.

Select a group to display the list of extractions that are located in the corresponding directory.

{% endif %}

### List of Extractions

![main-window-extractionlist](../assets/images/{{ abbr }}/documentation/designer/main-window-extractionlist.png){:class="img-responsive"}

List of all extractions in the currently selected extraction group divided by name, type, modification and creation date etc. <br>

!!! tip
	Use the search bar above the list to filter extractions. Wildcards (*) are not supported. <br> 
	More extensive filter options are available using the [GUI Buttons](#gui-buttons) :material-filter:.

!!! tip
	To adjust the settings of multiple extractions at once, select multiple extractions using ++ctrl+left-button++.<br>
	You can now adjust the {% if page.meta.product == "xtract-universal" %}**[:designer-destination: Destination]** and {% endif %}**[:designer-source: Source]** settings for all selected extractions, see [GUI Buttons](#gui-buttons).

**Double Click:** Double-clicking an extraction works as a shortcut to the **[:pen-button: Edit]** button. <br>
**Right-click:** Right-clicking an extraction in the list opens the following menu:<br>

{% if page.meta.product == "xtract-universal" %}

Icon | Menu Item |Description | Details
-----|------------ | ------------ | -------------
:pen-button: | Edit | Edit an existing extraction | -
:material-trash-can-outline:| Delete | Delete an existing extraction | -
:designer-clone: | Clone | Clone an existing extraction | -
:designer-keyword: | Add/Remove Keywords | Define keywords of selected extractions | [General Settings](table/general-settings.md)
:designer-log1: | Log | Open extraction log | [Extraction Logs](logs.md)
:designer-source: | Source settings| Select an existing SAP source system | -
:designer-destination: | Destination settings | Select a destination | [Destinations](destinations/index.md)
:designer-run: | Run  | Run a selected extraction | [Run an Extraction](execute-and-automate/run-an-extraction.md/#run-extractions-in-the-designer)
:designer-run-in-browser: | Run in browser | Run a selected extraction in the default web browser | - 
:designer-run-in-app: | Run in xu.exe | Run a selected extraction in the command-line tool xu.exe | [Execute Extractions with xu.exe](execute-and-automate/call-via-commandline.md)
:designer-abort: | Abort | Abort a selected extraction | -

{% else %}

Icon | Menu Item |Description | Details
-----|------------ | ------------ | -------------
:pen-button: | Edit | Edit an existing extraction | -
:material-trash-can-outline:| Delete | Delete an existing extraction | -
:designer-clone: | Clone | Clone an existing extraction | -
:designer-keyword: | Add/Remove Keywords | Define keywords of selected extractions | [General Settings](table/general-settings.md)
:designer-log1: | Log | Open extraction log | [Extraction Logs](logs.md)
:designer-source: | Source settings| Select an existing SAP source system | -
:designer-run: | Run  | Run a selected extraction | [Run an Extraction](run-extractions.md/#run-extractions-in-the-designer)
:designer-run-in-browser: | Run in browser | Run a selected extraction in the default web browser | - 
:designer-abort: | Abort | Abort a selected extraction | -

{% endif %}


### Status Bar 

![main-window-footer](../assets/images/{{ abbr }}/documentation/designer/main-window-footer.png){:class="img-responsive"}

The status bar contains information about: 

{% if page.meta.product == "xtract-universal" %}- Number of defined extractions in the selected folder, the overall number of extractions and the number of licensed extractions{% endif %}
- Login username
- Server authentication method
- Designer access rights
- License type and validity period
- Connected {{ Abbr }} server version
- Connected {{ Abbr }} client version
