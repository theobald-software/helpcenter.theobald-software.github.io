---
title: Data Type Mapping
description: Appendix
---


The following table shows the data type mapping between ABAP / RFC and .NET.

| ABAP       | ABAP Dictionary                    | ERPConnect      | .NET           | Remarks                                   |
|------------|------------------------------------|-----------------|----------------|-------------------------------------------|
| b          | INT1                               | RFCTYPE INT1    | System Byte    |                                           |
| s          | INT2, PREC                         | RFCTYPE INT2    | System Int16   |                                           |
| i          | INT4                               | RFCTYPE INT     | System Int32   |                                           |
| p          | DEC, CURR, QUAN                    | RFCTYPE BCD     | System Decimal | Max. supported length is 28 digits        |
| decfloat16 | DF16_DEC, DF16_RAW, DF16_SCL       | RFCTYPE BYTE    | System Byte[]  | No ReadTable support                      |
| decfloat34 | DF34_DEC, DF34_RAW, DF34_SCL       | RFCTYPE BYTE    | System Byte[]  | No ReadTable support                      |
| f          | FLTP                               | RFCTYPE FLOAT   | System Double  |                                           |
| c          | CUKY, UNIT, CHAR, LCHR, CLNT, LANG | RFCTYPE CHAR    | System String  |                                           |
| string     | STRING                             | RFCTYPE STRING  | System String  | No ReadTable support                      |
| n          | NUMC, ACCP                         | RFCTYPE NUM     | System String  | Only characters 0_9 ACCP format is YYYYMM |
| d          | DATS                               | RFCTYPE DATE    | System String  | Format is YYYYMM                          |
| t          | TIMS                               | RFCTYPE TIME    | System String  | Format is HHMMSS                          |
| x          | RAW, LRAW                          | RFCTYPE BYTE    | System Byte[]  |                                           |
| xstring    | RAWSTRING                          | RFCTYPE XSTRING | System Byte[]  | No ReadTable support                      |


