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
