# [Part 0](https://fullstackopen.com/en/part0)

<img src="https://user-images.githubusercontent.com/17362519/112181241-a2767f80-8bd2-11eb-87be-11f4569550ad.png" width="850;" />

## Table of Contents

* [Manipulating the document-object from the console](https://github.com/abudri/Helsinki_Full_Stack_Open_2021/blob/main/part0/README.md#manipulating-the-document-object-from-console)
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

### **CSS**

The head element of the HTML code of the Notes page contains a [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag, which determines that the browser must fetch a [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) style sheet from the address [main.css](https://studies.cs.helsinki.fi/exampleapp/main.css).

Cascading Style Sheets, or CSS, is a markup language used to determine the appearance of web pages.

The fetched CSS-file looks as follows:

**`.container {
  padding: 10px;
  border: 1px solid; 
}

.notes {
  color: blue;
}`**

The file defines two [class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors). These are used to select certain parts of the page and to define styling rules to style them.

A class selector definition always starts with a period, and contains the name of the class.

The classes are [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class), which can be added to HTML elements.

CSS attributes can be examined on the elements tab on the console:

<img src="https://fullstackopen.com/static/4504fc2e95de826dd766aca1d0940ea4/5a190/17e.png" width="650;" />

The outermost div element has the class container. The ul element containing the list of notes has the class notes.

The CSS rule defines that elements with the container class will be outlined with a one pixel wide [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It also sets 10 pixel [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) on the element. This adds some empty space between the element's content and the border.

The second CSS rule sets the text color of the notes as blue.

HTML elements can also have other attributes apart from classes. The div element containing the notes has an [id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) attribute. JavaScript code uses the id to find the element.

The Elements tab of the console can be used to change the styles of the elements.

<img src="https://fullstackopen.com/static/ef664dbcddaeef64c5ff6e180e42e5ca/5a190/18e.png" width="650;" />

Changes made on the console will not be permanent. If you want to make lasting changes, they must be saved to the CSS style sheet on the server.

#### Block vs Inline Elements

[https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#centering_the_image](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#centering_the_image)

Next, we center the image to make it look better. We could use the margin: 0 auto trick again as we did for the body. But there are differences that require an additional setting to make the CSS work.

The `<body>` is a block element, meaning it takes up space on the page. A block element can have margin and other spacing values applied to it. In contrast, images are **inline** elements. ***It is not possible to apply margin or spacing values to inline elements***. So to apply margins to the image, we must give the image block-level behavior using display: `block;`.

## **[Loading a page containing JavaScript - review](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#loading-a-page-containing-java-script-review)**

Let's review what happens when the page [https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes) is opened on the browser.

<img src="https://fullstackopen.com/static/7094858c9c7ec9149d10607e9e1d94bb/5a190/19e.png" width="550;" />

- The browser fetches the HTML code defining the content and the structure of the page from the server using an HTTP `GET` request.
- Links in the HTML code cause the browser to also fetch the CSS style sheet main.css......
- and a JavaScript code file `main.js`
- The browser executes the JavaScript code. The code makes an HTTP `GET` request to the address [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json), which returns the notes as JSON data.
- When the data has been fetched, the browser executes an event handler, which renders the notes to the page using the DOM-API.

## **[AJAX](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#ajax)**

The Notes page of the application follows an early-noughties style of web development and "uses Ajax". As such, it's on the crest of the wave of early 2000's web technology.

[AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) (Asynchronous JavaScript and XML) is a term introduced in February 2005 on the back of advancements in browser technology to describe a new revolutionary approach that enabled the fetching of content to web pages using JavaScript included within the HTML, without the need to rerender the page.

Prior to the AJAX era, all web pages worked like the [traditional web application](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#traditional-web-applications) we saw earlier in this chapter. All of the data shown on the page was fetched with the HTML-code generated by the server.

The Notes page uses AJAX to fetch the notes data. Submitting the form still uses the traditional mechanism of submitting web-forms.

The application URLs reflect the old, carefree times. JSON data is fetched from the url [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json) and new notes are sent to the URL [https://studies.cs.helsinki.fi/exampleapp/new_note](https://studies.cs.helsinki.fi/exampleapp/new_note).Nowadays URLs like these would not be considered acceptable, as they don't follow the generally acknowledged conventions of [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_Web_services) APIs, which we'll look into more in [part 3](https://fullstackopen.com/en/part3)

The thing termed AJAX is now so commonplace that it's taken for granted. The term has faded into oblivion, and the new generation has not even heard of it.

## **Single page app**

In our example app, the home page works like a traditional web-page: All of the logic is on the server, and the browser only renders the HTML as instructed.

The Notes page gives some of the responsibility, generating the HTML code for existing notes, to the browser. The browser tackles this task by executing the JavaScript code it fetched from the server. The code fetches the notes from the server as JSON-data and adds HTML elements for displaying the notes to the page using the [DOM-API](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#document-object-model-or-dom).

In recent years, the [Single-page application](https://en.wikipedia.org/wiki/Single-page_application) (SPA) style of creating web-applications has emerged. SPA-style websites don't fetch all of their pages separately from the server like our sample application does, but instead comprise only one HTML page fetched from the server, the contents of which are manipulated with JavaScript that executes in the browser.

The Notes page of our application bears some resemblance to SPA-style apps, but it's not quite there yet. Even though the logic for rendering the notes is run on the browser, the page still uses the traditional way of adding new notes. The data is sent to the server with form submit, and the server instructs the browser to reload the Notes page with a redirect.

A single page app version of our example application can be found from [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa). At first glance, the application looks exactly the same as the previous one. The HTML code is almost identical, but the JavaScript file is different (spa.js) and there is a small change in how the form-tag is defined:

<img src="https://fullstackopen.com/static/cb1893b2f18168168b3337ef994f0347/5a190/25e.png" width="650;" />

The form has no action or method attributes to define how and where to send the input data.

Open the Network-tab and empty it by clicking the 🚫 symbol. When you now create a new note, you'll notice that the browser sends only one request to the server.

<img src="https://fullstackopen.com/static/07beb53097a520517c1c28ff17fc907a/5a190/26e.png" width="650;" />

The POST request to the address new_note_spa contains the new note as JSON-data containing both the content of the note (content) and the timestamp (date):

`{
  content: "single page app does not reload the whole page",
  date: "2019-05-25T15:15:59.905Z"
}`

The Content-Type header of the request tells the server that the included data is represented in the JSON format.

<img src="https://fullstackopen.com/static/5819436c98e4cce143fce3fe9bc534b9/5a190/27e.png" width="650;" />

Without this header, the server would not know how to correctly parse the data.

The server responds with status code [201 created](https://httpstatuses.com/201). This time the server does not ask for a redirect, the browser stays on the same page, and it sends no further HTTP requests.

The SPA version of the app does not send the form data in the traditional way, but instead uses the JavaScript code it fetched from the server. We'll look into this code a bit, even though understanding all the details of it is not important just yet.

`var form = document.getElementById('notes_form')
form.onsubmit = function(e) {
  e.preventDefault()

  var note = {
    content: e.target.elements[0].value,
    date: new Date(),
  }

  notes.push(note)
  e.target.elements[0].value = ''
  redrawNotes()
  sendToServer(note)
}`

The command *document.getElementById('notes_form')* instructs the code to fetch the form-element from the page, and to register an event handler to handle the form submit event. The event handler immediately calls the method *e.preventDefault()* to prevent the default handling of form submit. The default method would send the data to the server and cause a new GET request, which we don't want to happen.

Then the event handler creates a new note, adds it to the notes list with the command *notes.push(note)*, rerenders the note list on the page and sends the new note to the server.

The code for sending the note to the server is as follows:

`var sendToServer = function(note) {
  var xhttpForPost = new XMLHttpRequest()
  // ...

  xhttpForPost.open('POST', '/new_note_spa', true)
  xhttpForPost.setRequestHeader(
    'Content-type', 'application/json'
  )
  xhttpForPost.send(JSON.stringify(note))
}`

The code determines that the data is to be sent with an HTTP POST request and the data type is to be JSON. The data type is determined with a Content-type header. Then the data is sent as JSON-string.

The application code is available at [https://github.com/mluukkai/example_app](https://github.com/mluukkai/example_app). It's worth remembering that the application is only meant to demonstrate the concepts of the course. The code follows a poor style of development in some measure, and **should not be used as an example when creating your own applications**. The same is true for the URLs used. The URL new_note_spa, which new notes are sent to, **does not adhere to current best practices.**

## **JavaScript-libraries**

The sample app is done with so called [vanilla JavaScript](https://medium.freecodecamp.org/is-vanilla-javascript-worth-learning-absolutely-c2c67140ac34), using only the DOM-API and JavaScript to manipulate the structure of the pages.

Instead of using JavaScript and the DOM-API only, different libraries containing tools that are easier to work with compared to the DOM-API are often used to manipulate pages. One of these libraries is the ever-so-popular [jQuery](https://jquery.com/).

jQuery was developed back when web applications mainly followed the traditional style of the server generating HTML pages, the functionality of which was enhanced on the browser side using JavaScript written with jQuery. One of the reasons for the success of jQuery was its so-called cross-browser compatibility. The library worked regardless of the browser or the company that made it, so there was no need for browser-specific solutions. Nowadays using jQuery is not as justified given the advancement of VanillaJS, and the most popular browsers generally support basic functionalities well.

The rise of the single page app brought several more "modern" ways of web development than jQuery. The favorite of the first wave of developers was [BackboneJS](http://backbonejs.org/). After its [launch](https://github.com/angular/angular.js/blob/master/CHANGELOG.md#100-temporal-domination-2012-06-13) in 2012, Google's [AngularJS](https://angularjs.org/) quickly became almost the de facto standard of modern web development.

However, the popularity of Angular plummeted after the Angular team [announced](https://jaxenter.com/angular-2-0-announcement-backfires-112127.html) in October 2014 that support for version 1 will end, and Angular 2 will not be backwards compatible with the first version. Angular 2 and the newer versions have not gotten too warm of a welcome.

Currently the most popular tool for implementing the browser-side logic of web-applications is Facebook's [React](https://reactjs.org/) library. During this course, we will get familiar with React and the [Redux](https://github.com/reactjs/redux) library, which are frequently used together.

The status of React seems strong, but the world of JavaScript is ever changing. For example, recently a newcomer - [VueJS](https://vuejs.org/) - has been capturing some interest.

## **Full stack web development**

What does the name of the course, Full stack web development, mean? Full stack is a buzzword that everyone talks about, while no one really knows what it means. Or at least, there is no agreed-upon definition for the term.

Practically all web applications have (at least) two "layers": the browser, being closer to the end-user, is the top layer, and the server the bottom one. There is often also a database layer below the server. We can therefore think of the architecture of a web application as a kind of stack of layers.

Often, we also talk about the [frontend](https://en.wikipedia.org/wiki/Front_and_back_ends) and the [backend](https://en.wikipedia.org/wiki/Front_and_back_ends). The browser is the frontend, and JavaScript that runs on the browser is frontend code. The server on the other hand is the backend.

In the context of this course, full stack web development means that we focus on all parts of the application: the frontend, the backend, and the database. Sometimes the software on the server and its operating system are seen as parts of the stack, but we won't go into those.

We will code the backend with JavaScript, using [Node.js](https://nodejs.org/en/) runtime environment. Using the same programming language on multiple layers of the stack gives full stack web development a whole new dimension. However, it's not a requirement of full stack web development to use the same programming language (JavaScript) for all layers of the stack.

It used to be more common for developers to specialize in one layer of the stack, for example the backend. Technologies on the backend and the frontend were quite different. With the Full stack trend, it has become common for developers to be proficient on all layers of the application and the database. Oftentimes, full stack developers must also have enough configuration and administration skills to operate their application, for example, in the cloud.

## **JavaScript fatigue**

Full stack web development is challenging in many ways. Things are happening in many places at once, and debugging is quite a bit harder than with regular desktop applications. JavaScript does not always work as you'd expect it to (compared to many other languages), and the asynchronous way its runtime environments work causes all sorts of challenges. Communicating on the web requires knowledge of the HTTP protocol. One must also handle databases and server administration and configuration. It would also be good to know enough CSS to make applications at least somewhat presentable.

The world of JavaScript develops fast, which brings its own set of challenges. Tools, libraries and the language itself are under constant development. Some are starting to get tired of the constant change, and have coined a term for it: [JavaScript](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) [fatigue](https://auth0.com/blog/how-to-manage-javascript-fatigue/).

You will suffer from JavaScript fatigue yourself during this course. Fortunately for us, there are a few ways to smooth the learning curve, and we can start with coding instead of configuration. We can't avoid configuration completely, but we can merrily push ahead in the next few weeks while avoiding the worst of configuration hells.
____

## Glossary

**Runtime Environment -** the ****browser**.**  [Reference](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions) (Part 0b)

**Document** **Object** **Model** - or [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) is an Application Programming Interface, (an API), which enables programmatic modification of the element trees corresponding to web-pages. The JavaScript code introduced in the previous chapter used the DOM-API to add a list of notes to the page. [Reference](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions) (Part 0b)

`document` - The topmost node of the DOM tree of an HTML document is called the document object. We can perform various operations on a web-page using the DOM-API. You can access the document object by typing document into the Console-tab.. [Reference](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions) (Part 0b)

**CSS** - The head element of the HTML code of the Notes page contains a [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag, which determines that the browser must fetch a [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) style sheet from the address [main.css](https://studies.cs.helsinki.fi/exampleapp/main.css). Cascading Style Sheets, or CSS, is a markup language used to determine the appearance of web pages. [Reference](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions) (Part 0b)

[More on CSS from lesson 0b](https://github.com/abudri/Helsinki_Full_Stack_Open_2021/blob/main/part0/README.md#css)
