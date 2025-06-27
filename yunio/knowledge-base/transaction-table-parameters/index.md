The following article shows how to pass tables as input parameters to *Transaction* services.\
The depicted example application uses the transaction VA02 to change a sales order in SAP, see [Transaction VA02 - Change Sales Order](../transaction-va02/).

### Prerequisites

Use an SAP dialog user with sufficient access rights to edit sales orders for the SAP connection assigned to the service.

Tip

The transaction feature of yunIO offers the same functionalities as the SAP GUI.

### Selecting a Table as an Input Parameter

1. Create a transaction service that uses tables.\
   The depicted example uses a service that changes sales orders via transaction VA02, see [Transaction VA02 - Change Sales Order](../transaction-va02/).
1. Click to open the service.
1. Click on the documented actions in the section *GUI Steps* to navigate to the screen that contains the table you want to parameterize.
1. Click on the fields and tables that you want to parameterize. The window “Parameterize Element” opens. All fields that can be parameterized are highlighted in green when hovering over them.
1. In the window “Parameterize Element”, select **Input** to override the content of the table when running the service.
1. Enter a custom name for the parameter, e.g., *ITEMS*.
1. Click **[OK]** to save the parameter. The window “Parameterize Element” closes.
1. Click **[Save]** to save the service.

Note

When defining input parameters, make sure to parameterize fields before they are submitted in the GUI steps. If you define an input parameter after a submit, the input is not submitted to SAP.

### Format of Input Tables

Table parameters are passed to the service in the http request body.\
In the request body, the columns of the table are represented by their SAP technical name, e.g., `RV45A-MABNR` = *Material* column, `RV45A-KWMENG` = *Order Quantity* column, etc. You can look up the description of the SAP technical names in the OpenAPI/Swagger definition, e.g., [Swagger Editor](https://editor.swagger.io/).

Tip

Test the service and pass parameters in yunIO before integrating the service, see [Documentation: Run Services in yunIO](../../documentation/run-services/#run-services-in-yunio).

| Table structure in the http request body | Table structure in OpenAPI/Swagger definition | | --- | --- | | `  "ITEMS": [     {         "selected": false,         "cells": {             "VBAP-POSNR": "",             "RV45A-MABNR": "",             "RV45A-KWMENG": "",             ...         }     },     {         "selected": false,         "cells": {             "VBAP-POSNR": "",             "RV45A-MABNR": "",             "RV45A-KWMENG": "",             ...         }     }     ]  ` | `  ITEMS:     type: array     items:       type: object       properties:         selected:           type: boolean         cells:           type: object           properties:             VBAP-POSNR:               description: Item               type: string             RV45A-MABNR:               description: Material               type: string             RV45A-KWMENG:               description: Order Quantity               type: string             ...  ` |

### Running a Service with Table Parameters

1. Click to copy the URL of the service definition or click to download the service definition.
1. Open the service in a tool that supports OpenAPI/Swagger definitions, e.g., [SwaggerHub](https://explore.swaggerhub.com/).
1. Use the `POST` method when integrating the service. The `GET` method does not support table parameters.
1. Open the request body of the service. All input parameters are listed in the request body.
1. Enter values for all fields that you want to overwrite, e.g., `"RV45A-MABNR": "M-01"`, `"RV45A-KWMENG": "5"`, etc.
1. Run the service. If the service run is successful, the response body contains a confirmation that the order was saved.
1. Open SAP to check if the changes in the sales order.

______________________________________________________________________

#### Related Links

- [Documentation: Transactions](../../documentation/transactions/)
- [Documentation: Parameterize Transactions](../../documentation/transactions/#parameterize-transactions)
