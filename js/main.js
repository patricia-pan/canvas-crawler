// References to DOM elements I will use. 

// Below is same as let game = document.getElementById('game')
let movementDisplay = movement

// Can only assign dimension attributes of canvas (with ID 'game') in either HTML or JavaScript. We chose to assign it here, in the JS.
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])
// game.width = getComputedStyle(game)['width']
// game.height = getComputedStyle(game)['height']
// game.height = 400

// Get some Context. Game is an object that gets created when you have canvas tag. 
let ctx = game.getContext('2d') // Object is called game.

// Modularizing creating a filled box. 
let drawBox = (x, y, size, color) => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
}

game.addEventListener('click', e => {
    console.log(e)
    console.log('🐶')
    // offsetX is the cursor location from your click.
    drawBox(e.offsetX, e.offsetY, 50, 'rebeccapurple')
})

// drawBox(30, 30, 81, 'hotpink')

// // Do some drawing
// // Fill color
// ctx.fillStyle = 'white'
// // Line color
// ctx.strokeStyle = 'red'
// // Line width
// ctx.lineWidth = 20

// ctx.fillRect(10, 10, 100, 100) // A filled box.
// ctx.strokeRect(10, 10, 100, 100) // A line box. 

// Create some characters.
/* let ogre = {
    x: 10,
    y: 10,
    color: '#bada55',
    width: 40,
    height: 80,
    alive: true,
    render: function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let hero = {
    x: 50,
    y: 50,
    color: 'hotpink',
    width: 60,
    height: 60,
    alive: true,
    render: function() {
        ctx.fillStyle = this.colorctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

ogre.render()
hero.render() */

// Constructor function (Crawler)
// We capitalize Crawler because it's a function that creates a new object instead of returning a value. Hence, capital C. 
// When we initiate a this.x, it basically means that we're creating an object called crawler with key / pair values we designate.
// It's implied, but we can have an object initialized as crawler = {} as a line right before our constructor function.

function Crawler(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    console.log('🐣')
    this.alive = true
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

// 'new Crawler' refers to creating a new object that the constructor function Crawler creates. 
let hero = new Crawler(50, 50, 'hotpink', 60, 60)
let ogre = new Crawler(10, 10, '#bada55', 40, 80)
