---
path: "/fixture-maker"
date: "13/02/2019"
title: "Fixture maker"
something: "something2"
posttype: "project"
category: "javascript"
description: "Chrome extension that turns Brexit into Breadsticks"
tags:
  - "javascript"
  - "hoisting"
---

![fixture-maker](./fixture-maker.png)

Fixture maker is an [npm package](https://www.npmjs.com/package/fixture-maker) that helps you create any amount of sample data in any shape you need.

The idea is that you can define the shape of an object that you need multiple copies of, with random data instead of flat, duplicate entries.

## Quick usage example

```javascript
const FixtureMaker = require("fixture-maker");
const fixtureMaker = new FixtureMaker();

const fixtureBody = {
  firstName: fixtureMaker.randomFirstName(),
  lastName: fixtureMaker.randomLastName(),
  age: fixtureMaker.randomNumber(),
  favouriteSnack: "Hummus",
  address: {
    lineOne: fixtureMaker.addressLineOne(),
    lineTwo: fixtureMaker.addressLineTwo(),
    postCode: fixtureMaker.postCode("GBR"),
    country: fixtureMaker.isoCountry(),
  },
};

fixtureMaker.make({
  body: fixtureBody,
  numberOfCopies: 100,
  filename: "helloworld",
});
```

fixture maker create a file called helloworld.json with 100 copies of the schema body you've specified.

NOTE: I am no longer actively working on this project as of January 2020. If you'd like the npm package name, please get in touch [on twitter](https://twitter.com/nkhil)
