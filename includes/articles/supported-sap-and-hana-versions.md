
The following article gives an overview of all SAP S/4HANA systems supported by {{ productName }}.

### Supported SAP S/4HANA cloud systems:

The following table lists all available SAP S/4HANA cloud systems and their compatibility with {{ productName }}.

![Available-S/4HANA-Systems1](../assets/images/articles/sap/SAP-systems-cloud-overview.png){:class="img-responsive"}


SAP S/4HANA Cloud Edition  (Cloud ERP):

| | S/4HANA Cloud Essentials Edition (ES) | S/4HANA Cloud Extended Edition (ED) | S/4HANA Cloud Public Edition  | RISE with SAP S/4HANA Cloud Private Edition  |     
|--|---------------------------------------|-------------------------------------|---------------------|---------------------------------------------|
| Previously called:| Multi Tenant Edition (MTE)  | Single Tenant Edition (STE)  | -    | Private Cloud Edition (PCE)          | 
| Compatible with {{ productName }}:| :x:           | :white_check_mark: (with limitations) | :white_check_mark: (with limitations) | :white_check_mark:                | 

The installation of Custom Function Modules on SAP S/4HANA Cloud Extended Edition is restricted.
Transport requests for [Table](../documentation/setup-in-sap/custom-function-module-for-table-extraction.md) and [Report](../documentation/setup-in-sap/custom-function-module-for-reports.md) cannot be imported by customers themselves, but must be requested from SAP.

### SAP S/4HANA On Premise Systems

The following table lists all available SAP S/4HANA on premise systems and their compatibility with {{ productName }}.

![Available-S/4HANA-Systems2](../assets/images/articles/sap/SAP-systems-premise-overview.png){:class="img-responsive"}


SAP S/4HANA AnyPremise (ERP in the Cloud):

| | S/4HANA Private Cloud <br>Managed by SAP (HEC) | SAP HEC Customer Edition | S/4HANA AnyPremise  | S/4HANA AnyPremise  |     
|--|---------------------------------------|-------------------------------------|---------------------|---------------------------------------------|
| Additional Information:| On-Premises Edition  | Runs on Customer Data Center  | Public Cloud <br>(AZURE/AWS/GCP) | called ERP in DC <br>(Customer Data Center)  | 
| Compatible with {{ productName }}:| :white_check_mark:    | :white_check_mark: | :white_check_mark: | :white_check_mark:                | 
