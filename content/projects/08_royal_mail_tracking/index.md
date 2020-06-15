---
path: "/track-royal-mail-packages-with-puppeteer-script"
date: "13/02/2019"
title: "Tracking Royal Mail packages with Node"
something: "something2"
posttype: "project"
category: "javascript"
description: "I wrote a puppeteer script to track package deliveries"
tags:
  - "javascript"
  - "hoisting"
---

**Note**: This is still a work in progress (WIP).

I've had a send a couple of packages recently, and I thought of automating the process of checking if my package had been delivered. Instead of having to remember and check multiple times, I'd really like if I could just get a text notification if my package had been delivered. 

Here's the script: [https://github.com/nkhil/royalmail-track-package-script/blob/master/src/script.js](https://github.com/nkhil/royalmail-track-package-script/blob/master/src/script.js)

I've been meaning to use [puppeteer](https://www.npmjs.com/package/puppeteer) for a side project, so this was an obvious choice. 

I also used [node-schedule](https://www.npmjs.com/package/node-schedule) to run this script as a scheduled task. I'd like to run this once an hour, as a default to make sure I'm not hammering the royal mail website. 

In its current state, the script is far from perfect. It has a hard-coded tracking number (one that's not valid anymore). It checks for an error, and if none exists, takes a screenshot of the page. I'm putting this on hold till I have another tracking code to test with and know what the 'happy path' looks like.
