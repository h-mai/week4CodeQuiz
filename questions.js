
//list questions

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts" //2
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses" //2
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above" //3
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes" //2
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log" //4
    },
]

//document elements/ids 
var timerDiv = document.getElementById("timer");
var startScreenDiv = document.getElementById("quizDiv");
var startTimeBtn = document.getElementById("startTime");
var answersList = document.createElement("ul");
var ansDisplay = document.getElementById("answersDiv")

//names of answers 
var quizChoices;
var qIndex = 0;

//timer
var timeRemaining = 91;
//penalty points
var penalty = 10;
//score
var score = 0;

//set timer and questions display

startTimeBtn.addEventListener("click", startTimer);

function startTimer() {

    var countdown = setInterval(function () {
        timeRemaining--;
        timer.textContent = "Time Left: " + timeRemaining;

        if (timeRemaining === 0) {
            clearInterval(countdown);
            timer.textContent = "Time's Up!";
        }
    }, 1000);

    displayQuestions(qIndex);
}

function displayQuestions(qIndex) {

    startScreenDiv.innerHTML = "";
    answersList.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {

        var quizChoices = questions[qIndex].choices;
        var quizTitle = questions[qIndex].title;
        startScreenDiv.textContent = quizTitle;
    }

    quizChoices.forEach(function (newItem) {

        var choiceList = document.createElement("li");
        choiceList.setAttribute("id", "button");

        choiceList.textContent = newItem;
        startScreenDiv.appendChild(answersList);
        answersList.appendChild(choiceList);
        choiceList.addEventListener("click", (answerCheck));

    })

}

function answerCheck(event) {

    var element = event.target;
    var ansDisplay = document.createElement("answersDiv");

    if (element.textContent === questions[qIndex].answer) {
        score++;
        score.textContent = "Score" + score;
        ansDisplay.textContent = "Correct! The answer is" + " " + questions[qIndex].answer;

    } else {
        ansDisplay.textContent = "Incorrect! The answer is" + " " + questions[qIndex].answer;
        timeRemaining = timeRemaining - penalty;

    }

    if (qIndex >= questions.length) {
        finishQuiz();
        ansDisplay.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        nextQuestion(qIndex);
    }

    answersList.appendChild(ansDisplay);

    function nextQuestion() {

        qIndex++;
        displayQuestions(qIndex);

    }

}
