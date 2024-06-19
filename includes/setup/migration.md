
This page shows how to migrate the {{ productName }} configuration from one machine to another.


### Migration to a Different Machine

The {{ productName }} configuration can be migrated partially or entirely (full migration).

- Conduct a full migration when replacing a machine completely
- Conduct a partial migration when moving parts of your setup to a different machine, e.g., if you transport defined {{ components }} from a test environment to a production environment.

=== ":material-moon-full: Full Migration"
	
	1. [Create a backup](update.md#create-a-backup) of the `config` folder in the installation directory of the current machine.
	2. Make sure that the same version of {{ productName }} is installed on both machines.
	
		!!! tip
			To install a matching version of {{ productName }} on the new machine, use the `{{ setup }}Setup.exe` from the installation directory of the current machine, e.g., in `{{ installationDir }}`.

	3. Restore the entire `config` folder on the new machine.
	4. Restart the [{{ productName }} Service](../server/start-server).
	

=== ":material-circle-half-full: Partial Migration"

	1. [Create a backup](update.md#create-a-backup) of the `config` folder in the installation directory of the current machine.
	2. Make sure that the same version {{ productName }} is installed on both machines.
	
		!!! tip
			To install a matching version of {{ productName }} on the new machine, use the `{{ setup }}Setup.exe` from the installation directory of the current machine, e.g., in `{{ installationDir }}`.

	3. Restore the parts of the backup you want to migrate by copying only the relevant [configuration files](#configuration-files), e.g., the `sources` or `extractions` folder, on the new machine.
	4. Restart the [{{ productName }} Service](../server/start-server), if you copy the `server` folder to the new machine.
	

!!! note
    When migrating to a new server, a new license file must be issued for that server.
    Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) for more information.


### Configuration Files

All configuration files of defined {{ components }}, sources and the server are stored in the sub-directory `config` of the {{ productName }} installation directory, e.g., `{{ installationDir }}\config`.
Use the `config` directory to set up a version control system or to create manual backups.


|Filename      | Description                                                                                                                                                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <pre>extractions</pre> | Directory containing the defined [{{ components }}](../getting-started/define-a-table-extraction). Each sub-directory contains an {{ extraction }} of the same name.          |
| <pre>servers</pre>     | Directory containing the [server settings](../server/server-settings).                                                                                        |
| <pre>sources</pre>     | Directory containing [SAP connections](../sap-connection/index.md). Each sub-directory contains a source of the same name.                                              |
| <pre>version.txt</pre> | Text file containing the product version of the current configuration, see [Installation](installation.md/#installation-directory-files).|
{% if page.meta.product == "xtract-universal" %}| <pre>destinations</pre> | Directory containing the destinations. Each .json file contains a destination of the same name. | {% endif %}


****
#### Related Links
- [Installation ](installation.md)
- [Changelog](../../changelog.md)
