
### Preparations

1. Recommendations:
	- Use a working test environment with a valid license and maintenance. The test environment is a copy of the current production environment. 
	- Update the software regularly, see [Changelog](../../changelog.md).
	- Create a [backup](#create-a-backup) of the current installation.

2. Before updating, check the [Changelog](../../changelog.md) for breaking changes.   
	- Make any necessary preparations and changes as described in the Release Notes.
	- You can subscribe to our [technical newsletter](https://theobald-software.com/en/newsletter/) that informs about new software releases.  

### Update a Test Environment

A newer version can be installed over the old version. It is not necessary to uninstall the previous version. 
New versions are available in the [Theobald Software Customer Portal](https://my.theobald-software.com).

During the installation, the setup program checks whether other processes are running in the background that are related to the software being installed. If this is the case, a message with various options is displayed: 
- **Check Again:** Option to close the affected programs, click **[Check Again]** to continue the installation. 
- **Kill Process:** Option to kill the affected process and continue with the installation.
- **Ignore:** Option to ignore the message, but the installation may be canceled due to the locking of certain files.
- **Quit Install:** Option to cancel the installation and resume it at another time.


First, install the current version of the software on the test environment and test the new version carefully. 
 - Test all your existing projects.  
 - After a successful test, follow the steps to install the current version on the production environment.    
 - In the case of an error, create a ticket in the [Support Portal](https://support.theobald-software.com). 
 Register if you do not have a customer account yet. Use your backup until a solution is provided.


### Update a Production Environment

After successfully testing the update on the test environment, install the update on the production environment. 
Make sure to create a backup beforehand and conduct all the necessary preparations and changes. 

****
#### Related Links
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}- [Knowledge Base: Deploy Extractions Using Git Version Control](../../knowledge-base/deploy-extractions-using-Git-version-control.md) {% endif %}
- [Customer Portal](https://my.theobald-software.com)
- [Changelog](../../changelog.md)
- [Support Portal](https://support.theobald-software.com)


