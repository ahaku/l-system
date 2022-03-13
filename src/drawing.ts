import { Rules } from "./LSystem";
import * as THREE from "three";
import { radians } from "./helpers";

export default class Drawing {
  lineLength: number;
  angle: number;
  angleDelta: number;
  lastPos: THREE.Vector2;
  positionsStack: THREE.Vector2[];
  anglesStack: number[];
  points: THREE.Vector2[];

  constructor() {
    this.lineLength = 0.1;
    this.angle = 90;
    this.angleDelta = 25;
    this.lastPos = new THREE.Vector2(0, 0);
    this.positionsStack = [];
    this.anglesStack = [];
    this.points = [];
  }

  static getCodeString(rules: Rules, axiom: string, iterationsNumber: number) {
    let result = axiom;
    for (let i = 0; i < iterationsNumber; i++) {
      let temp = "";
      for (let j = 0; j < result.length; j++) {
        const updatedChar = rules[result[j]];
        temp += updatedChar || result[j];
      }
      result = temp;
    }
    return result;
  }

  resetRenderVariables() {
    this.angle = 90;
    this.lastPos = new THREE.Vector2(0, 0);
    this.positionsStack = [];
    this.anglesStack = [];
    this.points = [];
  }

  getPoints(codeString: string, angleDelta: number) {
    this.resetRenderVariables();
    this.angleDelta = angleDelta;

    for (const char of codeString) {
      switch (char) {
        // draw a line
        case "A":
        case "F":
        case "G":
          // start point
          this.points.push(this.lastPos);

          // finish point
          const newX =
            this.lastPos.x + Math.cos(radians(this.angle)) * this.lineLength;
          const newY =
            this.lastPos.y + Math.sin(radians(this.angle)) * this.lineLength;
          const finishPointCoords = new THREE.Vector2(newX, newY);

          this.points.push(finishPointCoords);
          this.lastPos = finishPointCoords;
          break;

        // skip a line
        case "B":
          const emptyLineX =
            this.lastPos.x + Math.cos(radians(this.angle)) * this.lineLength;
          const emptyLineY =
            this.lastPos.y + Math.sin(radians(this.angle)) * this.lineLength;

          this.lastPos = new THREE.Vector2(emptyLineX, emptyLineY);
          break;

        // turn by angle
        case "-":
          this.angle += this.angleDelta;
          break;
        case "+":
          this.angle -= this.angleDelta;
          break;

        // add current positions and angle in the stack
        case "[":
          this.positionsStack.push(this.lastPos);
          this.anglesStack.push(this.angle);
          break;

        // pop current positions and angle from the stack
        case "]":
          const poppedAngle = this.anglesStack.pop();
          this.angle = poppedAngle;
          const poppedPosition = this.positionsStack.pop();
          this.lastPos = poppedPosition;
          break;
        default:
          break;
      }
    }

    return this.points;
  }
}
