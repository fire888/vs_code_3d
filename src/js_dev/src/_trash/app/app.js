import { default as ForceGraph3D } from '3d-force-graph';
//import * as THREE from 'three'

document.addEventListener('DOMContentLoaded', () => {
    const N = 300;
    const gData = {
        nodes: {},
        links: [],
    };

    for (let i = 1; i < N; ++i) {
        const id = 'id' + i
        let idPev = 'id1'
        if (i !== 1) {
            idPev = 'id' + i - 1
        }
        gData.nodes[id] = {
            name: "name" + i,
            val: Math.random() * 10
        }
        if (idPev) {
            gData.links.push([id, idPev])
        }


    }

    const elem = document.getElementById("3d-graph")
    const myGraph = ForceGraph3D()
    myGraph(elem)
    const g = ForceGraph3D()(elem).graphData(gData)
})


