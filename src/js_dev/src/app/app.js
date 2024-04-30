import * as THREE from 'three'

import { Studio } from '../entities/Studio'
import { UpdaterByFrame } from "../helpers/Updater"
import { SpriteText } from '../entities/SpriteText'


const init = () => {
    const updaterByFrame = new UpdaterByFrame()
    updaterByFrame.start()

    const studio = new Studio()
    studio.init()
    updaterByFrame.setToUpdate(studio.render.bind(studio))

    for (let i = 0; i < 10; ++i) {
        const s = new SpriteText(Math.floor(Math.random() * 1000) + '')
        s.scale.set(.3, .3, .3)
        s.position.y = -i * .3 + 1
        s.position.x = 1
        s.position.z = 1.3
        studio.scene.add(s)
    }


    const box = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
    studio.scene.add(box)
}

document.addEventListener('DOMContentLoaded', init)


