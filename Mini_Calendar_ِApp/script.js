
let now = new Date();
document.querySelector(".num-day").innerHTML = now.getDate();
document.querySelector(".weekday-name").innerHTML = now.toLocaleString('default', { weekday: 'long' });
document.querySelector(".month-name").innerHTML = now.toLocaleString('default', { month: 'long' });
document.querySelector(".year").innerHTML = now.getFullYear();