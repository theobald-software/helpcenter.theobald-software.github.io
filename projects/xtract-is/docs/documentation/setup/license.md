---
title: Licensing
description: About the license of Xtract IS
---


<!---Xtract IS cannot be used outside SSIS,
which is why an SQL Server license is required, even if the SQL Server database is not used.-->

<!---
| Component   | ERP | BW | Enterprise <br> License | Ultimate <br> License |
|-------------|:-----:|:----:|:--------------------:|:------------------:|
| Table       | R   | R  | X                  | X                |
| BAPI        | R/W  | R/W | X                  | X                |
| Query       | R   |    | X                  | X                |
| ABAP Report | R   |    |                    | X                |
| DeltaQ      | R   | R  |                    | X                |
| BW Cube     |     | R  | X                  | X                |
| Hierarchy   |     | R  |                    | X                |
| OHS         |     | R  |                    | X                |
| BW Loader   |     | W  |                    | X                | 
| ODP         | R | R |  | X |
-->


### About the Licensing Concept of Xtract IS

Xtract IS is licensed per Windows server on which SSIS packages are deployed and executed. 
The following graphic shows on which workstations the installation of Xtract IS is required to have a valid license.   
![client_Server_architecture_xis_final](../../assets/images/documentation/setup/xis/client_server_xis.png)<br>

The same license file can be used on the local workstations to develop the SSIS packages.
A trial license is automatically installed with the installation of Xtract IS. <br>
A regular license is provided, after purchasing the product. The product license is bound to your company and a specific server name. 

{% include "setup/license.md" %}


