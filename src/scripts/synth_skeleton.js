class Synth {
    constructor (el) {
        // this.soundKit = soundKit;
        this.el = el;
        this.setupSynth();
        this.handleClick();
        console.log('constructor is firing')
    }

    handleClick() {
        const ele = document.querySelector("#synth-grid");

        ele.addEventListener("click", (event) => {
            event.preventDefault();
            const row = event.target.parentElement.getAttribute("data-row");
            const col = event.target.getAttribute("data-col");

            console.log([parseInt(row), parseInt(col)]);
        })
        console.log(ele);
    }

    setupSynth() {
        console.log('setupSynth is firing')
    }
}

module.exports = Synth;