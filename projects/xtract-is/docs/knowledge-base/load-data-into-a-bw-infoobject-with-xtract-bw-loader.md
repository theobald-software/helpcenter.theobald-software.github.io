---
title: Load Data into a BW Infoobject with Xtract BW Loader
description: how-to-load-data-into-a-bw-infoobject-with-xtract-bw-loader
---

The following article shows how to use the Xtract BW Loader component with an InfoPackage to load data into InfoObject Texts.

!!! tip
	Xtract BWLoader can load data to InfoPackages that can be forwarded to other SAP BW objects like InfoObject attributes, hierarchies or InfoCubes.

### Create an InfoObject

In the depicted example an InfoObject ZCUSTOMER is created.
If you have already an InfoObject, skip to [Setup in SAP](#setup-in-sap).

1. Create an InfoObject using transaction RSA1.<br>
![data-into-a-bw_01](../assets/images/xis/articles/bwloader/data-into-a-bw_01.jpg){:class="img-responsive"}
2. Set a name, e.g., ZCUSTOMER.
3. Set data type and length, e.g., type *CHAR* with a length of 10.
4. On the Master data/texts tab select the following options.<br>
![data-into-a-bw_04](../assets/images/xis/articles/bwloader/data-into-a-bw_04.jpg){:class="img-responsive"}

### Setup in SAP 

Create the following objects in SAP:

=== "RFC Destination"

	Create an RFC Destination using transaction SM59, e.g, XTRACT 01. <br>
	![data-into-a-bw_05](../assets/images/xis/articles/bwloader/data-into-a-bw_05.jpg){:class="img-responsive"}

=== "InfoSource"

	1. Create a new InfoSource 3.x.<br>
	![data-into-a-bw_06](../assets/images/xis/articles/bwloader/data-into-a-bw_06.jpg){:class="img-responsive"}
	2. Select the option **[Direct Update of Master Data]** and select an InfoObject, e.g., ZCUSTOMER.<br>
	![data-into-a-bw_07](../assets/images/xis/articles/bwloader/data-into-a-bw_07.jpg){:class="img-responsive"}
	3. Create the transfer rules for the InfoObject.<br>
	![data-into-a-bw_09](../assets/images/xis/articles/bwloader/data-into-a-bw_09.jpg){:class="img-responsive"}
	4. Select your RFC Destination as the Source System, e.g., XTRACT01.
	5. Save the changes. 

=== "InfoPackage"

	1. Create an InfoPackage.<br>
	![data-into-a-bw_13](../assets/images/xis/articles/bwloader/data-into-a-bw_13.jpg){:class="img-responsive"}
	2. Enter the description, select the Destination and click **[Save]**.<br>
	![data-into-a-bw_14](../assets/images/xis/articles/bwloader/data-into-a-bw_14.jpg){:class="img-responsive"}
	3. In the tab "Schedule", select **[Start later in Background]** and click **[Scheduling options] > [immediate]**.<br>
	![data-into-a-bw_15](../assets/images/xis/articles/bwloader/data-into-a-bw_15.jpg){:class="img-responsive"}
	4. Click **[Save]**. 


### Setup in SSIS

1. Create a data flow task and [define an SAP connection](https://help.theobald-software.com/en/xtract-is/sap-connection/the-connection-manager).
2. Optional: add an OLE DB Source for the SQL table to the workflow.
The depicted example uses the following SQL table as input for the InfoObject:<br>
![data-into-a-bw_17](../assets/images/xis/articles/bwloader/data-into-a-bw_17.jpg){:class="img-responsive"}
![data-into-a-bw_18](../assets/images/xis/articles/bwloader/data-into-a-bw_18.jpg){:class="img-responsive"}
3. Add an Xtract BW Loader component to the workflow.
4. Look up InfoObject ZCUSTOMER.<br>
![data-into-a-bw_20](../assets/images/xis/articles/bwloader/data-into-a-bw_20.jpg){:class="img-responsive"}
5. Map pipeline elements to the InfoObject fields.<br>
![data-into-a-bw_21](../assets/images/xis/articles/bwloader/data-into-a-bw_21.jpg){:class="img-responsive"}
6. Execute the data flow in SSIS.

To check check if the data was loaded, open the log in SAP or check the content of the InfoObject.<br>
![data-into-a-bw_23](../assets/images/xis/articles/bwloader/data-into-a-bw_23.jpg){:class="img-responsive"}


*****

##### Related Links 
- [Xtract BW Loader](https://help.theobald-software.com/en/xtract-is/bw-loader) 

