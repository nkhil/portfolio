---
path: "/aws-s3-create-bucket-copy-files-localstack"
date: "14/02/2019"
title: "How to create a new s3 bucket and add files to a specific folder using local stack"
posttype: "blog"
category: "javascript"
description: ""
---

_Please note that you will need Docker installed for this_

First copy the contents of this [docker-compose.yml](https://github.com/localstack/localstack/blob/master/docker-compose.yml) file listed in the localstack repository into a local directory (make sure the file name is not changed).

Run up the container with docker-compose up. This will get localstack running locally.
At the time of writing this post (Oct 2020), the S3 service is available on port 4566 (i.e. `http://localhost:4566`)

## Install the aws / localstack wrapper

Install awscli-local from here as a wrapper around localstack. This will allow you to use awslocal in your command line, which is very close to the aws command usage.

## Create a new bucket

```bash
awslocal s3api create-bucket --bucket business-time-nonprod --region eu-west-1

# You don't need the region flag in here, but adding one doesn't hurt
```

## Create a new folder inside your newly created bucket

The easiest way I found to create a new folder is to use the put-object api.

```bash
awslocal s3api put-object --bucket business-time-nonprod --key some/folder/name/here/

# Make sure you don't forget the trailing / after here. 
# Missing it will mean that aws will treat it as a file and not a folder. 
```

## Add a new file to it

We’re going to copy over a file into the nested here folder you just created.

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

