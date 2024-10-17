---
title: Gantt Diagram
description: Showcase different designs for Gantt Diagram Roadmaps
---


[Neoteroi Gantt Plugin](https://www.neoteroi.dev/mkdocs-plugins/gantt/)

## Format

- Roadmaps require either start and end dates or start date and duration (days / weeks) for every activity
- Roadmaps can be defined in [yaml or json format](#format)

=== "Rendered Gantt Diagram"

	[gantt(https://kb.theobald-software.com/files/gantt-1.yaml)]

=== "YAML Input Format"

	```yaml
	- title: Definition Phase
	  activities:
		- title: Creative Brief
		  start: 2022-03-03
		  lasts: 1 day
		- title: Graphic Design Research
		  start: 2022-03-02
		  lasts: 2 weeks
		- title: Brainstorming / Mood Boarding
		  start: 2022-03-11
		  lasts: 2 weeks

	- title: Creation Phase
	  activities:
		- title: Sketching
		  start: 2022-03-21
		  lasts: 2 weeks
		- title: Design Building
		  start: 2022-04-02
		  lasts: 4 weeks
		- title: Refining
		  start: 2022-05-01
		  end: 2022-05-15

	- title: Feedback Phase
	  activities:
		- title: Presenting
		  start: 2022-05-01
		  lasts: 3 days
		- title: Revisions
		  start: 2022-05-02
		  end: 2022-05-31

	- title: Delivery Phase
	  activities:
		- title: Final delivery
		  start: 2022-06-05
		  end: 2022-06-06
	```

=== "JSON Input Format"

	```json
	[
		{
			"title": "Definition Phase",
			"activities": [
				{
					"title": "Creative Brief",
					"start": "2022-03-03",
					"lasts": "1 day"
				},
				{
					"title": "Graphic Design Research",
					"start": "2022-03-02",
					"lasts": "2 weeks"
				},
				{
					"title": "Brainstorming / Mood Boarding",
					"start": "2022-03-11",
					"lasts": "2 weeks"
				}
			]
		},
		{
			"title": "Creation Phase",
			"activities": [
				{
					"title": "Sketching",
					"start": "2022-03-21",
					"lasts": "2 weeks"
				},
				{
					"title": "Design Building",
					"start": "2022-04-02",
					"lasts": "4 weeks"
				},
				{
					"title": "Refining",
					"start": "2022-05-01",
					"lasts": "2 weeks"
				}
			]
		},
		{
			"title": "Feedback Phase",
			"activities": [
				{
					"title": "Presenting",
					"start": "2022-05-01",
					"lasts": "3 days"
				},
				{
					"title": "Revisions",
					"start": "2022-05-02",
					"end": "2022-05-31"
				}
			]
		},
		{
			"title": "Delivery Phase",
			"activities": [
				{
					"title": "Final delivery",
					"start": "2022-06-05",
					"end": "2022-06-06"
				}
			]
		}
	]
	```



## Integration

=== "File Source"

	```
	[gantt(./docs/roadmap/roadmap2024.json)]
	```

=== "URL Source"

	```
	[gantt(https://kb.theobald-software.com/files/roadmap2024.json)]

	```
	
=== "YAML Format"

	```yaml
	::gantt::
	- title: Definition Phase
	  activities:
		- title: Creative Brief
		  start: 2022-03-03
		  lasts: 1 day
		- title: Graphic Design Research
		  start: 2022-03-02
		  lasts: 2 weeks
		- title: Brainstorming / Mood Boarding
		  start: 2022-03-11
		  lasts: 2 weeks

	- title: Creation Phase
	  activities:
		- title: Sketching
		  start: 2022-03-21
		  lasts: 2 weeks
		- title: Design Building
		  start: 2022-04-02
		  lasts: 4 weeks
		- title: Refining
		  start: 2022-05-01
		  end: 2022-05-15

	- title: Feedback Phase
	  activities:
		- title: Presenting
		  start: 2022-05-01
		  lasts: 3 days
		- title: Revisions
		  start: 2022-05-02
		  end: 2022-05-31

	- title: Delivery Phase
	  activities:
		- title: Final delivery
		  start: 2022-06-05
		  end: 2022-06-06
	::gantt::
	```

=== "JSON Format"

	```json
	::gantt::
	[
		{
			"title": "Definition Phase",
			"activities": [
				{
					"title": "Creative Brief",
					"start": "2022-03-03",
					"lasts": "1 day"
				},
				{
					"title": "Graphic Design Research",
					"start": "2022-03-02",
					"lasts": "2 weeks"
				},
				{
					"title": "Brainstorming / Mood Boarding",
					"start": "2022-03-11",
					"lasts": "2 weeks"
				}
			]
		},
		{
			"title": "Creation Phase",
			"activities": [
				{
					"title": "Sketching",
					"start": "2022-03-21",
					"lasts": "2 weeks"
				},
				{
					"title": "Design Building",
					"start": "2022-04-02",
					"lasts": "4 weeks"
				},
				{
					"title": "Refining",
					"start": "2022-05-01",
					"lasts": "2 weeks"
				}
			]
		},
		{
			"title": "Feedback Phase",
			"activities": [
				{
					"title": "Presenting",
					"start": "2022-05-01",
					"lasts": "3 days"
				},
				{
					"title": "Revisions",
					"start": "2022-05-02",
					"end": "2022-05-31"
				}
			]
		},
		{
			"title": "Delivery Phase",
			"activities": [
				{
					"title": "Final delivery",
					"start": "2022-06-05",
					"end": "2022-06-06"
				}
			]
		}
	]
	::gantt::
	```

Options:

| Name	| Description	| Default| 
|-------|------------------|---------|
| id	| Configures an id property on the root HTML element	| "" | 
| month-width	| Controls the size of the scale - represents the pixels width of a month with 30 days	| 150| 
| month-format	| Controls date formatting for months	| "%B %Y"| 
| no-groups	| Disables groups (flag)	| False| 
| no-years	| Disables years (flag)	| False| 
| no-weeks	| Disables weeks (flag)	| False| 
| no-quarters	| Disables quarters (flag)	| False| 
| no-days	| Disables days (flag)	| False| 
| whole-years	| Displays whole years from January to December (flag)	| False| 
| pastello	| Applies a CSS class to use a color palette with milder saturation	| False| 
| vlines-pace	| Controls how separator vertical lines are generated (each week or each month)	| "monthly" or "weekly"| 

Example:
```
[gantt month-width=800(./docs/gantt/gantt-1.yaml)]
```


## Structure

- Publish roadmap for the full year or only for 2 quarters?
- How to group activities, e.g. status (prototype, feedback, qa, release), modules (components, destinations, sap communication) or no groups?

=== "Example 1"

	[gantt(./docs/roadmap/roadmap2024.json)]

=== "Example 2"

	[gantt(./docs/roadmap/roadmap2024v2.json)]
	
	
## Designs

The Gantt plugin offers multiple options to control the design of the diagramm. 

=== "Default"

	[gantt(./docs/roadmap/roadmap2024.json)]

=== "No weeks"

	[gantt no-weeks(./docs/roadmap/roadmap2024.json)]

=== "No Weeks + No Groups + Whole Years"

	[gantt no-weeks no-groups whole-years(./docs/roadmap/roadmap2024.json)]
