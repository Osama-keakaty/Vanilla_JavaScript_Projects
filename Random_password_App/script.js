const generateBtn = document.querySelector(".generate-btn");
const passwordField=document.querySelector(".password-field");
const copyBtn = document.querySelector(".copy-btn");

// generate random password after click button
generateBtn.addEventListener("click",()=>{
const string="qwertyuiop[]{}lkjhgfdsazxcvbnm!@#$%^&*1234567890";
let password="";
for (let i=0;i<10;i++){
    let renNum=Math.floor(Math.random()*string.length);
    password+=string[renNum];
}
passwordField.value=password;   
});

copyBtn.addEventListener("click",()=>{
    // TODO copy text instruction
    navigator.clipboard.writeText(passwordField.value);
    
    passwordField.value="";
});

