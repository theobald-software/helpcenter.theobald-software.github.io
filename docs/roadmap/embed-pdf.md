---
title: Embed PDFs
description: Showcase dhow to embed .pfd files
---

!!! tip "Recommendation"
	It might be easier to just export the roadmap as a .png image and host it where the HelpCenter has access via a link.

## MkDocs-pdf Plugin

The plugin loads externally hosted .pdf files as well as local .pdf files. 
Locally hosted files require the involvement of technical writers when updating the roadmap.

=== "Without toolbar"

	``` markdown
	![test](<Internal-Roadmap.pdf#toolbar=0&navpanes=0&scrollbar=0>){ type=application/pdf style="height:62vh;width:100%" }
	```

	![test](<Internal-Roadmap.pdf#toolbar=0&navpanes=0&scrollbar=0>){ type=application/pdf style="height:62vh;width:100%" }

=== "With toolbar"

	``` markdown
	![test](<Internal-Roadmap.pdf>){ type=application/pdf style="height:68vh;width:100%" }
	```

	![test2](<Internal-Roadmap.pdf>){ type=application/pdf style="height:68vh;width:100%" }

=== "DIN A4 Portrait"

	``` markdown
	![test](<Internal-Roadmap.pdf#toolbar=0&navpanes=0&scrollbar=0>){ type=application/pdf style="height:100vh;width:100%" }
	```

	![test](<Internal-Roadmap.pdf#toolbar=0&navpanes=0&scrollbar=0>){ type=application/pdf style="height:100vh;width:100%" }
	
	
## iFrames

Does not work if .pdf files are obfuscated.

=== "Without toolbar"

	```html
	<iframe src="https://helpcenter.theobald-software.com/roadmap/Internal-Roadmap.pdf#toolbar=0&navpanes=0&scrollbar=0" style="width:100%; height:62vh;" frameborder="0"></iframe>
	```
	<!--
	<iframe src="https://helpcenter.theobald-software.com/roadmap/Internal-Roadmap.pdf#toolbar=0&navpanes=0&scrollbar=0" style="width:100%; height:62vh;" frameborder="0" ></iframe>
	-->

=== "With toolbar"

	```html
	<iframe src="https://helpcenter.theobald-software.com/roadmap/Internal-Roadmap.pdf" style="width:100%; height:68vh;" frameborder="0" ></iframe>
	```
	<!--
	<iframe src="https://helpcenter.theobald-software.com/roadmap/Internal-Roadmap.pdf" style="width:100%; height:68vh;" frameborder="0" ></iframe>
	-->
