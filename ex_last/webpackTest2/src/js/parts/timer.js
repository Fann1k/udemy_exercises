function timer() {
    //Timer
    let deadline = '2019-03-27';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor(t / 1000 % 60),
            minutes = Math.floor(t / 1000 / 60 % 60),
            hours = Math.floor(t / 1000 / 60 / 60 % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    }

    function setClock(id, endtime) {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let a = getTimeRemaining(endtime);
            if (a.seconds < 10) {
                a.seconds = '0' + a.seconds;
            }
            if (a.minutes < 10) {
                a.minutes = '0' + a.minutes;
            }
            if (a.hours < 10) {
                a.hours = '0' + a.hours;
            }
            hours.textContent = a.hours;
            minutes.textContent = a.minutes;
            seconds.textContent = a.seconds;
            days.textContent = a.days;

            if (a.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                days.textContent = '0';
            }
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;