
The following article gives an overview of all SAP S/4HANA systems supported by {{ productName }}.

### Supported SAP S/4HANA Cloud Systems

The following table lists all available SAP S/4HANA cloud systems and their compatibility with {{ productName }}.<br>
SAP S/4HANA Cloud Edition (Cloud ERP):

<div class="annotate" markdown>

| | S/4HANA Public Cloud | S/4HANA Private Cloud  | 
|--|---------------------------------------|-------------------------------------|
| **Compatible with {{ productName }}:**| {% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" or page.meta.product == "erpconnect" %} :white_check_mark: (with limitations)  {% else %} :x: {% endif %}  | :white_check_mark: |  
| **Limitations:**|  {% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %} Only [OData services](../documentation/sap-connection/settings.md#source-type-odata) and Remote Function Modules (BAPIs) released via Communication Scenarios are supported. Function Modules are accessed using the [RFC over Websocket](../documentation/sap-connection/settings.md/#general) protocol.{% elif page.meta.product == "erpconnect" %} Only Remote Function Modules (BAPIs) released via Communication Scenario are supported.{% elif page.meta.product == "xtract-for-alteryx" %}Only OData services released via Communication Scenarios are supported.{% else %} - {% endif %} |   -  |  

<!---
Public Cloud {% if  page.meta.product == "yunio" %} - {% else %} Only Remote Function Modules (BAPIs) released via Communication Scenario are supported. {% endif %} |
-->

### SAP S/4HANA On Premise Systems

The following table lists all available SAP S/4HANA on premise systems and their compatibility with {{ productName }}.<br>
SAP S/4HANA AnyPremise (ERP in the Cloud):

| | S/4HANA Private Cloud <br>Managed by SAP (HEC) | SAP HEC Customer Edition | S/4HANA AnyPremise  | S/4HANA AnyPremise  |     
|--|---------------------------------------|-------------------------------------|---------------------|---------------------------------------------|
| Additional Information:| On-Premises Edition  | Runs on Customer Data Center  | Public Cloud <br>(AZURE/AWS/GCP) | called ERP in DC <br>(Customer Data Center)  | 
| Compatible with {{ productName }}:| :white_check_mark:    | :white_check_mark: | :white_check_mark: | :white_check_mark:                | 
