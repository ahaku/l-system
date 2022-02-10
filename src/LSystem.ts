export interface Values {
  axiom: string;
  iterations: number;
  angleDelta: number;
}
export type Rules = {
  [key in RulesChars]?: string;
};
export interface LSystemData {
  values: Values;
  rules: Rules;
}
type RulesChars = "A" | "B" | "F" | "G" | "X" | "Y" | "-" | "+" | "[" | "]";
export type LSystemKeys = keyof LSystem;
export default class LSystem {
  tree: LSystemData;
  dragonCurve: LSystemData;
  serpinskiTriangle: LSystemData;
  serpinskiTriangleApproximate: LSystemData;
  serpinskiCurve: LSystemData;
  serpinskiCarpet: LSystemData;
  kochCurve: LSystemData;
  kochSnowflake: LSystemData;
  iceFractal: LSystemData;
  gosperCurve: LSystemData;
  hilbertCurve: LSystemData;
  squareCarpet: LSystemData;
  plant1: LSystemData;
  plant2: LSystemData;
  plant3: LSystemData;
  boxFractal: LSystemData;
  mosaic: LSystemData;
  levyCurve: LSystemData;
  pentigree: LSystemData;
  border: LSystemData;
  mazeAndFractal: LSystemData;
  moore: LSystemData;
  doily: LSystemData;

  constructor() {
    this.tree = treeData;
    this.dragonCurve = dragonCurveData;
    this.serpinskiTriangle = serpinskiTriangleData;
    this.serpinskiTriangleApproximate = serpinskiTriangleApproximateData;
    this.serpinskiCurve = serpinskiCurveData;
    this.serpinskiCarpet = serpinskiCarpetData;
    this.kochCurve = kochCurveData;
    this.kochSnowflake = kochSnowflakeData;
    this.iceFractal = iceFractalData;
    this.gosperCurve = gosperCurveData;
    this.hilbertCurve = hilbertCurveData;
    this.squareCarpet = squareCarpetData;
    this.plant1 = plant1Data;
    this.plant2 = plant2Data;
    this.plant3 = plant3Data;
    this.boxFractal = boxFractalData;
    this.mosaic = mosaicData;
    this.levyCurve = levyCurveData;
    this.pentigree = pentigreeData;
    this.border = borderData;
    this.mazeAndFractal = mazeAndFractalData;
    this.moore = mooreData;
    this.doily = doilyData;
  }
}
const treeData: LSystemData = {
  values: {
    axiom: "X",
    iterations: 6,
    angleDelta: 25,
  },
  rules: {
    X: "F-[[X]+X]+F[+FX]-X",
    F: "FF",
  },
};

const dragonCurveData: LSystemData = {
  values: {
    axiom: "XY",
    iterations: 10,
    angleDelta: 90,
  },
  rules: {
    X: "X+YF+",
    Y: "-FX-Y",
  },
};

const serpinskiTriangleData: LSystemData = {
  values: {
    axiom: "F-G-G",
    iterations: 6,
    angleDelta: 120,
  },
  rules: {
    F: "F-G+F+G-F",
    G: "GG",
  },
};

const serpinskiTriangleApproximateData: LSystemData = {
  values: {
    axiom: "F",
    iterations: 6,
    angleDelta: 60,
  },
  rules: {
    F: "G-F-G",
    G: "F+G+F",
  },
};

const serpinskiCurveData: LSystemData = {
  values: {
    axiom: "F+XF+F+XF",
    iterations: 5,
    angleDelta: 90,
  },
  rules: {
    X: "XF-F+F-XF+F+XF-F+F-X",
  },
};

const serpinskiCarpetData: LSystemData = {
  values: {
    axiom: "F",
    iterations: 5,
    angleDelta: 90,
  },
  rules: {
    F: "FFF[+FFF+FFF+FFF]",
  },
};

const kochCurveData: LSystemData = {
  values: {
    axiom: "F",
    iterations: 5,
    angleDelta: 90,
  },
  rules: {
    F: "F+F-F-F+F",
  },
};

const kochSnowflakeData: LSystemData = {
  values: {
    axiom: "F++F++F",
    iterations: 5,
    angleDelta: 60,
  },
  rules: {
    F: "F-F++F-F",
  },
};

const iceFractalData: LSystemData = {
  values: {
    axiom: "F+F+F+F",
    iterations: 5,
    angleDelta: 90,
  },
  rules: {
    F: "FF+F++F+F",
  },
};

const gosperCurveData: LSystemData = {
  values: {
    axiom: "XF",
    iterations: 4,
    angleDelta: 60,
  },
  rules: {
    X: "X+YF++YF-FX--FXFX-YF+",
    Y: "-FX+YFYF++YF+FX--FX-Y",
  },
};

const hilbertCurveData: LSystemData = {
  values: {
    axiom: "X",
    iterations: 5,
    angleDelta: 90,
  },
  rules: {
    X: "-YF+XFX+FY-",
    Y: "+XF-YFY-FX+",
  },
};

const squareCarpetData: LSystemData = {
  values: {
    axiom: "F+F+F+F",
    iterations: 5,
    angleDelta: 90,
  },
  rules: {
    F: "FF+F+F+F+FF",
  },
};

const plant1Data: LSystemData = {
  values: {
    axiom: "Y",
    iterations: 7,
    angleDelta: 25,
  },
  rules: {
    X: "X[-FFF][+FFF]FX",
    Y: "YFX[+Y][-Y]",
  },
};

const plant2Data: LSystemData = {
  values: {
    axiom: "F",
    iterations: 4,
    angleDelta: 22,
  },
  rules: {
    F: "FF+[+F-F-F]-[-F+F+F]",
  },
};

const plant3Data: LSystemData = {
  values: {
    axiom: "F",
    iterations: 4,
    angleDelta: 30,
  },
  rules: {
    F: "F[+FF][-FF]F[-F][+F]F",
  },
};

const boxFractalData: LSystemData = {
  values: {
    axiom: "F-F-F-F",
    iterations: 4,
    angleDelta: 90,
  },
  rules: {
    F: "F-F+F+F-F",
  },
};

const mosaicData: LSystemData = {
  values: {
    axiom: "F-F-F-F",
    iterations: 2,
    angleDelta: 90,
  },
  rules: {
    F: "F-B+FF-F-FF-FB-FF+B-FF+F+FF+FB+FFF",
    B: "BBBBBB",
  },
};

const levyCurveData: LSystemData = {
  values: {
    axiom: "F++F++F++F",
    iterations: 12,
    angleDelta: 45,
  },
  rules: {
    F: "-F++F-",
  },
};

const pentigreeData: LSystemData = {
  values: {
    axiom: "F-F-F-F-F",
    iterations: 4,
    angleDelta: 72,
  },
  rules: {
    F: "F-F++F+F-F-F",
  },
};

const borderData: LSystemData = {
  values: {
    axiom: "XYXYXYX+XYXYXYX+XYXYXYX+XYXYXYX",
    iterations: 4,
    angleDelta: 90,
  },
  rules: {
    X: "FX+FX+FXFY-FY-",
    Y: "+FX+FXFY-FY-FY",
  },
};

const mazeAndFractalData: LSystemData = {
  values: {
    axiom: "X",
    iterations: 8,
    angleDelta: 120,
  },
  rules: {
    X: "FY+FYFY-FY",
    Y: "FX-FXFX+FX",
  },
};

const mooreData: LSystemData = {
  values: {
    axiom: "X",
    iterations: 5,
    angleDelta: 90,
  },
  rules: {
    X: "FX+FX+FXFYFX+FXFY-FY-FY-",
    Y: "+FX+FX+FXFY-FYFXFY-FY-FY",
  },
};

const doilyData: LSystemData = {
  values: {
    axiom: "F--F--F--F--F--F",
    iterations: 4,
    angleDelta: 30,
  },
  rules: {
    F: "-F[--F--F]++F--F+",
  },
};
