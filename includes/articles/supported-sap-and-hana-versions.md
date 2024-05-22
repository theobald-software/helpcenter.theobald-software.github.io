
The following article gives an overview of all SAP S/4HANA systems supported by {{ productName }}.

### Supported SAP S/4HANA Cloud Systems

The following table lists all available SAP S/4HANA cloud systems and their compatibility with {{ productName }}.<br>
SAP S/4HANA Cloud Edition (Cloud ERP):

<div class="annotate" markdown>

| | S/4HANA Public Cloud | S/4HANA Private Cloud  | RISE with SAP S/4HANA Cloud Private Edition  |     
|--|---------------------------------------|-------------------------------------|---------------------------------------------|
| **Compatible with {{ productName }}:**| {% if  page.meta.product == "yunio" %} :x: {% else %} :white_check_mark: (with limitations) {% endif %}  | :white_check_mark: {% if  page.meta.product != "erpconnect" %} (with limitations) {% endif %}|  :white_check_mark:        | 
| **Limitations:**|  {% if  page.meta.product == "yunio" %} - {% else %} Only Remote Function Modules (BAPIs) released via Communication Scenario are supported. {% endif %} |  {% if  page.meta.product != "erpconnect" %}The installation of custom function modules is restricted.<br>Transport requests for [Table](../documentation/setup-in-sap/custom-function-module-for-table-extraction.md) and [Report](../documentation/setup-in-sap/custom-function-module-for-reports.md) cannot be imported by customers, but must be requested from SAP.{% else %} - {% endif %} |     -    | 

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
