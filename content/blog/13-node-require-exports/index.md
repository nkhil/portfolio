---
path: "/how-require-module-exports-in-node-works"
date: "14/02/2019"
title: "How require and module.exports in node works"
posttype: "blog"
category: "javascript"
description: ""
---

I've always wondered how you always have access to `require` and `module.exports` in any `.js` files running with node. I recently found something cool.

If you `console.log` `arguments` in a file, and run it with node. For eg:

```javascript
// someFile.js
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
      path: '/someFolder',
      exports: {},
      parent: null,
      filename: '/someFolder/someFile.js',
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
      '/someFolder/someFile.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/someFolder',
    exports: {},
    parent: null,
    filename: '/someFolder/someFile.js',
    loaded: false,
    children: [],
    paths: [
      'someFolder/node_modules',
      '/Users/username/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '3': '/someFolder/someFile.js',
  '4': '/someFolder'
}
```

Every time you run a file using node (eg: `node someFile.js`), the file is loaded inside an IIFE ([immediately invoked function expression](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)).

and the function looks like this:

```javascript
(function (exports, require, module, __filename, __dirname)())
```

`exports` is essentially an alias or a reference to `module.exports`, which is why you can do this:

```javascript
exports.foo = () => console.log("foo"); // OK
```

but not this:

```javascript
exports = () => console.log("foo"); // NOT OK
```

**Note**: I learned this thanks to Sameer Buna's ["You don't know node"](https://www.youtube.com/watch?v=oPo4EQmkjvY) talk from ForwardJS San Francisco 2017.
