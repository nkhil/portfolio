---
path: "/convert-openssh-key-to-rsa-pkcs1"
date: "03/06/2021"
title: "Convert an OpenSSH key into an RSA PKCS1 format"
posttype: "blog"
category: "javascript"
description: ""
---
I’m documenting this since I ran into a couple of snags while trying to convert an open SSH key (that doesn’t play well with Node) into an RSA PKCS1 format in the command line.

See [this Stack Overflow post](https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key/55817907#comment122267621_55817907) for more information and suggestions.

The snippets below assume your private key file is called private.key and you’re currently in the same directory as the private key file.

## The command you need is this:

```
ssh-keygen -p -N "" -m pem -f private.key
```

However, I ended up getting this error:

```
Permissions 0777 for 'private.key' are too open.
 It is recommended that your private key files are NOT accessible by others.
 This private key will be ignored.
```

I solved this👆 issue with:

```
chmod 600 private.key
```

Then I ran into the following error:

```
Key has comment 'This is a comment'
```

I needed to remove this comment, which I did using:

```
ssh-keygen -c -C "" -f private.key
```

After these steps, the original command worked great 🎉

```
ssh-keygen -p -N “” -m pem -f private.key
```
