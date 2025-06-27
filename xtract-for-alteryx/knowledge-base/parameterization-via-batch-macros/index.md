There are 2 ways to parameterize Xtract components:

- Pass parameters using the input anchors of Xtract components.\
  Input anchors are available for all Xtract components as of Xtract for Alteryx version 1.19.
- Pass parameters using [control parameters](http://downloads.alteryx.com/betawh_xnext/ControlParam.htm) in [batch macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm).\
  The parameterization via batch macros is supported by Xtract BAPI, Xtract Table, Xtract Cube and Xtract ODP.

The following article shows how to parameterize Xtract components using batch macros.

### Create an Extraction for a Batch Macro

The following example uses the Xtract ODP component to show how to parameterize selection filters.

1. Create a **new** workflow.
1. Add an Xtract ODP component.
1. [Look up](../../documentation/odp/#look-up-data-objects) the DataSource *0MATERIAL_ATTR*.
1. Create 2 new [runtime parameters](../../documentation/odp/edit-runtime-parameters/#create-runtime-parameters) of type *String* and name them *p_MATNR_low* and *p_MATNR_high*.
1. Assign the parameters as [selection filters](../../documentation/odp/selections/#edit-selections) to the column *MATNR*, so that only materials with numbers between *p_MATNR_low* and *p_MATNR_high* are included in the result data.

For more detailed information on how to create an ODP extraction, see [Documentation: Define an ODP Extraction](../../documentation/odp/#define-the-xtract-odp-component).

### Create a Batch Macro with Control Parameters

1. Create a new workflow that contains an extraction as described in [Create an Extraction for a Batch Macro](#create-an-extraction-for-a-batch-macro).
1. To use the workflow as a batch macro, navigate to the *Workflow Configuration* and select **Batch Macro** as the Workflow Type from drop down list.
1. Save the file. Once the workflow is saved as a batch macro each tool in the workflow gets a lightning bolt anchor. Only *Interface* Tools can connect to these anchors.
1. Add a **Control Parameter** tool from the *Interface* toolbox and label the parameter e.g., name one *cp_MATNR_low* and another *cp_MATNR_high* to differentiate between the two .
1. Connect the **Control Parameter** tools to the Xtract component. This creates the *Action* tool **Update Value** .
1. To assign the control parameters to an Xtract parameter, select an **Update Value** tool and mark the Xtract parameter in the tree menu *Value or Attribute to Update* . For this example, assign the control parameter *cp_MAKT_low* to the Xtract ODP runtime parameter *p_MATNR_low* and *cp_MAKT_high* to *p_MATNR_high*.
1. Drag and drop the **Macro Output** tool from the *Interface* toolbox onto the canvas to create an output for the batch macro .
1. Save the macro.

Note

To use formulas with parameters, select *Update Value with Formula* from the drop-down list **Select an action type** in the *Action Configuration* menu. Enter a formula directly into the **Formula** field at the bottom of the menu or click **[...]** to open a formula editor.

#### Parameterize Components without Runtime Parameters

Some Xtract components don't use runtime parameters, but have offer other settings in the *Action Configuration* menu. Example: Parameterizing a WHERE-clause of an Xtract Table component.

- To parameterize a WHERE-clause, mark the WHERE-clause in the tree menu *Value or Attribute to Update*.
- To parameterize only parts of a WHERE-clause, activate **Replace a specific string** and specify what part of the WHERE-clause is to be replaced e.g., in the WHERE-clause `KNA1~LAND1 = 'param'` "param" can be used as a placeholder for the actual input.

### Integrate a Batch Macro into a Workflow

The depicted example uses the **Text Input** tool to define the parameters for the extraction.

1. Add a **Text Input** tool to define the input for the batch macro. Enter valid parameter values and add a new column for every control parameter . Example:\
   *p_MATNR_low*: `000000000000000023`\
   *p_MATNR_high*: `000000000000000100`
1. To import the batch macro right-click the canvas and navigate to **Insert > Macro**. Add the macro that contains the Xtract component.
1. Connect the **Text Input** to the batch macro .
1. Select the batch macro and use the drop-down list **Choose field** to assign the values from the **Text Input** columns to the control parameters of the batch macro.
1. Add the **Browse** tool to check the results of the batch macro and run the workflow.

______________________________________________________________________

#### Related Links

- [Alteryx Documentation](https://help.alteryx.com/current/en/designer.html)
- [Alteryx Documentation: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm)
