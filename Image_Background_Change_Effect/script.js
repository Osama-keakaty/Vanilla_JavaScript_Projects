const mainImg= document.querySelector(".img-modified");
const originalImg= document.querySelector(".img-original");
const original = document.getElementById("original");
const arrowMove = document.querySelector(".arrow-move");
// get the offset between the first point of page to the img
original.style.width = mainImg.offsetWidth + "px";
let leftSpace =mainImg.offsetLeft;
mainImg.onmousemove= (e)=>{
let boxWidth =(e.pageX - leftSpace) + "px";
originalImg.style.width=boxWidth;
arrowMove.style.left=boxWidth;

};