import { selectOptions } from "./constants";
import { LSystemKeys, LSystem, Rules, Values } from "./LSystem";

export const generateOptions = () => {
  const selectNode: HTMLSelectElement = document.querySelector(
    "[name^=type-select]"
  );
  Object.entries(selectOptions).forEach(([key, value]) => {
    const optionNode = document.createElement("option");
    optionNode.value = key;
    optionNode.text = value;
    selectNode.appendChild(optionNode);
  });

  // default value
  selectNode.value = "tree";
};

const removeRulesInputs = () => {
  const rulesInputs = document.querySelectorAll("[name^=rule]");
  const rulesLabels = document.querySelectorAll("[for^=rule]");
  rulesInputs.forEach((el) => {
    el.remove();
  });
  rulesLabels.forEach((el) => {
    el.remove();
  });
};

export const setFormData = (type: LSystemKeys) => {
  setValuesInputs(LSystem[type].values);
  addRulesFields(LSystem[type].rules);
};

const addRulesFields = (rulesObject: Rules) => {
  removeRulesInputs();
  const form = document.querySelector(".form");
  Object.entries(rulesObject).forEach(([char, value]) => {
    const labelNode = document.createElement("label");
    labelNode.setAttribute("for", `rule${char}`);
    labelNode.innerHTML = `${char}:`;

    const inputNode = document.createElement("input");
    inputNode.setAttribute("name", `rule${char}`);
    inputNode.setAttribute("value", value);
    inputNode.setAttribute("type", "text");
    form.insertBefore(labelNode, form.children[form.children.length - 1]);
    form.insertBefore(inputNode, form.children[form.children.length - 1]);
  });
};

const setValuesInputs = (valuesObject: Values) => {
  Object.entries(valuesObject).forEach(([key, value]) => {
    const form = document.forms["LSystem"];
    if (form) form[key].value = value;
  });
};
