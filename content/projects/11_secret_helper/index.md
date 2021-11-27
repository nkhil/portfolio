---
path: "/secret-helper-library"
date: "13/02/2019"
title: "Secret helper library"
something: "something2"
posttype: "project"
category: "javascript"
description: "A helper library for creating api keys, hashing and verifying hashes."
tags:
  - "javascript"
  - "hoisting"
---

![secret-helper-screenshot](./secret_helper.png)

A simple little library built using Typescript that helps:

- Create API keys
- Create salts
- Create hashes
- Validates hashes

Check it out on Github: [https://github.com/subgeniuscorp/secret-helper](https://github.com/subgeniuscorp/secret-helper)

## Installation

```bash
npm install @subgeniuscorp/secret-helper
```

## Basic usage

```javascript
const secretHelper = require("@subgeniuscorp/secret-helper");

// Setup
const config = {
  saltLength: 5, // defaults to 30
  apiKeyLength: 20, // defaults to 30
};
const sh = secretHelper(config);

// Usage
const apiKey = sh.generateApiKey();
const salt = sh.generateSalt();
const hash = sh.createHash("some string");
const secretIsValid = sh.validateHash({
  hashValue: "jQHg1ed6d0b28cb5be10171f15204b9626990",
  valueToCompare: "some string",
});
```

## Background

When I was working on [my leaderboard API project](https://nikhilvijayan.com/leaderboard-api), I noticed I was sharing some helper functions between the Next.js project and the Heroku express.js project. Since the Next and express apps need to make sure they use the same functions, this was a great little use-case to abstract this into an npm package, and build something in Typescript, which I've been putting off for a while.

The library uses Node's `crypto` module for creating hashes and api keys.
