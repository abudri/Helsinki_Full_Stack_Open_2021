# [Part 0](https://fullstackopen.com/en/part0)

<img src="https://user-images.githubusercontent.com/17362519/112181241-a2767f80-8bd2-11eb-87be-11f4569550ad.png" width="850;" />

## Table of Contents

* Manipulating the document-object from the console
* [Glossary](https://github.com/abudri/Helsinki_Full_Stack_Open_2021/blob/main/part0/NOTES.md#glossary)

## **[Manipulating the document-object from console](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#manipulating-the-document-object-from-console)**

The topmost node of the DOM tree of an HTML document is called the *document* object. We can perform various operations on a web-page using the DOM-API. You can access the *document* object by typing *document* into the Console-tab:

<img src="https://fullstackopen.com/static/ac9364f4d597d187d271a1628a332e7d/5a190/15e.png" width="650;" />

Let's add a new note to the page from the console.

First, we'll get the list of notes from the page. The list is in the first ul-element of the page:

`list = document.getElementsByTagName('ul')[0]`

Then create a new li-element and add some text content to it:

`newElement = document.createElement('li')
newElement.textContent = 'Page manipulation from console is easy'`

And add the new li-element to the list:

`list.appendChild(newElement)`

<img src="https://fullstackopen.com/static/5971f5573de2bc91961f679e27430097/5a190/16e.png" width="650;" />

Even though the page updates on your browser, the changes are not permanent. If the page is reloaded, the new note will disappear, because the changes were not pushed to the server. The JavaScript code the browser fetches will always create the list of notes based on JSON-data from the address [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json).

**My change to a page:**

<img src="https://user-images.githubusercontent.com/17362519/112225827-c1d9d080-8c03-11eb-9219-5c54c25ebf8f.png" width="750;" />

____

## Glossary

**Runtime Environment -** the ****browser**.**  [Reference](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions) (Part 0b)

**Document** **Object** **Model** - or [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) is an Application Programming Interface, (an API), which enables programmatic modification of the element trees corresponding to web-pages. The JavaScript code introduced in the previous chapter used the DOM-API to add a list of notes to the page. [Reference](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions) (Part 0b)

`document` - The topmost node of the DOM tree of an HTML document is called the document object. We can perform various operations on a web-page using the DOM-API. You can access the document object by typing document into the Console-tab.. [Reference](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions) (Part 0b)

**CSS** - The head element of the HTML code of the Notes page contains a [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag, which determines that the browser must fetch a [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) style sheet from the address [main.css](https://studies.cs.helsinki.fi/exampleapp/main.css). Cascading Style Sheets, or CSS, is a markup language used to determine the appearance of web pages. [Reference](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions) (Part 0b)

More on CSS from lesson 0b
