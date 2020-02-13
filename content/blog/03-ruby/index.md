---
path: '/love-ruby'
date: '14/02/2019'
title: 'How I came to love small objects and methods in Ruby'
something: 'something2'
posttype: 'blog'
category: 'javascript'
description: 'This is a second test'
tags:
  - 'javascript'
  - 'hoisting'
---

I’ve learned how to program mostly on my own. This means I used to write methods like this


```
input.split('').map { |i| i.gsub(/[A-Z]/, points) }.map { |i| i.to_i }.reduce(:+)
```

_(this example is from an actual solution I wrote. No, I’m not proud)_

Now, this makes sense to me. I can read it like a sentence, and understand what the output might be. I’m all for learning and growing, as long as I have a good reason.


I’m currently 4 weeks into the Maker’s 12 week full-stack bootcamp, a lot of the focus so far has been on the concepts around what is “good practice” more than how to make 5-deep nested .map functions.

Concepts I’ve been spending a non-trivial amounts of time focusing on have been things like **single responsibility, cohesion, encapsulation, delegation, dependency injection, loose coupling, short methods (no longer than 5 lines), test driven development (red-green-refactor) etc**. Somehow, I wasn’t expecting my time would be spent doing this, and I couldn’t be happier.

## Wait, but why?

Not that I was fighting it, writing secret 20 line methods when nobody was looking..in fact, I’m just happy to be learning from some of the brightest and kindest people I’ve met. But I didn’t really ‘Get it’.

Why does it matter if my classes are coupled? (I mean…it works perfectly well). Or, why do I need to split this 12 line method down into 2 (or 3) separate methods? (“but it works, and you can read exactly what is going on!”) or why hard coding your dependencies is bad (“It’s so easy, you can just change them on line 39 and line 46!”)

## Cue the realisation

This past weekend, I found myself at a hackathon (hosted by Ez & Jason from Code Untapped here in London. Follow them on instagram). We were given our task that morning, and I was happily working to the acceptance criteria my team had come up with, it even looked like we might finish before time. This is when the organisers decided to throw a spanner in the works…

```
“So there’s been a change in plans. You know the original spec we gave you?..yeah…we need to change it. Here’s what we need now..”
```

And just like that, we were in the last place in a race that we were running uncontested.

I heard one of the technical coaches chime in..

```
“I can’t tell you how many times this exact thing has happened to me in the real world”
```

..and just like that, I realised the reason you don’t hard code your dependencies in, or make your classes so big it blocks out the sun.

## Change is the way of the world

In the “Real World”, things happen. plans change. Business landscapes shift. New opportunities present themselves. Impossible promises get made. In the real world, you get told to ‘make things pop’.

The only insurance you have against a rogue specification tearing its way through your codebase is to write code as if that email is eminent. This is the way to ensure your sanity when the user stories change, when the business decides to ‘pivot’, or when a new feature is introduced. This seems like one of the most useful skills I can think of cultivating and working on developing. Because the alternative is to complain, which often isn’t very productive or constructive.

If any of this has been interesting, I highly recommend Sandy Metz.