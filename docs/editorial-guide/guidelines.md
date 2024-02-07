---
title: Editorial Guidelines
---

General:

- Navigation (.pages files): [How to add new content](files-and-folders.md/#how-to-add-new-content)
- LinkChecker: [How to use LinkChecker](linkchecker.md/#how-to-use-linkchecker) 
- .pdf export: only when requested by customers

Search control:

=== "Exclude page"

	``` yaml
	---
	search:
	  exclude: true
	---
	```
	
=== "Exclude section"

	```
	### I'm a Headline { data-search-exclude }
	```

=== "Boost pages"

	``` yaml
	---
	search:
	  boost: 2 
	---
	```

=== "Lower pages"

	``` yaml
	---
	search:
	  boost: 0.5
	---
	```
	
Articles:

- Introduction sentence: "The following article shows / describes / contains..."
- Add authors to the front matter of an article:

	``` yaml
	--- 
	title: I'm an article
	author: Valerie Schipka, Fabian Steffan
	---
	```
	
