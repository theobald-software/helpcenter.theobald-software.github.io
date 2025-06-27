This articles shows how to link BEx Query and BW Hierarchy extractions in the Tableau destination. By linking the extractions, you can blend data from both data sources into a single sheet.

### Setup in Xtract Universal

1. Create a BEx Query extraction, see [Define a BW Cube Extraction](../../documentation/bwcube/#define-the-bwcube-extraction-type).

1. Open the extraction settings of the BEx Query and activate *Formatted Values*.

1. Open the Destination Settings of the extraction and set *Text* as the **Column Name Style** for Tableau. Note that using *Text* as the column name style can result in column names that are not unique.

1. Create a BW Hierarchy extraction, see [Define a Hierarchy Extraction](../../documentation/hierarchy/#define-the-bw-hierarchy-extraction-type).

1. Open the Extraction Settings of the Hierarchy and set **Representation** to *Natural*:

### Create a Relationship in Tableau

1. Load both extractions into Tableau .
1. Create a relationship between the data sources by dragging the sheets into the canvas . The window "Edit Relationships" opens.
1. Select one pair of fields that is to be matched. Add multiple field pairs to create a compound relationship. Matched pairs must have the same data type.
1. Close "Edit Relationships" and switch to the Worksheet view .

The data sources are now linked and data from both data sources can be blended in a single sheet.

### "Not Assigned" Nodes

In BW Hierarchies, the values that are not assigned to a hierarchy node are gathered under the "Not Assigned" node.

In Tableau the "Not Assigend" node is labeled "Null" and is only displayed if the BEx Query extraction acts as the primary data source. If the BW Hierarchy extraction is acts as primary data source, the "Null" node is not displayed.

______________________________________________________________________

#### Related Links

- [How to Create Relationships in Tableau](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm#create-a-relationship)
- [Tutorial: Relationships in Tableau](https://www.tableau.com/learn/tutorials/on-demand/relationships)
