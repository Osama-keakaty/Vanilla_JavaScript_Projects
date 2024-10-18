const submitBtn = document.querySelector(".submit-btn");
const okBtn = document.querySelector(".ok-btn");
const card = document.querySelector(".card");

function okClicked(){
    card.style.display="none";
}
function submitClicked(){
    card.style.display="block";
}

window.addEventListener("presskey",(e)=>{
    if(  card.style.display=="block" && e.key =="Enter"){
        card.style.display="none";
        
    } else if (card.style.display=="none" && e.key =="Enter"){
        card.style.display="block";
    }
});