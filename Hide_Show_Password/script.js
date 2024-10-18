const hideBtn = document.getElementById("hide-btn");
const password = document.getElementById("password");
hideBtn.addEventListener("click",()=>{
    if(hideBtn.classList.contains("fa-eye-slash")){
        hideBtn.classList.remove("fa-eye-slash");
        hideBtn.classList.add("fa-eye");
        password.setAttribute("type","text");
        
    } else {
        password.setAttribute("type","password");
        hideBtn.classList.remove("fa-eye");
        hideBtn.classList.add("fa-eye-slash");

    }
});
