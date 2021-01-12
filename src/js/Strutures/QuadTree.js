import AABB from "./Entities/types/AABB"
import { point, rectangle } from "../utils/draw"
import { fill, stroke, strokeWeight } from "../utils/utils"
import Vector from "./Vector"

export default class QuadTree {
    constructor(boundary, capacity) {
        this.boundary = boundary
        this.capacity = capacity
        this.entities = []
        this.divided = false
    }

    subdivide() {
        this.northEast = new QuadTree(
            new AABB({
                pos: Vector.add(this.boundary.pos, { x: this.boundary.width/2, y: 0 }),
                width: this.boundary.width/2, height: this.boundary.height/2
            }), this.capacity
        )
        this.northWest = new QuadTree(
            new AABB({
                pos: Vector.add(this.boundary.pos, { x: 0, y: 0 }),
                width: this.boundary.halfWidth, height: this.boundary.halfHeight
            }), this.capacity
        )
        this.southEast = new QuadTree(
            new AABB({
                pos: Vector.add(this.boundary.pos, { x: this.boundary.halfWidth, y: this.boundary.halfHeight }),
                width: this.boundary.halfWidth, height: this.boundary.halfHeight
            }), this.capacity
        )
        this.southWest = new QuadTree(
            new AABB({
                pos: Vector.add(this.boundary.pos, { x: 0, y: this.boundary.halfHeight }),
                width: this.boundary.halfWidth, height: this.boundary.halfHeight
            }), this.capacity
        )
        
        this.divided = true
    }

    insert(entity) {
        
        if(!this.boundary.contains(entity.pos)) return false
        if(this.entities.length < this.capacity) return this.entities.push(entity)
        
        !this.divided && this.subdivide()

        !this.northEast.insert(entity) 
            && !this.northWest.insert(entity)
            && !this.southEast.insert(entity)
            && this.southWest.insert(entity)
    }

    query(range, found = []) {
        if(!this.boundary.intersects(range)) return
        else {
            for(let p of this.entities)
                range.contains(p.pos) && found.push(p)
            
            if(this.divided) {
                this.northEast.query(range, found) 
                this.northWest.query(range, found)
                this.southEast.query(range, found)
                this.southWest.query(range, found)
            }
        }
        return found
    }

    show({ boundarys = true, content = true } = {}) {
        this.boundary.show()
        strokeWeight(1)
        stroke('#fff')

        if(this.divided) {
            this.northEast.show({ boundarys, content })
            this.northWest.show({ boundarys, content })
            this.southEast.show({ boundarys, content })
            this.southWest.show({ boundarys, content })
        }

        content && this.entities.length && this.entities.forEach(entity => (entity.show(), fill(entity.color)))
    }
}