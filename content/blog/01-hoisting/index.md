---
path: "/understanding-hoisting"
date: "13/02/2019"
title: "Quick introduction to hoisting in JavaScript"
something: "something2"
posttype: "blog"
category: "javascript"
tags:
  - "javascript"
  - "hoisting"
---

Hoisting is maybe not the best word to describe what’s going on, since it conjures up images of tiny cranes pulling variables out of your code to the top, but here’s a quick article on what hoisting means.

When the V8 engine (the thing that reads and compiles your javaScript code into C++) parses any javaScript file, you might already know it processes it from top to bottom, line by line.
But before that, V8 does a quick scan of the file to look for any variable and function declarations. Eg:

```javascript
const a = 23;

function greet() {
  console.log("Hello");
}
```

In the code above, before the file has been executed, V8 knows that a is a constant, and a function called greet exists.

You can see this in action if you open up a quick REPL instance and paste the code below in there.

```javascript
console.log(a);
var a = 23;

//=> undefined
```

(note how that’s a var and not const or let. More on that shortly)

The reason a is undefined is that V8 ‘hoists’ all the variable declarations and assigns them space in memory. Note that I said ‘variable declarations’ (put simple, var a) rather than variable assignments (which would bevar a = 23), which is why it knows of the existence of a but not that the value of a is 23.

> V8 behaves as if the variable was declared on top of the page before anything got assigned, and hence the name — Hoisting.

## Functions are also hoisted

In the example below:

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}

//=> Hello
```

the entire function sayHello is hoisted and placed in memory, which is why you can call it before the declaration, and it still works as if it was declared before it was called.

## ..but function assignments aren’t hoisted

Let’s take the same code from above, make it an anonymous function and assign it to the variable sayHello and then call it before the assignment.

```javascript
sayHello();

var sayHello = function() {
  console.log("Hello");
};

//=> sayHello is not a function
```

Here, the variable sayHello is getting hoisted, but its value at the time of execution is undefined .

## Quick aside on vars and scope

This isn’t necessarily related to hoisting, but here’s a surprising thing I learned about the scope of vars inside for loops.

```javascript
console.log("value of i before", i);

for (var i = 0; i < 6; i++) {
  console.log("Hello");
}

console.log("value of i after", i);

//=> value of i before undefined
//=> value of i after 5
```

You’d think that the scope of i would be just inside that for loop block, turns out i is available outside as well.

In fact, if you try logging out window.i, you will still get 5 (it binds to the window object).

This is a good case for using let in your code instead of var, which seems to leak scope all over the place.

```javascript
console.log("value of i before", i);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("value of i after", i);

//=> ReferenceError: i is not defined
```

## const and let

Interestingly, const and let are not hoisted the same way var is.

For example:

```javascript
console.log(a);

const a = 23;

//=> ReferenceError: a is not defined
```

[This post by Vojtech Ruzicka](https://www.vojtechruzicka.com/javascript-hoisting-var-let-const-variables/) states it more eloquently than I could:

> In case of let/const, the initialization to undefined does not happen until the line where the declaration actually happens. And only if there is no assignment immediately. On the lines above the variable is in the Temporal Dead Zone and accessing it results in Reference Error.
> -- <cite>Vojtech Ruzicka</cite>
