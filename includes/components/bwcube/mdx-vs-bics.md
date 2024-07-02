
### MDX versus BICS

The {{ bwcube }} {{ component }} can extract data using the OLAP BAPI Interface (MDX) or the native BICs interface.
The following table shows the differences between the two extractors:

|                                    | MDX                                                                                         | BICS                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax in lookup for BEx Queries   | `[tech. name of InfoPovider]/[tech. name of BEx Query]` <br /> example: 0SD_C03/0SD_C03_Q0018        | `[tech. name of BEx Query]` <br /> example: 0SD_C03_Q0018   |
| Syntax in lookup for InfoProivders | `$[tech. name of InfoProvoider]`  <br /> example: $0SD_C03                                            | `[tech. name of InfoProvider]` <br /> example: 0SD_C03      |
| Wildcards in lookup                | The BEx-Query setting [Allow External Access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries) is required. <br /> example: *0SD_C03_Q0018 instead of 0SD_C03/0SD_C03_Q0018                          | not required and therefore not supported           |
| Supported InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |
| Column names of Key figures           | EnterpriseID                                              | Technical name<br> - If techn. name is empty: name of the base measure.  <br> - If name of the base measure is empty: EnterpriseID. <br>**Tip:** In case of duplicate names, change the technical name in the BEx Query Designer. |
| Character limit for dimension members | max. 60 characters      | -      |
