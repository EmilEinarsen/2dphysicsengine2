import Entity from "../../Entity"
import { ellipse } from "../../../utils/draw"
import { distance, fill, stroke, strokeWeight } from "../../../utils/utils"

export default class Circle extends Entity {
    constructor({ apperance, ...parent }) {
		super(parent)
        this.radius = Math.sqrt(this.mass) * 10
        this.color = apperance.color ?? '#fff'
        this.strokeWeight = apperance.strokeWeight ?? this.radius*.2
    }
	
    update() {
		this.vel.add(this.acc)
		this.pos.add(this.vel)
	}
	
	intersects(entity) {
		return distance(this.pos.x, entity.x, this.pos.y, entity.y) < (this.radius + entity.radius)
	}

	show() {
		ellipse(this.pos.x, this.pos.y, this.radius)
		strokeWeight(this.strokeWeight)
        stroke(this.color)
        console.log(this.color.slice(1))
        fill(`#${this.color.slice(1)}33`)
	}
}