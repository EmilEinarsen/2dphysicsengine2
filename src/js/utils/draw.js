import { ctx } from '../canvas'

export function circle(x,y,radius) {
	ctx.beginPath()
	ctx.arc(x, y, radius, 0, Math.PI * 2, false)
	ctx.closePath()
}

export function rectangle(x, y, width, height) {
	ctx.beginPath()
	ctx.rect(x, y, width, height)
	ctx.closePath()
}

export function rotateRect() {
	
}