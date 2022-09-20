import CountDown from './countDown.js'

// Get the new year 
const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date(`September 21 2022 14:15:00`);
};

// update the year element
const year = document.querySelector('.year');
year.innerHTML = getNewYear().getFullYear();

// select elements
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');


const format = (t) => {
    // t = 5
    const tiempo = t < 10 ? '0' + t : t;
    // tiempo = 05
    const caracteres = tiempo.toString().split('')
    // caracteres = ['0', '5']
    let render = ''

    caracteres.forEach(valor => {
        render += `<span class="clase-tiempo">${ valor }</span>`
    })

    return render
};

const render = (time) => {
    app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="days">${format(time.days)}</h2>
                <small>Days</small>
            </div>
            <div class="timer">
                <h2 class="hours">${format(time.hours)}</h2>
                <small>Hours</small>
            </div>
            <div class="timer">
                <h2 class="minutes">${format(time.minutes)}</h2>
                <small>Minutes</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Seconds</small>
            </div>
        </div>
        `;
};

const complete = () => {
    showMessage();

    // restart the countdown after showing the 
    // greeting message for a day ()
    setTimeout(() => {
        hideMessage();
        countdownTimer.setExpiredDate(getNewYear());
    }, 1000 * 60 * 60 * 24);
};

const showMessage = () => {
    alert('Tiempo terminado!!')
}

const countdownTimer = new CountDown(
    getNewYear(),
    render,
    complete
);