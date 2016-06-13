
var fastn = require('fastn')({
  _generic: require('fastn/genericComponent'),
  list: require('fastn/listComponent'),
  templater: require('fastn/templaterComponent'),
  text: require('fastn/textComponent'),
  swipeout: require('./swipeoutComponent')
})

module.exports = function (settings) {
  return fastn('swipeout', settings).attach().render()
}
