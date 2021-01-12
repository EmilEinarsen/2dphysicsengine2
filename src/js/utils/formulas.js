const defDegree = (180 / Math.PI)

export const pythagoras = ( dx, dy ) => Math.sqrt((dx**2) + (dy**2))

export const atanAngle = ( dx, dy ) => Math.atan2( dy, dx )

export const stdRotationFormula = (x, y, angle) => ({
	/**
	 * y' = y*cos(a) + x*sin(a)
	 * x' = -y*sin(a) + x*cos(a)
	 */
	x: (y * Math.sin(angle)) + (x * Math.cos(angle)), 
	y: (y * Math.cos(angle)) - (x * Math.sin(angle))
})

/**
 * @param {number} radian
 * 
 * @returns {number} degree
 */
export const radianToDegree = radian => radian * defDegree

/**
 * @param {number} degrees
 * 
 * @returns {number} radian
 */
export const degreeToRadian = degrees => degrees * (1/defDegree)