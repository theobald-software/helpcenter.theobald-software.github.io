---
title: Run Extractions
description: How to run extractions
---

{{ productName }} Designer offers a test run option for extractions to make sure that the extraction runs properly. 
You can define runtime parameters and other options to run an extraction directly in your web browser.

## Run Extractions in the Designer

1. Select an extraction from the [list of extractions](site:documentation/designer/#list-of-extractions) and click **[:designer-run:Run]** :number-1:. The window "Run Extraction" opens.<br>
![Extraction-Run](site:assets/images/{{ abbr }}/documentation/automation/Run-Table-Extraction-Plants.png){:class="img-responsive"}
2. If needed, define [extraction parameters](#extraction-parameters):
	- Select the checkbox of the parameter you want to override :number-2:. The parameter is added to the extraction URL. :number-3:
	- Enter a value for the parameter.
3. Click **[Run in Browser]** to display the extraction results in your browser. <br>
![Table-Extraction-Browser-Result](site:assets/images/{{ abbr }}/documentation/automation/run_output_browser.png){:class="img-responsive"}

Extractions are triggered by an HTTP request and executed on the {{ productName }} server.

## Extraction Parameters

{% include "execute-and-automate/extraction-parameters.md" %}