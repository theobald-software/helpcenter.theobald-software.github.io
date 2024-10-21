---
title: Example Scenario
description: Example Scenario
---

In the previous chapters data targets (InfoObjects, InfoSource, InfoPackages) are modeled in the BW system. 
The {{ bwloader }} {{ component }} offers the possibility of creating all necessary objects right from within the editor.

You can find the BWLoaderSampleDB.sql file in the installation directory, e.g., {{ installationDir }}. 
This file contains all necessary SQL commands needed to create and fill in the tables used in the following examples in a test database.

### Master Data Transfer

In this first example, the goal is to create and fill in a master data InfoObject. 

1. Set up a new data flow and create an OleDB source that reads the product table. 
2. Link the pipeline with a BW Loader target (after setting up the connection manager to SAP):<br>
![BWLoader-StammDataTransfer-01](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-01.png){:class="img-responsive"}
3. Open the editor of the BW Loader. Click the *New* button for the InfoSource.<br>
![BWLoader-StammDataTransfer-02](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-02.png){:class="img-responsive"}
4. Select *Master Data* in the following dialog window. A dialogue window opens in which an InfoSource can be set up.<br>
![BWLoader-StammDataTransfer-03](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-03.png){:class="img-responsive"}
5. Click the *Create New InfoObject* button.<br>
![BWLoader-StammDataTransfer-04](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-04.png){:class="img-responsive"}
6. Enter the name of the InfoObject (ZPROD) and click the *CHAR data type* (with a length of 20). 
In addition, short and long texts are to be filled here later, which are depending on the language, and the InfoObject will have master data:<br>
![BWLoader-StammDataTransfer-05](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-05.png){:class="img-responsive"}
7. The color attribute has to be added to the ZPROD InfoObject. The color attribute can be newly created by clicking the *Create New Attribute* button. 
The screenshot below shows the ZCOLOR InfoObject to be created; it has no master data, but allows lower case characters (see above right).<br>
![BWLoader-StammDataTransfer-06](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-06.png){:class="img-responsive"}
8. Save and activate the *ZPROD* InfoObject. The program returns to our original InfoSource setup. 
9. Edit the InfoSource according to the screenshot. <br>
![BWLoader-StammDataTransfer-07](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-07.png){:class="img-responsive"}
10. Save and activate the InfoSource. Apart from creating an InfoSource, transfer rules for the selected source system are also created here.
11. Create an InfoPackage in the main template with the *Create New InfoPackage* button. The InfoPackage is based on the previously created InfoSource.<br>
![BWLoader-StammDataTransfer-08](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-08.png){:class="img-responsive"}
12. Define the technical access parameters for the source system and mapping of the pipeline elements to the InfoPackage's transfer structure. 
The main template should look like this when you're done:<br>
![BWLoader-StammDataTransfer-09](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-09.png){:class="img-responsive"}

Start the upload in debug-mode. In the monitor in transaction RSA1, the upload looks like this:

![BWLoader-StammDataTransfer-10](../../assets/images/documentation/components/bwloader/examples/BWLoader-StammDataTransfer-10.png){:class="img-responsive"}

### Texts

In the previous section, we created a master data InfoObject while specifying that there are language-dependent texts. 
These are located in the ProductText table.

1. Create a new data flow (or a new package)
2. Prepare the connection manager and define an OleDB source for the ProductText table. 
3. Define a BW Loader target and draw the pipeline to the target.<br>
![BWLoader-Text-01](../../assets/images/documentation/components/bwloader/examples/BWLoader-Text-01.png){:class="img-responsive"}
4. Create a new InfoPackage by clicking *Create New InfoPackage* button. The dialog should be filled in as follows:<br>
![BWLoader-Text-02](../../assets/images/documentation/components/bwloader/examples/BWLoader-Text-02.png){:class="img-responsive"}
5. Because we already specified in the ZPROD setup that there are language dependent short and long texts, the transfer structure is already built accordingly. 
Now only the pipeline elements have to be mapped to the transfer structure elements, as shown in the following screenshot:<br>
![BWLoader-Text-03](../../assets/images/documentation/components/bwloader/examples/BWLoader-Text-03.png){:class="img-responsive"}
6. A test run uploads the texts to the BW. The following screenshot shows the RSA1 transaction.
It shows both InfoPackages for the attributes and texts under the ZPROD InfoSource. 
The XTRACTSYS source system forms the transfer layer. Depending on the release you use, this screenshot might look different.<br>
![BWLoader-Text-04](../../assets/images/documentation/components/bwloader/examples/BWLoader-Text-04.png){:class="img-responsive"}


The following screenshot shows the contents of the PSA table after posting. In an Unicode system, any fonts can be posted (e.g. Japanese).

![BWLoader-Text-05](../../assets/images/documentation/components/bwloader/examples/BWLoader-Text-05.png){:class="img-responsive"}

### Create an InfoCube

An InfoCube into which the data can be loaded is required.

1. Create a new SSIS package.
2. Define an OleDB source in the Sales test table and link the pipeline with a BW Loader target.
3. Click the link *Create Cube* in the editor. The following window opens:<br>
![BWLoader-Create-InfoCube-01](../../assets/images/documentation/components/bwloader/examples/BWLoader-Create-InfoCube-01.png){:class="img-responsive"}<br>
Through the already linked pipeline, Xtract IS has the correct properties of the cube. One InfoObject for each element is necessary to create a cube.
4. Click the *Create* link to create an OrderID in the system as an InfoObject:<br>
![BWLoader-Create-InfoCube-02](../../assets/images/documentation/components/bwloader/examples/BWLoader-Create-InfoCube-02.png){:class="img-responsive"}
5. Two key figures are needed: quantity and price. A fixed unit (ST for Stück, unit in German) is specified under quantity.
For price, a reference is made to the 0CURRENCY InfoObject.

	=== "Quantity"
		![BWLoader-Create-InfoCube-03](../../assets/images/documentation/components/bwloader/examples/BWLoader-Create-InfoCube-03.png){:class="img-responsive"}
	=== "Price"
		![BWLoader-Create-InfoCube-04](../../assets/images/documentation/components/bwloader/examples/BWLoader-Create-InfoCube-04.png){:class="img-responsive"}
		
6. The three remaining elements are defined through InfoObjects that already exist (ZPROD for product, 0CALDAY for the date and 0CURRENCY for the currency):<br>
![BWLoader-Create-InfoCube-05](../../assets/images/documentation/components/bwloader/examples/BWLoader-Create-InfoCube-05.png){:class="img-responsive"}
7. Create a new InfoSource of the *Transaction Data* type. It is set up just like the cube. 
Only in the price field we have to make an explicit reference to the currency column (*Unit Field* column):<br>
![BWLoader-Create-InfoCube-06](../../assets/images/documentation/components/bwloader/examples/BWLoader-Create-InfoCube-06.png){:class="img-responsive"}
8. Open the cube administration in the RSA1 transaction and then select *Environment* in the *menu -> Update Rules -> Create*.
9. Select the InfoSource you just created and confirm with *Enter*. 
10. Save and activate the rule.

### Load Transaction Data

Create an InfoPackage of the Transaction type for the InfoSource, and link the pipeline elements with the elements of the transfer structure. 
The following screenshot shows the completed link. The transaction data can now be loaded.

![BWLoader-Load-TransactionData](../../assets/images/documentation/components/bwloader/examples/BWLoader-Load-TransactionData.png){:class="img-responsive"}