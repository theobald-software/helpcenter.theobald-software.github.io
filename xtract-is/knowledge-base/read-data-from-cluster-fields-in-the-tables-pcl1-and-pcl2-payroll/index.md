The following article shows how to extract data from the SAP HCM tables PCL1 and PCL2.\
The data can only be extracted using a custom function module and the Xtract BAPI component. Data extraction via Xtract Table component is not supported.

### Custom Function Module Z_HR_CLUSTER_READ

Create the following custom function module in SAP:

1. Use SAP transaction SE37 to create a remote enabled custom function module Z_HR_CLUSTER_READ.

1. Create the following parameters:

   ```text
   PERNR            TYPE=PC2B0-PERNR;
   ACTIONID         TYPE=CHAR2; DEFAULT = 'P1'
   STARTDATE        TYPE=DATS;
   ENDDATE          TYPE=DATS;

   ```

   ```text
   ERT        LIKE=PC2B8
   ST         LIKE=PC2B5
   CRT        LIKE=PC208

   ```

1. Copy and paste the following ABAP source code into the source code area of the function module.

   ```abap
        FUNCTION Z_HR_CLUSTER_READ.

        *"----------------------------------------------------------------------

        *"*"Local Interface:
        *"  IMPORTING
        "     VALUE(PERNR) TYPE  PC2B0-PERNR OPTIONAL
        *"     VALUE(ACTIONID) TYPE  CHAR2 DEFAULT 'P1'
        *"     VALUE(STARTDATE) TYPE  DATS OPTIONAL
        *"     VALUE(ENDDATE) TYPE  DATS OPTIONAL
        *"  TABLES
        *"      ERT STRUCTURE  PC2B8 OPTIONAL
        *"      ST STRUCTURE  PC2B5 OPTIONAL
        *"      CRT STRUCTURE  PC208 OPTIONAL
        *"----------------------------------------------------------------------
        DATA : BEGIN OF it_pcl1 OCCURS 0,
        srtfd TYPE pcl1-srtfd,
        END OF it_pcl1.

        DATA BEGIN OF b1_key.
             INCLUDE STRUCTURE pdc10.
        DATA END OF b1_key.

        IF actionid = 'P1'.

        SELECT srtfd
        FROM pcl1
        INTO TABLE it_pcl1
        WHERE relid EQ 'B1'
        AND srtfd EQ pernr
        AND srtf2 EQ 0.

       LOOP AT it_pcl1.
         MOVE it_pcl1-srtfd TO b1_key.
         IMPORT st ert FROM DATABASE pcl1(b1) ID b1_key.
         IF sy-subrc EQ 0.
         ENDIF.
       ENDLOOP.

        ENDIF.

        IF actionid = 'P2'.
        DATA : it_rgdir TYPE TABLE OF pc261 INITIAL SIZE 0,
              wa_rgdir LIKE LINE OF it_rgdir,
              it_crt TYPE pay99_result-inter-crt,
              wa_crt LIKE LINE OF it_crt,
              wa_payrollresult TYPE pay99_result,
              v_molga TYPE molga.

       DATA : BEGIN OF wa_out,
               pernr TYPE pernr-pernr,
               gross TYPE pc207-betrg, "Amount
               net TYPE pc207-betrg,
              END OF wa_out,
              it_outtab LIKE TABLE OF wa_out.

        wa_out-pernr = PERNR.
        CALL FUNCTION 'CU_READ_RGDIR'
        EXPORTING
        persnr          = PERNR
        IMPORTING
        molga           = v_molga
        TABLES
        in_rgdir        = it_rgdir
        EXCEPTIONS
        no_record_found = 1
        OTHERS          = 2.
        IF sy-subrc = 0.



       LOOP AT it_rgdir INTO wa_rgdir
                          WHERE fpbeg GE startdate AND
                                fpend LE enddate AND
                                srtza EQ 'A'.  "Current result
           CALL FUNCTION 'PYXX_READ_PAYROLL_RESULT'
             EXPORTING
               clusterid                    = 'RD'
               employeenumber               = PERNR
               sequencenumber               = wa_rgdir-seqnr
               READ_ONLY_INTERNATIONAL      = 'X'
             CHANGING

               payroll_result               = wa_payrollresult
             EXCEPTIONS
               illegal_isocode_or_clusterid = 1
               error_generating_import      = 2
               import_mismatch_error        = 3
               subpool_dir_full             = 4
               no_read_authority            = 5
               no_record_found              = 6
               versions_do_not_match        = 7
               error_reading_archive        = 8
               error_reading_relid          = 9
               OTHERS                       = 10.

           IF sy-subrc = 0.
             LOOP AT wa_payrollresult-inter-crt INTO wa_crt.
               CASE wa_crt-lgart.
                 WHEN '/101'.  " Gross
                   APPEND wa_crt TO crt.
               ENDCASE.
               CLEAR wa_out.
             ENDLOOP.
           ENDIF.
         ENDLOOP.
       ENDIF.
     ENDIF.
   ENDFUNCTION.

   ```

1. Save the function module.

### How to use the Custom Function Module

Depending on the table you want to access, define the following parameters:

1. Look up the function module using the Xtract BAPI component.

1. Populate the import parameter ACTIONID with value *P1*.

1. Populate the field PERNR with a value for Personnel Number. The personnel number has to be entered with leading zeroes.

1. Run the SSIS package. The data is available in the table parameter ST.

1. Look up the function module using the Xtract BAPI component.

1. Populate the import parameter ACTIONID with value *P2*.

1. Enter a start date and end date using the parameters STARTDATE and ENDDATE. The date fields have the format YYYYmmDD.

1. Run the SSIS package. The data is available in the table parameter CRT.
