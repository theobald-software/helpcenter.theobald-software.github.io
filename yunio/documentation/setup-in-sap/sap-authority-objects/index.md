To use yunIO you need an SAP connection user with sufficient authorization in SAP. Authorizations are assigned via authorization objects in SAP. Redirect this page to your SAP Basis administrators to get the relevant authorization objects for your SAP connection user.

The authorizations in the section [General authorization objects](#general-authorization-objects) are required to establish an SAP connection with the SAP application server. The required authorizations for each integration type are listed in their respective section.

### SAP Authorization Profiles

Theobald Software collected and combined the necessary authorizations for all integration types into SAP roles. You can download the SAP profiles and upload them to your SAP system:

| Integration Type | SAP Role File | | --- | --- | | [General Authorization Objects](#general-authorization-objects) | [ZXTGENERAL.SAP](/yunio/assets/files/sap_roles/ZXTGENERAL.SAP) | | [BAPI](#bapi) | [ZXTBAPI.SAP](/yunio/assets/files/sap_roles/ZXTBAPI.SAP) | | [Report](#report) | [ZXREPORT.SAP](/yunio/assets/files/sap_roles/ZXREPORT.SAP) | | [Table](#table) | [ZXTABLE.SAP](/yunio/assets/files/sap_roles/ZXTABLE.SAP) |

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

[Download SAP profile for general authorization](/yunio/assets/files/sap_roles/ZXTGENERAL.SAP)

### BAPI

Necessary SAP authorizations

```text
S_RFC            ACTVT=16; RFC_TYPE=FUGR; RFC_NAME=DDIF_FIELDINFO_GET, SDIFRUNTIME     

```

[Download SAP profile for BAPI Extractions](/yunio/assets/files/sap_roles/ZXTBAPI.SAP)

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

[Download SAP profile for Report](/yunio/assets/files/sap_roles/ZXREPORT.SAP)

To execute a report with yunIO, the SAP connection user needs explicit authorization to execute the report. Authorization can be granted using one of the following methods:

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

[Download SAP profile for Table](/yunio/assets/files/sap_roles/ZXTABLE.SAP)

______________________________________________________________________

#### Related Links

- [SAP Help: Role Administration](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/52/6714a9439b11d1896f0000e8322d00/content.htm)
- [SAP ONE Support Launchpad](https://launchpad.support.sap.com/#/notes/2855052)
