
import * as Tone from 'tone'

class Synth {
    constructor (el) {
        // this.soundKit = soundKit;
        this.el = el;
        this.soundArray = [
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]
        ];
        this.setupSynth();
        this.handleClick();
        this.sequencer();
        console.log('constructor is firing')
    }
    // handleClick toggles between activated and not activated
    handleClick() {
        const ele = document.querySelector("#synth-grid");


        ele.addEventListener("click", (event) => {
            event.preventDefault();
            let row = event.target.parentElement.getAttribute("data-row");
            let col = event.target.getAttribute("data-col");
            event.target.classList.toggle("selected");

            row = parseInt(row);
            col = parseInt(col);

            let value = this.soundArray[row][col];

            if (value === false) {
                value = true;
            } else {
                value = false;
            };

            this.soundArray[row][col] = value

            // console.log(this.soundArray);
        })
        
    }

    sequencer() {
        const kick = document.querySelector(".kick")
        
        let synth1 = new Tone.Synth().toDestination();
        let drumNotes = ['C0', 'C1', 'C2', 'C3']

        Tone.Transport.scheduleRepeat(time => {
            repeat(time);
        }, '8n');

        let index = 0

        function repeat (time) {
            let drum = drumNotes[index % drumNotes.length]
            synth1.triggerAttackRelease( drum , '8n', time);
            index++
        } 

        kick.addEventListener('click', (event) => {
            event.preventDefault();
            
            Tone.Transport.start();

            Tone.start();
        });

        const snare = document.querySelector(".snare");

        snare.addEventListener('click', (event) => {
            event.preventDefault();
            
            synth1.triggerAttackRelease('C4', '8n');
        });

        const pause = document.querySelector('.pause');

        pause.addEventListener('click', (ev) => {
            ev.preventDefault();
            Tone.Transport.stop();
        })
    }

    setupSynth() {
        console.log('setupSynth is firing')
    }
}

export default Synth;

// synth1.triggerAttackRelease('C4', '8n');

// synth1.triggerAttackRelease('D1', '8n');

// synth1.triggerAttackRelease('E#', '8n');

// synth1.triggerAttackRelease('G1', '8n');