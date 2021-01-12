import { getMousePosition } from "./utils/utils"

export const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')
export const mouse = {}
export const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('mousemove', e => {
	let m  = getMousePosition(e)
	mouse.x = m[0]
	mouse.y = m[1]
})

