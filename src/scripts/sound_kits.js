import * as Tone from 'tone'
class SoundKit {
    constructor () {
        this.bassSynth = new Tone.MembraneSynth().toDestination();
        // will use triggerAttackRelease("C1", "8n")
    }
}


