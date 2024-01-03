
### Set Up an RFC Destination

To enable calls from an SAP system to a subsystem, the subsystem must be known to SAP.<br>
This can be done with an RFC destination.

An existing RFC destination is necessary for sending IDocs.

1. Use the transaction **SM59** to create a new RFC destination.
2. Fill the following fields of the destination: <br>
![Maintain-RFC-Destination-001]( ../../assets/images/Maintain-RFC-Destination-001.png){:class="img-responsive"}  
	- Unique name of the new destination e.g., ERPTEST.
	- Connection Type = T (for TCP/IP).
	- Description.
	- ProgramID: A unique name that the server program uses to register on the SAP gateway. 
	- Choose the option *Registered Server Program*.
3. Save the destination.
4. To test the RFC-Destination, click the button **[Test Connection]** while the program is running.<br> 
If everything works well, you should see a screen like the one below:<br>
![rfcdestination02]( ../../assets/images/Maintain-RFC-Destination-002.png){:class="img-responsive"}  

An example for a simple RFC server program can be found in section [RFC-Server](../rfc-server/create-rfc-functions.md)

!!! note
    If the RFC Destination is set to Unicode, the property *IsUnicode* of the RFCServer object must be set to *true*.
