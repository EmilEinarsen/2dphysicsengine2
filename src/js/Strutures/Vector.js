import { pythagoras, stdRotationFormula } from "../utils/formulas"
import { random } from "../utils/utils"

export default class Vector {
	constructor(x, y) {
		this.x = x ?? 0
		this.y = y ?? 0
	}

	add(p) {
		this.x += p.x
		this.y += p.y
		return this
	}

	sub(p) {
		this.x -= p.x
		this.y -= p.y
		return this
	}

	mult(scale) {
		this.x *= scale
		this.y *= scale
		return this
	}

	div(scale) {
		this.x /= scale
		this.y /= scale
		return this
	}

	mag() {
		return pythagoras(this.x, this.y)
	}

	magSq() {
		return this.mag()**2
	}

	normalize() {
		this.div(this.mag())
		return this
	}

	set(x, y) {
		this.x = x
		this.y = y
		return this
	}

	setMag(scale) {
		this.normalize().mult(scale)
		return this
	}

	limit(scale) {
		this.mag() > scale && this.setMag(scale)
		return this
	}

	rotate(angle) {
		stdRotationFormula(this.x, this.y, angle)
		return this
	}

	copy() {
		return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this))
	}

	static add(p1, p2) {
		return new Vector(p1.x + p2.x, p1.y + p2.y)
	}

	static sub(p1, p2) {
		return new Vector(p1.x - p2.x, p1.y - p2.y)
	}

	static div(p1, scale) {
		return new Vector( p1.x / scale, p1.y / scale )
	}

	static mult(p1, scale) {
		return new Vector( p1.x * scale, p1.y * scale )
	}

	static random() {
		return new Vector(random(-100, 100)/100, random(-100, 100)/100)
	}
}