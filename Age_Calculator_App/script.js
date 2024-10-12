const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");
const calculateBtn= document.querySelector(".calculate-btn");
const dateField=document.querySelector(".date");
const Result = document.querySelector(".Result");

let dateNow = new Date();

calculateBtn.addEventListener("click",()=>{

if (dateField.value!=""){
    let birthday = new Date(`${dateField.value}`);
    let y2 = birthday.getFullYear();
    let m2 = birthday.getMonth() +1;
    let d2 = birthday.getDay() ;
    let y1 = dateNow.getFullYear();
    let m1 = dateNow.getMonth() +1;
    let d1 = dateNow.getDay();
    let y3,m3,d3;
    y3=y1-y2;
    if (m1>=m2){
        m3 = m1-m2;
    } else {
        y3--;
        m3= 12 +m1 -m2;
    }
    if (d1>=d2){
        d3 = d1-d2;
    } else {
        m3--;
        d3 = getDaysInMonth(y1,m1)+d1-d2;
    }
    if (m3<0){
        m3=11;
        y3--;
    }
    
    
    
    years.innerHTML=`${y3}`;
    months.innerHTML=`${m3}`;
    days.innerHTML=`${d3}`;
    Result.style.display="block";
}

});

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate;
}