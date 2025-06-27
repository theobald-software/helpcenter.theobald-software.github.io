To use Xtract Core you need an SAP connection user with sufficient authorization in SAP. Authorizations are assigned via authorization objects in SAP. Redirect this page to your SAP Basis administrators to get the relevant authorization objects for your SAP connection user.

The authorizations in the section [General authorization objects](#general-authorization-objects) are required to establish an SAP connection with the SAP application server. The required authorizations for each extraction type are listed in their respective section.

### SAP Authorization Profiles

Theobald Software collected and combined the necessary authorizations for all extraction types into SAP roles. You can download the SAP profiles and upload them to your SAP system:

| Extraction Type | SAP Role File | | --- | --- | | [General Authorization Objects](#general-authorization-objects) | [ZXTGENERAL.SAP](/xtract-core/assets/files/sap_roles/ZXTGENERAL.SAP) | | [Table](#table) | [ZXTABLE.SAP](/xtract-core/assets/files/sap_roles/ZXTABLE.SAP) |

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

[Download SAP profile for general authorization](/xtract-core/assets/files/sap_roles/ZXTGENERAL.SAP)

### Table

Necessary SAP authorizations

```text
S_RFC            ACTVT=16; RFC_TYPE=FUGR; RFC_NAME=SDTX, SDIFRUNTIME, /THEO/READ_TABLE                   
S_TABU_DIS       ACTVT=03; DICBERCLS=XXXX
S_TABU_NAM       ACTVT=03; TABLE=DD02V, DD17S, DD27S, ENLFDIR
S_DSAUTH         ACTVT=16;    

```

XXXX (stands for a placeholder) is the authorization group for the table. To determine, which authorization group belongs to which table, check the table TDDAT - Maintenance Areas for Tables. If the table is not listed, the authorization group is &NC&. For authorizing specific tables use authorization object S_TABU_NAM instead of S_TABU_DIS.

______________________________________________________________________

#### Related Links

- [SAP Help: Role Administration](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/52/6714a9439b11d1896f0000e8322d00/content.htm)
- [SAP ONE Support Launchpad](https://launchpad.support.sap.com/#/notes/2855052)
