---
path: "/gauss-summation-algorithmic-complexity"
date: "03/06/2021"
title: "Using Gauss summation to add numbers faster"
posttype: "blog"
category: "javascript"
description: ""
---

[Guasian summation](https://letstalkscience.ca/educational-resources/backgrounders/gauss-summation) is essentially an easier way of adding linear numbers in a list without having to iterate over every element. I came across it while reading the [impostor's guide](https://bigmachine.io/products/the-imposters-handbook/) and wanted to write a quick post about how much more efficient it is.

The formula essentially is this: 

```
(largest_number * (largest_number + 1)) / 2
```

`largest_number` here is just the largest number in our list of consecutive numbers.

For example, if you have an array `[1, 2, 3, 4, 5]`, `5` is the largest number so adding up the numbers in the array would be as simple as `(5 * (5 + 1)) / 2` which gives us `15`.

Aside from being a neat trick, it's pretty interesting if you look at this solution from an algorithmic complexity point of view. 

If we solved this problem by iterating through the array and summing up each element to calculate the total, it would look something like this: 

```js
const arr = [1, 2, 3, 4, 5]
const total = arr.reduce((acc, val) => acc + val, 0)
// total = 15
```

Iterating through an array, and doing a calculation for each element means that the number of operations we perform will depend on the number of elements in the array. Hence, this approach is **O(n)** complexity.

What about the gauss summation we used earlier. Here are the steps we take there: 

1. Find the largest number in the array (since our array is sequential, that is the last element in our array)
2. Calculate the result of our equation (largest_number * (largest_number + 1)) / 2

Both of these operations might take a certain amount of time, but they are always constant, making our algorithm a constant-time algorithm i.e. **O(1)**.

## Gauss summation is almost 95% quicker

I tried this out by creating an array of size `100` (i.e. `[0, 1, 2...99]`) and compared time it took for the guassian summationwith iterating through the entire array, and here are the results: 

- Iterating through the array: 0.003357311725616455ms
- Using the guassian equation (tk): 0.001158007174730301ms

Percentage difference: 97.4152%

P.S. In case you’re wondering, I wrote a tiny library [perf-test-helper](https://www.npmjs.com/package/perf-test-helper) that I’m using to test how long the two approaches took.

## Further reading

Here’s a pretty cool example of gauss’ summation being used to find missing numbers in an array: [https://dev.to/alisabaj/the-gauss-sum-and-solving-for-the-missing-number-996](https://dev.to/alisabaj/the-gauss-sum-and-solving-for-the-missing-number-996)
