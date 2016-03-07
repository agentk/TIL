---
title: Toggle hidden files in finder
layout: post
tags:
  - cli
  - osx
  - finder
---

```bash

# Show hidden files
defaults write com.apple.finder AppleShowAllFiles YES && killall Finder

# Hide hidden files
defaults write com.apple.finder AppleShowAllFiles NO && killall Finder

```
