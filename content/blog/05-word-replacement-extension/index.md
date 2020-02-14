---
path: '/word-replacement-chrome-extension'
date: '14/02/2019'
title: 'How to make a word replacement Chrome extension'
something: 'something2'
posttype: 'blog'
category: 'javascript'
description: 'This is a second test'
tags:
  - 'javascript'
  - 'hoisting'
---

I recently made the ‘[Brexit means Breadsticks](https://chrome.google.com/webstore/detail/brexit-means-breadsticks/okbmmlhhebmgpjgjhffamejlcgclpkkh?hl=en-GB)’ Chrome extension that replaces all mentions of the word ‘Brexit’ with ‘Breadsticks’. Here’s how you can make a similar word replacement extension for Chrome.

First of all, [here](https://github.com/nkhil/Brexit_means_Breadsticks) is the code for it on GitHub. Feel free to use it however you like.

If you’re still reading this, here is how I went about this. This was trickier than I expected, and I didn’t want to use code I found online to do this because, well, it was a weekend project I made for fun and sticking someone else’s code in and calling it a day isn’t as much fun. Also, I’d be lying if I said I understood everything that the ‘[cloud to butt](https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js)’ code did.

## Act 1: Failure

This is what I tried at first:

```
const words = [...document.body.getElementsByTagName('*')];

const strip = words.forEach(element => {
    element.innerHTML.replace(/Brexit/gi, 'Breadsticks');
});
```

Note to self: .replace() does not modify the existing variable, so you need to re-assign it to work.

I also tried

```
document.body.innerHTML = document.body.innerHTML.replace(/Brexit/gi, 'Breadsticks');
```

Which I thought was clever. But it kind of breaks the internet if you’re running this code on all pages you load. This will strip off .addEventListener() at best, and break a whole bunch of things I’m not even sure about at worst.

## Act 2: Frustration & More Failure

So, my hypothesis here was that, select all the elements on a page using getElementsByTagName('*') and then loop through it to find the word I’m looking to replace, and then use regex to do the global replacement. Sounds simple enough. But it wouldn’t work. Arghhh.

## Act 3: Redemption

I got some help from a senior developer at work. I wasn’t way off. What I needed to do was nest another .forEach() loop inside my .forEach() loop to look inside the nodes I was looping over. Then, select only the ones with nodeType == 3 which are the text nodes, and THEN run the regex text replacement.

**Here’s the working code. Seeing it work without breaking brought a tear to my eye.**

```
var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/Brexit/gi, 'Breadsticks');
  value = value.replace(/brexit/gi, 'breadsticks');
  node.nodeValue = value;
}

window.onload = findAndReplace();
```