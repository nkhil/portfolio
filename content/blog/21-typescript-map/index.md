---
path: "/enforce-keys-in-a-map-type-typescript"
date: "03/06/2021"
title: "Enforce that all keys in a map are a key of a certain type"
posttype: "blog"
category: "javascript"
description: ""
---

If you’re instantiating a new Map data structure, for eg:

```js
const myMap = new Map();
```

and you want to ensure that every key in this object belongs to a certain type where the key will always be a string (as a Map allows you to set other types as
the key as well, for eg: a number)

```js
function foo(someKey: string) {
  const myMap = new Map()
  const myMap.set(someKey, 'some_value')
}
```

We can use the Typescript Extract keyword like so:

```ts
type KeyOf<T> = Extract<keyof T, string>
And our function will now look like so:
function foo<T>(someKey: KeyOf<T>) {
  const myMap = new Map()
  myMap.set(someKey, 'some_value')
}

```

If in the example above, `foo` isn’t a key of `T` , you will get a compile/transpile time error.

Here’s an example that will get caught if you try to use it.

```ts
type Transaction = {
  merchantName: string;
  transactionAmount: number;
};
foo < Transaction > "merchantId";
// Error: Argument of type '"merchantId"' is not assignable to parameter of type 'keyof Transaction'
```

This will ensure you’re only setting keys of a certain type as the key in a map.
