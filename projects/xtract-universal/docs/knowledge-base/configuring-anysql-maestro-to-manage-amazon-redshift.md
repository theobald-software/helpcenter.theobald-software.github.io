---
title: Configuring AnySQL Maestro to manage Amazon Redshift
description: Configuring AnySQL Maestro
---

This example shows how to configure and use AnySQL Maestro to manage your Amazon Redshift database.
You can use any other [db client](https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-using-workbench.html) for that matter. Steps should be similar. 

- Download and install AnySQL Maestro from [here](http://www.sqlmaestro.com/de/products/anysql/maestro/download/).
- Download and install ODBC driver for PostgreSQL from [here](http://ftp.postgresql.org/pub/odbc/versions/msi/psqlodbc_08_04_0200.zip).
- Launch AnySQL Maestro.
- Click "Create Database Profiles".


![RS-Configure-AnySQL-Add-Profile-Button](/img/content/RS-Configure-AnySQL-Add-Profile-Button.png){:class="img-responsive"}

- In the Create Database Profiles Wizard, click the button next to the connection string field.

![RS-Configure-AnySQL-Database-Profiles-Wizard](/img/content/RS-Configure-AnySQL-Database-Profiles-Wizard.png){:class="img-responsive"}

- Go to "Connection" and enable "Use connection string" then click "Build...".
- Go to "Machine Data Source" and Click "New..." (There might be a pop up with a warning, you can just close it with a click on "Ok").

- Click "Next" and choose "PostgreSQL Unicode", then click "Next" and "Finish".

![RS-Configure-AnySQL-Choose-Driver](/img/content/RS-Configure-AnySQL-Choose-Driver.png){:class="img-responsive"}

- Enter your credentials, click "Test" to check if they are correct and click "Save".

![RS-Configure-AnySQL-Enter-Credentials](/img/content/RS-Configure-AnySQL-Enter-Credentials.png){:class="img-responsive"}

- Choose your connection and click "Ok".
- Enter the database name and your credentials and select SSL-Mode "allow", then click "OK".

- Enter your credentials and select the initial catalog, then click "OK".

![RS-Configure-AnySQL-Data-Link-Properties](/img/content/RS-Configure-AnySQL-Data-Link-Properties.png){:class="img-responsive"}

- Click "Next", then "Ready".
- Now you can work with your database.

### Related Links
- [Amazon AWS: Getting Started - Backup & Restore with AWS](https://aws.amazon.com/backup-restore/getting-started/?nc1=h_ls)
- [Amazon Redshift: Getting Started with Amazon Redshift](hhttps://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html)
