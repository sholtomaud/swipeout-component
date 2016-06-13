# swipeout-component

A simple swipeout component

Built with `fastn.js`

# Usage

## Fastn component

```
var fastn = require('fastn')({
    ... other components...
    swipeout: require('swipeout-component/swipeoutComponent')
});

var swipeout = fastn('swipeout', { options... });
```

swipeout will attempt to use `text`, `_generic`, `list` and `templater` components provided by fastn.

## Suggestions

It is suggested that something like the following css be used

```css
html, body {
  padding: 0;
  margin: 0;
  background: #FAFAFA;
  font-family: Arial, sans-serif;
  font-size: 50px;
  color: #333;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}*/
```
