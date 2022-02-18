import "./style.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Drawing from "./drawing";
import { LSystemKeys } from "./LSystem";
import { generateOptions, setFormData } from "./domHelpers";

const drawing = new Drawing();

// DOM
let isSidebarPinned = false;
const canvas = document.querySelector("canvas.webgl");
const select: HTMLSelectElement = document.querySelector("[name^=type-select]");
const sidebar = document.querySelector(".sidebar");
const showSidebarBtn: HTMLElement = document.querySelector(".show-sidebar-btn");
const pinSidebarBtn: HTMLElement = document.querySelector("[class*=pin-btn]");
const onSidebarOutsideClick = (e: MouseEvent) => {
  if (isSidebarPinned) return;
  if (!sidebar.contains(e.target as Node)) {
    sidebar.classList.remove("visible");
    showSidebarBtn.classList.add("visible");
  }
};
document.addEventListener("mousedown", onSidebarOutsideClick);
document.addEventListener("touchstart", onSidebarOutsideClick);
showSidebarBtn.onclick = () => {
  sidebar.classList.add("visible");
  showSidebarBtn.classList.remove("visible");
};
pinSidebarBtn.onclick = () => {
  isSidebarPinned = !isSidebarPinned;
  if (isSidebarPinned) {
    pinSidebarBtn.classList.add("active");
  } else {
    pinSidebarBtn.classList.remove("active");
  }
};

generateOptions();
const form: HTMLFormElement = document.querySelector(".form");
select.onchange = (e: Event) => {
  const { value } = <HTMLSelectElement>e.target;
  setFormData(value as LSystemKeys);
  generate();
};
form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  generate();
};

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcc_cc_cc);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.z = 10;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas as HTMLElement);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Drawing
let axiom = null;
let rules = null;
let iterCount = null;
let angleDelta = null;

let geometry: null | THREE.BufferGeometry = null;
let material: null | THREE.LineBasicMaterial = null;
let mesh: null | THREE.LineSegments = null;

const createMesh = () => {
  if (mesh !== null) {
    // remove previous mesh
    drawing.resetRenderVariables();
    geometry.dispose();
    material.dispose();
    scene.remove(mesh);
  }
  const codeString = Drawing.getCodeString(rules, axiom, iterCount);
  const points = drawing.getPoints(codeString, angleDelta);
  material = new THREE.LineBasicMaterial({
    color: "#212121",
  });
  geometry = new THREE.BufferGeometry().setFromPoints(points);
  mesh = new THREE.LineSegments(geometry, material);

  mesh.geometry.computeBoundingSphere();
  mesh.geometry.computeBoundingBox();
  // Controls centering
  controls.target.copy(mesh.geometry.boundingSphere.center);

  // Camera centering
  const { min, max } = mesh.geometry.boundingBox;
  const size = Math.max(Math.abs(min.x - max.x), Math.abs(min.y - max.y));
  camera.position.x = mesh.geometry.boundingSphere.center.x;
  camera.position.y = mesh.geometry.boundingSphere.center.y;
  camera.position.z = size * 0.7; // distance to object

  scene.add(mesh);
};
function generate() {
  const fd = new FormData(document.forms["LSystem"]);
  if (fd) {
    const axiomInput = fd.get("axiom");
    const iterations = fd.get("iterations");
    const angleDeltaInput = fd.get("angleDelta");

    const rulesFromForm = Array.from(fd.entries())
      .filter(([name]) => name.startsWith("rule"))
      .reduce((acc, [k, v]) => {
        const key = k[k.length - 1];
        return { ...acc, [key]: v };
      }, {});

    rules = rulesFromForm;
    iterCount = Number(iterations);
    axiom = axiomInput;
    angleDelta = Number(angleDeltaInput);

    createMesh();
  }
}

// initial render
setFormData(select.value as LSystemKeys);
generate();

const animate = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

animate();
