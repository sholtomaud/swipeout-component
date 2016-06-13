const crel = require('crel')
const doc = require('doc-js')
const swipeout = require('swipeout')
const translate = require('css-translate')
const venfix = require('venfix')
// const Swipe = require('./swipe')
const defaultcss = require('defaultcss')
const fs = require('fs')
const path = require('path')
const triggerModifier = 0.58

const style = fs.readFileSync(path.join(__dirname, '/style.css'))
defaultcss('card', style)

module.exports = function (fastn, component, type, settings, children) {
  component.extend('_generic', settings, children)
  component.setProperty('valid')


  component.render = function () {
    let card = component.element = crel('div', {class: 'card'}, component.item())
    let startX = card.offsetLeft
    card.style[venfix('willChange')] = 'transform'

    let destroy = swipeout(card, function (type, event) {
      // console.log('event', event)
      // console.log('type', type)
      const normalizedDragDistance = (Math.abs(event.x) / card.clientWidth)
      const opacity = 1 - Math.pow(normalizedDragDistance, 3)

      card.style[venfix('transform')] = `translateX(${event.x}px)`
      card.style[venfix('opacity')] = opacity

      if (type === 'drag') {
        event.preventDefault()

        // card.style[venfix('transform')] = translate('3d', event.x, 0, 0)

        // this.target.style.transform = `translateX(${this.screenX}px)`
        // this.target.style.opacity = opacity
        card.targetX = 0
        let screenX = event.x - startX
        const threshold = card.clientWidth * 0.35

        if (Math.abs(event.x) > (card.clientWidth * triggerModifier)) {
          // card.classList.remove('remove')
          card.classList.add('add')
          // console.log('x >', Math.abs(event.x))
        } else if (Math.abs(event.x) < -(card.clientWidth * triggerModifier)) {
          // card.classList.remove('add')
          // card.classList.add('remove')

          // if (Math.abs(screenX) > threshold) {
          // card.targetX = (screenX > 0) ? card.clientWidth : -card.clientWidth
          // }
        }
      }

      if (type === 'rebound') {

        if (Math.abs(event.x) > card.clientWidth * triggerModifier) {

          destroy()
          setTimeout(function () {
            card.remove()
          }, 300)
        }
      }

      // card.style[venfix('transform')] = translate('3d', event.x, 0, 0)
    })

    component.element = card
    component.emit('render')
  }
  return component
}

module.exports.expectedComponents = ['_generic']
