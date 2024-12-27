/* setInterval(function() {
    let date = new Date()
    text.textContent = date 
}, 1000)




let date1 = new Date()
let text = document.querySelector('.text')



let date = Date.now()
console.log(date)
let time = Date.parse('2024-12-25T20:28:56')
console.log(time)

let date2 = new Date('2022, 10, 23, 20, 23, 15, 197')
console.log(date2) */
/* 
 let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let weekDay = date.getDay();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let milSec = date.getMilliseconds();


let yearHtml = document.createElement('p');
document.body.appendChild(yearHtml);
yearHtml.textContent = milSec;
yearHtml.classList.add("year__style")


let title = document.createElement('h1');
document.body.appendChild(title);

setInterval(() => {
    let date = new Date();
    title.textContent = date;
}, 1000); 
 */


function startCountdown(selector, endTime) {
    const timerEl = document.querySelector(selector);

    const daysEl = timerEl.querySelector('[data-value="days"]');
    const hoursEl = timerEl.querySelector('[data-value="hours"]');
    const minsEl = timerEl.querySelector('[data-value="mins"]');
    const secsEl = timerEl.querySelector('[data-value="secs"]');

    const updateTimer = () => {
        const now = Date.now();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minsEl.textContent = "00";
            secsEl.textContent = "00";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minsEl.textContent = String(mins).padStart(2, '0');
        secsEl.textContent = String(secs).padStart(2, '0');
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); 
}

const endTime = Date.now() + 24 * 60 * 60 * 1000;
startCountdown('#timer-1', endTime);


