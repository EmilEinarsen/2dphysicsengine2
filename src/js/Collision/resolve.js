import Vector from "../Strutures/Vector"
import { atanAngle, pythagoras } from "../utils/formulas"
import { getClosestPoint } from "../utils/utils"
export const FORM = {
    AABB: 'AABB',
    CIRCLE: 'CIRCLE',
    POINT: 'POINT',
    POLYGON: 'POLYGON',
    RECTANGLE: 'RECTANGLE',
    SEGMENT: 'SEGMENT'
}
export default function resolveCollision(ent1, ent2, collisionData) {
	
	let 
        errorMessage = [ 'Collider: NOT A VALID FORM', 'Collidee: NOT A VALID FORM' ],
        result =
            ent1.form === FORM.CIRCLE ?
                    ent2.form === FORM.SEGMENT ? resolveLineCircle(ent2, ent1, collisionData)
					: ent2.form === FORM.RECTANGLE ? resolveLineCircle(ent2, ent1, collisionData)
					: ent2.form === FORM.CIRCLE ? resolveCircle(ent1, ent2, collisionData)
                    : errorMessage[1]
			: errorMessage[0]
			
	return result
}

const resolveCircle = (c1, c2) => {
	let vel = calcCollision.circle(c1, c2)
	
    c1.vel = vel.c1
    c2.vel = vel.c2
}

const resolveLineCircle = (l, c, collisionData) => {
	
	let vel = calcCollision.lineCircle(l, c, collisionData.point ?? getClosestPoint(c.pos, collisionData.points))
	
    l.vel = vel.l
	c.vel = vel.c
	c.vel.mult(1)
}

const calcCollision = {
	circle: (c1, c2) => {
		const angle = {
			c1: atanAngle(c1.vel.x, c1.vel.y),
			c2: atanAngle(c2.vel.x, c2.vel.y),
			contact: atanAngle(c1.pos.x - c2.pos.x, c1.pos.y - c2.pos.y)
		}

		return {
			c1: twoMovingEntitesCollisionVelocityResolution(c1.mass, pythagoras(c1.vel.x, c1.vel.y), angle.c1, c2.mass, pythagoras(c2.vel.x, c2.vel.y), angle.c2, angle.contact),
			c2: twoMovingEntitesCollisionVelocityResolution(c2.mass, pythagoras(c2.vel.x, c2.vel.y), angle.c2, c1.mass, pythagoras(c1.vel.x, c1.vel.y), angle.c1, angle.contact)
		}
    },
    lineCircle: (l, c, p) => {
		const angle = {
			l: Math.atan2(l.vel.y, l.vel.x),
			c: Math.atan2(c.vel.y, c.vel.x),
			contact: Math.atan2( (p.y - c.pos.y), (p.x - c.pos.x) )
		}
		
		return {
			l: twoMovingEntitesCollisionVelocityResolution(l.mass, pythagoras(l.vel.x, l.vel.y), angle.l, c.mass, pythagoras(c.vel.x, c.vel.y), angle.c, angle.contact),
			c: twoMovingEntitesCollisionVelocityResolution(c.mass, pythagoras(c.vel.x, c.vel.y), angle.c, l.mass, pythagoras(l.vel.x, l.vel.y), angle.l, angle.contact)
		}
	}
}

const twoMovingEntitesCollisionVelocityResolution = (m1, v1, o1, m2, v2, o2, c) => new Vector(
    (((((v1*Math.cos(o1-c))*(m1-m2))+(2*m2*v2*Math.cos(o2-c)))/(m1+m2))*Math.cos(c))+(v1*Math.sin(o1-c)*Math.cos(c+(Math.PI/2))),
    (((((v1*Math.cos(o1-c))*(m1-m2))+(2*m2*v2*Math.cos(o2-c)))/(m1+m2))*Math.sin(c))+(v1*Math.sin(o1-c)*Math.sin(c+(Math.PI/2)))
)