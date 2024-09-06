{% if page.meta.product == "xtract-is" %}

::cards:: cols=3

- title: {{ bapi }}
  icon: ../assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">type&#58; transformation</span> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: bapi/index.md
  
- title: {{ bwcube }}
  icon: ../assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries.<br> <br><span class="keyword">type&#58; source</span><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: bwcube/index.md
  
- title: {{ bwloader }}
  icon: ../assets/images/logos/components/BWLoader.svg
  content: Load data into SAP BW systems. <br> <br> <br> <span class="keyword">type&#58; destination</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: bwloader/index.md

- title: {{ hierarchy }}
  icon: ../assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <br> <span class="keyword">type&#58; source</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: hierarchy/index.md
  
- title: {{ deltaq }}
  icon: ../assets/images/logos/components/DeltaQ.svg
  content: Extract data from DataSources (OLTP) and extractors from ERP and ECC systems.<br><br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: deltaq/index.md

- title: {{ odp }}
  icon: ../assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework.<br> <br> <span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: odp/index.md
  
- title: {{ ohs }}
  icon: ../assets/images/logos/components/Open-Hub.svg
  content: Extract data from InfoSpokes and OHS destinations.<br> <br> <br><span class="keyword">type&#58; source</span><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: ohs/index.md
  
- title: {{ query }}
  icon: ../assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**.<br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span>  
  url: query/index.md

- title: {{ report }}
  icon: ../assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports.<br> <br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> 
  url: report/index.md
  
- title: {{ table }}
  icon: ../assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: table/index.md

- title: {{ tableCDC }}
  icon: ../assets/images/logos/components/Table-CDC.svg
  content:  Extract delta data from SAP tables and views.<br> <br> <span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: table-cdc/index.md

::/cards::

{% elif page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}

::cards:: cols=3

- title: {{ bapi }}
  icon: ../assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: bapi/index.md
  
- title: {{ bwcube }}
  icon: ../assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries. <br> <br><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: bwcube/index.md

- title: {{ hierarchy }}
  icon: ../assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: hierarchy/index.md
  
- title: {{ deltaq }}
  icon: ../assets/images/logos/components/DeltaQ.svg
  content: Extract data from DataSources (OLTP) and extractors from ERP and ECC systems. <br> <br><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: deltaq/index.md

- title: {{ odp }}
  icon: ../assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: odp/index.md
  
- title: {{ ohs }}
  icon: ../assets/images/logos/components/Open-Hub.svg
  content: Extract data from InfoSpokes and OHS destinations. <br> <br> <br><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: ohs/index.md
  
- title: {{ query }}
  icon: ../assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**. <br>  <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span>
  url: query/index.md

- title: {{ report }}
  icon: ../assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> 
  url: report/index.md
  
- title: {{ table }}
  icon: ../assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: table/index.md

- title: {{ tableCDC }}
  icon: ../assets/images/logos/components/Table-CDC.svg
  content:  Extract delta data from SAP tables and views. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: table-cdc/index.md

::/cards::

{% else %}

::cards:: cols=3

- title: {{ bapi }}
  icon: ../assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: bapi/index.md
  
- title: {{ bwcube }}
  icon: ../assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries. <br> <br><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: bwcube/index.md

- title: {{ hierarchy }}
  icon: ../assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: hierarchy/index.md

- title: {{ odp }}
  icon: ../assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework. <br> <br><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: odp/index.md

- title: {{ query }}
  icon: ../assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**. <br> <br> <span class="keyword">ERP/ ECC</span>
  url: query/index.md

- title: {{ report }}
  icon: ../assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports. <br> <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> 
  url: report/index.md
  
- title: {{ table }}
  icon: ../assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: table/index.md

::/cards::

{% endif %}