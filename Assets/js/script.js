//List all questions, choices and answers
var questions = [
    {
        prompt: "What Section of the HTML file can a JavaScript file be added?",
        options: [
            "The <body> section ",
            "The <head> section",
            "The <meta> section",
            "Both the <body> and <head> sections",
        ],
        answer: "Both the <body> and <head> sections",
    },
    {
        prompt: "Inside which HTML element is JavaScript stored?",
        options: [
            "<js> ",
            "<head>",
            "<script>",
            "None of the above",
        ],
        answer: "<script>",
    },
    {
        prompt: "What is a useful syntax/tool to use in JavaScript to print content on browser console to check for errors?",
        options: [
            "console.log",
            "ConsoleLog()",
            "CoLog",
            "JavaScript",
        ],
        answer: "console.log", 
    },
    {
        prompt: "Arrays can be used to store __________ ",
        options: [
            "Numbers ",
            "Strings",
            "Boolean",
            "All of the Above",
        ],
        answer: "All of the Above", 
    },
    {
        prompt: "What is getItem commonly used for? ",
        options: [
            "Naming an object ",
            "Local Storage",
            "ToDo List",
            "Calling a function",
        ],
        answer: "Local Storage", 
    },
    {
        prompt: "What is the syntax to call a function? ",
        options: [
            "function()",
            "function {}",
            "const Function()",
            "var = call function",
        ],
        answer: "function()", 
    },
    
];


//Get DOM Elements
var questionsA = document.querySelector("#questions");
var timerA = document.querySelector("#timer");
var choicesA = document.querySelector("#options");
var submitBtn = document.querySelector("#submit-score");
var startBtn = document.querySelector("#start");
var nameA = document.querySelector("#userName");
var resultA = document.querySelector("#result");

// declaring global values for score and timer functions
var currentQuestionIndex= 0;
var time = questions.length * 15;
var timerId;

//onclick button to start quiz
startBtn.onclick = StartQuiz;

//Function to start quiz, once start has been clicked then timer starts and front page disappears
function StartQuiz() {
    timerId = setInterval(clockTick, 1000);
    timerA.textContent = time;
    var landingScreen = document.getElementById("start-screen");
    landingScreen.setAttribute("class", "hide");
    questionsA.removeAttribute("class");
    getQuestion();

}

// Loop through listed questions and create list with buttons

function getQuestion() {
    var currentQuestion= questions[currentQuestionIndex];
    var promptE = document.getElementById("question-words")
    promptE.textContent = currentQuestion.prompt;
    choicesA.innerHTML = "";
    currentQuestion.options.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + " . " + choice;
        choiceBtn.onclick= playGame;
        choicesA.appendChild(choiceBtn);
    });
   
}
    
//Checks for right answer, if the wrong answer is selected time is deducted

function playGame() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerA.textContent = time;
        resultA.textContent = "Incorrect";
        resultA.getElementsByClassName.color ="black";
    } else {
        resultA.textContent = "Correct!";
        resultA.style.color = "black";
    }
    resultA.setAttribute("class", "result");
    setTimeout(function() {
        resultA.setAttribute("class", "hide-result");
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
 }

 //Quiz will when the timer stops and the final score appears

 function quizEnd() {
    clearInterval(timerId);
    var endScreen = document.getElementById("quiz-end");
    endScreen.removeAttribute("class");
    var finalScore= document.getElementById("final-score");
    finalScore.textContent = time;
    questionsA.setAttribute("class", "hide");
    resultA.textContent = "";
 }

 function clockTick() {
    time--;
    timerA.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
 }

 //Store user initials and score when submit-score button is clicked
 function saveHighscore() {
    var name = nameA.value.trim();
    if (name !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
            score: time,
            name: name
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores",JSON.stringify(highscores));
    }
 }

 //Save score after pressing enter

 function checkEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
        alert("Name has been submitted! Check out the Highscore board!");
    }
 }
 nameA.onkeyup= checkEnter;

 //Save score after pressing submit

 submitBtn.onclick = saveHighscore;


