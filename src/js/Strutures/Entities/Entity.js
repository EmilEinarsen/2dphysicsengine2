import correctPosition from "../../Collision/correction"
import detectCollision from "../../Collision/detection"
import resolveCollision from "../../Collision/resolve"
import preset from "../../preset"
import Vector from "../Vector"

export default class Entity {
    constructor({ pos, x, y, vel, vx, vy, acc, ax, ay, mass, physics }) {
        this.pos = pos ?? new Vector(x, y)
        this.vel = vel ?? new Vector(vx, vy)
        this.acc = acc ?? new Vector(ax, ay)
        this.mass = mass ?? 1
        this.physics = physics || PHYSICS.DYNAMIC
    }

    get force() { return this.acc.copy().mult(this.mass) }

    applyForce(force) {
        this.acc.add(Vector.div(force, this.mass))
    }

    gravity() {
        this.applyForce(new Vector(0, preset.physics.constants.g).mult(this.mass))
    }

    friction(entity) {
        if(!entity) return
        let 
            mu = 0.1,
            angle = entity.angle || 0,
            normal = this.force.y * this.mass,
            friction = this.vel.copy().setMag(-1).rotate(-angle).setMag(mu * normal)
            
        this.applyForce(friction)
    }
    
    intersects(entity, debug) {
        return detectCollision(this, entity, debug)
    }

    collision(entity, collisionData) {
        this.friction(entity)
        resolveCollision(this, entity, collisionData)
        correctPosition(this, entity, collisionData)
    }
}

let PHYSICS = {
    STATIC: 'STATIC',
    DYNAMIC: 'DYNAMIC'
}

Entity.prototype.PHYSICS = PHYSICS