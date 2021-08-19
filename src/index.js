// import * as Tone from 'tone'

import Synth from "./scripts/synth_skeleton.js"
import Modal from "./scripts/modal_control.js"
// import SoundKit from "./scripts/sound_kits.js"


document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector("body");

    new Synth(el);

    // new SoundKit();
    
    new Modal();
    
    
    
    // TESTING!!
    // const syn = new Tone.Synth().toDestination();
    // syn.triggerAttackRelease("C4", "8n");
    // document.querySelector('#synth-grid').addEventListener('click',
    // async () => {
    //     await Tone.start();
    //     console.log("context started");
    // });
   
});