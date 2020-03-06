---
path: "/unit-testing-sinon-sandbox"
date: "14/02/2019"
title: "Unit testing using sinon sandbox"
something: "something2"
posttype: "blog"
category: "javascript"
description: "This is a second test"
tags:
  - "javascript"
  - "hoisting"
---

Sinon helps you create mocks, stubs and spies to help with unit testing.

Sinon sandbox makes stubbing much easier.

## Here's the code we will test

Let's say we have this function that updates the database:

```javascript
// user.js

const createUser = require("../models/createUser.js");

async function create(userDetails) {
  try {
    const { firstName, lastName, email } = userDetails;
    const { userId } = await createUser({
      body: { firstName, lastName, email }
    });
    return userId;
  } catch {
    throw new Error("An error occurred");
  }
}

module.exports = { create };
```

Here, you might want to test:

### The happy path

The `createUser` function returns a `200 OK` response, and we get a valid `userId` returned.

### he unhappy path

The `createUser` function throws an error, and the `create` function can handle the error appropriately.

### Test setup using chai and mocha

```javascript
  // Require our unit testing packages
  const chai = require('chai');
  const sinon = require('sinon');
  const chaiAsPromised = require('chai-as-promised');

  // Require our createUser model (the thing we want to stub)
  const model = require('../models/createUser.js');

  // Require the controller that we want to test
  const controller = require('../controller/user.js);

  chai.use(chaiAsPromised);
  const { expect } = require('chai');
  const sandbox = sinon.createSandbox();

  describe('#create', () => {

    afterEach(() => {
      sandbox.restore();
    });

  })
```

### Here's our first test for the happy path

```javascript
describe("#create", () => {
  afterEach(() => {
    sandbox.restore();
  });

  it("can successfully create a user", () => {
    const modelStub = sandbox.stub(model);
    modelStub.createUser.resolves(Promise.resolve({ userId: "1234" }));
    const userDetails = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@yahoo.com",
      foo: "bar"
    };
    // There are a few ways you could test this:

    // 1.
    return expect(controller.create(userDetails)).to.eventually.equal("1234");

    // 2.
    sinon.assert.calledWith(modelStub.createUser, {
      body: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@yahoo.com"
      }
    });

    // 3.
    const promise = controller.create(userDetails);
    return expect(promise).to.eventually.be.fulfilled;
  });
});
```

### Testing the unhappy path

```javascript
it("can handles errors correctly", () => {
  const model = sandbox.stub(model);
  model.createUser.throws(new Error("some error"));
  const userDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@yahoo.com"
  };
  return expect(controller.create(userDetails)).to.eventually.be.rejectedWith(
    "some error"
  );
});
```

Note that the expect statements are being returned:

```javascript
return expect(controller.create(userDetails)).to.eventually.be.rejectedWith(
  "some error"
);
```

If you don't return the `expect` statement, the test doesn't wait for the function to resolve. Annoyingly, the test will still pass so make sure you don't forget the return.

Also, note that if you import your model into your controller file using destructuring, you won't be able to (as far as I know) use Sinon sandbox as I've done above.

This is an example of what will NOT work:

```javascript
const { createUser } = require("./models/user");
```
