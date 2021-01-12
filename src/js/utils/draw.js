import { ctx } from '../canvas'
import { fill, stroke } from './utils'
import { stdRotationFormula } from './formulas'

export function ellipse(x,y,radius) {
	ctx.beginPath()
	ctx.arc(x, y, radius, 0, Math.PI * 2, false)
	ctx.closePath()
}

export function rectangle(x, y, width, height) {
	ctx.beginPath()
	ctx.rect(x, y, width, height)
	ctx.closePath()
}

export function rotateRec(x, y, width, height, angle) {
	rotate(() => {
		let point = stdRotationFormula(x, y, angle)
		rectangle(point.x, point.y, width, height)
	}, angle)
}

export function point(x, y, weight) {
	rectangle(x,y,weight,weight)
}

export function line(x1, y1, x2, y2) {
	ctx.beginPath()
	ctx.moveTo(x1, y1)
	ctx.lineTo(x2, y2)
	ctx.closePath()
}

export function polygon(points) {
	ctx.beginPath()

	ctx.moveTo(points[0].x, points[0].y)
	for(let i = 0; i < points.length; i++) 
		ctx.lineTo(
			points[(i+1)%points.length].x, 
			points[(i+1)%points.length].y
		)
	
	ctx.closePath()
}

export const rotate = (func, angle) => {
	ctx.save()
	ctx.rotate(angle)
	func()
	ctx.restore()
}