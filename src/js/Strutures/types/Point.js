import Entity from "../../Entity";
import { point } from "../../../utils/draw";
import { fill } from "../../../utils/utils";

export default class Point extends Entity {
    constructor({ apperance, ...parent }) {
        super(parent)
        this.strokeWeight = apperance.strokeWeight
        this.color = apperance.color
    }

    show() {
        point(this.pos.x, this.pos.y, this.strokeWeight)
        fill(this.color)
    }
}