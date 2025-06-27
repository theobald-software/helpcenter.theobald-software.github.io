SAP customization for the Xtract Table component is optional. The installation of the custom function module `/THEO/READ_TABLE` is recommended to improve performance and to bypass restrictions of the SAP standard function module RFC_READ_TABLE.

### RFC_READ_TABLE Restrictions

Especially with older SAP releases you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall width of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables. Can cause also duplicates.
- Depending on the SAP version there may be other restrictions.

When facing restrictions, install the Theobald Software custom function module [/THEO/READ_TABLE](./#installation-of-theoread_table) on your SAP system.

Warning

**Converting issues**\
Error while converting value '\*.0' of row 1530, column 3.\
The SAP standard module *RFC_READ_TABLE* for table extraction can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction. Use the function module */THEO/READ_TABLE*.

### Installation of /THEO/READ_TABLE

An SAP transport request for the installation of the function module is provided in the installation directory of Xtract for Alteryx: `C:\Program Files\XtractForAlteryx\ABAP\`.\
Transport requests are imported into SAP by your SAP Basis team. For more information, see [Knowledge Base: Import an SAP Transport Request](/xtract-for-alteryx/knowledge-base/import-an-sap-transport-request/).

Note

Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\XtractForAlteryx\ABAP\README.pdf`) before installing any custom function modules.

It is recommended to install the latest custom function module THEO/READ_TABLE:

| Transport Request | Compatible SAP Systems | | --- | --- | | `THEO_READ_TABLE_740SP05.zip` | ABAP version 7.40 SP05 and higher | | `THEO_READ_TABLE_710.zip` | ABAP version 7.10 to 7.40 SP04 | | `THEO_READ_TABLE_640.zip` | ABAP versions from 6.40 until 7.03 | | `THEO_READ_TABLE_46C.zip` | ABAP versions from 4.6C |

When importing the transport requests on older SAP releases a syntax error may occur. Contact [Theobald Support](https://support.theobald-software.com) and send the dedicated error message text.

Warning

**Generating Short Dumps.**\
Testing the function modules on an SAP system is not possible. Function modules /THEO/READ_TABLE and Z_THEO_READ_TABLE can only be called by Theobald Software products due to the callback function of the module. Avoid calling function modules /THEO/READ_TABLE and Z_THEO_READ_TABLE directly from an SAP system.

### Supported Features

| Supported Features by THEO_READ_TABLE | \_740SP05 | \_710 | \_640 | 46C | | --- | --- | --- | --- | --- | | WHERE Clause | | | | | | HAVING Clause | | | | | | INNER JOIN | | | | | | LEFT OUTER JOIN | | | | | | Conversion exits | | | | | | Aggregate functions | | | | | | SQL expressions (subqueries) | | | | | | Background jobs | | | | |

______________________________________________________________________

#### Related Links

- [Knowledge Base: Import an SAP Transport Request](/xtract-for-alteryx/knowledge-base/import-an-sap-transport-request/)
- [Xtract Table Component](../../table/)
