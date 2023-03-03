//List all questions, choices and answers
var questions = [
    {
        questionText: "What Section of the HTML file can a JavaScript file be added?"
        choices: [
            "1. The <body> section ",
            "2. The <head> section",
            "3. The <meta> section",
            "4. Both the <body> and <head> sections",
        ],
        answer: "4. Both the <body> and <head> sections",
    },
    {
        questionText: "Inside which HTML element is JavaScript stored?"
        choices: [
            "1. <js> ",
            "2. <head>",
            "3. <script>",
            "4. None of the above",
        ],
        answer: "3. <script>",
    },
    {
        questionText: "What is a useful syntax/tool to use in JavaScript to print content on browser console to check for errors?"
        choices: [
            "1. console.log ",
            "2. ConsoleLog()",
            "3. CoLog",
            "4. JavaScript",
        ],
        answer: "1. console.log", 
    },
    {
        questionText: "Arrays can be used to store __________ "
        choices: [
            "1. Numbers ",
            "2. Strings",
            "3. Boolean",
            "4. All of the Above",
        ],
        answer: "4. All of the Above", 
    },
    {
        questionText: "What is getItem commonly used for? "
        choices: [
            "1. Naming an object ",
            "2. Local Storage",
            "3. ToDo List",
            "4. Calling a function",
        ],
        answer: "2. Local Storage", 
    },
    {
        questionText: "What is the syntax to call a function? "
        choices: [
            "1. function() ",
            "2. function {}",
            "3. const Function()",
            "4. var = call function",
        ],
        answer: "1. function()", 
    },
    
];


// declaring global values for score and timer functions
var score =0;
var currentQuestion= -1;
var timeLeft = 0;
var timer;

//Function to start quiz, once start has been clicked then timer starts
function () {
    timeLeft = 100;
    document.getElementById("timer").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;

        //If timer reaches 0, game ends
        if (timeLeft <=0) {
            clearInterval(timer);
            endgame();
        }
    }, 1000);
}

//get Dom Elements/Define variables from HTML



//Set attributes as hidden

//