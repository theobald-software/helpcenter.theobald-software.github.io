To use Board Connector you need an SAP connection user with sufficient authorization in SAP. Authorizations are assigned via authorization objects in SAP. Redirect this page to your SAP Basis administrators to get the relevant authorization objects for your SAP connection user.

The authorizations in the section [General authorization objects](#general-authorization-objects) are required to establish an SAP connection with the SAP application server. The required authorizations for each extraction type are listed in their respective section.

### SAP Authorization Profiles

Theobald Software collected and combined the necessary authorizations for all extractions types into SAP roles. You can download the SAP profiles and upload them to your SAP system:

| Extraction Type | SAP Role File | | --- | --- | | [General Authorization Objects](#general-authorization-objects) | [ZXTGENERAL.SAP](/board-connector/assets/files/sap_roles/ZXTGENERAL.SAP) | | [BAPI](#bapi) | [ZXTBAPI.SAP](/board-connector/assets/files/sap_roles/ZXTBAPI.SAP) | | [BW Cube](#bw-cube-bw-query) | [ZXTBWCUBE.SAP](/board-connector/assets/files/sap_roles/ZXTBWCUBE.SAP) | | [BW Hierarchy](#bw-hierarchy) | [ZXTBWHIERARCHY.SAP](/board-connector/assets/files/sap_roles/ZXTBWHIERARCHY.SAP) | | [ODP (Operational Data Provisioning)](#odp) | [ZXTODP.SAP](/board-connector/assets/files/sap_roles/ZXTODP.SAP) | | [OHS (Open Hub Services)](#ohs) | [ZXTOHS.SAP](/board-connector/assets/files/sap_roles/ZXTOHS.SAP) | | [Query](#query) | [ZXTQUERY.SAP](/board-connector/assets/files/sap_roles/ZXTQUERY.SAP) | | [Report](#report) | [ZXREPORT.SAP](/board-connector/assets/files/sap_roles/ZXREPORT.SAP) | | [Table](#table) | [ZXTABLE.SAP](/board-connector/assets/files/sap_roles/ZXTABLE.SAP) | | [Table CDC](#table-cdc) | [ZXTABLECDC.SAP](/board-connector/assets/files/sap_roles/ZXTABLECDC.SAP) | | [DeltaQ](#deltaq) | [ZXTDELTAQ.SAP](/board-connector/assets//files/sap_roles/ZXTDELTAQ.SAP), [DELTAQ_CUSTOMIZING_CHECK](/board-connector/assets/files/sap_roles/DELTAQ_CUSTOMIZING_CHECK.SAP) |

Note

If you still get an authorization error, ask SAP Basis to record an ST01-/ or SU53-authorization trace in SAP. This trace shows which authorizations objects are missing.

### General Authorization Objects

The following authorization objects are required to establish a connection to SAP.

Necessary SAP authorizations

```text
S_RFC           RFC_TYPE=FUGR; RFC_NAME=SYST; ACTVT=16
S_RFC           RFC_TYPE=FUGR; RFC_NAME=SRFC; ACTVT=16
S_RFC           RFC_TYPE=FUGR; RFC_NAME=RFC1; ACTVT=16
S_RFC           RFC_TYPE=FUGR; RFC_NAME=OCS_CRM; ACTVT=16

```

[Download SAP profile for general authorization](/board-connector/assets/files/sap_roles/ZXTGENERAL.SAP)

### BAPI

Necessary SAP authorizations

```text
S_RFC            ACTVT=16; RFC_TYPE=FUGR; RFC_NAME=DDIF_FIELDINFO_GET, SDIFRUNTIME     

```

[Download SAP profile for BAPI Extractions](/board-connector/assets/files/sap_roles/ZXTBAPI.SAP)

### BW Cube / BW Query

Authorizations for the underlying Queries, Cubes, InfoAreas and analysis need to be assigned via:

- `S_RS_COMP`
- `S_RS_COMP1`
- `S_RS_AUTH`

Necessary SAP authorizations

```text
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSOB; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RRX1; ACTVT=16
S_TABU_NAM       ACTVT=03; TABLE=RSRREPDIR
S_TABU_NAM       ACTVT=03; TABLE=RSZGLOBV
S_TABU_NAM       ACTVT=03; TABLE=RSADMINC

```

Necessary SAP authorizations

```text
S_RFC            RFC_TYPE=FUGR;RFC_NAME=SYST;ACTVT=16;type=RF;name=RFCPING;
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSOBJS_RFC_INTERFACE; ACTVT=16; type=RF;name=RSOBJS_GET_NODES;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSAO_CORE;ACTVT=16;type=RF;name=RSAO_BICS_SESSION_INITIALIZE
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_CONSUMER;ACTVT=16;type=RF;name=BICS_CONS_CREATE
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_PROVIDER;ACTVT=16;type=RF;name=BICS_PROV_OPEN;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_PROVIDER_VAR;ACTVT=16;type=RF;name=BICS_PROV_VA
S_ADMI_FCD       S_ADMI_FCD=PADM;

```

Necessary SAP authorizations

```text
S_TABU_NAM       ACTVT=03; TABLE=DD03L

```

Alternatively, you can assign the SAP role template `S_RS_RREPU`.

[Download SAP profile for BW Cube / BW Query](/board-connector/assets/files/sap_roles/ZXTBWCUBE.SAP)

### BW Hierarchy

Necessary SAP authorizations

```text
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RSNDI_SHIE; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=BAPI_IOBJ_GETDETAIL; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=DDIF_FIELDINFO_GET; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RFC1; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RFC_GET_FUNCTION_INTERFACE; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RFC_READ_TABLE; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RSBAPI_IOBJ; ACTVT=16 
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RSNDI_SHIE; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=SDIFRUNTIME; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=SDTX; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=SYST; ACTVT=16
S_RS_ADMWB     RSADMWBOBJ=INFOOBJECT; ACTVT=03
S_TABU_DIS     ACTVT=03; DICBERCLS=BWC
S_TABU_DIS     ACTVT=03; DICBERCLS=BWG
S_TABU_NAM     ACTVT=03; TABLE=/BIC/*
S_TABU_NAM     ACTVT=03; TABLE=ENLFDIR
S_TABU_NAM     ACTVT=03; TABLE=RSHIEDIR

```

[Download SAP profile for BW Hierarchy](/board-connector/assets/files/sap_roles/ZXTBWHIERARCHY.SAP)

### ODP

For a complete and detailed list of authorization objects refer to [SAP Note 2855052](https://launchpad.support.sap.com/#/notes/2855052) - Authorizations required for ODP Data Replication API 2.0.

Necessary SAP authorizations

```text
S_TABU_NAM       ACTVT=03; TABLE=TCURX

```

[Download SAP profile for ODP](/board-connector/assets/files/sap_roles/ZXTODP.SAP)

### OHS

Alternatively, you can assign the SAP role template `S_BI-WHM_RFC`.

Necessary SAP authorizations

```text
S_RFC      RFC_TYPE=FUGR; RFC_NAME=RSB3RD; ACTVT=16
S_RFC      RFC_TYPE=FUGR; RFC_NAME=SDTX; ACTVT=16
S_RFC      RFC_TYPE=FUGR; RFC_NAME=BAPT; ACTVT=16
S_RFC      RFC_TYPE=FUGR; RFC_NAME=BATG; ACTVT=16
S_RFC      RFC_TYPE=FUGR; RFC_NAME=RSPC_API; ACTVT=16
S_TABU_DIS RC=0 ACTVT=03; DICBERCLS=&NC& 
S_RS_PC    RSPCCHAIN=*;RSPCAPPLNM=*; RSPCPART=DEFINITION; ACTVT=03
S_RS_PC    RSPCCHAIN=*;RSPCAPPLNM=*; RSPCPART=RUNTIME; ACTVT=16
S_CTS_ADMI CTS_ADMFCT=TABL
S_RS_DTP   RSTLDTPSRC=CUBE; RSSTDTPSRC=*; RSONDTPSRC=0D_DECU; RSTLDTPTGT=DEST; RSSTDTPTGT=*; ACTVT=16
S_BTCH_ADM BTCADMIN=Y
S_BTCH_JOB JOBGROUP=*; JOBACTION=RELE
S_RS_TR    RSTLOGOSRC=CUBE; RSSTTRSRC=*; RSOBJNMSRC=0D_DECU; RSTLOGOTGT=DEST; RSSTTRTGT=' '; RSOBJNMTG=*; ACTVT=16
S_RS_AUTH  BIAUTH=0BI_ALL
S_ADMI_FCD S_ADMI_FCD=ST0R

```

[Download SAP profile for OHS](/board-connector/assets/files/sap_roles/ZXTOHS.SAP)

### Query

Necessary SAP authorizations

```text
S_RFC            RFC_TYPE=FUGR; RFC_NAME=AQRC; ACTVT=16 

```

[Download SAP profile for SAP Query](/board-connector/assets/files/sap_roles/ZXTQUERY.SAP)

### Report

Necessary SAP authorizations

```text
S_RFC            RFC_TYPE=FUGR; RFC_NAME=ZXTRACTABAP; ACTVT=16
S_TABU_NAM       ACTVT=03; TABLE=TRDIR, TRDIRT, TSTC, VARID
S_GUI            ACTVT=61 
S_TABU_DIS       ACTVT=03; DICBERCLS=&NC& 
S_TABU_DIS       ACTVT=03; DICBERCLS=SS
S_BTCH_ADM       BTCADMIN=Y
S_BTCH_JOB       JOBGROUP=*; JOBACTION=RELE

```

Note

The necessary transport request for function group *ZXTRACTABAP* is located in the following path: `C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip` of the default installation.

[Download SAP profile for Report](/board-connector/assets/files/sap_roles/ZXREPORT.SAP)

To execute a report with Board Connector, the SAP connection user needs explicit authorization to execute the report. Authorization can be granted using one of the following methods:

- [Assign the authorization object Z_TS_PROG](../../../knowledge-base/create-the-custom-authority-object-z-ts-prog/)
- [Assign an authorization group](../../../knowledge-base/authorize-access-to-specific-reports/)

### Table

Necessary SAP authorizations

```text
S_RFC            ACTVT=16; RFC_TYPE=FUGR; RFC_NAME=SDTX, SDIFRUNTIME, /THEO/READ_TABLE                   
S_TABU_DIS       ACTVT=03; DICBERCLS=XXXX
S_TABU_NAM       ACTVT=03; TABLE=DD02V, DD17S, DD27S, ENLFDIR
S_DSAUTH         ACTVT=16;    

```

XXXX (stands for a placeholder) is the authorization group for the table. To determine, which authorization group belongs to which table, check the table TDDAT - Maintenance Areas for Tables. If the table is not listed, the authorization group is &NC&. For authorizing specific tables use authorization object S_TABU_NAM instead of S_TABU_DIS.

Note

The transport request for function group */THEO/READ_TABLE* and *Z_THEO_READ_TABLE* is located in the following path: `C:\Program Files\[XtractProduct]\ABAP\Table` of the default installation.

Additional options:

Necessary SAP authorizations

```text
S_BTCH_ADM       BTCADMIN=Y
S_BTCH_JOB       JOBGROUP=*; JOBACTION=RELE

```

Necessary SAP authorizations

```text
S_RFC            RFC_TYPE=FUNC; RFC_NAME=EM_GET_NUMBER_OF_ENTRIES; ACTVT=16  

```

Necessary SAP authorizations

```text
S_TABU_NAM       ACTVT=03; TABLE=TCURX

```

[Download SAP profile for Table](/board-connector/assets/files/sap_roles/ZXTABLE.SAP)

### Table CDC

Necessary SAP authorizations

```text
S_RFC            ACTVT=16; RFC_TYPE=FUGR, FUNC; RFC_NAME=SDTX, SDIFRUNTIME, /THEO/CDC_*, /THEO/READ_TABLE            
S_TABU_DIS       ACTVT=02, 03; DICBERCLS=*
S_TABU_CLI       CLIIDMAINT=X 
S_TABU_NAM       ACTVT=03; TABLE=DD02V, D17S, D27S, ENLFDIR
S_DEVELOP        ACTVT=02; DEVCLASS=$TMP; OBJNAME=ZTSCDC_*; OBJTYPE=*; P_GROUP=*

```

XXXX (stands for a placeholder) is the authorization group for the source table. To determine, which authorization group belongs to which table, check the table TDDAT - Maintenance Areas for Tables. If the table is not listed, the authorization group is &NC&. For authorizing specific tables use authorization object S_TABU_NAM instead of S_TABU_DIS.

Note

The transport requests for the required function groups */THEO/READ_TABLE* are located in `C:\Program Files\[XtractProduct]\ABAP\TableCDC` and `C:\Program Files\[XtractProduct]\ABAP\Table`.

[Download SAP profile for Table CDC](/board-connector/assets/files/sap_roles/ZXTABLECDC.SAP)

### DeltaQ

Necessary SAP authorizations

```text
S_RFC           RFC_TYPE=FUGR; RFC_NAME=SUSR; ACTVT=16  
S_RFC           RFC_TYPE=FUNC; RFC_NAME=RFC_GET_SYSTEM_INFO; ACTVT= 16 
S_ADMI_FCD      S_ADMI_FCD=NADM
S_TABU_DIS      ACTVT = 02; DICBERCLS=SA
S_TABU_DIS      ACTVT = 03; DICBERCLS=SA
S_TABU_NAM      ACTVT = 02; TABLE=EDIPOA
S_TABU_NAM      ACTVT = 03; TABLE=EDIPOA

```

Necessary SAP authorizations

```text
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SDIFRUNTIME; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSAG; ACTVT=16 
S_TABU_DIS       ACTVT=03; DICBERCLS=SS                                                
S_TABU_DIS       ACTVT=03; DICBERCLS=SC                                               
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=01; EDI_CIM=*; EDI_DOC=*                            
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=03; EDI_CIM=*; EDI_DOC=*   

```

Necessary SAP authorizations

```text
S_RFC           RFC_TYPE=FUGR; RFC_NAME=SDIFRUNTIME; ACTVT=16
S_TABU_DIS      ACTVT=03; DICBERCLS=SS                                 
S_TABU_DIS      ACTVT=03; DICBERCLS=SC                                               
S_IDOCDEFT      EDI_TCD=WE30; ACTVT=02; EDI_CIM=*; EDI_DOC=*

```

Necessary SAP authorizations

```text
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDI1; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=BATG; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDIMEXT; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=ARFC; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=ERFC; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDIN; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=/BIC/*; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=/BI0/*; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSAK; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDIW; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SDTX; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDIMEXT; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SYSU; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSC1; ACTVT=16
S_RFC            RFC_TYPE=FUNC; RFC_NAME=RSAP_REMOTE_HIERARCHY_CATALOG;  ACTVT=16
S_RFC            RFC_TYPE=FUNC; RFC_NAME=RSA1_OLTPSOURCE_GET_ALL;  ACTVT=16
S_RFC            RFC_TYPE=FUNC; RFC_NAME=RSA1_OLTPSOURCE_GET_SELECTIONS;  ACTVT=16
S_RFC_ADM        ACTVT=03; RFCDEST=XTRACT*; RFCTYPE = T; ICF_VALUE=* 
B_ALE_RECV       EDIMES=RSRQST
S_IDOCMONI       ACTVT=03; EDI_DIR=*; EDI_MES=*; EDI_PRN=*; EDI_PRT=*; EDI_TCD=WE*
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=02; EDI_CIM=*; EDI_DOC=*
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=03; EDI_CIM=*; EDI_DOC=*
S_TABU_DIS       ACTVT=03; DICBERCLS=SS                                   
S_TABU_DIS       ACTVT=03; DICBERCLS=SC
S_TABU_DIS       ACTVT=03; DICBERCLS=&NC&  
S_BTCH_ADM       BTCADMIN=Y          
S_BTCH_JOB       JOBGROUP=*; JOBACTION=RELE
S_SPO_DEV        SPODEVICE=*
S_RO_OSOA        OLTPSOURCE=*; OSOAAPCO=*; OSOAPART=DATA; ACTVT=03;  | Only in SAP Releases  7.0 and higher

```

[Download SAP profile for DeltaQ](/board-connector/assets/files/sap_roles/ZXTDELTAQ.SAP)

[Download SAP profile for DeltaQ Customizing Check](/board-connector/assets/files/sap_roles/DELTAQ_CUSTOMIZING_CHECK.SAP)

______________________________________________________________________

#### Related Links

- [SAP Help: Role Administration](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/52/6714a9439b11d1896f0000e8322d00/content.htm)
- [SAP ONE Support Launchpad](https://launchpad.support.sap.com/#/notes/2855052)
