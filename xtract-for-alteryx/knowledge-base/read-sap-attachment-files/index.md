The following article shows how to extract attachment files of all formats from an SAP system, e.g., .pdf files of purchase orders.

### About this Workflow

This article leads you through all necessary steps to set up the following workflows:

- Get a list of attached files from the SAP ERP system (Object IDs and file names)
- Use the Object IDs to download SAP attachment files of any format

[Download Workflow](../../assets/files/xfa/SAP-Read-Attachment-Files.yxmd)

| SAP System | SAP Objects | Xtract for Alteryx Component | | --- | --- | --- | | SAP ERP | *SRGBTBREL* (Relationships in GOS Environment) *SOOD* (SAPoffice: Object Definition) | Xtract Table | | SAP ERP | *SO_DOCUMENT_READ_API1* (SAPoffice: View object from folder using RFC) | Xtract BAPI |

### Prerequisites

To use the Xtract BAPI component and the Xtract Table component, access to the designated authority objects (RFC) in SAP must be available, see [SAP User Rights: BAPI](../../documentation/setup-in-sap/sap-authority-objects/#bapi) and [SAP User Rights: Table](../../documentation/setup-in-sap/sap-authority-objects/#table).

### Get a List of all SAP Attachments

Follow the steps below to set up the following workflow:

- Read the table *SRGBTBREL* to get all object IDs that are attached to business objects
- Read the table *SOOD* to get the corresponding file names and extensions of the object IDs.

1. Drag & drop the Xtract Table component into your Alteryx workflow .
1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).
1. Click **[Edit]** to open the main window of the Xtract Table component.
1. [Look up](../../documentation/table/#look-up-an-sap-table) the SAP table *SRGBTBREL*.
1. Select the columns TYPEID_A (source of the attached file) and INSTID_B (Object ID) for output.
1. Click **[OK]** to save the table extraction.
1. Optional: Add a **Formula** tool after the Xtract Table component to separate the key objects of INSTID_B into the following columns: "Object", "OBJTP" (object type), "OBJYR" (object year) and "OBJNO" (object number).

The processed list of attached files contains the following information:

1. Drag & drop the Xtract Table component into your Alteryx workflow.
1. Select an SAP connection. If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).
1. [Look up](../../documentation/table/#look-up-an-sap-table) the SAP table *SOOD*. The table contains all document IDs attached to business objects.
1. Select the columns OBJTP, OBJYR and OBJNO for output.
1. Click **[Edit parameters]** and [create a runtime parameter](../../documentation/table/edit-runtime-parameters/#create-runtime-parameters) *OBJNO* of type string.
1. Navigate to the WHERE Clause tab and create the following WHERE clause: `SOOD~OBJNO IN [OBJNO]`.
1. Click **[OK]** to save the table extraction.
1. Define an object number as the input for the runtime parameter of the Xtract Table component, e.g., *000000001276*.
1. Add a **Join** tool to join the results of the two table extraction into a single list.

Note

The workflow provided in the Alteryx community contains further steps to download the first file in the list of attached files in the SAP ERP system.

### Download SAP Attachment Files

Follow the steps below to download SAP attachment files using their Object ID as input:

1. Drag & drop the Xtract BAPI component into your Alteryx workflow .

1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).

1. Click **[Edit]** to open the main window of the Xtract BAPI component.

1. In the main window of the component click . The window “Function Module Lookup Lookup” opens.

1. [Look up](../../documentation/bapi/#look-up-a-function-module-bapi) the function module *SO_DOCUMENT_READ_API1*.

1. Click **[Edit parameters]** and [create a runtime parameter](../../documentation/bapi/edit-runtime-parameters/#create-runtime-parameters) *ObjectIdentifier* of type string.

1. In the *Import* tab, set the DOCUMENT_ID to the runtime parameter *ObjectIdentifier*.

1. In the *Export* tab, select DOCUMENT_DATA for output.

1. In the *Table* tab, select CONTENTS_HEX for the output. CONTENTS_HEX contains the attachment file in the format of a HEX string.

1. Click **[OK]** to save your input.

1. Define an Object ID as the input for the runtime parameter of the Xtract BAPI component, e.g., *FOL18 4 EXT45000000000229*.

   Tip

   Object IDs are available in the SAP table SRGBTBREL, see [Get a List of all SAP Attachments](#get-a-list-of-all-sap-attachments).

1. Add a **Summarize** tool to concatenate the multi-line HEX string returned by the Xtract BAPI component into a single line.

1. Add a **Select** and a **Formula** tool to concatenate the file name using the Xtract BAPI output fields OBJDES and FILE_EXT, e.g., `example.pdf`.

1. Add a **Append Fields** tool to append the file name to the HEX string.

1. Add a **Blob Convert** tool to convert the HEX string to a Binary Large OBject (BLOB). BLOB data types can store multiple file types, e.g., images, audio, and other objects, see [Alteryx Documentation: Blob Convert Tool](https://help.alteryx.com/current/en/designer/tools/developer/blob-convert-tool.html) for more information.

1. Add a **Blob Output** tool to save the file.

______________________________________________________________________

#### Related Links

- [Alteryx Community - Read SAP Attachment Files](https://community.alteryx.com/t5/Community-Gallery/Read-and-Download-SAP-Attachment-Files-using-Xtract-for-Alteryx/ta-p/1212418)
- [Documentation: Xtract Table](../../documentation/table/)
- [Documentation: Xtract BAPI](../../documentation/bapi/)
- [Sample Workflows](../../sample-workflows/)
