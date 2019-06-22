
class CountDownClock {
    constructor(number = 100, format = 'seconds') {
        this.number = number;
        this.format = format;
        this.countdown = null;
        this.daysElement = document.querySelector('.days');
        this.hoursElement = document.querySelector('.hours');
        this.minutesElement = document.querySelector('.minutes');
        this.secondsElement = document.querySelector('.seconds');
    }

    start() {
        switch(this.format) {
            case 'seconds':
                return this.timer(this.number);
            case 'minutes':
                return this.timer(this.number * 60);
            case 'hours':
                return this.timer(this.number * 60 * 60);
            case 'days':
                return this.timer(this.number * 60 * 60 * 24);
        }
    }

    timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        this.countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(this.countdown);
                return;
            }

            this.displayTimeLeft(secondsLeft);

        }, 1000);
    }

    displayTimeLeft(seconds) {
        this.daysElement.textContent = Math.floor(seconds / 86400).toString();
        this.hoursElement.textContent = Math.floor((seconds % 86400) / 3600).toString();
        this.minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60).toString();
        this.secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }

}