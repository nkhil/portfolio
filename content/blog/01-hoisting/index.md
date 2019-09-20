---
path: '/understanding-hoisting'
date: '13/02/2019'
title: 'Quick introduction to hoisting in JavaScript'
something: 'something2'
posttype: 'blog'
category: 'javascript'
tags:
  - 'javascript'
  - 'hoisting'
---

Hoisting is maybe not the best word to describe what’s going on, since it conjures up images of tiny cranes pulling variables out of your code to the top, but here’s a quick article on what hoisting means.

When the V8 engine (the thing that reads and compiles your javaScript code into C++) parses any javaScript file, you might already know it processes it from top to bottom, line by line.
But before that, V8 does a quick scan of the file to look for any variable and function declarations. Eg:

```javascript
const a = 23;
function greet() {
  console.log('Hello');
}
```

## This is a heading two

When the V8 engine (the thing that reads and compiles your javaScript code into C++) parses any javaScript file, you might already know it processes it from top to bottom, line by line.
But before that, V8 does a quick scan of the file to look for any variable and function declarations. Eg:

```
const a = 23;
function greet(){
  console.log("Hello");
}
```

### How does it handle a heading three

When the V8 engine (the thing that reads and compiles your javaScript code into C++) parses any javaScript file, you might already know it processes it from top to bottom, line by line.
But before that, V8 does a quick scan of the file to look for any variable and function declarations. Eg:

| heading | name | date  | whatever | diet  |
| ------- | ---- | ----- | -------- | ----- |
| Mr      | John | Jan 1 | Yes      | Vegan |
|         |      |       |          |       |
|         |      |       |          |       |
