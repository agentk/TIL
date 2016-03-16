---
layout: post
title: HTML5 Input Placeholder
published: true
tags:
  - css
  - html5
---

```css
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: red;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: red;
  opacity: 1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: red;
  opacity: 1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: red;
}
:placeholder-shown { /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */
  color: red;
}
```

### Reference

- http://stackoverflow.com/questions/2610497/change-an-inputs-html5-placeholder-color-with-css
