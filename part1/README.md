# Part 1

<img src="https://user-images.githubusercontent.com/17362519/112214307-6dc7ef80-8bf5-11eb-97b5-13c757229094.png" width="950;" />

<img src="https://user-images.githubusercontent.com/17362519/112216100-820cec00-8bf7-11eb-87eb-fb1c56446661.png" width="450;" />

## Table of Contents

- Environment Setup
- Creating, Starting, and Stopping a React App
- Component
- JSX

## Environment Setup

Environment setup can be found in the [lesson page](https://fullstackopen.com/en/part1/introduction_to_react#some-notes).

I did run into some environment issues so I followed some instructions found in this Stack Overflow [answer](https://stackoverflow.com/questions/29323982/error-cannot-find-module-lib-cli):

```bash
brew uninstall node
sudo chown -R $(whoami) /usr/local/*
brew cleanup
brew install node
```
The above finally got my environment working properly.

### Warning: `npx create-react-app <directory>` Automatically Makes a Project a Git Repository

`npx create-react-app` automatically makes the project a git repository unless the application is created within an already existing repository. Most likely you do not want the project to become a repository, so run the command `rm -rf .git` in the root of the project.

## Creating, Starting, and Stopping a React App

### Creating a React App

`$ npx create-react-app <name_of_directory_you_want_files_placed_in>` - Command to create a react app in said directory.

My output after `mkdir homework` and then creating the app there:

```bash
z@Mac-Users-Apple-Computer part1 % mkdir homework
z@Mac-Users-Apple-Computer part1 % npx create-react-app homework 

Creating a new React app in /Users/z/Helsinki/full_stack_open_2021/part1/homework.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

yarn add v1.22.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 7 new dependencies.
info Direct dependencies
├─ cra-template@1.1.2
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
└─ react@17.0.2
info All dependencies
├─ cra-template@1.1.2
├─ immer@8.0.1
├─ react-dev-utils@11.0.4
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
├─ react@17.0.2
└─ scheduler@0.20.2
✨  Done in 19.07s.

Initialized a git repository.

Installing template dependencies using yarnpkg...
yarn add v1.22.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 17 new dependencies.
info Direct dependencies
├─ @testing-library/jest-dom@5.11.9
├─ @testing-library/react@11.2.5
├─ @testing-library/user-event@12.8.3
├─ react-dom@17.0.2
├─ react@17.0.2
└─ web-vitals@1.1.1
info All dependencies
├─ @testing-library/dom@7.30.0
├─ @testing-library/jest-dom@5.11.9
├─ @testing-library/react@11.2.5
├─ @testing-library/user-event@12.8.3
├─ @types/aria-query@4.2.1
├─ @types/jest@26.0.21
├─ @types/testing-library__jest-dom@5.9.5
├─ css.escape@1.5.1
├─ css@3.0.0
├─ dom-accessibility-api@0.5.4
├─ lz-string@1.4.4
├─ min-indent@1.0.1
├─ react-dom@17.0.2
├─ react@17.0.2
├─ redent@3.0.0
├─ strip-indent@3.0.0
└─ web-vitals@1.1.1
✨  Done in 6.47s.
Removing template package using yarnpkg...

yarn remove v1.22.4
[1/2] 🗑  Removing module cra-template...
[2/2] 🔨  Regenerating lockfile and installing missing dependencies...
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
success Uninstalled packages.
✨  Done in 9.57s.

Created git commit.

Success! Created homework at /Users/z/Helsinki/full_stack_open_2021/part1/homework
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd homework
  yarn start

Happy hacking!

z@Mac-Users-Apple-Computer part1 % ls
homework	lesson_app

z@Mac-Users-Apple-Computer part1 % ls -a homework 
.		.git		README.md	package.json	src
..		.gitignore	node_modules	public		yarn.lock
```

### Starting a React App

`$ npm start` - This command started the react app. By default, the application runs in localhost port 3000 with the address http://localhost:3000

### Stopping a React App

What I found so far is simply doing `ctrl+c`: 

```bash
Compiled successfully!

You can now view part1 in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.68.107:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

^C
```

## Component

The file `App.js` now defines a React-component with the name App. The command on the final line of file `index.js`.

```js
ReactDOM.render(<App />, document.getElementById('root'))
```

renders its contents into the div-element, defined in the file `public/index.html`, having the id value 'root'.

By default, the file `public/index.html` doesn't contain any HTML markup that is visible to us in the browser. You can try adding some HTML into the file. However, when using React, all content that needs to be rendered is usually defined as React components.

Let's take a closer look at the code defining the component:

```js
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)
```

As you probably guessed, the component will be rendered as a div-tag, which wraps a p-tag containing the text Hello world.

Technically the component is defined as a JavaScript function. The following is a function (which does not receive any parameters):

```js
() => (
  <div>
    <p>Hello world</p>
  </div>
)
```

The function is then assigned to a constant variable `App`:

```js
const App = ...
```

There are a few ways to define functions in JavaScript. Here we will use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which are described in a newer version of JavaScript known as [ECMAScript 6](http://es6-features.org/#Constants), also called ES6.

Because the function consists of only a single expression we have used a shorthand, which represents this piece of code:

```js
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```

In other words, the function returns the value of the expression.

The function defining the component may contain any kind of JavaScript code. Modify your component to be as follows and observe what happens in the console:

```js
const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```

It is also possible to render dynamic content inside of a component.

Modify the component as follows:

```js
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
```

Any JavaScript code within the curly braces is evaluated and the result of this evaluation is embedded into the defined place in the HTML produced by the component.

## JSX

It seems like React components are returning HTML markup. However, this is not the case. The layout of React components is mostly written using [JSX](https://reactjs.org/docs/introducing-jsx.html). Although JSX looks like HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript.

After compiling, our application looks like this:

```js
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}
```

The compiling is handled by [Babel](https://babeljs.io/repl/). Projects created with `create-react-app` are configured to compile automatically. We will learn more about this topic in [part 7](https://fullstackopen.com/en/part7) of this course.

It is also possible to write React as "pure JavaScript" without using JSX. Although, nobody with a sound mind would actually do so.

In practice, JSX is much like HTML with the distinction that with JSX you can easily embed dynamic content by writing appropriate JavaScript within curly braces. The idea of JSX is quite similar to many templating languages, such as Thymeleaf used along with Java Spring, which are used on servers.

JSX is "[XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)-like", which means that every tag needs to be closed. For example, a newline is an empty element, which in HTML can be written as follows:

```html
<br>
```

but when writing JSX, the tag needs to be closed:

```js
<br />
```

## Multiple components

Let's modify the file App.js as follows (NB: import at the top of the file and export at the bottom are left out in these examples, now and in the future. They are still needed for the code to work):

<img src="https://user-images.githubusercontent.com/17362519/112486453-42a6e280-8d52-11eb-8f01-93df77738483.png" width="650;" />

We have defined a new component `Hello` and used it inside the component App. Naturally, a component can be used multiple times:

<img src="https://user-images.githubusercontent.com/17362519/112486549-5b16fd00-8d52-11eb-8301-7957b0620b5c.png" width="650;" />

Writing components with React is easy, and by combining components, even a more complex application can be kept fairly maintainable. Indeed, a core philosophy of React is composing applications from many specialized reusable components.

Another strong convention is the idea of a root component called App at the top of the component tree of the application. Nevertheless, as we will learn in [part 6](https://fullstackopen.com/en/part6), there are situations where the component `App` is not exactly the root, but is wrapped within an appropriate utility component.

## props: passing data to components

It is possible to pass data to components using so called props.

Let's modify the component `Hello` as follows:

<img src="https://user-images.githubusercontent.com/17362519/112486722-8568ba80-8d52-11eb-8d88-61a45c3abb94.png" width="650;" />

Now the function defining the component has a parameter props. As an argument, the parameter receives an object, which has fields corresponding to all the "props" the user of the component defines.

The props are defined as follows:

<img src="https://user-images.githubusercontent.com/17362519/112486808-99acb780-8d52-11eb-8845-bab040001702.png" width="650;" />

There can be an arbitrary number of props and their values can be "hard coded" strings or results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.

Let's modify the code so that the component `Hello` uses two props:

<img src="https://user-images.githubusercontent.com/17362519/112486913-b1843b80-8d52-11eb-9af4-cc5bde02d6b6.png" width="650;" />

The props sent by the component `App` are the values of the variables, the result of the evaluation of the sum expression and a regular string.

## Some notes

React has been configured to generate quite clear error messages. Despite this, you should, at least in the beginning, advance in very small steps and make sure that every change works as desired.

The console should always be open. If the browser reports errors, it is not advisable to continue writing more code, hoping for miracles. You should instead try to understand the cause of the error and, for example, go back to the previous working state:

<img src="https://user-images.githubusercontent.com/17362519/112487093-d8427200-8d52-11eb-9206-ef4d37b7d11f.png" width="650;" />

It is good to remember that in React it is possible and worthwhile to write `console.log()` commands (which print to the console) within your code.

Also keep in mind that **React component names must be capitalized**. If you try defining a component as follows:

```js
const footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}
```
and use it like this

<img src="https://user-images.githubusercontent.com/17362519/112487257-f7410400-8d52-11eb-8de6-7a5aee0ba20e.png" width="650;" />

the page is not going to display the content defined within the Footer component, and instead React only creates an empty footer element. If you change the first letter of the component name to a capital letter, then React creates a div-element defined in the Footer component, which is rendered on the page.

Note that the content of a React component (usually) needs to contain one root element. If we, for example, try to define the component App without the outermost div-element:

```js
const App = () => {
  return (
    <h1>Greetings</h1>
    <Hello name="Maya" age={26 + 10} />
    <Footer />
  )
}
```

the result is an error message.

<img src="https://user-images.githubusercontent.com/17362519/112487443-163f9600-8d53-11eb-8d9b-d5593a8098fd.png" width="650;" />

Using a root element is not the only working option. An array of components is also a valid solution:

```js
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name="Maya" age={26 + 10} />,
    <Footer />
  ]
}
```

However, when defining the root component of the application this is not a particularly wise thing to do, and it makes the code look a bit ugly.

Because the root element is stipulated, we have "extra" div-elements in the DOM-tree. This can be avoided by using fragments, i.e. by wrapping the elements to be returned by the component with an empty element:

```js
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}
```

It now compiles successfully, and the DOM generated by React no longer contains the extra div-element.










