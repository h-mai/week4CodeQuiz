//rendering highscores from local storage 
var topScoresContainer = document.getElementById("topScores");
var clearScore = document.getElementById("clearScores");
var highScores = localStorage.getItem("highscores");

if (highScores) {

    renderHighScores();

    function renderHighScores() {

    JSON.parse(highScores).forEach(highscore => {
        var highscoresList = document.createElement("ul");
        highscoresList.setAttribute("id", "highscoresDiv");
        highscoresList.textContent = `Name:    ${highscore.initials} Score:    ${highscore.score}`;
        topScoresContainer.append(highscoresList);
    
    });
}
}
//create clearscore button to return all local storage data as an empty array
clearScore.addEventListener("click", function () {

    localStorage.setItem("highscores", "[]");
    
    topScoresContainer.innerHTML = "";
})