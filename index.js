class Timer {
    constructor(durationInput, startButton, pauseButton) {
        console.log('Here');
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start.bind(this)); // bind this to the instance of Timer not to strtButton
        console.log(this);

    }

    start() {
        console.log('Strt timer!');
        console.log(this);
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
timer.start();