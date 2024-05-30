# Setting up for the first time

## GitHub

- https://github.com/signup

## Git

- https://git-scm.com/download/win

### Setting up

#### Git Settings

```
git config --global init.defaultBranch main
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --global core.editor code
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
git config --global --add --bool push.autoSetupRemote true
git config --global --list
```

### SSH

- https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

## NVM

- https://github.com/coreybutler/nvm-windows/releases

### Install LTS

- `nvm install lts`
- `nvm list`

## Windows Terminal

- https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US

## VSCode

- Log into GH for future LiveShare

### Extensions

- GitLens
- ESLint
- Git Graph
- Markdown All-in-one
- LiveShare
- Markdown Guide
- indent-rainbow
- BeardedTheme

## Primary Assignments

## General Programming Goals

0. JS forgives. It doesn't expect much.

1. Basic syntax
2. Basic statements, expressions, operators
3. Loops/conditionals
4. Functions (piecemeal everything into digestible chunks)
5. Working with collections (arrays, objects)
6. Writing classes to create object instances (do cool stuff)
7. First small projects; one page site
8. Small site, few pages (auto-gen), connected to DB
9. An app that does something cool
10. Replicate existing site/service/app
11. Build something large for yourself; explore
