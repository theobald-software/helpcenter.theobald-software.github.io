### Supported SAP Systems and Releases

The following SAP Systems are supported:

- All SAP ABAP based systems that provide RFC connectivity and all SAP S/4 HANA (Cloud) systems that provide OData connectivity are supported.
- SAP ABAP systems on any database are supported (including HANA). The database used by the SAP system is irrelevant, because the integration occurs at SAP application server level.
- SAP systems running on Big Endian and Little Endian hardware are supported.
- SAP industry solutions like IS-U, IS-R, etc. are supported.
- SAP releases 4.6C and newer are supported. 
- All operating systems are supported.

!!! tip "Examples"

	<div class="mdx-columns" markdown>

	{% if  page.meta.product == "erpconnect" %}- [SAP S/4HANA](../../samples/supported-sap-and-hana-versions.md){% else %}- [SAP S/4HANA](site:knowledge-base/supported-sap-and-hana-versions){% endif %}
	- mySAP
	- SAP Application Server ABAP
	- Message Server
	- Router
	- Standalone Gateway
	- SAP Business Suite 7 (CRM, SRM, SCM etc.)
	- SAP Business All in One, CAR, APO, PI
	- SAP BW 3.1 and later
	- SAP BW/BI 7.x
	- SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs)
	- SAP R/3 Version 4.6C and later
	- SAP BW/4HANA 
	- ...and more.

	</div>

!!! warning "**Disclaimer**" 
	While SAP versions that are no longer supported by SAP still work with Theobald Software products, they are excluded from the Theobald Software support service.

#### Not Supported SAP Systems

The following SAP Systems are not supported:
- SAP systems that don’t run on ABAP systems 
- SAP systems that don't provide RFC connectivity. <br>

!!! tip "Examples"

	<div class="mdx-columns" markdown>
    {% if  page.meta.product != "xtract-universal" and page.meta.product != "board-connector" %}
    - SAP S/4HANA Cloud Public Edition {% endif %}
	- Business By Design
	- Business One
	- Business Objects
	- Sybase
	- Ariba
	- Success Factors
	- Concur

	</div>

{% if page.meta.product != "yunio" and page.meta.product != "erpconnect"%}
### HANA Database
You can use Operational Data Provisioning (ODP) to connect the SAP HANA database of an SAP ABAP source system. 
Communication is done via RFC. 
With the ODP context for SAP HANA (HANA) the following HANA View types are available for extracting:
- Analysis Views
- Calculation Views
- Associated Attribute Views

Direct access to a HANA database without an SAP ABAP source system running on the corresponding HANA database is not supported.
{% endif %}