With yunIO, developers are furnished with an exceptional instrument for crafting applications tailored for SharePoint Online/Office 365 as well as other cloud-based or traditional environments.

yunIO is adaptable and accommodates applications developed in any programming language with the ability to interact with REST API.

The package incorporates a JavaScript library for REST.

For optimum results when developing with yunIO REST Services utilizing JavaScript, it is highly recommended to make use of our proprietary JavaScript library. This library streamlines client-side programming by encapsulating various yunIO-specific functionalities.

[theobald.yunio.client.js](../../assets/files/yunio/dist/theobald.yunio.client.js) [theobald.yunio.sp.js](../../assets/files/yunio/dist/theobald.yunio.sp.js)

## All examples

- [theobald.yunio.combobox-api.button.html](../../assets/files/yunio/examples/theobald.yunio.combobox-api.button.html)
- [theobald.yunio.combobox-api.live-typing.2-descriptions.promptSettings.html](../../assets/files/yunio/examples/theobald.yunio.combobox-api.live-typing.2-descriptions.promptSettings.html)
- [theobald.yunio.combobox-api.live-typing.promptSettings.html](../../assets/files/yunio/examples/theobald.yunio.combobox-api.live-typing.promptSettings.html)
- [theobald.yunio.combobox-api.nintex-form.js](../../assets/files/yunio/examples/theobald.yunio.combobox-api.nintex-form.js)
- [theobald.yunio.vanillajs.table-service.html](../../assets/files/yunio/examples/theobald.yunio.vanillajs.table-service.html)
- [theobald.yunio.vanillajs.table-service.parametrizable-connection.html](../../assets/files/yunio/examples/theobald.yunio.vanillajs.table-service.parametrizable-connection.html)
- [theobald.yunio.vanillajs.function-service.html](../../assets/files/yunio/examples/theobald.yunio.vanillajs.function-service.html)

## Basic calls with pure JavaScript

- [Table example](../../assets/files/yunio/examples/theobald.yunio.vanillajs.table-service.html)
- [Table example with parameterized call](../../assets/files/yunio/examples/theobald.yunio.vanillajs.table-service.parametrizable-connection.html)
- [Function example](../../assets/files/yunio/examples/theobald.yunio.vanillajs.function-service.html)

## API interface for Combobox

Below is the primary API interface, elegantly designed for an intuitive experience:

```javascript
initializeLiveCombobox({
    controls: {
        inputId: "",
        selectId: "",
        outputId: "",
        descriptionId: "",
        additionalInfoId: "",
        buttonId: "" 
    },
    tableSettings: { 
        serviceName: "KNA1_Service",
        idField: "KUNNR",
        // optional
        descriptionField: "NAME1",
        // optional
        additionalInfoField: "NAME1",
        // optional
        languageField: "SPRAS",
        // to be formatted as SPRAS = {0}
        // Example: default LANG data type is 1 character!
        language: "E"
    },
    searchOptions: {
        // input
        useUppercaseValuesForQueries: true,
        // output
        removeLeadingZerosFromNumbers: false,
        // optional, add your constant where filter
        // extraWhereConditions: "AND ENDDA LIKE '99991231'"
        //
        // translated strings (e.g., german: true)
        // strings: null,
        // preferably configured via service settings
        // maxEntries: 5000,
        // backend substitution for whereClause and whereClauseFormat
    },
    connection: {
        url: "https://your-yunio-endpoint.com:8175/",
        // timeout in milliseconds
        timeout: 30000,
        // API key implementation pending
        // apiKey: "",
        username: "",
        password: ""
        // useSharepointSettings: true
    }
});

```

Elevate your development experience with yunIO. 🚀💼
