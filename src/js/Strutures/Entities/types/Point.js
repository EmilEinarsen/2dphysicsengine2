import Entity from "../Entity"
import { point } from "../../../utils/draw"
import { fill } from "../../../utils/utils"
import { FORM } from "../../../Collision/detection"

export default class Point extends Entity {
    constructor({ apperance = {}, ...parent }) {
        super(parent)
        this.form = FORM.POINT
        this.strokeWeight = apperance.strokeWeight || 3
        this.color = apperance.color || '#fff'
    }

    show() {
        point(this.pos.x, this.pos.y, this.strokeWeight)
        fill(this.color)
    }
}