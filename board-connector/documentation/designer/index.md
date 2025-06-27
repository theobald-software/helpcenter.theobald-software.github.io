This page shows how to connect the Board Connector Designer with a Board Connector Server.

## Connect the Designer to a Server

When starting the Board Connector Designer, the window "Connect to Board Connector Server" opens.\
Enter connection and user details to connect the Designer to a Board Connector Server.

1. Launch the Board Connector Designer.

1. When the Board Connector Server is a local server, the server address is *localhost*.\
   The default port (8096) may vary depending on the configuration.

1. If the service is not running on default port 8096, specify the port by adding :[port] after the host name. The default port can be configured in the [server settings](../server/server-settings/).

1. Select an authentication method. Once logged in, you can activate or deactivate methods of authentication, see [Access Management](../access-restrictions/#authentication-between-designer-and-server).

1. Click **[ Connect]** to connect the Designer to the Server. The main window of the Designer opens.

1. Launch the Board Connector Designer.

1. When the Board Connector Designer and the Board Connector Server run on different machines, enter the host name of the Board Connector Server. Make sure the port is not blocked by your firewall.

1. If the service does not run on default port 8096, specify the port by adding :[port] after the host name. The default port can be configured in the [server settings](../server/server-settings/).

1. Select an authentication method. Once logged in, you can activate or deactivate methods of authentication, see [Access Management](../access-restrictions/#authentication-between-designer-and-server).

1. Click **[ Connect]** to connect the Designer to the Server. The main window of the Designer opens.

Board Connector offers different methods of authenticating and securing the connection between the Board Connector Designer and the Board Connector Server. The default authentication methods are authentication via *Windows credentials (current user)* and *Anonymous (no encryption)*.

## Main Window of the Designer

The Designer features different functionalities to design and configure extractions.

Tip

Press `F1` to open the documentation page for particular windows.

### Main Menu Bar

| Icon | Menu Item | Description | Details | | --- | --- | --- | --- | | | Reset Preferences | Reset connection settings to server | [Connect the Designer to a Server](#connect-the-designer-to-a-server) | | | Disconnect | Log off the server | - | | | Exit | Close the Designer | - |

| Icon | Menu Item | Description | Details | | --- | --- | --- | --- | | | New | Create a new extraction | [Create an Extraction](../../getting-started/#create-an-extraction) | | | Edit | Edit an existing extraction | - | | | Delete | Delete an existing extraction | - | | | Clone | Clone an existing extraction | - | | | Add/Remove Keywords | Define keywords of selected extractions | [General Settings](../table/general-settings/) | | | Source | Select an existing SAP source system | [SAP Connection](../sap-connection/) | | | Log | Open extraction log | [Extraction Logs](../logs/) | | | Run | Run a selected extraction | [Run an Extraction](../run-extractions/#run-extractions-in-the-designer) | | | Abort | Abort a selected extraction | - | | | Clear Result Cache | Clear extraction cache | [Cache results](../table/general-settings/#misc-tab) | | | Refresh | Refresh extraction status | - | | | Filter | Define filters or keywords | [Define Keywords](../table/general-settings/#misc-tab) |

| Icon | Menu Item | Description | Details | | --- | --- | --- | --- | | | Logs | Open server logs | [Server Logs](../logs/) | | | Settings | Open server settings | [Server Settings](../server/server-settings/) | | | Manage Sources | Edit connection to source system | [SAP Connection](../sap-connection/) |

| Icon | Menu Item | Description | Details | | --- | --- | --- | --- | | | Set User Password | Set or change user password | [User Managements](../access-restrictions/user-management/) | | | Manage Users | Manage user groups | [User Groups](../access-restrictions/user-management/) |

| Icon | Menu Item | Description | Details | | --- | --- | --- | --- | | | Online Help (EN) | Open the HelpCenter | - | | | Submit Support Ticket | Open the Ticket Portal | [Support Portal](https://support.theobald-software.com/helpdesk/User/Register) | | | Download latest version | Link to My Theobald Software | [Customer Portal](https://my.theobald-software.com/) | | | Info | Product information | - | | | Version History | List of recent software changes | [Changelog](../../changelog/) |

### GUI Buttons

| Icon | Button | Description | Details | | --- | --- | --- | --- | | | New | Create a new extraction | [Create an Extraction](../../getting-started/#create-an-extraction) | | | Edit | Edit existing extraction | - | | | Delete | Delete existing extraction | - | | | Clone | Clone existing extraction | - | | | Refresh | Update of the extraction status | - | | | Search | Filter extraction names | [List of Extractions](#list-of-extractions) | | | Source | Select existing SAP source system | [SAP Connection](../sap-connection/) | | | Log | Open extraction log | [Extraction Logs](../logs/) | | | Run | Run a selected extraction | [Run an Extraction](../run-extractions/#run-extractions-in-the-designer) |

### List of Extractions

List of all extractions in the currently selected extraction group divided by name, type, modification and creation date etc.

Tip

Use the search bar above the list to filter extractions. Wildcards (\*) are not supported.\
More extensive filter options are available using the [GUI Buttons](#gui-buttons) .

Tip

To adjust the settings of multiple extractions at once, select multiple extractions using `Ctrl`+`Left Button`.\
You can now adjust the **[ Source]** settings for all selected extractions, see [GUI Buttons](#gui-buttons).

**Double Click:** Double-clicking an extraction works as a shortcut to the **[ Edit]** button.\
**Right-click:** Right-clicking an extraction in the list opens the following menu:

| Icon | Menu Item | Description | Details | | --- | --- | --- | --- | | | Edit | Edit an existing extraction | - | | | Delete | Delete an existing extraction | - | | | Clone | Clone an existing extraction | - | | | Add/Remove Keywords | Define keywords of selected extractions | [General Settings](../table/general-settings/) | | | Log | Open extraction log | [Extraction Logs](../logs/) | | | Source settings | Select an existing SAP source system | - | | | Run | Run a selected extraction | [Run an Extraction](../run-extractions/#run-extractions-in-the-designer) | | | Run in browser | Run a selected extraction in the default web browser | - | | | Abort | Abort a selected extraction | - |

### Status Bar

The status bar contains information about the following:

- Login username
- Server authentication method
- Designer access rights
- License type and validity period
- Connected BC server version
- Connected BC client version
