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
