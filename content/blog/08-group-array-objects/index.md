---
path: "/group-array-objects-in-javascript"
date: "14/02/2019"
title: "How to Group an array of objects"
something: "something2"
posttype: "blog"
category: "javascript"
description: "This is a second test"
tags:
  - "javascript"
  - "hoisting"
---

Here's the array we're starting off with:

```javascript
const albums = [
  {
    artist: "Pearl Jam",
    album: "Ten",
    year: "1991"
  },
  {
    artist: "Pearl Jam",
    album: "Yield",
    year: "1998"
  },
  {
    artist: "Soundgarden",
    album: "Badmotorfinger",
    year: "1991"
  },
  {
    artist: "Soundgarden",
    album: "Superunknown",
    year: "1994"
  }
];
```

We now want to group this array. We can do this by artist, or by year.

## Here are the results we want:

**Group by year**

```javascript
  {
    1991: [
      {
        {
          artist: 'Pearl Jam',
          album: 'Ten',
          year: '1991',
        },
        {
          artist: 'Soundgarden',
          album: 'Badmotorfinger',
          year: '1991',
        },
      }
    ],
    1994: [
      {
        artist: 'Soundgarden',
        album: 'Superunknown',
        year: '1994',
      },
    ],
    1998: [
      {
        artist: 'Pearl Jam',
        album: 'Yield',
        year: '1998',
      },
    ]
  }
```

**Group by artist**

```javascript
  {
    'Pearl Jam': [
      {
        artist: 'Pearl Jam',
        album: 'Ten',
        year: '1991',
      },
      {
        artist: 'Pearl Jam',
        album: 'Yield',
        year: '1998',
      },
    ],
    'Soundgarden': [
      {
        artist: 'Soundgarden',
        album: 'Badmotorfinger',
        year: '1991',
      },
      {
        artist: 'Soundgarden',
        album: 'Superunknown',
        year: '1994',
      },
    ]
  }
```

## Implementation

```javascript
function groupBy(key) {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  };
}

const groupByYear = groupBy("year");
groupByyear(albums);

const groupByArtist = groupBy("artist");
groupByArtist(albums);
```

## Explanation

Our `groupBy` function is a curried function that makes use of partial application to help keep this function re-usable. 

The `groupBy` function takes a key (eg: 'year') as its only argument, and returns another function `group`, which in turn takes the array of objects that we'd like to sort. 

Within the `group` function, we're reducing the array using an empty object as the accumulator (because that's the shape of the final result we're after).

Inside the reduce, say our key is 'year', and it's our first iteration (which means out acc is an empty object without any key-value pairs). 

```javascript
const property = obj[key];
// obj[key] here will be '1991'.

acc[property] = acc[property] || [];
// At this point acc['1991'] doesn't yet exist, so it will be an empty array. This step is important as it checks if acc['1991'] exists, and if not, creates it and assigns a value of an empty array.

acc[property].push(obj);
// Here, all we're doing is pushing our object into the right group
```

**Full disclosure**: I came across this solution on [JamieMason's](https://gist.github.com/JamieMason/0566f8412af9fe6a1d470aa1e089a752) Github gist.
