const toastBox = document.querySelector(".toast-box");
let successMsg = "Successfully submitted";
let errorMsg = " please fix the Error!";
let invalidMsg = "invalid input, please check again";
async function showToast(value){
    let toast = document.createElement("div");
    toast.innerHTML=value;
    toast.classList.add(`toast`);
    if (value===successMsg){
        toast.classList.add(`toast`,`success`);
        
    } else if(value === errorMsg){
        toast.classList.add(`toast`,`error`);
        
    } else {
        toast.classList.add(`toast`,`invalid`);
        
    }
    toastBox.appendChild(toast);
    setTimeout( ()=>{
        toast.style.display="none";
        toast.remove();
    },5000);
}
