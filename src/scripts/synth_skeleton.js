
import * as Tone from 'tone'
import { ToneEvent } from 'tone';

class Synth {
    constructor (el) {
        // this.soundKit = soundKit;
        this.el = el;
        // this.soundArray = [
        //     ['C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0', 'C0'],
        //     ['C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1'],
        //     ['C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2', 'C2'],
        //     ['C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3'],
        //     ['C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4', 'C4']
        // ];
        this.playPause();
        this.handleClick();
        this.soundBtns();
        console.log('constructor is firing')
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
        
        let synth1 = new Tone.Synth().toDestination();

        kick.addEventListener('click', (event) => {
            event.preventDefault();
            synth1.triggerAttackRelease('C0', '8n');
            Tone.Transport.stop();
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
}

export default Synth;

