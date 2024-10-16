---
title: Embed PDFs
description: Showcase dhow to embed .pfd files
---

!!! tip "Recommendation"
	It might be easier to just export the roadmap as a .png image...

## MkDocs-pdf Plugin

``` markdown
![test](<test.pdf>){ type=application/pdf style="height:100vh;width:100%" }
```

![test](<test.pdf>){ type=application/pdf style="height:100vh;width:100%" }

## iFrames

```html
<iframe src="https://helpcenter.theobald-software.com/roadmap/test.pdf" style="width:100%; height:100vh;" frameborder="0"&toolbar=0&navpanes=0&scrollbar=0></iframe>
```

<iframe src="https://helpcenter.theobald-software.com/roadmap/test.pdf" style="width:100%; height:100vh;" frameborder="0"&toolbar=0&navpanes=0&scrollbar=0></iframe>
