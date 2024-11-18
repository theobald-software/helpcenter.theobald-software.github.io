{% if page.meta.product == "xtract-is" %}

::cards:: cols=3

- title: {{ bapi }}
  icon: site:assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">type&#58; transformation</span> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/bapi/
  
- title: {{ bwcube }}
  icon: site:assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries.<br> <br><span class="keyword">type&#58; source</span><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: site:documentation/bwcube/
  
- title: {{ bwloader }}
  icon: site:assets/images/logos/components/BWLoader.svg
  content: Load data into SAP BW systems. <br> <br> <br> <span class="keyword">type&#58; destination</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/bwloader/

- title: {{ hierarchy }}
  icon: site:assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <br> <span class="keyword">type&#58; source</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/hierarchy/
  
- title: {{ deltaq }}
  icon: site:assets/images/logos/components/DeltaQ.svg
  content: Extract data from DataSources (OLTP) and extractors from ERP and ECC systems.<br><br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: site:documentation/deltaq/

- title: {{ odp }}
  icon: site:assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework.<br> <br> <span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/odp/
  
- title: {{ ohs }}
  icon: site:assets/images/logos/components/Open-Hub.svg
  content: Extract data from InfoSpokes and OHS destinations.<br> <br> <br><span class="keyword">type&#58; source</span><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: site:documentation/ohs/
  
- title: {{ query }}
  icon: site:assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**.<br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span>  
  url: site:documentation/query/

- title: {{ report }}
  icon: site:assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports.<br> <br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> 
  url: site:documentation/report/
  
- title: {{ table }}
  icon: site:assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: site:documentation/table/

- title: {{ tableCDC }}
  icon: site:assets/images/logos/components/Table-CDC.svg
  content:  Extract delta data from SAP tables and views.<br> <br> <span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/table-cdc/

::/cards::

{% elif page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}

::cards:: cols=3

- title: {{ bapi }}
  icon: site:assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">SAP Cloud</span> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/bapi/
  
- title: {{ bwcube }}
  icon: site:assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries. <br> <br><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/bwcube/

- title: {{ hierarchy }}
  icon: site:assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/hierarchy/
  
- title: {{ deltaq }}
  icon: site:assets/images/logos/components/DeltaQ.svg
  content: Extract data from DataSources (OLTP) and extractors from ERP and ECC systems. <br> <br><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/deltaq/

- title: {{ odp }}
  icon: site:assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/odp/
  
- title: {{ ohs }}
  icon: site:assets/images/logos/components/Open-Hub.svg
  content: Extract data from InfoSpokes and OHS destinations. <br> <br> <br><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/ohs/
  
- title: {{ query }}
  icon: site:assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**. <br>  <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span>
  url: site:documentation/query/

- title: {{ report }}
  icon: site:assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> 
  url: site:documentation/report/
  
- title: {{ table }}
  icon: site:assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/table/

- title: {{ tableCDC }}
  icon: site:assets/images/logos/components/Table-CDC.svg
  content:  Extract delta data from SAP tables and views. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/table-cdc/

::/cards::

{% else %}

::cards:: cols=3

- title: {{ bapi }}
  icon: site:assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/bapi/
  
- title: {{ bwcube }}
  icon: site:assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries. <br> <br><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/bwcube/

- title: {{ hierarchy }}
  icon: site:assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/hierarchy/

- title: {{ odp }}
  icon: site:assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework. <br> <br><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/odp/
  
- title: {{ odpOdata }}
  icon: site:assets/images/logos/components/ODP-OData.svg
  content: Extracts ODP-based data using OData servicea. <br> <br><span class="keyword">SAP Cloud</span> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/odp-odata/

- title: {{ query }}
  icon: site:assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**. <br> <br> <span class="keyword">ERP/ ECC</span>
  url: site:documentation/query/

- title: {{ report }}
  icon: site:assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports. <br> <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> 
  url: site:documentation/report/
  
- title: {{ table }}
  icon: site:assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: site:documentation/table/

::/cards::

{% endif %}