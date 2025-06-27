In the previous chapters data targets (InfoObjects, InfoSource, InfoPackages) are modeled in the BW system. The Xtract BWLoader component offers the possibility of creating all necessary objects right from within the editor.

You can find the BWLoaderSampleDB.sql file in the installation directory, e.g., C:\\Program Files\\XtracIS. This file contains all necessary SQL commands needed to create and fill in the tables used in the following examples in a test database.

### Master Data Transfer

In this first example, the goal is to create and fill in a master data InfoObject.

1. Set up a new data flow and create an OleDB source that reads the product table.
1. Link the pipeline with a BW Loader target (after setting up the connection manager to SAP):
1. Open the editor of the BW Loader. Click the *New* button for the InfoSource.
1. Select *Master Data* in the following dialog window. A dialogue window opens in which an InfoSource can be set up.
1. Click the *Create New InfoObject* button.
1. Enter the name of the InfoObject (ZPROD) and click the *CHAR data type* (with a length of 20). In addition, short and long texts are to be filled here later, which are depending on the language, and the InfoObject will have master data:
1. The color attribute has to be added to the ZPROD InfoObject. The color attribute can be newly created by clicking the *Create New Attribute* button. The screenshot below shows the ZCOLOR InfoObject to be created; it has no master data, but allows lower case characters (see above right).
1. Save and activate the *ZPROD* InfoObject. The program returns to our original InfoSource setup.
1. Edit the InfoSource according to the screenshot.
1. Save and activate the InfoSource. Apart from creating an InfoSource, transfer rules for the selected source system are also created here.
1. Create an InfoPackage in the main template with the *Create New InfoPackage* button. The InfoPackage is based on the previously created InfoSource.
1. Define the technical access parameters for the source system and mapping of the pipeline elements to the InfoPackage's transfer structure. The main template should look like this when you're done:

Start the upload in debug-mode. In the monitor in transaction RSA1, the upload looks like this:

### Texts

In the previous section, we created a master data InfoObject while specifying that there are language-dependent texts. These are located in the ProductText table.

1. Create a new data flow (or a new package)
1. Prepare the connection manager and define an OleDB source for the ProductText table.
1. Define a BW Loader target and draw the pipeline to the target.
1. Create a new InfoPackage by clicking *Create New InfoPackage* button. The dialog should be filled in as follows:
1. Because we already specified in the ZPROD setup that there are language dependent short and long texts, the transfer structure is already built accordingly. Now only the pipeline elements have to be mapped to the transfer structure elements, as shown in the following screenshot:
1. A test run uploads the texts to the BW. The following screenshot shows the RSA1 transaction. It shows both InfoPackages for the attributes and texts under the ZPROD InfoSource. The XTRACTSYS source system forms the transfer layer. Depending on the release you use, this screenshot might look different.

The following screenshot shows the contents of the PSA table after posting. In an Unicode system, any fonts can be posted (e.g. Japanese).

### Create an InfoCube

An InfoCube into which the data can be loaded is required.

1. Create a new SSIS package.

1. Define an OleDB source in the Sales test table and link the pipeline with a BW Loader target.

1. Click the link *Create Cube* in the editor. The following window opens:

   Through the already linked pipeline, Xtract IS has the correct properties of the cube. One InfoObject for each element is necessary to create a cube.

1. Click the *Create* link to create an OrderID in the system as an InfoObject:

1. Two key figures are needed: quantity and price. A fixed unit (ST for Stück, unit in German) is specified under quantity. For price, a reference is made to the 0CURRENCY InfoObject.

1. The three remaining elements are defined through InfoObjects that already exist (ZPROD for product, 0CALDAY for the date and 0CURRENCY for the currency):

1. Create a new InfoSource of the *Transaction Data* type. It is set up just like the cube. Only in the price field we have to make an explicit reference to the currency column (*Unit Field* column):

1. Open the cube administration in the RSA1 transaction and then select *Environment* in the *menu -> Update Rules -> Create*.

1. Select the InfoSource you just created and confirm with *Enter*.

1. Save and activate the rule.

### Load Transaction Data

Create an InfoPackage of the Transaction type for the InfoSource, and link the pipeline elements with the elements of the transfer structure. The following screenshot shows the completed link. The transaction data can now be loaded.
