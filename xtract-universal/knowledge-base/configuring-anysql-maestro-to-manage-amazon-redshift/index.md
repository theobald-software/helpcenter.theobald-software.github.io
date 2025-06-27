The following article shows an example of how to configure and use AnySQL Maestro to manage your Amazon Redshift database. The example works for any other [Database](https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-using-workbench.html).

### Create Database Profiles

1. Download and install [AnySQL Maestro](http://www.sqlmaestro.com/de/products/anysql/maestro/download/).
1. Download and install [ODBC driver for PostgreSQL](https://ftp.postgresql.org/pub/odbc/versions.old/msi/psqlodbc_08_04_0200.zip).
1. Launch AnySQL Maestro.
1. Click "Create Database Profiles".
1. In the Create Database Profiles Wizard, click the button next to the connection string field.
1. Navigate to *Connection* and enable *Use connection string* then click **[Build...]**.
1. Navigate to *Machine Data Source* and Click **[New...]**.
1. Click **[Next]** and choose *PostgreSQL Unicode*, then click **[Next]** and **[Finish]**.

Note

A warning might pop up. Close the warning and click **[OK]**.

### Test the result

1. Enter your credentials, click "Test" to check if they are correct and click "Save".
1. Choose your connection and click **[OK]**.
1. Enter the database name and your credentials and select SSL-Mode *allow*, then click **[OK]**.
1. Enter your credentials and select the initial catalog, then click **[OK]**.
1. Click **[Next]**, then **[Ready]**. Now the database is ready.

______________________________________________________________________

#### Related Links

- [Amazon AWS: Getting Started - Backup & Restore with AWS](https://aws.amazon.com/backup-restore/getting-started/?nc1=h_ls)
- [Amazon Redshift: Getting Started with Amazon Redshift](hhttps://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html)
