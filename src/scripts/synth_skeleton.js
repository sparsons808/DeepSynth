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

            console.log(this.soundArray);
        })
        
    }

    setupSynth() {
        console.log('setupSynth is firing')
    }
}

module.exports = Synth;