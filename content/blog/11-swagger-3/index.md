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

Its too to include in the post, so I've put it on another branch here: [https://github.com/nkhil/swagger-3-setup/blob/swagger-beginning/definitions/swagger-three-setup.yml](https://github.com/nkhil/swagger-3-setup/blob/swagger-beginning/definitions/swagger-three-setup.yml).

The `paths` section now has our new route definition, followed by the `components` section which includes `responses`, `parameters` and `schemas`. This basically lets us re-use our definitions (keeping our definition DRY), and also helps keep the swagger readable. 

Copy the contents of `swagger-three-setup.yaml` and paste it into [http://editor.swagger.io/](http://editor.swagger.io/) to see a visual representation of your definitions.

Our `/healthcheck/ping` route requires `x-correlation-id` to be present in the headers, and it needs it to be a UUID ([universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)). 

You will notice in our path definition below, we have a property `x-eov-operation-id` and  `x-eov-operation-handler`.

```yaml
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








