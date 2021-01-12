import { FORM } from "../../../Collision/detection"
import { polygon } from "../../../utils/draw"
import Entity from "../Entity"

export default class Polygon extends Entity {
    constructor({ points, apperance = {}, ...parent }) {
        super(parent)
        this.form = FORM.POLYGON
        this.origin = points.length ? points : []
        this.color = apperance.color || '#fff'
    }

    get points() {
        return this.origin.map(p => ({ x: p.x + this.pos.x, y: p.y + this.pos.y }))
    }

    show() {
        polygon(this.points)
    }
}