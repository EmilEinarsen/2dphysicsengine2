import { background, CENTER, fill, getLargestEntityLength, globalQuadTree, minCollisionRange, random, randomColor, stroke, strokeWeight } from './utils/utils'
import { canvas, colors, mouse } from './canvas'
import QuadTree from './Strutures/QuadTree'
import Circle from './Strutures/Entities/types/Circle'
import Rectangle from './Strutures/Entities/types/Rectangle'
import Point from './Strutures/Entities/types/Point'
import Vector from './Strutures/Vector'
import Edges from './Strutures/Edges'
import AABB from './Strutures/Entities/types/AABB'
import Segment from './Strutures/Entities/types/Segment'
import Polygon from './Strutures/Entities/types/Polygon'
import { point } from './utils/draw'

function init() {
	animate.entities = []
	let c = CENTER()
	background('#000')

	animate.entities.push(
		new Circle({ x: c.x + 450 - 180, y: c.y, mass: 10, vx: -.5 }),
		new Rectangle({ pos: new Vector(c.x - 200, c.y + 200), physics: 'STATIC', width: 500, height: 200, mass: 1000000, angle: 10 }).mirror()
	)
	animate.entities.push(
		new Circle({ x: c.x, y: 0, mass: 10, vx: -.5 }),
		new Rectangle({ pos: new Vector(c.x - 200, c.y + 200), physics: 'STATIC', width: 500, height: 200, mass: 1000000, angle: 10 })
	)

	/* animate.entities.push(
		new Circle({ x: c.x, y: 0, mass: 10 }),
		new Circle({ x: c.x, y: 100, mass: 10 }),
		new Circle({ x: c.x, y: 200, mass: 10 }),
		new Circle({ x: c.x, y: 300, mass: 10 }),
		new Circle({ x: c.x, y: 400, mass: 10 }),
		new Rectangle({ pos: new Vector(c.x - 200, c.y + 200), physics: 'STATIC', width: 500, height: 200, mass: 1000000, angle: 0 })
	) */

	/* for(let i = 0; i < 200; i++)
		animate.entities.push(
			new Point({ x: random(0, 2*c.x), y: random(0, 2*c.y) })
		) */
}

function animate() {
	requestAnimationFrame(animate)
	background('#000')

	animate.entities.forEach(entity => {
		entity.gravity()
	})

	for(let i = 0; i < animate.entities.length; i++)
		for(let j = i+1; j < animate.entities.length; j++) {
			let result = animate.entities[i].intersects(animate.entities[j],  true)
			result.type === 'INTERSECTING' && animate.entities[i].collision(animate.entities[j], result)
		}

	animate.entities.forEach(entity => entity.update())
	animate.entities.forEach(entity => (entity.show(), stroke(entity.color)))

	
}

init()
animate()
