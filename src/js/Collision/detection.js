import Segment from "../Strutures/Entities/types/Segment"
import Vector from "../Strutures/Vector"
import { point } from "../utils/draw"
import { pythagoras } from "../utils/formulas"
import { distance, fill } from "../utils/utils"

/**
 * 
 * Useful source for extended collision detection
 * https://github.com/davidfig/intersects
 * 
 */

export const FORM = {
    AABB: 'AABB',
    CIRCLE: 'CIRCLE',
    POINT: 'POINT',
    POLYGON: 'POLYGON',
    RECTANGLE: 'RECTANGLE',
    SEGMENT: 'SEGMENT'
}

export default function detectCollision(ent1, ent2, debug) {
    let 
        errorMessage = [ 'Collider: NOT A VALID FORM', 'Collidee: NOT A VALID FORM' ],
        result =
            ent1.form === FORM.AABB ?
                ent2.form === FORM.AABB ? detectAABB(ent1, ent2)
                    : ent2.form === FORM.CIRCLE ? detectPolygonCircle(ent1, ent2)
                    : ent2.form === FORM.POINT ? detectAABBPoint(ent1, ent2)
                    : ent2.form === FORM.POLYGON ? detectPolygon(ent1, ent2)
                    : ent2.form === FORM.RECTANGLE ? detectPolygon(ent1, ent2)
                    : ent2.form === FORM.SEGMENT ? detectPolygonLine(ent1, ent2)  
                    : errorMessage[1]
            : ent1.form === FORM.CIRCLE ?
                ent2.form === FORM.AABB ? detectPolygonCircle(ent2, ent1)
                    : ent2.form === FORM.CIRCLE ? detectCircle(ent1, ent2)
                    : ent2.form === FORM.POINT ? detectCirclePoint(ent1, ent2)
                    : ent2.form === FORM.POLYGON ? detectPolygonCircle(ent2, ent1)
                    : ent2.form === FORM.RECTANGLE ? detectPolygonCircle(ent2, ent1)
                    : ent2.form === FORM.SEGMENT ? detectLineCircle(ent2, ent1)
                    : errorMessage[1]
            : ent1.form === FORM.POINT ?
                ent2.form === FORM.AABB ? detectPolygonPoint(ent2, ent1)
                    : ent2.form === FORM.CIRCLE ? detectCirclePoint(ent2, ent1)
                    : ent2.form === FORM.POINT ? detectPoint(ent1, ent2)
                    : ent2.form === FORM.POLYGON ? detectPolygonPoint(ent2, ent1)
                    : ent2.form === FORM.RECTANGLE ? detectPolygonPoint(ent2, ent1)
                    : ent2.form === FORM.SEGMENT ? detectPolygonPoint(ent2, ent1)
                    : errorMessage[1]
            : ent1.form === FORM.POLYGON ? 
                ent2.form === FORM.AABB ? detectPolygon(ent1, ent2)
                    : ent2.form === FORM.CIRCLE ? detectPolygonCircle(ent1, ent2)
                    : ent2.form === FORM.POINT ? detectPolygonPoint(ent1, ent2)
                    : ent2.form === FORM.POLYGON ? detectPolygon(ent1, ent2)
                    : ent2.form === FORM.RECTANGLE ? detectPolygon(ent1, ent2)
                    : ent2.form === FORM.SEGMENT ? detectPolygonLine(ent1, ent2)
                    : errorMessage[1]
            : ent1.form === FORM.RECTANGLE ? 
                ent2.form === FORM.AABB ? detectPolygon(ent1, ent2)
                    : ent2.form === FORM.CIRCLE ? detectPolygonCircle(ent1, ent2)
                    : ent2.form === FORM.POINT ? detectPolygonPoint(ent1, ent2)
                    : ent2.form === FORM.POLYGON ? detectPolygon(ent1, ent2)
                    : ent2.form === FORM.RECTANGLE ? detectPolygon(ent1, ent2)
                    : ent2.form === FORM.SEGMENT ? detectPolygonLine(ent1, ent2)
                    : errorMessage[1]
            : ent1.form === FORM.SEGMENT ? 
                ent2.form === FORM.AABB ? detectPolygonLine(ent2, ent1)
                    : ent2.form === FORM.CIRCLE ? detectLineCircle(ent1, ent2)
                    : ent2.form === FORM.POINT ? detectLinePoint(ent1, ent2)
                    : ent2.form === FORM.POLYGON ? detectPolygonLine(ent2, ent1)
                    : ent2.form === FORM.RECTANGLE ? detectPolygonLine(ent2, ent1)
                    : ent2.form === FORM.SEGMENT ? detectLine(ent1, ent2)
                    : errorMessage[1]
            : errorMessage[0]

    debug && result?.point && (point(result.point.x, result.point.y, 5), fill('red'))
    debug && result?.points?.length && result.points.forEach(p => (point(p.x, p.y, 5), fill('red')))

    return result
}


const detectPoint = (p1, p2) =>
    (p1.pos.x - p2.pos.x) === 0 && (p1.pos.y - p2.pos.y) === 0

const detectAABBPoint = (r, p) =>
    r.pos.x <= p.x && p.x <= r.pos.x + r.width
    && r.pos.y <= p.y && p.y <= r.pos.y + r.height

const detectCircle = (c1, c2) => {
    const d = {
        x: c1.pos.x - c2.pos.x,
        y: c1.pos.y - c2.pos.y
    }
    return pythagoras(d.x, d.y) < (c1.radius + c2.radius) ? {  type: 'INTERSECTING', point: { x: c1.pos.x + d.x/2, y: c1.pos.y - d.y/2 } } : { type: 'NONE' }
}
    

const detectCirclePoint = (c1, p) =>
    distance(c1.pos.x, p.x ?? p.pos.x, c1.pos.y, p.y ?? p.pos.y) < c1.radius

const detectAABB = (r1, r2) => 
    r1.pos.x + r1.width >= r2.pos.x && r1.pos.x <= r2.pos.x + r2.width
    && r1.pos.y + r1.height >= r2.pos.y && r1.pos.y <= r2.pos.y + r2.height

const detectLine = (l1, l2) => {
    // https://github.com/psalaets/line-intersect/blob/master/src/check-intersection.js
    // For an explination, checkout - https://www.youtube.com/watch?v=A86COO8KC58&t=56s
    // utilizes the standard formula 
    // Ax + By = C
    const 
        TYPE = {
            COLINEAR: 'COLINEAR',
            PARALLEL: 'PARALLEL',
            NONE: 'NONE',
            INTERSECTING: 'INTERSECTING',
            INTERSECT_EDGE: 'INTERSECT_EDGE'
        },
        x1 = l1.pos1.x, y1 = l1.pos1.y,
        x2 = l1.pos2.x, y2 = l1.pos2.y,
        a1 = y2 - y1, b1 = x2 - x1,

        x3 = l2.pos1.x, y3 = l2.pos1.y,
        x4 = l2.pos2.x, y4 = l2.pos2.y,
        a2 = y4 - y3, b2 = x4 - x3,

        denom = (a2 * b1) - (b2 * a1),
        numeA = (b2 * (y1 - y3)) - (a2 * (x1 - x3)),
        numeB = (b1 * (y1 - y3)) - (a1 * (x1 - x3))

    if (denom == 0)
        return numeA == 0 && numeB == 0 
            ? { type: TYPE.COLINEAR } 
            : { type: TYPE.PARALLEL }

    const 
        uA = numeA / denom,
        uB = numeB / denom
    
    return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1 
        ? { 
            type: uA === 0 | uA === 1 || uB === 0 | uB === 1 ? TYPE.INTERSECT_EDGE : TYPE.INTERSECTING, 
            point: { x: x1 + (uA * b1), y: y1 + (uA * a1) } 
        } : { type: TYPE.NONE }
}

const detectLinePoint = (l, p) =>
    l.length >= (distance(l.pos1.x, p.x ?? p.pos.x, l.pos1.y, p.y ?? p.pos.y) + distance(p.x ?? p.pos.x, l.pos2.x, p.y ?? p.pos.y, l.pos2.y))
    

const detectLineCircle = (l, c) => {
    
    
    let
        x1 = l.pos1.x, y1 = l.pos1.y,
        x2 = l.pos2.x, y2 = l.pos2.y,
        dx = x2 - x1, dy = y2 - y1,
        cx = c.pos.x, cy = c.pos.y,
        len = l.length,
        dot = (((cx - x1)*dx) + ((cy - y1)*dy)) / (len*len),
        point = { x: x1 + (dot * (x2 - x1)), y: y1 + (dot * (y2 - y1)) }

    return detectLinePoint(l, point) && detectCirclePoint(c, point) ? { type: 'INTERSECTING', point } 
        : detectCirclePoint(c, l.pos1) ? { type: 'INTERSECTING', point: l.pos1 }
        : detectCirclePoint(c, l.pos2) ? { type: 'INTERSECTING', point: l.pos2 }
        : { type: 'NONE' }
}



const detectPolygon = (poly1, poly2) => {
    poly1 = poly1.points
    let points = []
    
    for ( let i = 0; i < poly1.length; i++ ) {
        let b1 = poly1[i]
        let b2 = poly1[(i+1) % poly1.length]
        let res = detectPolygonLine(poly2, new Segment({ pos1: b1, pos2: b2 }))
        
        res.type === 'INTERSECTING' && points.push(...res.points)
    }
    return !points.length ? { type: 'NONE' } : { type: 'INTERSECTING', points } 
}

const detectPolygonPoint = (poly, p) => {
    let 
        l = new Segment({ pos1: new Vector(0, 0), pos2: new Vector(p.x ?? p.pos.x, p.y ?? p.pos.y)}),
        res = detectPolygonLine(poly, l)
    
    return res.type === 'NONE' ? res 
        : res.type === 'INTERSECTING' && res.points.length%2 ? { type: res.type, point: p?.pos ?? p } 
        : { ...res, type: 'NONE' }
}

const detectPolygonLine = (poly, line) => {
    poly = poly.points
    let points = []

    for ( let i = 0; i < poly.length; i++ ) {
        let b1 = poly[i]
        let b2 = poly[(i+1) % poly.length]
        let res = detectLine(line, new Segment({ pos1: b1, pos2: b2 }))

        res.type === 'INTERSECTING' && points.push(res.point)
    }
    
    if(points.length < 2) {
        // Covers "edgecases"
        poly.forEach(p => detectLinePoint(line, p) && points.push(p))

        // Covers lines inside polygon, however not a viable solution sonsidering polygon-polygon detection
        /* points.length < 2 && detectPolygonPoint(poly, line.pos1) && points.push(line.pos1)
        points.length < 2 && detectPolygonPoint(poly, line.pos2) && points.push(line.pos2) */
    }

    return !points.length ? { type: 'NONE' } : { type: 'INTERSECTING', points } 
}

const detectPolygonCircle = (poly, c) => {
    poly = poly.points
    let points = []

    for ( let i = 0; i < poly.length; i++ ) {
        let b1 = poly[i]
        let b2 = poly[(i+1) % poly.length]
        let res = detectLineCircle(new Segment({ pos1: b1, pos2: b2 }), c)

        if(res.type === 'INTERSECTING') points.push(res.point)
    }

    return !points.length ? { type: 'NONE' } : { type: 'INTERSECTING', points } 
}

const detectRectanglePoint = (r, p) => detectPolygonPoint(r, p)

const detectRectangle = (r1, r2) => detectAABB(r1.AABB(), r2.AABB()) && detectPolygon(r1, r2)

const detectRectangleCircle = (r, c) => detectPolygonCircle(r, c)