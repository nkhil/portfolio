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
- Operation handlers 

## Request & response validation

Let's say our service has a GET route called `/healthcheck/ready` that we call to determine the readiness of the service. 

We don't want just anyone calling this route, and so we require an authorization token in the header. Swagger lets us automagically check for authorization in the headers, and throw a 400 (malformed request) without writing any additional code. 

Similarly, if the `/healthcheck/ready` route returns a 200 response with the body `{ "ready": true }` and we're mistakenly responding with `{ "status": "ready" }`, we can automatically catch that and throw an error. 

This also makes our service easier to test without writing boilerplate validation code. 

## Operation handlers

In the place of having traditional routers, swagger lets us define the functions directly in our swagger yaml file. Scroll down to find examples

## Start with a basic express service

Here's [a branch you can clone that starts you off with the basic express service](https://github.com/nkhil/swagger-3-setup/tree/express-scaffolding).

## Add Swagger definitions

Add a `definitions` folder at the root of your project, and add a `.yaml` file with the name of your project - which in this case will be `swagger-three-setup.yml`.





