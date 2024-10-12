const addBtn = document.querySelector(".add-btn");
const notesList = document.querySelector(".notes-list");
getData();
addBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let deleteImg = document.createElement("img");
    let textParagrph = document.createTextNode("Enter your Note");
    deleteImg.setAttribute("src", "images/delete.png");
    li.appendChild(p);
    li.appendChild(deleteBtn);
    p.className = "input-box";
    deleteBtn.className = "delete-btn";
    p.setAttribute("contenteditable", "true");
    p.appendChild(textParagrph);
    deleteBtn.appendChild(deleteImg);
    notesList.appendChild(li);
    saveData();
});

notesList.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.parentElement.remove();
        saveData();

    } else {
        let notes = document.querySelectorAll(".input-box");
        notes.forEach((e) => {
            // TODO "onkryup" method to save data after edit paragrph content
            e.onkeyup = _ => saveData();
        });
    }
});



function saveData() {
    localStorage.setItem("Data", notesList.innerHTML);
}

function getData() {
    notesList.innerHTML = localStorage.getItem("Data");
}