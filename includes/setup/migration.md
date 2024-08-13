
This page shows how to migrate the {{ productName }} configuration from one machine to another.

### Prerequisites 

- [Create a backup](update.md#create-a-backup) of the `config` folder that is located in the installation directory of the current machine, e.g., `{{ installationDir }}\config`.
- Make sure that the same version of {{ productName }} is installed on both machines.
	
!!! tip
	To install a matching version of {{ productName }} on the new machine, use the `{{ setup }}Setup.exe` from the installation directory of the current machine, e.g., in `{{ installationDir }}`.

### Migration to a Different Machine

The {{ productName }} configuration can be migrated entirely (full migration) or partially.

- Conduct a **full migration** when replacing a machine completely.<br>
For a full migration, restore the entire `config` and `private` folders from your backup on the new machine (full migration).
- Conduct a **partial migration** when moving parts of your setup to a different machine, e.g., if you transport defined {{ components }} from a test environment to a production environment.<br>
For a partial migration, restore the parts of the backup you want to migrate by copying only the relevant [configuration files](#configuration-files), e.g., the `sources` or `extractions` folder, on the new machine.

Restart the [{{ productName }} Service](../server/index.md) if you copy the `server` folder to the new machine.

!!! note
    When migrating to a new server, a new license file must be issued for that server.
    Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) for more information.


### Configuration Files

All configuration files of defined {{ components }}, sources and the server are stored in the sub-directory `config` of the {{ productName }} installation directory, e.g., `{{ installationDir }}\config`.
Use the `config` directory to set up a version control system or to create manual backups.


|Filename      | Description                                                                                                                                                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <pre>extractions</pre> | Directory containing the defined {{ components }}. Each sub-directory contains an {{ extraction }} of the same name.          |
| <pre>servers</pre>     | Directory containing the [server settings](../server/server-settings.md).                                                                                        |
| <pre>sources</pre>     | Directory containing [SAP connections](../sap-connection/index.md). Each sub-directory contains a source of the same name.                                              |
| <pre>version.txt</pre> | Text file containing the product version of the current configuration, see [Installation](installation.md/#installation-directory-files).|
{% if page.meta.product == "xtract-universal" %}| <pre>destinations</pre> | Directory containing the destinations. Each .json file contains a destination of the same name. | {% endif %}


****
#### Related Links
- [Installation ](installation.md)
- [Changelog](../../changelog.md)
