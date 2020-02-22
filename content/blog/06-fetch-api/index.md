---
path: "/javascript-fetch-api-uk-bank-holidays"
date: "14/02/2019"
title: "How to use the JavaScript fetch API to get UK bank holidays (step by step)"
something: "something2"
posttype: "blog"
category: "javascript"
description: "This is a second test"
tags:
  - "javascript"
  - "hoisting"
---

In this article, I’m going to cover a simple example of how to get data from an API using the fetch() method , and then manipulate it.

I found this UK Bank Holidays JSON API: https://www.gov.uk/bank-holidays.json

Now, we’d like to fetch() some data from it. let’s get started.

## Step 1:

```javascript
// Declare a variable, to avoid using the full URL
const endpoint = "https://www.gov.uk/bank-holidays.json";

fetch(endpoint);

// Yep, it's that easy.
```

“But wait..nothing happened” you say? Give it a second okay…

## Onwards…Step 2

We can use the .then() method to do something with that response. Let’s console.log it to see what was returned.

```javascript
const endpoint = "https://www.gov.uk/bank-holidays.json";

fetch(endpoint).then(response => console.log(response));
```

Here’s what is logged in the console:

![1.png](https://i.postimg.cc/BvkkNt3b/1.png)

Here we have a Promise followed by a Response. Cool! We can check out some of the properties on these to see what we can do with this. If you look under Promise, you’ll notice that our response type is cors and we have another then method on it. Let’s keep that in mind for later. Under Response you’ll see a JSON method.

Promises are interesting, and kind of out of the scope for this article. You can read more about it [here](https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de).

## Step 3:

Now, we’re going to use the .json() method to our response, and chain another .then() to console log what gets returned.

```javascript
const endpoint = "https://www.gov.uk/bank-holidays.json";

fetch(endpoint)
  .then(response => response.json())
  .then(data => console.log(data));
```

The result:

![2](https://i.postimg.cc/BbKqNRR9/2.png)

Holy biscuits batman, we have first contact! That’s data from our fetch method.

You can open this up to find lots of nested objects which are basically our holidays that we’re after.

![3.png](https://i.postimg.cc/MphgmvqT/3.png)

It always helps me to console.log() things to check if I’ve got the right data. The important information we’re after is the title and date in them. We can access them by data.england-and-wales.title right? Wrong. As the object name contains hyphens, you’ll need to wrap it up in square brackets (and lose the . ), so it looks like data['england-and-wales'].title . Now that should give you what you need!

So here’s what our code looks like all together:

```javascript
const endpoint = "https://www.gov.uk/bank-holidays.json";

fetch(endpoint)
  .then(response => response.json())
  .then(data => console.log(data));
```

But we don’t just want this in our console, we want to manipulate it and make it do stuff, remember? So instead of logging it in our console, let’s pass it a function called handleData with data as the attribute.

## Step 4:

```javascript
const endpoint = 'https://www.gov.uk/bank-holidays.json';

fetch(endpoint)
     .then((response) => response.json())
     .then((data) => handleData(data);

```

## Step 5:

We would now like to write a function that takes the title and the date from the england-and-wales object, and display a list of all the holidays we have.

```javascript

function handleData(data) {
 let bankHolidays = data; //For ease
 let england = bankHolidays["england-and-wales"].events;
// Now, we're ready to map over each object inside of 'england'
// array (this is only possible because it's an array and not
// an object.
// Let's assign it to a variable so we can pass it onto the HTML
const html = england.map((items) =>{
return `
     <li>${items.title} <br/> <span class='yellow'>(${date} / ${month} / ${year})</span>  </li>
     `;
     }

     }).join('');
 });

```

In case things broke down for you here. All we’re doing is mapping over the events array, and [using backticks (or template literals)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) provided by ES6 to pas in items inside the events array into a neat format we can use in our HTML. Also, since .map() returns another array, we’re using a .join('') at the end there to return a string.

_If you’re getting confused here, just read up on the .map() method — it’s not hard, I promise._

## Step 6

Now that we have our html variable that contains everything we need to inject inside our HTML code, we can do this easily using the .innerHTML() method.

Our HTML can be something simple like

```html
<ul id="holidays"></ul>
```

and we just need to select this at the beginning of our JS script with

```javascript
const ul = document.getElementById("holidays");
```

and now, inside our function, we can just do this

```javascript
ul.innerHTML = html;
```

And just like that, you’re using the fetch() API to get data, manipulate it slightly and then display it in your HTML.
I have a working version of this code here: [https://codepen.io/mushroom23/pen/NOxBOM](https://codepen.io/mushroom23/pen/NOxBOM)

OR fork this Github repo: [https://github.com/nkhil/UK-bank-holidays-using-fetch-API](https://github.com/nkhil/UK-bank-holidays-using-fetch-API).
