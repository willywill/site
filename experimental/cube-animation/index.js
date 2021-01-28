/* eslint-disable */

// Inspired by this CodePen - https://codepen.io/Ivolvy/pen/VvLRmO

let that;
const MovingCubes = function () {
  this.scene = new THREE.Scene();
  that = this;
};

MovingCubes.prototype.init = function () {
  this.createCamera();
  this.createRenderer();

  this.createBoxes();

  this.createLights();

  this.animateBoxes();

  this.render();
};

MovingCubes.prototype.createCamera = function () {
  this.camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1000, 1000);
  this.camera.position.x = 100;
  this.camera.position.y = 100;
  this.camera.position.z = 100;
  // this.camera.updateProjectionMatrix();
  this.camera.lookAt(this.scene.position);
};

MovingCubes.prototype.createRenderer = function () {
  this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  this.renderer.setClearColor(0xf2f2f2, 0);
  this.renderer.shadowMapEnabled = true;
  this.renderer.shadowMapType = THREE.PCFSoftShadowMap;
  this.renderer.shadowMapSoft = true;
  document.body.appendChild(this.renderer.domElement);
};

MovingCubes.prototype.createBoxes = function () {
  const geometry = new THREE.BoxGeometry(50, 50, 50);
  const material = new THREE.MeshLambertMaterial({ color: new THREE.Color('#2684ff'), shading: THREE.FlatShading });

  this.groupBoxes = new THREE.Object3D();
  this.leftBoxes = new THREE.Object3D();
  this.middleBoxes = new THREE.Object3D();
  this.rightBoxes = new THREE.Object3D();

  // create all the boxes
  for (let i = 0; i < 9; i++) {
    this.boxe = new THREE.Mesh(geometry, material);

    if (i == 0 || i == 3 || i == 6) {
      this.boxe.castShadow = true;
    }

    if (i < 3) {
      this.leftBoxes.add(this.boxe);
    }
    else if (i >= 3 && i < 6) {
      this.middleBoxes.add(this.boxe);
    }
    else {
      this.rightBoxes.add(this.boxe);
    }
  }

  this.groupBoxes.add(this.leftBoxes);
  this.groupBoxes.add(this.middleBoxes);
  this.groupBoxes.add(this.rightBoxes);

  this.scene.add(this.groupBoxes);
};

MovingCubes.prototype.createLights = function () {
  this.scene.add(new THREE.AmbientLight('darkgray'));

  const shadowLight = new THREE.DirectionalLight(new THREE.Color('#2684ff'), 0.5);
  shadowLight.position.set(0, 60, 0);
  shadowLight.castShadow = true;
  shadowLight.shadowDarkness = 0.1;
  // directionalLightshadow.shadowCameraVisible = true;
  shadowLight.shadowCameraFar = 1000;
  this.scene.add(shadowLight);

  const directionalLight = new THREE.DirectionalLight(new THREE.Color('#2684ff'), 0.8);
  directionalLight.position.set(10, 40, 50);
  this.scene.add(directionalLight);
};

MovingCubes.prototype.animateBoxes = function () {
  const tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });
  tl.to(this.leftBoxes.position, 0.7, { z: 75, ease: Expo.easeOut });
  tl.to(this.rightBoxes.position, 0.7, { z: -75, ease: Expo.easeOut }, '=-0.7'); // "=-0.7" permit to synchronise the different animations by advancing the timeline execution

  tl.to(this.leftBoxes.children[1].position, 0.7, { y: 75, ease: Expo.easeOut });
  tl.to(this.leftBoxes.children[2].position, 0.7, { y: 75, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.middleBoxes.children[1].position, 0.7, { y: 75, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.middleBoxes.children[2].position, 0.7, { y: 75, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.rightBoxes.children[1].position, 0.7, { y: 75, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.rightBoxes.children[2].position, 0.7, { y: 75, ease: Expo.easeOut }, '=-0.7');

  tl.to(this.leftBoxes.children[2].position, 0.7, { y: 150, ease: Expo.easeOut });
  tl.to(this.middleBoxes.children[2].position, 0.7, { y: 150, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.rightBoxes.children[2].position, 0.7, { y: 150, ease: Expo.easeOut }, '=-0.7');

  tl.to(this.leftBoxes.position, 0.7, { z: 0, ease: Expo.easeOut });
  tl.to(this.rightBoxes.position, 0.7, { z: 0, ease: Expo.easeOut }, '=-0.7');

  tl.to(this.leftBoxes.children[1].position, 0.7, { y: 0, ease: Expo.easeOut });
  tl.to(this.leftBoxes.children[2].position, 0.7, { y: 0, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.middleBoxes.children[1].position, 0.7, { y: 0, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.middleBoxes.children[2].position, 0.7, { y: 0, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.rightBoxes.children[1].position, 0.7, { y: 0, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.rightBoxes.children[2].position, 0.7, { y: 0, ease: Expo.easeOut }, '=-0.7');
  tl.to(this.groupBoxes.rotation, 0.7, { y: -Math.PI, ease: Expo.easeOut }, '=-0.7');
};

MovingCubes.prototype.render = function () {
  requestAnimationFrame(this.render.bind(this));
  this.renderer.render(this.scene, this.camera);
};

const movingBoxes = new MovingCubes();
movingBoxes.init();
