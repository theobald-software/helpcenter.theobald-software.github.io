---
title: SAP BW
description: BW Cubes/Queries
---

The following section contains information on how to extract data from a Business Warehouse (BW) system. 

The *BW* class was developed to extract data from SAP BW InfoCubes and QueryCubes (also known as BEx Queries).
A common approach for using the *BW* class is to build and extract a BEx query that meets your business requirements.

!!! note
    This section refers to BW Queries, for information on queries created by the SAP transactions **SQ02** and **SQ01**, see [SAP Query](../queries/index.md).

### About BEx Queries and InfoCubes
 
BEx queries filter data to create reporting objects or views called InfoProviders for analyzing purposes. 
One type of InfoProviders are InfoCubes.

InfoCubes are multidimensional datasets that are used to store data e.g., characteristics (dimensions), key figures (measures or facts), units, time characteristics, 
or technical characteristics.<br>
You can add data from one or more InfoSource or InfoProviders to an InfoCube. 

