This section shows how to use the *ReadTable* class.\
A recurrent task when working with SAP and .NET applications is to read directly from tables of the SAP system. The *ReadTable* class enables access to that data.

Note

The *RFC_READ_TABLE* function module for table extractions is not suitable for mass data extraction, see [Restrictions](#restrictions).

### Restrictions

When extracting tables from older SAP releases you may encounter several restrictions when using the SAP standard function module (RFC_READ_TABLE):

- The overall length of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables. Mass data extraction can also cause duplicates. The use of Z_XTRACT_IS_TABLE does not guarantee duplicate-free results.

Warning

**Error while converting value '\*.0' of row 1530, column 3.**\
The SAP standard module *RFC_READ_TABLE* for table extraction can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction.

To bypass the restrictions, install the custom function module Z_XTRACT_IS_TABLE.

### Install Z_XTRACT_IS_TABLE

Follow the steps below to create a custom function module Z_XTRACT_IS_TABLE in SAP that bypasses the restrictions of the SAP standard function module (RFC_READ_TABLE):

1. Use SAP transaction SE37 to create a new function module named Z_XTRACT_IS_TABLE.

   Note

   You can use an existing function group or create a new one. This is also valid for the development class (Package).

1. In the tab *Attributes* check *Remote Enabled*.

1. define the following import imports:

1. Define the following table parameter:

1. Define the following exceptions:

1. Download the file [Z_XTRACT_IS_TABLE.txt](../../assets/files/ABAPcode/Z_XTRACT_IS_TABLE.txt) that contains the ABAP code for the function module.

1. Use **[Ctrl + C]** and **[Ctrl + V]** to paste the ABAP code into the source code editor.

1. Save the function module and activate it.

To use the new custom function module with the *ReadTable* class, use the `SetCustomFunctionName()` command before reading the table. Example:

```text
table.SetCustomFunctionName("Z_XTRACT_IS_TABLE");

```
