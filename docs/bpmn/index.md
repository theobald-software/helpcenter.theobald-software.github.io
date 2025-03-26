---
title: BPMN Diagrams
description: Test environment for new BPMN diagrams
hide:
 - navigation
---

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
	![Delta](../sample.bpmn){height="400px"}
	```

### Custom Styling

Add the following to the `extra.css` file od each product:

```css
.mk-bpmn-container {
    border: 2px solid grey;
    display: block; /* Ensures the border wraps correctly */
	background-color: white;
}
```

### Sample

![this-is-a-sample](./sample.bpmn){height="400px"}
