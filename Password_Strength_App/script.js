const root = document.querySelector(":root");
const message = document.querySelector(".message");
const passwordField = document.getElementById("password");

function passwordStrength() {
    if (passwordField.value.length == 0) {
        root.style.setProperty("--main-color", "#444");
        message.innerHTML = "password";
        message.style.visibility = "hidden";
    } else if (passwordField.value.length < 8) {
        root.style.setProperty("--main-color", "#f00");
        message.innerHTML = "Password is weak";
        message.style.visibility = "visible";
    } else if (passwordField.value.match(/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).*/gi)) {
        root.style.setProperty("--main-color", "#0f0");
        message.style.visibility = "visible";
        message.innerHTML = "Password is Strong";

    }else if (passwordField.value.match(/\d+|\w+/gi)) {
        root.style.setProperty("--main-color", "#FFFF00");
        message.innerHTML = "Password is medium";
        message.style.visibility = "visible";
    }

}