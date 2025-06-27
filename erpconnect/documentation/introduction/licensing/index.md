A trial license is automatically installed with the installation of ERPConnect.\
A regular license is provided in the [Theobald Software Customer Portal](https://my.theobald-software.com/) after purchasing the product.

Note

The standard trial license does not support working in web environments. To test ERPConnect with your ASP.NET project, apply for a test license number at [sales@theobald-software.com](mailto:sales@theobald-software.com).

### Installing the ERPConnect License

The demo license is valid for one month after downloading. After this period, a valid license key or license file must be provided.

ERPConnect checks the licence number on every call (client and server). Set the license during runtime before the first connection to SAP is established.

The `ERPConenctLicense.json` file that contains the license is provided in the [Customer Portal - My Theobald Software](https://my.theobald-software.com/). Use one of the following methods to set the license.

- Read the license file and apply the license:

  ```csharp
  ERPConnect.LIC.LoadJsonLicense(string filename);

  ```

- Copy and paste the content of the `ERPConnectLicense.json` file into a constant string in the code and use the string to set the license:

  ```text
  ERPConnect.LIC.SetJsonLicense(string json); 

  ```

Use the following command to set the license number:

```csharp
ERPConnect.LIC.SetLic("XXXXXXXXXX");

```

### Maintenance

Contact the [sales department](mailto:sales@theobald-software.com) for information about available maintenance options.\
In case of technical difficulties, contact the support team: <https://support.theobald-software.com>.

### Technical Support

Theobald Software offers support in English and German.

1. Open a ticket in our [Support Portal](https://support.theobald-software.com).
1. Provide as much information as possible for the Theobald Software support team to understand and analyze the issue.
1. If there is an error message, copy and paste the error message into the ticket.

Disclaimer

SAP versions that are no longer supported by the manufacturer are excluded from the Theobald Software support. Issues specific to custom BAPIs (Z function modules) or custom reports (Z reports) are also excluded from the scope of support.

______________________________________________________________________

#### Related Links

- [Theobald Software Customer Portal](https://my.theobald-software.com/)
- [Theobald Software Support Portal](https://support.theobald-software.com/helpdesk)
