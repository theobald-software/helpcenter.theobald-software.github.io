
#### RFC Libraries

Select an RFC library. The following RFC libraries are supported:
- NetWeaver RFC library (sapnwrfc.dll)
- Classic RFC library (librfc32.dll)

The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system. 
For more information on SAP libraries, see [SAP Documentation: RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). 

SAP does not [support librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) anymore. 

{% if page.meta.product != "xtract-for-alteryx" %}

!!! note 
	For some older SAP releases, e.g., R/3 4.6C, it is necessary to enter the user name in upper case when using the NetWeaver RFC library.

!!! note 
	When using the NetWeaver RFC library with the {{ deltaq }} {{ component }} or the {{ ohs }} {{ component }}, the RFC destination in SAP transaction SM59 must be set to *Unicode*. 
	We recommend using the not supported librfc32.dll for some {{ components }}, e.g., {{ deltaq }} as it runs more stable than the NetWeaver RFC library.

{% endif %}

