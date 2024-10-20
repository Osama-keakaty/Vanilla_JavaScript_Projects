const sendBtn = document.querySelector(".send-btn");
const imgBtn = document.querySelector(".img-btn");
const input = document.querySelector(".Input");
const thankMsg = document.querySelector(".thank-msg");
const scriptURL = 'https://script.google.com/macros/s/AKfycby0Ctjo6niCeZ_4Aso5DFT3-eDie52BE_BhokqekKLGHM0EEcpADxMqcTVZZgMW8Rzk/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        sendBtn.addEventListener("click",()=>{
            imgBtn.style.cssText=`animation: sending 2s linear;`;
            thankMsg.style.visibility ="visible";
            setTimeout(()=>{
                imgBtn.style.removeProperty("animation");
                thankMsg.style.visibility ="hidden";
            },2000); 
            input.value="";
            console.log('Success!', response)
            });
    } ).catch(error => console.error('Error!', error.message))
})
