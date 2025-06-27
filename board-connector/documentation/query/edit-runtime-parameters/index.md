Runtime parameters are are placeholders for values that are passed at runtime. They can be created in context of [Selections](../variants-and-selections/#edit-selections).

## Create Runtime Parameters

There are two types of runtime parameters:

- [Scalar parameters](#scalar-parameters) represent a single value.
- [List parameters](#list-parameters) represent multiple values.

### Scalar Parameters

Follow the steps below to create a scalar runtime parameter:

1. In the main window of the component click **Edit runtime parameters**. The window “Edit Runtime Parameters” opens.

1. Click **[Add Scalar]** to define scalar parameters to be used as placeholders for actual values. The placeholders need to be populated with actual values at runtime.

   Tip

   Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.

1. Select one of the following data types from the drop-down menu. The data types may correlate to SAP data types.

   | Type | Description | | --- | --- | | *Text* | Can be used for any type of SAP selection field. | | *Number* | Can be used for numeric SAP selection fields. | | *Flag* | Can only be used for SAP selection fields THAT require an ‘X’ (true) or a blank ‘‘ (false) as input value. |

1. Click **[OK]** to confirm.

The runtime parameters are now available in the extraction type.

### List Parameters

Follow the steps below to create a list runtime parameter:

1. In the main window of the component click **Edit runtime parameters**. The window “Edit Runtime Parameters” opens.

1. Click **[Add List]** to define list parameters that contain multiple values separated by commas e.g., 1,10 or “1”, “10”. The placeholders need to be populated with actual values at runtime.

   Tip

   Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.

1. Click **[OK]** to confirm.

The runtime parameters are now available in the extraction type.

## Assign Runtime Parameters

Follow the steps below to assign the runtime parameters to selections.

1. In the main window of the extraction type, click the **[Edit]** button next to the selection you want to parameterize. The window "Edit Selections" opens.
1. Add a filter to the selection, see [Edit Selections](../variants-and-selections/#edit-selections).
1. Click the icon button next to the input field to switch between static values () and runtime parameters (). If no icon button is available, [create a runtime parameter](#create-runtime-parameters).
1. Select a runtime parameter from the dropdown-list.
1. Click **[OK]** to confirm the input.

Pass values during runtime, see [Extraction Parameters - Custom](../../parameters/extraction-parameters/#custom).
