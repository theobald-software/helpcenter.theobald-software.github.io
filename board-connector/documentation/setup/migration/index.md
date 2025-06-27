This page shows how to migrate the Board Connector configuration from one machine to another.

### Prerequisites

- [Create a backup](../update/#create-a-backup) of the `config` folder that is located in the installation directory of the current machine, e.g., `C:\Program Files\BOARDConnector\config`.
- Make sure that the same version of Board Connector is installed on both machines.

Tip

To install a matching version of Board Connector on the new machine, use the `BOARDConnectorSetup.exe` from the installation directory of the current machine, e.g., in `C:\Program Files\BOARDConnector`.

### Migration to a Different Machine

The Board Connector configuration can be migrated entirely (full migration) or partially.

- Conduct a **full migration** when replacing a machine completely.\
  For a full migration, restore the entire `config` and `private` folders from your backup on the new machine (full migration).
- Conduct a **partial migration** when moving parts of your setup to a different machine, e.g., if you transport defined extractions types from a test environment to a production environment.\
  For a partial migration, restore the parts of the backup you want to migrate by copying only the relevant [configuration files](#configuration-files), e.g., the `sources` or `extractions` folder, on the new machine.

Restart the [Board Connector Service](../../server/) if you copy the `server` folder to the new machine.

Note

When migrating to a new server, a new license file must be issued for that server. Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) for more information.

### Configuration Files

All configuration files of defined extractions types, sources and the server are stored in the sub-directory `config` of the Board Connector installation directory, e.g., `C:\Program Files\BOARDConnector\config`. Use the `config` directory to set up a version control system or to create manual backups.

| Filename | Description | | --- | --- | | `extractions` | Directory containing the defined extractions types. Each sub-directory contains an extraction of the same name. | | `servers` | Directory containing the [server settings](../../server/server-settings/). | | `connections` | Directory containing [SAP connections](../../sap-connection/). Each sub-directory contains a source of the same name. | | `version.txt` | Text file containing the product version of the current configuration, see [Installation](../installation/#installation-directory-files). |

______________________________________________________________________

#### Related Links

- [Installation](../installation/)
- [Changelog](../../../changelog/)
