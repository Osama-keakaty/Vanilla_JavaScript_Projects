let speech = new SpeechSynthesisUtterance();
let voices = [];
const select = document.querySelector(".select");
const textErea = document.getElementById("text");
const speechBtn = document.querySelector(".speech-btn");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((el, i) => {
        select.options[i] = new Option(el.name, i);
    });
};
select.addEventListener("change", (e) => {
    speech.voice =voices[e.target.value];
    console.log(e.target.value)
});

speechBtn.addEventListener("click", () => {
    speech.text = textErea.value;
    window.speechSynthesis.speak(speech);
});