export interface Values {
  axiom: string;
  iterations: number;
  angleDelta: number;
}
export type Rules = {
  [key in RulesChars]?: string;
};
interface LSystemData {
  values: Values;
  rules: Rules;
}
type RulesChars = "A" | "B" | "F" | "G" | "X" | "-" | "+" | "[" | "]";

export default class LSystem {
  tree: LSystemData;
  constructor() {
    this.tree = treeData;
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
