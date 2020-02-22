---
path: "/examples-javascript-closures"
date: "13/02/2019"
title: "Understanding the module pattern in JavaScript"
something: "something2"
posttype: "blog"
category: "javascript"
description: "I designed a train map for the Mumbai train system"
tags:
  - "javascript"
  - "hoisting"
---

The word closures make it sound complicated. You almost certainly understand closures already — let’s take a look at some examples.

## Example 1

```javascript
function outer() {
  const a = 23;
  function inner() {
    console.log(a);
  }
  inner();
}

outer();

//=> 23
// The `inner` function is said to have closure over the variable `a`
```

In the above example, the inner function has access to the variable a, and hence inner is said to have closure over the variable a.

## Example 2

We can take advantage of closures to effectively hide things we might not want to expose to the public using our program.
Here’s an (impractical) example that demonstrates this:

```javascript
function outer(number) {
  const secretNumber = 23;
  function inner(num) {
    console.log(num * secretNumber);
  }
  return inner(number);
}

outer(10);

//=> 230
```

Here, the outer function returns another function that has access to the variable secretNumber.

Although the above example is maybe a bit simple, and ineffective (anybody can guess what secretNumber is by calling outer(1)), it demonstrates how you can use closures to make things private.

## Example 3: reusable functions

We can use the power of closures to make functions that are reusable in different contexts.

```javascript
function adder(firstNumber) {
  function add(secondNumber) {
    console.log(firstNumber + secondNumber);
  }
  return add;
}

const addFive = adder(5);
addFive(10);
//= > 15

const addTen = adder(10);
addTen(100);
// => 110
```

Note that the adder function above returns the add function, but it does not invoke it (like so: add()). This means that when we invoke adder with a firstNumber argument (for eg: const addFive = adder(5), it returns a function that now knows what the value of firstNumber is, and we can invoke it (like so: addFive(10)) to get the final result.

## Example 5: a more practical example of reusable closures

I found the above adder function really helpful in understanding this use of closures, but didn’t really ‘get’ how it could be used practically until I saw some real production code.

Here’s an example that hopefully makes things clearer.

Note: I’m using the package axios to fetch data — _you don’t need to know anything about how axios works to understand the example below_

```javascript
// Reusable data fetcher function
function dataFetcher(url) {
  return async function getData(path) {
    try {
      const endpoint = path ? `${url}/${path}` : url;
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

// Reusable UK police data fetcher function
async function ukPoliceForceDataFetcher(path) {
  try {
    const policeForces = dataFetcher("https://data.police.uk/api/forces");
    const result = await policeForces(path);
    console.log("result", result);
  } catch (error) {
    console.log(error);
  }
}

// EXAMPLES OF FUNCTION RE-USE

// Example 1: Invoking it without a path parameter
ukPoliceForceDataFetcher();

// Example 2: Invoking it with 'leicestershire'
ukPoliceForceDataFetcher("leicestershire");

// Example 3: Invoking it with 'essex'
ukPoliceForceDataFetcher("essex");
```

I create a generic dataFetcherfunction that takes in a URL, and returns a function that takes an additional path parameter. I’m using this to be able to change the path dynamically to get results for different cases.

I create a more specific data fetcher called ukPoliceForceDataFetcher that uses the dataFetcher function in step 1 and passes in the url for the UK police forces API (I chose this as it doesn’t need any authentication)

The ukPoliceForceDataFetcher function returns another function that can take a region as the path parameter, and return the relevant details for that region. If no region is supplied, it defaults to returning the names and ids of all the regions.

The example above shows how it is possible for us to re-use the ukPoliceForceDataFetcher function when we want to get data for different regions, but the point of making the generic dataFetcher function makes it possible for us to re-use that as well. Let’s see a working example.

## Example 6: re-using the generic dataFetcher function

```javascript
// Here's the genetic dataFetcher function that we used to create our ukPoliceDataFetcher above
function dataFetcher(url) {
  return async function getData(path) {
    try {
      const endpoint = path ? `${url}/${path}` : url;
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

// Now, here's another re-use of it. Same function, but now we're using the https://jsonplaceholder.typicode.com/todos API.
async function getToDos(path) {
  try {
    const placeHolderUrl = "https://jsonplaceholder.typicode.com/todos";
    const todos = dataFetcher(placeHolderUrl);
    const result = await todos(path);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getToDos(); // Gets the entire to do list
getToDos("1"); // Gets the to do with id: 1
getToDos("23"); // Gets the to do with id: 23
```

We could build this out a lot more by passing other arguments like queryString, request body along with path, but the general concept is what is most important.

If you have suggestions to make this simpler, or questions, please leave it as a comment below!
