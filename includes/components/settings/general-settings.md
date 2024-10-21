This page contains an overview of the settings in the window "General Settings".<br>
To open the general settings, click **General Settings** in the main window of the extraction type.

![Open-General-Settings](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/open-general-settings.png){:class="img-responsive"}

### Misc. Tab

The *Misc.* tab covers cache settings, column encryption and keywords of an extraction type.

![General-Settings](../../assets/images/documentation/components/general-settings/{{ abbr }}/general-settings-misc.png){:class="img-responsive"}


#### Cache results

{% if page.meta.product == "xtract-universal" %} 

The *Cache results* option is only available in [pull destinations](../destinations/index.md), e.g., PBI, Qlik etc.
Pull destinations often pull the data from SAP for several times. 
To decrease the SAP server load, you can select the **Cache results** option, this way the pull destination pulls the data from cache and not from the SAP.

This increases the performance and limits the impact on the SAP system. 
If this behavior is not desired (for example, because the data must be always 100% up to date), the cache option must be explicitly turned off.

{% else %} 

This option can be neglected. Board Connector always uses the result cache, because Board always requests the results twice.

{% endif %}

#### Keywords
One or more keywords (tags) can be assigned to an extraction. 
Keywords can be entered directly in the keyword field.
You can use these keywords to filter extractions in the "Search Extractions" window.
To open the "Search Extractions" window, click **[:magnifying-glass: Search]** in the main window of the Designer. 


!!! tip
	To add keywords to multiple extractions at once, select the extractions in the main window of the Designer.
	Right-click + **Add/Remove keywords** opens the window "Add/Remove Keywords To/From Multiple Extractions".


{% if page.meta.product == "xtract-universal" %} 

### Primary Key Tab

Table extractions inherit the primary keys from SAP. Other objects such as SAP Query, BW Cube etc. require manual setting of the primary keys.  

![General-Settings-Primary-Key](../../assets/images/documentation/components/general-settings/{{ abbr }}/general-settings-primary-key.png){:class="img-responsive"}

The depicted example shows the SAP object *MAKT* with its primary key inherited from SAP in the general settings of the Designer. 
In this example the primary key consists of *MANDT*, *MATNR* and *SPRAS*. The primary key is also taken over in the destination. 

!!! note
	A defined primary key field in a table is a prerequisite for merging data. 

#### Generate Surrogate Key Column

If this option is active, an additional column THEO_SURR_KEY is added to the extracted data.
The THEO_SURR_KEY column contains surrogate keys that can be used as row IDs. 
The surrogate keys are hash values of type signed 8 byte integer, e.g., `#-3008591679982390000`.
They are generated from the selected primary key columns and the name of the SAP source that is assigned to the extraction.

{% endif %}

### Security Tab

Restrict user access to the extraction. For more information, see [Restrict Designer Access](../access-restrictions/restrict-designer-access.md).

![General-Settings-Security](../../assets/images/documentation/components/general-settings/{{ abbr }}/general-settings-security.png){:class="img-responsive"}

{% if page.meta.product == "board-connector" %} 

### CSV Tab

The *CSV* tab covers data and date formatting.

![General-Settings-CSV](../../assets/images/documentation/components/general-settings/{{ abbr }}/general-settings-csv.png){:class="img-responsive"}

#### Column Name Style
Defines the style of the column name. Following options are available:

| Option | Description |
|--------|-------------|
| **Code** | The SAP technical column name is used as column name in the destination e.g. MAKTX. |
| **PrefixedCode** | The SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX
| **CodeAndText** | The SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text)
| **TextAndCode** | The SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)_MAKTX

#### Date Conversion

When **Convert dates** is active, the following date conversions apply:

| Option | Description |
|--------|-------------|
| **Year 0** | Converts the SAP date 00000000 to the entered value. |
| **Year 9999** | Converts the SAP date 9999XXXX to the entered value. |
| **Invalid values** | If an SAP date cannot be converted to a valid date format, the invalid date is converted to the entered value. NULL is supported as a value. |

{% endif %}

### Columns Order Tab

The "Columns Order" feature enables users to rearrange the order of result columns when running an extraction.
To rearrange the result order, assign indexes to the available result columns. 
Index 0 defines the first column in the result set, index 1 the second columns, etc.

![General-Settings-Column-Order](../../assets/images/documentation/components/general-settings/{{ abbr }}/general-settings-column-order.png){:class="img-responsive"}

| Option | Description |
|--------|-------------|
| **Enabled** | When this option is active, the defined column order is applied when running the extraction. |
| **Swap** | Swaps the index of 2 columns. All other columns keep their indexes.|
| **Insert** | Inserts the selected column into the selected index. All other indexes are recalculated. |
| **Reset default** | Restores the original column order. |

