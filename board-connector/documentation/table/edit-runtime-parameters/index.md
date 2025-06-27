Runtime parameters are are placeholders for values that are passed at runtime, see [Extraction Parameters - Custom](../../parameters/extraction-parameters/#custom). They can be created in context of using the [WHERE Clause](../where-clause/).

## Create Runtime Parameters

There are two types of runtime parameters:

- [Scalar parameters](#scalar-parameters) represent a single value.
- [List parameters](#list-parameters) represent multiple values.

### Scalar Parameters

Follow the steps below to create a scalar runtime parameter:

1. Open the *Edit Runtime Parameters* tab.

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

## Use Runtime Parameters in the WHERE Clause Editor

1. Navigate to the WHERE clause tab in the main window of the extraction and open the WHERE clause editor.
1. Add a new WHERE clause criteria that uses the **[Default with Parameter]** template.
1. Click the *Parameter* component. A drop-down list that displays all available parameters opens. Select a parameter from the list.
1. To test the WHERE clause, click **[Load live preview]**. Provide parameter values when prompted.

## Use Runtime Parameters in the WHERE Clause Text Mode

Add an @ symbol before a value to mark it as a runtime parameter, e.g., enter `@myParameter` instead of a value. Example: `T001W~WERKS BETWEEN @PlantLow AND @PlantHigh`.

Pass values during runtime, see [Extraction Parameters - Custom](../../parameters/extraction-parameters/#custom).
