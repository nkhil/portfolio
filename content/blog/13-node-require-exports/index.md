---
path: "/how-require-module-exports-in-node-works"
date: "14/02/2019"
title: "How require and module exports in node works"
posttype: "blog"
category: "javascript"
description: ""
---

Have you wondered how you always have access to `require` and `module.exports` in any javaScript file?

If you `console.log` `arguments` in a file, and run it with node. For eg:

```javascript
console.log(arguments);
```

We actually get arguments:

```javascript
[Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/nikhil/Sandbox/someFolder',
      exports: {},
      parent: null,
      filename: '/Users/nikhil/Sandbox/someFolder/1.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function],
      '.json': [Function],
      '.node': [Function]
    },
    cache: [Object: null prototype] {
      '/Users/nikhil/Sandbox/someFolder/1.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/Users/nikhil/Sandbox/someFolder',
    exports: {},
    parent: null,
    filename: '/Users/nikhil/Sandbox/someFolder/1.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/nikhil/Sandbox/someFolder/node_modules',
      '/Users/nikhil/Sandbox/node_modules',
      '/Users/nikhil/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '3': '/Users/nikhil/Sandbox/someFolder/1.js',
  '4': '/Users/nikhil/Sandbox/someFolder'
}
```

