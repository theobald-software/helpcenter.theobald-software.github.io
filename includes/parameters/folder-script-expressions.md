
#### Use Script Expressions as Dynamic Folder Paths

Script expressions can be used to generate a dynamic folder path.
This allows generating folder paths that are composed of an extraction's properties, e.g., extraction name, SAP source object.
The described scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input                                                   | Description|
|:--------------------------------------------------------|:-----------|
|<pre>#{Source.Name}#</pre> |  Name of the extraction's SAP source.|
|<pre>#{Extraction.ExtractionName}#</pre> | Name of the extraction. If the extraction is part of an [extraction group](../organize-extractions.md), the name of the extraction group is included in the extraction name, e.g, `group,extraction`, `Tables,KNA1`. |
|<pre>#{Extraction.Type}#</pre> |  Extraction type (*Table*, *ODP*, *BAPI*, etc.). |
|<pre>#{Extraction.SapObjectName}#</pre> |  Name of the SAP object the extraction is extracting data from. |
|<pre>#{Extraction.Timestamp}#</pre> |  Timestamp of the extraction.  |
|<pre>#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}#</pre>  |Removes the first slash '/' of an SAP object. <br> Example: /BIO/TMATERIAL to BIO/TMATERIAL - prevents creating an empty folder in a file path.
|<pre>#{Extraction.SapObjectName.Replace('/', '_')}#</pre> | Replaces all slashes '/' of an SAP object. <br> Example: /BIO/TMATERIAL to _BIO_TMATERIAL - prevents splitting the SAP object name by folders in a file path.         |
|<pre>#{Extraction.Context}#</pre> |  Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). |
|<pre>#{Extraction.Fields["[NameSelectionFields]"].Selections[0].Value}#</pre>| Only for ODP extractions: returns the input value of a defined selection / filter.| 
|<pre>#{Odp.UpdateMode}#</pre>| Only for ODP extractions: returns the update mode (*Delta*, *Full*, *Repeat*) of the extraction.| 
|<pre>#{TableExtraction.WhereClause}#</pre> | Only for Table extractions: returns the WHERE clause of the extraction.  |
|<pre>#{Extraction.Fields["[0D_NW_CODE]"].Selections[0].Value}#</pre> | Only for BWCube extractions (MDX mode): returns the input value of a defined selection.  |
|<pre>#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].LowerValue}#</pre> | Only for BWCube extractions (MDX mode): returns the lower input value of a defined selection range.  |
|<pre>#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].UpperValue}#</pre> | Only for BWCube extractions (MDX mode): returns the upper input value of a defined selection range.  |
|<pre>#{Extraction.Fields["0D_NW_CODE"].Selections[0].Value}#</pre> | Only for BWCube extractions (BICS mode): returns the input value of a defined selection. |
|<pre>#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].LowerValue}#</pre> | Only for BWCube extractions (BICS mode): returns the lower input value of a defined selection range.  |
|<pre>#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].UpperValue}#</pre> | Only for BWCube extractions (BICS mode): returns the upper input value of a defined selection range.  |

