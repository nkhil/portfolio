---
path: "/aws-s3-create-bucket-copy-files-localstack"
date: "14/02/2019"
title: "How to create a new S3 bucket and add files to a specific folder using local stack"
posttype: "blog"
category: "javascript"
description: ""
---

_Please note that you will need Docker installed for this_

First copy the contents of this [docker-compose.yml](https://github.com/localstack/localstack/blob/master/docker-compose.yml) file listed in the localstack repository into a local directory (make sure the file name is not changed).

Run up the container with docker-compose up. This will get localstack running locally.
At the time of writing this post (Oct 2020), the S3 service is available on port 4566 (i.e. `http://localhost:4566`)

## Install the aws / localstack wrapper

Install awscli-local from here as a wrapper around localstack. This will allow you to use `awslocal` in your command line, which is very close to the aws command usage.

## Create a new bucket

```bash
awslocal s3api create-bucket --bucket business-time-nonprod --region eu-west-1

# You don't need the region flag in here, but adding one doesn't hurt
```

## Create a new folder inside your newly created bucket

The easiest way I found to create a new folder is to use the `put-object` api.

```bash
awslocal s3api put-object --bucket business-time-nonprod --key some/folder/name/here/

# Make sure you don't forget the trailing / after here. 
# Missing it will mean that aws will treat it as a file and not a folder. 
```

## Add a new file to it

We’re going to copy over a file into the nested `/here` folder you just created.

```bash
touch helloworld.txt # Create a file if you don't already have it

awslocal s3 cp helloworld.txt s3://business-time-nonprod/some/folder/name/here/
```

## Verify that your new bucket exists

```bash
awslocal s3api list-buckets --query "Buckets[].Name"
```

## Verify that the file you just added exists

```bash
awslocal s3 ls s3://business-time-nonprod/some/folder/name/here --recursive --human-readable --summarize
```

## Add tags to your file

```bash
awslocal s3api put-object-tagging \
    --bucket business-time-nonprod \
    --key helloworld.txt \
    --tagging '{"TagSet": [{ "Key": "version", "Value": "1.0.0" }]}'
```

## Check the tags on a file

```bash
awslocal s3api get-object-tagging \
  --bucket business-time-nonprod \
  --key helloworld.txt
```

## How to automatically create buckets and folders

If you're using `localstack` in your project, and would like to create a certain bucket, or folders within that bucket when you start up `localstack`, you will need to modify the docker-compose.yml file I've listed above to include these values: 

```bash
// docker-compose.yml
environment:
- SERVICES=s3
- DATA_DIR=/tmp/localstack/data
...
volumes:
- ./stubs/s3:/tmp/localstack
- /var/run/docker.sock:/var/run/docker.sock
```

With `DATA_DIR=/tmp/localstack/data` , we're asking localstack to use `tmp/localstack/data` as the directory to store data inside the container. Then, we create a volume to sync all the data between the docker container and our local machine using `./stubs/s3:/tmp/localstack` . If Docker doesn't automatically create this /stubs/s3 folder for you, you might need to create it yourself. 

Now, with the above changes to the `docker-compose.yml` file, run up localstack using `docker-compose up`. 

With the localstack container up, create a new bucket called test:
```bash
awslocal s3api create-bucket --bucket test
```

Now, create a folder called /data inside the bucket.

```bash
awslocal s3api put-object --bucket test --key data/
You will notice you have a new file within the /stubs/s3/data folder called recorded_pi_calls.json which contains 2 new lines, which looks something like this:
{"a": "s3", "m": "PUT", "p": "/test", "d": "", "h": {"Remote-Addr": "172.17.0.1", "host": "localhost", "Accept-Encoding": "identity", "User-Agent": "aws-cli/2.0.54 Python/3.7.4 Darwin/19.5.0 exe/x86_64 command/s3api.create-bucket", "X-Amz-Date": "20201017T124953Z", "X-Amz-Content-Sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "Authorization": "AWS4-HMAC-SHA256 Credential=_not_needed_locally_/20201017/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=53ac9510e79cfd96ed389f1f649e20e748e511e7a2817f450ccdc7695c2df992", "Content-Length": "0", "X-Forwarded-For": "172.17.0.1, localhost:4566, 127.0.0.1, localhost:4566", "x-localstack-edge": "https://localhost:4566", "content-type": "binary/octet-stream", "Connection": "close"}, "rd": "PENyZWF0ZUJ1Y2tldFJlc3BvbnNlIHhtbG5zPSJodHRwOi8vczMuYW1hem9uYXdzLmNvbS9kb2MvMjAwNi0wMy0wMSI+PENyZWF0ZUJ1Y2tldFJlc3BvbnNlPjxCdWNrZXQ+dGVzdDwvQnVja2V0PjwvQ3JlYXRlQnVja2V0UmVzcG9uc2U+PC9DcmVhdGVCdWNrZXRSZXNwb25zZT4="}
{"a": "s3", "m": "PUT", "p": "/test/data/", "d": "", "h": {"Remote-Addr": "172.17.0.1", "host": "localhost", "Accept-Encoding": "identity", "User-Agent": "aws-cli/2.0.54 Python/3.7.4 Darwin/19.5.0 exe/x86_64 command/s3api.put-object", "X-Amz-Date": "20201017T125025Z", "X-Amz-Content-Sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "Authorization": "AWS4-HMAC-SHA256 Credential=_not_needed_locally_/20201017/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=7a53668d9719cde83f6ac0a100b3e1a14eca25d568bca1f63a20cb11695b2d7b", "Content-Length": "0", "X-Forwarded-For": "172.17.0.1, localhost:4566, 127.0.0.1, localhost:4566", "x-localstack-edge": "https://localhost:4566", "content-type": "binary/octet-stream", "Connection": "close"}, "rd": ""}
```

These are the lines that are responsible for creating the resources (buckets and folders that you need).

**Important**: Make sure you commit the `recorded_api_calls.json` file at this point to version control, so if others in your team (or you cloning this repo on another computer) will have access to these. In the same vein, make sure you're not committing unnecessary changes to this file that do not reflect the state of the S3 buckets / folders you want when you spin up localstack.
