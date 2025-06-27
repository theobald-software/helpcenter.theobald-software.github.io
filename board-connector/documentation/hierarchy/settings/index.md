This page contains an overview of the extraction settings in the BW Hierarchy extraction type.\
To open the extraction settings, click ****Extraction Settings**** in the main window of the extraction type.

### Extraction Settings

#### Representation

- *ParentChild*: The Hierarchy is represented in the SAP parent-child format, see [Output Formats: ParentChild](../output-format/#parentchild-format). Example:
- *Natural*: The SAP parent-child Hierarchy is transformed into a regular hierarchy, see [Output Formats: Natural](../output-format/#natural-format). Example:
- *ParentChildWithNodeNames*: The Hierarchy is represented in a reduced SAP parent-child format that only includes single nodes and their parent, see [Output Formats: ParentChildWithNodeNames](../output-format/#parentchildwithnodenames-format). Example:

#### Remove Leading Zeros

If this option is active, all leading zeros in the column *NodeName* of the leaves are removed. *NodeName* can then be used in a JOIN-condition with the corresponding Dimension-Key of a BW Cube extraction.\
The conversion works for compound InfoObjects, too. Example: 0CO_AREA (1000) and 0COSTCENTER (0000003100) become 1000/3100.

#### Fetch description texts

Sets the node text in the column *NodeText*.\
All texts of InfoObjects that have language dependent texts will be retrieved in the language that the SAP source connection uses. If no texts exist, the result does not contain any texts for entries of that InfoObject.

### Natural Settings

Note

The subsection *Natural Settings* is only active, when the **Representation** is set to *Natural*.

#### Level Count

Defines the maximum number of levels. The following example shows a Hierarchy with four levels.

#### Fill empty levels

Copies the bottom element of the Hierarchy until the last level. The following example depicts the previously shown Hierarchy with the activated *Repeat Leaves* option.

#### Description texts for levels

Sets the output field *LevelTextN* for each field *LevelN* containing the text based on the system language settings.

#### Leaves only

Returns only the leaves as data records.

### Debug

#### Enable Debug Logging

Adds more detailed logs for the BW Hierarchy extraction type to the extraction logs. Activate **Enable Debug Logging** only when necessary, e.g., upon request of the support team.

______________________________________________________________________

#### Related Links

- [SAP Help: About SAP BW Hierarchies](https://help.sap.com/saphelp_scm41/helpdata/en/90/fd36709c6411d5b4000050dadfb23f/content.htm?no_cache=true)
