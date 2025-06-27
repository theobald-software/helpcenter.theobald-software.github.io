A backup allows you to easily switch back to a previous product version or to migrate your existing product configuration to a different machine.

Recommendation

Make sure to create regular backups of the yunIO configuration files to save the work invested in designing and optimizing your services. Alternatively, we recommend using a version control system, e.g. Git or Azure DevOps to synchronize your test environment with your productive environment.

### Configuration Files

The configuration of services, sources, users and the server are stored in the `config` folder of the yunIO installation directory, e.g., `C:\Program Files\Theobald Software\yunIO\config`. Use the `config` folder for setting up a version control system or for creating manual backups.

| Filename | Description | | --- | --- | | `extractions` | Contains the [service definitions](../../../getting-started/#create-a-service). | | `servers` | Contains the [server settings](../../server-settings/). | | `sources` | Contains the [SAP connections](../../sap-connection/). | | `users` | Contains the [user settings](../../access-restrictions/user-management/). |

### Create a Backup

1. Open the yunIO installation directory of the machine that runs yunIO, e.g., `C:\Program Files\Theobald Software\yunIO`.
1. Copy the complete `config` and `private` folders in the yunIO installation directory and save the folder at a secure location.
1. Optional: copy the complete `logs` folder of the yunIO installation directory to create a backup of the log files.
1. To backup your license, create a copy of your `yunIOLicense.json` file.

Warning

**Data security.**\
The `config`, `private` and `logs` directories may contain sensitive information. Unauthorized access may lead to data breaches. Make sure to secure the backup location.

### Restore a Backup

1. Open the yunIO installation directory of the machine that runs yunIO, e.g., `C:\Program Files\Theobald Software\yunIO`.
1. Remove the `config` and `private` folders from the installation directory.
1. Copy the backup of the `config` and `private` folders into the installation directory.
1. To restore the license, replace the `yunIOLicense.json` file in the installation directory with the backup.

Warning

**Data Loss.**\
Restoring the backup of the `config` and `private` folders replaces the existing configuration. Make sure to remove the existing files before restoring the backups.

### Migrate to a Different Machine

Note

When migrating to a new server, a new license file must be issued for that server.\
Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) for more information.

#### Prerequisite

The same software version must be installed on both machines.\
Use the `YunIOSetup.exe` from the installation directory of the current machine to install the matching version on the new machine. To check the version of your product, open the Designer and navigate to the *About* menu.

#### Workflow

1. Open the yunIO installation directory of the current machine, e.g., `C:\Program Files\Theobald Software\yunIO`.
1. Create a backup of the `config` folder from the installation directory.
1. Decide whether you need a partial or a full migration.\
   For a full migration copy the entire `config` folder to the yunIO installation directory on the new machine.\
   For a partial migration only copy subfolders of the `config` folder to the new machine, see [Configuration Files](#configuration-files).
1. Restart the yunIO Windows service on the new machine.

______________________________________________________________________

#### Related Links

- [Installation & Update](../installation-and-update/)
- [Changelog](../../../changelog/)
