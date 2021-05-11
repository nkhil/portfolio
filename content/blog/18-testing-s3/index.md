---
path: "/how-to-mock-s3-jest-unit-test"
date: "14/02/2019"
title: "How to Mock AWS S3 in a Jest (Unit) Test"
posttype: "blog"
category: "javascript"
description: ""
---
I found it a bit hard to find out how to mock AWS S3 while using Jest. So, I thought I’d document it here.

## Useful Stack Overflow answers:

- [How to mock s3 with Jest](https://stackoverflow.com/questions/61830632/how-to-mock-s3-with-jest/61863825#61863825)
- [Jest mock module per test](https://stackoverflow.com/questions/45006254/jest-mock-module-per-test/45007792#45007792)

## Here’s the code we will be testing

```javascript
const AWS = require('aws-sdk')

// a function that returns a promise
function copyFileToS3() {
  
  // initialise AWS S3
  const s3 = new AWS.S3({
    accessKeyId: 'whatever',
    secretAccessKey: 'whatever',
    endpoint: 'http://localhost:4566', // localstack is running on port 4566. Imagine this was the real S3 endpoint
    s3ForcePathStyle: true,
  })
  
  const copyObjectParams = {
    Bucket: 'some-bucket',
    CopySource: 'some-bucket/some/path/myfile.json,
    Key: 'some-bucket/some/other/path/myfile.json',
  }
  
  return s3.copyObject(copyObjectParams).promise()
}

module.exports = copyFileToS3

```

## Here’s a unit test for the code above using Jest

We’ll be mocking S3, and asserting that S3’s copyObject function gets called with the right parameters.

Obviously, this is a simplistic function with hard-coded values, but the test is valid for a function that maybe does some transformation to the destination key, or does some validation on the CopySource, etc.

```javascript
const copyFileToS3 = require('./s3') // This is the file where we use aws-sdk's S3 CopyObject method

const mockS3Instance = {
  copyObject: jest.fn().mockReturnThis(),
  promise: jest.fn().mockReturnThis(),
  catch: jest.fn(),
}

jest.mock('aws-sdk', () => {
  return { S3: jest.fn(() => mockS3Instance) }
})

describe('S3', () => {
  it('calls aws-sdk copyObject method with correct parameters, async () => {
      await copyFileToS3() // This is the function that uses the copyObject method
  
      expect(mockS3Instance.copyObject).toHaveBeenCalledWith({
        Bucket: 'some-bucket',
        CopySource: 'some-bucket/some/path/myfile.json,
        Key: 'some-bucket/some/other/path/myfile.json',
      })
      expect(mockS3Instance.copyObject).toHaveBeenCalledTimes(1)
   })
})
```

## Some things to note

In the mockS3Instance I am using `.mockReturnThis()`. This is used to allow for chaining it to another method (in this case, promise which gets called like so: `s3.copyObject(params).promise()` in my code.

In the `mockS3Instance`, I have keys for promise and catch. This is because I was chaining `copyObject` with `promise()` as well as a `catch` block, hence I’m mocking those out too.

Hope this helps someone! 
