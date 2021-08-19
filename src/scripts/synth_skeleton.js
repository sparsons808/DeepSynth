
import * as Tone from 'tone'
// import { ToneEvent } from 'tone';
// import SoundKit from './sound_kits';

class Synth {
    constructor (el) {
        // this.soundKit = soundKit;
        this.el = el;
        this.soundKit = []

        this.soundKit1();
        this.playPause();
        this.handleClick();
        this.soundBtns();
        this.trash();
        console.log('constructor is firing')
    }

    soundKit1 () {
        for (let i = 1; i < 6; i++) {
            let drumSound = new Tone.Player(`dist/sample_0${i}.wav`).toDestination();
            drumSound.autostart = true;
            this.soundKit.push(drumSound);

            
        }
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
        
        let synth1 = this.soundKit[1];

        kick.addEventListener('click', (event) => {
            event.preventDefault();
            synth1.load('dist/sample_01.wav');
            synth1.start();
            // Tone.Transport.stop();
        });

        const snare = document.querySelector(".snare");

        snare.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth1.triggerAttackRelease('C1', '8n');
            Tone.Transport.stop();
        });

        const hiHate = document.querySelector(".hihat");

        hiHate.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth1.triggerAttackRelease('C2', '8n');
            Tone.Transport.stop();
        });

        const tom = document.querySelector(".tom");

        tom.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth1.triggerAttackRelease('C3', '8n');
            Tone.Transport.stop();
        });

        const cymbal = document.querySelector(".cymbal");

        cymbal.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth1.triggerAttackRelease('C4', '8n');
            Tone.Transport.stop();
        });

    }

    playPause() {

       
        const mySynths = [
            new Tone.Synth().toDestination(),
            new Tone.Synth().toDestination(),
            new Tone.Synth().toDestination(),
            new Tone.Synth().toDestination(),
            new Tone.Synth().toDestination()
        ]

        const rows = document.querySelectorAll(".row");

        const beats = ['C0', 'C1', 'C2', 'C3', 'C4'];

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
                
                if(div.classList.contains('selected')) {
                    synth.triggerAttackRelease(beat, '8n', time);
                }
            }

            idx++
        }

       
    }

    trash() {
        console.log('I AM GETTING RUN FRIENDS')
       
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

        console.log(this)
        window.testme = this;
    }
}

export default Synth;

