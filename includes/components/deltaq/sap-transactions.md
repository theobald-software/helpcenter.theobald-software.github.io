

### SAP Transactions for Working with DeltaQ

The following SAP transaction can support you when working with DataSources:

=== "Initial Setup"
	* SBIW - SAP DataSources start page
	* RSA3 - Extractor Checker 
	* RSA5 - Install DataSources and Hierarchies from Business Content  
	* RSA6 - Postprocess DataSources and Hierarchies 
	* SM59 - Configuration of RFC Connections 

=== "Error Analysis"
	* SMQS - qRFC Monitor (QOUT Scheduler): Number of *Max.Conn.* should be at least 10
	* SM37 - Background jobs
	* SM58 - Transactional RFC
	* SM50 - Process overview
	* SMGW - Gateway Monitor

=== "Other Transactions"
	* RSA7 - Delta Queue Maintenance
	* SMQ1 - qRFC Monitor (outbound queue)
	* WE02 - IDoc list
	* WE20 - Partner profiles

