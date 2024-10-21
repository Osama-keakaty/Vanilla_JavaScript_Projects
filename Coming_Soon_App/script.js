const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let zero = "0";
let dayValue = zero + 24;
let hourValue = zero + 10;
let minuteValue = zero + 48;
let secondValue = zero + 40;
if (secondValue >= 10) {
    secondValue = secondValue - zero;
}
if (minuteValue >= 10) {
    minuteValue = minuteValue - zero;
}
if (hourValue >= 10) {
    hourValue = hourValue - zero;
}
if (dayValue >= 10) {
    dayValue = dayValue - zero;
}
days.innerHTML = dayValue;
hours.innerHTML = hourValue;
minutes.innerHTML = minuteValue;
seconds.innerHTML = secondValue;
window.onload = () => {
    let interval = setInterval(() => {
        secondValue--;
        if (secondValue < 10) {
            secondValue = zero + secondValue;
        }
        if (secondValue == "0-1") {
            secondValue = 59;
            minuteValue--;
            if (minuteValue < 10) {
                minuteValue = zero + minuteValue;
            }
            if (minuteValue == "0-1") {
                minuteValue = 59;
                hourValue--;
                if (hourValue < 10) {
                    hourValue = zero + hourValue;
                }
                if (hourValue == "0-1") {
                    hourValue = 23;
                    dayValue--;
                    if (dayValue < 1) {
                        clearInterval(interval);
                        dayValue = zero + 0;
                        hourValue = zero + 0;
                        minuteValue = zero + 0;
                        secondValue = zero + 0;
                    }
                }
            }

        }
        days.innerHTML = dayValue;
        hours.innerHTML = hourValue;
        minutes.innerHTML = minuteValue;
        seconds.innerHTML = secondValue;
    }, 1000);
};