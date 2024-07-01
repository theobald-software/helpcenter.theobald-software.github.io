
To use SSIS variables in input fields of the {{ component }}, place an @ symbol before the variable name. 

1. Choose an input field that supports SSIS variables.
2. Instead of entering a fixed a value, enter a variable name using the @-notation, e.g., *@vDate*.
3. Create a new SSIS variable with the same name, but without the @ symbol, e.g., *vDate*.
4. Make sure to select the correct data type.

You can now use the SSIS variable to set dynamic input values for the input field. 