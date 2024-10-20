---
title: Change Connection Manager
description: How to change the connection manager for Xtract BAPI
---

This page shows how to change the [XTRACT Connection Manager](../sap-connection/index.md/#connect-to-sap) that is assigned to an {{ bapi }} {{ component }}.

### About XTRACT Connection Managers in {{ bapi }}

An XTRACT connection Manager is automatically assigned or selected when you open the main window of the {{ bapi }} {{ component }} for the first time, see [Assign Connection Managers to Xtract Components](../sap-connection/index.md/#assign-connection-managers-to-xtract-components).
Connection managers are usually changed in the *Advanced Editor* of a {{ component }}.
Because the {{ bapi }} {{ component }} does not have an *Advanced Editor*, it is not possible to change the connection manager outside of the {{ component }}.

### Change the XTRACT Connection Manager

Follow the steps below to change the connnection manager of an {{ bapi }} {{ component }}:

1. In the main window of the {{ bapi }} {{ component }}, click **Change Connection Manager**. 
This option is only available when there is more than one defined XTRACT Connection Manager. The window "Select Connection Manager" opens.<br>
![change-connection-manager](../../assets/images/documentation/components/bapi/xis-change-connection-manager.png){:class="img-responsive"}
2. Select a Connection Manager from the drop-down-menu.<br>
![select-connection-manager](../../assets/images/xis/documentation/sap-connection/select-connection-manager.png){:class="img-responsive"}
3. Click **[OK]** to confirm your selection.

The selected XTRACT connection manager is now assigned to the {{ bapi }} {{ component }}.
