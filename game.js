const question = document.getElementById("question");
const choices = Array.from( document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choiceone: "<script>",
        choicetwo: "<javascript>",
        choicethree: "<js>",
        choicefour: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choiceone: "<script href ='xxx.js'>",
        choicetwo: "<jscript name ='xxx.js'>",
        choicethree: "<script src ='xxx.js'>",
        choicefour: "<script file ='xxx.js'>",
        answer: 3
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choiceone: "<msgBox('Hellow World');>",
        choicetwo: "<alertBox('Hellow World');>",
        choicethree: "<msg('Hellow World');>",
        choicefour: "<alert('Hellow World');>",
        answer: 4
    }
];

//constants
const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [question]; 
    getNewQuestions();  
};

getNewQuestions=()=>{
    questionCounter++;
    const questionIndex = Math.floor(Math.random() + availableQuestions.length);
    currentQuestion= availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
};

startGame();

