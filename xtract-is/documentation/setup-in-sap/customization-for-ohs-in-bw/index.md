Before using the Xtract OHS component, an RFC destination has to be created in the SAP system. This page shows how to set up the RFC destination and SAP process chain.

Depending on the SAP release, Xtract OHS can be used as follows:

| SAP Release | SAP Object | Details | | --- | --- | --- | | BI < 7.0 | InfoSpoke | [InfoSpokes and Process Chains (BI < 7.0)](#infospokes-and-process-chains-bi-70) | | BI >= 7.0 | OHS-Destination | [OHS Destinations and Data Transfer Processes (BI >= 7.0)](#ohs-destinations-and-data-transfer-processes-bi-70) |

### Create an RFC destination

1. Go to SAP transaction *SM59* to create an RFC destination of type *TCP/IP* .
1. Select the activation type **Registered Server Program** .
1. Enter a name in the field **Program ID** , e.g., *XTRACT01*. The name of the Program ID is needed again for later configuration.

### InfoSpokes and Process Chains (BI < 7.0)

1. Go to SAP transaction *RSA1* to open the Administrator Workbench.
1. Navigate to **Tools > Open Hub Service > Infospoke** to create an InfoSpoke.
1. Store data source in the InfoSpoke, e.g. an ODS object or a cube.
1. Define an InfoSpoke for data extraction into an external system in the *Destination* tab.
1. Specify the RFC destination created in advance.
1. Fill in the columns to be transferred and, if necessary, a selection.
1. Save and activate the InfoSpoke.
1. Generate a process chain with transaction *RSA1* in the menu **Edit -> Process Chains**.
1. Activate **Start by API** in the variant for the process chain.
1. Insert the created InfoSpoke into the process chain.
1. Save and activate the process chain.

### OHS Destinations and Data Transfer Processes (BI >= 7.0)

1. Go to SAP transaction *RSA1* to open the Administrator Workbench.
1. Navigate to **Open Hub Destination** in the left tree and right-click on an InfoArea. Select **Create Open Hub Destination** in the context menu.
1. In the edit mode of the destination, set the *Destination Type* to **Third Party Tool** and select your RFC destination.
1. Save and activate the OHS destination.
1. Click on the newly created OHS destination in the middle tree of the InfoAreas and select **Create Data Transfer Process** to create a new data transfer process (DTP).
1. Save and activate the DTP. If necessary, change the extraction type from *Delta* to *Full* before activating) The arrangement of Destination, Transformations and DTP in the OHS tree is done afterwards.
1. Create a process chain that contains the new DTP.
1. Make sure that the planning option **Start Using Meta Chain or API** is selected in the process chain start variant.
1. Activate the process chain.

______________________________________________________________________

#### Related Links

- [SAP Note 2437637](https://launchpad.support.sap.com/#/notes/2437637)
- [SAP Note 1983356](https://launchpad.support.sap.com/#/notes/1983356)
