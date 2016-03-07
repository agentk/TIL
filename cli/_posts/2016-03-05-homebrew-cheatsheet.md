---
title: Homebrew cheat sheet
layout: post
tags:
  - cli
  - homebrew
  - osx
---

Homebrew Website: [http://brew.sh](http://brew.sh)

### Install

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Installed packages

List installed packages and their versions

```bash
brew list --versions
```

List packages, root dependencies only

```bash
brew leaves
```

### Update

```bash
brew update
```

### Review

List outdated packages

```bash
brew outdated --verbose
```

See any app that you no longer need and want to get rid of them? Check the dependencies for all installed formulae:

```bash
brew deps --installed
```

For even more detailed picture, show the dependencies for all installed formulae as a tree:

```bash
brew deps --installed --tree
```

As a final precaution before removing a formula, see what other installed formulae use it as a dependency:

```bash
brew uses --installed formula
```

### Uninstall

Uninstall formulae and all their older versions:

```bash
brew remove --force formulae
```

### Upgrade

Upgrade remaining formulae:

```bash
brew upgrade
```

### Cleanup

Show what will be removed by cleanup command, but do not actually remove anything:

```bash
brew cleanup -ns
```

Clean the "Cellar" removing any older versions of installed formulae and clearing old downloads from the Homebrew download-cache. Additionally, scrub the cache, removing downloads for even the latest versions of formula, which are downloaded, but not installed:

```bash
brew cleanup -s
```


## References:

http://blog.shvetsov.com/2014/11/homebrew-cheat-sheet-and-workflow.html

