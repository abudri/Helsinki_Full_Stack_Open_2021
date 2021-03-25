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
