
{% if page.meta.componentFolder == "table" or page.meta.componentFolder == "table-cdc" %}
#### ColumnNameStyle

- *Code*: the SAP technical column name is used as column name in the output, e.g., MAKTX.
- *PrefixedCode*: the SAP technical column name is prefixed by SAP object name and the tilde character, e.g., MAKT~MAKTX.
- *CodeAndText*: the SAP technical column name and the SAP description separated by an underscore are used as column name in the output, e.g., MAKTX_Material Description (Short Text).
- *TextAndCode*: the SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)_MAKTX.
{% endif %}

#### ConvertsDates
When this property is set to *True* (default) SAP date fields (YYYYMMDD) assume the SSIS pipeline type DT_DBDATE instead of DT_WSTR. 
For the date conversions to apply, set the property *UseLegacyDateConversion* to *False*. 
In case of invalid data in SAP date fields, the following date conversions are applied: 
- *InvalidDateReplacement* 
- *MaxDateReplacement*
- *MinDateReplacement* 

{% if page.meta.componentFolder == "table" %}
#### CustomFunctionName
Corresponds to the setting [Function Module](settings.md#function-module) in the {{ table }} {{ component }}.

#### ExtractInBackgroundJob
Corresponds to the setting [Extract data in background job](settings.md#extract-data-in-background-job).
{% endif %}

#### InvalidDateReplacement
Replaces an invalid date format. 
The default value is *1970-01-02*. 
To use the property enter a replacement value for invalid SAP dates, such as '20190132' (January 32nd  2019) in the format yyyy-mm-dd. 
The value NULL is supported.

#### MaxDateReplacement
Replaces SAP dates with the year 9999. 
The default value is *2099-12-31*. 
To use the property enter a replacement value in the format yyyy-mm-dd that contains the year ‘9999’. 
Example: ‘99990101’ (January 1st 9999). The value NULL is supported.

#### MinDateReplacement
Replaces SAP dates with the year *0000*. 
The default value is *1970-01-01*. 
To use the property enter a replacement value in the format yyyy-mm-dd that contains the year '0000'. 
Example: '00000000'. The value NULL is supported.
