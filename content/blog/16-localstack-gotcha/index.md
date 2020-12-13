---
path: "/localstack-container-badrequest-error"
date: "14/02/2019"
title: "Quick gotcha: localstack returning BadRequest"
posttype: "blog"
category: "javascript"
description: ""
---

This is a quick gotcha if you keep getting `BadRequest` without a useful error message trying to connect another container to localstack S3.

Here’s part of the error I was getting:

```javascript
{
  ...
  message: null,
  code: 'BadRequest',
  region: null,
  time: 2020-12-02T13:41:48.630Z,
  requestId: null,
  extendedRequestId: undefined,
  cfId: undefined,
  statusCode: 400,
  retryable: false,
  retryDelay: 85.98033816170914
}
```

## If you’re getting this error, check if you’ve specified a DEFAULT_REGION in the docker-compose.yml file.

Here’s what my docker-compose.yml looked like:

```yml
# docker-compose.yml
localstack:    
  networks:      
    testing_net:        
      ipv4_address: 172.28.1.9    
  image: localstack/localstack:latest    
  environment:      
    - SERVICES=s3:4566      
    - DEFAULT_REGION=us-east-1 👈 THE CULPRIT! 😠      
  
  # I won't include the whole localstack config as it isn't relevant.
```
  
If you’ve specified a default region, when you initialise the AWS SDK, it will expect a region to be passed in.

For eg:

```javascript
// correct ✅
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
  endpoint: 'http://172.28.1.9:4566',
  accessJeyId: 'someAccessKeyId',
  secretAccessKey: 'someSecretAccessKey',
  s3ForcePathStyle: true,
  region: 'us-east-1', // read note below*
})
  // *NOTE: If you've got a DEFAULT_REGION in you docker-compose.yml file, you will need to pass in a region

```
I thought I’d write this up in case it helps someone else. The error message wasn’t very helpful and I spent more time than I’d like to admit on it.