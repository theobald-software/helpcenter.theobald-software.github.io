---
title: Tables
description: Reading SAP Tables Directly with ReadTable
---

This section shows how to use the *ReadTable* class.<br>
A recurrent task when working with SAP and .NET applications is to read directly from tables of the SAP system. 
The *ReadTable* class enables access to that data.

!!! note
    The *RFC_READ_TABLE* function module for table extractions is not suitable for mass data extraction, see [Restrictions](#restrictions).


### Restrictions

When extracting tables from older SAP releases you may encounter several restrictions when using the SAP standard function module (RFC_READ_TABLE):

- The overall length of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

!!! warning "Warning! Error while converting value '\*.0' of row 1530, column 3"
    The SAP standard module *RFC_READ_TABLE* for table extraction can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction.<br>

