

### Install the {{ productName }} License

{% if page.meta.product == "xtract-is" %}

1. Execute the `XtractLicenseManager.exe` file in the installation directory of Xtract IS, e.g., `{{ installationDir }}`. <br>
The license manager opens. <br>
![XIS_License_Manager](../../assets/images/xis/documentation/setup/xis_license-manager.png){:class="img-responsive" width="400px"}
2. Click **[Install]**. The window "Install Xtract License" opens.
3. Locate and select the "XtractISLicense.json" file that is provided in the [Customer Portal - My Theobald Software](https://my.theobald-software.com).

!!! tip
	To inspect your current license data, click the *Xtract IS Info* link located in each {{ component }}.

{% else %}

Place the "{{ setup }}License.json" file that is provided in the [Customer Portal - My Theobald Software](https://my.theobald-software.com) into the installation directory on the server, e.g., `{{ installationDir }}`.

![license_Folder](../../assets/images/{{ abbr }}/documentation/setup/License_Folder.png ){:class="img-responsive"}

{% if page.meta.product == "xtract-for-alteryx" %}

!!! tip
	To inspect your current license data, click the *About* link located in each Xtract {{ component }}.

{% else %}

!!! tip
	To inspect your current license data, open the {{ productName }} Designer and navigate to **[Help] > [Info]** in the main menu bar.
	Alternatively, press **[F12]**.

{% endif %}
{% endif %}

{% if page.meta.product != "xtract-for-alteryx" and page.meta.product != "xtract-is" %}

### Move a License to a new Server

When moving your setup to a new server, a new license file must be issued for that server.
Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) to let us know the name of the new server.

For more information on the migration process, see [Migration to a Different Machine](migration.md#migration-to-a-different-machine).

{% endif %}


### Maintenance
Contact the [sales department](mailto:sales@theobald-software.com) for information about available maintenance options.<br>
In case of technical difficulties, contact our [support](https://support.theobald-software.com/helpdesk).

****
#### Related Links
- [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/)


