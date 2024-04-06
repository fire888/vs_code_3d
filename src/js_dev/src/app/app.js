import * as THREE from 'three'
import ThreeMeshUI from 'three-mesh-ui'
import { Studio } from '../entities/Studio'
import { UpdaterByFrame } from "../helpers/Updater"
//import FontJSON from '../assets/Roboto-msdf.json';
import FontImage from '../assets/Roboto-msdf.png';
import { font } from "../assets/fonts";

const init = () => {
    const updaterByFrame = new UpdaterByFrame()
    updaterByFrame.start()
    updaterByFrame.setToUpdate(ThreeMeshUI.update)

    const studio = new Studio()
    studio.init()
    updaterByFrame.setToUpdate(studio.render.bind(studio))


    // const container = new ThreeMeshUI.Block( {
    //     width: 1.3,
    //     height: 0.5,
    //     padding: 0.05,
    //     justifyContent: 'center',
    //     textAlign: 'left',
    //     //fontFamily: FontJSON,
    //     fontFamily: font,
    //     fontTexture: FontImage,
    //     // interLine: 0,
    // } );
    //
    // container.position.set( 0, 1, -1.8 );
    // container.rotation.x = -0.55;
    // studio.scene.add( container );
    //
    // //
    //
    // container.add(
    //     new ThreeMeshUI.Text( {
    //         // content: 'This library supports line-break-friendly-characters,',
    //         content: 'This library supports line break friendly characters',
    //         fontSize: 0.055
    //     } ),
    //
    //     new ThreeMeshUI.Text( {
    //         content: ' As well as multi font size lines with consistent vertical spacing',
    //         fontSize: 0.08
    //     } )
    // )

    //container.onAfterUpdate = function (  ){


        // console.log( container.lines );
        //
        // if( !container.lines ) return;
        //
        //
        // console.log("lines", container.lines);
        //
        // var plane = new THREE.Mesh(
        //     new THREE.PlaneGeometry(container.lines.width, container.lines.height ),
        //     new THREE.MeshBasicMaterial({color:0xff9900})
        // );
        //
        // const INNER_HEIGHT = container.getHeight() - ( container.padding * 2 || 0 );
        //
        // if( container.getJustifyContent() === 'start' ){
        //     plane.position.y = (INNER_HEIGHT/2) - container.lines.height/2;
        // }else if( container.getJustifyContent() === 'center'){
        //     plane.position.y = 0;
        // }else{
        //     plane.position.y = -(INNER_HEIGHT/2) + container.lines.height/2
        // }
        //
        // container.add( plane )
    //}
}

document.addEventListener('DOMContentLoaded', init)

