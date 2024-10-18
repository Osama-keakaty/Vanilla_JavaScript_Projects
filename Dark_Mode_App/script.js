const themeIcon = document.querySelector(".theme-ico");
const root = document.querySelector(":root");
themeIcon.addEventListener("click",()=>{
    if(themeIcon.getAttribute("src") == "images/moon.png"){
        themeIcon.setAttribute("src","images/sun.png")
        root.style.setProperty('--background-color', '#000');
        root.style.setProperty('--text-color', '#fff');
    } else {
        themeIcon.setAttribute("src","images/moon.png")   
        root.style.setProperty('--background-color', '#fff');
        root.style.setProperty('--text-color', '#000');
    }
});