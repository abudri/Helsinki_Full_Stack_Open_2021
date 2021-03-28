# Part 1b: JavaScript

![image](https://user-images.githubusercontent.com/17362519/112490078-720b1e80-8d55-11eb-849f-e3b287439c4a.png)

<img src="https://user-images.githubusercontent.com/17362519/112490109-78999600-8d55-11eb-8753-fa0246717624.png" width="300;" />

## Table of Contents
- [Variables](https://github.com/abudri/Helsinki_Full_Stack_Open_2021/blob/main/part1/1b/README.md#variables)
- [Arrays](https://github.com/abudri/Helsinki_Full_Stack_Open_2021/blob/main/part1/1b/README.md#arrays)
- [Objects](https://github.com/abudri/Helsinki_Full_Stack_Open_2021/blob/main/part1/1b/README.md#objects)
- [Functions](https://github.com/abudri/Helsinki_Full_Stack_Open_2021/blob/main/part1/1b/README.md#functions)
- [Object methods and `this`]()
- [Classes]()

During the course, we have a goal and a need to learn a sufficient amount of JavaScript in addition to web development.

JavaScript has advanced rapidly in the last few years and in this course we use features from the newer versions. The official name of the JavaScript standard is [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). At this moment, the latest version is the one released in June of 2020 with the name [ECMAScript®2020](https://www.ecma-international.org/ecma-262/), otherwise known as ES11.

Browsers do not yet support all of JavaScript's newest features. Due to this fact, a lot of code run in browsers has been **transpiled** from a newer version of JavaScript to an older, more compatible version.

#### Babel

Today, the most popular way to do the transpiling is by using [Babel](https://babeljs.io/). Transpilation is automatically configured in React applications created with create-react-app. We will take a closer look at the configuration of the transpilation in [part 7](https://fullstackopen.com/en/part7) of this course.

#### Node.js

[Node.js](https://nodejs.org/en/) is a JavaScript runtime environment based on Google's [Chrome V8](https://developers.google.com/v8/) JavaScript engine and works practically anywhere - from servers to mobile phones. Let's practice writing some JavaScript using Node. It is expected that the version of Node.js installed on your machine is at least version 14.8.0. The latest versions of Node already understand the latest versions of JavaScript, so the code does not need to be transpiled.

The code is written into files ending with .js that are run by issuing the command `node name_of_file.js`.

#### Node.js Console

It is also possible to write JavaScript code into the Node.js console, which is opened by typing `node` in the command-line, as well as into the browser's developer tool console. The newest revisions of Chrome handle the newer features of JavaScript [pretty well](http://kangax.github.io/compat-table/es2016plus/) without transpiling the code. Alternatively you can use a tool like [JS Bin](https://jsbin.com/?js,console).

JavaScript is sort of reminiscent, both in name and syntax, to Java. But when it comes to the core mechanism of the language they could not be more different. Coming from a Java background, the behavior of JavaScript can seem a bit alien, especially if one does not make the effort to look up its features.

In certain circles it has also been popular to attempt "simulating" Java features and design patterns in JavaScript. We do not recommend doing this as the languages and respective ecosystems are ultimately very different.

## **Variables**

In JavaScript there are a few ways to go about defining variables:

```
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error
```

[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) does not actually define a variable but a constant for which the value can no longer be changed. On the other hand [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) defines a normal variable.

In the example above, we also see that the type of the data assigned to the variable can change during execution. At the start `y` stores an integer and at the end a string.

It is also possible to define variables in JavaScript using the keyword [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var). `var` was, for a long time, the only way to define variables. `const` and `let` were only recently added in version ES6. In specific situations, `var` works in a [different](https://medium.com/craft-academy/javascript-variables-should-you-use-let-var-or-const-394f7645c88f) [way](http://www.jstips.co/en/javascript/keyword-var-vs-let/) compared to variable definitions in most languages. During this course the use of `var` is ill-advised and you should stick with using `const` and `let`! You can find more on this topic on YouTube - e.g. [var, let and const - ES6 JavaScript Features](https://youtu.be/sjyJBL5fkp8)

## **Arrays**

An [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and a couple of examples of its use:

```
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})
```

Notable in this example is the fact that the contents of the array can be modified even though it is defined as a *`const`*. Because the array is an object, the variable always points to the same object. However, the content of the array changes as new items are added to it.
One way of iterating through the items of the array is using *`forEach`* as seen in the example. *`forEach`* receives a function defined using the arrow syntax as a parameter.

```
value => {
  console.log(value)
}
```

`forEach` calls the function for each of the items in the array, always passing the individual item as an argument. The function as the argument of `forEach` may also receive [other arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

In the previous example, a new item was added to the array using the method [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push). When using React, techniques from functional programming are often used. One characteristic of the functional programming paradigm is the use of [immutable](https://en.wikipedia.org/wiki/Immutable_object) data structures. In React code, it is preferable to use the method [`concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), which does not add the item to the array, but creates a new array in which the content of the old array and the new item are both included.

```
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
```

The method call *`t.concat(5)`* does not add a new item to the old array but returns a new array which, besides containing the items of the old array, also contains the new item.
There are plenty of useful methods defined for arrays. Let's look at a short example of using the [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method.

```
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed
```

Based on the old array, `map` creates a new array, for which the function given as a parameter is used to create the items. In the case of this example the original value is multiplied by two.

Map can also transform the array into something completely different:

```
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

Here an array filled with integer values is transformed into an array containing strings of HTML using the `map` method. In [part 2](https://fullstackopen.com/en/part2) of this course, we will see that `map` is used quite frequently in React.

Individual items of an array are easy to assign to variables with the help of the [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed
```

Thanks to the assignment, the variables `first` and `second` will receive the first two integers of the array as their values. The remaining integers are "collected" into an array of their own which is then assigned to the variable `rest`.

## Objects

There are a few different ways of defining objects in JavaScript. One very common method is using [object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals), which happens by listing its properties within braces:

```css

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
```

The values of the properties can be of any type, like integers, strings, arrays, objects...
The properties of an object are referenced by using the "dot" notation, or by using brackets:

```css
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed
```

You can also add properties to an object on the fly by either using dot notation or brackets:

```css
object1.address = 'Helsinki'
object1['secret number'] = 12341
```

The latter of the additions has to be done by using brackets, because when using dot notation, secret number is not a valid property name because of the space character.( In `'secret number'` that is of course.  Meaning we can't assign by saying `object.secret number`, we can't have that space there.)

Naturally, objects in JavaScript can also have methods. However, during this course we do not need to define any objects with methods of their own. This is why they are only discussed briefly during the course.

Objects can also be defined using so-called constructor functions, which results in a mechanism reminiscent of many other programming languages, e.g. Java's classes. Despite this similarity, JavaScript does not have classes in the same sense as object-oriented programming languages. There has been, however, an addition of the class syntax starting from version ES6, which in some cases helps structure object-oriented classes.

## Functions (Arrow Functions)

We have already become familiar with defining arrow functions. The complete process, without cutting corners, to defining an arrow function is as follows:

```css
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
```

and the function is called as can be expected:

```css
const result = sum(1, 5)
console.log(result)
```

If there is just a single parameter, we can exclude the parentheses from the definition:

```css
const square = p => {
  console.log(p)
  return p * p
}
```

If the function only contains a single expression then the braces are not needed. In this case the function only returns the result of its only expression. Now, if we remove console printing, we can further shorten the function definition:

```css
const square = p => p * p
```

This form is particularly handy when manipulating arrays - e.g. when using the `map` method:

```css
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared is now [1, 4, 9]
```

The arrow function feature was added to JavaScript only a couple of years ago, with version [ES6](http://es6-features.org/). Prior to this the only way to define functions was by using the keyword *`function`*.

There are two ways by which the function can be referenced; one is giving a name in a [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function).

```jsx
function product(a, b) {
  return a * b
}

const result = product(2, 6)
// result is now 12
```

The other way to define the function is using a [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function). In this case there is no need to give the function a name and the definition may reside among the rest of the code:

```jsx
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5
```

During this course we will define all functions using the arrow syntax.

## Object methods and `this`

Due to the fact that during this course we are using a version of React containing React Hooks we have no need for defining objects with methods. The contents of this chapter are not relevant to the course but are certainly in many ways good to know. In particular when using older versions of React one must understand the topics of this chapter.
Arrow functions and functions defined using the `function` keyword vary substantially when it comes to how they behave with respect to the keyword [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), which refers to the object itself.
We can assign methods to an object by defining properties that are functions:

```js
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {    console.log('hello, my name is ' + this.name)  },}

arto.greet()  // "hello, my name is Arto Hellas" gets printed
```

Methods can be assigned to objects even after the creation of the object:

<img src="https://user-images.githubusercontent.com/17362519/112751298-3b264a00-8f9b-11eb-9ffb-1015efceff08.png" width="650;" />

Let's slightly modify the object:

<img src="https://user-images.githubusercontent.com/17362519/112751325-5abd7280-8f9b-11eb-9fdd-501022bd95a4.png" width="650;" />

Now the object has the method `doAddition` which calculates the sum of numbers given to it as parameters. The method is called in the usual way, using the object `arto.doAddition(1, 4)` or by storing a method reference in a variable and calling the method through the variable: `referenceToAddition(10, 15)`.
If we try to do the same with the method `greet` we run into an issue:

```js
arto.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
```

When calling the method through a reference, the method loses knowledge of what was the original `this`. Contrary to other languages, in JavaScript the value of [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) is defined based on how the method is called. When calling the method through a reference the value of `this` becomes the so-called [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) and the end result is often not what the software developer had originally intended.

Losing track of `this` when writing JavaScript code brings forth a few potential issues. Situations often arise where React or Node (or more specifically the JavaScript engine of the web browser) needs to call some method in an object that the developer has defined. However, in this course we avoid these issues by using the "this-less" JavaScript.
One situation leading to the "disappearance" of `this` arises when we set a timeout to call the `greet` function on the `arto` object, using the [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) function.

<img src="https://user-images.githubusercontent.com/17362519/112751361-9e17e100-8f9b-11eb-8950-742ab2248ed4.png" width="650;" />

As mentioned, the value of *this* in JavaScript is defined based on how the method is being called. When *setTimeout* is calling the method, it is the JavaScript engine that actually calls the method and, at that point, *this* refers to the global object.
There are several mechanisms by which the original *this* can be preserved. One of these is using a method called [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind):

`setTimeout(arto.greet.bind(arto), 1000)`

Calling `arto.greet.bind(arto)` creates a new function where `this` is bound to point to Arto, independent of where and how the method is being called.
Using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) it is possible to solve some of the problems related to `this`. They should not, however, be used as methods for objects because then `this` does not work at all. We will come back later to the behavior of `this` in relation to arrow functions.

If you want to gain a better understanding of how `this` works in JavaScript, the Internet is full of material about the topic, e.g. the screencast series [Understand JavaScript's `this` Keyword in Depth](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth) by [egghead.io](https://egghead.io/) is highly recommended!


## Classes

As mentioned previously, there is no class mechanism like the ones in object-oriented programming languages. There are, however, features in JavaScript which make "simulating" object-oriented [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) possible.

Let's take a quick look at the class syntax that was introduced into JavaScript with ES6, which substantially simplifies the definition of classes (or class-like things) in JavaScript.
In the following example we define a "class" called Person and two Person objects:

```jsx
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
```

When it comes to syntax, the classes and the objects created from them are very reminiscent of Java classes and objects. Their behavior is also quite similar to Java objects. At the core they are still objects based on JavaScript's [prototypal inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance). The type of both objects is actually `Object`, since JavaScript essentially only defines the types [Boolean, Null, Undefined, Number, String, Symbol, BigInt, and Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

The introduction of the class syntax was a controversial addition. Check out [Not Awesome: ES6 Classes](https://github.com/petsel/not-awesome-es6-classes) or [Is “Class” In ES6 The New “Bad” Part?](https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65) for more details.

The ES6 class syntax is used a lot in "old" React and also in Node.js, hence an understanding of it is beneficial even in this course. However, since we are using the new [Hooks](https://reactjs.org/docs/hooks-intro.html) feature of React throughout this course, we have no concrete use for JavaScript's class syntax.

## JavaScript materials

There exist both good and poor guides for JavaScript on the Internet. Most of the links on this page relating to JavaScript feature reference [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

It is highly recommended to immediately read [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) on Mozilla's website.

If you wish to get to know JavaScript deeply there is a great free book series on the Internet called [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS).
Another great resource for learning JavaScript is [javascript.info](https://javascript.info/).
[egghead.io](https://egghead.io/) has plenty of quality screencasts on JavaScript, React, and other interesting topics. Unfortunately, some of the material is behind a paywall.

____

### Compilation vs Transpilation

[https://stackoverflow.com/questions/44931479/compiling-vs-transpiling](https://stackoverflow.com/questions/44931479/compiling-vs-transpiling)

**Compiler:** is an umbrella term to describe a program that takes source code written in one language and produce a (or many) output file in some other language. In practice we mostly use this term to describe a compiler such as gcc which takes in C code as input and produces a binary executable (machine code) as output.

**Transpilers** are also known as source-to-source compilers. So in essence they are a subset of compilers which take in a source code file and convert it to another **source code file** in some other language or a different version of the same language. The ouput is generally understandable by a human. This output still has to go through a compiler or interpreter to be able to run on the machine.

Some examples of transpilers:

1. [Emscripten](https://kripken.github.io/emscripten-site/): Transpiles C/C++ to JavaScript
2. [Babel](https://babeljs.io/): Transpiles ES6+ code to ES5 (ES6 and ES5 are different versions or generations of the JavaScript language)
