import { randomColor, randomIntFromRange, background, fillStyle, stroke, fill, strokeStyle, distance } from './utils/utils'
import { canvas, ctx } from './canvas'
import { circle, rectangle } from './utils/draw'
import QuadTree from './quadtree'

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

class Circle {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

	draw() { 
		strokeStyle(this.color)
		circle(this.x, this.y, this.radius) 
		stroke()
	}
	
    update() {
        this.draw()
	}
	
	intersects(entity) {
		return distance(this.x, entity.x, this.y, entity.y) < (this.radius + entity.radius)
	}
}

export class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
		this.width = width
		this.height = height
        this.color = color
	}
	
	get left() { return this.x }
	get right() { return this.x + this.width }
	get top() { return this.y }
	get bottom() { return this.y + this.height }

	draw() { 
		fillStyle(this.color)
		rectangle(this.x, this.y, this.width, this.height) 
		stroke()
		fill()
	}
	
    update() {
        this.draw()
    }
}

function init() {
	animate.entities = []
	
    for (let i = 0; i < 4; i++) {
        animate.entities.push(
			new Circle(
				randomIntFromRange(0, canvas.width), 
				randomIntFromRange(0, canvas.height),
				10,
				randomColor(colors)
			)
		)
    }
}

function animate() {
    //requestAnimationFrame(animate)
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	background('#000')

	let qTree = new QuadTree(new Rectangle(0,0,canvas.width,canvas.height), 4)

	for(let i = 0; i < animate.entities.length; i++)
		qTree.insert(animate.entities[i])
}

init()
animate()
