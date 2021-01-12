import Entity from "../Entity"
import { ellipse } from "../../../utils/draw"
import Vector from "../../Vector"
import { FORM } from "../../../Collision/detection"

export default class Circle extends Entity {
    constructor({ apperance = {}, ...parent }) {
		super(parent)
		this.form = FORM.CIRCLE
        this.radius = Math.sqrt(this.mass) * 10
        this.color = apperance.color ?? '#fff'
        this.strokeWeight = apperance.strokeWeight ?? this.radius * .2
	}

	get left() { return this.pos.x - this.radius }
	get right() { return this.pos.x + this.radius }
	get top() { return this.pos.y - this.radius }
	get bottom() { return this.pos.y + this.radius }
	
    update() {
		if(this.physics === this.PHYSICS.DYNAMIC) {
			this.vel.add(this.acc)
			this.pos.add(this.vel)
			this.acc = new Vector()
		}
	}

	show() {
		ellipse(this.pos.x, this.pos.y, this.radius)
	}
}