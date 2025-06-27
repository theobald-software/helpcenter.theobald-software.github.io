This page shows how to backup and update an already installed Xtract for Alteryx version.

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

It is recommended to create backups at regular intervals to switch back to the previous version, if necessary.

1. Copy all Alteryx workflows that use Xtract for Alteryx.
1. Copy the directory that contains the SAP connections. Depending on the Alteryx settings it is located in the following directory:\
   `C:\Users\[USERNAME]\AppData\Roaming\Theobald Software\Xtract for Alteryx\Connections`

### Update a Test Environment

A newer version can be installed over the old version. It is not necessary to uninstall the previous version. New versions are available in the [Theobald Software Customer Portal](https://my.theobald-software.com).

During the installation, the setup program checks whether other processes are running in the background that are related to the software being installed. If this is the case, a message with various options is displayed:

| Option | Description | | --- | --- | | **Check Again** | Close the affected programs and click **[Check Again]** to continue the installation. | | **Kill Process** | Kill the affected process and continue with the installation. | | **Ignore** | Ignore the message, but the installation may be canceled due to the locking of certain files. | | **Quit Install** | Cancel the installation and resume it at another time. |

#### Upgrade with Breaking Changes

The setup checks if an older version of Xtract for Alteryx is already installed on the machine. If an older version is found, the setup displays a list of all (breaking) changes that were released between the old version and the current version. If there are breaking changes, make sure to follow the instructions in the release notes of the breaking changes to ensure a smooth update.

#### Test the Update

Install the software update on the test environment and test the new version carefully.

1. Test all your existing workflows.
1. After successful testing, install the current version on the production environment.
1. In the case of an error, create a ticket in the [Support Portal](https://support.theobald-software.com).\
   Register if you do not have a customer account yet. Use your backup until a solution is provided.

### Update a Production Environment

After successfully testing the update on the test environment, install the update on the production environment. Make sure to create a backup beforehand and conduct all the necessary preparations and changes.

______________________________________________________________________

#### Related Links

- [Customer Portal](https://my.theobald-software.com)
- [Changelog](../../../changelog/)
- [Support Portal](https://support.theobald-software.com)
