
Namespace: [ERPConnect](index.md)  
Assembly: ERPConnect35.dll  

```csharp
public enum AbapType
```

## Fields

`ByteSequence = 6` 

Uninterpreted byte sequence, 1 - 65,535 bytes (ABAP type x, DDIC type RAW, LRAW)



`ByteSequenceOfVariableLength = 12` 

Uninterpreted byte sequence, variable length (ABAP type xstring, DDIC type RAWSTRING)



`CharacterString = 7` 

Character string, 1 - 65,535 characters (ABAP type c, DDIC type CHAR, LCHAR)



`CharacterStringOfVariableLength = 13` 

Character string, variable length (ABAP type string, DDIC type STRING, SSTRING)



`Date = 9` 

Date field (yyyyMMdd), 8 characters (ABAP type d, DDIC type DATS, DATN)
Uses Julian calendar for dates before 1582-10-15.



`DecimalFloatingPoint16 = 14` 

Decimal floating point number with 16 places
(ABAP type decfloat16, DDIC type DECFLOAT16, DF16_DEC, DF16_RAW)



`DecimalFloatingPoint34 = 15` 

Decimal floating point number with 34 places
(ABAP type decfloat34, DDIC type DECFLOAT34, DF34_DEC, DF34_RAW)



`DecimalTimeStampSeconds = 17` 

Timestamp accurate to seconds, stored as <xref href="ERPConnect.AbapType.PackedNumber" data-throw-if-not-resolved="false"></xref>, 15 digits, 0 decimals
(DDIC data element TIMESTAMP).
Uses Julian calendar for dates before 1582-10-15.



`DecimalTimeStampTicks = 18` 

Timestamp accurate to ticks (100 nanoseconds), stored as <xref href="ERPConnect.AbapType.PackedNumber" data-throw-if-not-resolved="false"></xref>, 21 digits, 7 decimals
(DDIC data element TIMESTAMPL).
Uses Julian calendar for dates before 1582-10-15.



`EightByteInteger = 4` 

Signed integer, 8 bytes (ABAP type int8, DDIC type INT8)



`FloatingPoint = 5` 

Floating point number, 8 bytes (ABAP type f, DDIC type FLTP)



`FourByteInteger = 3` 

Signed integer, 4 bytes (ABAP type i, DDIC type INT4)



`GeometryEwkb = 20` 

Geometric data in extended well-known binary representation (DDIC type GEOM_EWKB).



`NativeTimeStamp = 16` 

Timestamp accurate to ticks (100 nanoseconds), internally stored as <xref href="ERPConnect.AbapType.EightByteInteger" data-throw-if-not-resolved="false"></xref>
(ABAP type utclong, DDIC type UTCLONG).
Uses Julian calendar for dates before 1582-10-15.



`None = 0` 

ABAP type undefined



`NumericCharacterString = 8` 

Character string (only digits), 1 - 65,535 characters (ABAP type n, DDIC type NUMC)



`OneByteInteger = 1` 

Unsigned integer, 1 byte (ABAP type b, DDIC type INT1)



`PackedNumber = 11` 

Packed number (decimal representation), 1 - 16 bytes (ABAP type p, DDIC type DEC, QUAN, CURR)



`PostingPeriod = 19` 

Posting period (yyyyMM), 6 characters (ABAP type n, DDIC type ACCP).



`Time = 10` 

Time field (HHmmss), 6 characters (ABAP type t, DDIC type TIMS, TIMN)



`TwoByteInteger = 2` 

Signed integer, 2 bytes (ABAP type s, DDIC type INT2)



