# DeepSynth

## Background

DeepSynth is aimed at the producer or programmer low on cash and high on creativity. The overall idea is for you to be able to create your own unique tracks to use elsewhere, whether that be in a video you make, a game you create, or just to post to share with your friends and family. To create your own track choose a sound kit from the sound kit menue. This will assign sounds to a set of squares or pads. Use your mouse or mousepad and click on the pads, when a pad changes color you know that it has been selected. As you slecect pads you can press the play button to check on how your track is sounding and change sounds as you go. Once you've got your beat down you can press record and record a voice over. Now that you're finish creating your track use the email form at the bottom of the page to send your track to yourself. Check out [DeepSynth](https://sparsons808.github.io/DeepSynth/)


## Functionality & MVPS:

DeepSynth, will allow users to:

- Play their track using the play button
- Create their own track
- Choose from a list of sound kits
- Record their own voice or instrument using the record button
- Send their recording to themselves via email

## DeepSynth will include:

- An instruction dropdown that will include how to use the synthesizer
- A play button and record button
- A suite of sound kits
- A way to send a track to your email

## Wireframe

![c8d771d8-da8a-419c-b15e-85d2457b4193](https://user-images.githubusercontent.com/83877102/129408204-e1151e4d-d0b8-4ca0-95ae-fa9e5fbd0cb3.jpg)

## APIs and Technologies:

- Wed Audio API/tone.js to render audio and access sound
- Canvas to build the synthesizer
- Webpack and Bable to bundle JS code

## Code Snippet

'''javascript
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
                Tone.Transport.pause();
                playPause.classList.toggle('pause');
                playPause.classList.toggle('play');
            }
            
            
        });

        const bpmLevel = document.querySelector('.bpm');
        let val = bpmLevel.value;
        let bpmVal = parseInt(val);
        Tone.Transport.bpm.value = bpmVal

        bpmLevel.addEventListener('change', (event) => {
            let rate = event.target.value;
            bpmVal = parseInt(rate);
            Tone.Transport.bpm.rampTo(bpmVal, 0.2);
        })

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

        
    }

'''

## Timeline
 
 - Friday: Research Web Audio, tone.js, and canvas. Setup git repo and my project.
 - Sunday: Finsh research and start implimenting what I've learned.
 - Monday: Start creating the sound logic decide wether I need a backend or not, get a basic drum pad to display.
 - Tuesday: Setup play and record, get more complicated synth to display and play.
 - Wednesday: Setup and finish being able to send a users track to their email
 - Thursday: DeepSynth complete and ready for users.

## Bonus

- Allow users to not only record but upload their own sound kits.
- Allow users to create their own profile to store their tracks to work on at a later date.
- Resizing so the syth can fit on a phone and allow for touch screen play.
 
