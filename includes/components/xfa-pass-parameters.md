
### Pass Values at Runtime

Follow the steps below to replace {{ variables }} with actual values at runtime:

1. [Create and assign runtime parameters](#create-runtime-parameters) in the Xtract {{ component }}.
2. Close the Xtract {{ component }}.
3. Define the input values for the {{ variables }} :number-1:, e.g., single values or lists.<br>
![input](../../assets/images/xfa/documentation/{{ page.meta.componentFolder }}/input.png){:class="img-responsive" }
4. Make sure that the data type of the input values match the data type of the corresponding {{ variable }}.
5. Make sure that the name of the input matches the name of the corresponding runtime parameter, e.g, the values of the input *Parameter0* is automatically assigned to a runtime parameter by the same name.
6. Connect the input to the Xtract {{ component }} using the input anchor "P" :number-2:.{% if page.meta.componentFolder == "bapi" %}<br>To pass input tables, use the input anchor "I", see [Mapping Input Tables](parameters.md#mapping-input-tables).{% endif %}
7. Run the {{ extraction }} to test if the {{ variables }} are assigned correctly.

!!! note 
	Parameterization via input anchors is supported as of Xtract for Alteryx version 1.19. 
	When using an older version of Xtract for Alteryx, parameterize Xtract components using batch macros, see [Parameterizing via Batch Macros](../../knowledge-base/parameterization-via-batch-macros.md).
