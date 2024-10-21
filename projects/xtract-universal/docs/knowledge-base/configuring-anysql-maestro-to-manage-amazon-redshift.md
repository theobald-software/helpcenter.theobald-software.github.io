---
title: Configure AnySQL Maestro to Manage Amazon Redshift
description: Configuring AnySQL Maestro
---

The following article shows an example of how to configure and use AnySQL Maestro to manage your Amazon Redshift database.
The example works for any other [Database](https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-using-workbench.html).

### Create Database Profiles

1. Download and install [AnySQL Maestro](http://www.sqlmaestro.com/de/products/anysql/maestro/download/).
2. Download and install [ODBC driver for PostgreSQL](https://ftp.postgresql.org/pub/odbc/versions.old/msi/psqlodbc_08_04_0200.zip).
3. Launch AnySQL Maestro.
4. Click "Create Database Profiles". <br> ![RS-Configure-AnySQL-Add-Profile-Button](../assets/images/articles/xu/redshift/RS-Configure-AnySQL-Add-Profile-Button.png){:class="img-responsive"}
5. In the Create Database Profiles Wizard, click the button next to the connection string field. <br> ![RS-Configure-AnySQL-Database-Profiles-Wizard](../assets/images/articles/xu/redshift/RS-Configure-AnySQL-Database-Profiles-Wizard.png){:class="img-responsive"}
6. Navigate to *Connection* and enable *Use connection string* then click **[Build...]**.
7. Navigate to *Machine Data Source* and Click **[New...]**.   
8. Click **[Next]** and choose *PostgreSQL Unicode*, then click **[Next]** and **[Finish]**.

!!! note
    A warning might pop up. Close the warning and click **[OK]**.

![RS-Configure-AnySQL-Choose-Driver](../assets/images/articles/xu/redshift/RS-Configure-AnySQL-Choose-Driver.png){:class="img-responsive"}

### Test the result

1. Enter your credentials, click "Test" to check if they are correct and click "Save". <br> ![RS-Configure-AnySQL-Enter-Credentials](../assets/images/articles/xu/redshift/RS-Configure-AnySQL-Enter-Credentials.png){:class="img-responsive"}
2. Choose your connection and click **[OK]**.
3. Enter the database name and your credentials and select SSL-Mode *allow*, then click **[OK]**.
4. Enter your credentials and select the initial catalog, then click **[OK]**. <br> ![RS-Configure-AnySQL-Data-Link-Properties](../assets/images/articles/xu/redshift/RS-Configure-AnySQL-Data-Link-Properties.png){:class="img-responsive"}
5. Click **[Next]**, then **[Ready]**. Now the database is ready.

*****

#### Related Links
- [Amazon AWS: Getting Started - Backup & Restore with AWS](https://aws.amazon.com/backup-restore/getting-started/?nc1=h_ls)
- [Amazon Redshift: Getting Started with Amazon Redshift](hhttps://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html)
