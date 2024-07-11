

### Extraction Settings

![Extraction-Settings](../../assets/images/documentation/components/hierarchy/extraction-settings.png)

<!--- --8<-- [start:representation]-->

#### Representation

- *ParentChild*: The Hierarchy is represented in the SAP parent-child format, see [Output Formats: ParentChild](../hierarchy/output-format.md/#parentchild-format). Example:<br>
![Hierarchies-Parent-Child](../../assets/images/documentation/components/hierarchy/Hierarchy-Table-Output-Result.png){:class="img-responsive"}
- *Natural*: The SAP parent-child Hierarchy is transformed into a regular hierarchy, see [Output Formats: Natural](../hierarchy/output-format.md/#natural-format). Example:<br>
![Hierarchy-Parent-Child-Natural](../../assets/images/documentation/components/hierarchy/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}
- *ParentChildWithNodeNames*: The Hierarchy is represented in a reduced SAP parent-child format that only includes single nodes and their parent, see [Output Formats: ParentChildWithNodeNames](site:documentation/hierarchy/output-format/#parentchildwithnodenames-format). Example:<br>
![Hierarchy-Parent-Child-With-Node-Names](../../assets/images/documentation/components/hierarchy/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

<!--- --8<-- [end:representation]-->

#### Remove Leading Zeros

If this option is active, all leading zeros in the column *NodeName* of the leaves are removed.
*NodeName* can then be used in a JOIN-condition with the corresponding Dimension-Key of a BW Cube extraction.<br>
The conversion works for compound InfoObjects, too. 
Example: 0CO_AREA (1000) and 0COSTCENTER (0000003100) become 1000/3100.

#### Fetch description texts

Sets the node text in the column *NodeText*. <br>
All texts of InfoObjects that have language dependent texts will be retrieved in the language that the SAP source connection uses. 
If no texts exist, the result does not contain any texts for entries of that InfoObject.

### Natural Settings

<!--- --8<-- [start:natural]-->

!!! note
	The subsection *Natural Settings* is only active, when the **Representation** is set to *Natural*.

#### Level Count
Defines the maximum number of levels. The following example shows a Hierarchy with four levels. <br>
![Hierarchy-Parent-Child-Natural](../../assets/images/documentation/components/hierarchy/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

#### Fill empty levels
Copies the bottom element of the Hierarchy until the last level.
The following example depicts the previously shown Hierarchy with the activated *Repeat Leaves* option.<br>
![Hierarchy-Parent-Child-Repeat](../../assets/images/documentation/components/hierarchy/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

#### Description texts for levels
Sets the output field *LevelTextN* for each field *LevelN* containing the text based on the system language settings.<br>
![Hierarchy-Description-Texts](../../assets/images/documentation/components/hierarchy/Hierarchy-description-texts.png){:class="img-responsive"}

####  Leaves only
Returns only the leaves as data records.<br>
![Hierarchy-Leaves-Only](../../assets/images/documentation/components/hierarchy/Hierarchy-leaves-only.png){:class="img-responsive"}

<!--- --8<-- [end:natural]-->

### Debug

#### Enable Debug Logging
Adds more detailed logs for the {{ hierarchy }} {{ component }} to the extraction logs. 
Activate **Enable Debug Logging** only when necessary, e.g., upon request of the support team.
