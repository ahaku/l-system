import "./style.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("canvas.webgl");

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

// Test mesh
const geometry = new THREE.BoxBufferGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial({
  color: "dodgerblue",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Drawing

const animate = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

animate();
