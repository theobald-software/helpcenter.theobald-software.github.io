{% if page.meta.product == "xtract-is" %}

::cards:: cols=3

- title: {{ bapi }}
  image: site:assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span><span class="keyword">type&#58; transformation</span>
  url: site:documentation/bapi/
  
- title: {{ bwcube }}
  image: site:assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries.<br> <br><span class="keyword">BW</span> <span class="keyword">type&#58; source</span>
  url: site:documentation/bwcube/
  
- title: {{ bwloader }}
  image: site:assets/images/logos/components/BWLoader.svg
  content: Load data into SAP BW systems. <br> <br> <br> <span class="keyword">BW</span><span class="keyword">type&#58; destination</span> 
  url: site:documentation/bwloader/

- title: {{ hierarchy }}
  image: site:assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <br> <span class="keyword">BW</span><span class="keyword">type&#58; source</span> 
  url: site:documentation/hierarchy/
  
- title: {{ deltaq }}
  image: site:assets/images/logos/components/DeltaQ.svg
  content: Extract data from DataSources (OLTP) and extractors from ERP and ECC systems.<br> <br><span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span> <span class="keyword">type&#58; source</span>
  url: site:documentation/deltaq/

- title: {{ odp }}
  image: site:assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework.<br> <br><span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span> <span class="keyword">type&#58; source</span>
  url: site:documentation/odp/
  
- title: {{ ohs }}
  image: site:assets/images/logos/components/Open-Hub.svg
  content: Extract data from InfoSpokes and OHS destinations.<br> <br><span class="keyword">BW</span> <span class="keyword">type&#58; source</span>
  url: site:documentation/ohs/
  
- title: {{ query }}
  image: site:assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**.<br> <br><span class="keyword">ERP/ ECC</span>  <span class="keyword">type&#58; source</span>
  url: site:documentation/query/

- title: {{ report }}
  image: site:assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports.<br> <br> <br><span class="keyword">ERP/ ECC</span> <span class="keyword">type&#58; source</span>
  url: site:documentation/report/
  
- title: {{ table }}
  image: site:assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br><span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span> <span class="keyword">type&#58; source</span>
  url: site:documentation/table/

- title: {{ tableCDC }}
  image: site:assets/images/logos/components/Table-CDC.svg
  content:  Extract delta data from SAP tables and views.<br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span><span class="keyword">type&#58; source</span>
  url: site:documentation/table-cdc/

::/cards::

{% elif page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}

::cards:: cols=3

- title: {{ bapi }}
  image: site:assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span>
  url: site:documentation/bapi/
  
- title: {{ bwcube }}
  image: site:assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries. <br> <br><span class="keyword">BW</span>
  url: site:documentation/bwcube/

- title: {{ hierarchy }}
  image: site:assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <span class="keyword">BW</span>
  url: site:documentation/hierarchy/
  
- title: {{ deltaq }}
  image: site:assets/images/logos/components/DeltaQ.svg
  content: Extract data from DataSources (OLTP) and extractors from ERP and ECC systems. <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span>
  url: site:documentation/deltaq/

- title: {{ odp }}
  image: site:assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework. <br> <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span>
  url: site:documentation/odp/
  
- title: {{ ohs }}
  image: site:assets/images/logos/components/Open-Hub.svg
  content: Extract data from InfoSpokes and OHS destinations. <br> <br><span class="keyword">BW</span>
  url: site:documentation/ohs/
  
- title: {{ query }}
  image: site:assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**. <br> <br> <span class="keyword">ERP/ ECC</span>
  url: site:documentation/query/

- title: {{ report }}
  image: site:assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports. <br> <br> <br> <span class="keyword">ERP/ ECC</span> 
  url: site:documentation/report/
  
- title: {{ table }}
  image: site:assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span>
  url: site:documentation/table/

- title: {{ tableCDC }}
  image: site:assets/images/logos/components/Table-CDC.svg
  content:  Extract delta data from SAP tables and views. <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span>
  url: site:documentation/table-cdc/

::/cards::

{% else %}

::cards:: cols=3

- title: {{ bapi }}
  image: site:assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span>
  url: site:documentation/bapi/
  
- title: {{ bwcube }}
  image: site:assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries. <br> <br><span class="keyword">BW</span>
  url: site:documentation/bwcube/

- title: {{ hierarchy }}
  image: site:assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <span class="keyword">BW</span>
  url: site:documentation/hierarchy/

- title: {{ odp }}
  image: site:assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework. <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span>
  url: site:documentation/odp/

- title: {{ query }}
  image: site:assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**. <br> <br> <span class="keyword">ERP/ ECC</span>
  url: site:documentation/query/

- title: {{ report }}
  image: site:assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports. <br> <br> <br> <span class="keyword">ERP/ ECC</span> 
  url: site:documentation/report/
  
- title: {{ table }}
  image: site:assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br> <span class="keyword">ERP/ ECC</span> <span class="keyword">BW</span>
  url: site:documentation/table/

::/cards::

{% endif %}