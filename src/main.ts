import "./style.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Drawing from "./drawing";
import LSystem from "./LSystem";

const canvas = document.querySelector("canvas.webgl");
const lSystem = new LSystem();
const drawing = new Drawing();

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
let axiom = lSystem.tree.values.axiom;
let rules = lSystem.tree.rules;
let iterCount = lSystem.tree.values.iterations;
let angleDelta = lSystem.tree.values.angleDelta;

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

  scene.add(mesh);
};
createMesh();

const animate = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

animate();
