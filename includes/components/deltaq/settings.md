
The {{ deltaq }} settings consist of the following tabs: 

- [*Base*](#base-settings)
{% if page.meta.product == "xtract-is" %}- [*Misc*](#misc-settings){% endif %}
- [*Hierarchy*](#hierarchy-settings)


## Base Settings

{% if page.meta.product == "xtract-is" %}
![Extraction-Settings](../../assets/images/xis/documentation/deltaq/settings-base-xis.png)
{% else %}
![Extraction-Settings](../../assets/images/documentation/components/deltaq/settings-base.png)
{% endif %}

### Transfer Mode

The raw data packages can be sent by SAP via *tRFC* call or *Data-IDoc*. *tRFC* is is the default setting. <br>
Switch to *IDoc* to monitor the raw data packages in the transaction WE02 (IDoc-Monitoring) for debugging reasons. 

{% if page.meta.product == "xtract-is" %}

### Convert Dates

#### Min Date

Converts the SAP date 00000000 to the entered value. NULL is supported as a value.

#### Max Date

Converts the SAP date 9999XXXX to the entered value. NULL is supported as a value.

#### Replace invalid date with

In case of no convertable date values you have to enter a default date value into the textbox. 
Every invalid value is converted into this value.

## Misc. Settings

![settings-misc](../../assets/images/xis/documentation/deltaq/settings-misc-xis.png){:class="img-responsive"}

#### Update Mode Variable

Defines a variable for the update mode. 
Enter the name of an SSIS variable in the format `@variable_name` and set the component's custom property *UseLegacyVarUpdate* to *true* to overwrite the Update Mode. 
The SSIS variable can process the following values: F, C, D, S, I and R, as it is listed in [Update Mode](update-mode.md).

#### Request ID

This field is optional. If a value (e.g., XtractDatasource) is set, it will be used as suffix in the SAP job name (e.g., BIXtractDatasource), otherwise a combination of process ID and timestamp will be used (e.g. REQU_pppppppp_yyyyMMddHHmmss), with process ID being the ID of the Windows process, the XtractDeltaQServerPool.exe is running under.

{% else %}
### Misc. Settings
{% endif %}


#### Automatic Synchronization

Option to prevent manual changes in the transactional system when switching from test environment to production environment. <br>
Example: To use DeltaQ extractions in the production environment, the data source has to be enabled in the production environment. 
If **Automatic Synchronization** is active, the activation is performed automatically and the timestamp of the data source is changed to be consistent with the settings of the SAP system. <br>

!!! note
	If the data source is modified in the SAP system, manually activate the data source in the {% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract{% endif %} DeltaQ component, even when **Automatic Synchronization** is active. 
	Otherwise data load will fail. This behavior belongs to the SAP design, see [SAP Documentation: Replication of DataSources](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.19/en-US/4a12eaff76df1b42e10000000a42189c.html).

#### Add Serialization Info to Output

Adds the columns *DataPackageID* and *RowCounter* to the output.<br>
Example: the following columns that are a composite key of the SAP records are included in the output:
- *RequestID*
- *DataPackageID* 
- *RowCounter*

!!! note 
	Newer data has a higher PackageID. In the same package newer data has a higher RowCounter.

{% if page.meta.product != "xtract-is" %}

#### Accept Gaps in DataPackage ID

At the end of each extraction the DeltaQ component performs a consistency check. 
The extraction is considered consistent if all data packages arrive correctly. 
Example: When using a filter function in the user exit of an OLTP source, certain data packages are not sent. 
In this case the filter function is an inconsistency.
If **Accept Gaps in DataPackage ID** is active, gaps in the package numbering are not considered inconsistencies. 
Only use this option when a filter function exists in the user exit.

#### Timeout (sec)

Enter a time period (in seconds). The timeout applies when an extraction finishes on the SAP side, but not all tRFC calls have been received. 

{% endif %}

## Hierarchy Settings

The following settings only apply to Hierarchy extractions.

{% if page.meta.product == "xtract-is" %}
![Extraction-Settings](../../assets/images/xis/documentation/deltaq/settings-hierarchy-xis.png)
{% else %}
![Extraction-Settings](../../assets/images/documentation/components/deltaq/settings-hierarchy.png)

### Extraction
{% endif %}

#### Language
Enter the language of the Hierarchy, e.g., ‘E’ or ‘D’.

#### Hierarchy Name
Enter the name of the Hierarchy.

#### Hierarchy Class
Enter the class of the Hierarchy.

{% if page.meta.product == "xtract-is" %}
#### Hierarchy Version
Enter the version of the Hierarchy.
{% endif %}