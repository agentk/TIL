---
layout: post
title: "Flexbox attribute reference"
published: true
tags:
  - css
  - flexbox
---

```
.container {
  flex-flow: <'flex-direction'> || <'flex-wrap'>;
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;

  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

.content {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] (none = 0 0 auto);
  flex-grow: <number>;
  flex-shrink: <number>;
  flex-basis: content | <'width'>;

  order: <integer>;
}
```


