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
        const play = document.querySelector(".play")
        let intervalId;

        play.addEventListener('click', (event) => {
            event.preventDefault();
            event.target.classList.toggle("playing");
            
            if(event.target.classList.contains("playing")) {
                // will need to make 250 into a variable so that user
                //can change the bpm 
                intervalId = setInterval(() => {
                    
                    let col = 0;
                    for (let row = 0; row < 5; row++) {
                        if(this.soundArray[row][col] === true) {
                            console.log([row, col]);
                        };

                        if (row === 4) row = 0;

                        if (col < 15) {
                            col += 1;
                        } else {
                            col = 0;
                        };
                    }

                }, 5000)
            };
           
            
        });
    }

    setupSynth() {
        console.log('setupSynth is firing')
    }
}

module.exports = Synth;