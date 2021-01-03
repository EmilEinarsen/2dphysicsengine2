import { rectangle } from "./utils/draw"
import { strokeStyle, fillStyle, fill } from "./utils/utils"
import { Rectangle } from './index'

export default class QuadTree {
	constructor(boundary, capacity) {
		console.log(boundary)
		this.x = boundary.x,
		this.y = boundary.y,
		this.width = boundary.width,
		this.height = boundary.height
		this.capacity = capacity
		this.points = []
		this.divided = false
	}

	subdivide() {
		this.northEast = new QuadTree(
			new Rectangle(this.x + (this.width/2), this.y, this.width/2, this.height/2), this.capacity
		)
		this.southEast = new QuadTree(
			new Rectangle(this.x + (this.width/2), this.y + (this.height/2), this.width/2, this.height/2), this.capacity
		)
		this.northWest = new QuadTree(
			new Rectangle(this.x, this.y, this.width/2, this.height/2), this.capacity
		)
		this.southWest = new QuadTree(
			new Rectangle(this.x, this.y + (this.height/2), this.width/2, this.height/2), this.capacity
		)
		this.divided = true
	}
	
	insert(point) {
		if(this.points.length < this.capacity) this.points.push(point)
		else {
			if(!this.divided) this.subdivide()
			this.northEast.insert(point)
			this.northEast.insert(point)
			this.southWest.insert(point)
			this.southWest.insert(point)
		}
	}

	show() {
		strokeStyle('#fff')
		fillStyle('rgba(0,0,0,0)')
		rectangle(this.x, this.y, this.width, this.height)
		
		this.points.draw()

		if(this.divided) {
			this.northWest.show()
			this.northEast.show()
			this.southWest.show()
			this.southEast.show()
		}
		stroke()
	}
}