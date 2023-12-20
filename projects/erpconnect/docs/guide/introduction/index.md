---
title: About ERPConnect
description: Prerequisites and Installation
---

ERPConnect is a flexible and modular .NET library that has been certified by SAP for integration with SAP ECC and SAP S/4HANA.

![ERP-Connect](../assets/images/architecture_erpconnect.png){:class="img-responsive" width="800px" }

### Features


<div class="grid cards" markdown>

-   ![xu](../assets/ERPConnect.png){ .lg .middle width="20px"} __BAPIs and Function Modules__

	---
	
    Access BAPIs and RFC function modules to read data from SAP or write data to SAP.

-   ![xis](../assets/ERPConnect.png){ .lg .middle width="20px"} __BW Cube and BEx Queries__

    ---

    Extract data from SAP BW InfoCubes and BEx Queries.

-   ![xfa](../assets/ERPConnect.png){ .lg .middle width="20px"} __IDocs__

    ---

    Send and receive SAP IDocs.

-   ![bc](../assets/ERPConnect.png){ .lg .middle width="20px"} __Queries__

    ---

    Extract SAP queries (no BEx queries,).
	
-   ![bc](../assets/ERPConnect.png){ .lg .middle width="20px"} __Tables__

    ---

    Read SAP Tables directly via RFC.
	
-   ![bc](../assets/ERPConnect.png){ .lg .middle width="20px"} __Transactions__

    ---

    Execute SAP transactions via batch input.
	
-   ![bc](../assets/ERPConnect.png){ .lg .middle width="20px"} __ABAP Code__

    ---

    Generate and execute ABAP code on-the-fly.
	
-   ![bc](../assets/ERPConnect.png){ .lg .middle width="20px"} __RFC Server Functions__

    ---

    Create, register and use RFC server functions.
	
</div>

### Tools

The installation package of ERPConnect includes the following tools to make development easier and more efficient:

- [*TransactionRecorder*](./tools/transaction-recorder) records SAP transactions and generates C# or VB code for the transactions.
- [*IDoc-Schema-Generator*](./tools/idoc-schema-generator) generates an XML file that can be used to load IDoc schemas with high performance.
- [*Function-Template-Generator*](./tools/function-template-generator) generates reusable XML templates for Function Modules and BAPIs.