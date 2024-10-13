const generateBtn = document.querySelector(".generate-btn");
const qrText = document.querySelector(".text");
const qrImg = document.querySelector(".image");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
generateBtn.addEventListener("click", generateQR);

qrText.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        generateQR();
    }
});

function generateQR() {
    if (qrText.value!=""){
        let response = api + qrText.value;
        qrImg.src = response;
        qrImg.style.display = "block";
        qrText.value = "";
    }

}