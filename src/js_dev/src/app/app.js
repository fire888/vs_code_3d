import * as THREE from 'three'

import { Studio } from '../entities/Studio'
import { UpdaterByFrame } from "../helpers/Updater"


const init = () => {
    const updaterByFrame = new UpdaterByFrame()
    updaterByFrame.start()

    const studio = new Studio()
    studio.init()
    updaterByFrame.setToUpdate(studio.render.bind(studio))

    const box = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
    studio.scene.add(box)
}

document.addEventListener('DOMContentLoaded', init)


