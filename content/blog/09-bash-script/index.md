---
path: "/bash-script-dynamically-open-pages"
date: "14/02/2019"
title: "Bash script to dynamically open web pages straight from the terminal"
something: "something2"
posttype: "blog"
category: "javascript"
description: "This is a second test"
tags:
  - "javascript"
  - "hoisting"
---

Say you work at Microsoft, and you work on a number of repositories under [https://github.com/microsoft](https://github.com/microsoft/). 

For eg: 

- vstest -[https://github.com/microsoft/vstest](https://github.com/microsoft/vstest)
- vscode - [https://github.com/microsoft/vscode](https://github.com/microsoft/vscode)
- vscode docs - [https://github.com/microsoft/vscode-docs](https://github.com/microsoft/vscode-docs)
- vscode go - [https://github.com/microsoft/vscode-go](https://github.com/microsoft/vscode-go)

All of these URLs share the `https://github.com/microsoft/` pattern followed by the name of the project (eg: `vstest`).

## The script

Here's a bash script that will let you open specific repositories on Github straight from your terminal by passing in the name of the repo as an argument.

```bash
function goto()
{
  URL="https://github.com/microsoft"
  URL+=$1
  open $URL
}
```
We can go a step further and make it easy to open up either pull requests, issues or tags within these repos by passing in a second argument, like so:

```bash
function goto()
{
  URL="https://github.com/microsoft"
  URL+=$1
  if [ "$2" = "-p" ]; then
    URL+="/pulls"
  elif [ "$2" = "-i" ]; then
    URL+="/issues"
  elif [ "$2" = "-t" ]; then
    URL+="/tags"
  fi
  open $URL
}
```

## Usage

Once you've added this function to your `.bashrc` file (or your `.zshrc` file), you should be able to refresh and use the script like so: 

```bash
goto vscode -p
```

This will open up a browser window (if none are open) and go to the vscode project's pull requests page. 

This is especially useful if you navigate between lots of microservices and need to go check something quickly. 
