import Entity from "../Entity"
import { point, rotateRec } from "../../../utils/draw"
import { degreeToRadian, stdRotationFormula } from "../../../utils/formulas"
import { FORM } from "../../../Collision/detection"
import AABB from "./AABB"
import Vector from "../../Vector"
import { fill } from "../../../utils/utils"

export default class Rectangle extends Entity {
    constructor({ width, height, angle = 0, apperance = {}, ...parent }) {
        super(parent)
        this.physicv = this.PHYSICS.DYNAMIC
        this.form = FORM.RECTANGLE
        this.width = width ?? Math.sqrt(this.mass) * 20
        this.height = height ?? Math.sqrt(this.mass) * 20
        this.angle = degreeToRadian(-angle%360)
        this.color = apperance.color || '#fff'
    }

    get halfWidth() { return this.width/2 }
    get halfHeight() { return this.height/2 }
    get middleX() { return this.pos.x + stdRotationFormula(this.halfWidth, this.halfHeight, Math.PI*2-this.angle).x }
    get middleY() { return this.pos.y + stdRotationFormula(this.halfWidth, this.halfHeight, Math.PI*2-this.angle).y }
    get points() {
        let offsets = {
            tr: stdRotationFormula(this.width, 0, Math.PI*2-this.angle),
            bl: stdRotationFormula(1, this.height, Math.PI*2-this.angle),
            br: stdRotationFormula(this.width, this.height, Math.PI*2-this.angle),
        }
            
        return [
            { x: this.pos.x, y: this.pos.y },
            { x: this.pos.x + offsets.tr.x, y: this.pos.y + offsets.tr.y},
            { x: this.pos.x + offsets.br.x, y: this.pos.y + offsets.br.y },
            { x: this.pos.x + offsets.bl.x, y: this.pos.y + offsets.bl.y },
        ]
    }

    mirror() {
        this.angle = Math.PI - this.angle
        return this
    }

    AABB() {
        let points = this.points
        points = { x: points.map(p => p.x), y: points.map(p => p.y) }
        let
            pos = new Vector(Math.min(...points.x), Math.min(...points.y)),
            width = Math.abs(pos.x - Math.max(...points.x)),
            height = Math.abs(pos.y - Math.max(...points.y))

        return new AABB({ pos, height, width })
    }

    contains(point) {
        return detectRectanglePoint(this, point)
    }

    update() {
        if(this.physics === this.PHYSICS.DYNAMIC) {
			this.vel.add(this.acc)
			this.pos.add(this.vel)
			this.acc = new Vector()
		}
    }

	show() {
        /* this.points.forEach(p => (point(p.x, p.y, 5), fill('#fff')))
        point(this.middleX, this.middleY, 5), fill('#fff') */
        rotateRec(this.pos.x, this.pos.y, this.width, this.height, this.angle)
        
	}
}