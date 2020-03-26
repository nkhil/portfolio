---
path: "/data-mutability-bugs-javascript"
date: "14/02/2019"
title: "How mutating state can lead to bugs in software (with examples)"
something: "something2"
posttype: "blog"
category: "javascript"
description: "This is a second test"
---

One of the main principles of [functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) is keeping your functions pure. This means given the same parameter, your function should return the same output. 

Here's an example of a pure function:

```javascript
function addOne(num) {
  return num + 1;
}
```

What a similar impure function looks like:

```javascript
cosnt num = 10;

function addOne() {
  return num + 1;
}
```

The second example is impure because it depends on a value (i.e. state) that's outside its own scope. This function is unpredictable, and not too easy to test it either. 

Another important principle of functional programming (FP) is not mutating state within your function. 

Here's an example: 

```javascript
// a function that mutates state

function getFirstElement(array) {
  return array.splice(0, 1);
}
```

In the `getFirstElement` function above, we're returning the last element of the array. However, this modifies (mutates) the original array as well, and if we're not careful that can lead to unexpected bugs. 

For example, let's take out `getLastElement` function:

```javascript
  const array = [1, 2, 3];

  getFirstElement(array); // 3

  console.log(array); // [2, 3]
```

If we were expecting `array` to be `[1, 2, 3]`, we'd be in for a shock to learn that we now only have 2 elements instead of three.

If this seems a bit unrealistic, here's a more practical example how you could be introducing bugs in your code by mutating state.


```javascript

// this function will introduce a hard to trace bug in your code
function getLargestTransaction(transactions) {
  const sortedTransactions = transactions.sort((a, b) => b.amount - a.amount);
  return sortedTransactions.splice(0, 1);
}

function calculateTotalAmount(transactions) {
  return transactions.reduce((acc, transaction) => {
    acc + transaction.amount;
    return acc;
  }, 0);
}

function orchestrator(transactions) {
  const largestTransaction = getLargestTransaction(transactions);
  const totalSpend = calculateTotalAmount(transactions);
  return {
    largestTransaction,
    totalSpend,
  }
}

```

In the example above, the `getLargestTransaction` function mutates the transactions array, and hence introducing a bug in your code that leads to the wrong `totalSpend` being calculated. 

Now if this code was actually being used to calculate how much someone should get paid, or how much credit a person should get - you can see how this could get disastrous. 

The problem here can be fixed by following a really simple principle: 

### Stop mutating state in your functions

Let's take the `getLargestTransaction` function above. 

```javascript

function getLargestTransaction(transactions) {
  const sortedTrx = transactions.sort((a, b) => {
    return b.amount - a.amount
  });
  return sortedTrx.splice(0, 1);
}
```

We can do a couple of things to not mutate state in this function. 

- We could use `slice()` instead of `splice()` to not mutate the array.
- We could make a copy of the array to avoid mutating the original parameter we receive.

Here's what implementing both would looks like (you don't really need to use both steps, one would suffice).

```javascript

function getLargestTransaction(transactions) {
  const trx = [...transactions];
  const sortedTrx = trx.sort((a, b) => {
    return b.amount - a.amount
  });
  return sortedTrx.slice(0, 1);
}
```

**Here's another example**

A classic mistake is losing track of the fact that javascript objects are passed by reference, not by value. 

```javascript

```

