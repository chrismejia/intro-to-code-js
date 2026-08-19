# Day 1 Vocabulary

Use this guide on your first day to learn the words you will hear most often. You do not need to memorize these. Come back whenever a term is confusing.

## Highlight Terms

### Language

A **programming language** is the set of words and rules you use to write instructions for a computer. This project uses **JavaScript**, often shortened to **JS**. When you write JavaScript, you are writing a language a computer can follow, step by step.

### Runtime

A **runtime** is the program that actually runs your code. The language is what you write; the runtime is what reads it and does the work. JavaScript needs a runtime to run outside of a web browser. In this project, that runtime is Node.

### Node

**Node** (full name **Node.js**) is the runtime that runs JavaScript on your computer instead of inside a browser. When you type a command like `node script.js`, Node reads your JavaScript file and runs it. You need Node installed to work on the lessons in this repo.

Check whether Node is installed and see its version:

```shell
node --version
```

### nvm

**nvm** stands for **Node Version Manager**. It is a tool that installs Node and lets you switch between different versions of Node. Different projects sometimes need different Node versions, and nvm makes switching easy so you do not have to reinstall Node by hand.

Common nvm commands:

```shell
nvm install 20    # install Node version 20
nvm use 20        # switch to Node version 20
nvm ls            # list the Node versions you have installed
```

If this repo includes a file named `.nvmrc`, it names the Node version the project expects. From the repo root you can run `nvm use` with no number and nvm will read that file for you.

### npm

**npm** stands for **Node Package Manager**. It comes with Node automatically. npm does two main jobs:

- **Installs packages**: reusable code other people wrote, so you do not have to build everything yourself.
- **Runs scripts**: shortcut commands the project sets up for you, like tests.

Common npm commands you will use here:

```shell
npm install       # download the packages this project needs
npm test          # run the tests
npm run test:04   # run the script named test:04 (used for a specific lesson)
```

The `npm run` command runs a named script that the project defined. `npm install` reads the project's `package.json` file to know what to download.

### Markdown and its `.md` extension

**Markdown** is a simple way to write formatted text using plain characters. You use symbols like `#` for headings and `-` for lists, and they turn into nicely formatted text when viewed on sites like GitHub. This guide is written in Markdown.

Files written in Markdown end with the **`.md`** extension. For example, `README.md` and `day-1-vocabulary.md` are both Markdown files. See the [General Markdown Guide](#general-markdown-guide) below to start writing it.

### File Extensions

A **file extension** is the short label after the dot at the end of a file name. It tells you, and your computer, what kind of file it is. Extensions you will see in this project:

- `.js` — a JavaScript file (your code lives here).
- `.md` — a Markdown file (notes and documentation).
- `.json` — a data file, like `package.json`, that lists project settings and packages.

The extension does not change what is inside the file by itself; it is a signal of what kind of content to expect and which program should open it.

## General Markdown Guide

Markdown turns plain text into formatted text. Here are the pieces you will use most.

### Headings

Use `#` symbols. More `#` means a smaller heading.

```markdown
# Big heading

## Medium heading

### Smaller heading
```

### Bold and Italic

```markdown
**bold text**
_italic text_
```

**bold text** looks bold. _italic text_ looks slanted.

### Lists

Bullet list (use `-`):

```markdown
- first item
- second item
- third item
```

Numbered list:

```markdown
1. first step
2. second step
3. third step
```

### Links

Put the visible text in square brackets and the address in parentheses:

```markdown
[Git basics](../maintainer/git-basics.md)
```

That shows as [Git basics](../maintainer/git-basics.md) and clicking it opens the file.

### Code

For a short piece of code inside a sentence, wrap it in single backticks:

```markdown
Run `npm test` to check your work.
```

That shows as: Run `npm test` to check your work.

For several lines of code, use three backticks on their own lines. Adding the language name (like `shell` or `js`) turns on color:

```js
const greeting = "hello";
console.log(greeting);
```

### Quotes

Use `>` to quote text:

```markdown
> This is a quoted note.
```

### A Small Markdown Tip

Blank lines matter in Markdown. Leave an empty line between a heading and the text below it, and between paragraphs, so everything renders cleanly.

## More Help

- [Git basics](../maintainer/git-basics.md): saving work, checking status, switching branches, and pushing commits.
- [First-time setup](../../first-time-setup.md): getting the project ready on your computer.
