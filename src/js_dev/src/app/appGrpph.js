// import * as THREE from 'three'

// import { Studio } from '../entities/Studio'
// import { UpdaterByFrame } from "../helpers/Updater"
import { SpriteText } from '../entities/SpriteText'
import ForceGraph3D from '../libs/3dForceGraph'
import nodesData from './nodesData.json'

console.log(ForceGraph3D)

const init = () => {
    const cont = document.getElementById('3d-graph')
    // cont.style.position = 'absolute'
    // cont.style.left = '0';
    // cont.style.right = '0';
    // cont.style.top = '0';
    // cont.style.bottom = '0';
    // cont.style.overflow = 'hidden';
    // cont.style.width = '100vw'
    // cont.style.height = '100vh'


    const Graph = ForceGraph3D()
    (cont)
        .graphData(nodesData)
        .nodeLabel('id')
        .nodeAutoColorBy('group')
        .linkThreeObjectExtend(true)
        .linkThreeObject(link => {
            // extend link with text sprite
            const sprite = new SpriteText(`${link.source} > ${link.target}`);
            sprite.color = 'lightgrey';
            sprite.textHeight = 1.5;
            return sprite;
        })
        .linkPositionUpdate((sprite, { start, end }) => {
            const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
                [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
            })));

            // Position sprite
            Object.assign(sprite.position, middlePos);
        });

    // Spread nodes a little wider
    Graph.d3Force('charge').strength(-120);
}

document.addEventListener('DOMContentLoaded', init)


