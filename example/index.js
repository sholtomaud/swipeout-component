// const crel = require('crel')
// const translate = require('css-translate')
// const venfix = require('venfix')
// const swipeout = require('../')
const fastn = require('fastn')({
  list: require('fastn/listComponent'),
  text: require('fastn/textComponent'),
  templater: require('fastn/templaterComponent'),
  _generic: require('fastn/genericComponent'),
  // ratingControl: require('../ratingControlComponent')
  swipeout: require('../swipeoutComponent')
  // card: require('../swipeoutItemComponent')
}, true)

// function makeCard () {
//   return crel('div', {class: 'card'},
//         'Some card with text n stuff'
//     )
// };


var cardsModel = new fastn.Model({
  cards: [{name: 'Tony Maloney'}, {name: 'Some Guy'}]
})

cardsModel.on('.|*', function (data) {
  console.log('menusModel data: ', data)
})

const ui = fastn('div',
  fastn('div', {class: 'header'},
  // fastn('button', {class: 'mdl-button mdl-js-button mdl-button--fab mdl-button--colored'},
    fastn('i', {class: 'svg-ic_menu_24px'}).on('click', function (scope, model) {
      console.log('hello world', new Date())
    })
  // )
  , 'Some Appilcation'),
  fastn('list', {
    items: fastn.binding('cards|*').attach(cardsModel),
    class: 'card-container',
    template: function (model, scope) {
      return fastn('swipeout', { item: fastn.binding('name') }).binding('item')
    }
  })
)

window.addEventListener('load', function () {
  ui.attach().render()

  document.body.appendChild(ui.element)
})

//
//
// function addCard () {
//   var card = makeCard()
//
//   var destroy = swipeout(card, function (type, event) {
//
//     if (type === 'drag') {
//       event.preventDefault()
//
//       if (event.x > (card.clientWidth * 0.5)) {
//         card.classList.remove('remove')
//         card.classList.add('add')
//       } else if (event.x < -(card.clientWidth * 0.5)) {
//         card.classList.remove('add')
//         card.classList.add('remove')
//       } else {
//         card.classList.remove('remove')
//         card.classList.remove('add')
//       }
//     }
//
//     if (type === 'rebound') {
//
//       if (Math.abs(event.x) > card.clientWidth * 0.5) {
//         card.classList.add('removed')
//         destroy()
//         setTimeout(function () {
//           card.remove()
//         }, 300)
//         addCard()
//       }
//     }
//
//     card.style[venfix('transform')] = translate('3d', event.x, 0, 0)
//   })
//
//   crel(document.body, card)
// }
//
// window.onload = function () {
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
//   addCard()
// }
