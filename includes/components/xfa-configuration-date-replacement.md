
### SAP Date Conversion
When this option is active, the following date conversions are applied: 

- *Replacement for invalid dates*
- *Replacement for 0000XXXX*
- *Replacement for 9999XXXX*

#### Replacement for invalid dates
Replaces an invalid date format, e.g., *20190132* (January 32nd 2019). 
Enter a replacement value for invalid SAP dates in the format yyyy-mm-dd. 
The default value is *NULL*. 


#### Replacement for 0000XXXX
Replaces SAP dates that contain the year 9999, e.g., *99990101* (January 1st 9999). 
Enter a replacement value in the format yyyy-mm-dd. 
The value NULL is supported. The default value is *1970-01-01*. 


#### Replacement for 9999XXXX
Replaces SAP dates that contain the year ‘9999’, e.g., ‘99990101’ (January 1st 9999). 
Enter a replacement value in the format yyyy-mm-dd. 
The value NULL is supported. The default value is *2099-12-31*. 
