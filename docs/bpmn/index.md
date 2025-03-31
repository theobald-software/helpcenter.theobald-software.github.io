---
title: BPMN Diagrams
description: Test environment for new BPMN diagrams
hide:
 - navigation
---

Theobald Software uses Camunda or Draw.io to create diagrams.

- Camunda: X:\Support+Pre-Sales\Process_modeler
- Draw.io: [https://app.diagrams.net/](https://app.diagrams.net/)

Draw.io files and Camunda files are not compatible.

!!! note
	The best option for the documentationw ould be to find a way to render .xml diagrams as both Camunda and Draw.io have an export option for .xml.
	
	Alternatives: .svg and .png
	- Exporting diagrams with a large width as an .svg file is not recommended, because there is no build-in option to zoom or scroll for .svg images.
	- Exporting BPMN diagrams as an .svg file is generally not recommended, because there is no support for dark mode.
	- To enable a simple zoom option for .png images, use the following markdown syntax:

		```markdown
		[![Delta-Process]][Delta-Process]

		  [Delta-Process]: ../assets/images/articles/table/table-delta-process.png
		  
		```

## Camunda 

### Plugin for MkDocs

- How to install: 
	```
	pip install mkdocs-bpmn
	```
- How to import:
	```yaml
	plugins:
	  - bpmn
	```
- How to use:
	```markdown
	![sample](../sample.bpmn){height="400px"}
	```

### Custom Styling

Add the following to the `extra.css` file of each product:

```css
.mk-bpmn-container {
    border: 2px solid grey;
    display: block; /* Ensures the border wraps correctly */
	background-color: white;
}
```

### Sample .bpmn File

```markdown
![this-is-a-sample](./sample.bpmn){height="400px"}
```
![this-is-a-sample](./sample.bpmn){height="400px"}


## DrawIO

Some Diagrams in dev are created using [draw.io](https://app.diagrams.net/). 
Draw.io diagrams can be exported as .svg files that support dark mode. Alternatively export as .png.


### Sample .svg File

```markdown
![this-is-a-sample](./XtractCore.drawio.svg){ width="100%" }
```

![this-is-a-sample](./XtractCore.drawio.svg){ width="100%" }
