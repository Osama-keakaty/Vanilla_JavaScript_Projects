const submitBtn = document.querySelector(".submit-btn");
const submitError = document.querySelector("#submit-error");
const userName = document.querySelector(".name");
const nameError = document.querySelector("#name-error");
const phone = document.querySelector(".phone");
const phoneError = document.querySelector("#phone-error");
const email = document.querySelector(".email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector(".message");
const messageError = document.querySelector("#message-error");

submitBtn.addEventListener("click", () => {
    validateName();
    validateNumber();
    validateEmail();
    validateMessage();
    if(checkEmpty(userName) || checkEmpty(phone) || checkEmpty(email) || checkEmpty(message)){
        submitErrorMsg();
    }
});

function checkEmpty(field) {
    return field.value == "" ? true : false;
}
function submitErrorMsg() {
    submitError.style.visibility = "visible";
    setTimeout(() => submitError.style.visibility = "hidden", 3000);
}

function checkContent(value) {
    if (value == userName) {
        return userName.value.match(/\w+ .\w/gi);
    }
}

function validateName() {
    if (checkEmpty(userName)) {
        nameError.innerHTML = "Name is required";
    } else if (!userName.value.match(/\w+ \w/gi)) {
        nameError.innerHTML = "Full Name please";
    } else {
        nameError.innerHTML = "";
    }
}
function validateNumber() {
    if (checkEmpty(phone)) {
        phoneError.innerHTML = "Phone Number is required";
    } else if (phone.value.match(/\+\d{1,3} \d{9}/gi)) {
        phoneError.innerHTML = "";
    } else {
        phoneError.innerHTML = "Number is invalid";

    }
}
function validateEmail() {
    if (checkEmpty(email)) {
        emailError.innerHTML = "Email is required";
    } else if (email.value.match(/\w+@\w+\.\w+/gi)) {
        emailError.innerHTML = "";
    } else {
        emailError.innerHTML = "Email is invalid";

    }
}
function validateMessage() {
    if (checkEmpty(message)) {
        messageError.innerHTML = "30 characters message is required";
    } else if (message.value.match(/.{30,}/gi)) {
        messageError.innerHTML = "";
    } else {
        messageError.innerHTML = `${30-message.value.length} more characters required`;

    }
}