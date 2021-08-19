
import * as Tone from 'tone'
// import { ToneEvent } from 'tone';
// import SoundKit from './sound_kits';

class Synth {
    constructor (el) {
        // this.soundKit = soundKit;
        this.el = el;
        this.playPause();
        this.handleClick();
        this.soundBtns();
        this.trash();
        // console.log('constructor is firing')
    }
    // handleClick toggles between activated and not activated
    handleClick() {
        const ele = document.querySelector("#synth-grid");


        ele.addEventListener("click", (event) => {
            event.preventDefault();
            // let row = event.target.parentElement.getAttribute("data-row");
            // let col = event.target.getAttribute("data-col");
            event.target.classList.toggle("selected");

            // row = parseInt(row);
            // col = parseInt(col);

            // let value = this.soundArray[row][col];

            // if (value === false) {
            //     value = true;
            // } else {
            //     value = false;
            // };

            // this.soundArray[row][col] = value

            // console.log(this.soundArray);
        })
        
    }

    soundBtns() {
        const kick = document.querySelector(".kick")
        
        let synth1 = new Tone.MembraneSynth().toDestination();

        kick.addEventListener('click', (event) => {
            event.preventDefault();
            synth1.triggerAttackRelease('C1', '8n');
            Tone.Transport.stop();
        });

        const snare = document.querySelector(".snare");

        const synth2 =  new Tone.MetalSynth({
            frequency: 250,
            envelope: {
            attack: 0.003,
            decay: .1,
            release: 0.01
            },
            harmonicity: 3.1,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1.5
        }).toDestination();

        snare.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth2.triggerAttackRelease('C1', '8n');
            Tone.Transport.stop();
        });

        const hiHate = document.querySelector(".hihat");

        const synth3 = new Tone.Synth().toDestination()

        hiHate.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth3.triggerAttackRelease('C2', '8n');
            Tone.Transport.stop();
        });

        const tom = document.querySelector(".tom");

        const synth4 = new Tone.MembraneSynth({
            pitchDecay: 0.01,
            octaves: 10,
            oscillator: {
            type: 'sine'
            },
            envelope: {
            attack: 0.01,
            decay: 0.6,
            sustain: 0.01,
            release: 1.4,
            attackCurve: 'exponential'
              }
          }).toDestination();

        tom.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth4.triggerAttackRelease('D3', '8n');
            Tone.Transport.stop();
        });

        const cymbal = document.querySelector(".cymbal");
        const vol = new Tone.Volume(-12).toDestination();
        const synth5 = new Tone.MetalSynth().connect(vol);

        cymbal.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth5.triggerAttackRelease('C4', '8n');
            Tone.Transport.stop();
        });

    }

    playPause() {

       const vol = new Tone.Volume(-12).toDestination();

        const mySynths = [
            new Tone.MembraneSynth().toDestination(),
            new Tone.MetalSynth({
                frequency: 250,
                envelope: {
                attack: 0.003,
                decay: .1,
                release: 0.01
                },
                harmonicity: 3.1,
                modulationIndex: 32,
                resonance: 4000,
                octaves: 1.5
            }).toDestination(),
            new Tone.Synth().toDestination(),
            new Tone.MembraneSynth({
                pitchDecay: 0.01,
                octaves: 10,
                oscillator: {
                type: 'sine'
                },
                envelope: {
                attack: 0.01,
                decay: 0.6,
                sustain: 0.01,
                release: 1.4,
                attackCurve: 'exponential'
                  }
              }).toDestination(),
            new Tone.MetalSynth().connect(vol)
        ]

        const rows = document.querySelectorAll(".row");

        const beats = ['C1', 'C1', 'C2', 'D3', 'C4'];

        Tone.Transport.scheduleRepeat(loop, '8n');
        Tone.Transport.start();
        let idx = 0

        const playPause = document.querySelector('#playpause');
        const container = playPause.parentElement;
       
        container.addEventListener('click', (event) => {
            
            if(playPause.classList.contains('play')) {
                Tone.start();
                Tone.Transport.start();
                playPause.classList.toggle('play');
                playPause.classList.toggle('pause');
            } else if(playPause.classList.contains('pause')) {
                Tone.Transport.stop();
                playPause.classList.toggle('pause');
                playPause.classList.toggle('play');
            }
            
            
        });


        function loop(time) {
            let next = idx % 16;

            for (let i = 0; i < rows.length; i++) {
                let synth = mySynths[i];
                let beat = beats[i]
                let row = rows[i];
                let div = row.querySelector(`div:nth-child(${next + 1})`);

                if(i !== 1 && div.classList.contains('selected')) {
                    synth.triggerAttackRelease(beat, '8n', time);
                } else if (i === 1 && div.classList.contains('selected')) {
                    synth.triggerAttackRelease('8n');
                }
            }

            idx++
        }

       
    }

    trash() {
        // console.log('I AM GETTING RUN FRIENDS')
       
        const pausePlay = document.querySelector('#playpause');

        const trashBtn = document.querySelector('.trash');

        trashBtn.addEventListener('click', (event) => {
            // event.preventDefault();
            const selected = document.querySelectorAll('.box.selected');
            for (let i = 0; i < selected.length; i++) {
                selected[i].classList.remove('selected');
            };

            if(pausePlay.classList.contains('pause')){
                pausePlay.classList.add('play');
                pausePlay.classList.remove('pause');
            }
            
            Tone.Transport.stop();
        })

        // console.log(this)
        // window.testme = this;
    }
}

export default Synth;

