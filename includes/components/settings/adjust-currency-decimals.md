
The default number of decimal places for a currency in the SAP database is 2 decimals.
Currencies that do not have decimals are also stored in this format, e.g. JPY, VND, KRW, etc.

Example:

| Currency  | Actual Amount  | Amount stored in SAP database |
| ------------- |:-------------:| -----:|
| JPY | 100	|1.00|
| KRW | 10000	|100.00|

When extracting currencies with no decimals, the amount stored in SAP is returned e.g., 100 JPY are extracted as 1.00.
To correct the decimal placement of the extracted data, activate **Adjust Currency Decimals**.
If **Adjust Currency Decimals** is active, currencies without decimals are multiplied by a factor that balances out the decimals.

**Adjust Currency Decimals** also requires the extraction of the corresponding CURRENCY field that can be used as a reference for the multiplication factor.
Use the **[Load live preview]** function to find the correct currency field/s. 
- If the currency field is part of the table, add it to the output.
- If the currency field is in another table, join the tables. 
- If the reference is not part of a table, **Adjust Currency Decimals** cannot be used.