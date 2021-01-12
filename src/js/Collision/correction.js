// Need to research impulses, to build a sequential impulse solver
// 'physics engine it would be handled by the contraint solver. 
// ...one of the easiest to understand is a sequential impulse solver.'

import { atanAngle } from "../utils/formulas"
import { distance, getClosestPoint } from "../utils/utils"

export default function correctPosition(ent1, ent2, collisionData) {

    let collidee = ent1.physics === 'STATIC' ? ent2.physics === 'STATIC' ? undefined : ent2 : ent1

    if(!collidee) return

    let 
        collisionPoint = collisionData.point ?? getClosestPoint(collidee.pos, collisionData.points),
        overlap = collidee.radius - distance(collidee.pos.x, collisionPoint.x, collidee.pos.y, collisionPoint.y),
        angle = atanAngle(collidee.pos.x - collisionPoint.x, collidee.pos.y - collisionPoint.y)
        
    collidee.pos.add({ x: overlap * Math.cos(angle), y: overlap * Math.sin(angle) })
}