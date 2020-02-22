---
path: "/using-sinon-js-calledwith"
date: "14/02/2019"
title: "Using Sinon calledWith to assert that a function was called correctly"
something: "something2"
posttype: "blog"
category: "javascript"
description: "This is a second test"
tags:
  - "javascript"
  - "hoisting"
---

This is a unit test example to confirm that a particular function is called with the right parameters.

## The code

```javascript
// file: controller.js

const databaseUpdater = require("../model/databaseUpdater");
// ^ This is out model function that goes and updates the database.

function updateTotal(total) {
  databaseUpdater({ body: total });
}

function calculateTotal(data) {
  const total = data.reduce((accumulator, number) => accumulator + number, 0);
  updateTotal(total);
}

module.exports = calculateTotal;
```

In the code above, we have two functions calculateTotal and updateTotal. To test that they work correctly for a given input, we’re going to test that the databaseUpdater function is called with the correct parameters.

## Using proxyquire and sinon spies

Proxyquire is a package that lets you stub modules that you require into your code.
Here’s a quick example of how you can use proxyquire.

```javascript
// file: controller.spec.js

const proxyquire = require("proxyquire");
const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;

describe("calculateTotal", function(done) {
  it("calculates the total and updates the database", function() {
    const databaseUpdaterSpy = sinon.spy();
    const stub = {
      "../model/databaseUpdater": databaseUpdaterSpy
    };
    const calculateTotal = proxyquire("../controller", stub);
    calculateTotal([2, 3, 5]);
    expect(databaseUpdaterSpy.getCall(0).calledWith(sinon.match({ body: 10 })))
      .to.be.true;
    done();
  });
});
```

## Breaking it down

```javascript
const databaseUpdaterSpy = sinon.spy();

const stub = {
  "../model/databaseUpdater": databaseUpdaterSpy
};
```

Here, I’m using chai as the assertion library, sinon to create spies and proxyquireto stub the external databaseUpdater module.

Now, when my code calls databaseUpdater, it is calling my sinon spy. This means I can assert that my spy function gets called with the correct parameters like so:

```javascript
databaseUpdaterSpy.getCall(0).calledWith();
```

The getCall(0) function gives me the first time my spy was called (because my spy could be called multiple times). I can then access the parameters it was called with (with the calledWith function).

Finally, we pass in the object that we want to assert our spy function was called with. Since, in this case, our spy will be given an object, and since objects in JavaScript are stored by reference, two objects that have the same keys and values will not be equal. To help with this, sinon gives us sinon.match() which lets us compare two objects.

## Putting it all together

```javascript
expect(databaseUpdaterSpy.getCall(0).calledWith(sinon.match({ body: 10 }))).to
  .be.true;
```

Here, we’re expecting that the databaseUpdater spy, the first time it was called, was called with ab object that looks exactly like { body: 10 }.

Hope that was useful. If you spot any mistakes, please [let me know](https://twitter.com/nkhil).
