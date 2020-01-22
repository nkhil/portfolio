---
path: '/http-status-code-checker'
date: '13/02/2019'
title: 'Offline HTTP status code reference in the CLI'
something: 'something2'
posttype: 'project'
category: 'javascript'
description: 'I designed a train map for the Mumbai train system'
tags:
  - 'javascript'
  - 'hoisting'
---

![status code checker](./stts.png)

I built a tool that lets me look up definitions for HTTP status codes offline and straight from within my terminal. This is also the first npm module I've made that needs to work from within the terminal.

## Download the npm package

You can download it as an npm module here: [https://www.npmjs.com/package/stts](https://www.npmjs.com/package/stts)

## Making your first npm module

I love making little tools that make life easier - so I made this simple offline reference tool. I actually tend to use it more than I expected which is cool. Also, I got to do some rudimantary web scraping.

## The business logic is trivial

First of all, here is a link to the Github project: [https://github.com/nkhil/stts](https://github.com/nkhil/stts).

All my code is inside the src folder. The actual logic is super basic - I have an object (look for _data.json_ if you're looking at the github repo) with status codes and their descriptions as key-value pairs. I also have an array of all the HTTP status codes. Then it's just a matter of looping over the status codes array, and if that status code exists as a key, then I log out the description in the console. 

For styling / formatting, I'm using a couple of external dependencies like chalk and word-wrap. 

## Getting it to work from within the command line

Once I'd published the module, getting it to work from within the terminal was slightly tricky, but thanks to [this article](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e) for making it trivial - you need to add a shebang character on top of the index.js file

```
#!/usr/bin/env node
```

and map the script to a command in the _package.json_

```
"bin": {
  "stts": "./src/index.js"
}
```

Publishing an npm package is easy and you'll find [loads](https://dev.to/therealdanvega/creating-your-first-npm-package-2ehf) [of](https://medium.com/the-andela-way/build-and-publish-your-first-npm-package-a4daf0e2431) [resources](https://medium.com/@bretcameron/how-to-publish-your-first-npm-package-b224296fc57b) for that out there.



