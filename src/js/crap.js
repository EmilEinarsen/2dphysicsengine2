class Mover {
	constructor(x, y, m) {
		this.pos = new Vector(x, y)
		this.vel = Vector.random().mult(5)
		this.acc = new Vector()
		this.mass = m
		this.r = Math.sqrt(this.mass) * 10
	}

	applyForce(force) {
		this.acc.add(Vector.div(force, this.mass))
	}

	drag() {
		let 
			drag = this.vel.copy().normalize().mult(-1),
			c = .1,
			speedSq = this.vel.magSq()

		drag.setMag(c * speedSq)
		this.applyForce(drag)
	}

	friction() {
		let diff = canvas.height - ( this.pos.y + this.r )
		if(diff > 1) return
		let 
			friction = this.vel.copy().normalize().mult(-1),
			mu = .1,
			normal = this.mass
		friction.setMag(mu * normal)
		this.applyForce(friction)
	}

	edges() {
		if(this.pos.y >= canvas.height-this.r) {
			this.pos.y = canvas.height-this.r
			this.vel.y *= -1
		}
		if(this.pos.x >= canvas.width-this.r) {
			this.pos.x = canvas.width-this.r
			this.vel.x *= -1
		} else if(this.pos.x <= this.r) {
			this.pos.x = this.r
			this.vel.x *= -1
		}
	}

	update() {
		this.vel.add(this.acc)
		this.pos.add(this.vel)
		this.acc.set(0, 0)
	}

	show() {
		ellipse(this.pos.x, this.pos.y, this.r)
		strokeWeight(5)
		stroke('#fff')
		fill('rgba(255,255,255,.5)')
	}
}

class Attractor {
	constructor(x, y, m) {
		this.pos = new Vector(x, y)
		this.mass = m
		this.r = Math.sqrt(this.mass) * 10
	}

	attract(mover) {
		let 
			force = Vector.sub(this.pos,  mover.pos),
			disSq = constrain(force.magSq(), 25, 2500),
			G = 50,
			strength = (G * (this.mass * mover.mass)) / disSq
		force.setMag(strength)
		mover.applyForce(force)
	}

	show() {
		ellipse(this.pos.x, this.pos.y, this.r)
		fill('#fff')
	}
}