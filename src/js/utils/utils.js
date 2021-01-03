import { canvas, ctx } from "../canvas"
import { pythagoras } from "./formulas"
import { rectangle } from "./draw"

export const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const randomColor = (colors) => colors[Math.floor(Math.random() * randomIntFromRange(0, colors.length))]

export const distance = (x1, x2, y1, y2) => pythagoras(x1 - x2, y1 - y2)

export const background = color => (fillStyle(color), rectangle(0,0,canvas.width,canvas.height), fill())

export const fillStyle = color => ctx.fillStyle = color
export const strokeStyle = color => ctx.strokeStyle = color

export const fill = () => ctx.fill()
export const stroke = () => ctx.stroke()
