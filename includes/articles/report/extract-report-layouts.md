
The following article shows how to extract ABAP reports that use an SAP ABAP List Viewer (ALV) layout.

### About Layouts

Layouts in ABAP reports define and control the visual presentation of report data.
They determine how data is displayed to the user, including column visibility, column order, column width, aggregation (totals, subtotals), sorting, filtering and other formatting options. 
Layouts do not affect the actual data.

### Option 1 - Use Layouts in Variants

Some ALV-based reports have a **Layout** field in the selection screen :number-1:. This field can be used to select a layout before running the report.
If the selection screen includes a **Layout** field, that field's value can be saved as part of a [Report Variant](../documentation/report/variants-and-selections.md) :number-2:.
This way, every time the report is executed using that variant, it will automatically use this layout.

Make sure to select the variant in your {{ productName }} [Report extraction](../documentation/report/variants-and-selections.md/#choose-a-variant).

![report-layouts-variant](../assets/images/articles/report/report-layouts/report-layouts-variant.png){ width="80%" }

### Option 2 - User-Specific Default Layouts

A user-specific default layout is a layout that is saved together with your SAP user ID.
This way, SAP automatically applies the layout each time your SAP user runs the report, if no layout is explicitly chosen.

To use a user-specific default layout in {{ productName }}, create the layout for the SAP user that is used in your [SAP Connection](../documentation/sap-connection/index.md).

![report-layouts-user-specific](../assets/images/articles/report/report-layouts/report-layouts-user-specific.png)

For more information on how to create a user-specific layout in ALV, see [SAP Help: Working with the SAP List Viewer (ALV) - Saving Layouts](https://help.sap.com/docs/ABAP_PLATFORM_NEW/b1c834a22d05483b8a75710743b5ff26/4d620265d79751b0e10000000a42189c.html?utm_source=chatgpt.com).

----

#### Related Links
- [Report {{ Component }}](../documentation/report/index.md)
- [SAP Help: Working with the SAP List Viewer (ALV)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/b1c834a22d05483b8a75710743b5ff26/4d5edc88767161bee10000000a42189b.html?utm_source=chatgpt.com)