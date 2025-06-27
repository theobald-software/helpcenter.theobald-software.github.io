This page shows how to backup and update an already installed Board Connector version.

### Preparations

Recommendations:

- Use a working test environment with a valid license and maintenance. The test environment is a copy of the current production environment.
- Update the software regularly, see [recommended update interval](../../../changelog/#recommended-update-interval).
- Create a [backup](#create-a-backup) of the current installation.

Before updating, check the [Changelog](../../../changelog/) for breaking changes:

- Make any necessary preparations and changes as described in the Release Notes.
- Note the current product version so that you can switch back to the same version in the event of an error.

Tip

Subscribe to our [technical newsletter](https://theobald-software.com/en/newsletter/) that informs you about new software releases.

### Create a Backup

On the machine that runs the Board Connector service, copy the following files and directories and store them in a secure location:

- copy the complete `config` and `private` directories into the Board Connector installation directory, e.g., `C:\Program Files\BOARDConnector\config`.
- optionally, copy the complete `logs` directory to create a backup of the log files.
- copy the `BOARDConnectorLicense.json` file to backup your license.

Warning

**Data security.**\
The `config`, `private` and `logs` directories may contain sensitive information. Unauthorized access may lead to data breaches.\
Make sure to secure the backup location.

It is recommended to create backups at regular intervals or use a versioning tool to switch back to the previous version, if necessary.

Recommendation

A version control system helps manage the data transfer from test environment to production environment by keeping track of all modifications. Git or Azure DevOps are version control systems that can be used to ensure the following:

- The deployment of new extractions, sources and destinations can **not** cause fundamental damage to the data load of the productive landscape.
- User rights and other features allow for changes to be checked and corrected in advance.
- Quick and easy rollbacks of changes.

For more information on how to set up version control, refer to the knowledge base article [Deploy Extractions Using Git Version Control](../../../knowledge-base/deploy-extractions-using-Git-version-control/).

#### Restore a Backup

1. On the machine that runs the Board Connector service, remove the `config` directory from the installation directory of Board Connector, e.g., `C:\Program Files\BOARDConnector`.
1. Remove `private` directory from the installation directory.
1. Copy the backup of the `config` and `private` directories into the installation directory.
1. To restore the license, replace the `BOARDConnectorLicense.json` file in the installation directory with the backup.
1. Restore the previous Board Connector version as listed in the `version.txt`within the `config` directory.

Warning

**Data loss.**\
Restoring the backup of the `config` and `private` directories replaces the existing configuration.\
Make sure to remove the existing files before restoring the backups.

### Update a Test Environment

A newer version can be installed over the old version. It is not necessary to uninstall the previous version. New versions are available in the [Theobald Software Customer Portal](https://my.theobald-software.com).

During the installation, the setup program checks whether other processes are running in the background that are related to the software being installed. If this is the case, a message with various options is displayed:

| Option | Description | | --- | --- | | **Check Again** | Close the affected programs and click **[Check Again]** to continue the installation. | | **Kill Process** | Kill the affected process and continue with the installation. | | **Ignore** | Ignore the message, but the installation may be canceled due to the locking of certain files. | | **Quit Install** | Cancel the installation and resume it at another time. |

#### Upgrade with Breaking Changes

The setup checks if an older version of Board Connector is already installed on the machine. If an older version is found, the setup displays a list of all (breaking) changes that were released between the old version and the current version. If there are breaking changes, make sure to follow the instructions in the release notes of the breaking changes to ensure a smooth update.

#### Upgrade Major Releases - ConfigConverter

When upgrading from one major product version to another, it can be necessary to convert components of your extractions. For this purpose, Board Connector provides the conversion tool *ConfigConverter*. The *ConfigConverter* ensures that all defined extractions types, source systems, server and user settings from the previous version are available in the new version.

There are two ways to use the *ConfigConverter*:

1. Execute the Board Connector setup.
1. During the setup, activate the option **Convert config files**. The option **Convert config files** starts the *ConfigConverter* application.
1. Confirm the conversion process in the command line pop-up window.

If the *ConfigConverter* is not executed automatically during installation, the converter can also be started manually. Run the *ConfigConverter.exe* in the Board Connector installation directory, e.g., `C:\Program Files\BOARDConnector`.

Note

Any issues that may occur during the conversion process are displayed in the command line window. Copy and send the command line context to the support team, if required.

#### Test the Update

Install the software update on the test environment and test the new version carefully.

1. Test all your existing extractions.
1. After successful testing, install the current version on the production environment.
1. In the case of an error, create a ticket in the [Support Portal](https://support.theobald-software.com).\
   Register if you do not have a customer account yet. Use your backup until a solution is provided.

### Update a Production Environment

After successfully testing the update on the test environment, install the update on the production environment. Make sure to create a backup beforehand and conduct all the necessary preparations and changes.

Warning

**Critical errors. Support cannot be provided.**\
The versions of the test environment and of the production environment must be identical. Different versions can cause critical errors. No support can be provided, if the versions are not identical.\
Make sure to keep the versions of the test environment and production environment identical - upgrade or downgrade, if needed.

______________________________________________________________________

#### Related Links

- [Knowledge Base: Deploy Extractions Using Git Version Control](../../../knowledge-base/deploy-extractions-using-Git-version-control/)
- [Customer Portal](https://my.theobald-software.com)
- [Changelog](../../../changelog/)
- [Support Portal](https://support.theobald-software.com)
