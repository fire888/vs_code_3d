import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export class Studio {
    constructor() {
        this.container = null
        this.scene = null
        this.renderer = null
    }

    init () {
        this.container = document.getElementById("3d-graph")
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.container.appendChild(this.renderer.domElement)

        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0x333333)

        this.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100)
        this.camera.position.set(5, 2, 8)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.target.set(0, 0.5, 0)
        this.controls.update()
        this.controls.enablePan = false
        this.controls.enableDamping = true

        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x8d8d8d, 3 )
        hemiLight.position.set( 0, 20, 0 );
        this.scene.add( hemiLight );

        const dirLight = new THREE.DirectionalLight( 0xffffff, 3 );
        dirLight.position.set( - 3, 10, - 10 );
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 2;
        dirLight.shadow.camera.bottom = - 2;
        dirLight.shadow.camera.left = - 2;
        dirLight.shadow.camera.right = 2;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 40;
        this.scene.add( dirLight );

        window.onresize = () => {
            this.camera.aspect = window.innerWidth / window.innerHeight
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(window.innerWidth, window.innerHeight)
        }

        this.clock = new THREE.Clock()
    }

    render () {
        //const delta = this.clock.getDelta()
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
    }
}
