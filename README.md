# PostCSS Prefixer Keyframes

[PostCSS] plugin to prefix keyframes.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Input example */
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}

div {
  width: 100px;
  background: red;
  position: relative;
  animation: mymove 5s infinite;
}

a {
  color: green;
  position: relative;
  animation: externalanimation 5s infinite;
}
```

```css
/* Output example */
@keyframes myWebsite-mymove {
    from {top: 0px;}
    to {top: 200px;}
}

div {
    width: 100px;
    background: red;
    position: relative;
    animation: myWebsite-mymove 5s infinite;
}

a {
    color: green;
    position: relative;
    animation: externalanimation 5s infinite;
}
```

## Usage

```js
var prefix = require('postcss-prefixer-keyframes');
postcss([ prefix({prefix: 'myWebsite-'}) ])
```

See [PostCSS] docs for examples for your environment.
