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
|- |:white_check_mark: Both values are readable in the connection string. <br> :x: Both values would be readable in the connection string.|
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
|Use the noun and not a pronoun to avoid ambiguity and unclear sentences.|:white_check_mark: To create new columns, use the report column editor at the bottom of the window “XYZ” and the table in the section “Report columns”. The following parameters can be defined for the new columns: name, offset and length. <br> :x: Use the report column editor at the bottom and the table on the upper right to define new columns. A column is defined by its* name, offset and length. <br> * It could maybe also be understood as “report column editor”.|
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

|Instruction|Example|  
|----------|-------------|
|Use known abbreviations. Known abbreviations are e.g., min/max, min (for minutes), PC etc. Avoid company’s own abbreviations.|:white_check_mark: Closing Alteryx Designer during the installation of Xtract for Alteryx ensures that all components are correctly displayed in your Alteryx Designer after the restart. <br>  :x: This procedure ensures that the *XfA* components are available and can be displayed in the Alteryx Designer.|
|When shortening the words, be consistent.|:white_check_mark: Param. is always used for parameter. <br> :x: Para and param are both used for parameter.|
|Use contractions “don’t”, “doesn’t”, “can’t”. Avoid contractions formed from nouns and verbs.|:white_check_mark: The browser is fast, simple, and secure<br> :x: The *browser’s* fast, simple, and secure.|

### Cross-references
Cross-references guide the user to additional information that helps him to understand the text or to perform the task.

|Instruction|Example|  
|----------|-------------|
|Use meaningful link text. |:white_check_mark:Set the preferred security level with the property Quality Of Protection. For more information, see [Secure Network Communications (SNC)](https://help.sap.com/docs/SAP_NETWEAVER_701/6f3e0bea6c4b101484fcf5305b4d624b/e656f466e99a11d1a5b00000e835363f.html?version=7.01.22). <br> :x: The preferred security level can be set with the property Quality Of Protection. More details can be found here: http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm.|
|Do not use full URLs, phrases such as “click this link”, “here”, “this chapter” etc.|:white_check_mark: To [disable the standard mode](https://help.qlik.com/en-US/sense/2.2/Subsystems/Hub/Content/LoadData/disable-standard-mode.htm), follow the steps described in the Qlik help.<br> :x: Do a search for ‘Disabling standard mode’ or check the following [link](https://help.qlik.com/en-US/sense/2.2/Subsystems/Hub/Content/LoadData/disable-standard-mode.htm).|
|Give a short explanation, if the reason for the link is not obvious|:white_check_mark: See also the knowledge base article on [how to insert extraction events into the windows logs](#link).<br> :x: See also <br> [How to insert Xtract Universal Extraction Events into the windows logs and show them in the Event Viewer (English)](#link)|

### Capitalization
Make sure to use standard American capitalization and do not confuse it with German.

|Example||  
|----------|-------------|
|:white_check_mark: |To set a filter, see the section “Datasource parameters”.|
|:x:|To set a *Filter* see the section Datasource parameters.|

Do not use capitalization to emphasize a word. Do not use all caps, only if it’s e.g., a name in GUI or a given name (e.g., 0D_MATERIAL).

|Example||  
|----------|-------------|
|:white_check_mark: |Note: <br> For extractions created with an Xtract Universal version from February 2015 or earlier, check the flag legacy metadata retrieval in the extraction settings.|
|:x:|**ATTENTION:** For extractions that were created with an Xtract Universal version from February 2015 or earlier, please check the flag Legacy metadata retrieval in the Extraction Settings.|

Use capitalization in all types of lists and tables (contents, headings, labels, and captions).

## Punctuation
Punctuation means the use of special symbols that you add to writing to separate phrases and sentences to show that something is a question, etc. The most common punctuation marks in English are: capital letters and full stops, question marks, commas, colons and semi-colons, exclamation marks and quotation marks.

### Text body – normal text
#### Commas
Use commas to separate items in series and use commas to separate certain kinds of clauses.
When a conjunction (and, but, or, nor, for, so, or yet) separates two independent clauses (sentence within a sentence), insert a comma after the first clause (before the conjunction) unless both clauses are very short.

|Example||  
|----------|-------------|
|:white_check_mark: |Values between 10,000 and 100,000 are useful, but only if the data volume is large enough.|
|:x:|ERPConnect Services Runtime (ECSR) offers the following authentication options for the SAP connection, that are available while creating the ECS Service Application:|

In general, put a comma before the word “which” at the start of a nonrestrictive clause, but don’t use any commas before “that”. Use a comma after “e.g.,”.
#### Semicolons
Use a semicolon between two closely related independent clauses that are too related for a full stop (period), but where a comma isn’t enough.

|Example||  
|----------|-------------|
|:white_check_mark: |The URL from which a video ad loads; that is, the URL to use to fetch that video ad.|

### Lists
As in regular text, it is important to punctuate lists correctly. If the list is made up of phrases, capitalize the first word of each list item. Do not end each list item with a comma or full-stop (period).

=== "List with items"

	
	<div class="result" markdown>

    The new Skoda Fabia has the following benefits:

	- Greater fuel efficiency
    - Expanded head room
    - Expanded rear leg room

    When items are complete sentences, begin with a capital and end with a period.

	</div>	

=== "List with sentences"

	
	<div class="result" markdown>

    The new Skoda Fabia has the following benefits:

	- The fuel efficiency is greater.
    - There is more head room.
    - There is increased rear leg room.

	List items are sometimes an initial phrase followed by a complete sentence. In that case, use capital letters and full stops (periods) for the phrases as well as the complete sentences.

	</div>	


### Numbers

Use commas and decimal points in accordance with standard American number-formatting. Make sure not to confuse with the German number-formatting rules.

|Example||  
|----------|-------------|
|:white_check_mark: |The limit is 1,532,784 bytes per day.|
|:x:| The limit is 1.532.784 bytes per day.|

## Standard Sentences
- The window “XYZ name of the window” opens… e.g., The window “Settings” opens.
- Click [OK] – not click on OK.
- In this page, see section… - for linking within a document.