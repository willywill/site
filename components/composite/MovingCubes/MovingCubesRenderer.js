/* global window, document */
import {
  Scene, OrthographicCamera, WebGLRenderer,
  BoxGeometry, MeshLambertMaterial, Color,
  Object3D, Mesh, AmbientLight, DirectionalLight,
} from 'three';
import { Expo, TimelineMax } from 'gsap';

class MovingCubes {
  constructor() {
    this.scene = new Scene();
    this.width = window.innerWidth / 2;
    this.height = window.innerHeight / 2;
  }

  initialize() {
    this.createCamera();
    this.createRenderer();
    this.createBoxes();
    this.createLights();
    this.animateBoxes();
    this.render();
  }

  createCamera() {
    this.camera = new OrthographicCamera(
      this.width / -2,
      this.width / 2,
      this.height / 2,
      this.height / -2,
      -1000,
      1000,
    );
    this.camera.position.x = 100;
    this.camera.position.y = 100;
    this.camera.position.z = 100;
    this.camera.lookAt(this.scene.position);
  }

  createRenderer() {
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xf2f2f2, 0);
    document.querySelector('#cube-container').appendChild(this.renderer.domElement);
  }

  createBoxes() {
    const geometry = new BoxGeometry(50, 50, 50);
    const material = new MeshLambertMaterial({ color: new Color('#2684ff'), flatShading: true });

    this.groupBoxes = new Object3D();
    this.leftBoxes = new Object3D();
    this.middleBoxes = new Object3D();
    this.rightBoxes = new Object3D();

    // create all the boxes
    for (let i = 0; i < 9; i++) {
      this.boxe = new Mesh(geometry, material);

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
  }

  createLights() {
    this.scene.add(new AmbientLight('darkgray'));

    const shadowLight = new DirectionalLight(new Color('#2684ff'), 0.5);
    shadowLight.position.set(0, 60, 0);
    this.scene.add(shadowLight);

    const directionalLight = new DirectionalLight(new Color('#2684ff'), 0.8);
    directionalLight.position.set(10, 40, 50);
    this.scene.add(directionalLight);
  }

  animateBoxes() {
    const tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });
    tl.to(this.leftBoxes.position, 0.7, { z: 75, ease: Expo.easeOut });
    tl.to(this.rightBoxes.position, 0.7, { z: -75, ease: Expo.easeOut }, '=-0.7');

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
  }

  render() {
    window.requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}

export default MovingCubes;
