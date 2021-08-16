import * as Tone from 'tone'

const Synth = require("./scripts/synth_skeleton.js");


document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector("body");

    new Synth(el);

    
    // TESTING!!
    // const syn = new Tone.Synth().toDestination();
    // syn.triggerAttackRelease("C4", "8n");
    // document.querySelector('#synth-grid').addEventListener('click',
    // async () => {
    //     await Tone.start();
    //     console.log("context started");
    // });
   
})