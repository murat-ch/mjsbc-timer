class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click',
            this.start
            // this.start.bind(this) // bind 'this' to the instance of Timer not to startButton
        );
        this.pauseButton.addEventListener('click', this.pause);

    }
    /*
    Method with bind(this) in EventListener

    start() {
        console.log('Start timer!');
        console.log(this);
    }
*/
    // Arrow function doesn't have 'this' context
    // so we can call instance method, not startButton
    // Method without bind(this) in EventListener

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };

    tick = () => {
        if (this.timeRemaining <= 0) {

            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 1;
            if (this.onTick) {
                this.onTick();
            }
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time) {
        this.durationInput.value = time;
    }

    pause = () => {
        clearInterval(this.interval);
    };
}