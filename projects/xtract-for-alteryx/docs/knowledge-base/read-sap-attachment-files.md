---
title: Read and Download SAP Attachment Files 
description: Test
author: Simon Rech, Valerie Schipka
---

The following article shows how to extract attachment files of all formats from an SAP system, e.g., .pdf files of purchase orders.<br>

### About this Workflow

This article leads you through all necessary steps to set up the following workflows:
- Get a list of attached files from the SAP ERP system (Object IDs and file names)
- Use the Object IDs to download SAP attachment files of any format

[:material-download-circle: Download Workflow](../assets/files/xfa/SAP-Read-Attachment-Files.yxmd){ .md-button .md-button--primary }

| SAP System | SAP Objects | {{ productName }} Component |
| :------ |:--- | :--- |
| SAP ERP | *SRGBTBREL* (Relationships in GOS Environment) <br>*SOOD* (SAPoffice: Object Definition) | Xtract Table |
| SAP ERP | *SO_DOCUMENT_READ_API1* (SAPoffice: View object from folder using RFC) | Xtract BAPI |



### Prerequisites

To use the Xtract BAPI component and the Xtract Table component, access to the designated authority objects (RFC) in SAP must be available, see [SAP User Rights: BAPI](../documentation/setup-in-sap/sap-authority-objects.md#bapi) and [SAP User Rights: Table](../documentation/setup-in-sap/sap-authority-objects.md#table).


### Get a List of all SAP Attachments

Follow the steps below to set up the following workflow:
- Read the table *SRGBTBREL* to get all object IDs that are attached to business objects
- Read the table *SOOD* to get the corresponding file names and extensions of the object IDs.

=== "How to get a List of Object IDs"
	
	1. Drag & drop the Xtract Table component into your Alteryx workflow :number-1:.<br>
	![xfa_create_table_extraction_01](../assets/images/articles/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
	2. Select an SAP connection :number-2:. If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../documentation/sap-connection/index.md).
	3. Click **[Edit]** :number-3: to open the main window of the Xtract Table component.
	4. [Look up](../documentation/table/index.md/#look-up-an-sap-table) the SAP table *SRGBTBREL*.
	5. Select the columns TYPEID_A (source of the attached file) and INSTID_B (Object ID) for output.<br>
	![attachment-files-table1](../assets/images/articles/xfa/attachment-files-table1.png){:class="img-responsive"}
	6. Click **[OK]** to save the table extraction.
	7. Optional: Add a **Formula** tool after the Xtract Table component to separate the key objects of INSTID_B into the following columns: "Object", "OBJTP" (object type), "OBJYR" (object year) and "OBJNO" (object number).<br>
	![attachment-files-formula](../assets/images/articles/xfa/attachment-files-formula.png){:class="img-responsive"}

	The processed list of attached files contains the following information:<br>
	![attachment-files-SRGBTBREL-parsed-output](../assets/images/articles/xfa/attachment-files-SRGBTBREL-parsed-output.jpg){:class="img-responsive"}

=== "How to get a List of File Names"

	1. Drag & drop the Xtract Table component into your Alteryx workflow.
	2. Select an SAP connection. If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../documentation/sap-connection/index.md).
	3. [Look up](../documentation/table/index.md/#look-up-an-sap-table) the SAP table *SOOD*. The table contains all document IDs attached to business objects.
	4. Select the columns OBJTP, OBJYR and OBJNO for output.<br>
	![attachment-files-table2](../assets/images/articles/xfa/attachment-files-table2.png){:class="img-responsive"}
	5. Click **[Edit parameters]** and [create a runtime parameter](../documentation/table/edit-runtime-parameters.md/#create-runtime-parameters) *OBJNO* of type string.<br>
	![attachment-files-runtime-parameter](../assets/images/articles/xfa/attachment-files-runtime-parameter.png){:class="img-responsive"}
	6. Navigate to the WHERE Clause tab and create the following WHERE clause: `SOOD~OBJNO IN [OBJNO]`. <br>
	![attachment-files-where-clause](../assets/images/articles/xfa/attachment-files-where-clause.png){:class="img-responsive"}
	7. Click **[OK]** to save the table extraction.
	8. Define an object number as the input for the runtime parameter of the Xtract Table component, e.g., *000000001276*.<br>
	![attachment-files-table-input](../assets/images/articles/xfa/attachment-files-table-input.png){:class="img-responsive"}
	9. Add a **Join** tool to join the results of the two table extraction into a single list.<br>
	![attachment-files-workflow1](../assets/images/articles/xfa/attachment-files-workflow1.png){:class="img-responsive"}

!!! note
	The workflow provided in the Alteryx community contains further steps to download the first file in the list of attached files in the SAP ERP system.

### Download SAP Attachment Files

Follow the steps below to download SAP attachment files using their Object ID as input:

1. Drag & drop the Xtract BAPI component into your Alteryx workflow :number-1:.<br>
![xfa_create_bapi_extraction_01](../assets/images/articles/xfa/xfa_create_bapi_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection :number-2:. If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../documentation/sap-connection/index.md).
3. Click **[Edit]** :number-3: to open the main window of the Xtract BAPI component.
4. In the main window of the component click :magnifying-glass:. The window “Function Module Lookup Lookup” opens.
5. [Look up](../documentation/bapi/index.md/#look-up-a-function-module-bapi) the function module *SO_DOCUMENT_READ_API1*.
6. Click **[Edit parameters]** and [create a runtime parameter](../documentation/bapi/edit-runtime-parameters.md/#create-runtime-parameters) *ObjectIdentifier* of type string.<br>
![attachment-files-runtime-parameter2](../assets/images/articles/xfa/attachment-files-runtime-parameter2.png){:class="img-responsive"}
7. In the *Import* tab, set the DOCUMENT_ID to the runtime parameter *ObjectIdentifier*.<br>
![attachment-files-bapi-import](../assets/images/articles/xfa/attachment-files-bapi-import.png){:class="img-responsive"}
8. In the *Export* tab, select DOCUMENT_DATA for output.
9. In the *Table* tab, select CONTENTS_HEX for the output. CONTENTS_HEX contains the attachment file in the format of a HEX string.
10. Click **[OK]** to save your input.
11. Define an Object ID as the input for the runtime parameter of the Xtract BAPI component, e.g., *FOL18          4 EXT45000000000229*.<br>

	!!! tip
		Object IDs are available in the SAP table SRGBTBREL, see [Get a List of all SAP Attachments](#get-a-list-of-all-sap-attachments).
		
	![attachment-files-bapi-input](../assets/images/articles/xfa/attachment-files-bapi-input.png){:class="img-responsive"}
12. Add a **Summarize** tool :number-4: to concatenate the multi-line HEX string returned by the Xtract BAPI component into a single line.
13. Add a **Select** :number-5: and a **Formula** tool to concatenate the file name using the Xtract BAPI output fields OBJDES and FILE_EXT, e.g., `example.pdf`.<br>
![attachment-files-formula-filename](../assets/images/articles/xfa/attachment-files-formula-filename.png){:class="img-responsive"}
14. Add a **Append Fields** tool to append the file name to the HEX string.<br>
![attachment-files-append-fields](../assets/images/articles/xfa/attachment-files-append-fields.png){:class="img-responsive"}
15. Add a **Blob Convert** tool :number-6: to convert the HEX string to a Binary Large OBject (BLOB).
BLOB data types can store multiple file types, e.g., images, audio, and other objects, see [Alteryx Documentation: Blob Convert Tool](https://help.alteryx.com/current/en/designer/tools/developer/blob-convert-tool.html) for more information. <br>
![attachment-files-blob-convert](../assets/images/articles/xfa/attachment-files-blob-convert.png){:class="img-responsive"}
16. Add a **Blob Output** tool :number-7: to save the file.<br>
![attachment-files-blob-convert](../assets/images/articles/xfa/attachment-files-blob-output.png){:class="img-responsive"}


*****
#### Related Links
- [Alteryx Community - Read SAP Attachment Files](https://community.alteryx.com/t5/Community-Gallery/Read-and-Download-SAP-Attachment-Files-using-Xtract-for-Alteryx/ta-p/1212418)
- [Documentation: Xtract Table](../documentation/table/index.md)
- [Documentation: Xtract BAPI](../documentation/bapi/index.md)
- [Sample Workflows](../sample-workflows.md)
