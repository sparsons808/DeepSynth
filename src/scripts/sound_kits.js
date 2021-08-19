import * as Tone from 'tone'
import { ToneAudioBuffer } from 'tone';

class SoundKit {
    constructor () {
        // this.soundKit = []

        // this.soundKit1();

        this.soundKit = new Tone.Sampler({
            "C1": "sample_01.mp3",
            "D2": "sample_02.mp3",
            "C2": "sample_03.mp3",
            "C2": "sample_04.mp3",
            "A2": "sample_05.mp3"
 
        })
    }

    // soundKit1 () {
    //     for (let i = 1; i < 6; i++) {
    //         let drumSound = new Tone.Player(`sample_0${i}.mp3`).toDestination();
    //         this.soundKit.push(drumSound);
            
    //     }
    // }

    

};

export default SoundKit;


