const questions = [
    {question: "which the largest Animal in the world?",
    answers : [
        {text:"shark", correct:false},
        {text:"blue whale", correct:true},
        {text:"Elephant", correct:false},
        {text:"Giraffe", correct:false},
    ]
    } , 
    {question: "which the smallest country in the world?",
        answers : [
            {text:"vatican City", correct:true},
            {text:" bhutan", correct:false},
            {text:"Nepal", correct:false},
            {text:"Shri lanka", correct:false},
        ]

    } , 
    {question: "which the largest desert in the world?",
        answers : [
            {text:"Kalahari", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Antarctica", correct:true},
        ] },
    {question: "which the largest continent in the world?",
        answers : [
            {text:"Asia", correct:true},
            {text:"Africa", correct:false},
            {text:"Arctic", correct:false},
            {text:"Australia", correct:false},
        ] },
];

const questionElements = document.querySelector('.Question');
const answerButtons = document.querySelector('.answer-buttons');
const nextButtons = document.querySelector('.next');
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButtons.innerHTML="Next";
    showQuestion();
}

function  showQuestion(){
let currentQuestion = questions[currentQuestionIndex];
let questionNum = currentQuestionIndex+1;
questionElements.innerHTML=questionNum+". "+currentQuestion.question;
currentQuestion.answers.forEach(answer =>{
let button = document.createElement("button");
button.innerHTML=answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
nextButtons.style.display="block";
if(answer.correct){
    button.dataset.correct =answer.correct;
}
button.addEventListener("click",(e)=>{
    let SelectedButton= e.target;
    let isCorrect=SelectedButton.dataset.correct ==="true";
    if(isCorrect){
        SelectedButton.classList.add("correct");
        score++;
    } else {
        SelectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
            
        }
        button.disabled=true;
    });
});
});
}
startQuiz();

nextButtons.addEventListener("click",()=>{
if (currentQuestionIndex<3){
    currentQuestionIndex+=1;
    answerButtons.innerHTML="";
    nextButtons.style.display="none";
    showQuestion();
} else if (currentQuestionIndex===3){
    currentQuestionIndex+=1;
    nextButtons.innerHTML="Reset";
    answerButtons.innerHTML="";
    questionElements.innerHTML=`Your score is ${score}/4`;

} else {
    startQuiz();
}
});
