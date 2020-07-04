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

Node will attempt to map the string given to `require()` into a path on the file system. This path could be local to node, under nodule_modules folder, or node modules under a parent directory.

## Load
