import * as Tone from 'tone'
class SoundKitA {
    constructor () {
        this.bassSynth = new Tone.MembraneSynth().toDestination();
        // will use triggerAttackRelease("C1", "8n", time)

        this.cymbal = new Tone.MetalSynth().toDestination();
        // will use triggerAttackRelease('32n', time, 0.3)

        // this.snare = new Tone.

        this.polysynth = new Tone.PolySynth(3, Tone.FMSynth);

    //     this.sampler = new Tone.Players({
    //         "kick": 'https://d'
    //         "snare":
    //         "hihat":
    //     })
    }
}


