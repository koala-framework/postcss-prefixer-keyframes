# PostCSS Web Prefixer

[PostCSS] plugin to prefix keyframes and font-faces.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Input example */
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}

@font-face {
  font-family: MyWebFont;
}

div {
  width: 100px;
  background: red;
  position: relative;
  animation: mymove 5s infinite;
  font-family: Arial;
}

a {
  color: green;
  position: relative;
  animation: externalanimation 5s infinite;
  font-family: MyWebFont;
}

```

```css
/* Output example */
@keyframes myWebsite-mymove {
    from {top: 0px;}
    to {top: 200px;}
}

@font-face {
    font-family: myWebsite-MyWebFont;
}

div {
    width: 100px;
    background: red;
    position: relative;
    animation: myWebsite-mymove 5s infinite;
    font-family: Arial;
}

a {
    color: green;
    position: relative;
    animation: externalanimation 5s infinite;
    font-family: myWebsite-MyWebFont;
}
```

## Usage

```js
postcss([ prefix({prefix: 'myWebsite-'}) ])
```

See [PostCSS] docs for examples for your environment.
