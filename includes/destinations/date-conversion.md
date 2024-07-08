
### Date Conversion

Converts the character-type SAP date (YYYYMMDD, e.g., 19900101) to a special date format (YYYY-MM-DD, e.g., 1990-01-01). 
Target data uses a real date data-type and not the string data-type to store dates.

#### Invalid dates
If an SAP date cannot be converted to a valid date format, the invalid date is converted to the entered value. 
NULL is supported as a value.
When converting the SAP date the two special cases 00000000 and 9999XXXX are checked first.

#### 00000000
Converts the SAP date 00000000 to the entered value.

#### 9999XXXX
Converts the SAP date 9999XXXX to the entered value.
