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
|Use positive formulations. |:white_check_mark: Map the list field **Customer Name** as an import parameter to the request body. <br> :x:|
||:white_check_mark: <br> :x:|
||:white_check_mark: <br> :x:|