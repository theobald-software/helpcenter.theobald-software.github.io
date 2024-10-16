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
<iframe src="https://helpcenter.theobald-software.com/roadmap/test.pdf" style="width:718px; height:700px;" frameborder="0"></iframe>
```

<iframe src="https://helpcenter.theobald-software.com/roadmap/test.pdf" style="width:718px; height:700px;" frameborder="0"></iframe>
