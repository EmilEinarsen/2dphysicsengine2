import { canvas } from "../canvas"
import { fill } from "../utils/utils"
import AABB from "./Entities/types/AABB"

export default class Edges {
    constructor() {
        this.width = canvas.width
        this.height = canvas.height
        this.bottom = new AABB({ x: 0, y: this.height - 20, width: this.width, height: 20, apperance: { color: 'grey' } })
        this.left = new AABB({ x: 0, y: 0, width: 20, height: this.height, apperance: { color: 'grey' } })
        this.right = new AABB({ x: this.width - 20, y: 0, width: 20, height: this.height, apperance: { color: 'grey' } })
    }

    show() {
        this.bottom && (this.bottom.show(), fill(this.bottom.color))
        this.left && (this.left.show(), fill(this.left.color))
        this.right && (this.right.show(), fill(this.right.color))
    }

    update(entities) {
        entities.forEach(entity => {
            
            if(entity.bottom >= this.bottom.top) {
                entity.vel.y *= -1
                entity.friction(this.bottom)
            }

            if(entity.right >= this.right.left) {
                entity.vel.x *= -1
                entity.friction(this.right)
            } else if(entity.left <= this.left.right) {
                entity.vel.x *= -1
                entity.friction(this.left)
            }

        })
    }
    
}