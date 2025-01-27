
This article shows how to create generic DataSources for delta extractions in SAP using a function module and timestamps.

### About Delta Functionality with Delta fields 

To use the delta functionality, a delta field is required. 
Certain tables like VBAK (Sales Document: Header Data) do not have a timestamp field for creation/change that can be uses as a unique delta field, but they have separate fields for creation date (**ERDAT**), creation time (**ERZET**) and change date (**AEDAT**). 
To get the delta data of the VBAK table, we create a generic DataSource using a custom function module that implements the necessary logic.

This article leads you through all necessary steps to create an extraction structure that has a timestamp field that can be used to implement the delta functionality. 

There are two template function modules that can be copied and used:

- RSAX_BIW_GET_DATA_SIMPLE: A function module with simple interface for *Full Load* with no support of delta loads.
- RSAX_BIW_GET_DATA: : A function module with complete interface that supports *Delta Load*. 

### Step 1: Create an Extract Structure

Follow the steps below to create the extract structure for the DataSource:

1. Use SAP transaction SE11 to create a new structure ZZVBAK.<br>
![XU create generic datasource 01](../assets/images/articles/deltaq/create-generic-01.jpg){:class="img-responsive"}
2. Insert the table VBAK as an include into the structure.<br>
![XU create generic datasource 03](../assets/images/articles/deltaq/create-generic-03.jpg){:class="img-responsive"}
3. Add a field ZTMSTMP(Data element: TZNTSTMPS, it is of datatype DEC with Length 15). 
This field holds the timestamp and allow us to use the extraction for delta purposes.<br>
![XU create generic datasource 05](../assets/images/articles/deltaq/create-generic-05.jpg){:class="img-responsive"}
4. Save and activate the structure. 

### Step 2: Create the Function Module

1. Use SAP transaction SE80 to copy the function group RSAX to the new function group Z_RSAX and to copy the function module RSAX_BIW_GET_DATA to Z_RSAX_BIW_GET_DATA_VBAK. <br>
![XU create generic datasource 06](../assets/images/articles/deltaq/create-generic-06.png){:class="img-responsive"}
2. Be sure to copy and activate all the related objects (interfaces, datatypes etc.).<br>
![XU create generic datasource 07](../assets/images/articles/deltaq/create-generic-07.jpg){:class="img-responsive"}
3. Use SAP transaction SE37 to open and edit the function module Z_RSAX_BIW_GET_DATA_VBAK. 
In the tab *Tables*, set the parameter E_T_DATA to associated type ZZVBAK.<br>
![XU create generic datasource 08](../assets/images/articles/deltaq/create-generic-08.jpg){:class="img-responsive"}
4. Navigate to the tab *source code* and paste the following ABAP Code.

	``` ABAP title="ABAP Code for the Custom Function Module"
	FUNCTION Z_RSAX_BIW_GET_DATA_VBAK.
	*"----------------------------------------------------------------------
	*"*"Local Interface:
	*"  IMPORTING
	*"     VALUE(I_REQUNR) TYPE  SBIWA_S_INTERFACE-REQUNR
	*"     VALUE(I_ISOURCE) TYPE  SBIWA_S_INTERFACE-ISOURCE OPTIONAL
	*"     VALUE(I_MAXSIZE) TYPE  SBIWA_S_INTERFACE-MAXSIZE OPTIONAL
	*"     VALUE(I_INITFLAG) TYPE  SBIWA_S_INTERFACE-INITFLAG OPTIONAL
	*"     VALUE(I_UPDMODE) TYPE  SBIWA_S_INTERFACE-UPDMODE OPTIONAL
	*"     VALUE(I_DATAPAKID) TYPE  SBIWA_S_INTERFACE-DATAPAKID OPTIONAL
	*"     VALUE(I_PRIVATE_MODE) OPTIONAL
	*"     VALUE(I_CALLMODE) LIKE  ROARCHD200-CALLMODE OPTIONAL
	*"     VALUE(I_REMOTE_CALL) TYPE  SBIWA_FLAG DEFAULT SBIWA_C_FLAG_OFF
	*"  TABLES
	*"      I_T_SELECT TYPE  SBIWA_T_SELECT OPTIONAL
	*"      I_T_FIELDS TYPE  SBIWA_T_FIELDS OPTIONAL
	*"      E_T_ZZVBAK STRUCTURE  ZZVBAK OPTIONAL
	*"  EXCEPTIONS
	*"      NO_MORE_DATA
	*"      ERROR_PASSED_TO_MESS_HANDLER
	*"----------------------------------------------------------------------

	* THE INPUT PARAMETER I_DATAPAKID IS NOT SUPPORTED YET !

	* EXAMPLE: INFOSOURCE CONTAINING TADIR OBJECTS
	*  TABLES: TADIR.

	* AUXILIARY SELECTION CRITERIA STRUCTURE
	  DATA: L_S_SELECT TYPE SBIWA_S_SELECT,
			STARTDATE LIKE SY-DATUM,
			STARTTIME LIKE SY-UZEIT,
			ENDDATE LIKE SY-DATUM,
			ENDTIME LIKE SY-UZEIT,
			TSTAMP LIKE TZONREF-TSTAMPS.

	* MAXIMUM NUMBER OF LINES FOR DB TABLE
	  STATICS: L_MAXSIZE TYPE SBIWA_S_INTERFACE-MAXSIZE.

	* SELECT RANGES
	  RANGES:  L_R_TMPSTMP FOR ZZVBAK-ZTMSTMP.

	* PARAMETER I_PRIVATE_MODE:
	* SOME APPLICATIONS MIGHT WANT TO USE THIS FUNCTION MODULE FOR OTHER
	* PURPOSES AS WELL (E.G. DATA SUPPLY FOR OLTP REPORTING TOOLS). IF THE
	* PROCESSING LOGIC HAS TO BE DIFFERENT IN THIS CASE, USE THE OPTIONAL
	* PARAMETER I_PRIVATE_MODE (NOT SUPPLIED BY BIW !) TO DISTINGUISH
	* BETWEEN BIW CALLS (I_PRIVATE_MODE = SPACE) AND OTHER CALLS
	* (I_PRIVATE_MODE = X).
	* IF THE MESSAGE HANDLING HAS TO BE DIFFERENT AS WELL, DEFINE YOUR OWN
	* MESSAGING MACRO WHICH INTERPRETS PARAMETER I_PRIVATE_MODE. WHEN
	* CALLED BY BIW, IT SHOULD USE THE LOG_WRITE MACRO, OTHERWISE DO WHAT
	* YOU WANT.

	* INITIALIZATION MODE (FIRST CALL BY SAPI) OR DATA TRANSFER MODE
	* (FOLLOWING CALLS) ?
	  IF I_INITFLAG = SBIWA_C_FLAG_ON.

	************************************************************************
	* INITIALIZATION: CHECK INPUT PARAMETERS
	*                 BUFFER INPUT PARAMETERS
	*                 PREPARE DATA SELECTION
	************************************************************************

	* THE INPUT PARAMETER I_DATAPAKID IS NOT SUPPORTED YET !

	* INVALID SECOND INITIALIZATION CALL -> ERROR EXIT
		IF NOT G_FLAG_INTERFACE_INITIALIZED IS INITIAL.

		  IF 1 = 2. MESSAGE E008(R3). ENDIF.
		  LOG_WRITE 'E'                    "MESSAGE TYPE
					'R3'                   "MESSAGE CLASS
					'008'                  "MESSAGE NUMBER
					' '                    "MESSAGE VARIABLE 1
					' '.                   "MESSAGE VARIABLE 2
		  RAISE ERROR_PASSED_TO_MESS_HANDLER.
		ENDIF.

	* CHECK INFOSOURCE VALIDITY
		CASE I_ISOURCE.
		  WHEN 'ZDSVBAK' OR ''.
		  WHEN OTHERS.
			IF 1 = 2. MESSAGE E009(R3). ENDIF.
			LOG_WRITE 'E'                  "MESSAGE TYPE
					  'R3'                 "MESSAGE CLASS
					  '009'                "MESSAGE NUMBER
					  I_ISOURCE            "MESSAGE VARIABLE 1
					  ' '.                 "MESSAGE VARIABLE 2
			RAISE ERROR_PASSED_TO_MESS_HANDLER.
		ENDCASE.

	* CHECK FOR SUPPORTED UPDATE MODE
		CASE I_UPDMODE.
		  WHEN 'F' OR ''.
		  WHEN 'C'.  "
		  WHEN 'R'.  "
		  WHEN 'S'.  " DELTA INITIALIZATION
		  WHEN 'I'.    " DELTA INIT FOR NON CUMMULATIVE
		  WHEN 'D'.   " DELTA UPDATE
		  WHEN OTHERS.
			IF 1 = 2. MESSAGE E011(R3). ENDIF.
			LOG_WRITE 'E'                  "MESSAGE TYPE
					  'R3'                 "MESSAGE CLASS
					  '011'                "MESSAGE NUMBER
					  I_UPDMODE            "MESSAGE VARIABLE 1
					  ' '.                 "MESSAGE VARIABLE 2
			RAISE ERROR_PASSED_TO_MESS_HANDLER.
		ENDCASE.

	* CHECK FOR OBLIGATORY SELECTION CRITERIA
	*    READ TABLE I_T_SELECT INTO L_S_SELECT WITH KEY FIELDNM = 'ZTMSTMP'.
	*    IF SY-SUBRC <> 0.
	*      IF 1 = 2. MESSAGE E010(R3). ENDIF.
	*      LOG_WRITE 'E'                    "MESSAGE TYPE
	*                'R3'                   "MESSAGE CLASS
	*                '010'                  "MESSAGE NUMBER
	*                'PGMID'                "MESSAGE VARIABLE 1
	*                ' '.                   "MESSAGE VARIABLE 2
	*      RAISE ERROR_PASSED_TO_MESS_HANDLER.
	*    ENDIF.

		APPEND LINES OF I_T_SELECT TO G_T_SELECT.

	* FILL PARAMETER BUFFER FOR DATA EXTRACTION CALLS
		G_S_INTERFACE-REQUNR    = I_REQUNR.
		G_S_INTERFACE-ISOURCE   = I_ISOURCE.
		G_S_INTERFACE-MAXSIZE   = I_MAXSIZE.
		G_S_INTERFACE-INITFLAG  = I_INITFLAG.
		G_S_INTERFACE-UPDMODE   = I_UPDMODE.
		G_S_INTERFACE-DATAPAKID = I_DATAPAKID.
		G_FLAG_INTERFACE_INITIALIZED = SBIWA_C_FLAG_ON.

	* FILL FIELD LIST TABLE FOR AN OPTIMIZED SELECT STATEMENT
	* (IN CASE THAT THERE IS NO 1:1 RELATION BETWEEN INFOSOURCE FIELDS
	* AND DATABASE TABLE FIELDS THIS MAY BE FAR FROM BEEING TRIVIAL)
		APPEND LINES OF I_T_FIELDS TO G_T_SEGFIELDS.

	  ELSE.                 "INITIALIZATION MODE OR DATA EXTRACTION ?

	************************************************************************
	* DATA TRANSFER: FIRST CALL      OPEN CURSOR + FETCH
	*                FOLLOWING CALLS FETCH ONLY
	************************************************************************

	* FIRST DATA PACKAGE -> OPEN CURSOR
		IF G_COUNTER_DATAPAKID = 0.
		  "LOOP AT I_T_SELECT INTO L_S_SELECT WHERE FIELDNM = 'ZTMSTMP'.
		   LOOP AT G_T_SELECT INTO L_S_SELECT WHERE FIELDNM = 'ZTMSTMP'.

			TSTAMP = L_S_SELECT-LOW.
			CONVERT TIME STAMP TSTAMP TIME ZONE SY-ZONLO INTO DATE STARTDATE TIME STARTTIME.
			TSTAMP = L_S_SELECT-HIGH.
			CONVERT TIME STAMP TSTAMP TIME ZONE SY-ZONLO INTO DATE ENDDATE TIME ENDTIME.
		  ENDLOOP.
	* FILL RANGE TABLES FOR FIXED INFOSOURCES. IN THE CASE OF GENERATED
	* INFOSOURCES, THE USAGE OF A DYNAMICAL SELECT STATEMENT MIGHT BE
	* MORE REASONABLE. BIW WILL ONLY PASS DOWN SIMPLE SELECTION CRITERIA
	* OF THE TYPE SIGN = 'I' AND OPTION = 'EQ' OR OPTION = 'BT'.
	*      LOOP AT G_T_SELECT INTO L_S_SELECT WHERE FIELDNM = 'PGMID'.
	*        MOVE-CORRESPONDING L_S_SELECT TO L_R_PGMID.
	*        APPEND L_R_PGMID.
	*      ENDLOOP.

	*      LOOP AT G_T_SELECT INTO L_S_SELECT WHERE FIELDNM = 'OBJECT'.
	*        MOVE-CORRESPONDING L_S_SELECT TO L_R_OBJECT.
	*        APPEND L_R_OBJECT.
	*      ENDLOOP.

	* DETERMINE NUMBER OF DATABASE RECORDS TO BE READ PER FETCH STATEMENT
	* FROM INPUT PARAMETER I_MAXSIZE. IF THERE IS A ONE TO ONE RELATION
	* BETWEEN INFOSOURCE TABLE LINES AND DATABASE ENTRIES, THIS IS TRIVIAL.
	* IN OTHER CASES, IT MAY BE IMPOSSIBLE AND SOME ESTIMATED VALUE HAS TO
	* BE DETERMINED.
		  L_MAXSIZE = G_S_INTERFACE-MAXSIZE.
		  IF ENDDATE <> '00000000' AND ENDTIME <> '000000'.
			OPEN CURSOR WITH HOLD G_CURSOR FOR
		SELECT * FROM VBAK
		  WHERE
		  (
			( ERDAT >= STARTDATE AND ERZET >= STARTTIME AND ERDAT <= ENDDATE AND ERZET <= ENDTIME )
			OR ( AEDAT >= STARTDATE AND  AEDAT <= ENDDATE )
		  ).
		  ELSE.
			OPEN CURSOR WITH HOLD G_CURSOR FOR
			 SELECT * FROM VBAK.
		  ENDIF.
		ENDIF.                             "FIRST DATA PACKAGE ?

	* FETCH RECORDS INTO INTERFACE TABLE. THERE ARE TWO DIFFERENT OPTIONS:
	* - FIXED INTERFACE TABLE STRUCTURE FOR FIXED INFOSOURCES HAVE TO BE
	*   NAMED E_T_'NAME OF ASSIGNED SOURCE STRUCTURE IN TABLE ROIS'.
	* - FOR GENERATING APPLICATIONS LIKE LIS AND CO-PA, THE GENERIC TABLE
	*   E_T_DATA HAS TO BE USED.
	* ONLY ONE OF THESE INTERFACE TYPES SHOULD BE IMPLEMENTED IN ONE API !
		FETCH NEXT CURSOR G_CURSOR
				   APPENDING CORRESPONDING FIELDS
				   OF TABLE E_T_ZZVBAK
				   PACKAGE SIZE 1000.
	* PACKAGE SIZE L_MAXSIZE.

		IF SY-SUBRC <> 0.
		  CLOSE CURSOR G_CURSOR.
		  RAISE NO_MORE_DATA.
		ENDIF.

		G_COUNTER_DATAPAKID = G_COUNTER_DATAPAKID + 1.

	  ENDIF.              "INITIALIZATION MODE OR DATA EXTRACTION ?

	ENDFUNCTION.
	```

5. Save and activate the function module.

### Step 3: Create the DataSource

1. Use SAP transaction RSO2 to create a new DataSource for transaction data and name it to ZDSVBAK.<br>
![XU create generic datasource 09](../assets/images/articles/deltaq/create-generic-09.jpg){:class="img-responsive"}
2. Set the Application component and the description texts.<br>
![XU create generic datasource 10](../assets/images/articles/deltaq/create-generic-10.jpg){:class="img-responsive"}
3. Click **[Extraction by FM]**. Enter the name of the function module Z_RSAX_BIW_GET_DATA_VBAK and the extract structure ZZVBAK.<br>
![XU create generic datasource 11](../assets/images/articles/deltaq/create-generic-11.jpg){:class="img-responsive"}
4. Click **[Generic Delta]**. Select the timestamp field ZTMSTMP and activate the option **[Time stamp]**.<br>
![XU create generic datasource 12](../assets/images/articles/deltaq/create-generic-12.jpg){:class="img-responsive"}
5. Optional: set the *Safety Interval Lower Limit*.
6. Click **[Save]** twice. In the following screen you can set the selection fields. 
The timestamp field is disabled, because it is automatically populated as part of the delta process.<br>
![XU create generic datasource 13](../assets/images/articles/deltaq/create-generic-13.jpg){:class="img-responsive"}
7. Use SAP transaction RSA2 to see the details of our DataSource ZDSVBAK. 
The extraction method is set to *F2 (Simple Interface)*. 
Change it to *F1 (Complete Interface)*  by executing the following ABAP code. 

	!!! tip
		Use SAP transaction SE38 to create a new report with this ABAP code. Unfortunately this is not possible in the GUI. 

	``` ABAP
	REPORT ZABAPDEMO
	UPDATE roosource
	SET delta = 'E'
	exmethod = 'F1'
	genflag = 'X'
	WHERE oltpsource = 'ZDSVBAK'
	```

8. Use SAP transaction RSA2 to display the status of the DataSource ZDSVBAK. Confirm that the **Extraction Mode** is set to *F1*.<br>
![XU create generic datasource 14](../assets/images/articles/deltaq/create-generic-14.jpg){:class="img-responsive"}
9. Check for errors.<br>
![XU create generic datasource 15](../assets/images/articles/deltaq/create-generic-15.jpg){:class="img-responsive"}
10. Optional: use SAP transaction SE37 and call it twice to test the function module. The first call is for the initialization and the second call reads the data. 
Make sure that the table E_T_DATA contains the data.<br>

	=== "Call Function Module"
		![XU create generic datasource 18](../assets/images/articles/deltaq/create-generic-18.jpg){:class="img-responsive"}<br>
	=== "Result"
		![XU create generic datasource 19](../assets/images/articles/deltaq/create-generic-19.jpg){:class="img-responsive"}


### Step 4: Test the DataSource

Use SAP transaction RSA3 to test the datasource.<br>
![XU create generic datasource 20](../assets/images/articles/deltaq/create-generic-20.jpg){:class="img-responsive"}

Now the DataSource is created and you can use the {{ deltaq }} {{ component }} to read it. 
Be sure to activate the DataSource using the **[Activate]** button in the main window of the {{ component }}.

### Result 

The DataSource supports the *Full* and *Update Delta* mode. 
To use the*Update Delta* mode, the first call must have the update type *C (Delta Initialization)*. 
All following calls must have the update type *D (Delta Update)*. 

The delta process of the DataSource can be monitored and maintained in SAP transaction RSA7 (Delta Queue).

![XU create generic datasource 22](../assets/images/articles/deltaq/create-generic-22.jpg){:class="img-responsive"}

