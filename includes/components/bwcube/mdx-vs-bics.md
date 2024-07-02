
### MDX versus BICS

The {{ bwcube }} {{ component }} can extract data using the OLAP BAPI Interface (MDX) or the native BICs interface.
The following table shows the differences between the two extractors:

| MDX                                                                                         | BICS                                        |
|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| **Lookup syntax for BEx Queries:** <br>`[tech. name of InfoPovider]/[tech. name of BEx Query]` <br /> Example: `0SD_C03/0SD_C03_Q0018` | **Lookup syntax for BEx Queries:** <br>`[tech. name of BEx Query]` <br> Example: `0SD_C03_Q0018`   |
| **Lookup syntax for InfoProviders:** <br>`$[tech. name of InfoProvoider]`  <br /> Example: `$0SD_C03`                                  | **Lookup syntax for InfoProviders:** <br>`[tech. name of InfoProvider]` <br> Example: `0SD_C03`      |
| **Wildcards in lookup:** <br>The BEx-Query setting [Allow External Access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries) is required. <br> Example: `*0SD_C03_Q0018` instead of `0SD_C03/0SD_C03_Q0018`   | **Wildcards in lookup:** <br>not required and therefore not supported           |
| **Supported InfoProviders:** <br>  InfoCubes, Multiproviders, Composite Providers   | **Supported InfoProviders:** <br> InfoCubes, MuliProviders, Composite Providers, DSOs |
| **Column names of Key figures:** <br>EnterpriseID    | **Column names of Key figures:** <br>Technical name<br> If techn. name is empty: name of the base measure.  <br> If name of the base measure is empty: EnterpriseID. <br>**Tip:** In case of duplicate names, change the technical name in the BEx Query Designer. |
| **Character limit for dimension members:** <br>max. 60 characters      | **Character limit for dimension members:** <br>-      |
