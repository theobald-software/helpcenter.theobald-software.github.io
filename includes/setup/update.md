

This page shows how to backup and update an already installed {{ productName }} version.

### Preparations

Recommendations:

- Use a working test environment with a valid license and maintenance. The test environment is a copy of the current production environment. 
- Update the software regularly, see [recommended update interval](../../changelog.md#recommended-update-interval).
- Create a [backup](#create-a-backup) of the current installation.

Before updating, check the [Changelog](../../changelog.md) for breaking changes: 
- Make any necessary preparations and changes as described in the Release Notes.
- Note the current product version so that you can switch back to the same version in the event of an error.

!!! tip
	Subscribe to our [technical newsletter](https://theobald-software.com/en/newsletter/) that informs you about new software releases.  

### Create a Backup

{% if page.meta.product == "xtract-is" %}

Copy all SSIS packages that use {{ productName }} {{ components }}.
It is recommended to create backups at regular intervals to switch back to the previous version, if necessary.

!!! warning 
	**Warning! Data loss.**<br>
    System updates or changes can restrict software functionalities and this may lead to data loss. <br>
    Create a backup of the directory: `{{ installationDir }}\config` at regular intervals.
	
{% elif page.meta.product == "xtract-for-alteryx" %}

It is recommended to create backups at regular intervals to switch back to the previous version, if necessary.

1. Copy all Alteryx workflows that use Xtract for Alteryx.
2. Copy the folder that contains the SAP connections. Depending on the Alteryx settings it is located in the following directory:<br>
`C:\Users\[USERNAME]\AppData\Roaming\Theobald Software\Xtract for Alteryx\Connections`

{% else %}

On the machine that runs the {{ productName}} service, copy the following files and folders and store them in a secure location:

- copy the complete `config` folder in the {{ productName}} installation directory, e.g., `{{ installationDir }}\config`. 
- optionally, copy the complete `logs` directory to create a backup of the log files. 
- copy the `{{ setup }}License.json` file to backup your license.

!!! warning 
	**Warning! Data security.**<br>
    Both `config` and `logs` directories may contain sensitive information. <br>
	Make sure to secure any sensitive data.

It is recommended to create backups at regular intervals or use a versioning tool to switch back to the previous version, if necessary.

!!! tip "Recommendation"
	A version control system helps manage the data transfer from test environment to production environment by keeping track of all modifications.
	Git or Azure DevOps are version control systems that can be used to ensure the following:

	- The deployment of new extractions, sources and destinations can **not** cause fundamental damage to the data load of the productive landscape.
	- User rights and other features allow for changes to be checked and corrected in advance.
	- Quick and easy rollbacks of changes.

	For more information on how to set up version control, refer to the knowledge base article [Deploy Extractions Using Git Version Control](../../knowledge-base/deploy-extractions-using-Git-version-control.md).

#### Restore a Backup

1. On the machine that runs the {{ productName}} service, remove the `config` folder from the installation directory of {{ productName}}, e.g., `{{ installationDir }}`.
2. Copy the backup of the `config` folder into the installation directory.
3. To restore the license, replace the `{{ setup }}License.json` file in the installation directory with the backup.

!!! warning 
	**Warning! Data loss.**<br>
    Restoring the backup of the `config` folder replaces the existing configuration. <br>
	Make sure to remove the existing files before restoring the backups.

{% endif %}

### Update a Test Environment

A newer version can be installed over the old version. It is not necessary to uninstall the previous version. 
New versions are available in the [Theobald Software Customer Portal](https://my.theobald-software.com).

During the installation, the setup program checks whether other processes are running in the background that are related to the software being installed. 
If this is the case, a message with various options is displayed: 

| Option | Description |
|--------|-------------|
| **Check Again** | Close the affected programs and click **[Check Again]** to continue the installation.  | 
|  **Kill Process**  | Kill the affected process and continue with the installation. | 
|  **Ignore**  | Ignore the message, but the installation may be canceled due to the locking of certain files. | 
|  **Quit Install**  | Cancel the installation and resume it at another time. | 


{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}

#### Upgrade Major Releases - ConfigConverter

When upgrading from one major product version to another, it can be necessary to convert components of your {{ extractions }}.
For this purpose, {{ productName }} provides the conversion tool *ConfigConverter*.
The *ConfigConverter* ensures that all defined {{ components }}, source systems, server and user settings from the previous version are available in the new version. 

There are two ways to use the *ConfigConverter*:

=== "Upgrade During Installation"
	1. Execute the {{ productName }} setup.
	2. During the setup, activate the option **Convert config files**. 
	The option **Convert config files** starts the *ConfigConverter* application.<br> 
	![Migration1](../../assets/images/{{ abbr }}/documentation/setup/Migration_1.png){:class="img-responsive"}
	3. Confirm the conversion process in the command line pop-up window.  
	![Migration2.png](../../assets/images/{{ abbr }}/documentation/setup/Migration_2.png){:class="img-responsive"}

=== "Manual Upgrade"
	If the *ConfigConverter* is not executed automatically during installation, the converter can also be started manually.
	Run the *ConfigConverter.exe* in the {{ productName }} installation directory, e.g., `{{ installationDir }}`. <br>
	![Migration](../../assets/images/documentation/setup/Migration.png){:class="img-responsive"}

!!! note
    Any issues that may occur during the conversion process are displayed in the command line window. Copy and send the command line context to the support team, if required.

{% endif %}

#### Test the Update

Install the software update on the test environment and test the new version carefully. 

1. Test all your existing {{ extractions }}.  
2. After successful testing, install the current version on the production environment.    
3. In the case of an error, create a ticket in the [Support Portal](https://support.theobald-software.com). <br>
 Register if you do not have a customer account yet. Use your backup until a solution is provided.

### Update a Production Environment

After successfully testing the update on the test environment, install the update on the production environment. 
Make sure to create a backup beforehand and conduct all the necessary preparations and changes. 

{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%}

!!! warning 
	**Warning! Critical errors. Support cannot be provided.**<br>
    The versions of the test environment and of the production environment must be identical. Different versions can cause critical errors. No support can be provided, if the versions are not identical. <br>
	Make sure to keep the versions of the test environment and production environment identical - upgrade or downgrade, if needed.
	
{% endif %}

****
#### Related Links
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}- [Knowledge Base: Deploy Extractions Using Git Version Control](../../knowledge-base/deploy-extractions-using-Git-version-control.md) {% endif %}
- [Customer Portal](https://my.theobald-software.com)
- [Changelog](../../changelog.md)
- [Support Portal](https://support.theobald-software.com)


