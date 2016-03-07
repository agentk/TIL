---
title: Mac DNS cache flushing
layout: post
tags:
  - cli
  - osx
  - dns
---

```bash
sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder
```
