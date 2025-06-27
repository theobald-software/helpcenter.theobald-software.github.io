Script expressions offer a way of adding dynamic parameters to Xtract Universal. Script expressions are resolved at extraction runtime. The output of a script expression is a string. This string can be used as input for further .NET string operations.

Script expressions can be used in the following scenarios:

- as dynamic folder paths in cloud storage destinations.
- as dynamic file names in database destinations, cloud storage destinations and flat-file destinations.
- as custom SQL commands in database destinations.
- as selection parameters for [Table](../../table/where-clause/#script-expressions) or [DeltaQ](../../deltaq/selections/#script-expressions-for-deltaq) extractions.

### Syntax of Script Expressions

Script expressions use the C# syntax. They must begin and end with a hash symbol (#). The formula starts and ends with curly brackets ({}), e.g., `#{ Extraction.TableName }#`

Note

Expressions that are specific to Xtract Universal are case sensitive. Make sure to use the exact syntax as documented below.

#### IF-Statements

An IF-statement (ternary operator) is supported and uses the following syntax:

```c#
iif([bool condition], [string trueResult], [string falseResult])

```

**Examples:**

| Input | Output | Description | | --- | --- | --- | | `#{ iif(DateTime.Now.Month==7, "July","Unknown")}#` | July | In month 7 the output is "July", all else is "Unknown". | | `#{Extraction.ExtractionName}##{ iif(string.IsNullOrEmpty(Extraction.Context), string.Empty, "/" + Extraction.Context)}#` | | \*Extraction.Context\* returns a result only with ODP extractions. With all other extraction types the result is empty. - If the extraction name is 'SAP_1' and the extraction type is 'Table', the resulting file path would be `SAP_1/[filename]`. - If the extraction name is 'SAP_2' and the extraction type is 'ODP' and a SAP DataSource (extraction context: SAPI) is being extracted, the resulting file path would be `SAP_2/SAPI/[filename]`. |

### Script Expressions based on .NET

Xtract Universal script expressions support the following .NET objects, properties and methods from the .NET System Namespace of Xtract Universal's current [.NET framework](../../setup/requirements/#other-applications-and-frameworks):

*Object*, *Boolean*, *Char*, *String*, *SByte*, *Byte*, *Int16*, *UInt16*, *Int32*, *UInt32*, *Int64*, *UInt64*, *Single*, *Double*, *Decimal*, *DateTime*, *TimeSpan*, *Guid*, *Math*, *Convert*.

Note

The most common usage scenario is using the methods and properties of the .NET *DateTime* and *String* classes. For further information of supported [.NET classes and their properties and methods](https://docs.microsoft.com/en-us/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) including [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime?view=net-5.0) and [String](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.7.2) see the Microsoft online documentation.

#### Supported Keywords

The following key words are supported:

*true*, *false*, *null*.

### List of available Script Expressions

#### Use Script Expressions as Dynamic File Names

Script expressions can be used to generate a dynamic file name. This allows generating file names that are composed of an extraction's properties, e.g. extraction name, SAP source object. This scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input | Description | | --- | --- | | `#{Source.Name}#` | Name of the extraction's SAP source. | | `#{Extraction.ExtractionName}#` | Name of the extraction. | | `#{Extraction.FullyQualifiedExtractionName}#` | Name of the extraction. If the extraction is part of an [extraction group](../../organize-extractions/), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. | | `#{Extraction.Type}#` | Extraction type (*Table*, *ODP*, *BAPI*, etc.). | | `#{Extraction.SapObjectName}#` | Name of the SAP object the extraction is extracting data from. | | `#{Extraction.Timestamp}#` | Timestamp of the extraction. | | `#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}#` | Removes the first slash '/' of an SAP object. Example: /BIO/TMATERIAL to BIO/TMATERIAL - prevents creating an empty folder in a file path. | | `#{Extraction.SapObjectName.Replace('/', '_')}#` | Replaces all slashes '/' of an SAP object. Example /BIO/TMATERIAL to \_BIO_TMATERIAL - prevents splitting the SAP object name by folders in a file path. | | `#{Extraction.Fields["FISCPER"].RangeSelections[0].LowerValue}#` | Lower value of the range selection. | | `#{Extraction.Fields["FISCPER"].RangeSelections[0].UpperValue}#` | Upper value of the range selection. | | `#{Extraction.Context}#` | Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). | | `#{Extraction.Fields["[NameSelectionFiels]"].Selections[0].Value}#` | Only for ODP extractions: returns the input value of a defined selection / filter. | | `#{Odp.UpdateMode}#` | Only for ODP extractions: returns the update mode (*Delta*, *Full*, *Repeat*) of the extraction. | | `#{TableExtraction.WhereClause}#` | Only for Table extractions: returns the WHERE clause of the extraction. |

#### Use Script Expressions as Dynamic Folder Paths

Script expressions can be used to generate a dynamic folder path. This allows generating folder paths that are composed of an extraction's properties, e.g., extraction name, SAP source object. The described scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input | Description | | --- | --- | | `#{Source.Name}#` | Name of the extraction's SAP source. | | `#{Extraction.ExtractionName}#` | Name of the extraction. | | `#{Extraction.FullyQualifiedExtractionName}#` | Name of the extraction. If the extraction is part of an [extraction group](../../organize-extractions/), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. | | `#{Extraction.Type}#` | Extraction type (*Table*, *ODP*, *BAPI*, etc.). | | `#{Extraction.SapObjectName}#` | Name of the SAP object the extraction is extracting data from. | | `#{Extraction.Timestamp}#` | Timestamp of the extraction. | | `#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}#` | Removes the first slash '/' of an SAP object. Example: /BIO/TMATERIAL to BIO/TMATERIAL - prevents creating an empty folder in a file path. | | `#{Extraction.SapObjectName.Replace('/', '_')}#` | Replaces all slashes '/' of an SAP object. Example: /BIO/TMATERIAL to \_BIO_TMATERIAL - prevents splitting the SAP object name by folders in a file path. | | `#{Extraction.Context}#` | Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). | | `#{Extraction.Fields["[NameSelectionFields]"].Selections[0].Value}#` | Only for ODP extractions: returns the input value of a defined selection / filter. | | `#{Odp.UpdateMode}#` | Only for ODP extractions: returns the update mode (*Delta*, *Full*, *Repeat*) of the extraction. | | `#{TableExtraction.WhereClause}#` | Only for Table extractions: returns the WHERE clause of the extraction. | | `#{Extraction.Fields["[0D_NW_CODE]"].Selections[0].Value}#` | Only for BWCube extractions (MDX mode): returns the input value of a defined selection. | | `#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].LowerValue}#` | Only for BWCube extractions (MDX mode): returns the lower input value of a defined selection range. | | `#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].UpperValue}#` | Only for BWCube extractions (MDX mode): returns the upper input value of a defined selection range. | | `#{Extraction.Fields["0D_NW_CODE"].Selections[0].Value}#` | Only for BWCube extractions (BICS mode): returns the input value of a defined selection. | | `#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].LowerValue}#` | Only for BWCube extractions (BICS mode): returns the lower input value of a defined selection range. | | `#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].UpperValue}#` | Only for BWCube extractions (BICS mode): returns the upper input value of a defined selection range. |

#### Use Script Expressions in Custom SQL Statements

You can use script expressions for Custom SQL commands. The following Xtract Universal specific custom script expressions are supported:

| Input | Description | | --- | --- | | `#{Extraction.ExtractionName}#` | Name of the extraction. | | `#{Extraction.FullyQualifiedExtractionName}#` | Name of the extraction. If the extraction is part of an [extraction group](../../organize-extractions/), the name of the extraction group is included in the extraction name. This option avoids conflicts, when the extraction names are not unique. | | `#{Extraction.TableName }#` | Name of the database table extracted data is written to. | | `#{Extraction.RowsCount }#` | Count of the extracted rows. | | `#{Extraction.RunState}#` | Status of the extraction (Running, FinishedNoErrors, FinishedErrors, Cancelled). | | `#{(int)Extraction.RunState}#` | Status of the extraction as number (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors, 6 = Cancelled). | | `#{Extraction.Timestamp}#` | Timestamp of the extraction. |

#### Use Script Expressions as Selection Parameters in Table and DeltaQ

Script expressions are usually used to determine a dynamic date based on the current date. When using script expressions in a [WHERE Clause](../../table/where-clause/#script-expressions), the value must be entered in single quotation marks.

| Input | Description | | --- | --- | | `#{ DateTime.Now.ToString("yyyyMMdd") }#` | Current date in SAP format (yyyyMMdd) | | `#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#` | Current year concatenated with "0101" (yyyy0101) | | `#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#` | Current year concatenated with "0101" (yyyy0101) | | `#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#` | Current year concatenated with "0101" (yyyy0101) |
