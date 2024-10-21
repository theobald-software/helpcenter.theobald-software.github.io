
### Pass Values at Runtime

Follow the steps below to replace {{ variables }} with actual values at runtime:

1. [Create and assign runtime parameters](#create-runtime-parameters) in the {{ page.meta.componentName }} {{ component }}.
2. Close the {{ page.meta.componentName }} {{ component }}.
3. Define the input values for the {{ variables }} :number-1:, e.g., single values or lists.<br>
![input](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/xfa/input.png){:class="img-responsive" }
4. Make sure that the data type of the input values match the data type of the corresponding {{ variable }}.
5. Make sure that the name of the input matches the name of the corresponding {{ variable }}. The values of the input is automatically assigned to a {{ variable }} by the same name.
6. Connect the input to the {{ page.meta.componentName }} {{ component }} using the input anchor "P" :number-2:.{% if page.meta.componentFolder == "bapi" %}<br>To pass input tables, use the input anchor "I", see [Mapping Input Tables](input-and-output.md#map-input-tables).{% endif %}
7. Run the {{ extraction }} to test if the {{ variables }} are assigned correctly.

!!! note 
	Parameterization via input anchors is supported as of Xtract for Alteryx version 1.19. 
	When using an older version of Xtract for Alteryx, parameterize Xtract components using batch macros, see [Parameterizing via Batch Macros](../../knowledge-base/parameterization-via-batch-macros.md).

