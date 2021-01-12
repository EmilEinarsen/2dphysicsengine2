import { line } from "../../../utils/draw"
import Vector from "../../Vector"
import { distance } from "../../../utils/utils"
import detectCollision, { FORM } from "../../../Collision/detection"

export default class Segment {
    constructor({ pos1, x1, y1, pos2, x2, y2, vel, vx, vy, mass, apperance = {} }) {
        this.form = FORM.SEGMENT
        this.pos1 = pos1 || new Vector(x1, y1)
        this.pos2 = pos2 || new Vector(x2, y2)
        this.vel = vel || new Vector(vx, vy)
        this.mass = mass || 1
        this.color = apperance.color || '#fff'
        this.strokeWeight = apperance.strokeWeight || 1
    }

    mirror() {
        let p = this.pos1
        this.pos1 = this.pos2
        this.pos2 = p
        return this
    }

    intersects(entity, debug) {
        return detectCollision(this, entity, debug)
    }

    get angle() {
        return Math.atan2(this.pos2.y - this.pos1.y, this.pos2.x - this.pos1.x)
    }

    get length() {
        return distance(this.pos1.x, this.pos2.x, this.pos1.y, this.pos2.y)
    }

    gravity() {
        
    }
    
    friction() {
        
    }

    update() {
        
    }

    collision() {
        
    }

	show() {
        line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y)
	}
}