---
path: '/understanding-hoisting'
date: '13/02/2019'
title: 'Blog post about hoisting'
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

```
const a = 23;
function greet(){
  console.log("Hello");
}
```