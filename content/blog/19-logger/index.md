---
path: "/how-to-redact-sensitive-information-node-pino-noir"
date: "03/06/2021"
title: "How to redact sensitive information from logs using Pino & Pino Noir"
posttype: "blog"
category: "javascript"
description: ""
---

[Pino](https://github.com/pinojs/pino) is a very low overhead logger for Node (their documentation claims it is over 5 times faster than alternatives). Here’s how to create a re-usable logger using Pino, and use [Pino Noir](https://github.com/pinojs/pino-noir).

Here’s a github repo if you’d like to jump into the code directly: [https://github.com/nkhil/simple-logger](https://github.com/nkhil/simple-logger).

The repository above is a very light wrapper around Pino and uses Pino Noir to redact certain keys.

Here’s what our main index.js module looks like:

```javascript
const pino = require('pino');
const noir = require('pino-noir');
const { redactionKeys } = require('./redaction/redaction-keys');
const serializers = { err: pino.stdSerializers.err };

module.exports = pino({
  level: process.env.LOG_LEVEL || 'info',
  serializers: noir(serializers, redactionKeys),
})
```

Quick notes about the code above:

- The index module initialises pino with level and serializer keys
- We’re using the pino standard error serializer to serialize errors
- We pass both the serializers (the pino standard error serializer) and redaction keys (more on this below) to the serializers key.

## Redacting keys

The redacted keys module look like this:

```javascript
module.exports = {
  redactionKeys: [
    'password',
    'userId',
    'email',
    'emailAddress',
    'address.*',
    'details.user.*'
  ],
}
```

Pino Noir lets us use wildcards (eg: address.* ), as well as chained keys (eg: details.user ) to redact important information from the logs.

