import Entity from "../Entity"
import { rectangle } from "../../../utils/draw"
import detectCollision, { FORM } from "../../../Collision/detection"

export default class AABB extends Entity {
    constructor({ width, height, apperance = {}, ...parent }) {
        super(parent)
        this.form = FORM.AABB
        this.width = width ?? Math.sqrt(this.mass) * 20
        this.height = height ?? Math.sqrt(this.mass) * 20
        this.color = apperance.color || '#fff'
    }

    get halfWidth() { return this.width/2 }
	get halfHeight() { return this.height/2 }
	get left() { return this.pos.x }
	get right() { return this.pos.x + this.width }
	get top() { return this.pos.y }
    get bottom() { return this.pos.y + this.height }
    get middleX() { return this.pos.x + this.halfWidth }
    get middleY() { return this.pos.y + this.halfHeight }

    get points() {
        return [
            { x: this.left, y: this.top },
            { x: this.right, y: this.top },
            { x: this.right, y: this.bottom },
            { x: this.left, y: this.bottom },
        ]
    }
    
    contains(point) {
        return detectCollision(this, point)
    }

	show() {
        rectangle(this.pos.x, this.pos.y, this.width, this.height)
	}
}