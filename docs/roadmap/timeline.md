---
title: Timeline
description: Showcase different designs for Timeline Roadmaps
---

[Neoteroi Timeline Plugin](https://www.neoteroi.dev/mkdocs-plugins/timeline/)

	
## Format

Roadmaps can be defined in [yaml or json format](#format)

=== "Rendered Timeline"

	[timeline(docs/roadmap/timeline.json)]

=== "YAML Input Format"

	```yaml
	- content: First implementation.
	  icon: ':material-bug:'
	  sub_title: 2022-Q1
	  title: Launch
	- content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	  icon: ':fontawesome-solid-gem:'
	  sub_title: 2022-Q2
	  title: New features
	- content: Lorem ipsum dolor sit amet.
	  icon: ':material-gauge-empty:'
	  sub_title: 2022-Q3
	  title: More features!
	- content: Lorem ipsum dolor sit amet.
	  icon: ':material-bug:'
	  sub_title: 2022-Q4
	  title: Bugs!
	```

=== "JSON Input Format"

	```json
	[
		{
			"title": "Launch",
			"content": "First implementation.",
			"icon": ":fontawesome-rocket:",
			"sub_title": "2022-Q1"
		},
		{
			"title": "One",
			"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"icon": ":octicons-sun-16:",
			"key": "cyan",
			"sub_title": "2022-Q2"
		},
		{
			"title": "Two",
			"content": "Lorem ipsum dolor sit amet.",
			"icon": ":material-github:",
			"sub_title": "2022-Q3"
		},
		{
			"title": "Three",
			"content": "Lorem ipsum dolor sit amet.",
			"key": "pink",
			"sub_title": "2022-Q4"
		}
	]
	```



## Integration

=== "File Source"

	```
	[timeline(./docs/roadmap/roadmap2024.json)]
	```

=== "URL Source"

	```
	[timeline(https://kb.theobald-software.com/files/roadmap2024.json)]

	```
	
=== "YAML Format"

	```yaml
	::timeline::
	- content: First implementation.
	  icon: ':material-rocket-launch-outline:'
	  sub_title: 2022-Q1
	  title: Launch
	- content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	  icon: ':fontawesome-solid-gem:'
	  sub_title: 2022-Q2
	  title: New features
	- content: Lorem ipsum dolor sit amet.
	  icon: ':material-gauge-empty:'
	  sub_title: 2022-Q3
	  title: More features!
	- content: Lorem ipsum dolor sit amet.
	  icon: ':material-bug:'
	  sub_title: 2022-Q4
	  title: Bugs!
	::timeline::
	```

=== "JSON Format"

	```json
	::timeline::
	
	[
		{
			"title": "Launch",
			"content": "First implementation.",
			"icon": ":fontawesome-rocket:",
			"sub_title": "2022-Q1"
		},
		{
			"title": "One",
			"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"icon": ":octicons-sun-16:",
			"key": "cyan",
			"sub_title": "2022-Q2"
		},
		{
			"title": "Two",
			"content": "Lorem ipsum dolor sit amet.",
			"icon": ":material-github:",
			"sub_title": "2022-Q3"
		},
		{
			"title": "Three",
			"content": "Lorem ipsum dolor sit amet.",
			"key": "pink",
			"sub_title": "2022-Q4"
		}
	]
	
	::timeline::
	```

Options:

| Name	| Description	| 
|-------|------------------|
| right	| Right alignment	| 
| center	| Center alignment	| 
| center alternate	| Alternating center alignment	| 
| center headings | Creates h3 headers in the table of content |

Also supports custom icons, see [Neoteroi Timeline Icons](https://www.neoteroi.dev/mkdocs-plugins/timeline/#icons-support) and custom styling, see [Neoteroi Timeline Custom Styling](https://www.neoteroi.dev/mkdocs-plugins/timeline/#styling).

## Designs

=== "Right alignment"

	[timeline right(docs/roadmap/timeline.json)]
	
=== "Center alignment"

	[timeline center(docs/roadmap/timeline.json)]
	
=== "Center alternate alignment"

	[timeline center alternate(docs/roadmap/timeline.json)]