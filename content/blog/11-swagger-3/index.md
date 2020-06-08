---
path: "/open-api-swagger-3-setup"
date: "14/02/2019"
title: "Setting up an express service using Swagger 3.0"
posttype: "blog"
category: "javascript"
description: ""
---

This is a quick tutorial on setting up a simple express service using swagger 3.0. 

Note: _If you'd like to know why creating API definitions might be a good idea, [this is a good read](https://swagger.io/blog/api-development/why-you-should-create-an-api-definition/)._

The biggest advantage of Swagger 3.0 that I've discovered are:

- Request and response validation out of the box
- Operation handlers to replace routers

## Request & response validation

Let's say our service has a GET route called `/healthcheck/ready` that we call to determine the readiness of the service. 

We don't want just anyone calling this route, and so we require an authorization token in the header. Swagger lets us automagically check for authorization in the headers, and throw a 400 (malformed request) without writing any additional code. 

Similarly, if the `/healthcheck/ready` route returns a 200 response with the body `{ "ready": true }` and we're mistakenly responding with `{ "status": "ready" }`, we can automatically catch that and throw an error. 

This also makes our service easier to test without writing boilerplate validation code. 

## Operation handlers

In the place of having traditional routers, swagger lets us define the functions directly in our swagger yaml file. Scroll down to find examples

## Starting with a basic express service

Here's [a branch you can clone that starts you off with the basic express service](https://github.com/nkhil/swagger-3-setup/tree/express-scaffolding).

## Add Swagger definitions

Add a `definitions` folder at the root of your project, and add a `.yaml` file with the name of your project - which in this case will be `swagger-three-setup.yml`.

**Let's start with the first route**: `/healthcheck/ping`

Its too long to include in the post, so I've put it on another branch here: [https://github.com/nkhil/swagger-3-setup/blob/swagger-beginning/definitions/swagger-three-setup.yml](https://github.com/nkhil/swagger-3-setup/blob/swagger-beginning/definitions/swagger-three-setup.yml).

The `paths` section now has our new route definition, followed by the `components` section which includes `responses`, `parameters` and `schemas`. This basically lets us re-use our definitions (keeping our definition DRY), and also helps keep the swagger readable. 

Copy the contents of `swagger-three-setup.yaml` and paste it into [http://editor.swagger.io/](http://editor.swagger.io/) to see a visual representation of your definitions.

Our `/healthcheck/ping` route requires `x-correlation-id` to be present in the headers, and it needs it to be a UUID ([universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)). 

You will notice in our path definition below, we have a property `x-eov-operation-id` and  `x-eov-operation-handler`. We'll come back to this shortly. 

```yml
paths:
  /healthcheck/ping:
    get:
      description: Returns the readiness of the service
      operationId: ping
      x-eov-operation-id: ping
      x-eov-operation-handler: healthcheck
      parameters:
        - $ref: '#/components/parameters/x-correlation-id'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                properties:
                  message:
                    type: string
                    example: OK
        '401':
          $ref: '#/components/responses/401'
        '404':
          $ref: '#/components/responses/404'
        '500':
          $ref: '#/components/responses/500'
```

In the `src/index.js` file, we'll now install the `express-openapi-validator` package which allows us to validate requests and responses in real-time. 

Create a folder in your `./src` folder called `handlers` that we can use to add handlers to. 

Here's the setup code for the open API validator (this goes in the `./src/index.js` file):

```javascript
'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const { OpenApiValidator } = require('express-openapi-validator');
const config = require('./config');

const app = express();
const apiSpec = path.join(__dirname, `../definitions/${config.name}.yml`);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

new OpenApiValidator({
  apiSpec,
  validateResponses: true,
  operationHandlers: path.join(__dirname, './handlers'),
})
  .install(app)
  .then(() => {
    app.use((err, _, res) => {
      res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
      });
    });
  });

module.exports = app;
```
Note how we're passing in the `apiSpec`, which is the location of our swagger `.yml` file. The `OpenApiValidator` takes our definitions, and makes sure any incoming requests, and outgoing responses match the definitions we've specified. 

Okay, we're almost there. Setup a file called `healthcheck.js` in the `./src/handlers` folder created earlier and add this in there: 

```javascript
// ./src/handlers/healthcheck.js

'use strict'

function ping(_, res) {
  res.status(200).json({ message: 'OK' });
}

module.exports = { 
  ping,
}

```

We'd specified our operation handler and id earlier: 

```yml
  /healthcheck/ping:
    get:
      description: Returns the readiness of the service
      operationId: ping
      x-eov-operation-id: ping
      x-eov-operation-handler: healthcheck
```

our `x-eov-operation-handler` in our swagger is called `healthcheck`, and our `x-eov-operation-id` is called `ping`.

the `OpenApiValidator` is aware of this, and will automatically route all requests coming through to `/healthcheck/ping` to the `ping` function. 

## Testing the setup

1. Run `npm run develop` which should spin up our server
2. Open up Postman to send a request to this endpoint and try sending a `GET` request to `localhost:8080/healthcheck/ping`

We get a `400 Bad Request` status code with the following error: 

```html
Bad Request: request.headers should have required property &#39;x-correlation-id&#39;<br> &nbsp; &nbsp;at Object.GET-/healthcheck/ping-not_provided (/Users/nikhil/Sandbox/swagger-3-setup/node_modules/express-openapi-validator/dist/middlewares/openapi.request.validator.js:92:31)

// note: This is only part of the error message
```

As specified in our swagger, even before our request hits the `ping` function, it's validated to see if it matches our swagger specification, and if not - it automatically throws a `400 Bad Request` error. 

If your code returns the wrong result, for eg if the request is good, but our `ping` function returns a result that doesn't match the swagger. For eg: 

```javascript
function ping(_, res) {
  res.status(200).json({ message: { message: 'OK' } });
}
```

The resulting status code is a `500 Internal Server Error` with a message: 

```html
Internal Server Error: .response.message should be string
```

We can now use the validator to component test our code for our happy and unhappy paths scenarios, for eg: 

- When my request is incorrect, I get a 400 response code
- When my request is correct, I get a 200 response code
- When my response is incorrect, I get a 500 response code

You can find the code here: [https://github.com/nkhil/swagger-3-setup](https://github.com/nkhil/swagger-3-setup). 









