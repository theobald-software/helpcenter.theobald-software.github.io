
Use the following internal SAP representation for input:
- Date: The date 01.01.1999 has the internal representation 19990101 (YYYYMMDD).
- Year period: The year period 001.1999 has the internal representation 1999001 (YYYYPPP).
- Numbers: Numbers must contain the leading zeros, e.g., customer number 1000 has the internal representation 0000001000.

!!! warning
	**Values accept only the internal SAP representation.**<br>
	Input that does not use the internal SAP representation results in error messages. 
	Use the internal SAP representation. Example: 
	```
	ERPConnect.ABAPProgramException: RfcInvoke failed(RFC_ABAP_MESSAGE): Enter date in the format \_.\_.\_
	```
