---
title: Spelling and Grammar
---
Spelling refers to the correct arrangement of letters in a word, while grammar refers to the rules and structure of a language, including the correct arrangement of words in a sentence and the proper use of punctuation. Spelling and grammar are important for effective communication and understanding in written language.

For reference you can use the spelling dictionary [Merriam Webster](https://www.merriam-webster.com). The preferable English for Theobald Software products is US English.
The User Interface Style Guide of Theobald Software also deals with cases that require a more detailed explanation than one can find in a spelling dictionary.

### Present Tense

Use present tense for general statements about behavior that are not tied to a specific time.

| Recommended | Not recommended | 
| :------ |:--- |
|If parameters are selected for Output, the values **are** included in the response body of the service.| If parameters are selected for Output, their values **will be** included in the result of the service |
|The service name is a unique identifier for the service and **is** included in the URL of the service.|The service name is the unique identifier of this service and **will be** part of the service's URL. |
|Report doesn't have any columns or columns **are** not yet detected.|The report doesn't have any columns or columns **were** not yet detected.|

#### Should / Would / Have to

Recommendation: avoid.

["Should"](https://developers.google.com/style/word-list#should) is unclear and can be an issue. For instance, if you're guiding the reader, "should" suggests a recommended but optional action, creating uncertainty. Be clear: decide if actions are necessary or optional, outcomes expected or possible, and states actual or recommended.

| Recommended | Not recommended | 
| :------ |:--- |
| Select the columns to include in the output of the service. |Select the columns that **should be** included in the output of the service.|
| Password must consist 8 characters or more. | The password has to be at least 8 characters long.|
|Navigate through the transaction as if it was SAP GUI.|Navigate through the transaction like you would in SAP GUI. |


"Must" is acceptable, when something will not function otherwise.

### Active Voice
When you're writing, it's usually better to use active voice instead of passive voice. Active voice makes it clear who is doing the action in a sentence. Passive voice can sometimes make it confusing to know who is supposed to do something. For example, it might be unclear if it's the reader, the computer, the server, a user, or a visitor to a website. So, it's generally a good idea to use active voice to make your writing clearer.

!!! tip 
	Here is an article on distinguishing active and passive voice: [Active vs. Passive Voice: What's The Difference?](https://www.merriam-webster.com/grammar/active-vs-passive-voice-difference).


| Recommended | Not recommended | 
| :------ |:--- |
| Define the endpoint of User Interface web services. | Define how the User Interface web services can be reached. | 
| Restart the User Interface service, when transitioning to this option or modifying the connection string.| Restarting the yunIO service is required when you are switching to this option or changing the connection string.|
|Restart the yunIO service, when transitioning to this option or modifying the connection string.|Restarting the yunIO service is required when you are switching to this option or changing the connection string.|

Appeal to the reader using active and direct language. 

| Recommended | Not recommended | 
| :------ |:--- |
|To display a certificate here, add it to the "Local Computer" certificates in the "Personal" store on the yunIO server. Make sure to set "subjectAltName".|For a certificate to appear here, it must be added to the Local Computer certificates in the Personal store on the yunIO server, and must have subjectAltName set.|
|View current license details.|Here you can see details of the currently installed license.|

Avoid "need" and try to always use the active form of the verb.

| Recommended | Not recommended | 
| :------ |:--- |
|To disable anonymous access, set up functioning TLS in **Settings**. At least one user needs to exist. | To disable anonymous access, you need to set up TLS in Settings and make sure that it's working. Go to Users and make sure that at least one user exists.|

#### Exceptions

Passive can be used in the following instances:

To emphasize an object over an action.
**Recommended:** Access to this yunIO server is restricted. 

To de-emphasize a subject or actor.
**Recommended:** The service port settings are adopted.

| Recommended | Not recommended | 
| :------ |:--- |
|If TLS is enabled, yunIO uses the first Subject Alternative Name of the certificate.|If TLS is enabled below, the first Subject Alternative Name of the certificate will be used.|

### Capitalization
Avoid unnecessary capitalization. Only capitalize words when necessary and consider why it needs to be capitalized. Do not rely on capitalization to convey meaning, as it can be confusing for readers. Avoid using camel case ([CamelCase](https://en.wikipedia.org/wiki/Camel_case)), unless it is an official name or referencing code that uses camel case e.g., WebSockets.

Use capital letters in the following ways:
- Trademarks (Microsoft, Swagger)
- The first words of a sentence
- Nouns in headings


| Recommended | Not recommended | 
| :------ |:--- |
|Select a license file to upload.| Choose a License file to upload.|
|Edit general settings | Edit General settings|
|Transport Layer Security (Heading) | transport layer security |

### Punctuation	
#### Periods
End complete sentences with a period. Phrases that are not full sentences don't need periods. 
Don't end headings with periods.

#### Periods in Lists
End each [list](text-constructing.md#list) item with a period or other appropriate sentence-ending punctuation, except in the following cases:

No end punctuation:

- If the item consists of a single word
- If the item doesn't include a verb
- If the item is entirely in code font
- If the item is entirely link text or a document title

#### Commas
Use commas to separate items in a series, and use commas to separate certain kinds of clauses.
In a series of three or more items, use a comma before the final and or to avoid potentially changing the meaning of the sentence. This comma is called a serial comma or an Oxford comma.

| Recommended | Not recommended | 
| :------ |:--- |
|yunIO is a no-code application for designing, automating, and integrating SAP processes in the cloud.| yunIO is a no-code application for designing, automating and integrating SAP processes in the cloud.|

#### Semicolons
If possible, avoid using semicolons. Otherwise, when joining two closely related independent clauses where a period or a comma is not as effective.

