
This page shows the which output formats are supported by the {{ hierarchy }} {{ component }}.
The output format can be selected in the [{{ settings }}](settings.md) of the {{ hierarchy }} {{ component }}.

### ParentChild Format

The default output of the {{ hierarchy }} {{ component }} contains the following columns:

| Column | Description |
|--------|-------------|
| **NodeID** | Unique node key. |
| **ParentNodeID** | Key for parent node. |
| **FirstChildNodeID** | Key for first child node. |
| **NextNodeID** | Key for next node in the same hierarchical level. |
| **InfoObjectName** | Name of InfoObject behind the corresponding node. |
| **NodeName** | The node’s (technical) name. |
| **NodeText** | The description text of the node. This column is only created when [**Fetch description texts**](settings.md/#fetch-description-texts) is active. |
| **DateFrom** | Date from which the node is valid. |
| **DateTo** | Date the node is valid to. |
| **Link** | If the value in *Link* is greater than 0, the node is a link node. The ID of the original node that was linked from is displayed.  |
| **Row** | Number of the row. The row number can be used as an ID or sort criterion when processing the extracted data.  |

Example:

=== "Hierarchy PM_COUNTRY in ParentChild Output Format"
	![Hierarchy-Table-Output](../../assets/images/documentation/components/hierarchy/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

=== "Hierarchy PM_COUNTRY Format in SAP"
	![Hierarchy-Table-SAP](../../assets/images/documentation/components/hierarchy/Hierarchy-Table-Output.png){:class="img-responsive"}


### Natural Format

| Column | Description |
|--------|-------------|
| **LevelN** | Technical name of the node of the nth level. The number of levels is set in [**Level Count**](settings.md/#level-count). The level count starts at level 0. | 
| **LevelTextN** | The description text of the nth level's node. This column is only created when [**Description texts for levels**](settings.md/#description-texts-for-levels) is active. |
| **InfoObjectName** | Name of InfoObject behind the node of the highest level. |
| **NodeName** | Technical name of the node of the highest level. |
| **NodeText** |  The description text of the node of the highest level. This column is only created when [**Fetch description texts**](settings.md/#fetch-description-texts) is active. |
| **DateFrom** |  Date from which the node is valid |
| **DateTo** | Date the node is valid to. |
| **Link** |  If the value in *Link* is greater than 0, the node is a link node. The ID of the original node that was linked from is displayed.  |
| **Row** | Number of the row. The row number can be used as an ID or sort criterion when processing the extracted data. |

Example:

=== "Hierarchy PM_COUNTRY in Natural Output Format"
	![Hierarchy-Table-Output](../../assets/images/documentation/components/hierarchy/Hierarchy-description-texts.png){:class="img-responsive"}

=== "Hierarchy PM_COUNTRY Format in SAP"
	![Hierarchy-Table-SAP](../../assets/images/documentation/components/hierarchy/Hierarchy-Table-Output.png){:class="img-responsive"}



### ParentChildWithNodeNames Format

| Column | Description |
|--------|-------------|
| **NodeID** | Unique node key. |
| **NodeName** | The node’s (technical) name. |
| **NodeText** |  The description text of the node. This column is only created when [**Fetch description texts**](settings.md/#fetch-description-texts) is active. |
| **ParentNodeID** | Key for parent node. |
| **ParentNodeName** | Name of the parent node. |
| **InfoObjectName** | Name of InfoObject behind the corresponding node. |
| **DateFrom** |  Date from which the node is valid. |
| **DateTo** | Date the node is valid to. |
| **Link** |  If the value in *Link* is greater than 0, the node is a link node. The ID of the original node that was linked from is displayed.  |
| **Row** | Number of the row. The row number can be used as an ID or sort criterion when processing the extracted data. |

Example:

=== "Hierarchy PM_COUNTRY in ParentChildWithNodeNames Output Format"
	![Hierarchy-Table-Output](../../assets/images/documentation/components/hierarchy/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

=== "Hierarchy PM_COUNTRY Format in SAP"
	![Hierarchy-Table-SAP](../../assets/images/documentation/components/hierarchy/Hierarchy-Table-Output.png){:class="img-responsive" }


