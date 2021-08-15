const Synth = require("./scripts/synth_skeleton.js");

document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector("body");

    new Synth(el);
})