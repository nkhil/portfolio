---
path: "/5-things-that-happen-node-require"
date: "14/02/2019"
title: "5 things that happen every time you require a file in node"
posttype: "blog"
category: "javascript"
description: ""
---

Every time you require a file in node, these are the 5 things that take place:

- Resolve
- Load
- Wrap
- Evaluate
- Cache

## Resolve

Node will attempt to map the string given to `require()` into a path on the file system. This path could be local to node, under nodule_modules folder, or node modules under a parent directory or any other path.

## Load

Node will then load the contents of this file into memory


## Wrap

Wraps the content of the file with an IIFE (I've discussed this IIFE in another blog post [How require and module.exports in node works](/how-require-module-exports-in-node-works))

## Evaluate

Node will then evaluate the file (for eg: using the V8 engine)

## Cache

Once its done evaluating the file, it will cache it. The next time you require the same file, these steps will not happen and it will read it from the cache directly. 