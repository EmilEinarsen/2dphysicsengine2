// Angle collision wierdly wrong, result, cirlce wanders inverted up inside the line. Only seem to happen with c.y + 100
animate.entities.push(
    new Circle({ x: c.x + 450 - 180, y: c.y, mass: 10, vx: .5 }),
    new Segment({ pos1: new Vector(c.x - 200, c.y + 100), pos2: new Vector(c.x + 300, c.y + 200), mass: 1000000 })
)