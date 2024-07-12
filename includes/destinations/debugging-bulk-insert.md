
### Debugging

!!! warning
	**Performance decrease!**<br>
	The performance decreases when bulk insert is disabled.
	Disable the bulk insert only when necessary, e.g., upon request of the support team.


By activating the checkbox **Disable bulk operations**, the default bulk insert is deactivated when writing to a database.

This option enables detailed error analysis, if certain data rows cannot be persisted on the database.
Possible causes for the incorrect behavior are incorrect values with regard to the stored data type.

Debugging needs to be deactivated again, after the successful error analysis, otherwise the performance of the database write processes remains low. 

!!! note
	Bulk operations are not supported when using [Custom SQL statements](#custom-sql-statements), e.g., in *Row Processing*. 
	Bulk operations lead to performance decrease. 
	To increase performance when using [Custom SQL statements](#custom-sql-statements), it is recommended to perform the custom processing in the *Finalization* step.