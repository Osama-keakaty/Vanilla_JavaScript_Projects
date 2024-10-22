const listItems = document.querySelectorAll("li p");
const selectBar = document.querySelector(".select-bar");
const selectBarContent = document.querySelector(".select-bar-content");
const list = document.querySelector(".list");
listItems.forEach((e)=>{
    e.addEventListener("click",()=>{
        selectBarContent.innerHTML = e.innerHTML;
        list.style.visibility="hidden";
    });
})

selectBar.addEventListener("click",()=>{
    list.style.visibility="visible";
});