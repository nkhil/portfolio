---
path: "/testing-stdout-in-node-js-jest"
date: "14/02/2019"
title: "Testing stdout in Node.js using Jest"
posttype: "blog"
category: "javascript"
description: ""
---

I’m writing this for all of you who’ve been searching for terms like:
- How to test stdout in Node
- How to spy on stdout in Node using Jest
- How to stub stdout in Node

_It took me a day, but thanks to my colleague [James Ransome](https://github.com/jransome) for suggesting the use of Node’s child_process for this, it was fairly easy in the end!_

## I wanted to test Pino’s output to stdout

**Sidenote**: _I know this counts as testing implementation details of a dependency, but in this case I was working on a custom logger library that wrapped around Pino and did a few additional things. Pino decided to introduce breaking changes in v6.x.x where logging strings and objects like logger.info(string, object) wouldn’t work as expected (they would ignore the second parameter)_

The test case essentially was the following:

```javascript
// when I log multiple params using the logger
logger.info('something1', 'something2');
// then I see this in stdout
{"level":30,"time":1612227699012,"msg":"something1 something2","pid":69753,"hostname":"whatever","v":1}
```

Once we were able to access the output, we’d be able to JSON.parse() it, and assert against the value of msg in the example above.

## The working solution ✅

The solution was to spawn a child process in node, then listen to the EventEmitter on.(‘data’) event to do our assertion.

**The setup**

Create a file that uses the logger, or whatever code you want to test that logs to stdout.

```javascript
// logger.js

const logger = require('./logger.js');

logger.info({ foo: 'bar' }, 'param2');

// Outputs:
// {"level":30,"time":1612298595613,"msg":"param2","pid":3039,"hostname":"whatever","foo":"bar","v":1}
```

**The test**

```javascript
const path = require('path');
const { spawn } = require('child_process');

// Run using Jest

describe('logger behaviour', () => {
  it('logs out multiple params - 2 strings', done => {
    const testAppFilePath = path.join(
      __dirname,
      '../logger.js',
    )
    const testApp = spawn('node', [testAppFilePath])
    
    testApp.stdout.on('data', data => {
      const stdoutData = JSON.parse(data.toString())
      expect(stdoutData.msg).toBe('param2')
      expect(stdoutData.foo).toBe('bar')
      testApp.kill('SIGINT')
      done()
    })
  })
});
```

**Quick explanation of what’s going on in the test above**

- We set up a logger file that will log things to stdout (logger.js in the example above)
- We spawn a new child process
- We use the newly spawned child process to run node logger.js (which logs things to stdout
- We ‘listen’ to the data being logger using the child_process.stdout.on('data', (data) => <do stuff with data>) pattern.
- We JSON.parse() this data, which lets us assert against values we’re logging out
- Final step: Profit 💲💲💲

## Things that we tried that didn’t work 🙅

Initially, we were trying to use the EventEmitter’s `.on('data', (callback) => {})` directly without spawning a child process. I’m still quite new to `child_process` so I’m not sure why this doesn’t work.

Another thing I tried that didn’t work was spying on stdout using Jest. Luckily, I found [this recent Jest issue](https://github.com/facebook/jest/issues/9984) that hinted that this wouldn’t work because of how Jest was written.

Hope that helps you!
