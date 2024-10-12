const inputBox = document.getElementById("input-box");
const taskButton= document.querySelector(".task-btn");
const listContainer=document.querySelector(".list-container");


// add event listener when the button is clicked
taskButton.addEventListener("click",()=>{

    // check if the input box is not empty
    if (inputBox.value.trim()===""){
        alert("Please enter your task");
    } else {
        let listItem = document.createElement("li");
        let listItemContent=document.createTextNode(inputBox.value);
        listItem.appendChild(listItemContent);
        listContainer.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        listItem.appendChild(span);
        inputBox.value=" ";
        saveData();
    }  
});


// add event listener when the task or x symbol is clicked
listContainer.addEventListener("click",(e)=>{
    //check if the element that was clicked is li  
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
        //check if the element that was clicked is span 
    } else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

// saving the tasks in local storage 
function saveData(){
    // TODO new way to save Data in local Storage. 
    localStorage.setItem("tasks",listContainer.innerHTML);
}
// display the tasks in web page
function showData(){
    listContainer.innerHTML=localStorage.getItem("tasks");
}
showData();
