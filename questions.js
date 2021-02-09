
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
var scoreDiv = document.getElementById("score");
var startScreenDiv = document.getElementById("quizDiv");
var startTimeBtn = document.getElementById("startTime");
var answersList = document.getElementById("answersList");
var ansDisplay = document.getElementById("answersDiv");
var quesDisplay = document.getElementById("questions");
var intro = document.getElementById("intro");


//names of answers 
var qIndex = 0;
//timer
var timeRemaining = 91;
var timer;
//penalty points
var penalty = 10;
//score
var score = 0;

//set timer and questions display
startTimeBtn.addEventListener("click", startTimer);

function startTimer() {
    intro.style.display = "none";

    timer = setInterval(function () {
        timeRemaining--;
        timerDiv.textContent = "Time Left: " + timeRemaining;


        if (timeRemaining === 0) {
            clearInterval(timer);
            timerDiv.textContent = "Time's Up!";

        }

    }, 1000);

    displayQuestions(qIndex);
}

//questions display function 

function displayQuestions(qIndex) {

    answersList.innerHTML = "";
    quesDisplay.innerHTML = "";

    var choices = questions[qIndex].choices;
    var quizTitle = questions[qIndex].title;
    quesDisplay.textContent = quizTitle;


    choices.forEach(function (newItem) {

        var choiceList = document.createElement("li");
        choiceList.setAttribute("id", "button");

        choiceList.textContent = newItem;
        //startScreenDiv.appendChild(answersList);
        answersList.appendChild(choiceList);
        choiceList.addEventListener("click", (answerCheck));

    })

}
// next question 
function nextQuestion() {
    qIndex++
    displayQuestions(qIndex);
}
// stopping quiz and pausing timer - prompting results for user
function stopQuiz() {

    startScreenDiv.textContent = "All Done! You got " + score + " out of 5";

    if (timeRemaining >= 0) {
        var finalTime = timeRemaining;
        clearInterval(timer);
        timerDiv.textContent = "Your final score is: " + finalTime;
    }


}

//comparing answers 
function answerCheck(event) {

    var element = event.target;

    if (element.textContent === questions[qIndex].answer) {
        score++;
        scoreDiv.textContent = "Score: " + score + " out of 5";

        ansDisplay.textContent = "Correct! The answer is" + " " + questions[qIndex].answer;

    } else {
        ansDisplay.textContent = "Incorrect! The answer is" + " " + questions[qIndex].answer;
        timeRemaining = timeRemaining - penalty;

    }

    if (qIndex === questions.length - 1) {
        stopQuiz();
        submitScore();

    } else {
        nextQuestion(qIndex);

    }
};




