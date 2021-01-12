import { canvas, ctx, colors } from "../canvas"
import { pythagoras } from "./formulas"
import { rectangle } from "./draw"
import AABB from "../Strutures/Entities/types/AABB"
import QuadTree from "../Strutures/QuadTree"

export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const randomColor = () => colors[Math.floor(Math.random() * random(0, colors.length))]

export const distance = (x1, x2, y1, y2) => pythagoras(x1 - x2, y1 - y2)
export const CENTER = () => ({ x: canvas.width/2, y: canvas.height/2})

export const background = color => (rectangle(-canvas.width,-canvas.height,canvas.width*2,canvas.height*2), fillStyle(color), fill())

export const translate = (x, y) => ctx.translate(x, y)

export const fill = color => (fillStyle(color), ctx.fill())
export const stroke = color => (strokeStyle(color), ctx.stroke())
export const fillStyle = color => ctx.fillStyle = color
export const strokeStyle = color => ctx.strokeStyle = color
export const strokeWeight = number => ctx.lineWidth = number

export const getMousePosition = (e = window) => {
    return [e.clientX - ctx.mozCurrentTransform[4], e.clientY - ctx.mozCurrentTransform[5]]
}

export const constrain = (n, min, max) => n < min ? min : n > max ? max : n

export const getLargestEntityLength = (entities) =>
    Math.max(...[...entities].map(entity => entity.radius ?? Math.max(entity.width, entity.height)))

export const minCollisionRange = (entity, range) => 
    new AABB({ 
        x: entity.middleX - (range + entity.halfWidth), 
        y: entity.middleY - (range + entity.halfHeight), 
        width: (range + entity.halfWidth)*2, 
        height: (range + entity.halfHeight)*2 
    })

export const globalQuadTree = (capacity = 4) => 
    new QuadTree(
        new AABB({
            x: 0, y: 0, width: canvas.width, height: canvas.height
        }), capacity
    )

export const getClosestPoint = (point, points) => points.reduce((a, b) => distance(point.x, a.x, point.y, a.y) < distance(point.x, b.x, point.y, b.y)  ? a : b)