---
title: XML Templates
description: Transaction-Recoder
---

The *TransactionRecorder* records SAP transactions and generates C# or VB code templates for the transactions.

### Create Templates

1. Run the *TransactionRecorder.exe* in the ERPConnect directory `C:\Program Files\ERPConnect` to start the *TransactionRecorder*.
2. Enter the transaction code you want to record in the text field **Transaction Code for recording**.
3. Choose *C#* or *VB* as your target language for the generated code.
4. Click **[Generate Now]** to acccess your SAP system. 
5. The window "SAP Login" opens. Enter your SAP credentials and click **[OK]**.
6. If prompted, allow acces to SAP. Your SAP GUI opens and executes the transaction code.
7. Finish your transaction in SAP. <br>
Once the transaction is finished, the code is generated and displayed in the *Transaction-Recorder*. 
8. Use **[Ctrl+C]** and **[Ctrl+V]** to copy the code to your program via the clipboard.<br>
![Tools-001]( site:assets/images/erpconnect/documentation/Tools-001.png){:class="img-responsive" }
