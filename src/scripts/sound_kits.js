import * as Tone from 'tone'

class SoundKit {
    constructor () {
        this.soundKit = []

        this.soundKit1();
    }

    soundKit1 () {
        for (let i = 1; i < 6; i++) {
            let drumSound = new Tone.Player(`./dist/sample_0${i}.wav`).toDestination();
            this.soundKit.push(drumSound);
            
        }
    }
};

export default SoundKit;


