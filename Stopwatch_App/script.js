const play = document.getElementById('play');
const stop = document.getElementById('stop');
const repeat = document.getElementById('repeat');
let zero = "0";
let hours = zero + 0;
let minutes = zero + 0;
let seconds = zero + 0;
let timer;
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
play.parentElement.addEventListener("click", () => {
    if (play.classList.contains("fa-play")) {
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
        startTime();
    } else {
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        clearInterval(timer);
    }
});
stop.parentElement.addEventListener("click", () => {
    resetTimer();
    play.classList.add("fa-play");
    play.classList.remove("fa-pause");

});


repeat.parentElement.addEventListener("click", () => {
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    resetTimer();
    startTime();
});

function startTime() {
    // TODO if we didn't declare the variable in local function, we can use it in global scope.
    timer = setInterval(() => {
        seconds++;
        seconds = zero + seconds;
        if (seconds > 9) {
            seconds = seconds - zero;
        }
        if (seconds > 59) {
            seconds = zero + 0;
            minutes++;
            minutes = zero + minutes;
            if (minutes > 9) {
                minutes = minutes - zero;

            }
            if (minutes > 59) {
                minutes = zero + 0;
                hours++;
                if (hours < 10) {
                    hours = zero + hours;
                }
            }
        }
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
    }, 1000);
} 

function resetTimer(){
    clearInterval(timer);
    hours = zero + 0;
    minutes = zero + 0;
    seconds = zero + 0;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}