---
path: "/rsa-encryption-in-nodejs"
date: "03/06/2021"
title: "RSA encryption in nodejs with code samples"
posttype: "blog"
category: "javascript"
description: ""
---
Node comes with a ‘crypto’ module that helps you create public and private key pairs to use public key cryptography.

## Public key cryptography explained:

This is a great article I came across that explains it well: [https://www.sohamkamani.com/nodejs/rsa-encryption/](https://www.sohamkamani.com/nodejs/rsa-encryption/) (*please do read this article since I don’t cover this in the post*)

Where it fell apart for me was actually implementation, since the keys created were in-memory, and ephemeral. I’m writing this with code samples that you can run to:

- Create a public / private key pair
- Export it, and write it to your file system (as `public.pem` & `private.pem` files)
- Create some sample data to encrypt (this is our secret we don’t want anyone else knowing)
- Encrypting said data, saving it in a file so we can see what it looks like
- Decrypting this encrypted data to get our original secret data

__Here’s the Github repository__: [https://github.com/nkhil/node-crypto](https://github.com/nkhil/node-crypto)

You don’t need to npm i as there are no dependencies, and the crypto module comes with node.

## To create some data to encrypt, run this command

```console

npm run create-data

```

You should now have a file called `data_to_encrypt.txt` in the project root. This is some arbitrary data created using node’s crypto module. If you’re interested, have a look here: [https://github.com/nkhil/node-crypto/blob/master/src/rsa/create-data-to-encrypt.js](https://github.com/nkhil/node-crypto/blob/master/src/rsa/create-data-to-encrypt.js)

OK, so now we have some secret data to encrypt 🎉

In order to encrypt it, we need to first create our Public-Private key pair. In the real world, we would give our our public key publicly, and anyone would be able to use the public key to encrypt data, send it to us, and only we would be able to read that data (using our private key that only we will have).

__Sidenote__: This is a great little comic that explains public-private keys: [https://howhttps.works/the-keys/](https://howhttps.works/the-keys/)

## Creating our public-private key pair

Here’s how we will create our public-private key pair, export it and write it to file.

```js
const crypto = require('crypto')
const fs = require('fs')

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
})

// *********************************************************************
//
// To export the public key and write it to file:

const exportedPublicKeyBuffer = publicKey.export({ type: 'pkcs1', format: 'pem' })
fs.writeFileSync('public.pem', exportedPublicKeyBuffer, { encoding: 'utf-8' })
// *********************************************************************


// *********************************************************************
//
// To export the private key and write it to file

const exportedPrivateKeyBuffer = privateKey.export({ type: 'pkcs1', format: 'pem' })
fs.writeFileSync('private.pem', exportedPrivateKeyBuffer, { encoding: 'utf-8' })

// *********************************************************************
```

To create the public / private key pair, you can run:

```console

npm run create-keys

```

Note that we write it to the project root, and are named `private.pem` and `public.pem`.

## Encrypting some data

Here’s how we will be encrypting the data in the file called data_to_encrypt.txt that we created in step 1 (I’ve only numbered the commands you will be using)

```js

const fs = require('fs')
const crypto = require('crypto')

const dataToEncrypt = fs.readFileSync('data_to_encrypt.txt', { encoding: 'utf-8' })

const publicKey = Buffer.from(fs.readFileSync('public.pem', { encoding: 'utf-8' }))

const encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  // We convert the data string to a buffer using `Buffer.from`
  Buffer.from(dataToEncrypt)
)

fs.writeFileSync('encrypted_data.txt', encryptedData.toString('base64'), { encoding: 'utf-8' })

```

To encrypt the data in data_to_encrypt.txt (that we created in step 1 above), use

```console

npm run encrypt-data

```

Once you run this ^, you should have a file named `encrypted_data.txt` in your project root. Feel free to open this file, this is the garbled version of our data.

## Decrypt the data

Here’s the code to decrypt the data

```js
const crypto = require('crypto')
const fs = require('fs')

const encryptedData = fs.readFileSync('encrypted_data.txt', { encoding: 'utf-8' })
const privateKey = fs.readFileSync('private.pem', { encoding: 'utf-8' })

const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    // In order to decrypt the data, we need to specify the
    // same hashing function and padding scheme that we used to
    // encrypt the data in the previous step
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  Buffer.from(encryptedData, 'base64'),
)

fs.writeFileSync('decrypted_data.txt', decryptedData.toString('utf-8'), { encoding: 'utf-8' })
```

Your decrypted data should be the same as the contents of the file `data_to_encrypt.txt`.

Congratulations, you’ve just used RSA encryption to encrypt some data using the public key, and then use the accompanying private key to decrypt and read that information.

## Some notes

Note that in the real world, you will probably not have the keys as files, but as secure environment variables that are only available within your application. I’ve used files as a way to be able to understand RSA encryption better.

You need to ensure that your private keys are kept safe, since anyone with access to your private keys can read all the encrypted information.

I’ve seen private keys kept securely using a storage solution like AWS S3 buckets (or GCP storage buckets), and making it so only applications with the appropriate IAM role can access files within the bucket. This resource creation is usually managed by Terraform but we won’t go into that.

## References

- [Implementing RSA Encryption and Signing in Node.js (With Examples)](https://www.sohamkamani.com/nodejs/rsa-encryption/)
- [How HTTP works comic](https://howhttps.works/the-keys/)