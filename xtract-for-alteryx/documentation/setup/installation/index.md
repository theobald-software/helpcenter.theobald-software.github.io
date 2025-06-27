This page shows how and where to install Xtract for Alteryx.

### Prerequisites

Administrator permissions are required to install Xtract for Alteryx.

### Setup

`XtractForAlteryxSetup.exe` is an industry standard setup. Execute the `XtractForAlteryxSetup.exe` file and follow the instructions of the setup program.

Note

During the setup you need to specify the installation directory for Xtract for Alteryx and also the installation directory of Alteryx. If you have multiple instances of Alteryx installed, choose the instance on which you want to use Xtract for Alteryx.

After the installation is completed, check if the following entries and extensions are available in the Alteryx installation directory:

- `Alteryx\Settings\AdditionalPlugins\XtractForAlteryx.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractForAlteryx.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

For information on how to install a license, see [Licensing](../license/#install-the-xtract-for-alteryx-license).

### Installation Directory Files

The list below shows several most important files that are placed into the default directory `C:\Program Files\XtractForAlteryx` after installation:

| Filename | Description | | --- | --- | | ABAP directory | Directory with SAP function modules. Read the readme.txt within the directory for more information. See also [SAP Customization](../../setup-in-sap/). | | XtractForAlteryxSetup.exe | Main installation application that installs Xtract for Alteryx as a plug-in to the Alteryx Designer / Server running on the system. | | Uninstall Xtract for Alteryx | Shortcut to uninstall and remove Xtract for Alteryx with all its components from your machine. | | Eula_Xtract_for_Alteryx.rtf | Document containing the license agreement for the use of the software Xtract for Alteryx. | | XtractForAlteryxLicense.json | License file with information about the server, the component and runtime. | | XtractForAlteryxSetup.log | Log file to see the exact modifications performed on your system and check whether any errors occurred during installation |

The installation of Xtract for Alteryx can be initiated unattended without the GUI in a non-interactive way via the Windows Command Prompt. Execute the `XtractForAlteryxSetup.exe` via command line and use the switch `--unattended`.

```console
start /wait XtractForAlteryxSetup.exe --unattended

```

`XtractForAlteryxSetup.exe` is Windows applications, meaning the Windows Command Prompt does not wait until the installation is complete. To wait until the installation is complete, use the [start](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/start) command with the `/wait` switch.

Note

All switches are case sensitive.

### Version Number

When installing Xtract for Alteryx, the version of the product is displayed in the installation menu. To check the version of the installed product in Windows, open the Windows Settings and navigate to **Apps > Installed apps**.
