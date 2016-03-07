---
layout: post
title: Flexbox sticky footer
published: true
tags:
  - css
  - flexbox
---

### DOM

```html
<body>

  <div class='main-container'>
    I'm an expanding main container
  </div>

  <div class='awesome-footer'>
    I'm a footer pinned to the bottom of the page or lower
  </div>

</body>
```

### CSS

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  flex: 1;
}
```

## References:

http://transmission.vehikl.com/sticky-footer-with-flexbox/
