The following article shows how to synchronize a Nintex form for Office 365 with SAP using custom JavaScript.\
In the depicted scenario, SAP data is made available in a Nintex form for data selection in dropdown lists using JavaScript and REST services.

For more information on Nintex form for Office 365, see [Nintex Documentation: Office 365 Forms](https://help.nintex.com/en-US/office365/Forms/DesignForms.htm).

### About

This article leads you through all necessary steps to set up the following process in Nintex for Office 365:

- When an SAP material number is entered in an input field, the possible hits are displayed in a dropdown list.
- If a material is selected in the drop-down list, the material text is displayed in a text field.
- When the input is confirmed, the selected material is written to SharePoint.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP. For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

1. [Create an SAP connection](../../getting-started/#connect-to-sap) in yunIO.
1. [Create a service](../../getting-started/#create-a-service) in yunIO. The depicted example uses the integration type *SAP Table or View* for the service.
1. [Look up](../../documentation/tables-and-views/#look-up-an-sap-table-or-view) the table MAKT that contains material descriptions.
1. Select the columns MATNR, SPRAS and MAKTX for the output of the service.
1. Click to testrun the service in yunIO . For more information, see [Documentation: Run Services in yunIO](../../documentation/run-services/#run-services-in-yunio).
1. Click to download the service definition .

### Setup in SharePoint

In the depicted example, SAP materials are added to a custom SharePoint list via a Nintex form:

1. Create a SharePoint custom list with a column "Material".
1. Click **[Nintex Forms]** to create a new Nintex input form for the SharePoint custom list, see [Setup in Nintex for Office 365](#setup-in-nintex-for-office-365).

### Setup in Nintex for Office 365

Follow the steps below to set up the Nintex form for the SharePoint custom list created in the section [Setup in SharePoint](#setup-in-sharepoint):

1. Create a new Nintex form:
1. Define the following text fields:
1. "Material" of type *Single Line Textbox* is the input field that contains the material number.
1. "Suggested Materials" of type *Choice* displays the possible hits for the material number in a dropdown list.
1. "Selected Material" of type *Single Line Textbox* displays the material text of the selected material.
1. Open the advanced settings of the field "Material" and set *Store Client ID in JavaScript Variable* to *Yes*.
1. In the field *Client ID JavaScript variable name* enter the variable name "inputMaterial".
1. Click **[Save]**.
1. Open the general settings of the field "Suggested Materials" and set *Display format* to *Drop down list*.
1. In the field *Choices* enter "no matches". This input will be overwritten via JavaScript.
1. Open the advanced settings of the field "Suggested Materials" and set *Store Client ID in JavaScript Variable* to *Yes*.
1. In the field *Client ID JavaScript variable name* enter the variable name "selectMaterial".
1. Click **[Save]**.
1. Open the general settings of the field "Selected Material" and set *Connected to* to the SharePoint column *Material*.
1. Open the advanced settings of the field "Selected Material" and set *Store Client ID in JavaScript Variable* to *Yes*.
1. In the field *Client ID JavaScript variable name* enter the variable name "outputMaterialId".
1. Add a **[Save]** and **[Cancel]** button to the form.

### Integrate JavaScript Code in Nintex

The [JavaScript library for REST services](https://github.com/theobald-software/static.theobald-software.github.io/tree/main/theobald.yunio.client.js) by Theobald Software enables the use of yunIO services via JavaScript.\
The depicted example uses the following JavaScript code for the following:

- To import the JavaScript library for REST services.
- To connect to yunIO.
- To run the service "MAKTService" that reads the material number and the material long text from the SAP table MAKT.

```java
document.addEventListener("DOMContentLoaded", async () => {
    let yunioClient = await import(
        "https://static.theobald-software.com/theobald.yunio.client.js/dist/theobald.yunio.client.js"
    );

    yunioClient.TheobaldYunioClient.initializeLiveCombobox({
        $: NWF$,
        controls: {
            inputId: inputMaterial,
            selectId: selectMaterial,
            outputId: outputMaterialId
            /*descriptionId: outputMaterialDescription*/
            /*buttonId: 'buttonId'*/
        },
        tableSettings: {
            serviceName: "MAKTService",
            idField: "MATNR",
            description field: "MAKTX",
            language: "E"
        },
        connection: {
            url: "https://yunio.example.com:8175/",
            /* future apiKey */
            username: prompt("yunIO username", ""),
            password: prompt("yunIO password", "")
        }
    });
});

```

To use this script in your application, replace the connection URL. If your yunIO service has a different name or settings, edit the table settings accordingly.

Note

Do not use *//* for comments in the custom java script, as *//* causes errors.

Follow the steps below to integrate the script in your Nintex Form:

1. Open the settings of the Nintex form and copy the JavaScript into the field **Custom JavaScript**.
1. Click **[Save]**.

### Run the Nintex Form

1. Preview or publish the Nintex form.
1. When prompted, enter your username and password to establish a connection to yunIO.
1. Enter a material number. The hits for the entry are read from SAP and displayed in the dropdown list "Suggested Materials".
1. Select a material from the dropdown list. The long text of the selected material is displayed in the field "Material".
1. Click **[Save]** to write the selected material to your SharePoint custom list.

______________________________________________________________________

#### Related Links:

- [yunIO Documentation](../../documentation/introduction/)
- [Nintex Documentation: Office 365 Forms](https://help.nintex.com/en-US/office365/Forms/DesignForms.htm)
- [Theobald Software GitHub: JavaScript library for REST services](https://github.com/theobald-software/static.theobald-software.github.io/tree/main/theobald.yunio.client.js)
