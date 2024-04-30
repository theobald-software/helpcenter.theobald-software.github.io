---
title: User Documentation Style Guide
---

## General
### About User Documentation Style Guide (UDSG)
The User Documentation Style Guide (Version 2.0) of Theobald Software provides a set of guidelines for writing documentation pages as in help content and knowledge base articles for all Theobald Software products. The guidelines are not binding rules that must be applied in every case. However, it is recommended to follow the UDSG to improve the quality of the textual and language content of the user documentation in terms of consistency and correctness.
The UDSG of Theobald Software should be used as a reference containing the most important recommendations. The provided cheat sheet is a short collection of the most important Style Guide items. More information can be found in the Google Developer Documentation Style Guide. The UDSG of Theobald Software is loosely based on Google Developer Style Guide and is a living document and can be changed and improved over time. Some of the guidelines collected in the Style Guide do not comply with the Google Style guide as Theobald Software products have needs that are not covered by Google.

### Scope
The User Documentation Style Guide of Theobald Software applies to the creation of content for the documentation pages and knowledge base articles of Theobald Software.
Other publications such as blog articles or any marketing publication do not have to comply with the Style Guide.
The UDSG of Theobald Software addresses the following topics:

- Style and choice of words
- Spelling and grammar
- Punctuation
- Standard phrases (growing)

Any information on formatting of the documents is not part of the Style Guide. To address formatting Theobald Software created a document template.

### How to use the User Documentation Style Guide
It is advisable to read all dedicated pages at least once and then use it as a reference and search for an item, if needed. 
Ground rules for using the Documentation Style Guide of Theobald Software:

- Always use the latest version of the Style Guide
- Discuss any deviations from the Style Guide with responsible colleagues
- Ideas, changes and extensions are welcome and should be added to the Style Guide in cooperation with a technical writer

## Style
When creating content style can be defined as the *way the author writes the texts*. In the context of the user assistance content of Theobald Software the following aspects are considered: tone, word choice, comprehensibility and simplicity. When writing for audiences that include non-native English speakers, it is important to write simple, straightforward sentences and avoid informal and spoken language expressions.
The style guidelines are based on the rules of the Chicago Manual of Style. The Chicago Manual of Style (abbreviated in writing as CMS or CMOS, or verbally as Chicago) is a Style Guide for American English published since 1906 by the University of Chicago Press. In the United States, it is the most widely used Style Guide for non-journalistic content that is to use when resolving doubts and issues concerning style.

### Tone
Tone is the narrative attitude towards the conveyed information being told. In non-technical texts examples for tone can be the following: irony, humor, sympathy or emotion, etc.
For technical user documentation the tone must be neutral and without any evaluation (e.g., “the option XYZ is the **best**” is evaluating). It is important not to try to influence the reader as it is common for marketing texts.

#### Examples

|Instruction|Example|  
|----------|-------------|
| Friendly and respectful but avoid “please” as it is unnecessary.|:white_check_mark: To see the details of the license, navigate to the menu bar of the designer and select **[Help > Info]**.  <br> :x: To see the details of the license, please go to *Help -> Info.* |
|Avoid colloquial expressions & slang| :white_check_mark: The following section contains answers to frequently asked questions about LINQ to SAP. <br> :x: Before we delve deeper into LINQ to SAP in this chapter, let’s first have a look at some answers to a few important questions that some readers might be dying to ask.|
|Don’t write exactly the way you speak| :white_check_mark: The following section is about inserting JavaScript code for calling the SAP function module.<br> :x: Now let’s take a look at the step with JavaScript code for calling the SAP function module.|
|Don’t try to be funny|:white_check_mark: The final formatting and design adaptation can be performed in later interactions. <br> :x: They shouldn’t think about details such as whether the data is exactly formatted correctly or if the design is cool enough - these touches can be finished in later interactions (you put the hood on after you get the engine running, right?) (source: Microsoft Business Intelligence For Dummies)|
|Avoid judgements | :white_check_mark: Tables can be comfortably further processed or linked to a control element. <br> :x: They [tables] can therefore be *very easily* further processed or linked to a control element.|
|Avoid placeholder phrases & useless words|:white_check_mark: Download a trial version from the Theobald Software website and try out [Product Name] using your systems and scenarios. **Recommendation:** To avoid possible restrictions, install the Theobald Software custom function module for table extraction. <br> :x: Of course, you can download a demo version from our website and try it by yourself. <br> :x: In order to avoid possible restrictions with table extractions we recommend installation of our custom function module for table extraction.|
|Use exclamation rarely|:white_check_mark: The following sections assumes basic knowledge of Xtract Universal. <br> :x: For this chapter the knowledge about the basic usage of Xtract Universal is **assumed**!|
|Avoid “let’s… + verb”|:white_check_mark: The following example shows how to edit to extracted data. The field name2 is updated with the value *Hamburg*. <br> :x:*Let's* make some changes to the extracted data. We will update the field name2 with the value ‘Hamburg’.|

### Choice of words
The choice of words is a very important part of any communication. Each author should try to use correct and precise words to convey the correct message. Incorrect word choice leads to misunderstandings among the audience. In technical user documentation it is not advisable to use synonyms – it is against the goal of consistent terminology. The following list of examples depicts the main principles of correct choice of words when creating documentation for users.
Other examples: email vs. e-mail, address vs. adress, definite vs. definet.

#### Examples

|Instruction|Example|  
|----------|-------------|
|Use simple words that are easy to understand. |:white_check_mark: In the following example the already existing Secure Store Service Application is used to enable the individual SAP access.  <br> :x: In the following steps, we will *utilize* an already existing Secure Store Service Application. <br> #link|
|Choose consistent words. Always use the same name for the same thing. Avoid synonyms. |:white_check_mark: Use words consistently “dialog” and “window” and do not interchange them. Decide to only use one version: <br>  :x:: <br> <code>&nbsp;</code> a) When you click on the run *Dialog*, the Extraction Parameters tab offers the following parameters that can be overwritten. <br> <code>&nbsp;</code> b) If a destination of type “Qlik” is assigned to an extraction and when clicking on the Run button a button labeled Generate Qlik Script will be available in the pop up *window*. <br> <code>&nbsp;</code> c) Below the Operations *window*, select the New button. |
|Use consistent spelling|:white_check_mark: Use the same spelling – US EN; check the capitalization. <br> :x:: <br> <code>&nbsp;</code> 1. Double-click the icon to launch the editor. Click the binocular button to open up the search *dialogue* as shown below. <br> <code>&nbsp;</code> 2. When you click on the run *Dialog*, the Extraction Parameters tab offers the following parameters that can be overwritten.|

### Word List
Check the [Google Developer’s Guide](https://developers.google.com/style/word-list#tldr) for more information. Be aware that some of the recommendations in the following list vary from the Google Developer’s guide.

|WORD|Explanation|  
|----------|-------------|
|but|Use the word “but” carefully. Many sentences within the user assistance content that contain the word “but” are grammatically questionable.|
|chapter|When referring to documentation that isn’t in the form of a book, don’t use the term chapter. Instead, refer to documents, pages, or sections.|
|||

### Simplicity – easy-to-read content
When writing information for users it is important to produce easy-to-read texts. The concept of “easy-to-read” is not universal and it will not be possible to write a text that will suit every reader. Easy-to-read content is generally characterized by:
- The use of a simple, straightforward language
- Only one main idea per sentence
- No usage of abbreviations that were not introduced or not well-known (e.g., XU vs. PC)
- Clear and logical structure

The way a document is structured is very important. The contents should follow a clear and logical sequence. All unnecessary ideas, words, sentences or phrases should be avoided or removed. Complex concepts should be illustrated with concrete examples. Writing in a simple, straightforward language does not mean writing in a childish or simplistic manner. The widest possible audience in terms of customers should be able to understand easy-to-read content.
Even if you do feel comfortable with more complex vocabulary, use the simpler synonym if that has the same meaning.

|Instruction|Example|  
|----------|-------------|
|Use a simpler synonym. |:white_check_mark: XYZ improved the situation. <br> :x: XYZ *ameliorated* the situation.|

Make sure to use words you are familiar with. Words often have connotations and nuances of meaning that you can correctly use only after having seen them in context, so there is a great risk to write incorrect content that can also be more difficult to translate into further languages.
Easy-to read content is automatically easier to translate and localize into other languages.

#### Examples

|Instruction|Example|  
|----------|-------------|
|Use positive formulations |:white_check_mark: Map the list field **Customer Name** as an import parameter to the request body. <br> :x: *Don’t forget* to map list field Customer Name as an import parameter to the request body.|
|Use positive verbs|:white_check_mark: If you have any further questions, contact us via phone or email. <br> :x: If you have any further questions, please don’t *hesitate* to contact us via phone or mail.|
|Write in short sentences. Avoid sentences longer than 25 words.|:white_check_mark: After the installation Xtract for Alteryx components are available in the separate tab in the toolbox within Alteryx designer. Use drag and drop to use the Xtract for Alteryx components in your workflow. <br> :x: If you start Alteryx after installation, the XfA components are available in a separate tab in the toolbox within the Alteryx UI and can be dragged and dropped onto the workflow as usual|
|Avoid filler words that don’t have an explicit meaning (“in order to”, “however” etc.). The argument “it is nicer to read” does not apply in technical user documentation.|:white_check_mark: librfc32 is discontinued by SAP and is officially no longer supported. Based on experience, librfc32 is a more stable library that uses less resources than [...]. <br> :x: librfc32 has been discontinued by SAP and is officially no longer supported. *However*, it is more stable and uses less resources than the Netweaver library recommended by SAP.|
|Avoid nested sentences – better split into several sentences. |:white_check_mark: In Nintex Forms it is possible to add JavaScript statements, which enable the integration of the ECS Runtime JavaScript library and can be used to access SAP data. <br> :x: In Nintex Forms the adding of JavaSript code is possible which enables the calling of the ECS Runtime JavaScript library and to use it for accessing SAP data.|


## Spelling and Grammar

Write English and foreign-language words using US and not UK spelling. For reference you can use the spelling dictionary [Merriam Webster](https://www.merriam-webster.com/).
The User Documentation Style Guide also deals with cases that require a more detailed explanation than in the spelling dictionary.

### Present Tense 
Users read documentation to perform tasks or gather information. For users, these activities take place in their present, so the present tense is appropriate in most cases. Additionally, the present tense is easier to read than the past or future tense.

Use the future tense only when you need to emphasize that something will occur later (from the users’ perspective).

#### Examples

|Instruction|Example|  
|----------|-------------|
|Use present tense and avoid “will/would future”. |:white_check_mark: Xtract Universal is installed along with a trial license. <br> :x: Xtract Universal *will* be installed along with a trial license.|
|- |:white_check_mark:Both values are readable in the connection string. <br> :x: Both values would be readable in the connection string.|
|Avoid perfect (have done, had done etc.) and continuous (is doing, was doing).|:white_check_mark: Only changes from last transfer are extracted. <br> :x: Then, only the changes will be extracted which have been made since the last transfer. |

### Active Voice
Use active voice preferably, when possible. This way it is clearer who is acting (the reader, the computer, the server, an end user etc.).

|Instruction|Example|  
|----------|-------------|
|Use active voice|:white_check_mark: Send a query to the service. The server sends an acknowledgment. <br> :x: The service is queried, and an acknowledgment is sent.
The service is queried by you, and an acknowledgment is sent by the server.|

There are exceptions to using of active voice that are legitimate, see the following section.

### Passive Voice Exceptions
#### Examples
|Instruction|Example|  
|----------|-------------|
|To emphasize an object over an action.|:white_check_mark: The report is executed in batch mode. |
|To de-emphasize a subject or actor. |:white_check_mark: Application examples can be found in the section Parameter Mapping.|
|If the readers don’t need to know who’s responsible for the action. |:white_check_mark: If an ID is logged, you can be sure that the purchase requisition was created in SAP.|

### Pronouns – “you”, “we”, “us”, “this”, “that” etc.
Users are more engaged with documentation when you use second person (that is, you address the user as “you”).
Using second person “you” is recommended. Avoid using first person “we” or “I” at all times. Also avoid possessive pronouns such as “our”, “us” and other derivations from the first person.

|Instruction|Example|  
|----------|-------------|
|Use you, avoid “we” or “I”, “our”, “us”|:white_check_mark: To avoid possible restrictions, install the Theobald Software custom function module for table extraction. <br> :x: In order to avoid possible restrictions with table extractions we recommend installation of our custom function module for table extraction. |
|Use the noun and not a pronoun to avoid ambiguity and unclear sentences.|:white_check_mark: To create new columns, use the report column editor at the bottom of the window “XYZ” and the table in the section “Report columns”. The following parameters can be defined for the new columns: name, offset and length. <br> :x: Use the report column editor at the bottom and the table on the upper right to define new columns. A column is defined by its* name, offset and length. <br>
*It could maybe also be understood as “report column editor”.|
|Avoid demonstrative pronouns such as "this", "these", "those" |:white_check_mark: Background processing is an obsolete function. Use the Z_XTRACT_IS_TABLE_COMPRESSION module instead. <br> :x: *This* function module is obsolete. Please use instead the function module Z_XTRACT_IS_TABLE_COMPRESSION. |
|It is always better to state the noun. Where possible, put a noun after this or that for clarity. If doing so results in clunky text, rephrase the text. Generally, try thinking about what the noun would be. Avoid using possessive pronouns such as their, his, her etc. |:white_check_mark: Within the “Execute Function Activity Dialog” there are sections **IMPORTS**, **EXPORTS**, **TABLES**. The sections contain the input and the output parameters and the respective mappings. <br> :x: Below the name are the IMPORTS, EXPORTS, TABLES and Output parameters of the function module, with *their* mappings. |

### Clause Order
When writing English texts, generally avoid direct translation from German into English. Most of the times German syntax (order of words in a sentence) is very different to the English.

|Instruction|Example|  
|----------|-------------|
|Avoid German syntax |:white_check_mark: The debug logging should usually be activated upon request of the support team. <br> :x: Please note that the debug logging *usually* should be activated by request of the support team.|
|Put conditional clauses i.e. actual information before instructions. |:white_check_mark: To run an extraction, click **[Run]**. <br> :x: Click **[Run]** if you want to run an extraction. |
|Use correct English grammar (e.g., do not write “will” after if). Generally, try to avoid “will”. |:white_check_mark: If you buy the software, you get a new license key. <br> :x: If you buy the software you *will* get a new license key. |

### Modal auxiliary verbs – “can”, “must” etc.
Modal auxiliary verbs, such as “must, can, need, shall, should, may, will” have a special and differentiated meaning in English.
When writing procedures, try to use the non-modal verb, when possible (e.g., <del>You have to </del> create the connection before running an extraction).

|Verb|Meaning|Example|Usage|  
|----------|-------------|-----|----|
|Must| “Must” and “must not”are words of obligation. The obligation comes from the user, e.g., if he wants to perform a task, he must do xyz. Failing to obey an instruction with a “must” will definitely lead to a problem.| A scripted expression has a C#.NET similar syntax and must start with #{ and end with #}. <br> (Otherwise it will not work) | For important commandments and prohibitions <br> Better option: <br> have to or need| 
|Have to |“Have to” is a less strong obligation that comes outside the user’s power e.g., if he wants to perform a task, but there is an outer requirement. Failing to obey an instruction with a “have to” might stop a function. |The following settings have to be defined to use the Salesforce destination. <br> (It is a condition that comes outside the power of the user). |For common obligations|
|Need |Need expresses a requirement and a necessity. |To use ERPConnect you need also the following SAP libraries. |For common obligations|
|Should|Advice or recommendation, see also [Google Developer’s guide](https://developers.google.com/style/word-list#letter-s).|In an environment with a multiple users access to the same repository, you <del>should</del> need to run the Server as a Windows Service on a central server. <br> You <del>should</del> can download the latest version from the software vendor’s website.| Avoid, as it is not precise. <br> Better option: <br> Can, need|
|Can| To convey permission or to state a probable possibility. Advice for an alternative|ODP can be used to extract data from Business Content DataSource (Extractors).|Use when something can occur|
|Could| Probable possibility, more polite than can.| If some components <del>could not</del> cannot be acquired and installed automatically, they appear on the “Prerequisites” screen.|Avoid, as it is not precise. <br> Better option: <br> Can|
|May|Used for official policy or legal considerations. To convey possibility, use might instead. To convey permission, use can instead.|Depending on the SAP version there <del>may</del> can be other restrictions.|Avoid. <br> Better option: <br> Can|
|Might|To convey possibility, but less probable than may|The startup process of the IR might can take 20 to 30 minutes. <br> Otherwise you <del>might</del> have gaps in your data.| Use in warnings or “an error might occur”, otherwise use "can"|

### Abbreviations and contractions
Abbreviations include acronyms, initialisms, shortened words, and contractions. Some words have a long version and a short version: demonstration and demo, application and app etc.


||:white_check_mark: |
