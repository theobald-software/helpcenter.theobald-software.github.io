---
title: Link Checker
---

### About LinkChecker

LinkChecker checks links in web documents or full websites.
This check validates recursively all pages starting with `http://www.example.org/myhomepage/`. 
Additionally, all external links pointing outside of www.example.org will be checked but not recursed into.

For more information, see [LinkChecker Website](https://linkchecker.github.io/linkchecker/install.html).

!!! note
	Run the LinkChecker after every release.
	
### Install LinkChecker

Open the commandline tool and run the following command:

```
pip install LinkChecker
```

### Use LinkChecker

Open the commandline tool and run the following command:

=== "Check all pages"

	```
	linkchecker https://helpcenter.theobald-software.com/
	```

=== "Check specific product"

	```
	linkchecker https://helpcenter.theobald-software.com/erpconnect/
	```